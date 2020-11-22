class Bird{
    constructor(x,y){
        var option={
            density : 1,
            friction : 0.2,
            restitution : 0.8
        }

        this.body=Bodies.rectangle(x,y,30,30,option);
        World.add(world,this.body);
        this.width=30,
        this.height=30;
    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;

        pos.x=mouseX;
        pos.y=mouseY;
        push();
        translate(pos.x,pos.y);
        rotate(angle)
        fill("red");
        stroke("white");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}