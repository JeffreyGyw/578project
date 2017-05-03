setInterval(function(){
		console.log("WEEEEEE"); 
        $.get("http://sample-env-1.cegpykp7aq.us-east-1.elasticbeanstalk.com?userid=1337", function(data) {
	    	if(data.modified=="true"){
				var notification = chrome.notifications.create('Notification', { 
					type: "basic", 
					iconUrl: "icon.png",
					title: "Change detected!",
					message: "Test"
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