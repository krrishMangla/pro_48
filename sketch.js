var board;
var arrowImg,arrow;
var redTokken,yellowTokken;
var t1,t2,t3,t4,t5;
var strikerImg,striker;
var boderG,wood1,wood2,wood3,wood4;
var score = 0;
var foul = 0;
var canFire = true;
var pushStrength = 0;
var PLAY = 1;
var END = 0;

var gameState = END;

var go;


function preload()
{
 board = loadImage("board.png");
 
 redTokken = loadImage("red.png");
 yellowTokken = loadImage("yellow.png");

 arrowImg = loadAnimation("arrow1.png","arrow2.png","arrow3.png");

 strikerImg = loadImage("striker.png");

 go = loadImage("download.jfif")
}


function setup()
{
  var canvas = createCanvas(400,400);

  boderG = new Group();
  

  wood1 = createSprite(200,0,400,52);
  wood1.shapeColor = ("#68482f");
  boderG.add(wood1);

  wood2 = createSprite(400,200,52,400);
  wood2.shapeColor = ("#68482f");
  boderG.add(wood2);

  wood3 = createSprite(200,400,400,52);
  wood3.shapeColor = ("#68482f");
  boderG.add(wood3);

  wood4 = createSprite(0,200,52,400);
  wood4.shapeColor = ("#68482f");
  boderG.add(wood4);

  boderG.bounciness = 0.5;

  arrow = createSprite(200,250);
  arrow.addAnimation("arrow",arrowImg);
  arrow.scale = 0.3;
  arrow.visible = false;
  arrow.rotateToDirection = true;
  arrow.pause();

  striker = createSprite(200,310);
  striker.addImage("strikerImg",strikerImg);
  striker.scale = 0.1;
  striker.rotation = 270;
  //striker.debug = true;
  striker.setCollider("circle",0,0,110);
  
  
  t1 = createSprite(200,200);
  t1.addImage("queen",yellowTokken);
  t1.scale = 0.15;
  //t1.debug = true;
  t1.setCollider("circle", 0, 0, 80);


  t2 = createSprite(200,160);
  t2.addImage("redT",redTokken);
  t2.scale = 0.15;
  //t2.debug = true;
  t2.setCollider("circle", 0, 0, 80);

  t3 = createSprite(200,240);
  t3.addImage("redT",redTokken);
  t3.scale = 0.15;
  //t3.debug = true;
  t3.setCollider("circle", 0, 0, 80);

  t4 = createSprite(240,200);
  t4.addImage("redT",redTokken);
  t4.scale = 0.15;
  //t4.debug = true;
  t4.setCollider("circle", 0, 0, 80);

  t5 = createSprite(160,200);
  t5.addImage("redT",redTokken);
  t5.scale = 0.15;
  //t5.debug = true;
  t5.setCollider("circle", 0, 0, 80);

  
console.log(gameState);


}


