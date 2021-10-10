var bath1, bath2, brush;
var drink1, drink2, eat1, eat2, gym1, gym2, gym11, gym12;
var iss, move1, move2, sleep, backgroundImg;
var astronaut;
var topWall, rightWall, leftWall, bottomWall
function preload(){
  bath1 = loadAnimation("images/bath1.png","images/bath2.png");
  brush = loadAnimation("images/brush.png");
  drink1 = loadAnimation("images/drink1.png","images/drink2.png");
  eat1 = loadAnimation("images/eat1.png","images/eat2.png");
  gym1 = loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png");
  iss = loadImage("images/iss.png");
  move1 = loadAnimation("images/move1.png","images/move2.png");
  sleep = loadAnimation("images/sleep.png");
}

function setup() {
  createCanvas(800,400);

topWall = createSprite(400,10,800,2);
leftWall = createSprite(10,400,2,800);
rightWall = createSprite(799,30,2,800);
bottomWall = createSprite(400,390,800,3)

 astronaut = createSprite(400, 200, 50, 50);
 astronaut.addAnimation("sleeping",sleep);
 astronaut.scale = 0.1;
 
 astronaut.velocityX = 0.5;
 astronaut.velocityY = 0.3;

}

function draw() {
  background(iss);  
  


  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 130;
    astronaut.velocityY = -6;
    astronaut.velocityX = 0.4;
    
  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym1);
    astronaut.changeAnimation("gymming");
    astronaut.y = 120;
    astronaut.velocityX = 0.5;
    astronaut.velocityY = 0.4;
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eat1);
    astronaut.changeAnimation("eating");
    astronaut.x = 250;
    astronaut.velocityX = 0.9;
    astronaut.velocityY = 1;
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",bath1);
    astronaut.changeAnimation("bathing");
    astronaut.x = 380;
    astronaut.velocityX = 0.2;
    astronaut.velocityY = 0.6;
  }
  if(keyDown("M")){
    astronaut.addAnimation("moving",move1);
    astronaut.changeAnimation("moving");
    astronaut.y = 300;
    astronaut.velocityX = 0.8;
    astronaut.velocityY = 0.3;
  }
astronaut.bounceOff(topWall);
astronaut.bounceOff(bottomWall);
astronaut.bounceOff(leftWall);
astronaut.bounceOff(rightWall);

rightWall.visible = false;
leftWall.visible = false;
bottomWall.visible = false;
topWall.visible = false;



  text("UP ARROW = BRUSHING",20,50);
  text("DOWN ARROW = GYMMING",20,70);
  text("LEFT ARROW = EATING",20,90);
  text("RIGHT ARROW = BATHING",20,110);
  text("M KEY = MOVING",20,130);

  

  drawSprites();

}