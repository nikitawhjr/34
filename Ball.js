class Ball{
    constructor(x,y,radius){
        var options = {
            'density':1.2,
            
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);

    }
    display(){
        push();
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
        pop();
    }
}