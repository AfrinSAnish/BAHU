class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }

        this.width=width;
        this.height=height;
        this.body = Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body)

    }

    display(){
        var Pos=this.body.position
        rectMode(CENTER)
        fill("brown");
        rect(Pos.x,Pos.y,this.width,this.height);
    }
}