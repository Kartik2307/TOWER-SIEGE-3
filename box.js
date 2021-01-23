class Box{
    constructor(x, y, width, height, color) {
        var options = {
          
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image=loadImage("square.png")
        this.width = width;
        this.height = height;
        this.color=color
        this.visibility=255;
        World.add(world,this.body)
  }

  score(){

    if(this.visibility<100 && this.visibility>-105){
      score++;
    }
  }

display(){
  var pos=this.body.position
  var angle=this.body.angle
  console.log(this.visibility);
  if(this.body.speed<3){
    
    push();
    translate(pos.x,pos.y);
    rotate(angle)
   image(this.image,0,0,this.width,this.height)
   pop();
  }else{
    World.remove(world,this.body)
    push();
    this.visibility=this.visibility-5
    tint(255,this.visibility);
    translate(pos.x,pos.y);
    image(this.image,0,0,this.width,this.height)
  pop();
  }
}



};