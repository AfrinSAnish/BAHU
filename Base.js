class Base{
   constructor(x,y,width,height){
        var options={
            restitution:0.8,
            friction:1,
            density:1
        }

        this.width=width;
        this.height=height;
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.image=loadImage("legs.png")
        World.add(world,this.body)

    }

    display(){
        var Pos=this.body.position
        var angle=this.body.angle
        push()
       fill("white");
        imageMode(CENTER)
        translate(Pos.x,Pos.y)
        rotate(angle)
        image(this.image,0,0,this.width,this.height);
        pop()
    }
}