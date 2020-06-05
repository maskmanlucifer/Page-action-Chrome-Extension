chrome.runtime.sendMessage({todo:"showPageAction"});

chrome.runtime.onMessage.addListener(function(request,sender,sendRequest){
    if(request.todo=="changecolor")
    {
        let addcolor = "#" + request.clickedcolor;
        document.getElementsById("description").style.color=addcolor;
    }
});