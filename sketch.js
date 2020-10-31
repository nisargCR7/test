var Width=window.innerWidth
var Height=window.innerHeight
var speed=Height/150
var life=1
var x1,y1
var x2=Width/11,y2=Height/26
var state=1,mstate=0
var count
function  preload() {
  maze=loadImage('images/maze.jpg')
  left=loadAnimation('images/Left_l.png','images/Left_r.png')
  right=loadAnimation('images/Right_l.png','images/Right_r.png')
  up=loadAnimation('images/Up_l.png','images/Up_r.png')
  down=loadAnimation('images/Down_l.png','images/Down_r.png')
  maskimg=loadImage('images/Mask.png')
  sanitizerimg=loadImage('images/Sanitizer.png')
  haldiimg=loadImage('images/Haldi.png')
  antitodeimg=loadImage('images/antitode.png')
  left_stand=loadImage('images/Left.png')
  right_stand=loadImage('images/Right.png')
  up_stand=loadImage('images/Up.png')
  down_stand=loadImage('images/Down.png')
  virusimg=loadAnimation('images/v1.png','images/v2.png','images/v3.png','images/v4.png'
,'images/v5.png','images/v6.png','images/v7.png','images/v8.png');


}



function setup() {
  let can=createCanvas(Width,Height)
  background(maze)
  

//wall1.visible=false
  wall1 = createSprite(Width/18,Height/2,Width/95,Height/1.15)

  wall2 = createSprite(Width/1.083,Height/2,Width/95,Height/1.15)

  wall3 = createSprite(Width/2.05,Height/12.3,Width/1.15,Width/95)
  
  wall4 = createSprite(Width/2.05,Height/1.07,Width/1.15,Width/95)

  wall5 = createSprite(Width/1.64,Height/6.5,Width/1.55,Width/95)

  wall6 = createSprite(Width/1.54,Height/4.5,Width/3.7,Width/95)

  wall7 = createSprite(Width/3.1,Height/4.5,Width/3.9,Width/95)

  wall8 = createSprite(Width/2.45,Height/5.2,Width/95,Height/17)

  wall9 = createSprite(Width/5,Height/2.5,Width/95,Height/2.8)

  wall10 = createSprite(Width/8.35,Height/2.7,Width/95,Height/3.7)

  wall11 = createSprite(Width/1.17,Height/2.8,Width/95,Height/2.6)

  wall12 = createSprite(Width/1.165,Height/1.33,Width/95,Height/4.4)

  wall13 = createSprite(Width/1.29,Height/1.82,Width/95,Height/2)

  wall14 = createSprite(Width/1.39,Height/1.6,Width/95,Height/4.2)

  wall15 = createSprite(Width/1.4,Height/2.8,Width/95,Height/6.8)

  wall16 = createSprite(Width/3.8,Height/2.6,Width/95,Height/5)

  wall17 = createSprite(Width/3.95,Height/1.55,Width/95,Height/5.4)

  wall18 = createSprite(Width/5,Height/1.38,Width/95,Height/5.8)

  wall19 = createSprite(Width/1.55,Height/1.95,Width/95,Height/3.1)

  wall20 = createSprite(Width/3.05,Height/1.95,Width/95,Height/3.1)

  wall21 = createSprite(Width/8.3,Height/1.4,Width/95,Height/3.5)

  wall22 = createSprite(Width/1.51,Height/3.9,Width/95,Height/17)

  wall23 = createSprite(Width/1.37,Height/1.2,Width/95,Height/17)

  wall24 = createSprite(Width/2.96,Height/1.33,Width/95,Height/17)

  wall25 = createSprite(Width/2.53,Height/1.43,Width/95,Height/17)

  wall26 = createSprite(Width/2.53,Height/1.95,Width/95,Height/5)

  wall27 = createSprite(Width/2.05,Height/3.4,Width/2.2,Width/95)

  wall28 = createSprite(Width/2.55,Height/2.8,Width/7,Width/95)

  wall29 = createSprite(Width/1.7,Height/2.8,Width/7.5,Width/95)

  wall30 = createSprite(Width/1.23,Height/3.3,Width/15,Width/95)

  wall31 = createSprite(Width/1.65,Height/1.95,Width/15,Width/95)

  wall32 = createSprite(Width/6,Height/1.75,Width/13,Width/95)

  wall33 = createSprite(Width/1.47,Height/1.73,Width/15,Width/95)

  wall34 = createSprite(Width/3.4,Height/1.78,Width/15,Width/95)

  wall35 = createSprite(Width/11,Height/2.2,Width/15,Width/95)

  wall36 = createSprite(Width/3.4,Height/2.6,Width/15,Width/95)

  wall37 = createSprite(Width/1.42,Height/1.26,Width/7,Width/95)

  wall38 = createSprite(Width/2.6,Height/1.26,Width/2.7,Width/95)

  wall39 = createSprite(Width/1.83,Height/1.5,Width/5.5,Width/95)

  wall40 = createSprite(Width/2.8,Height/1.5,Width/13,Width/95)

  wall41 = createSprite(Width/1.8,Height/1.37,Width/3.2,Width/95)

  wall42 = createSprite(Width/3.4,Height/1.35,Width/12,Width/95)

  wall43 = createSprite(Width/1.5,Height/1.155,Width/2.8,Width/95)

  wall44 = createSprite(Width/3.6,Height/1.155,Width/3.4,Width/95)

  wall45 = createSprite(Width/1.35,Height/1.45,Width/17,Width/95)

  wall46 = createSprite(Width/1.73,Height/2.05,Width/95,Height/9)

  wall47 = createSprite(Width/2.05,Height/2.35,Width/5.2,Width/95)

  wall48 = createSprite(Width/2.05,Height/1.65,Width/5.2,Width/95)

  
  virus1 = createSprite(Width/6.2,Height/6,Width/95,Width/95)
  virus1.addAnimation("v",virusimg)
  virus1.scale=Height/2500
  virus1.velocityY=5

  
  virus2 = createSprite(Width/1.34,Height/3,Width/95,Width/95)
  virus2.addAnimation("v",virusimg)
  virus2.scale=Height/3500
  //virus2.velocityY=5
  
  virus3 = createSprite(Width/2.8,Height/3,Width/95,Width/95)
  virus3.addAnimation("v",virusimg)
  virus3.scale=Height/4500
  //virus3.velocityX=5
  
  virus4 = createSprite(Width/2,Height/1,Width/95,Width/95)
  virus4.addAnimation("v",virusimg)
  virus4.scale=Height/2500
  //virus4.velocityX=5

  mazerunner = createSprite(00,00,100,100)
  mazerunner.addImage("left",left_stand)
  mazerunner.addImage("right",right_stand)
  mazerunner.addImage("up",up_stand)
  mazerunner.addImage("down",down_stand)
  mazerunner.addAnimation("r",right)
  mazerunner.addAnimation("l",left)
  mazerunner.addAnimation("u",up)
  mazerunner.addAnimation("d",down)
  mazerunner.scale=Height/5000


  haldi1 = createSprite(Width/1.145,Height/5.2,Width/38,Height/35)
  haldi1.addImage(haldiimg)
  haldi1.scale=Height/2000

  haldi2 = createSprite(Width/10,Height/2.3,Width/38,Height/35)
  haldi2.addImage(haldiimg)
  haldi2.scale=Height/2000

  mask1 = createSprite(Width/3.5,Height/1.6,Width/38,Height/35)
  mask1.addImage(maskimg)
  mask1.scale=Height/2000

  mask2 = createSprite(Width/3.5,Height/3,Width/38,Height/35)
  mask2.addImage(maskimg)
  mask2.scale=Height/2000

  sanitizer1 = createSprite(Width/1.48,Height/1.53,Width/68,Height/35)
  sanitizer1.addImage(sanitizerimg)
  sanitizer1.scale=Height/2500

  sanitizer2 = createSprite(Width/1.25,Height/2.6,Width/68,Height/35)
  sanitizer2.addImage(sanitizerimg)
  sanitizer2.scale=Height/2500

  
  antitode = createSprite(Width/2.05,Height/2,Width/45,Height/15)
  antitode.addImage(antitodeimg)
  antitode.scale=Height/2000


  star = createImg('images/star.png')
  star.size(Width/45,Height/25);
  star.position(Width/2.05,Height/2.18);


  up = createImg('images/star.png')
  up.size(Width/45,Height/25);
  up.position(Width/2.05,Height/2.5)

  down = createImg('images/star.png')
  down.size(Width/45,Height/25);
  down.position(Width/2.05,Height/1.9)

  left = createImg('images/star.png')
  left.size(Width/45,Height/25);
  left.position(Width/2.3,Height/2.18)

  right = createImg('images/star.png')
  right.size(Width/45,Height/25);
  right.position(Width/1.9,Height/2.18)




}

