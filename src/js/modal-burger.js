// Open-close burger modal menu
const burgerButton = document.querySelector('.mobile-menu-btn');
const modalBurger = document.querySelector('.burger-section');

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
