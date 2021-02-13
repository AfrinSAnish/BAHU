const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,
box15,box16,box17,box18,box19,box20;

var ball,sling,bg2,bg3;
var head,mid,chest,leg,ballal
var homeImg,playImg,storyImg,bhallaImg,bhadraImg,rockImg,sling

var rockGroup

var story1=1;
var story2=3;
var home=0;
var play1=2;
var play2=3;
var lose= 5;
var bg3;
var Stage=home;

function preload(){
  bg = loadImage("palace.jpg")
  bg2= loadImage("bg 2.jpg")
  bg3 = loadImage("mahishmati.jpg")
  homeImg= loadImage("home.png")
  storyImg = loadImage("story.png")
  playImg = loadImage("play.png")
  devasena1= loadImage("devi1.png")
  bahu= loadImage("Bahu.png")
  run= loadImage("Run.png")
  bhallaImg = loadImage("balla.png")
  bhadraImg = loadImage("bhadra.png")
  rockImg = loadImage("stone.png")
  kill = loadImage("Kill.png")
}

function setup() {
  createCanvas(1800,600);
  engine=Engine.create();
  world=engine.world;

  ground = new Ground(850,600,1900,20)

  box4 = new Box4(1550,600-150,250,150)

  box3 = new Box3(1550,500-150,250,150)

 box2 = new Box2(1550,350-150,250,150)
 
 box1 = new Box1(1550,200-150,250,150)

  ball= new Ball(150,250,250,250);
  ball.scale=0.5;

  rockGroup = new Group();
  
  devi = new Villain(1750,400,100,375);
  sling= new Rope(ball.body,{x:ball.body.position.x,y:50});
 // sling.pointB=ball.body.position.x

 // devi.createSprite()

  playbtn = createSprite(1100,550,10,10);
  playbtn.addImage("play",playImg)
  playbtn.scale=0.5
  playbtn.visible=false;

  storybtn = createSprite(1100,450,10,10)
  storybtn.addImage("story",storyImg)
  storybtn.scale=1.5
  storybtn.visible=false;

  homebtn = createSprite(1100,50,10,10)
  homebtn.addImage("story",homeImg)
  homebtn.scale=0.5
  homebtn.visible=false;

  bhalla = createSprite(1300,100)
  bhalla.addImage(bhallaImg)
  bhalla.scale=0.75
  bhalla.velocityY=2;
  
  bhadra = createSprite(1010,500)
  bhadra.addImage(bhadraImg)
  bhadra.scale=0.75
  bhadra.velocityY=-2;

  stand2 = createSprite(1100,500,20,300)
  stand2.velocityY=-2;
  stand2.y=bhadra.y

  stand1 = createSprite(1400,100,20,300)
  stand1.velocityY=2;
  stand1.y=bhalla.y
}

