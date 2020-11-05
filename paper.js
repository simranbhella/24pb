class Paper{
    constructor(x,y,radius)
    {
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.radius = radius
        this.body = Bodies.circle(x, y, this.radius/2, options);
	    World.add(world, this.body);
    }
    display(){
        var paperPos=this.body.position
        push();
        translate(paperPos.x,paperPos.y)
        fill("blue");
        ellipseMode(CENTER);
        ellipse(0, 0, this.radius, this.radius);
        pop();
       }
}