const DELIMITER = ';';
// const NEW_LINE = '\r\n';
const searchInput = document.querySelector('#search');

// Імітація затримки завантаження
window.onload = function () {
  setTimeout(function () {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('content').style.display = 'block';
  }, 2000); // 2 секунди затримки
};

// Відкриття модального вікна пошуку
const catalogButton = document.querySelector('.search.button');
const modalSearch = document.querySelector('.modal-overlay');

catalogButton.addEventListener('click', event => {
  modalSearch.classList.add('active');
});

// Закриття модального вікна пошуку
const closeButton = document.querySelector('.modal-close-btn');

closeButton.addEventListener('click', event => {
  modalSearch.classList.remove('active');
});

// Автоматично завантажуємо файл за URL
// const fileURL = '../public/PRICE AP_GDANSK_MOTOROL_ 13.01.2024_R_utf_8.csv'; // Замінити на шлях до файлу
const fileURL =
  'https://raw.githubusercontent.com/ihorborys/vite-maxgear-autoparts/gh-pages/PRICE%20AP_GDANSK_MOTOROL_%2013.01.2024_R_utf_8.csv'; // Замінити на шлях до файлу

const readPrice = () => {
  fetch(fileURL)
    .then(response => response.text())
    .then(data => parseCSV(data))
    .catch(error => alert('Error loading file: ' + error));
};

// Парсинг файлу
const items = [];
const parseCSV = csvData => {
  const rows = csvData.split(/\r?\n/);
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

// // Функція затримки виконання пошуку
// function debounce(func, delay) {
//     let timeout;
//     return (...args) => {
//         clearTimeout(timeout); // Очищаємо попередній таймер
//         timeout = setTimeout(() => func(...args), delay); // Встановлюємо новий
//     };
// }

// Форматування коду введення
function formatCode(rawCode) {
  return rawCode.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
}

// Пошук з затримкою виконання
let searchTimeout;

searchInput.addEventListener('input', event => {
  clearTimeout(searchTimeout); // Скидаємо попередній таймер

  searchTimeout = setTimeout(() => {
    if (items.length === 0) {
      alert('Зачекайте, будь ласка, дані завантажуються'); // Переробити
      return;
    }

    if (event.target.value) {
      const searchCode = formatCode(event.target.value);
      console.log(searchCode);

      const result = items.filter(
        item =>
          (item.code && formatCode(item.code) === searchCode) ||
          (item.unicode && formatCode(item.unicode) === searchCode) ||
          (item.brand && formatCode(item.brand) === searchCode)
      );
      console.log(result);
      displayResults(result);
    }
  }, 800);
});

// // Очищення input при кліку на вільному полі
// document.addEventListener('click', event => {
//   if (!searchInput.contains(event.target)) {
//     // Якщо клік НЕ в межах input
//     searchInput.value = ''; // Очищаємо поле
//   }
// });

// Відображення результатів
const keyMapping = {
  code: 'Код',
  unicode: 'Юнікод',
  brand: 'Бренд',
  desc: 'Опис',
  price: 'Ціна, Є',
  qty: 'Кількість',
  store: 'Склад',
};

function displayResults(result) {
  console.log(typeof result);
  const resultsDiv = document.getElementById('results');

  if (!resultsDiv) {
    console.error('Елемент #results не знайдено.');
    return;
  }

  if (!Array.isArray(result)) {
    alert('Введіть дані для пошуку');
    return;
  }

  const maxItems = 10; // Максимальна кількість позицій
  resultsDiv.innerHTML = result
    .slice(0, maxItems) // Беремо лише перші maxItems елементів
    .map(
      row => `
      <div class="searched-item"">
        ${
          typeof row === 'object' && row !== null
            ? Object.entries(row)
                .map(([key, value]) => {
                  const displayKey = keyMapping[key] || key; // Замінюємо ключ або залишаємо як є
                  return `<p><strong>${displayKey}:</strong> &nbsp ${value}</p>`;
                })
                .join('')
            : `<p>${row}</p>`
        }
      </div>
    `
    )
    .join('');
}

// Додавання вибраник елементів в кошик

readPrice();