function draw() {
  background(maze)
  
  oncontextmenu="return false">



   up.mouseOver(()=>{

    mazerunner.velocityX=0;
    mazerunner.velocityY=-speed;
    mazerunner.changeAnimation("u",up)
    mstate="up"
  })

 



  down.mouseOver(()=>{

    mazerunner.velocityX=0;
    mazerunner.velocityY=speed;
    mazerunner.changeAnimation("d",down)
    mstate="down"
  })

  

  

  right.mouseOver(()=>{

    mazerunner.velocityX=speed;
    mazerunner.velocityY=0;
    mazerunner.changeAnimation("r",right)
    mstate="right"
  })

  

  left.mouseOver(()=>{

    mazerunner.velocityX=-speed;
    mazerunner.velocityY=0;
    mazerunner.changeAnimation("l",left)
    mstate="left"
  })

  
  if (keyIsDown(UP_ARROW)) {
  
    mazerunner.velocityX=0;
    mazerunner.velocityY=-speed;
    mazerunner.changeAnimation("u",up)
  }
    
  
   if(keyIsDown(DOWN_ARROW)) {
      
    mazerunner.velocityX=0;
    mazerunner.velocityY=speed;
    mazerunner.changeAnimation("d",down)
  }

  if(keyIsDown(LEFT_ARROW)) {
      
    mazerunner.velocityX=-speed;
    mazerunner.velocityY=0;
    mazerunner.changeAnimation("l",left)
  }

  if(keyIsDown(RIGHT_ARROW)) {
      
    mazerunner.velocityX=speed;
    mazerunner.velocityY=0;
    mazerunner.changeAnimation("r",right)
  }
    
  
  if(virus1.isTouching(wall32)){

   virus1.velocityY=-5

  }
  if(virus1.isTouching(wall3)){

    virus1.velocityY=5
 
   }


  console.log(life)
  // mazerunner.collide(wall1)
  // mazerunner.collide(wall2)
  // mazerunner.collide(wall3)
  // mazerunner.collide(wall4)
  // mazerunner.collide(wall5)
  // mazerunner.collide(wall6)
  // mazerunner.collide(wall7)
  // mazerunner.collide(wall8)
  // mazerunner.collide(wall9)
  // mazerunner.collide(wall10)
  // mazerunner.collide(wall11)
  // mazerunner.collide(wall12)
  // mazerunner.collide(wall13)
  // mazerunner.collide(wall14)
  // mazerunner.collide(wall15)
  // mazerunner.collide(wall16)
  // mazerunner.collide(wall17)
  // mazerunner.collide(wall18)
  // mazerunner.collide(wall19)
  // mazerunner.collide(wall10)
  // mazerunner.collide(wall20)
  // mazerunner.collide(wall21)
  // mazerunner.collide(wall22)
  // mazerunner.collide(wall23)
  // mazerunner.collide(wall24)
  // mazerunner.collide(wall25)
  // mazerunner.collide(wall26)
  // mazerunner.collide(wall27)
  // mazerunner.collide(wall28)
  // mazerunner.collide(wall29)
  // mazerunner.collide(wall30)
  // mazerunner.collide(wall31)
  // mazerunner.collide(wall32)
  // mazerunner.collide(wall33)
  // mazerunner.collide(wall34)
  // mazerunner.collide(wall35)
  // mazerunner.collide(wall36)
  // mazerunner.collide(wall37)
  // mazerunner.collide(wall38)
  // mazerunner.collide(wall39)
  // mazerunner.collide(wall40)
  // mazerunner.collide(wall41)
  // mazerunner.collide(wall42)
  // mazerunner.collide(wall43)
  // mazerunner.collide(wall44)
  // mazerunner.collide(wall45)
  // mazerunner.collide(wall46)
  // mazerunner.collide(wall47)
  // mazerunner.collide(wall48)
  

  wall1.visible=false
  wall2.visible=false
  wall3.visible=false
  wall4.visible=false
  wall5.visible=false
  wall6.visible=false
  wall7.visible=false
  wall8.visible=false
  wall9.visible=false
  wall10.visible=false
  wall11.visible=false
  wall12.visible=false
  wall13.visible=false
  wall14.visible=false
  wall15.visible=false
  wall16.visible=false
  wall17.visible=false
  wall18.visible=false
  wall19.visible=false
  wall20.visible=false
  wall21.visible=false
  wall22.visible=false
  wall23.visible=false
  wall24.visible=false
  wall25.visible=false
  wall26.visible=false
  wall27.visible=false
  wall28.visible=false
  wall29.visible=false
  wall30.visible=false
  wall31.visible=false
  wall32.visible=false
  wall33.visible=false
  wall34.visible=false
  wall35.visible=false
  wall36.visible=false
  wall37.visible=false
  wall38.visible=false
  wall39.visible=false
  wall40.visible=false
  wall41.visible=false
  wall42.visible=false
  wall43.visible=false
  wall44.visible=false
  wall45.visible=false
  wall46.visible=false
  wall47.visible=false
  wall48.visible=false

if(mazerunner.isTouching(virus1)){
counting()
if(count===frameCount){
subtraction()
state=2
}

if(frameCount>count+60){
state=1

}
}



addition()
drawSprites()     
  }

  
