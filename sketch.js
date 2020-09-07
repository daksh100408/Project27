
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1, bob2, bob3, bobt4, bob5;
var rope1, rope2, rope3, rope4, rope5;
var roof;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

    roof = new Roof(190, 160, 100, 20);	
	bob1 = new Bob(180, 240, 10);
	bob2 = new Bob(190, 240, 10);
    bob3 = new Bob(200, 240, 10);
    bob4 = new Bob(210, 240, 10);
	bob5 = new Bob(220, 240, 10);
	rope1 = new Rope(bob1.body, roof.body, -bobdiameter*2, 0);
	rope2 = new Rope(bob2.body, roof.body, -bobdiameter*2, 0);
	rope3 = new Rope(bob3.body, roof.body, -bobdiameter*2, 0);
	rope4 = new Rope(bob4.body, roof.body, -bobdiameter*2, 0);
	rope5 = new Rope(bob5.body, roof.body, -bobdiameter*2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

 if(keyCode === UP_ARROW) {
  Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-85, y:-85});


 }


  drawSprites(); 
}



