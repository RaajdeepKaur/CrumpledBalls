const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var basket1, basket2, basket3

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  groundSprite=createSprite(width/2, height-35, width,10);
  groundSprite.shapeColor=color(255)
  
  ground = Bodies.rectangle(400, 800, 400, 10 , {isStatic:true} );
	 World.add(world, ground);

 
  basket1 = new Dustbin(400,650,400,20);
  basket1.shapeColor = color(255,0,0);
   
  basket2 = new Dustbin(210,595,20,100);
  basket2.shapeColor = color(255,0,0);
 
   basket3 = new Dustbin(590,595,20,100);
  basket3.shapeColor = color(255,0,0);

  paperBall = new Paper(50,720,50);
  paperBall.shapeColor = "black"
 
}

function draw() {
  background(255,255,255); 
  
  drawSprites();
  basket1.display();
  basket2.display();
  basket3.display();
  paperBall.display();
}

function keyPressed(){
  if(keyCode === UP_ARROW){

    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});

  }
}