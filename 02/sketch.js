let ogX;
let ogY;
let diametre;
let contWeight;


function setup() {
createCanvas(windowWidth, windowHeight);
background (255);


  ogX = width / 2;
  ogY = height / 2;
  
  noFill();
  stroke(255);
  frameRate(50);

}



function draw() {
  background(0);

  push();

  let amount = 36;
  let magnitude = 400;

stroke(255);
translate (width/2, height/2);

for(let i = 0; i < amount; i++){
  let wave1 = cos (radians(i * 50 * 10)) * magnitude;
  let wave2 = sin (radians(frameCount + i * 10)) * magnitude;

push();

ellipse(wave2 * 1, wave1 * 1, 100, 100);
fill(255);
ellipse(wave1 * 1, wave2, 50, 50);
  
  
  
  pop();
  
  
  line(wave1, wave2, 10, 10);

}


  pop();
  
}
