// Напиши скрипт, который реагирует на изменение значения input#font-size-control
// (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. 
// В результате при перетаскивании ползунка будет меняться размер текста.


const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

const changeSize = () => 
spanRef.style.fontSize = `${inputRef.value}px`;

inputRef.addEventListener('input', changeSize);