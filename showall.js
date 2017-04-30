$(document).ready(function(){
    var myTableDiv = document.getElementById("metric_results");
console.log(myTableDiv);
var table = document.createElement('TABLE');
var tableBody = document.createElement('TBODY');

table.border = '1'
table.appendChild(tableBody);

var heading = new Array();
heading[0] = "url";
heading[1] = "tag";
heading[2] = "id";
heading[3] = "class";
heading[4] = "remove";
chrome.storage.local.get('monitors', function (result) {
    var marray = result.monitors;
    console.log(marray);
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);
    for (i = 0; i < heading.length; i++) {
        var th = document.createElement('TH')
        th.width = '75';
        th.appendChild(document.createTextNode(heading[i]));
        tr.appendChild(th);
    }
    for (i = 0; i < marray.length; i++) {
        var tr = document.createElement('TR');
        var obj = marray[i];

        var td = document.createElement('TD');
        var a = document.createElement('a');
        var linkText = document.createTextNode(obj.url);
        a.appendChild(linkText);
        a.href = obj.url;
        // td.appendChild(document.createTextNode("<a href="+obj.url+">"+obj.url+"</a>"));
        td.appendChild(a);
        tr.appendChild(td);

        var td = document.createElement('TD');
        td.appendChild(document.createTextNode(obj.tagName));
        tr.appendChild(td);

        var td = document.createElement('TD');
        if(obj.id==null) td.appendChild(document.createTextNode(""));
        else td.appendChild(document.createTextNode(obj.id));
        tr.appendChild(td);

        var td = document.createElement('TD');
        if(obj.className==null) td.appendChild(document.createTextNode(""));
        else td.appendChild(document.createTextNode(obj.className));
        tr.appendChild(td);

        var td = document.createElement('TD');
        var inputElement = document.createElement('input');
        inputElement.type = "button";
        inputElement.value = "remove";
        inputElement.onclick = (function(table,tr,obj,i){
            return function(){
                gotoNode(table,tr,obj,i);
            };
            
        }(table,tr,obj,i));
        td.appendChild(inputElement);
        tr.appendChild(td);

        tableBody.appendChild(tr);
    }  
    myTableDiv.appendChild(table)
});
});

function gotoNode(table,tr,obj,i){

    chrome.storage.local.get('monitors', function (result) {
    // the input argument is ALWAYS an object containing the queried keys
    // so we select the key we need
        var monitors = result.monitors;
        if(monitors==null) monitors = [];
        monitors.splice(i,1);
    // set the new array value to the same key
        chrome.storage.local.set({monitors: monitors}, function () {
        // you can use strings instead of objects
        // if you don't  want to define default values
            chrome.storage.local.get('monitors', function (result) {
                console.log(result.monitors);
            });
        });
    });
    location.reload();
};