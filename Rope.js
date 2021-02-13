class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.2,
            length:254
        }
        this.rope=Constraint.create(options)
        this.pointB=pointB;
        this.image = loadImage("Run.png")
        World.add(world,this.rope)

    }

    display(){
        if(this.rope.bodyA){
        var pointA=this.rope.bodyA.position
        var pointB=this.pointB
        this.rope.bodyA.image = this.image;
        push();
        strokeWeight(2)
        stroke("black")
        line(pointB.x,pointB.y-1000,pointA.x-5,pointA.y-95)
        pop();
    }
}

attach(body){
    this.rope.bodyA = body;
}

fly(){
    this.rope.bodyA = null;
}
}