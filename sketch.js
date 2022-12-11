
let pg;

function setup() {
  createCanvas(710, 400);
  pg = createGraphics(400, 250);
}

function draw() {
  fill(0, 12);
  rect(0, 0, width, height);
  fill(255);
  noStroke();
  ellipse(mouseX, mouseY, 60, 60);

  pg.background(51);
  pg.noFill();
  pg.stroke(255);
  pg.ellipse(mouseX - 150, mouseY - 75, 60, 60);

  //Draw the offscreen buffer to the screen with image()
  image(pg, 150, 75);
}
let x = 40;
let y = 40;
let goleft = false;
let goLeftForY = false;

function setup(){
  createCanvas(400,500);
}
function draw(){
  background(255,255,0);
  fill(255,0,150);
  ellipse(x,y,40,40);
  if(goleft == false){
    x= x+3;
   
  }
  if (LEFT==true){
    x=x-3;
  }
  if(x>400)
  {
   goLeft= true;
  }
  if(x<0)
  {
     goLeft= false;
    }
    if(goLeftForY == false){
    y= y+3;
   
  }
  if (goLeftForY==true){
    y=y-3;
  }
  if(x>400)
  {
   goLeftForY= true;
  }
  if(x<0)
  {
     goLeftForY= false;
    }
}
