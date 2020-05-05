const audio1 = document.querySelector("#p1-audio");
const container = document.querySelector("#big-contain");

// audio1.addEventListener('mouseover', isMovement);  
container.addEventListener('mouseover', isMovement);

// window.onload = function(){

  
// }

function isMovement() {
    console.log("there is movement")
    audio1.play();
   window.onkeyup= function(e){
        if(e.keyCode == 32 && e.target == document.body){
            audio1.pause();
            console.log("spaced");
        }}

        window.onkeydown = function(e) { 
            return !(e.keyCode == 32);
        };
    }