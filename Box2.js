class Box2 extends Base{
    constructor(x,y,width,height){
      // var options={
       // restitution : 0.8,
       // friction : 1,
       // density : 1
      //  }
        super(x,y,width,height)
        this.image=loadImage("chest.png")
    }
    display(){
    super.display();
}
   }