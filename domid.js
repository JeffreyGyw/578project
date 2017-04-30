$(document.body).on('click', function(event) {
	alert("You have monitored this");
	console.log(window.location.href);
	var obj = new Object();
	obj.id = event.target.id;
	obj.className = event.target.className;
	obj.tagName = event.target.tagName;
	obj.url = window.location.href;
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
	// chrome.storage.local.clear()
});

// $(document.body).on('mouseover', function(event) {
// 	$(event.target).css('background-color', 'red');
// });

// $(document.body).on('mouseleave', function(event) {
// 	$(event.target).css('background-color', 'white');
// });

$(document.body).children().mouseover(function(e){
    // $(".hova").removeClass("hova");     
    // $(e.target).addClass("hova");
    $(e.target).css("background-color", "yellow");
  return false;
}).mouseout(function(e) {
    // $(this).removeClass("hova");
    $(e.target).css("background-color", "white");
});


