setYellowBackground = function(e){
    // $(".hova").removeClass("hova");     
    // $(e.target).addClass("hova");
    $(e.target).css("background-color", "yellow");
  return false;
};

setWhiteBackground = function(e) {
    // $(this).removeClass("hova");
    $(e.target).css("background-color", "white");
};

addToMonitored = function(event) {
	alert("You have monitored this");
	console.log(window.location.href);
	var obj = new Object();
	obj.elementid = event.target.id;
	obj.url = window.location.href;
    obj.elementclass = event.target.className;
    obj.elementname = event.target.tagName;
    obj.currentvalue = event.target.textContent;
    obj.userid = 1337;
    obj.update = 0;
	var jsonstring = JSON.stringify(obj);
	console.log(jsonstring);

    chrome.storage.local.get('monitors', function (result) {
    // the input argument is ALWAYS an object containing the queried keys
    // so we select the key we need
    	var monitors = result.monitors;
    	if(monitors==null) monitors = [];
    	monitors.push(obj);
    // set the new array value to the same key
    	chrome.storage.local.set({monitors: monitors}, function () {
        // you can use strings instead of objects
        // if you don't  want to define default values
        	chrome.storage.local.get('monitors', function (result) {
            	console.log(result.monitors);
        	});
    	});
	});
 // $.ajax({
 //   url: "http://sample-env-1.cegpykp7aq.us-east-1.elasticbeanstalk.com/",
 //   type: 'POST',
 //   contentType:'application/json',
 //   data: JSON.stringify(obj),
 //   dataType:'json'
 // });

    $.post( "http://sample-env-1.cegpykp7aq.us-east-1.elasticbeanstalk.com/", obj, function( data ) {
        console.log(data); 
    });

	// chrome.storage.local.clear()
	$(document.body).children().unbind('mouseover', setYellowBackground); 
	$(document.body).unbind('click', addToMonitored); 
	//$(document.body).children().unbind('mouseout'); 
};


$(document.body).on('click', addToMonitored);
$(document.body).children().mouseover(setYellowBackground).mouseout(setWhiteBackground);


