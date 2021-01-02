
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBall,ground;
var box1,box2,box3;

function preload(){
	
}

function setup() {
	createCanvas(1000, 300);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperBall = new Paper(100,250,20);

	ground = new Ground(width/2,height-5,width,10);

	box1 = new Box(width-210,239,20,100);
	box2 = new Box(width-150,279,100,20);
	box3 = new Box(width-90,239,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  //Body.setVelocity(paperBall,5,0);

  paperBall.display();
  ground.display();

  box1.display();
  box2.display();
  box3.display();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){

     Body.applyForce(paperBall.body, paperBall.body.position,{x : 30, y : 30});
	}
}



