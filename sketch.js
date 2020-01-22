// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/AaGK-fj-BAM

let s;
let scl = 5;
let food;
var yum;
var  j=0;
var k=0;
var h=2;
var SPEED=10;
var HITS=5;
var fillin=false;
function setup() {
  createCanvas(600, 600);
  s = new Snake();
  frameRate(SPEED+k);
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

//function mousePressed() {
 // s.total++;
//}

function draw() {
  background(51);

  // did we hit food
  if (s.eat(food)) {
    pickLocation();
    j++;
  }
  
  // did we hit yum
  if (s.munch(yum)) {
    pickLocation();
    j++;
    fillin=true; // indicate to snake there are holse in body to fill 
    k+=2;   // increase speed when we hit yum 
    frameRate(SPEED+k);
    if(k>=6)
    {
      k=0;
    }
  }

  s.death();
  s.update(fillin);
  fillin=false;  // no need to fill body till next hit
  s.show();
  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
  
  // invisible yum at first
  noFill(0,0,0);
  noStroke(); // remove border
  rect(yum.x,yum.y,scl,scl);
  // at start or every 5 hits to food show the yum
  if (j%HITS===0)
  {
    fill(0,0,255);
    rect(yum.x,yum.y,scl,scl);
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
