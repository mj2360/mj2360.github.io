let canvas;
let cx, cy;
let secondsRadius;
let minutesRadius;
let hoursRadius;
let clockDiameter;
let hours;
let minutes;
let seconds;

function preload(){

}

function windowResized() {
    //console.log('resized');
    resizeCanvas(windowWidth, windowHeight);
  }

function setup(){
canvas = createCanvas(windowWidth, windowHeight);
canvas.position(0,0);
canvas.style('z-index','-1');

hours= hour();
minutes= minute();
seconds= second();
console.log(hours);
console.log(minutes);
console.log(seconds);

  
let radius = min(width, height) / 2;
secondsRadius = radius * 0.71;
minutesRadius = radius * 0.6;
hoursRadius = radius * 0.5;
clockDiameter = radius * 1.7;

cx = width / 2;
cy = height / 2;
}

function draw(){
background(0);


text (hours + ":", 10,150);
text (minutes , 150,150);
textSize(100);

//making the structure of clock
noStroke();
fill(150, 0, 20);
ellipse(cx, cy, clockDiameter + 25, clockDiameter + 25);
fill(120, 0, 10);
ellipse(cx, cy, clockDiameter, clockDiameter);

 let s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
let m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI;
let h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;

//clock hands
 stroke(0);
strokeWeight(5);
line(cx, cy, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
strokeWeight(2);
line(cx, cy, cx + cos(m) * minutesRadius, cy + sin(m) * minutesRadius);
strokeWeight(4);
line(cx, cy, cx + cos(h) * hoursRadius, cy + sin(h) * hoursRadius);

}

