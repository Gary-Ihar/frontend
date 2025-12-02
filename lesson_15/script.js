// let fruits = ['Яблоко', 'Апельсин', 'Слива'];

// console.log(fruits);

// fruits[1] = 'Banana';

// console.log(fruits);

// fruits[27] = 'Wooow!';

// console.log(fruits);

// let arr = [
//   'Яблоко',
//   { name: 'Джон' },
//   true,
//   function () {
//     alert('привет');
//   },
// ];

// const arr = new Array(1, {}, false, 4);
// console.log(arr);

// ---------------------------------------------------callbacks/cb

// const foo = (cbSomething) => {
//   for (let index = 0; index < 100_000_000; index++) {}

//   cbSomething('parameter');
// };

// const doSomething = (neededData) => {
//   console.log('doSomething', neededData);
// };

// console.log('start');

// foo(doSomething);

// ---------------------------------------------------перебор элементов

// const arr = [1, 2, 3, 35, 'stroka', 5, 6, 7, 54653, 423, 4623];

// for (let i = 0; i <= arr.length; i++) {
//   const value = arr[i];
//   console.log(i, value, arr.length);
// }

// for (let value of arr) {
//   console.log(value);
// }

// ---------------------------------------------------методы массивов
// pop/push, shift/unshift

// const arr = ['SEPARATOR'];
// console.log(arr);

// const pushIndex = arr.push('push');

// console.log(pushIndex, arr);

// const unshiftIndex = arr.unshift('unshift');

// console.log(unshiftIndex, arr);

// const popResult = arr.pop('pop');

// console.log(popResult, arr);

// const shiftResult = arr.shift('shift');

// console.log(shiftResult, arr);

// let arr = ['Я', 'изучаю', 'JavaScript', 'прямо', 'сейчас'];

// // удалить 3 первых элемента и заменить их другими
// // const removedItems = arr.splice(1, 2, 'пью', 'вкусный', 'чай');
// // const removedItems = arr.splice(1, 0, 'пью', 'вкусный', 'чай', 'и');
// // const removedItems = arr.splice(-2, 1);
// arr.splice(0, 1);

// console.log(arr, arr === arr);

// let arrSlice = ['t', 'e', 's', 't'];

// const newArray = arrSlice.slice(0);

// console.log(newArray, newArray === arrSlice);

// console.log(arr.slice(1, 3)); // e,s (копирует с 1 до 3)
// console.log(arr.slice(0));

// console.log(arr.slice(-2)); // s,t (копирует с -2 до конца)

// let arr = [1, 2];

// создать массив из: arr и [3,4]
// const newArr = arr.concat([3, 4], [5, 6]);
// console.log(newArr, arr, newArr === arr); // 1,2,3,4,5,6

// создать массив из: arr и [3,4], потом добавить значения 5 и 6 // BAD PRACTISE
// console.log(arr.concat([3, 4], 5, 6)); // 1,2,3,4,5,6

// const arr = [1, 2, 3, 3, 4, 5, 5, 6, 9, 77, 8, 8];

// const arrfromFoeachMethod = arr.forEach((value, idx) => {
//   console.log(`valueOfArray: ${value}`, `indexOfArray: ${idx}`);
// });

// console.log(arrfromFoeachMethod);

// const arr = [1, 2, 3, 3, 4, 5, 5, 6, 9, 77, 8, 8];

// const myFirstCallbackFnForForEachArrMethod = (value, idx) => {
//   console.log(`valueOfArray: ${value}`, `indexOfArray: ${idx}`);
// };

// arr.forEach(myFirstCallbackFnForForEachArrMethod);

// const arr = ['Pineapple', 'Pineapple', 'Banana'];

// if (arr.includes('Pineapple')) {
//   console.log('Finded apple!!!!');
// } else {
//   console.log('empty');
// }

// const arr = [
//   {
//     model: 'Apple',
//     id: '123',
//   },
//   {
//     model: 'Pineapple',
//     id: '234',
//   },
//   {
//     model: 'Banana',
//     id: '345',
//   },
// ];

// const finded = arr.find((value) => value.id === '234');

// console.log(finded);
