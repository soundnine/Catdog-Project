import {Cat} from './cat.js'
import {Dog} from './dog.js'
import {Winslow} from './winslow.js'

export class Canvas{
    constructor(parent){
        this.flag = 0;
        this.characterList = ['CAT', 'DOG', 'WINSLOW'];
        this.width = parent.clientWidth - 10;
        this.height = parent.clientHeight - 10;

        window.addEventListener('resize', () => {
            this.width = parent.clientWidth - 10;
            this.height = parent.clientHeight - 10;
            this.resize();
        });
        // this.pixelRatio = (window.devicePixelRatio) ? 2 : 1;
        this.canvas = parent.firstElementChild;
        this.ctx = this.canvas.getContext('2d');

        this.cat = new Image();
        this.cat.src = '/Catdog/image/cat_head_canvas.png';
        this.dog = new Image();
        this.dog.src = '/Catdog/image/dog_head_canvas.png';
        this.winslow = new Image();
        this.winslow.src = '/Catdog/image/winslow_head_canvas.png';

        this.catObject = this.makeCharacter(this.characterList[0]);
        this.catObject2 = this.makeCharacter(this.characterList[0]);
        this.dogObject = this.makeCharacter(this.characterList[1]);
        this.dogObject2 = this.makeCharacter(this.characterList[1]);
        this.winslowObject = this.makeCharacter(this.characterList[2]);
        this.winslowObject2 = this.makeCharacter(this.characterList[2]);
        this.winslowObject3 = this.makeCharacter(this.characterList[2]);

        this.resize();
        this.drawBalls();
    }

    resize(){
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.ctx.scale(1, 1);
    }

    makeCharacter(character){
        const RADIUS = 48;
        const RANDOMX = Math.random() * this.width;
        const RANDOMY = Math.random() * this.height;
        const XSPEED = 8;
        const YSPEED = 8;

        switch(character){
            case this.characterList[0] : {
                return new Cat(this.cat, RADIUS, RANDOMX, RANDOMY, XSPEED, YSPEED);
            }

            case this.characterList[1] : {
                return new Dog(this.dog, RADIUS, RANDOMX, RANDOMY, XSPEED, YSPEED);
            }
            
            case this.characterList[2] : {
                return new Winslow(this.winslow, RADIUS, RANDOMX, RANDOMY, XSPEED, YSPEED);
            }
        }
    }

    drawBalls(){
        window.requestAnimationFrame(this.drawBalls.bind(this));
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.catObject.draw(this.ctx, this.width, this.height);
        this.catObject2.draw(this.ctx, this.width, this.height);
        this.dogObject.draw(this.ctx, this.width, this.height);
        this.dogObject2.draw(this.ctx, this.width, this.height);
        this.winslowObject.draw(this.ctx, this.width, this.height);
        this.winslowObject2.draw(this.ctx, this.width, this.height);
        this.winslowObject3.draw(this.ctx, this.width, this.height);
    }

}