function addition(){
  
  // antitode.mousePressed(()=>{
   
  // });

  
  if(mazerunner.isTouching(mask1)){
   life=life+1
   x1=x1+Width/30
   mask1.x=x1
   mask1.y=y1
   console.log(x1)
   console.log(y1)

  
  }
  
  if(mazerunner.isTouching(mask2)){

    life=life+1
    x1=x1+Width/30
    mask2.x=x1
    mask2.y=y1
    console.log(x1)
    console.log(y1)

  }
  
   if(mazerunner.isTouching(sanitizer1)){
    life=life+1
    x1=x1+Width/30
    sanitizer1.x=x1
    sanitizer1.y=y1
    console.log(x1)
    console.log(y1)
  
  }
  
   if(mazerunner.isTouching(sanitizer2)){
    life=life+1
    x1=x1+Width/30
    sanitizer2.x=x1
    sanitizer2.y=y1
    console.log(x1)
    console.log(y1)
  
  }


   if(life===1){
    x1=Width/11
    y1=Height/26
    x2=Width/11
    y2=Height/26
  }




if(mazerunner.isTouching(haldi1)){
    minutes=minutes+1
   };
  
   if(mazerunner.isTouching(haldi2)){
    minutes=minutes+1
   };


}

function subtraction() {

  
  if(life===1){
     mazerunner.x=200
     mazerunner.y=400
     
    
    }
  
   
  if(life>1){
    x2=x2+Width/30
    checkmask()
    
  }
  

}






