chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      (function(){

		var url = window.location + '/history';
		var req = new XMLHttpRequest();
		req.open('GET', url, false);
		req.send(null);
		if(req.status == 200) {
			if (req.responseText.indexOf('wordpress_honk') > -1) {
				// onderstaande code van de Edit in Honk bookmarklet
        var articleId = document.body.getAttribute('data-article-id');
        if (!articleId) {
          var m = location.pathname.match(/\-a(\d+)/);
          if (m) {
            articleId = m[1];
          }
        }
        var editUrl = 'https://honk.nrc.nl/bvhw/?nrc_action=hub2import&article_id=' + articleId + '&action=edit';
        if (editUrl) {
          window.open(editUrl, '_blank', null);
        }
			}
		else {
				alert('Dit artikel is nog niet geopend in Honk, bewerk het in GN4 tenzij het echt niet anders kan.');
			}
		}
	})();
 }
}
);