function draw() {
  
  if(Stage===play1){
  background(bg);  
  }

  if(Stage===lose){
    background(kill);  
    }

  if(Stage===play1){
    background(bg);  
    }

   if(Stage===story1){
    background(bg2)
  }
   if(Stage===home){
    background(bg3)
  }
  Engine.update(engine);

  if(stand1.y<100||stand1.y>525){
    stand1.velocityY = stand1.velocityY*-1;
  }
  if(stand2.y<100||stand2.y>525){
    stand2.velocityY = stand2.velocityY*-1;
  }
  
  if(bhalla.y<100||bhalla.y>525){
    bhalla.velocityY = bhalla.velocityY*-1;
  }
  if(bhadra.y<100||bhadra.y>525){
    bhadra.velocityY = bhadra.velocityY*-1;
  }

  drawSprites();

  console.log(Stage)

  if(Stage===lose){
    textSize(40)
    text("YOU HAVE BEEN KILLED",300)
  }

  if(Stage===play1){
    homebtn.visible=false;
    storybtn.visible=false;
    playbtn.visible=false;

    stand1.visible=true;
    stand2.visible=true;
    bhalla.visible=true;
    bhadra.visible=true;

    //if(rockGroup.isTouching(ball.body)){
    //  Stage=lose;
   // }

   // if(detectCollision(ball,devi)){
    //  Stage = Win;
   // }


      if(mousePressedOver(storybtn)){
        Stage=story2
      }
    }
  if(Stage===story1){
    homebtn.visible=true;
    storybtn.visible=false;
    playbtn.visible=false;

    if(mousePressedOver(homebtn)){
      Stage=home
    }
  }


  if(Stage===home){

    playbtn.visible=true;
    storybtn.visible=true;
    homebtn.visible=false;
    stand1.visible=false;
    stand2.visible=false;
    bhalla.visible=false;
    bhadra.visible=false;

    if(mousePressedOver(playbtn)){
      Stage=play1
    }

    if(mousePressedOver(storybtn)){
      Stage=story1
    }
  }

  if(Stage===play1){
  //ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();

  ball.display();
  devi.display();
  stand1.display();
  stand2.display();

  if(keyWentDown("down_Arrow")){
    sling.fly();
   // ball.changeAnimation("bahu",run)
  }

  if(keyWentDown("up_Arrow")){
    sling= new Rope(ball.body,{x:ball.body.position.x,y:50});
    //sling.attach(ball.body);
   // ball.changeAnimation("bahu",bahu)
  }

  sling.display();

  //sling.display();

  if(keyDown("right_Arrow")){
    ball.body.position.x= ball.body.position.x+5
  }

  if(keyDown('left_Arrow')){
    ball.body.position.x= ball.body.position.x-5
  }

  if(frameCount%5===0){
    spawnStone();
  }
}

if(Stage===home){
  fill("black")
  textSize(23)
  text("ՏԵօɾվӀíղҽ",1040,458)
}

if(Stage===story2){
  fill("black")
  textSize(23)
  text("Continue",1040,458)
}

if(Stage===story1){
  fill("white")
  textSize(25)
  text("Story:\n When Sanga and her husband, part of a tribe living  around the province of Mahismathi, save a drowning infant, little do they know the background of the infant or what the future holds for him. \n The kid grows up to as Shivudu, a free-spirit wanting to explore the mountains and in the process learns of his roots and then realizes the  whole purpose of his life and ends up confronting\n the mighty Bhallala Deva to save his mother Devasena..!",50,200)
  text("HOW TO PLAY: \nCLICK UP ARROW TO HANG ON ROPE..  ",50,350)
  text("CLICK DOWN ARROW TO STAND..  ",50,420)
  text("CLICK RIGHT AND LEFT ARROW TO HANG ON ROPE..  ",50,470)
  text(" MAKE SURE THAT THE STONE THROWN BY BHALLA AND BHADRA ISNT TOUCHING",50,520)
}
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}

function attached(lsling,lbodyA){
  lsling.bodyA=lbodyA;
  if(lsling.bodyA===lbodyA){
  console.log("ALL OK OVER")
  }
}

function spawnStone(){
  if(frameCount%100===0){
    rock=createSprite(1300,-30,50,50);
  //  if(bhalla.y>0)
    rock.velocityX=random(-1,-6)
  //  rock.velocityY=random(1,6)
    rock.y= bhalla.y
    rock.addImage(rockImg);
    rock.scale=0.2;
    rockGroup.add(rock);
  }
  if(frameCount%150===0){
    rock=createSprite(1000,-30,50,50);
  //  if(bhalla.y>0)
    rock.velocityX=random(-1,-6)
  //  rock.velocityY=random(1,6)
    rock.y= bhadra.y
    rock.addImage(rockImg);
    rock.scale=0.2;
    rockGroup.add(rock);
  }
}

function  detectCollision(lstone,lmango) {
  mPos=lmango.body.position;
  sPos=lstone.body.position;

var distance= dist(sPos.x,sPos.y,mPos.x,mPos.y)
      if(distance<=lmango.width+lstone.width){
      }
}