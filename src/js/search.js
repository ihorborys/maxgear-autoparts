import { debounce } from './debounce.js';
import { formatCode } from './format.js';
import { items } from './parse.js';
import { displayResults } from './results.js';

// Пошук
const searchInput = document.querySelector('#search');

const handleSearch = event => {
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
};

// Додаємо затримку при введенні даних для пошуку
const debouncedSearch = debounce(handleSearch, 900); // 900 мс затримка
searchInput.addEventListener('input', debouncedSearch);
