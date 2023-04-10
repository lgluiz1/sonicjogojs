const sonic = document.querySelector('.sonic');
const crabred = document.querySelector('.crabred');
// função evento tecla
const jump = () => {
    sonic.classList.add('jump');
    setTimeout (() =>{
        sonic.classList.remove('jump');
    },500);
}
// função evento click
const jumpClick = () => {
    sonic.classList.add('jump');
    setTimeout (() =>{
        sonic.classList.remove('jump');
    },500);
}
document.addEventListener('keydown', jump); //evento tecla para pulo
document.addEventListener('click', jumpClick); //evento click para pulo

const loop = setInterval(() =>{
    const positionCrabred = crabred.offsetLeft;
    const positionSonic = +window.getComputedStyle(sonic).bottom.replace('px' , '');

    console.log(positionSonic)

    if(positionCrabred <= 90 && positionCrabred > 0 && positionSonic < 90){

        crabred.style.animation = 'none'
        crabred.style.left = `${positionCrabred}px`;

        sonic.style.animation = 'none'
        sonic.style.left = `${positionSonic}px`;

        sonic.src = './assets/img/gameover2.png'
        
        clearInterval(loop);
    }
} ,10);