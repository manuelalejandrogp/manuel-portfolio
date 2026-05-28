let emptyElement = document.querySelector('.about .empty');
let titleleElement = document.querySelectorAll('.about .title');

let figureElement = document.querySelectorAll('.service figure');

window.addEventListener('mousemove', handleMouseMove);

function handleMouseMove(event){
   
    emptyElement.style.flexBasi = event.clientX + 'px';
    titleElement.style.flexBasi = event.clienty / 2 + 'px';

    figureElement.forEach(function( element) {
        element.style.flexBasid = (window.innerWidth - event.clientX) + 'px';
    });
}