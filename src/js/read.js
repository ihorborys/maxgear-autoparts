import { parseCSV } from './parse.js';

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
    })
    .catch(error => {
      alert('Error loading files: ' + error);
    });
};
