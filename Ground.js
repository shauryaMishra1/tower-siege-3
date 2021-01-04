class Ground{
    constructor(){
        var ground_options ={
            isStatic: true
        }
        
        this.body = Bodies.rectangle(450,390,900,20,ground_options);
       // this.x=x;
       // this.y=y;
       
        World.add(world,this.body);
    }
display(){
    var pos=this.body.position;
    rectMode(CENTER);
    fill("green");
    rect(pos.x,pos.y,900,20);
}
}