`use strict`;

// const form = document.querySelector('form');
// const div = document.querySelector('div');
// const p = document.querySelector('p');

// form.addEventListener(
//   'click',
//   (event) => {
//     console.log('Capture click on form');
//   },
//   true
// );

// div.addEventListener(
//   'click',
//   (event) => {
//     event.stopImmediatePropagation();
//     console.log('Capture click on div 1');
//   },
//   true
// );

// div.addEventListener(
//   'click',
//   (event) => {
//     console.log('Capture click on div 2');
//   },
//   true
// );

// p.addEventListener(
//   'click',
//   (event) => {
//     console.log('Capture click on p');
//   },
//   true
// );

// p.addEventListener('click', (event) => {
//   console.log('click on p');
// });

// div.addEventListener('click', (event) => {
//   console.log('click on div 1');
// });

// div.addEventListener('click', (event) => {
//   console.log('click on div 2');
// });

// form.addEventListener('click', (event) => {
//   console.log('click on form');
// });

// const div = document.createElement('div');

// div.addEventListener('click', ({ target }) => {
//   console.log('Span id', target.id);
// });

// for (let index = 0; index < 1000; index++) {
//   const span = document.createElement('span');
//   span.textContent = `${index};`;
//   span.id = `span_id_${index}`;

//   div.appendChild(span);
// }

// document.body.appendChild(div);

// const a = document.createElement('a');
// a.href = 'https://onliner.by';
// a.textContent = 'link to Onliner';

// a.addEventListener('click', (event) => {
//   event.preventDefault();

//   console.log('click!!!');
// });
// // a.onclick = (event) => {
// //   console.log('click!!!');

// //   return false;
// // };

// document.body.appendChild(a);

// const form = document.querySelector('form');
// form.onsubmit = (event) => {
//   const formData = new FormData(event.target);
//   console.log(formData);

//   return false;
// };

// form.addEventListener('submit', (event) => {
//   event.preventDefault();

//   const fData = new FormData(event.target);
//   fData.forEach(console.log);
// });

// ------------------------------------------------------- setTimeout setInterval

// setTimeout(
//   () => {
//     console.log('сработал через секунду после перезагрузки');
//   },
//   1 * 1000 // время
// );

// setInterval(
//   () => {
//     console.log('сработал через секунду после перезагрузки');
//   },
//   1 * 1000, // время
// );

// let i = 0;

// const intervalId = setInterval(
//   () => {
//     i++;
//     console.log(`Iteration count: ${i}`);
//     if (i === 5) {
//       console.log('Clean!');
//       clearInterval(intervalId);
//     }
//   },
//   1 * 1000 // время
// );

// setTimeout(() => {
//   console.log('Через 3s');
// }, 1 * 3000);

// const timeoutId = setTimeout(() => {
//   console.log('Через 2s');
// }, 1 * 2000);

// setTimeout(() => {
//   clearTimeout(timeoutId);
//   console.log('Через 1s');
// }, 1 * 1000);

// const a = {
//   name: 'test',
//   method() {
//     setTimeout(function () {
//       console.log('Через 1s', this);
//     }, 1 * 1000);
//   },
// };

// a.method();

let i = 0;

while (i < 5) {
  i++;

  setTimeout(
    (j) => {
      console.log(`И клобальная - ${i}`, `И на момент регистраици функции в сетТаймаут(j) - ${j}`); // 5
    },
    3000,
    i
  );
}
