// Парсинг файлу
const DELIMITER = ';';
const NEW_LINE = '\r\n';
export const items = [];

export const parseCSV = csvData => {
  const rows = csvData.split(NEW_LINE);
  rows.shift(); // Видалити перший рядок (заголовки)
  rows.forEach(row => {
    const splitRow = row.split(DELIMITER);
    items.push({
      code: splitRow[0],
      unicode: splitRow[1],
      brand: splitRow[2],
      desc: splitRow[3],
      qty: splitRow[4],
      price: splitRow[5],
      store: splitRow[6],
    });
  });
  console.log('Дані завантажені:', items);
};

// import Papa from 'papaparse';
//
// export const items = []; // Масив для зберігання об'єктів
//
// export const parseCSV = csvData => {
//   return new Promise((resolve, reject) => {
//     Papa.parse(csvData, {
//       delimiter: ';', // Вказуємо ваш делімітер (;)
//       skipEmptyLines: true, // Пропускати порожні рядки
//       header: true, // Визначати перший рядок як заголовки
//       dynamicTyping: true, // Автоматично конвертувати числа
//       complete: results => {
//         // Дані оброблені
//         results.data.forEach(row => {
//           items.push({
//             code: row.code,
//             unicode: row.unicode,
//             brand: row.brand,
//             desc: row.desc,
//             qty: row.qty,
//             price: row.price,
//             store: row.store,
//           });
//         });
//         console.log('Дані завантажені:', items);
//         resolve(items); // Повертаємо масив об'єктів
//       },
//       error: error => {
//         console.error('Помилка при парсингу:', error);
//         reject(error); // Обробка помилки
//       },
//     });
//   });
// };
