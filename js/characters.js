export class Characters{
    constructor(image, radius, x, y, xSpeed, ySpeed){
        this.image = image;
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
    }

    draw(ctx, canvasWidth, canvasHeight){
        if(this.x < 0 || this.x >= canvasWidth){
            this.xSpeed = -this.xSpeed;
        }

        if(this.y < 0 || this.y >= canvasHeight){
            this.ySpeed = -this.ySpeed;
        }
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        ctx.drawImage(this.image, this.x, this.y, this.radius*2, this.radius*2);
    }
}