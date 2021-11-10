var plane;
var bg;
var bgs;
var plane_img;
var Asteroids,a1,a2;
var gameState = "START"
var startButton,start_img;
click 
function preload()
{
bg = loadImage("KJJ.png")
plane_img = loadImage("plane.png")
air = loadImage("track.png")
a1 = loadImage("a1.png")
a2 = loadImage("a2.png")
start_img = loadImage("start.png")
click = loadSound("click.wav")
bgs = loadSound("bgs.mp3")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  plane = createSprite(width/2,height/2+100,50,50);
  plane.addImage(plane_img)
  plane.scale = 0.5
 

  bgs.play()
  
}

function draw() {
  background(bg);
  console.log(gameState)
  image(air, 0, -height * 5, width, height * 10);
  drawSprites();
  if(gameState === "START")
  {
    startButton = createSprite(500,height-50,20,20)
    startButton.addImage(start_img)
    startButton.scale = 1.5
   if(keyIsDown(DOWN_ARROW))
   {
     gameState = "SHOOT"
     click.play()
   }
  }
  if(gameState === "SHOOT")
 {

 
    
    camera.position.y = plane.position.y - 100

  if(keyIsDown(UP_ARROW))
  {
   plane.y -= 5
  }

  if(keyIsDown(RIGHT_ARROW))
  {
   plane.x += 20
  }

  if(keyIsDown(LEFT_ARROW))
  {
   plane.x -= 20
  }

  spawnRocks()  
 }
  
}

function spawnRocks()
{
  if(frameCount % 60 === 0)
 { 
  Asteroids = createSprite(random(width*0.25,width*0.75),plane.y-650,20,20)
  
  Asteroids.velocityY = 5
  var rand = Math.round(random(1,2));
  switch(rand)
  {
    case 1: Asteroids.addImage(a1)
    break;

    case 2:Asteroids.addImage(a2)
    break;

    default : break
  }
  Asteroids.scale = 0.45
 }
}