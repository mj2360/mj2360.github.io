const Input1 = document.querySelector("#Time1")
const Input2 = document.querySelector("#Time2")
const Sticky = document.querySelector("#sticky")
const Wet = document.querySelector("#wet")
const DocBody = document.querySelector("#body-5")
// const audio = document.querySelector("#p5-audio")

$(document).ready(function () {
    $( "#Time1").hide();   
    $( "#Time2").hide(); 

    $("#body-5").on( "mousemove", function() {
        $( "#Time1").fadeIn(3000); 
        $( "#Time2").fadeIn(3000); 
    });


    // $('#sticky').bind('change', function () {

    //     if ($(this).is(':checked'))
    //     var audio = {}
    //     audio["wind"] = new Audio()
    //     audio["wind"].src = "assets/wind.wav"
    //     audio["wind"].addEventListener('load', function () {
    //         audio["wind"].play() 
    //     else
    //       console.log("not play")
     
    //  });

    

});

// $("#body-5").on( "mousemove", function() {
//     $( "#Time1").show(); 
//     console.log("are u working")
// });