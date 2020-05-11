const Buttons = document.querySelector(".p3buttons")
const B1 = document.querySelector("#b1")
const B2 = document.querySelector("#b2")
const B3 = document.querySelector("#b3")
const B4 = document.querySelector("#b4")
const B5 = document.querySelector("#b5")
const B6 = document.querySelector("#b6")
const B7 = document.querySelector("#b7")
const B8 = document.querySelector("#b8")
const B9 = document.querySelector("#b9")
const body =document.querySelector(".body-3")
const red =document.querySelector("#red")



// const button1 = $( ".p3buttons" );
// $( "#b1" ).on( "mouseenter", function( event ) {
//   console.log("hovered over")
// });

$(document).ready(function () {
    
    $( "#red").hide();   

    $(".p3buttons").on( "mouseenter", function() {
        $( "#red").show(); 
        console.log("are u working")
    });

    $(".p3buttons").on( "mouseleave", function() {
        $( "#red").hide(); 
        console.log("did u leave")
    });
});