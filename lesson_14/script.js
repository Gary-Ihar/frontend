// --------------------------------- стрелочные функции

// const value = foo(1);

// function foo(a) {
//   console.log('foo', a);
//   return null;
// }

// console.log(value);

// const arrowFoo = () => console.log('arrowFoo');

// arrowFoo();

// const arrowFooWithParams = (a, b, c) => console.log(a, b, c);

// arrowFooWithParams('parameters', 3, []);

// --------------------------------- объекты

// const user = {
//   name: 'Ihar',
//   age: 30,
//   isAdmin: true,
//   sisters: null,
//   auto: undefined,
//   wife: {
//     name: 'Olga',
//     age: 30,
//   },
//   walletBYN: [1, 2, 5, 20, 10],

//   sayHi1() {
//     console.log('Hi world');
//   },
//   // разницу почитать дома
//   // sayHi2: function() {
//   //   console.log('Hi world');
//   // },

//   // sayHi3: () => {
//   //   console.log('Hi world');
//   // }
// };

// console.log(Object.assign({}, user));

// delete user.auto;

// console.log(user);

// const responseString = prompt('Введите ключ для объекта');

// const test = {
//   'a b': 'составное имя',
//   [responseString]: responseString,
// };
// console.log(test['a b']);

// console.log(test, test[responseString]);

// const name = prompt('Введите имя');
// const age = prompt('Введите возраст');

// const createUser = (name, age) => {
//   return {
//     name,
//     age,
//   };
// };

// console.log(createUser(name, age));

// const user = {
//   name: 'ihar',
//   age: 30,
// };

// const car = {
//   model: 'infiniti',
//   age: 25,
// };

// const key = 'model';

// function getInfo(obj) {
//   if (key in obj) {
//     console.log(`Вау, какая крутая машина ${obj.model} и ей всего лишь ${obj.age} лет`);
//   } else {
//     console.log(`Привет ${obj.name}, тебе ${obj.age} лет? я не забыл?`);
//   }
// }

// getInfo(user);
// getInfo(car);

// const user = {
//   name: 'Ihar',
//   age: 30,
//   isAdmin: true,
//   sisters: null,
//   auto: undefined,
//   wife: {
//     name: 'Olga',
//     age: 30,
//   },
//   walletBYN: [1, 2, 5, 20, 10],

//   // sayHi1() {
//   //   console.log('Hi world');
//   // },
//   // разницу почитать дома
//   // sayHi2: function () {
//   //   console.log('Hi world');
//   // },

//   // sayHi3: () => {
//   //   console.log('Hi world');
//   // }
// };

// for (let key in user) {
//   console.log(key, user[key]);
// }

// --------------------------------- объекты копирование

// const user1 = {
//   name: 'Ihar',
// };

// console.log('user1', user1);

// const user2 = user1;

// console.log('user2', user2);

// user2.name = 'Alex';

// console.log('user1', user1);
// console.log('user2', user2);

// const user1 = { name: 'Ihar' };
// const user2 = user1;

// const car1 = { model: 'infiniti' };
// const car2 = { model: 'infiniti' };
// console.log(user1 === user2); // true, true
// console.log(car1 === car2); // false, false

// let test1 = { some: 'some' };
// let test2 = test1;
// test1 = { some: 'some' };

// console.log(test1 === test2); // false; false;

// const obj = { some: 'some' };

// const f = (inputObj) => {
//   inputObj.some = '123';
// };

// f(obj); // let inputObj = obj;

// console.log(obj.some); // 123;

// const user = {
//   name: 'ihar',
//   sayHI() {
//     console.log('hi');
//     return 'hi';
//   },
// };
