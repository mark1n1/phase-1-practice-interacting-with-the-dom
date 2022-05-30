let isPaused = false;
const counter = document.getElementById('counter');
const pauseButton = document.getElementById('pause');
const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const heartButton = document.getElementById('heart');
const submitButton = document.getElementById('submit');
let number = parseInt(counter.innerHTML);
let numberText = counter.innerText;

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
  let countLikes = 0;
  // console.log(number);
  if(!isPaused) {
    const ul = document.querySelector('.likes');
    const li = document.createElement('li');
    const span = document.createElement('span');
    heartButton.addEventListener('click', () => {
      // span.innerHTML = `${++countLikes}`
      // li.innerHTML = `${number} has been liked ${span.innerHTML} times`;
      li.innerHTML = number + " has been liked <span>"+(countLikes++)+"</span>";
      ul.append(li);
    });
    number++;
    counter.innerText = number;
    // console.log(number);
  }
  countLikes = 0;
}, 1000);

minusButton.addEventListener('click', () => {
  number--;
  counter.innerText = number;
});

plusButton.addEventListener('click', () => {
  number++;
  counter.innerText = number;
});

// heartButton.addEventListener('click', () => {
//   li.innerHTML = `${number} has been liked ${++countLikes} times`;
//   ul.append(li);
// });


function disableButtons(disable) {
  minusButton.disabled = disable;
  plusButton.disabled = disable;
  heartButton.disabled = disable;
  submitButton.disabled = disable;
}