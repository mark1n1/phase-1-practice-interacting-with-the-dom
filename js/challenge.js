let isPaused = false;
const counter = document.getElementById('counter');
const pauseButton = document.getElementById('pause');
const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const heartButton = document.getElementById('heart');
const submitButton = document.getElementById('submit');
let number = parseInt(counter.innerHTML);

pauseButton.addEventListener('click', () => {
  const buttonStatus = pauseButton.innerHTML;

  if(buttonStatus === 'resume') {
    isPaused = false;
    pauseButton.innerHTML = 'pause';
    disableButtons(false);
  }
  else {
    isPaused = true;
    pauseButton.innerHTML = 'resume';
    disableButtons(true);
  }
});

//setInterval to increment counter
const interval = setInterval(() => {
  if(!isPaused) {
    number++;
    counter.innerText = number;
  }
}, 1000);

minusButton.addEventListener('click', () => {
  number--;
  counter.innerText = number;
});

plusButton.addEventListener('click', () => {
  number++;
  counter.innerText = number;
});

let countLikes = 0;
const ul = document.querySelector('.likes');
const li = document.createElement('li');

heartButton.addEventListener('click', () => {
  li.innerHTML = `${number} has been liked ${++countLikes} times`;
  ul.appendChild(li);
});

function disableButtons(disable) {
  minusButton.disabled = disable;
  plusButton.disabled = disable;
  heartButton.disabled = disable;
  submitButton.disabled = disable;
}