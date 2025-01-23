import { parseCSV } from './parse.js';

// const fileURLs = ['../public/AUTOPARTNER.csv', '../public/GDANSK.csv', '../public/MOTOROL.csv'];

// Автоматично завантажуємо файл за URL
// const fileURL =
//   'https://ihorborys-aws-bucket.s3.eu-north-1.amazonaws.com/Prices/PRICE+AP_GDANSK_MOTOROL_+13.01.2024_R_utf_8.csv';

// const fileURLs = ['../public/AUTOPARTNER.csv', '../public/GDANSK.csv', '../public/MOTOROL.csv'];
// const fileURLs = [
//   'https://ihorborys-aws-bucket.s3.eu-north-1.amazonaws.com/Prices/PRICE+AP_GDANSK_MOTOROL_+13.01.2024_R_utf_8.csv',
// ];
// console.time('Execution Time');

export const readPrices = fileURLs => {
  if (!Array.isArray(fileURLs) || fileURLs.length === 0) {
    throw new Error('fileURLs should be a non-empty array.');
  }
  // Створюємо масив промісів для завантаження кожного файлу
  const fetchPromises = fileURLs.map(url =>
    fetch(url).then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch file from ${url}`);
      }
      return response.text();
    })
  );

  // Виконуємо всі запити паралельно та об'єднуємо результати
  return Promise.all(fetchPromises)
    .then(filesData => {
      // Масив даних з усіх файлів
      filesData.map(data => parseCSV(data));

      // // Об'єднуємо дані в один прайс (наприклад, злиття масивів)
      // const unifiedData = combinedData.flat();
      //
      // // Подальша обробка або вивід даних
      // console.log('Об’єднаний прайс:', unifiedData);
      // // console.timeEnd('Execution Time'); // Початок вимірювання
      //
      // return unifiedData;
    })
    .catch(error => {
      alert('Error loading files: ' + error);
    });
};

// export const readPrice = () => {
//   return fetch(fileURLs) // Повертаємо проміс
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`HTTP помилка! Статус: ${response.status}`);
//       }
//       return response.text(); // Перетворюємо відповідь у текст
//     })
//     .then(data => {
//       parseCSV(data); // Обробляємо дані
//     })
//     .catch(error => {
//       alert('Error loading file: ' + error); // Виводимо помилку
//       throw error; // Прокидаємо помилку для подальшої обробки
//     });
// };

// // // Автоматично завантажуємо файл за URL
// // const fileURL = '../public/PRICE AP_GDANSK_MOTOROL_ 13.01.2024_R_utf_8.csv'; // Замінити на шлях до файлу
//
// // const fileURL =
// //   'https://raw.githubusercontent.com/ihorborys/vite-maxgear-autoparts/gh-pages/PRICE%20AP_GDANSK_MOTOROL_%2013.01.2024_R_utf_8.csv'; // Замінити на шлях до файлу
//
// const fileURL =
//   'https://ihorborys-aws-bucket.s3.eu-north-1.amazonaws.com/Prices/PRICE+AP_GDANSK_MOTOROL_+13.01.2024_R_utf_8.csv';
//
// export const readPrice = () => {
//   fetch(fileURL)
//     .then(response => response.text())
//     .then(data => parseCSV(data))
//     .catch(error => alert('Error loading file: ' + error));
// };

// export const readPrice = () => {
//   return fetch(fileURL)
//     .then(response => response.text())
//     .then(data => parseCSV(data))
//     .catch(error => alert('Error loading file: ' + error));
// };

// const readPrices = fileURLs => {
//   // Створюємо масив промісів для завантаження кожного файлу
//   const fetchPromises = fileURLs.map(url =>
//     fetch(url).then(response => {
//       if (!response.ok) {
//         throw new Error(`Failed to fetch file from ${url}`);
//       }
//       return response.text();
//     })
//   );
//
//   // Виконуємо всі запити паралельно та об'єднуємо результати
//   Promise.all(fetchPromises)
//     .then(filesData => {
//       // Масив даних з усіх файлів
//       const combinedData = filesData.map(data => parseCSV(data));
//
//       // Об'єднуємо дані в один прайс (наприклад, злиття масивів)
//       const unifiedData = combinedData.flat();
//
//       // Подальша обробка або вивід даних
//       console.log('Об’єднаний прайс:', unifiedData);
//     })
//     .catch(error => {
//       alert('Error loading files: ' + error);
//     });
// };
//
// // Використання

