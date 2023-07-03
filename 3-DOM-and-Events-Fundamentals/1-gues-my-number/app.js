'use strict';
//DOM Manipulation with JavaScript
const number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
document.querySelector('.number').textContent = number;
console.log(score, 'function dışındaki log');
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //when there is a no input
  if (!guess) {
    document.querySelector('.message').textContent = '🔢 No Number 🔢';
  }
  //win side
  else if (guess === number) {
    document.querySelector('.message').textContent = '🥳 Correct Number!🥳';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    //BUG
    document.querySelector('.highscores').textContent = score;
    // #BUG
    document.getElementsByClassName('.check').style.display = 'none';
  }

  //higt side
  else if (guess > number) {
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
  }
  //low side
  else if (guess < number) {
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
document.querySelector('.again').addEventListener('click', function () {
  location.reload();
});

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
