chrome.windows.onCreated.addListener(function(){
    chrome.tabs.create({
        url: "https://google.com", active: true
    }, function(tab){
        chrome.tabs.executeScript({
            file: 'contentScript.js'
        });
    });
});
