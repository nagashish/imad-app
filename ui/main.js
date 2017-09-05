//Counter code
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function() {
  
  //Make request to counter endpoint
  
  //Capture the response and store it in a variable
  
  //Render the variable in the correct span
  counter = counter +1;
  var span = document.getElementById('count');
  span.innerHTML =counter.toString();
};

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