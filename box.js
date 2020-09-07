
class Box{
  constructor(x, y, width, height, angle) {
      var options = {
          'restitution':0.5,
          'friction':1.0,
          'density':1.0,
          'isStatic':true
      }
      this.Rbody = Bodies.rectangle(x+100, y, 20, height, options);
      this.Lbody = Bodies.rectangle(x-100, y, 20, height, options);
      this.Bbody = Bodies.rectangle(x, y, width, 20, options);

      Matter.Body.setAngle(this.Rbody,-1*angle)
      Matter.Body.setAngle(this.Lbody,angle)
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/Dustbin.png");

      World.add(world, this.Rbody);
      World.add(world, this.Lbody);
      World.add(world, this.Bbody);

    }
    display(){
      var angle = this.Bbody.angle;
      push();
      translate(this.Bbody.position.x, this.Bbody.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, -30, this.width, this.height);
      pop();
    }

  };