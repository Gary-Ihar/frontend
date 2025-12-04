// ---------------------------------------------------методы массивов

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
//   {
//     model: 'Lemon',
//     id: '3345',
//   },
//   {
//     model: 'Avokado',
//     id: '4256',
//   },
// ];
// -------------------------------------------------
// const filtered = arr.filter((value) => {
//   if (value.model.toLowerCase().includes('apple')) {
//     return true;
//   }

//   if (value.id === '4256') {
//     return true;
//   }

//   return false;
// });

// console.log(filtered, arr);

// -------------------------------------------------
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
//   {
//     model: 'Lemon',
//     id: '3345',
//   },
//   {
//     model: 'Avokado',
//     id: '4256',
//   },
// ];

// const newSomeArray = arr.map((value) => {
//     return value.model;
// });

// console.log(newSomeArray, arr);
// -------------------------------------------------
// const arr = [
//   {
//     value: 2,
//     model: 'Apple',
//     id: '123',
//   },
//   {
//     value: 1,
//     model: 'Pineapple',
//     id: '234',
//   },
//   {
//     value: 3,
//     model: 'Banana',
//     id: '345',
//   },
//   {
//     value: 5,
//     model: 'Lemon',
//     id: '3345',
//   },
//   {
//     value: 4,
//     model: 'Avokado',
//     id: '4256',
//   },
// ];

// const sortedArr = arr.toSorted((a, b) => {
//   if (a.value < b.value) {
//     return -1;
//   }
//   if (a.value > b.value) {
//     return 1;
//   }

//   return 0;
// });

// console.log(sortedArr, arr, arr === sortedArr);
// -------------------------------------------------

// const arr = [1, 2, 3, 4, 5];
// const reversedArr = arr.toReversed();

// console.log(reversedArr, arr, arr === reversedArr);

// -------------------------------------------------

// const names = 'Вася, Петя, Маша';

// const arr = names.split(', ');

// const newJoinedString = arr.join(' - ');

// console.log(arr, newJoinedString);

// -------------------------------------------------

// const products = [
//   {
//     price: 2,
//     model: 'Apple',
//     id: '123',
//   },
//   {
//     price: 1,
//     model: 'Pineapple',
//     id: '234',
//   },
//   {
//     price: 3,
//     model: 'Banana',
//     id: '345',
//   },
//   {
//     price: 5,
//     model: 'Lemon',
//     id: '3345',
//   },
//   {
//     price: 4,
//     model: 'Avokado',
//     id: '4256',
//   },
// ];

// const summOfPrice = arr.reduce((acc, value) => {
//   console.log(acc); // 0
//   return acc + value.price;
// }, 0);

// console.log('summOfPrice:', summOfPrice);

// const namesOfProducts = arr.reduce((acc, value) => {
//   acc.push(value.model);

//   return acc;
// }, []);

// console.log('namesOfProducts:', namesOfProducts);

// const wat = arr.reduce(
//   (acc, value, index) => {
//     if (index === 0) {
//       console.log(index, acc);
//       return ['second iteration'];
//     }

//     if (index === 1) {
//       console.log(index, acc);
//       return { tutIdxRavenOdin: true };
//     }

//     if (index === 2) {
//       console.log(index, acc);
//       return '{ tutIdxRavenOdin: true}';
//     }

//     if (index === 3) {
//       console.log(index, acc);
//       return value.model;
//     }

//     if (index === 4) {
//       console.log(index, acc);
//       return 'Success reduce operation';
//     }
//   },
//   { inputObject: 'yes' }
// );

// console.log(wat);

// const cheapProducts = products.filter((product) => product.price <= 3);
// console.log(cheapProducts);

// let summ = 0;

// cheapProducts.forEach((product) => {
//   summ += product.price;
// });

// console.log(summ);

// const summOfChepProducts = products.reduce((acc, product) => {
//   const isCheapProduct = product.price <= 3;

//   if (isCheapProduct) {
//     acc += product.price;
//   }

//   return acc;
// }, 0);

// console.log(summOfChepProducts);
// ---------------------------------------------------------------- деструктуризация

// const inputArr = ['ihar', 'ivan', 'oleg', 'alex', 'dima'];

// const [first, , third] = inputArr;

// console.log(first);
// console.log(third);
// console.log(inputArr);

// const inputArr = ['ihar', 'ivan', 'oleg', 'alex', 'dima'];

// const [first, second, ...restValues] = inputArr;

// console.log(first);
// console.log(second);
// console.log(restValues);

// console.log('inputArr:', inputArr);

// const inputArr = ['ihar', 'ivan', 'oleg', 'alex', 'dima'];

// const newArrOfNames = [...inputArr].reverse();

// console.log(newArrOfNames === inputArr, newArrOfNames);

// console.log('inputArr:', inputArr);

// const inputArr = ['ihar', 'ivan', 'oleg', 'alex', 'dima'];
// const [, , , , fifth, six = 'default value'] = inputArr;

// console.log(fifth, six);

// const {
//   title,
//   width,
//   height,
//   some = 'defaultValue',
// } = {
//   title: 'Menu',
//   width: 100,
//   height: 200,
// };

// console.log(title, width, height, some);

// const options = {
//   title: 'options title',
//   width: 100,
//   height: 200,
// };

// const news = {
//   title: 'news title',
//   description: 'lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20',
// };

// const { title: optionsTitle } = options;
// const { title: newsTitle } = news;
// const { unknownProperty: renamed = 'default name' } = news;

// console.log(optionsTitle, newsTitle, renamed);

// const options = {
//   title: 'options title',
//   width: 100,
//   height: 200,
//   method() {
//     console.log('test');
//   },
//   innerObject: {
//     test: 'some',
//   },
// };

// const clone = { ...options };

// clone.innerObject.test = 'Not some!!!';

// console.log(options);

// console.log(clone === options, clone, options);

// console.log(clone.method === options.method);
// console.log(clone.innerObject === options.innerObject);

// const products = [
//   {
//     price: 2,
//     model: 'Apple',
//     id: '123',
//   },
//   {
//     price: 1,
//     model: 'Pineapple',
//     id: '234',
//   },
//   {
//     price: 3,
//     model: 'Banana',
//     id: '345',
//   },
//   {
//     price: 5,
//     model: 'Lemon',
//     id: '3345',
//   },
//   {
//     price: 4,
//     model: 'Avokado',
//     id: '4256',
//   },
// ];

// const summOfPrice = products.reduce((acc, { price, ...rest }) => {
//   console.log(price, rest); // 0
//   return acc + price;
// }, 0);

// console.log(summOfPrice);

const a = {
  m: () => {
    console.log('a.m');
  },
};

const b = {
  m: () => {
    console.log('b.m');
  },
};

const c = {
  m1: () => {
    console.log('c.m1');
  },
};

const arr = [a, b, c];

// arr.forEach((obj) => {
//   obj.m?.();
// });

console.log(b.test?.test?.test?.test);
