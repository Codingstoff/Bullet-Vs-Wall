var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321)
  thickness=random(22,83)
  weight=random(30,52)

  bullet=createSprite(50, 200, 20, 5);
  bullet.shapeColor=color(0,0,0);
  wall=createSprite(1200,200,thickness, height/2);
  color (80,80,80);
}

function draw() {
  background(255,255,255);  
 
  bullet.velocityX = speed;

  if (hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);
    bullet.x = wall.x-(wall.width+bullet.width)/2
    if (damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }
  }


  drawSprites();
}

function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}
