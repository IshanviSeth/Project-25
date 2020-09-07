class Ball {
    constructor(x, y,radius) {
      var options = {
        'restitution':0.02,
        'friction':1.0,
        'density':0.5
    }
      this.radius = radius
        this.image = loadImage("sprites/PaperBall.png")
        this.body = Bodies.circle(x,y,radius,options)
        World.add(world,this.body)
       // Matter.Body.setRadius(this.radius, radius)
      };
      display(){
        var pos = this.body.position
        push()
        translate(pos.x,pos.y)
        imageMode(CENTER)
        image(this.image,0,0,this.radius,this.radius)
        pop()
      
        
      }
}