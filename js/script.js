const jordi = document.querySelector('.jordi');
const box = document.querySelector('.box');


const jump = () => {
    jordi.classList.add('jump');
    setTimeout(() => {
        jordi.classList.remove('jump');
    }, 500);
}

const loop = setInterval(()=> {

    const boxPosition = box.offsetLeft;
    const jordiPosition = +window.getComputedStyle(jordi).bottom.replace('px', '');

    console.log(jordiPosition);

        if (boxPosition <= 100 && boxPosition > 0 && jordiPosition <60) {
            box.style.animation = 'none';
            box.style.left = `${boxPosition}px`;  
            
            jordi.style.animation = 'none';
            jordi.style.bottom = `${jordiPosition}px`; 

            jordi.src = './images/over.png';

            clearInterval(loop);
        }

}, 10);

document.addEventListener('keydown', jump);