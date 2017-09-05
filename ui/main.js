//Counter code
var button = document.getElementById('counter');

button.onclick = function() {
  
  //Create a request object
  var request = new XMLHttpRequest();
  
  //Capture the response and store it in a variable
  request.onreadystatecheange = function () {
    if(request.readyState == XMLHttpRequest.DONE){
        //Take some action
        if(request.status ==200){
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML =counter.toString();
        }
    } 
    //Not done yet
  };
  
  //Make a request
  request.open('GET','http://nagashish9826.imad.hasura-app.io/counter', true);
  request.send(null);
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