function draw()
{
 background(board);
 
 
//  fill(255);
//  text(mouseX +","+mouseY ,mouseX,mouseY);

  striker.bounceOff(boderG);

  t1.bounceOff(boderG); 
  t2.bounceOff(boderG);
  t3.bounceOff(boderG);
  t4.bounceOff(boderG);
  t5.bounceOff(boderG);

  striker.bounce(t1);
  striker.bounce(t2);
  striker.bounce(t3);
  striker.bounce(t4);
  striker.bounce(t5);

  t1.bounce(t2);
  t1.bounce(t3);
  t1.bounce(t4);
  t1.bounce(t5);

  t2.bounce(t3);
  t2.bounce(t4);
  t2.bounce(t5);

  t3.bounce(t4);
  t3.bounce(t5);

 t4.bounce(t5);

 drawSprites();

 createEdgeSprites();

 if(gameState = PLAY){
    if(keyWentUp("up"))
    {
      striker.addSpeed(pushStrength,striker.rotation);
      canFire= false;
    }

    if(striker.getSpeed() < 0.2)
    {
      canFire = true;
    }

    //first bracket
      if(striker.x < 60 && striker.x > 45 && striker.y < 60 && striker.y > 45)
      {
        canFire = false;
        pushStrength = 0;
        striker.x = 200;
        striker.y = 310;
        foul = foul + 1;  
      }
      
      if(t1.x < 55 && t1.x > 40 && t1.y < 55 && t1.y > 40)
      {
        t1.x = -100;
        score = score + 1;  
      }
      if(t2.x < 55 && t2.x > 40 && t2.y < 55 && t2.y > 40)
      {
        t2.x = -100;
        score = score + 1; 
      }
      if(t3.x < 55 && t3.x > 40 && t3.y < 55 && t3.y > 40)
      {
        t3.x = -100;
        score = score + 1;  
      }
      if(t4.x < 55 && t4.x > 40 && t4.y < 55 && t4.y > 40)
      {
        t4.x = -100;
        score = score + 1; 
      }
      if(t5.x < 55 && t5.x > 40 && t5.y < 55 && t5.y > 40)
      {
        t5.x = -100;
        score = score + 1;  
      }


    //second bracket 
      if(striker.x > 345 && striker.x < 360 && striker.y < 60 && striker.y > 45)
      {
        canFire = false;
        pushStrength = 0;
        striker.x = 200;
      striker.y = 310;
      foul = foul + 1;  
      }
      if(t1.x > 340 && t1.x < 355 && t1.y < 55 && t1.y > 40)
      {
        t1.x = -100;
        score = score + 1;  
      }
      if(t2.x > 340 && t2.x < 355 && t2.y < 55 && t2.y > 40)
      {
        t2.x = -100;
        score = score + 1;  
      }
      if(t3.x > 340 && t3.x < 355 && t3.y < 55 && t3.y > 40)
      {
        t3.x = -100;
        score = score + 1;  
      }
      if(t4.x > 340 && t4.x < 355 && t4.y < 55 && t4.y > 40)
      {
        t4.x = -100;
        score = score + 1;  
      }
      if(t5.x > 340 && t5.x < 355 && t5.y < 55 && t5.y > 40)
      {
        t5.x = -100;
        score = score + 1;  
      }

    //third bracket
      if(striker.x < 60 && striker.x > 45 && striker.y > 345 && striker.y < 360)
      {
        canFire = false;
        pushStrength = 0;
      striker.x = 200;
      striker.y = 310;
      foul = foul + 1;  
      }
      if(t1.x < 55 && t1.x > 40 && t1.y > 340 && t1.y < 355)
      {
        t1.x = -100;
        score = score + 1;  
      }
      if(t2.x < 55 && t2.x > 40 && t2.y > 340 && t2.y < 355)
      {
        t2.x = -100;
        score = score + 1;  
      }
      if(t3.x < 55 && t3.x > 40 && t3.y > 340 && t3.y < 355)
      {
        t3.x = -100;
        score = score + 1;  
      }
      if(t4.x < 55 && t4.x > 40 && t4.y > 340 && t4.y < 355)
      {
        t4.x = -100;
        score = score + 1;  
      }
      if(t5.x < 55 && t5.x > 40 && t5.y > 340 && t5.y < 355)
      {
        t5.x = -100;
        score = score + 1;  
      }

    //fourth bracket 
      if(striker.x > 345 && striker.x < 360 && striker.y > 345 && striker.y < 360)
      {
        canFire = false;
        pushStrength = 0;
      striker.x = 200;
      striker.y = 310;
      foul = foul + 1;  
      }
      if(t1.x > 340 && t1.x < 355 && t1.y > 340 && t1.y < 355)
      {
        t1.x = -100;
        score = score + 1;  
      }
      if(t2.x > 340 && t2.x < 355 && t2.y > 340 && t2.y < 355)
      {
        t2.x = -100;
        score = score + 1;  
      }
      if(t3.x > 340 && t3.x < 355 && t3.y > 340 && t3.y < 355)
      {
        t3.x = -100;
        score = score + 1;  
      }
      if(t4.x > 340 && t4.x < 355 && t4.y > 340 && t4.y < 355)
      {
        t4.x = -100;
        score = score + 1;  
      }
      if(t5.x > 340 && t5.x < 355 && t5.y > 340 && t5.y < 355)
      {
        t5.x = -100;
        score = score + 1;  
      }
      
      striker.setSpeedAndDirection(striker.getSpeed()*0.97);
      t1.setSpeedAndDirection(t1.getSpeed()*0.985);
      t2.setSpeedAndDirection(t2.getSpeed()*0.985);
      t3.setSpeedAndDirection(t3.getSpeed()*0.985);
      t4.setSpeedAndDirection(t4.getSpeed()*0.985);
      t5.setSpeedAndDirection(t5.getSpeed()*0.985);

      if(keyDown(UP_ARROW) && canFire == true)
      {
      arrow.visible = true;
      pushStrength += 0.5;
      if (pushStrength > 10 && pushStrength < 15) {
        arrow.setFrame(1);
      } 
      else if(pushStrength > 15 && pushStrength < 20)
      {
        arrow.setFrame(2); 
      } 
      else if(pushStrength > 20)
      { pushStrength = 20;
        arrow.setFrame(2);
      }
      else
      {
        arrow.setFrame(0);
      } 
      }
      else
      {
        arrow.visible = false;
        pushStrength = 0; 
      }

      
      if(keyDown(LEFT_ARROW) && canFire == true)
      {
        striker.rotation -= 5;
      }

      
      else if(keyDown(RIGHT_ARROW) && canFire === true)
      {
        striker.rotation += 5;
      }
      
      arrow.x = striker.x;
      arrow.y = striker.y;
      arrow.rotation = striker.rotation;

      if(foul === 5 || score === 5)
      {
        gameState = END
        
      }
      
 }

    

    if(gameState === END)
    {
    background(go);
    score.visible = false;
    foul.visible = false;
    }

   

  
  stroke(255);
  textSize(20);
  text("Score: "+score,85,20);

  textSize(20);
  text("Foul: "+foul,200,20);

}

// function keyReleased()
// {
//   if(keyCode === UP_ARROW)
//   {
//     striker.velocityY -= 2; 
//   }

//   if(keyCode === DOWN_ARROW)
//   {
//     striker.velocityY += 2; 
//   }

//   if(keyCode === RIGHT_ARROW)
//   {
//     striker.velocityX += 2; 
//   }

//   if(keyCode === LEFT_ARROW)
//   {
//     striker.velocityX -= 2; 
//   }
// }

