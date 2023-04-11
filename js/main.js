const sonic = document.querySelector('.sonic');
const crabred = document.querySelector('.crabred');
const moeda = document.querySelector('.moeda');
const soundPulo = new Audio('./assets/sound/jump-15984.mp3')
let rolando = false
let dead = false
// função evento tecla
const jump = () => {
    if(!dead){
        soundPulo.play()
        sonic.classList.add('jump');
    setTimeout (() =>{
        sonic.classList.remove('jump');
    },500);
    sonic.src ='./assets/img/pulo.gif'
    rolando = true 
    }
}

document.addEventListener('keydown', jump); //evento tecla para pulo
document.addEventListener('click', jump); //evento click para pulo

const loop = setInterval(() =>{
    const positionCrabred = crabred.offsetLeft;
    const positionSonic = +window.getComputedStyle(sonic).bottom.replace('px' , '');

    console.log(positionSonic)

    if(positionCrabred <= 80 && positionCrabred > 0 && positionSonic < 80){
        dead = true
        crabred.style.animation = 'none'
        crabred.style.left = `${positionCrabred}px`;

        sonic.style.animation = 'none'
        sonic.style.bottom = `${positionSonic}px`;

        sonic.src = './assets/img/gameover2.png'
        stopBackground()
        clearInterval(loop);
    }
    if(positionSonic === 50 && rolando){
        rolando = false
        sonic.src = './assets/img/sonic.gif' 
    }
} ,10);

function stopBackground(){
// Selecionar o elemento img
const img = document.querySelector('.fundo');

// Criar uma nova instância do objeto Image
const image = new Image();
image.src = img.src;

// Quando a imagem é carregada
image.onload = () => {
  // Criar um elemento canvas e definir suas dimensões
  const canvas = document.createElement('canvas');
  canvas.width = img.clientWidth;
  canvas.height = img.clientHeight;

  // Desenhar o primeiro frame do GIF no canvas
  const ctx = canvas.getContext('2d');
  ctx.drawImage(image, 0, 0, img.clientWidth, img.clientHeight);

  // Substituir o GIF pelo canvas
  img.parentNode.replaceChild(canvas, img);
};
}