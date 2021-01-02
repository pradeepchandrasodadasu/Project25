class BaseClass{
  constructor (x,y,w,h){
    var options = {
      isStatic : true,
      restitution : 0,
      friction : 0.3,
      density : 1.0
      
    }

    this.body = Bodies.rectangle(x,y,w,h,options);
    this.width = w;
    this.height = h;
    this.image = loadImage("dustbin.png");
    World.add(world,this.body);
  }

  display () {

    var pos = this.body.position;
    imageMode(CENTER);
    translate(pos.x,pos.y)
    image(this.image,0,0,this.width,this.height);
  }
}

