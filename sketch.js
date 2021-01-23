const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var engine,world;
var score = 0;
var backgroundImg;


function preload() {
   
    backgroundImg=loadImage("bg1.jpg")
   // getBackgroundImg();
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
    world = engine.world;

ground=new Ground(500,680,1000,40)
platform=new Ground(400,550,300,40)

polygon=new Hexagon(100,350,40)
sling=new Slingshot(polygon.body,{x:100,y:350})



box1=new Box(340,540,30,40,"blue")
box2=new Box(370,540,30,40,"blue")
box3=new Box(400,540,30,40,"blue")
box4=new Box(430,540,30,40,"blue")
box5=new Box(460,540,30,40,"blue")

box6=new Box(370,510,30,40,"pink")
box7=new Box(400,510,30,40,"pink")
box8=new Box(430,510,30,40,"pink")

box9=new Box(400,480,30,40,"blue")

    Engine.run(engine); 
}


function draw() {

    if(backgroundImg)
    background(backgroundImg);


    rectMode(CENTER);


strokeWeight(2)
textSize(30)
fill("yellow")
text("Drag the hexagon and Release it, to launch it ",80,40)
text("Press Space to re-attach the hexagon to the point",80,80)
text("SCORE : "+score,750,40);

ground.display();
platform.display();

polygon.display();
sling.display();


box1.display();
box1.score();
box2.display();
box2.score();
box3.display();
box3.score();
box4.display();
box4.score();
box5.display();
box5.score();
box6.display();
box6.score();
box7.display();
box7.score();
box8.display();
box8.score();
box9.display();
box9.score();

}


function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}


function keyPressed(){
    if(keyCode===32){
Matter.Body.setPosition(polygon.body, {x:100,y:350});
sling.attach(polygon.body);

    }
}


async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=1700){
        bg = "bg1.jpg";
    }
    else{
        bg = "bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}


