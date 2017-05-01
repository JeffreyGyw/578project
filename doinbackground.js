setInterval(function(){
		console.log("WEEEEEE"); 
        $.get("http://sample-env-1.cegpykp7aq.us-east-1.elasticbeanstalk.com?userid=1337", function(data) {
	    	if(data.modified=="true"){
	    		alert("changed");
	    	}
	    });
}, 6000);