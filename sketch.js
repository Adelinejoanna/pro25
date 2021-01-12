
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,box,ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

paper = new Paper(50,680,25);
box = new Box(600,680);
ground = new Ground(400,690,800,20);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  paper.display();
  ground.display();
  box.display();
  
  
  drawSprites();
 
}
function keyPressed() {
	if (keyCode ===UP_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
   Matter.Body.applyForce(paper.body,paper.body.position,{x:45,y:-50});
	   
	 }
   }
   



