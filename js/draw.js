export class Draw{
    constructor(characterList = new Array(), ctx, x, y){
        this.characterList = characterList;
        this.ctx = ctx;
        this.x = x;
        this.y = y;
    }

    drawCharacterBalls(){
        window.requestAnimationFrame(this.drawCharacterBalls.bind(this));
        this.ctx.clearRect(0, 0, this.x, this.y);
        this.characterList.forEach((each) => {
            each.draw(this.ctx, this.x, this.y);
        });
    }

    setXY(x, y){
        this.x = x;
        this.y = y;
    }
}