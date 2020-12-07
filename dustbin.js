class Dustbin extends BaseClass {
    constructor(x,y){
        super(x,y,150,150);
        this.body.isStatic = true
        this.image = loadImage("dustbin.png");
        
  }
  display(){
    super.display();
  }
        }
    