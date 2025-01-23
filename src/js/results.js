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

export function displayResults(result) {
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
