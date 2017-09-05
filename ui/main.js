console.log('Loaded!');

//Move the image
var img = document.getElementById("madi");
var marginRight = 0;
 var interval; //Declaring variable globally so that i can use it outside the function.
 
    function moveLeft(){
        
        if(marginRight<600){
            marginRight += 1;
            img.style.marginRight =  marginRight + "px";
        }
       else
          {
              clearInterval(interval);
          }
    }

    img.onclick = function() {
        
          interval = setInterval(moveLeft, 10);
          
    };