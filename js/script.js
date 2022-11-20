const sonic = document.querySelector('.sonic');
const vilao = document.querySelector('.vilao');

const jump = () =>{
   sonic.classList.add('jump');
   sonic.src = './img/pulo_2.gif';
   sonic.style.width = '100px';
 
   setTimeout(() => {
      sonic.classList.remove('jump') 
      sonic.src = './img/sonic.gif';
      sonic.style.width = '100px';
   }, 500);
}

const loop = setInterval(() => {

   const vilaoPosition = vilao.offsetLeft;
   const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px','');
   ///virificar a posição

   console.log(vilaoPosition)

   if (vilaoPosition < 100 && vilaoPosition > -28   && sonicPosition < 55){

      vilao.style.animation = 'none';
      vilao.style.left = vilaoPosition + "px";

      sonic.style.animation = 'none';
      sonic.style.bottom = sonicPosition + "px";

      sonic.src = 'img/sonic_dead.png';
      sonic.style.width = '90px';
      sonic.style.marinleft = '90px';

      // clearInterval(loop);

   }

}, 10);

document.addEventListener('keydown', jump);