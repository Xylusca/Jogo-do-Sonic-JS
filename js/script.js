const sonic = document.querySelector('.sonic');
const vilao = document.querySelector('.vilao');
const arvores = document.querySelector('.arvores');


const jump = () => {
   sonic.classList.add('jump');
   sonic.src = './img/pulo_2.gif';
   sonic.style.width = '100px';
   
   setTimeout(() => {
      sonic.classList.remove('jump')

   }, 500);
}

// Começa o jogo depois de aperta espaco 
document.addEventListener('keydown', (event) => {
   if (event.code === 'Space') {
      jump();
   }
   // Faz as animação voltar a se mexer
   var elements = document.querySelectorAll('.nuvens, .arvores, .sonic, .vilao');
   for (var i = 0; i < elements.length; i++) {
      elements[i].style.animationPlayState = 'running';
   }
   
   const loop = setInterval(() => { // atribui a referência do setInterval à variável 'loop'
      
      
      const vilaoPosition = vilao.offsetLeft;
      const arvoresPosition = arvores.offsetLeft;
      const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px', '');
      ///virificar a posição

      console.log(vilaoPosition)

      if (vilaoPosition < 100 && vilaoPosition > -28 && sonicPosition < 55) {

         // Pausando animação depois da colizão  
         vilao.style.animation = 'none';
         vilao.style.left = vilaoPosition + "px";

         sonic.style.animation = 'none';
         sonic.style.bottom = sonicPosition + "px";

         arvores.style.animation = 'none';
         arvores.style.left = arvoresPosition + "px";

         // Trocando Imagem para uma parada  
         vilao.src = 'img/vilao_parado.png';
         vilao.style.width = '70px';
         vilao.style.marinleft = '70px';
         
         sonic.src = 'img/sonic_dead.png';
         sonic.style.width = '90px';
         sonic.style.marinleft = '90px';
         
         clearInterval(loop);
      } else {

         // Contador de passos 
         const stepsCounter = document.querySelector('.steps');
         let currentSteps = +stepsCounter.textContent;
         currentSteps++;
         stepsCounter.textContent = currentSteps;

      }

   }, 10);
});


document.addEventListener('keydown', jump);