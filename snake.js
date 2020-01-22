// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/AaGK-fj-BAM
function Snake() {
  this.x = 0;   // current head
  this.y = 0;   // current head
  this.xspeed = 1; 
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];
  this.hit = 0;   // counts hits to yum or food
  this.hityum = 0;   // counts hits to yum
  
  
this.eat = function(pos) {
    let d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      this.total++;
      this.hit++;
      this.count++;
      return true;
    } else {
      return false;
    }
  };
this.munch = function(pos) {
    let d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      this.total++;
      this.hityum++;  
      this.total += this.hityum;   
      return true;
    } else {
      return false;
    }
  };

this.dir = function(x, y) {
    this.xspeed  = x ;
    this.yspeed  = y ;
};

this.death = function() {
    for (let i = 0; i < this.tail.length; i++) {
      let pos = this.tail[i];
      let d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        console.log('starting over');
        this.hit = 0;
        this.hityum = 0;
        this.total = 0;
        this.tail = [];
      }
    }
  };

  this.update = function(fillin) {
    var tmpx, tmpy;

    // copy old positions including head into the updated tail
    for (let i = 0; i < this.tail.length - 1 ; i++) {
      this.tail[i] = this.tail[i + 1];
    }
    // always make new head on every move
    this.tail[this.total - 1]  = createVector(this.x,this.y);      
    this.x = this.x + (this.xspeed)  * scl ;
    this.y = this.y + (this.yspeed)  * scl ;  
    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);


    // if we had a hit extra bits according to new length 
   /* console.log("total is " + this.total + " length of tail is " + this.tail.length + " and h is " + this.hityum)
    */
    if (fillin == true) {
    for (let t = 0; t<=this.hityum; t++)
    {  
      // since we added head to a new possition fill in the holes
      tmpx = this.x - (this.xspeed + t)  * scl ;
      tmpy = this.y - (this.yspeed + t)  * scl ;

      this.tail[this.tail.length -  1 - t ] = createVector(tmpx,tmpy);
      
   /* console.log("tail at location " + (this.tail.length -  1 - t) + " is " +  this.tail[this.tail.length -  1 - t ]  );
*/
    }
  }
  };

  this.show = function() {
    fill(255);
    for (let i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    rect(this.x, this.y, scl, scl);
  };
}
