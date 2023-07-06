'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', function () {
    console.log('button clickked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
  btnCloseModal.addEventListener('click', function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  });
}
overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
// document.addEventListener('keydown', function (event) {
//   console.log(event.key);
//   if (event.key === 'Escape') {
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
//   } else if (event.key === 'Enter') {
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
//   }
// });
document.addEventListener('keydown', function (event) {
  console.log(event.key);
  if (event.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      modal.classList.add('hidden');
      overlay.classList.add('hidden');
    }
  } else if (event.key === 'Enter') {
    if (modal.classList.contains('hidden')) {
      modal.classList.remove('hidden');
      overlay.classList.remove('hidden');
    }
  }
});
/*
classList.contains
içeriyorumu demek.
*/
