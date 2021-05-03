export class Canvas{
    constructor(){
        this.canvas = document.querySelector('canvas');
        this.width = this.canvas.parentElement.clientWidth - 10;
        this.height = this.canvas.parentElement.clientHeight - 10;
        this.ctx = this.canvas.getContext('2d');
        this.resize();
    }

    resize(width = this.width, height = this.height){
        this.canvas.width = width;
        this.canvas.height = height;
        this.ctx.scale(1, 1);
    }

    getWidth(){
        return this.width;
    }

    getHeight(){
        return this.height;
    }

    getContext(){
        return this.ctx;
    }
}