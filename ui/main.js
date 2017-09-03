console.log('Loaded!');

//Change the text of the main-text div
var element = document.getElementById("main-text");
element.innerHTML ="New Value";

//Move the image
var img = document.getElementById("madi");
function moveRight(){
  marginRight = marginRight,1;  
}
img.onclick = function(){
    var interval = setInterval(moveRight,10);
};