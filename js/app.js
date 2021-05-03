import {Event} from './event.js';
import {Canvas} from './canvas.js';

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
    const event = new Event();
    const firstObject = document.querySelector('.first');
    const lastObject = document.querySelector('.last');
    const questionObjects = document.querySelectorAll('.special_markers');
    let position = getGridPosition(window.innerWidth);
    let timer;

    const canvasWrapper = document.querySelector('#canvas_wrapper');
    const canvas = new Canvas(canvasWrapper);

    window.addEventListener('resize', function(e){
        if(timer){
            clearTimeout(timer);
        }

        timer = setTimeout(() => {
            const width = e.target.innerWidth;
            position = getGridPosition(width);
            lastObject.style.gridColumn = `${position.start}/${position.end}`;
            event.expandWidthHoverEvent(lastObject, position.start, position.end, position.moveTo, position.end);
        }, 100)
    });

    event.expandWidthHoverEvent(firstObject, 1, 2, 1, 3);
    event.expandWidthHoverEvent(lastObject, position.start, position.end, position.moveTo, position.end);
    event.displayHiddenImgHoverEvent(questionObjects);
    
}

