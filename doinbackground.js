setInterval(function(){
        $.get("http://sample-env-1.cegpykp7aq.us-east-1.elasticbeanstalk.com?userid=1338", function(data) {
	    	if(data.modified=="true"){
				console.log(data); 
				var notification = chrome.notifications.create('Notification', { 
					type: "basic", 
					iconUrl: "icon.png",
					title: "Change detected!",
					message: "HTML ID: " + data.elementid + " at URL: " + data.url,
					}, 
						function(id) {
							if(chrome.runtime.lastError) {
							console.error(chrome.runtime.lastError.message);
							}
					}
				);
	    	}
	    });
}, 6000);