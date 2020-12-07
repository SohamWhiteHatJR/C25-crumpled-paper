
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperImage , dustbinImage;

function preload()
{
	
}

function setup() {
	createCanvas(1200,300);


	engine = Engine.create();
	world = engine.world;

	var box_options ={
        isStatic: true
    }
	//Create the Bodies Here.
	ground = new Ground(600,290,1200,20)
	box = new Dustbin(800,200,1200,1200);
	box1 = Bodies.rectangle(800,270,150,20,box_options);
	World.add(world,box1);
	box2 = Bodies.rectangle(725,200,20,150,box_options);
	World.add(world,box2);
	box3 = Bodies.rectangle(875,200,20,150,box_options);
	World.add(world,box3);

	paperball = new Paper(200,215,5);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  ground.display();
  paperball.display();
  
    keypressed();
  drawSprites();
  box.display();
 
}

function keypressed(){
	if(keyWentDown(UP_ARROW)){
	Matter.Body.applyForce(paperball.body,paperball.body.position,{x:115,y:-115});
}
}

