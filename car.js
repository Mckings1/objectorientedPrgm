class car{
    constructor(x, y, width, height){
        this.x =x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.controls=new this.controls();
        this.maxSpeed =3;
        this.speed=0;
        this.acceleration =0.1;
        this.friction=0.05;

    }
    update(){
        if(this.controls.forward){
            this.speed += this.acceleration;
            this.y-=2;
        }
        if(this.controls.reverse){
            this.speed -= this.acceleration;
            this.y+=2;
        }
        if(this.controls.left){
            
            this.x-=2;
        }
        if(this.controls.right){
            
            this.x+=2;
        }
        if(this.speed > this.maxSpeed){
            this.speed = this.maxSpeed;
        }
        if(this.speed < this.maxSpeed/2)
        {
            //this.speed =this.maxSpeed/2;
        }
        if(this.speed >0){
            this.speed-= this.friction;
        }
        if(this.speed < 0){
            this.speed +=this.friction;
        }
        this.y-=this.speed;
    }
}