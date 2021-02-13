class Villain{
    constructor(x,y,width,height){
        var options={
            isStatic:true
            //isStatic:false
        }
        this.body= Bodies.rectangle(x,y,width,height,options)
        this.x=x
        this.y=y
        this.height = height
        this.width = width
        this.image= loadImage("devi1.png")
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
      //      else{
      //    World.remove(world, this.body);
      //    push();
     //     this.Visiblity = this.Visiblity - 5;
       //  tint(255,this.Visiblity);
       //   image(this.image, this.body.position.x, this.body.position.y,this.width,this.height);
       //   pop();
      //  }

      }