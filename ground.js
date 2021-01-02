class Ground {
    constructor(x,y,w,h){
        var ground_options = {
            isStatic : true,
            restitution : 0
 
        }
        this.body = Bodies.rectangle(x,y,w,h,ground_options);
        this.body.width = w;
        this.body.height = h;

        World.add(world,this.body);
    }

    display (){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("brown");
        stroke("brown");
        rect(pos.x,pos.y,this.body.width,this.body.height);
     

    }
};