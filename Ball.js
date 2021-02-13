class Ball{
    constructor(x,y,width,height){
        var options={
          //  restitution:0.8,
            frictionAir:0.005,
            density:1
        }

        this.width=width;
        this.height=height;
        this.body = Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body)
        this.image = loadImage("Run.png")

    }

    display(){
        var Pos=this.body.position
        var angle=this.body.angle
        push()
        //rectMode(CENTER)
        fill("white");
        translate(Pos.x,Pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height);
        pop()
    }
}