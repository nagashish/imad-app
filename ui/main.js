console.log('Loaded!');

//Move the image
var img = document.getElementById("madi");
var marginLeft = 0;
 var interval; //Declaring variable globally so that i can use it outside the function.
 
    function moveLeftt(){
        
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