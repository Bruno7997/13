var garden,rabbit, all, ale;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
  greenImg = loadImage("leaf.png"); 
  gramaImg = loadImage("grass.png");
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
rabbit.depth = 11;

Grama();
}


function draw() {
  background(0);
  
rabbit.x = World.mouseX;

  edges = createEdgeSprites();
  rabbit.collide(edges);
if (frameCount %70 === 0){
  all = Math.round(random(1,4));
  ale = Math.round(random(50, 350));
  console.log(all);
  switch (all) {
    case 1:
      apple();
      break;
    case 2:
      redleaf();
      break;
      case 3:
      orangeleaf();
      break;
      case 4:
      greenleaf();
      break;
  }
}
  drawSprites();
}
function apple(){
  var a;
  a = createSprite(ale, -50, 20, 20);
  a.addImage ("ap",appleImg);
  a.scale = 0.06;
  a.velocityY = 5;
  a.lifetime = 90;
}
function redleaf(){
  var rl;
  rl = createSprite(ale, -50, 20, 20);
  rl.addImage ("folha1",redImg);
  rl.scale = 0.06;
  rl.velocityY = 5;
  rl.lifetime = 90;
}
function orangeleaf(){
  var ol;
  ol = createSprite(ale, -50, 20, 20);
  ol.addImage ("folha2",orangeImg);
  ol.scale = 0.08;
  ol.velocityY = 5;
  ol.lifetime = 90;
}
function greenleaf(){
  var gl;
  gl = createSprite(ale, -50, 20, 20);
  gl.addImage ("folha3",greenImg);
  gl.scale = 0.08;
  gl.velocityY = 5;
  gl.lifetime = 90;
}
function Grama(){
  var ale = -25, g, i = 0, y = 350;
  for(i ;i <= 11;i = i + 1){
g = createSprite(ale, y, 20, 20);
g.addImage ("grama", gramaImg);
g.depth = i;
g.scale = 0.125;
ale = ale + 45;
if (i == 10 && y == 350){
  i = 0;
  y = y + 22;
  ale = -30;
}
  }
}