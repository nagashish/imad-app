console.log('Loaded!');

//Change the text of the main-text div
var element = document.getElementById("main-text");
element.innerHTML ="New Value";

//Move the image
var img = document.getElementById("madi");
var marginLeft = 0;
 var interval; //Declaring variable globally so that i can use it outside the function.
 
    function moveRight(){
        
        if(marginLeft<600){
            marginLeft += 1;
            img.style.marginLeft =  marginLeft + "px";
        }
       else
          {
              clearInterval(interval);
          }
    }

    img.onclick = function() {
        
          interval = setInterval(moveRight, 10);
          
    };
    function moveLeft(){
        
        if(marginLeft==600){
            marginLeft -= 1;
            img.style.marginRight =  marginRight + "px";
        }
       else
          {
              clearInterval(interval);
          }
    }
          interval = setInterval(moveLeft, 10);
          