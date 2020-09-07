class Roof {
    constructor(x, y, width, height) {
        var options = {
            isStatic:true,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
     this.body = Bodies.rectangle(x, y, width, height);
     this.width = width;
     this.height = height;
    }
    
    display() {
    var pos = this.body.position;    
    var angle = this.body.angle;
     push();
     translate(this.body.position.x, this.body.position.y);
     rotate(angle);
     rectMode(CENTER);
     rect(pos.x, pos.y, this.width, this.height);
    pop();
      }
    }