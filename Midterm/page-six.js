
const sound0 = document.querySelector("#sound1")
const sound1 = document.querySelector("#sound2")
const sound2 = document.querySelector("#sound3")
const sound3 = document.querySelector("#sound4")
const sound4 = document.querySelector("#sound5")
const sound5 = document.querySelector("#sound6")
const sound6 = document.querySelector("#sound7")
const sound7 = document.querySelector("#sound8")
const audio = document.querySelector("#p6-audio")
const Button = document.querySelector("#button")
const Words =document.querySelector("#txt-contain")
const Ear = document.querySelector("#ear")
var theSounds = [sound0, sound1, sound2, sound3, sound4, sound5, sound6, sound7]


$( "#invisible" ).hide();
$( "#txt-contain" ).hide();
$( "#ear" ).hide();

const Sounds = $( "#invisible" );
$( "#button" ).on( "click", function( event ) {
  Sounds.show();
  $("#txt-contain").show();
  $("#ear").show();
$( "#button" ).hide();
});


$(theSounds).mouseenter(function() {
    audio.play();
  console.log("mouseenter")
});






