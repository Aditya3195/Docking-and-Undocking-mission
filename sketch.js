var iss ,issImage, spacecraft , spacecraftImg ,backgroundImg
var hasDocked = false;


function preload(){
  bg = loadImage("spacebg.jpg")
  issImg = loadImage("iss.png")
  spacecraftImg = loadImage("spacecraft1.png")
  spacecraftImg1 = loadImage("spacecraft2.png")
  spacecraftImg2 = loadImage("spacecraft3.png")
  spacecraftImg3 = loadImage("spacecraft4.png")
}

function setup() {
  createCanvas(600,350);
  spacecraft = createSprite(285,240)
  spacecraft.addImage(spacecraftImg)
  spacecraft.scale=0.15;
  iss = createSprite(330,130)
  iss.addImage(issImg)
  iss.scale=0.25;




  
}

function draw() {
  background(bg);
  spacecraft.addImage(spacecraftImg) 
  if(!hasDocked){
    spacecraft.x = spacecraft.x+random(-1,1)
    if(keyDown(UP_ARROW)){
      spacecraft.y = spacecraft.y-2
    }
    if(keyDown(LEFT_ARROW)){
      spacecraft.addImage(spacecraftImg3)
      spacecraft.x = spacecraft.x-1
    }
    if(keyDown(RIGHT_ARROW)){
      spacecraft.addImage(spacecraftImg2)
      spacecraft.x = spacecraft.x+1
    }
    if(keyDown(DOWN_ARROW)){
    spacecraft.addImage(spacecraftImg1)
      
    }
   if(spacecraft.y<=(iss.y+50) && spacecraft.x<=(iss.x-30)){
     hasDocked=true
     textSize(25)
     fill("white")
     text("Docking Successful",200,300)
   }
    
  }
  drawSprites();
}