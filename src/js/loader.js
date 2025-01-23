// // Імітація затримки завантаження
// window.onload = function() {
//   setTimeout(function() {
//     document.getElementById('js-loader').style.display = 'none';
//   }, 2000); // 2 секунди затримки
// };

import { readPrice } from './read.js';

window.onload = function() {
  const loader = document.getElementById('js-loader');

  // Викликаємо функцію readPrice
  readPrice()
    .then(() => {
      console.log('Файл успішно завантажений!');
    })
    .catch(error => {
      console.error('Помилка при завантаженні файлу:', error);
    })
    .finally(() => {
      // Ховаємо індикатор завантаження
      loader.style.display = 'none';
    });
};

// // Завантажуємо всі файли і об'єднуємо їх
// window.onload = function() {
//   const loader = document.getElementById('js-loader');
//
//   // Показуємо індикатор завантаження
//   loader.style.display = 'block';
//
//   // Завантажуємо всі файли паралельно
//   Promise.all(fileURLs.map(url => fetch(url).then(response => response.text())))
//     .then(fileContents => {
//       // Об'єднуємо вміст файлів
//       const combinedData = fileContents.join('\n');
//       console.log('Об’єднані дані:', combinedData);
//     })
//     .catch(error => {
//       console.error('Помилка при завантаженні файлів:', error);
//     })
//     .finally(() => {
//       // Ховаємо індикатор завантаження
//       loader.style.display = 'none';
//     });
// };

// // // Імітація затримки завантаження
// window.onload = function() {
//   setTimeout(function() {
//     document.getElementById('js-loader').style.display = 'none';
//     document.getElementById('content').style.display = 'block';
//   }, 2000); // 2 секунди затримки
// };

// import { readPrice } from './read.js';
//
// window.onload = async function () {
//   const loader = document.getElementById('loader');
//   loader.style.display = 'block'; // Покажемо loader при завантаженні сторінки
//   await readPrice(); // Чекаємо, поки файл буде завантажений
//   loader.style.display = 'none'; // Сховаємо loader, коли файл буде завантажено
// };
