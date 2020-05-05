const theButton = document.querySelector("#button");
const theDivs = document.querySelector("#invisible");
var theSounds= new Array();
  var sound0= document.querySelector("#sound1");
  var sound1= document.querySelector("#sound2");
  var sound2= document.querySelector("#sound3");
  var sound3= document.querySelector("#sound4");
  var sound4= document.querySelector("#sound5");
  var sound5= document.querySelector("#sound6");
  var sound6= document.querySelector("#sound7");
  var sound7= document.querySelector("#sound8");
const audio = document.querySelector("#p1-audio");

//um I have no idea what I am doing

// theSounds = [8];
for (var i = 0; i < 8; i++){
  theSounds[i] = "sound" + i ; 
  console.log(theSounds[i])
  console.log(theSounds.length)
  // (function(index) {
  //   theSounds[index].addEventListener("mouseover", function() {
  //      console.log("you hovered");
  //    })
  });



theButton.addEventListener('click', function() {
    //these two things don't work
    theButton.hidden = true;
    // theSounds[0].style.opacity= "0%";
    console.log(theSounds);
  }, false);


// theSounds.addEventListener('mouseover', function(index){
//   console.log("you hovered me")
//     audio1.play();
// });


