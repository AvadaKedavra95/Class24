class Log{
    constructor(x,y,height,angle){
    var option = {
            restitution : 0.7,
            density : 1,
            friction : 2
        }

        this.body=Bodies.rectangle(x,y,20,height,option);
        World.add(world,this.body);
        this.width=20;
        this.height=height;
        Matter.Body.setAngle(this.body,angle);
    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("brown");
        stroke("white");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop(); 
    }
}