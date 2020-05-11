let canvas;
let timer = 10
let button;




function setup() { 
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','-1');

  button = createButton('Is it Over Yet?');
  button.position(width/2 - 130, height/2 + 500);
  button.size(250,100);
  button.style("background-color", "#000000");
  button.style("color", "#FFFFFF");
  button.style("font-size", "36px");
  button.mousePressed(restart);
} 


function draw() { 
  background(220);
  textAlign(CENTER, CENTER);
textSize(1500);
text(timer, windowWidth/2, windowHeight/2);

  
 
  
  if (frameCount % 60 == 0 && timer > 0) { 
    timer --;
  }
  if (timer == 0) {
    background(120, 0, 10);
  }
  
}

function restart(){
  timer = 10;
  background(220);

}

