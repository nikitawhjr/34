
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  groundSprite=createSprite(width/2, 380, width,20);
  groundSprite.shapeColor=color("brown")
  
  ground = Bodies.rectangle(width/2, 690, width, 50 , {isStatic:true} );
	World.add(world, ground);


  box1 = new Box(500,360,20,20);
  box2 = new Box(500,340,20,20);
  box3 = new Box(500,320,20,20);
  box4 = new Box(500,300,20,20);
  box5 = new Box(500,280,20,20);
  box6 = new Box(500,260,20,20);
  box7 = new Box(500,240,20,20);
  box8 = new Box(500,220,20,20);
  box9 = new Box(500,200,20,20);
  box10 = new Box(500,180,20,20);

  box11 = new Box(550,200,20,20);
  box12 = new Box(550,220,20,20);
  box13 = new Box(550,180,20,20);
  box14 = new Box(550,240,20,20);
  box15 = new Box(550,260,20,20);
  box16 = new Box(550,280,20,20);
  box17 = new Box(550,300,20,20);
  box18 = new Box(550,320,20,20);
  box19 = new Box(550,340,20,20);
  box20 = new Box(550,360,20,20);
  box21 = new Box(550,220,20,20);
  box22 = new Box(550,160,20,20);
  box23 = new Box(550,140,20,20);
  box24 = new Box(550,120,20,20);
  box25 = new Box(550,100,20,20);

  ball = new Ball(200,200,35);
  chain = new Chain(ball.body,{x:280,y:50});
  

  
  Engine.run(engine);

}

function draw() {
  background("blue");  

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();

  box10.display();
  box11.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();

  ball.display();
  chain.display();

  
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
chain.fly();
}

function keyPressed(){
  if(keyCode === 32){
      chain.attach(ball.body);
  }
}
