class Box{
    constructor(x, y){
        var options = {
            isStatic:true
        }
        this.box1 = Bodies.rectangle(x,y,150,20,options);
        this.box2 = Bodies.rectangle(x-75,y-65,20,150, options);
        this.box3 = Bodies.rectangle(x+75,y-65,20,150, options);

       this.image = loadImage("sprites/dustbingreen.png");

        World.add(world,this.box1);
        World.add(world,this.box2);
        World.add(world,this.box3);

        this.x = x;
        this.y = y;
    }


    display(){
        fill("white");
        imageMode(CENTER);
        image(this.image, this.x, this.y-75, 150, 150);
        // rect(this.x, this.y, 150,20);
        // rect(this.x-75, this.y-65, 20, 150);
        // rect(this.x+75, this.y-65, 20, 150);
    }
} 