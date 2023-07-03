'use strict';
//DOM Manipulation with JavaScript
let number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

console.log(number);
document.querySelector('.check').addEventListener('click', function () {
  console.log(number);
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
    document.querySelector('.number').textContent = number;
    // document.getElementsByClassName('check')[0].style.display = 'none';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > number
          ? '👆 Too High! Guess Again.'
          : '👇 Too Low! Guess Again.';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🤯 Game Over';
      alert('Game Over');
      document.querySelector('.score').textContent = '0';
      document.getElementsByClassName('check')[0].style.display = 'none';
    }
  }

  //higt side
  // else if (guess > number) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent =
  //       '👆 Too High! Guess Again.';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '🤯 Game Over';
  //     alert('Game Over');
  //     document.querySelector('.score').textContent = '0';
  //     document.getElementsByClassName('check')[0].style.display = 'none';
  //   }
  // }
  // //low side
  // else if (guess < number) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent =
  //       '👇 Too Low! Guess Again.';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '🤯 Game Over';
  //     alert('Game Over');
  //     document.querySelector('.score').textContent = '0';
  //     document.getElementsByClassName('check')[0].style.display = 'none';
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  //location.reload();
  console.log(number);
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start Gussing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  if (score > highScore) {
    document.querySelector('.highscore').textContent = highScore;
  }
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
