window.onload = function(){
    if(chrome.extension.inIncognitoContext){
        var audio = new Audio(chrome.runtime.getURL('file.aac'));
        audio.autoplay = true;
        //        const audioPromise = audio.play();
        //        if(audioPromise !== null){
        //            audioPromise.catch(() => { audio.play(); });
        //        }
    }
}
