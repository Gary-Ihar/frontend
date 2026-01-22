`use strict`;

// --------------------------------------------------- class extends

// class Animal {
//   constructor(name) {
//     this.speed = 0;
//     this.name = name;
//   }

//   run(speed) {
//     this.speed = speed;
//     console.log(`${this.name} бежит со скоростью ${this.speed}.`);
//   }

//   stop() {
//     this.speed = 0;
//     console.log(`${this.name} стоит неподвижно.`);
//   }
// }

// const cat = new Animal('Mila');

// class ExtendetAnimal extends Animal {
//   jump() {
//     console.log(`${this.name} прыгает.`);
//   }

//   run() {
//     super.run(1000);
//     console.log(`${this.name} бежит со скоростью ${this.speed}, и умеет прыгать.`);
//   }
// }

// const dog = new ExtendetAnimal('Rex');

// cat.run(10);
// dog.run();
// console.log(cat, dog);

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   say() {
//     console.log(`${this.name} говорит.`);
//   }
// }

// class Rabbit extends Animal {
//   constructor(name, earLength) {
//     super(name);
//     this.earLength = earLength;
//   }

//   say() {
//     console.log(`${this.name} говорит.`);
//   }
// }

// const rabbit = new Rabbit('White Rabbit', 10);
// console.log(rabbit.earLength);

// class Animal {
//   static type = 'ANIMAL';
//   test = 'test';

//   constructor(name) {
//     this.name = name;
//   }

//   static sayHello() {
//     console.log('Hello', this.type);
//   }

//   say() {
//     console.log(`${this.name} говорит.`);
//   }

//   walk() {
//     console.log(`${this.name} идет.`);
//   }
// }

// const animal = new Animal('Animal');
// Animal.sayHello();
// console.log(Animal.type, Animal.test, animal, animal.type);

// class CoffeeMachine {
//   #waterAmount = 0;

//   get waterAmount() {
//     return this.#waterAmount;
//   }

//   set waterAmount(value) {
//     if (value < 0) throw new Error('Отрицательный уровень воды');
//     this.#waterAmount = value;
//   }
// }

// class Test extends CoffeeMachine {
//   test() {
//     console.log(this);
//   }
// }

// let machine = new Test();
// machine.test();
// machine.waterAmount = 100;

// --------------------------------------------------- ООП

// -- наследование

// class SportCar {
//     constructor(brand, model, year, maxSpeed) {
//         super(brand, model, year);
//         this.maxSpeed = maxSpeed;
//     }

//     boost() {

//     }
// }

// class Car extends SportCar{
//     constructor(brand, model, year) {
//         this.brand = brand;
//         this.model = model;
//         this.year = year;
//     }

//     boost() {
//         return;
//     }
// }

// -- полиморфизм

// class Animal {
//   constructor(name, voice) {
//     this.name = name;
//     this.voice = voice;
//   }

//   say() {
//     console.log(`${this.name} says. ${this.voice}`);
//   }
// }

// class Dog extends Animal {}
// class Cat extends Animal {}
// class Bird extends Animal {}
// class Fish extends Animal {}

// const dog = new Dog('Dog', 'woof');
// const cat = new Cat('Cat', 'meow');
// const bird = new Bird('Bird', 'tweet');
// const fish = new Fish('Fish', 'blub');

// const animals = [dog, cat, bird, fish];

// animals.forEach((animal) => {
//   animal.say();
// });

// -- инкапсуляция

// ----------------------------------------------------------------- event loop

// const btn = document.createElement('button');
// btn.textContent = 'test';
// btn.onclick = () => {
//   console.log('click');

//   async function test() {
//     return Promise.resolve(test());
//   }

//   test();
// };
// document.body.append(btn);

// setTimeout(function timeout() {
//   console.log('Таймаут');
// }, 0);

// let p = new Promise(function (resolve, reject) {
//   console.log('Создание промиса');
//   resolve();
// });

// p.then(function () {
//   console.log('Обработка промиса');
// });

// console.log('Конец скрипта');

// // const macro = [, ]
// // const micro = []

// // 1 - console.log('Создание промиса');
// // 2 - console.log('Конец скрипта')
// // 3 - console.log('Обработка промиса')
// // 4 - console.log('Таймаут')

{
  console.log(1);

  setTimeout(() => console.log(2));

  Promise.resolve().then(() => console.log(3));

  Promise.resolve().then(() => setTimeout(() => console.log(4)));

  Promise.resolve().then(() => console.log(5));

  setTimeout(() => console.log(6));

  console.log(7);
}

// const macro = [, , ];
// const micro = [, , ];

// 1, 7, 3, 5, 2, 6, 4

// ДЗ
// 1) поле для ввода API , нажал ентер и все прогрузилось
// 2) клик по карте обратботать - создать точку интереса
// 3) после перезагрузки страницы и ввода апи ключа,
// я должен видеть все сохранившиеся до этого места на карте (localStorage)
