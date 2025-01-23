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
