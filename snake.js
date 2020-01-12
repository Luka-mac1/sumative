// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/AaGK-fj-BAM
var h=0;
var j = 0;
var count = 0 ;
function Snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];
  this.eat = function(pos) {
    let d = dist(this.x, this.y, pos.x, pos.y);
    if (d < this.total) {
      this.total = this.total + 1 + h;
      j++;
      count++;
      return true;
    } else {
      return false;
    }
  };
this.munch = function(pos) {
    let d = dist(this.x, this.y, pos.x, pos.y);
    if (d < this.total &&count%5===0) {
     this.total++;
     h++;
      j=0;
      if (j%2===0)
      {
        h=0;
      } 
      return true;

    } else {
      return false;
    }
  };
  this.dir = function(x, y) {
    this.xspeed  = x ;
    this.yspeed  = y ;
    //this.xspeed  = x * (h%3 +1);
    //this.yspeed  = y * (h%3 +1);
  };

  this.death = function() {
    for (let i = 0; i < this.tail.length; i++) {
      let pos = this.tail[i];
      let d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        console.log('starting over');
        this.total = 0;
        this.tail = [];
      }
    }
  };

  this.update = function() {
    for (let i = 0; i < this.tail.length - 1 - h ; i++) {
      this.tail[i] = this.tail[i + 1 + h];
    }
    for (let t = 0; t<=h; t++)
    {   
     
      this.tail[this.total - 1 - t] = createVector(this.x + t*(this.xspeed )  * scl, this.y -t* (this.yspeed )  * scl);
    
    }
    this.x = this.x + (this.xspeed )  * scl ;
    this.y = this.y + (this.yspeed )  * scl ;

    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);
  };

  this.show = function() {
    fill(255);
    for (let i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    rect(this.x, this.y, scl, scl);
  };
}

