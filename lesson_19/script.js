function createCounter() {
  let count = 0;

  const increment = function () {
    count++;
    return count;
  };

  return increment;
}

const counter1 = createCounter();
const counter2 = createCounter();

const count1 = counter1(); // 1
const count12 = counter1(); // 2
const count123 = counter1(); // 3

const count2 = counter2(); // 1, (4 - это неправильно)
console.log(count123, count2);

// const makeTVController = function (step = 10) {
//   let volume = 0;

//   return {
//     plus() {
//       volume += step;
//     },
//     minus() {
//       volume -= step;
//     },
//     get() {
//       return volume;
//     },
//   };
// };

// const pult1 = makeTVController();
// const pult2 = makeTVController();

// pult1.plus();
// pult1.plus();
// pult1.plus();
// pult1.plus();
// console.log(pult1.get());

// pult2.plus();
// pult2.plus();
// pult2.plus();
// pult2.plus();
// pult2.plus();
// pult2.plus();
// pult2.plus();
// console.log(pult2.get());

// let value = 'Сюрприз!';

// function f() {
//   let value = 'ближайшее значение';
//   let a = 0;
//   function g() {
//     debugger; // в консоли: напишите alert(value); Сюрприз!

//     console.log('a после дебуггера', a);
//   }

//   return g;
// }

// let g = f();
// g();
