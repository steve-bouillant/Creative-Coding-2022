let ypos = 0;
let ystep = 246;
let xpos = 0;
let xstep = 246;
let r = 214;
let b = 0;
let angle = 0;
let xc = 0;
let xc2 = 0;
let speed = 2;
let speed2 = 1;


function setup() {
  let cnv = createCanvas(500, 500);
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  angleMode(DEGREES);
  cnv.position(x, y);
 
// frameRate(60);
}

function draw() {
  background(b);
  let c = color("#E276AC");
  let cr = color("#EB5C28");
  let crr = color("#A5C72A");
  let x = xstep + 123;
  let y = ystep + 123;


  push();
  noFill();
  stroke("#E9587B");
  strokeWeight(7);
  translate(width/2 - xstep, height/2 - ystep)

  for (let j = 0; j < 2; j++) {
    for (let i = 0; i < 2; i++) {
      rect(xpos+(xstep*i), ypos+(ystep*j), 246, 246);
    }
  }
  pop();

  push();
  //left top quad
  fill(crr);
  noStroke (0);
  quad(40, 20, 238, 20, 213, 233, 16, 233);
  pop();




  push();
  //right top circle
  fill(c);
  noStroke (0);
  ellipse(xstep+(xstep/2)+ 4, ystep/2 + 4, xc2)
  xc2 = xc2 + speed2;
  if (xc2 > 246*0.9) {
    speed2 = -5;
  } else if (xc2 < 5) {
    speed2 = 1;
  }
  pop();


  push();
  //left bottom circle
  fill(c);
  noStroke (0);
  ellipse(xstep/2 + 4, ystep+(ystep/2) + 4, xc)
  xc = xc + speed;
  if (xc > 246*0.9) {
    speed = -2;
  } else if (xc < 50) {
    speed = 2;
  }
  

  
  pop();

  push();
   //right bottom rect
   translate(x, y)
   angle = angle + 1;
  fill(cr);
  rotate(angle)
  noStroke (0);
  rectMode (CENTER);
  rect(0, 0, r);
  // rect(xstep + 20, ystep + 20, r);
  pop();
  
  

}