// Відкриття модального вікна пошуку
const catalogButton = document.querySelector('.search.button');
const modalSearch = document.querySelector('.modal-overlay');

catalogButton.addEventListener('click', event => {
  modalSearch.classList.add('active');
});

// Закриття модального вікна пошуку
const closeButton = document.querySelector('.modal-close-btn');

closeButton.addEventListener('click', event => {
  modalSearch.classList.remove('active');
});
