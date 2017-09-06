chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message === "clicked_browser_action") {
            (function() {
                var url = window.location + '/history';
                var req = new XMLHttpRequest();
                req.open('GET', url, false);
                req.send(null);
                if (req.status == 200) {
                    if (req.responseText.indexOf('wordpress_honk') > -1) {
                        openHonk();
                    } else {
                        var check = confirm('Dit artikel is niet eerder geopend in Honk. Bewerk het in GN4, tenzij dat echt niet anders kan.\n\nKlik op OK om deze dialoog te sluiten.\n\nWeet je zeker dat je toch in Honk verder wil werken? Klik dan op Cancel/Annuleren.');
                        if (check) {
                            return;
                        } else {
                            openHonk();
                        }
                    }
                }
            })();

        }
    });


function getEditUrl() {
    var articleId = document.body.getAttribute('data-article-id');
    if (!articleId) {
        var m = location.pathname.match(/\-a(\+d)/);
        if (m) {
            articleId = m[1];
        } else {
            console.log('Geen NRC-artikel-ID gevonden')
        }
    }
    return 'https://honk.nrc.nl/bvhw/?nrc_action=hub2import&article_id=' + articleId + '&action=edit';
}

function openHonk() {
    var l = getEditUrl();
    window.open(l, '_blank', null);
}
