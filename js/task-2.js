// В HTML есть пустой список ul#ingredients.
// В JS есть массив строк.

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients. 
// Для создания DOM-узлов используй document.createElement().


const listRef = document.querySelector('ul#ingredients');

ingredients.forEach((item) => {
  const itemRef = document.createElement('li');
  itemRef.textContent = item;

  listRef.appendChild(itemRef);
});

console.log(listRef);