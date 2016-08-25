/*
Criado por Tiago Quadros - 25/08/2016
www.tiagoquadros.com.br  
*/

var konamiCode = ["38", "38", "40", "40", "37", "39", "37", "39", "66", "65"];
var keypress = 0;
document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == konamiCode[keypress]) {
        keypress++
        if(keypress == konamiCode.length) {
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', 'sounds/contra.mp3');
            audioElement.play();
            keypress = 0;
        }
    } else {
        keypress = 0;
    }
};