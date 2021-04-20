class Paper
{
    constructor(x,y)
{
var options={
    isStatic: false,
    restitution:0.3,
    friction:0,
    density:1.2
}
this.image=loadImage("paper.png")
this.body=Bodies.circle(x, y, 40, options);
this.radius=40;
 		World.add(world, this.body);
}
display(){
    var paperPos=this.body.position;		

    push()
    translate(paperPos.x, paperPos.y);
    imageMode(RADIUS)
    //strokeWeight(4);
    fill(128,128,128)
    image(this.image,0,0,this.radius, this.radius);
    pop()  
}


}




