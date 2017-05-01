setInterval(function(){
        $.get("http://sample-env-1.cegpykp7aq.us-east-1.elasticbeanstalk.com/?userid=1",function(data){
	    	console.log(data);
	    	if(data.modified=="true"){
	    		
	    	}
	    });
}, 6000);