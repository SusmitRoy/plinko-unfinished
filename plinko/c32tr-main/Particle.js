class Particle{
  constructor(x,y,radius,color){
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.radius = radius;
      this.body = Bodies.circle(x,y,radius,options);
      this.color = color(random(0,255), random(0,255), random(0,255));
      World.add(world,this.body); 

  }
  display(){
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      circle(this.body, 0, 0, this.radius);
      pop();
  }
}
