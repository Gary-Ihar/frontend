`use strict`;

// ------------------------------- local storage

// const btn = document.createElement('button');

// btn.textContent = 'Click me';

// btn.addEventListener('click', () => {
//     const key = 'test 1';
//     const value = { name: 'test 2', age: 200 } ;
//     localStorage.setItem(key, JSON.stringify(value));
// });
// document.body.appendChild(btn);

// window.addEventListener('storage', (event) => {
//   console.log('storage', event);
// });

// ------------------------------- __proto__

// let animal = {
//     eats: true
//    };

//   let rabbit = {
//     jumps: true
//   };

//   rabbit.__proto__ = animal

//   console.log(rabbit.eats, rabbit.jumps, rabbit.__proto__, animal.__proto__)

// const animal = {
//     eats: true,
//     walk() {
//         console.log(`${this.name} walk`);
//     }
// }

// const dog = {
//     name: 'Dog',
//     walk() {
//         console.log(`walk from dog`);
//     },
//     __proto__: animal
// }

// dog.walk();

// let animal = {
//   eats: true,
//   walk() {
//     console.log('animal walk');
//   },
// };

// let rabbit = {
//   __proto__: animal,
// };

// rabbit.walk = function () {
//   console.log('Rabbit! Bounce-bounce!');
// };

//   rabbit.walk();
//   animal.walk();

// ------------------------------- F.prototype

// let animal = {
//   eats: true,
// };

// function Rabbit(name) {
//   this.name = name;
// }

// Rabbit.prototype = animal;

// let rabbit = new Rabbit('White Rabbit'); //  rabbit.__proto__ == animal

// console.log(rabbit.eats); // true
// console.log(rabbit); // true
// console.log(Rabbit.prototype); // true

// ------------------------------- Classes

class MyClass {
  isLoadingState = false;

  constructor(...params) {
    this.params = [...params];
  }

  method1(number) {
    console.log(`method ${number}`);
  }

  method2() {
    if (this.isLoadingState) return;

    // calc
  }

  load() {
    this.isLoadingState = true;

    try {
    } finally {
      this.isLoadingState = false;
    }
  }

  get loadingState() {
    // adkasl;daks;ldaksl;d
    return this.isLoadingState;
  }

  set loadingState(value) {
    this.isLoadingState = value;
  }
}

const obj = new MyClass(1, 2, 3, 4);
obj.method1(1);

console.log(obj.loadingState);
obj.loadingState = true;

console.log(obj.loadingState);
console.log(obj);
