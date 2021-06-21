'use strict';
let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'no number';
  }

  if (secretNumber === guess) {
    document.querySelector('.message').textContent = 'correct guess!!!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
     if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'number is too high !!' : 'number is too low !!';
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
  /*if (score > 0) {
    if (guess > secretNumber) {
      document.querySelector('.message').textContent = 'number is too high !!';
      score--;
      document.querySelector('.score').textContent = score;
    }
    if (guess < secretNumber) {
      document.querySelector('.message').textContent = 'number is too low !!';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent =
      'you lost ....better luck next time!!';
  }*/
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
