// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,

  breakpoints: {
    1280: {
      slidesPerView: 2, // Від 1280px і більше буде 2 слайди
    },
  },

  autoplay: {
    delay: 4000, // Затримка між слайдами (в мілісекундах, 3000 = 3 секунди)
    disableOnInteraction: false, // Продовжувати автопрокрутку після взаємодії користувача
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
});
