var backgroundImg,background

function preeload(){
  backgroundImg.loadImage("snow3.jpg");
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200,50, 50);
}

function draw() {
  //background(255,255,255);  
  drawSprites();
  background(backgroundImg)
}