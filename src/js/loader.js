import { readPrices } from './read.js';

window.onload = function () {
  const loader = document.getElementById('js-loader');
  const fileURLs = [
    'https://ihorborys-aws-bucket.s3.eu-north-1.amazonaws.com/Prices/AUTOPARTNER.csv',
    'https://ihorborys-aws-bucket.s3.eu-north-1.amazonaws.com/Prices/AUTOPARTNER_2.csv',
    'https://ihorborys-aws-bucket.s3.eu-north-1.amazonaws.com/Prices/GDANSK.csv',
    'https://ihorborys-aws-bucket.s3.eu-north-1.amazonaws.com/Prices/GDANSK_2.csv',
    'https://ihorborys-aws-bucket.s3.eu-north-1.amazonaws.com/Prices/MOTOROL.csv',
    'https://ihorborys-aws-bucket.s3.eu-north-1.amazonaws.com/Prices/MOTOROL_2.csv',
  ];
  console.time('Execution time');
  // Викликаємо функцію readPrice
  readPrices(fileURLs)
    .then(() => {
      console.log('Файл успішно завантажений!');
      console.timeEnd('Execution time');
    })
    .catch(error => {
      console.error('Помилка при завантаженні файлу:', error);
    })
    .finally(() => {
      // Ховаємо індикатор завантаження
      loader.style.display = 'none';
    });
};
