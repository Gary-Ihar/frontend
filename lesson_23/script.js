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

// console.log('start');

// const promise = new Promise((resolve, reject) => {
//   const a = 0;
//   console.log('Код исполняется сразу', a);

//   setTimeout(() => {
//     reject('reject!');
//   }, 500);

//   setTimeout(() => {
//     console.log('RESOLVE WORKED!!!!!!!!!!!!!!!!!');

//     resolve('Done!');
//   }, 1000);
// });

// promise
//   .then((value) => {
//     console.log('выполнилось через секунду', value);
//     return 'New Done';
//   })
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((value) => {
//     console.log('Error:', value);
//   })
//   .finally(() => {
//     // loader = false
//   });

// console.log('promise', promise);

// console.log('end');

// ----------------------------------------------- Promise повторение

// const getPult = () => {
//   let volume = 0;
//   let step = 0.5
//   let max = 10;
//   let min = 0;

//   return () => ({
//     currentVolume: volume,
//     add: () => {
//       volume += step;
//     },
//     minus: () => {
//       volume -= step;
//     }
//   })
// }

// const getMyName = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('Игорь');
//     }, 1000);
//   });
// };

// getMyName().then(console.log);

// ----------------------------------------------- Promise API
// ----------------------------- Promise.all
// Promise.all([
//   new Promise((resolve) =>
//     setTimeout(() => {
//       console.log(1);
//       resolve(1); // 1
//     }, 3000)
//   ),
//   new Promise((resolve) =>
//     setTimeout(() => {
//       console.log(2);
//       resolve(2); // 2
//     }, 2000)
//   ),
//   new Promise((resolve) =>
//     setTimeout(() => {
//       console.log(3);
//       resolve(3); // 3
//     }, 1000)
//   ),
// ]).then(console.log);

// ----------------------------- Promise.allSettled
// Promise.allSettled([
//   new Promise((resolve, reject) =>
//     setTimeout(() => {
//       // console.log(1);
//       resolve(1); // 1
//     }, 3000)
//   ),
//   new Promise((resolve, reject) =>
//     setTimeout(() => {
//       // console.log(2);
//       reject(new Error(2)); // 2
//     }, 2000)
//   ),
//   new Promise((resolve, reject) =>
//     setTimeout(() => {
//       // console.log(3);
//       resolve(3); // 3
//     }, 1000)
//   ),
// ])
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// ----------------------------- Promise.race
// Promise.race([
//   new Promise((resolve, reject) =>
//     setTimeout(() => {
//       // console.log(1);
//       resolve(1); // 1
//     }, 3000)
//   ),
//   new Promise((resolve, reject) =>
//     setTimeout(() => {
//       // console.log(2);
//       reject(new Error(2)); // 2
//     }, 2000)
//   ),
//   new Promise((resolve, reject) =>
//     setTimeout(() => {
//       // console.log(3);
//       resolve(3); // 3
//     }, 1000)
//   ),
// ])
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// ----------------------------- Promise.any
// Promise.any([
//   new Promise((resolve, reject) =>
//     setTimeout(() => {
//       // console.log(1);
//       resolve(1); // 1
//       // reject(new Error(1)); // 2
//     }, 3000)
//   ),
//   new Promise((resolve, reject) =>
//     setTimeout(() => {
//       // console.log(2);
//       resolve(2); // 2
//       // reject(new Error(2)); // 2
//     }, 2000)
//   ),
//   new Promise((resolve, reject) =>
//     setTimeout(() => {
//       // console.log(3);
//       // resolve(3); // 2
//       reject(new Error(3)); // 3
//     }, 1000)
//   ),
// ])
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// ----------------------------- Promise.any
// Promise.any([
//   new Promise((resolve, reject) =>
//     setTimeout(() => {
//       // console.log(1);
//       resolve(1); // 1
//       // reject(new Error(1)); // 2
//     }, 3000)
//   ),
//   new Promise((resolve, reject) =>
//     setTimeout(() => {
//       // console.log(2);
//       resolve(2); // 2
//       // reject(new Error(2)); // 2
//     }, 2000)
//   ),
//   new Promise((resolve, reject) =>
//     setTimeout(() => {
//       // console.log(3);
//       // resolve(3); // 2
//       reject(new Error(3)); // 3
//     }, 1000)
//   ),
// ])
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// ----------------------------- Promise.resolve
// console.log(Promise.resolve('yes'));

// ----------------------------- Promise.reject
// console.log(Promise.resolve('reject'));

// ----------------------------------------------- async/await

// const getPromise = (time) => () => new Promise((r) => setTimeout(() => r(`done in ${time}`), time));

// const resolve1000 = getPromise(1000);
// const resolve2000 = getPromise(2000);
// const resolve3000 = getPromise(3000);

// const asyncFunction = async () => {
//   console.log('start');
//   const result1 = await resolve1000();
//   console.log('result 1', result1);
//   const result2 = await resolve2000();
//   console.log('result 2', result2);
//   const result3 = await resolve3000();
//   console.log('result 3', result3);
//   console.log('finish');

//   return [result1, result2, result3];
// };

// asyncFunction().then(console.log);

// ----------------------------------------------- отлов ошибок
// const getPromise = (time) => {
//   return (isError = false) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (isError) {
//           reject(`rejected in ${time}`);
//         } else {
//           resolve(`done in ${time}`);
//         }
//       }, time);
//     });
//   };
// };

// const resolve1000 = getPromise(1000);
// const resolve2000 = getPromise(2000);
// const resolve3000 = getPromise(3000);

// const asyncFunction = async () => {
//   let result = [];

//   console.log('start');
//   try {
//     const result1 = await resolve1000(true);
//     const result2 = await resolve2000();
//     result.push(result1, result2);
//   } catch (error) {
//     console.log(error);
//     result.push({
//       type: 'error',
//       error,
//     });
//   }
//   console.log('result 1');

//   console.log('result 2');
//   const result3 = await resolve3000();
//   console.log('result 3');

//   console.log('finish');
//   result.push(result3);
//   return result;
// };

// asyncFunction().then(console.log).catch(console.log);

// const result = fetch('https://jsonplaceholder.typicode.com/users/1');

// function rendreUsers(users) {
//   console.log('ща буду рисовать', users);
// }

// result
//   .then((result) => result.json())
//   .then((usersInfo) => {
//     rendreUsers(usersInfo);
//   });

// /users - 10человек
// /users/${user.id} - юзер по айдишке

// 1) сделали запрос  за всеми юзерами и узнали скок человек доступно
// 2) отрисовать список юзеров
// 3) по клику на элемент списка - делать запрос за деталями пользователя
// 4) отрисовать деталями
// 5) хочу чтобы пока не загрузились данные - игнорить или нельзя кликать по деталям новым
