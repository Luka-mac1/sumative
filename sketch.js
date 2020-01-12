// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/AaGK-fj-BAM

let s;
let scl = 20;
let food;
var yum;
var  j=0;
var k=0;
var h=2;
function setup() {
  createCanvas(600, 600);
  s = new Snake();
  frameRate(10+k);
  pickLocation();
}

function pickLocation() {
  let cols = floor(width / scl);
  let rows = floor(height / scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
  yum = createVector(floor(random(cols)), floor(random(rows)));
  yum.mult(scl);
}

function mousePressed() {
  s.total++;
}

function draw() {
  background(51);
  for (var i=0 ; i<=h;i++)
  {
  if (s.eat(food)) {
    pickLocation();
    j++;
    s.update();
  }
  if (s.munch(yum)&&j%5===0) {
    pickLocation();
    j++;
    k+=3;
  
  
  }
  }
  s.death();
  s.update();
  s.show();
  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
  
  noFill(0,0,0);
  noStroke(); // remove border
  rect(yum.x,yum.y,scl,scl);
  if (j%5===0)
  {
  fill(0,0,255);
  rect(yum.x,yum.y,scl,scl);
    frameRate(10+k);
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }
}
