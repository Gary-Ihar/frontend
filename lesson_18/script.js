// BOM - Browser Object Model
// API - Application Programming Interface

// --------------------------------------- взаимодействие с DOM

// const box = document.querySelector('.box');
// const byId = document.getElementById('test');

// const getElementsByClassName = document.getElementsByClassName('box');
// console.log(box, byId, getElementsByClassName);

// const box = document.querySelector('.target');

// console.log('target', box);
// console.log('firstChild', box.firstChild, box.firstElementChild);
// console.log('lastChild', box.lastChild, box.lastElementChild);
// console.log('childs', box.querySelectorAll('.child'));
// console.log('nextSibling', box.nextSibling);
// console.log('previousSibling', box.previousSibling);
// console.log('parentNode', box.parentNode);
// console.log('body', box.parentNode.parentNode);
// console.log('html', box.parentNode.parentNode.parentNode);

// console.log(document.body.firstElementChild.children[1].lastElementChild);

const box1 = document.querySelector('.newTarget');
const box2 = document.querySelector('.secondTarget');

const div = document.createElement('div');
div.style.border = '1px solid black';
div.className = 'box';
// div.textContent = '<strong>Всем привет!</strong> Вы прочитали важное сообщение.';
div.innerHTML = `<div> 
    <strong>Всем привет!</strong> Вы прочитали важное сообщение.
    <br/>
    <div> Новая строка </div>
</div>`;
box1.appendChild(div);

// setTimeout(() => {
//   box2.appendChild(div);
// }, 1000);

// setTimeout(() => {
//   div.remove();
// }, 2000);

// setTimeout(() => {
//   box2.replaceWith(div);
// }, 1000);

setTimeout(() => {
  const clonedBox1 = box1.cloneNode();
  const clonedBoxWithTrue = box1.cloneNode(true);
  box2.after(clonedBox1);
  clonedBox1.after(clonedBoxWithTrue);
}, 1000);
