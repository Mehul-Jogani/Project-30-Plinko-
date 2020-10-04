class Plinko{
    constructor(x,y){
      this.body = Bodies.circle(x,y,10,{'isStatic': true});
      World.add(world,this.body);
      this.color = color(random(0, 255));
    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,10);
    }
  }