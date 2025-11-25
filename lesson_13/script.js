// --------------------------- взаимодействие

// console.log(`Я отработал!`);

// const result = prompt('Сколько тебе лет?');
// console.log(`Тип данных у prompt: ${typeof result}, а если как число: ${+result}`);

// console.log(`Мне ${result} лет!`);

// console.log(`Я отработал!`);
// const question = 'Ты тут главный?';
// const result = confirm(question);

// console.log(result, `Тип данных у prompt: ${typeof result}, а если как число: ${+result}`);

// ------------------------------ if else

// const question = 'Ты тут главный?';
// const result = confirm(question);

// if (result === true) {
//   console.log('Да, я главный');
// } else {
//   console.log('Нет, я не главный');
// }

// const question = 'Сколько тебе лет';
// const result = prompt(question);

// if (typeof result === 'object' || result === '') {
//   alert('Нам нужен ответ!');
// } else {
//   const resultAsNumber = Number(result);

//   if (isNaN(resultAsNumber)) {
//     alert('Да введи ты число наконец!');
//   } else {
//     if (resultAsNumber > 100) {
//       alert('А ты не врешь?');
//     } else {
//       alert('Спасибо за информацию!');
//     }
//   }
// }

// if (5 > 3) console.log('Yes');

// ---------------------------------------- break;

// let counter = 4; // 10
// let factorialOfCounter = 0;

// for (let i = 0; i <= counter; i++) {
//     factorialOfCounter += i;
//     console.log('iteration: ' + i);

//     if (i === 2) {
//         break;
//     }
// }

// console.log(factorialOfCounter);

// ---------------------------------------- break; continue;

// for (let i = 0; i <= 10; i++) {
//   console.log('До континуе код работает! и вот И:' + i);
//   if (i < 5) continue;

//   console.log(i);
// }

// ---------------------------------------- Functions

// const some = 'some';
// console.log(some);

// console.log('До объявления', hoistedVariable);
// var hoistedVariable = 'А я всплыл!!!';
// console.log('После объявления', hoistedVariable);

// foo();

// function foo() {
//   const some = 'some in function';
//   console.log(some);
// }

// const valueFromFunction = foo();
// console.log(valueFromFunction);

// function foo() {
//   const some = 256;
//   return some;
// }

// function getSumm(a = 0, b = 0) {
//   return a + b;
// }

// const summ1 = getSumm(2);
// const summ2 = getSumm(4, 4);
// const summ3 = getSumm();

// console.log(summ1, summ2, summ3);

// foo2();
// foo1();

// const foo1 = function foo1() {
//   console.log('foo1');
// };

// function foo2() {
//   console.log('foo2');
// }

const test = 123;

function foo2(a) {
  console.log(test);
  return;
}

foo2();
