var starImg,bgImg;
var star, starBody, fairy;
var tinkle;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){

	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png", "fairyImage2.png");
	bgImg = loadImage("starNight.png");
	tinkle = loadSound("JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	tinkle.play();

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	fairy = createSprite(130,520);
	fairy.addAnimation("flying", fairyImg);
	fairy.scale = 0.3;
	fairy.velocityX = 0;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}

function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  if(star.y > 470 && starBody.position.y > 470){
	  Matter.Body.setStatic(starBody,true);
	}

  keyPressed();
  drawSprites();
}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
	if(keyDown("LEFT_ARROW")){
		fairy.x = fairy.x-10;
	}
	
	if(keyDown("RIGHT_ARROW")){
		fairy.x = fairy.x+10;
	}
}
