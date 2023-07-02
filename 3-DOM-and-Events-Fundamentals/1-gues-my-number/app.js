'use strict';
/*
console.log(document.querySelector('.message').textContent);
//console.log(document.querySelector('.message').textContent);
//yukarıdaki document class sayensinde seçildi ve içindeki text alanı .textcotent sayesinde seçildi.
//document.querySelector seçiçiyi açarız.
document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
console.log((document.querySelector('.guess').value = 23));
document.querySelector('.guess').value = 23;
*/
//DOM Manipulation with JavaScript
const number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '🔢 No Number 🔢';
  } else if (guess === number) {
    document.querySelector('.message').textContent = '🥳 Correct Number!🥳';
    document.querySelector('.score').textContent = score;
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        '👆 Too High! Guess Again.';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🤯 Game Over';
      alert('Game Over');
      document.querySelector('.score').textContent = '0';
    }
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        '👇 Too Low! Guess Again.';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🤯 Game Over';
      alert('Game Over');
      document.querySelector('.score').textContent = '0';
    }
  }
});
