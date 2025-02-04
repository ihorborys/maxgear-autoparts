// Open search modal menu
const catalogButton = document.querySelector('.search.button');
const modalSearch = document.querySelector('.modal-overlay.search');

catalogButton.addEventListener('click', event => {
  modalSearch.classList.add('active');
});

// Close search modal menu
const closeButton = document.querySelector('.modal-close-btn.search');

closeButton.addEventListener('click', event => {
  modalSearch.classList.remove('active');
});
