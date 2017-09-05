console.log('Loaded!');

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