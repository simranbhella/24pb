class Dustbin{
    constructor(x , y)
    {
        var options ={
            isStatic:true
        }
        this.width=200;
        this.height = 20;
        this.thickness = 20;
        this.leftBody = Bodies.rectangle(x,y,20,200,options);
        this.bottomBody = Bodies.rectangle(x,y,this.width,this.height,options)
        this.rightBody = Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body)
        World.add(world,this.bottomBody)
        World.add(world,this.rightBody)

    }
   
        display(){
            var pos =this.body.position;
            rectMode(CENTER);
            fill("red");
            rect(pos.x, pos.y, this.width, this.height);
          }
    }