function checkmask() {
if(mask1.x===x2&&mask1.y===y2){

mask1.destroy()
life=life-1
}
if(mask2.x===x2&&mask2.y===y2){

  mask2.destroy()
  life=life-1
}
if(sanitizer1.x===x2&&sanitizer1.y===y2){

  sanitizer1.destroy()
  life=life-1  
}
if(sanitizer2.x===x2&&sanitizer2.y===y2){
  
  sanitizer2.destroy()
  life=life-1    
}

}

function keyReleased() {
  if (keyCode === UP_ARROW) {
    mazerunner.velocityX=0;
    mazerunner.velocityY=0;
    mazerunner.changeAnimation("up",up_stand)
  } 
   if (keyCode === DOWN_ARROW) {
    mazerunner.velocityX=0;
    mazerunner.velocityY=0;
    mazerunner.changeAnimation("down",down_stand)
  }
  if (keyCode === RIGHT_ARROW) {
    mazerunner.velocityX=0;
    mazerunner.velocityY=0;
    mazerunner.changeAnimation("right",right_stand)
  }
  if (keyCode === LEFT_ARROW) {
    mazerunner.velocityX=0;
    mazerunner.velocityY=0;
    mazerunner.changeAnimation("left",left_stand)
  }
  return false; // prevent default
}

function counting(){
if(state===1){
count=frameCount
}

}


function mouseReleased(){

if(mstate==="right"){
  mazerunner.velocityX=0
  mazerunner.velocityY=0
  mazerunner.changeAnimation("right",right_stand)
  mstate=0
}


if(mstate==="left"){
  mazerunner.velocityX=0
  mazerunner.velocityY=0
  mazerunner.changeAnimation("left",left_stand)
  mstate=0
}


if(mstate==="up"){
 mazerunner.velocityX=0
 mazerunner.velocityY=0
 mazerunner.changeAnimation("up",up_stand)
 mstate=0
}


if(mstate==="down"){
 mazerunner.velocityX=0
 mazerunner.velocityY=0
 mazerunner.changeAnimation("down",down_stand)
 mstate=0
}    



}
