//Creating variables for cat and mouse

var cat, catimg;
var mouse, mouseimg;
var garden, gardenimg;

function preload() {

    catimg = loadImage("cat1.png");
    mouseimg = loadImage("mouse1.png");
    gardenimg = loadImage("garden.png");
}

function setup(){
 createCanvas(1000,800);
   
 //Creating sprites for cat and mouse
 cat = createSprite(500,400,20,20)
 mouse = createSprite(mouseX,mouseY,10,45);
 garden = createSprite(1000,800);

 //Adding images to cat and mouse
 cat.addImage(catimg);
 mouse.addImage(mouseimg);
 garden.addImage(gardenimg);

}

function draw() {
 
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.addAnimation("catimg2",catimg3);
        cat.changeAnimation("catimg2");
    }

 drawSprites();
}


function keyPressed(){

  //Giving condition for moving the cat
 if(keyCode(LEFT_ARROW)){
    cat.velocityX = -5;
    cat.addAnimation("catRunning",catimg2);
    cat.changeAnimation("catRunning");
}


}
