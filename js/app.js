import {Event} from './event.js';
import {Canvas} from './canvas.js';
import { CharacterFactory } from './character-factory.js';
import { Draw } from './draw.js';

const getGridPosition = (width) => {
    if(1024 <= width){
        return {
            end : 6,
            start : 5,
            moveTo : 4
            }
    }

    if(768 <= width && width < 1024){
        return  {
            end : 4,
            start : 3,
            moveTo : 1
            }
    }

    if(width < 768){
        return {
            end : 3,
            start : 2,
            moveTo : 1
            }
    }
}

window.onload = () => {
    const firstElObject = document.querySelector('.first');
    const lastElObject = document.querySelector('.last');
    const questionObjects = document.querySelectorAll('.special_markers');
    const canvas = new Canvas();

    const CHARACTERTYPE = {
        CAT : 'CAT',
        DOG : 'DOG',
        WINSLOW : 'WINSLOW'
    }
    const catImage = new Image();
    catImage.src = '/Catdog/image/cat_head_canvas.png';
    const dogImage = new Image();
    dogImage.src = '/Catdog/image/dog_head_canvas.png';
    const winslowImage = new Image();
    winslowImage.src = '/Catdog/image/winslow_head_canvas.png';

    const RADIUS = 48;
    const X = canvas.getWidth();
    const Y = canvas.getHeight();
    const XSPEED = 8;
    const YSPEED = 8;

    const characterFactory = new CharacterFactory(RADIUS, X, Y, XSPEED, YSPEED);
    const catCharacter1 = characterFactory.createCharacter(CHARACTERTYPE.CAT, catImage);
    const catCharacter2 = characterFactory.createCharacter(CHARACTERTYPE.CAT, catImage);
    const dogCharacter1 = characterFactory.createCharacter(CHARACTERTYPE.DOG, dogImage);
    const dogCharacter2 = characterFactory.createCharacter(CHARACTERTYPE.DOG, dogImage);
    const winslowCharacter1 = characterFactory.createCharacter(CHARACTERTYPE.WINSLOW, winslowImage);
    const winslowCharacter2 = characterFactory.createCharacter(CHARACTERTYPE.WINSLOW, winslowImage);
    const winslowCharacter3 = characterFactory.createCharacter(CHARACTERTYPE.WINSLOW, winslowImage);

    const characterList = new Array();
    characterList.push(catCharacter1);
    characterList.push(dogCharacter1);
    characterList.push(winslowCharacter1);
    characterList.push(catCharacter2);
    characterList.push(dogCharacter2);
    characterList.push(winslowCharacter2);
    characterList.push(winslowCharacter3);

    //객체 생성할 때 컨텍스트 안넣어주면 context api 사용안됨
    const drawTool = new Draw(characterList, canvas.getContext(), X, Y);
    drawTool.drawCharacterBalls();

    let timer;
    let position = getGridPosition(window.innerWidth);
    const eventObject = new Event();
    window.addEventListener('resize', function(e){
        if(timer){
            clearTimeout(timer);
        }

        timer = setTimeout(() => {
            const width = e.target.innerWidth;
            position = getGridPosition(width);
            lastElObject.style.gridColumn = `${position.start}/${position.end}`;
            eventObject.expandWidthHoverEvent(lastElObject, position.start, position.end, position.moveTo, position.end);
        }, 100)
    });

    eventObject.expandWidthHoverEvent(firstElObject, 1, 2, 1, 3);
    eventObject.expandWidthHoverEvent(lastElObject, position.start, position.end, position.moveTo, position.end);
    eventObject.displayHiddenImgHoverEvent(questionObjects);

    window.addEventListener('resize', () => {
        const canvasWrapper = document.querySelector('#canvas_wrapper');
        canvas.resize(canvasWrapper.clientWidth - 10, canvasWrapper.clientHeight - 10);
        drawTool.setXY(canvasWrapper.clientWidth - 10, canvasWrapper.clientHeight - 10);
        characterList.forEach((each) => {
            each.setXY(canvasWrapper.clientWidth - 10, canvasWrapper.clientHeight - 10);
        })
    });
}

