var car, wall;
var speed,weight;

function setup (){
  createCanvas (1600,400);
  car = createSprite(200,200,50,50);
  wall = createSprite(1200,200,60,100);
  car.velocityX = 5;
  speed = random(25,31);
  weigth = random (400,1500);

}
function draw (){
  background ("black");
  if(wall.x-car.x<(car.width+wall.width)/2)
{
  car.velocityX = 0;
  var deformation = (0.5*weight*speed*speed/2);
  if(deformation>180)
{
  car.shapecolor = color("yellow");
  wall.shapecolor = color("white");
}
if (deformation < 180 && deformation > 100)
{
  car.shapecolor = color ("green");
  wall.shapecolor = color ("white");
}
if (deformation < 100);
{
  car.shapecolor = color("red");
  wall.shapecolor = color("white");
}
}
drawSprites (); 
}