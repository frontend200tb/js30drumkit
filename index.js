// При нажатии на клавишу выполняем следующую функцию
function playSound(e) {
  // Возьмем аудио с кодом нажатой клавиши
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  // Возьмем div с изображением нажатой клавиши
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // Если нажата клавиша которой нет на экране то выходим из функции
  if(!audio) return
  audio.currentTime = 0; // rewind to the start
  audio.play();
  key.classList.add('playing');
}

function removeTransition(e) {
  // Если свойство не трансформ то выйти из функции
  if (e.propertyName !== 'transform') return;
  // console.log(e.propertyName);
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);