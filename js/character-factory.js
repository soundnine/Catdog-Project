import {Cat} from './cat.js';
import {Dog} from './dog.js';
import {Winslow} from './winslow.js';

export class CharacterFactory{
    constructor(
        radius = 48,
        randomX,
        randomY,
        xSpeed = 8,
        ySpeed = 8
    ){
        if(!randomX || !randomY){
            throw 'CharcterFactory Constructor Exception';
        }
        this.radius = radius;
        this.randomX = randomX,
        this.randomY = randomY,
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
    }

    setRadius(radius){
        this.radius = radius;
    }

    setXSpeed(xSpeed){
        this.xSpeed = xSpeed;
    }

    setYSpeed(ySpeed){
        this.ySpeed = ySpeed;
    }

    createCharacter(type, image){
        switch(type){
            case 'CAT' : {
                return new Cat(image, this.radius, Math.random()*this.randomX, Math.random()*this.randomY, this.xSpeed, this.ySpeed);
            }

            case 'DOG' : {
                return new Dog(image, this.radius, Math.random()*this.randomX, Math.random()*this.randomY, this.xSpeed, this.ySpeed);
            }
            
            case 'WINSLOW' : {
                return new Winslow(image, this.radius, Math.random()*this.randomX, Math.random()*this.randomY, this.xSpeed, this.ySpeed);
            }
        }
    }

}