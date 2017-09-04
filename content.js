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
				alert('Dit artikel is al bewerkt in Honk. Niks meer aan te doen: updaten kan alleen nog in Honk/Wordpress.');
			}
		else {
				alert('Dit artikel is nog niet geopend in Honk, bewerk het in GN4 tenzij het echt niet anders kan.');
			}
		}
	})();
 }
}
);