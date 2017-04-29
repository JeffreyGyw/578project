$(document.body).on('click', function(event) {
	alert("You have monitored this");

    console.log(event.target.id + ", " + event.target.className + ", " + event.target.tagName+","+event.target.innerHTML);
});

// $(document.body).on('mouseover', function(event) {
// 	$(event.target).css('background-color', 'red');
// });

// $(document.body).on('mouseleave', function(event) {
// 	$(event.target).css('background-color', 'white');
// });

$(document.body).children().mouseover(function(e){
    $(".hova").removeClass("hova");     
    $(e.target).addClass("hova");
  return false;
}).mouseout(function(e) {
    $(this).removeClass("hova");
});


