export class Event{
    constructor(){}

    expandWidthHoverEvent(object, start, end, moveTo, endTo){
        const preValueOfZIndex = object.style.zIndex;
        let sibling;

        if(object.nextElementSibling){
            sibling = object.nextElementSibling;
        } else{
            sibling = object.previousElementSibling;
        }

        object.addEventListener('mouseover', function(){
            this.style.gridColumn = `${moveTo}/${endTo}`;
            sibling.style.display = 'none';
            this.style.zIndex = 1;
        });

        object.addEventListener('mouseleave', function(){
            this.style.gridColumn = `${start}/${end}`;
            sibling.style.display = 'flex'
            this.style.zIndex = preValueOfZIndex;
        });
    }

    displayHiddenImgHoverEvent(objects){
        objects.forEach((object) => {
            object.addEventListener('mouseover', function(){
                this.firstElementChild.style.display = 'none';
                this.lastElementChild.style.display = 'inline-block';
            });

            object.addEventListener('mouseleave', function(){
                this.firstElementChild.style.display = 'inline-block';
                this.lastElementChild.style.display = 'none';
            });
        });
    }
}