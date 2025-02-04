// Open burger modal menu
const burgerButton = document.querySelector('.mobile-menu-btn');
const modalBurger = document.querySelector('.modal-overlay.burger');

burgerButton.addEventListener('click', event => {
  modalBurger.classList.add('active');
});

// Close burger modal menu
const closeButton = document.querySelector('.modal-close-btn.burger');

closeButton.addEventListener('click', event => {
  modalBurger.classList.remove('active');
});

// Select item burger modal menu
const mobileItems = document.querySelectorAll('.mobile-menu-list-item');
mobileItems.forEach(item => {
  item.addEventListener('click', () => {
    mobileItems.forEach(item => {
      item.classList.remove('active');
    });
    item.classList.add('active');
  });
});
