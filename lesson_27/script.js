// const a = {
//   name: 'test',
//   method() {
//     console.log(this);
//   },
//   method2: function () {
//     const b = {
//       name: 'test2',
//       method: () => {
//         console.log(this);
//       },
//     };

//     b.method.apply(b);
//   },
// };

// const b = a.method;

// a.method();
// a.method2();
// b();
// console.log(b === a.method);

// ------------------------------------------------- call, apply, bind

// const a = {
//   name: 'name from a object',
//   method(a, b, c) {
//     console.log(this.name, a, b, c);
//   },
// };

// const b = a.method.bind(a);

// a.method();

// a.method.apply({ name: 'name from apply' }, [1, 2, 3]);
// a.method.call({ name: 'name from apply' }, [1, 2, 3]);

// b();

// const c = b.bind({ name: 'name from bind' });
// c();

// const arrow = () => {
//   console.log(this);
// };

// const c = arrow.bind({ name: 'name from arrow' });
// c();
// arrow.call({ name: 'name from arrow' });
// arrow.apply({ name: 'name from arrow' });

// 1 - bind, call, apply работает только с нормальными функциями
// 2 - bind сработает только один раз! к функции, которая была сделана
// с помощью bind нельзя уже привязать контекст
// 3 - apply - один массивоподобный параметр(после контекста)
// 4 - call - параметры передаются по отдельности(после контекста)
