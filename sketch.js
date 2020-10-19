
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var mango1, mango2, mango3, mango4;
var boy;
var tree;
var ground;
var rock;
var launcher;

function preload()
{
	boy = loadImage("boy.png");
	tree = loadImage("tree.png");
}

function setup() 
{
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600, 590, 1400, 20);

	mango1 = new Mango(950,190,20);
	mango2 = new Mango(1100,190,20);
	mango3 = new Mango(950,300,20);
	mango4 = new Mango(990,200,20);
	mango5 = new Mango(940,140,20);
	mango6 = new Mango(1100,300,20);
	mango7 = new Mango(1200,300,20);
	mango8 = new Mango(850,300,20);
	mango9 = new Mango(1000,250,20);
	mango10 = new Mango(1100,250,20);
	mango11 = new Mango(900,250,20);
	mango12 = new Mango(1050,150,20);

	rock = new Rock(240,440,35);

	launcher = new Launcher(rock.body, {x : 240, y : 440});

	Engine.run(engine);
  
}


function draw()
{
  rectMode(CENTER);
  background(255);
  
  image(tree, 750, 100, 500, 500);

  image(boy, 200, 360, 200, 300);
	
  ground.display();
    
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  rock.display();

  launcher.display();

  detectCollison(rock,mango1);
  detectCollison(rock,mango2);
  detectCollison(rock,mango3);
  detectCollison(rock,mango4);
  detectCollison(rock,mango5);
  detectCollison(rock,mango6);
  detectCollison(rock,mango7);
  detectCollison(rock,mango8);
  detectCollison(rock,mango9);
  detectCollison(rock,mango10);
  detectCollison(rock,mango11);
  detectCollison(rock,mango12);

  drawSprites();
 
}

function detectCollison(lrock, lmango)
{
	mangoBodyPosition = lmango.body.position;
	rockBodyPosition = lrock.body.position;

	var distance= dist(rockBodyPosition.x, rockBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance<=lmango.r+lrock.r)
	{
		Matter.Body.setStatic(lmango.body, false);
	}
}

function keyPressed()
{
	if(keyCode === 32)
	{
		launcher.attach(rock.body);
	}
}

function mouseDragged()
{
    Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
    launcher.fly();
}


