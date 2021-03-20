var dog,sadDog,happyDog;
var feeddog;
var addFood;

function preload(){
  
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  //dog.addImage(sadDog);
  dog.addImage(happyDog);
  dog.scale=0.15;
feed =createButton("Feed the dog");
feed.position(700,95);
feed.mousePressed(feedDog);
addFood=createButton("add Food");
addFood.position(800,95);
addFood.mousePressed(addFoods);
foodObj=new food()
}

function draw() {
  background(46,139,87);
  
  foodObj.display()
  drawSprites();
}

//function to read food Stock
function feedDog(){
  dog.addImage(happyDog);

  if(foodObj.getFoodStock()<=0){
    foodObj.updateFoodStock(fooObj.getFoodStock()*0);
  } else{
    foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  }
}

//function to update food stock and last fed time


//function to add food in stock
function addFoods(){
  foodS++;
  database.ref('/').update({
    food:foods
  }

  )
}