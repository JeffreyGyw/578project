setInterval(function(){
        $.get("http://sample-env-1.cegpykp7aq.us-east-1.elasticbeanstalk.com?userid=133", function(data) {
	    	if(data.modified=="true"){
				for (var i = 0; i < data.results.length; i++) {
					console.log(data.results[i]); 
					var notification = chrome.notifications.create('Notification', { 
					type: "basic", 
					iconUrl: "icon.png",
					title: "Change detected!",
					message: "HTML ID: " + data.results[i].elementid + " at URL: " + data.results[i].url,
					}, 
						function(id) {
								if(chrome.runtime.lastError) {
								console.error(chrome.runtime.lastError.message);
								}
						}
					);
				}
	    	}
	    });
}, 6000);