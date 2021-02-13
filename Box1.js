class Box1 extends Base{
    constructor(x,y,width,height){
       //var options={
     //   restitution : 0.8,
      //  friction : 1,
      //  density : 1
      //  }
        super(x,y,width,height)
        this.image=loadImage("head.png")
    }
    display(){
    super.display();
}
   }