
/*const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;*/
//use framecount to time 2 mins and use that to initate end state
//make a start button which initates play state
//get background image for happy or sad customers
var score;
var bob,emily,james;
var emilyWorkstationImg,emilyWorkstation, emilyImg;
var Background,BackgroundImg
var jamesImg;
var bobImg,bobsCounter,bobsCounterImg,bobsKnife,bobsKnifeImg;
var table;
var veggiesGroup,veggies1,veggies2,veggies3,choppedVeggiesImg,veggiesGroup2;
var i;
var gameState,playButton;
//add a small conveyor belt before emily
function preload()
{
BackgroundImg = loadImage("images/kitchenbackground.png");	

emilyImg = loadImage("images/emily.png");
emilyWorkstationImg = loadImage("images/emilysink1.png")

//jamesImg = loadImage("images/james.png");

bobImg = loadImage("images/bob1.png");
bobsCounterImg = loadImage("images/conveyorbelt2.png")
bobsKnifeImg = loadImage("images/bobsknife.png")


veggies1 = loadImage("images/veggies1large.png");
veggies4 = loadImage("images/veggies6.png");
veggies3 = loadImage("images/veggies3medium.png");
washedVeggies1 = loadImage("images/washedveggies1.png");
//washedVeggies4 = loadImage("images/veggies6.png");
//washedVeggies3 = loadImage("images/veggies3medium.png");
choppedVeggiesImg = loadImage("images/choppedveggies1.jpg");
}

function setup() {
	createCanvas(900, 700);
	 i =0;

	/*engine = Engine.create();
	world = engine.world;

	Create the Bodies Here.


	Engine.run(engine);*/
	Background = createSprite(550,240,900,700);
	Background.addImage("background",BackgroundImg);
	Background.scale = 3;

	emily= createSprite(630,350);
	emily.addImage("emily",emilyImg);
	emily.scale = 0.7;

	emilyWorkstation= createSprite(630,400);
	emilyWorkstation.addImage("emilyWorkstation",emilyWorkstationImg);
	emilyWorkstation.scale = 0.4;
	emilyWorkstation.debug = true;
	emilyWorkstation.setCollider("rectangle",0,0,60,30);
	score = 0;
	playButton = createButton("play");
	playButton.position(300,100);
	
	//james= createSprite(580,300);
	//james.addImage("james",jamesImg);
	//james.scale = 0.5;

	bob= createSprite(375,350);
	bob.addImage("bob",bobImg);
	bob.scale = 0.1;

	bobsCounter= createSprite(360,440);
	bobsCounter.addImage("bobsCounter",bobsCounterImg);
	bobsCounter.scale = 0.3;

	bobsKnife= createSprite(430,370);
	bobsKnife.addImage("knife",bobsKnifeImg);
	bobsKnife.scale = 0.02;
	bobsKnife.debug = true;

	table = createSprite(630,468,230,70);
	table.shapeColor = rgb(224,168,91);

	veggiesGroup = new Group();
	veggiesGroup2 = new Group();

}


function draw() {
	
  rectMode(CENTER);
  
  gameState = "start";
  playButton.mousePressed(gameState= "play");
if (gameState==="play"){
	if(keyIsDown(UP_ARROW)){
		bobsKnife.x = 379;
		bobsKnife.y = 382;
	
	}
	else{
		bobsKnife.x = 405;
		bobsKnife.y = 365;
	}
	
	if(veggiesGroup.isTouching(emilyWorkstation)){
	  veggiesGroup.destroyEach();
	}

	spawnVeggies();
  spawnVeggies2();

  if(keyIsDown(UP_ARROW)){
	i=i+1
}
console.log(i);
		 if(i === 4){
	veggiesGroup2.destroyEach();
	i=0;
	score = score+ Math.round(random(0.1,0.2));
		 }
}
  background(255);
  
console.log(gameState);




  
  drawSprites();
  textSize = 18;
  fill('black');
  text('Score: ',score,200,200);

}


function spawnVeggies() {
	if(frameCount % 80 === 0) {
	  var veggies = createSprite(900,415,10,40);
	  veggies.velocityX = -4;
	  //veggies.debug = true

	  //generate random obstacles
	  var rand = Math.round(random(1,3));
	  switch(rand) {
		case 1: veggies.addImage(veggies1);
				break;
				// get new image
		case 2: veggies.addImage(veggies4);
				break;
		case 3: veggies.addImage(veggies3);
				break;
		default: break;
	  }
	  
	  //assign scale and lifetime to the obstacle           
	  veggies.scale = 0.3;
	  veggies.lifetime = 300;
	  //add each obstacle to the group
	  veggiesGroup.add(veggies);
	}
  }

  function spawnVeggies2() {
	if(frameCount % 150 === 0) {
	  var veggies2 = createSprite(500,415,10,40);
	  veggies2.velocityX = -1.5;
	  //veggies2.debug = true
	  

	  //generate random obstacles
	  var rand = Math.round(random(1,3));
	  switch(rand) {
		  // make specific sizes per a image
		  // add weighing scale with veggies
		case 1: veggies2.addImage(washedVeggies1);
				break;
				
		case 2: veggies2.addImage(veggies4);
				break;
		case 3: veggies2.addImage(veggies3);
				break;
		default: break;
	  }

	  //assign scale and lifetime to the obstacle           
	  veggies2.scale = random(0.2,0.4);
	  veggies2.lifetime = 300;
	  //add each obstacle to the group
	  veggiesGroup2.add(veggies2);
	  
	  

	}
	

  }

