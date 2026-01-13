`use strict`;

// // исполняется
// console.log('flow');

// try {
//   console.log('try');
//   new URL('qweqeqwe');
//   console.log('try after error');

//   // пытается выполнить все, что тут
// } catch (error) {
//   console.log('error', error);

//   // если нет ошибки, сюда не попадем
// } finally {
//   console.log('finally worked always');
// }
// // идем дальше
// console.log('continue');

// ----------------------------------------------- Promise

console.log('start');

const promise = new Promise((resolve, reject) => {
  const a = 0;
  console.log('Код исполняется сразу', a);

  setTimeout(() => {
    reject('reject!');
  }, 500);

  setTimeout(() => {
    console.log('RESOLVE WORKED!!!!!!!!!!!!!!!!!');

    resolve('Done!');
  }, 1000);
});

promise
  .then((value) => {
    console.log('выполнилось через секунду', value);
    return 'New Done';
  })
  .then((value) => {
    console.log(value);
  })
  .catch((value) => {
    console.log('Error:', value);
  })
  .finally(() => {
    // loader = false
  });

console.log('promise', promise);

console.log('end');
