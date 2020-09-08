//Global Variables
var box1, box2, box3;
var ball, ground;
var dustbin_image,ball_image;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
  //Loading the images in the computer's memory
   //dustbin_image = loadImage("sprites/Dustbin.png")
   //ball_image = loadImage("sprites/PaperBall.png")
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
    world = engine.world;
	
	//Creating the bodies	
	box1 = new Box(900,685,120,250)
	//box2 = new Box(835,635,10,100)
	//box3 = new Box(967,635,10,100)

	ground = new Ground(600,height,1200,20);

  ball = new Ball(250,550,70)
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine)
  
  drawSprites();
 
  box1.display();
 // box2.display();
  //box3.display();

  ground.display();
  ball.display();

}
function keyPressed(){
  if(keyCode === UP_ARROW){
		Matter.Body.setStatic(ball.body, false)
		Matter.Body.applyForce(ball.body,ball.body.position,{x:350,y:-350})
	}
}



