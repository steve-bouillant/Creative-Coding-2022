let ypos = 0;
let ystep = 246;
let xpos = 0;
let xstep = 246;
let r = 214;


function setup() {
  // createCanvas(500, 500);
  var cnv = createCanvas(500, 500);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);


}

function draw() {
  let c = color("#E276AC");
  let cr = color("#EB5C28");
  let crr = color("#A5C72A");
  
  background(0);

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
  //left top rect
  fill(crr);
  noStroke (0);
  quad(40, 20, 234, 20, 213, 233, 20, 233);
  pop();

  push();
  //right top circle
  fill(c);
  noStroke (0);
  ellipse(xstep+(xstep/2)+ 4, ystep/2 + 4, ystep*0.84)
  pop();

  push();
  //left bottom circle
  fill(c);
  noStroke (0);
  ellipse(xstep/2 + 4, ystep+(ystep/2)+ 4, xstep*0.84 + 7)
  
  pop();

  push();
   //right bottom rect
  fill(cr);
  noStroke (0);
  rect(xstep + 20, ystep + 20, r);
  pop();
  
  

}