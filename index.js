
let colortyped="ab2567";

document.getElementById("fontcolor").addEventListener("keyup",aman);
function aman()
{
    colortyped=document.getElementById("fontcolor").value;
}

document.getElementById("submit").addEventListener("click",sendmessage);

function sendmessage()
{
    chrome.tabs.query({active:true,currentWindow:true},function(tabs)
    {
        chrome.tabs.sendMessage(tabs[0].id,{todo:"changecolor",clickedcolor:colortyped});
    });
}