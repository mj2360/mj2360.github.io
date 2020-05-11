const audio1 = document.querySelector("#p1-audio");

const container = document.querySelector("#big-contain");

const image1 = document.querySelector("#side-img1");
const image2 = document.querySelector("#side-img2");
const image3 = document.querySelector("#side-img3");

const deeper = document.querySelector("#word7");


deeper.addEventListener('mouseover', isMovement); 
image1.addEventListener("mouseover", isMovement);
image2.addEventListener("mouseover", isMovement);
image3.addEventListener("mouseover", isMovement);

window.alert("Click Anywhere to Explore");
 
function isMovement() {
    console.log("there is movement")
    console.log(audio1.duration);
    audio1.play();
    $( "#next1").animate({
    
        opacity: 0.4,
      }, 1500 );

      $( "#next2").animate({
        
        opacity: 0.4,
      }, 1900 );

      $( "#next3").animate({
       
        opacity: 0.4,
      }, 2100 );

    audio1.addEventListener("timeupdate", function() {
        if(audio1.currentTime > 5.5) {
            audio1.pause(); 
            
            console.log(audio1.currentTime);
        }
    });
    }

   