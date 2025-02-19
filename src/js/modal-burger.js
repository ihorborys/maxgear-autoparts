// // Open burger modal menu
// const burgerButton = document.querySelector('.mobile-menu-btn');
// const modalBurger = document.querySelector('.modal-overlay.burger');
//
// burgerButton.addEventListener('click', event => {
//   modalBurger.classList.add('active');
// });

// // Close burger modal menu
// const closeButton = document.querySelector('.modal-close-btn.burger');
//
// closeButton.addEventListener('click', event => {
//   modalBurger.classList.remove('active');
// });

// Open-close burger modal menu 2
const burgerButton = document.querySelector('.mobile-menu-btn');
const modalBurger = document.querySelector('.burger-section');

// burgerButton.addEventListener('click', event => {
//   if (modalBurger.classList.contains('active')) {
//     modalBurger.classList.remove('active');
//   } else modalBurger.classList.add('active');
// });

// burgerButton.addEventListener('click', event => {
//   if (modalBurger.classList.contains('active')) {
//     modalBurger.classList.add('hide');
//     setTimeout(() => {
//       modalBurger.classList.remove('active');
//       modalBurger.classList.remove('hide');
//     }, 1500); // 300ms – підлаштуй під свою анімацію
//   } else {
//     modalBurger.classList.add('active');
//   }
// });

burgerButton.addEventListener('click', event => {
  if (modalBurger.classList.contains('active')) {
    modalBurger.classList.add('hide');

    const onAnimationEnd = () => {
      modalBurger.classList.remove('active', 'hide');
      modalBurger.removeEventListener('animationend', onAnimationEnd);
    };
    modalBurger.addEventListener('animationend', onAnimationEnd);
  } else {
    modalBurger.classList.add('active');
  }
});

// Select item burger modal menu
const mobileItems = document.querySelectorAll('.mobile-menu-list-item');
console.log(mobileItems);
mobileItems.forEach(item => {
  item.addEventListener('click', () => {
    mobileItems.forEach(item => {
      item.classList.remove('active');
    });
    item.classList.add('active');
  });
});
