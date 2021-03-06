// В HTML есть список категорий ul#categories.
//   Напиши скрипт, который выполнит следующие операции.
//   Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементоd
// li.item. Получится 'В списке 3 категории.'.
//   Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст
// заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него
// элементов li).
//   Например для первой категории получится:
//     Категория: Животные
//     Количество элементов: 4


const categoriesRef = document.querySelectorAll('li.item');
console.log(`В списке ${categoriesRef.length} категории`);

categoriesRef.forEach(elem => {
    const titleRef = elem.querySelector('h2');  
    const numberOfCategories = elem.querySelectorAll('li');

    console.log(`Категория: ${titleRef.textContent}`);
    console.log(`Количество элементов: ${numberOfCategories.length}`);
});




