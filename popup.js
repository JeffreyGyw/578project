// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
document.addEventListener('DOMContentLoaded', function () {
    //   var queryInfo = {
    //   active: true,
    //   currentWindow: true
    // };
    // chrome.tabs.query(queryInfo, function(tabs) {
    //   var tab = tabs[0];
    //   var url = tab.url;
    //   console.log(url);
    // });

  document.getElementById('en').addEventListener('click', function(e){
    chrome.tabs.executeScript({file: 'jquery-3.2.1.min.js'});
    chrome.tabs.executeScript({file: 'domid.js'});

    // chrome.tabs.executeScript(null, {file: 'jquery-3.2.1.min.js'}, function(){
    //   chrome.tabs.executeScript(null, {
    //     code: '$(document.body).on("click", function(event) {alert(event.target.id + ", " + event.target.className + ", " + event.target.tagName);});'
    //   });
    // });
    // window.close();
  });
  document.getElementById('show').addEventListener('click', function(e){
    chrome.tabs.executeScript({file: 'jquery-3.2.1.min.js'});
    chrome.tabs.create({url: chrome.extension.getURL('notes.html')});
  });

  // document.getElementById('dis').addEventListener('click', function(e){
  //     window.close();
  // });

});
