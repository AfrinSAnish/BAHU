class Stone{
    constructor(x,y,width,height){
        var options={
            //isStatic:true
            isStatic:false
        }
        this.body= Bodies.rectangle(x,y,width,height,options)
        this.x=x
        this.y=y
        this.height = height
        this.width = width
        this.image= loadImage("stone.png")
        World.add(world,this.body)
        this.Visiblity = 255
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