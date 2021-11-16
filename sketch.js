
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var ground

function preload()
{
	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2,
		
	}
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundObj = new Ground(width/2, 670, width, 20);
	leftside = new Ground(700, 600, 20, 120);
	rightside = new Ground(550, 600, 20, 120);
	ball = Bodies.circle(200, 50, 25,{restitution:1})
	World.add(world, ball, )

	Engine.run(engine);

  
}


function draw() {
	keypressed()
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background(0);
  groundObj.display()
  leftside.display()
  rightside.display()
  drawSprites();
  ellipse(ball.position.x, ball.position.y, 25)
}

function keypressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:1},{x:0,y:-0.01})
		Matter.Body.applyForce(ball,{x:0,y:1},{x:0.01,y:0})
	}
}

