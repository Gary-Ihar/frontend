// type A = {
//   name: string;
// };

// export const a: A = {
//   name: 'Ihar',
// };

// interface B {
//   name: string;
// }

// export const b: B = {
//   name: 'Alex',
// };

// --------------------------------------- diff "type" & "interface"

// -------------------------------- naming merge
// type A = {
//   name: string;
// };

// type A = {
//   age: number;
// };

// interface A {
//   name: string;
// };

// interface A {
//   age: string;
// };

// export const a: A = {
//   age: 30,
//   name: 'Ihar',
// };

// -------------------------------- typings of functions

// interface Foo {
//   (arg: string): {name: string};
// }

// type Foo1 = (name: string) => {name: string}

// export const a: Foo1 = (name) => {
//   return {name}
// }

// -------------------------------- пересечения

// interface INamedObject {
//   name: string;
// }

// interface IAgedObject {
//   age: number;
// }

// interface IUser extends IAgedObject, INamedObject {}

// export const a: IUser = {
//   age: 30,
//   name: 'Ihar',
// };

// type NamedObject = {
//   name: string;
// }

// type AgedObject = {
//   age: number;
// }

// type User =  AgedObject & NamedObject

// export const a: User = {
//   age: 30,
//   name: 'Ihar',
// };

// type A = string;
// type B = number;

// export function foo(a: A | B) {
//   return a;
// }

// export type User = {
//   name: 'ihar' | 'denis' | 'alex' | 'egor';
//   age: number;
// };

// export function getFirstUser(users: unknown[]): string {
//   const a = (users[0]).name;

//   return a;
// }

// export const test = getFirstUser([
//   { age: 32, name: 'ihar' },
//   { age: 32, name: 'ihar' },
// ]);

// ----------------------------------------------------------------- Дженерики
// type User<K, T = string> = {
//   name: T;
//   age: number;
//   meta: K;
// };

// type Car = {
//   model: string;
//   year: number;
// };

// type Pet = {
//   nick: string;
//   age: number;
// };

// export const userWithCar: User<Car> = {
//   age: 3,
//   name: 'ihar',
//   meta: {
//     model: 'mb',
//     year: 200,
//   },
// };

// export const userWithPet: User<Pet> = {
//   age: 3,
//   name: 'ihar',
//   meta: {
//     nick: 'mb',
//     age: 200,
//   },
// };

// ----------------------------------------------------------------- any/unknown

// any
// export const some: any = { neme: '213' };

// console.log(some.asdasd.asdsadasd.asdadqwgrtyhtyjyujyu6j);

// unknown
// export const some: unknown = { neme: '213', blblblb: 1312313 };

// console.log(some.asdasd.asdsadasd.asdadqwgrtyhtyjyujyu6j);

// ----------------------------------------------------------------- never/void

// export function fooVoid(): void {
//   //void
// }

// export function fooNever(): never {
//   throw new Error('Never function');
// }

// type Action = '1' | '2' | '3' | '4';

// export function getSome(action: Action): string {
//   switch (action) {
//     case '1':
//       return action;
//     case '2':
//       return action;
//     case '3':
//       return action;
//     case '4':
//       return action;
//     default: {
//       const error: never = action;
//       return error;
//     }
//     //   return ''
//   }
// }

// ----------------------------------------------------------------- утверждения типов

// type User = {
//   name: string;
// };

// function foo(): unknown {
//   return '{}';
// }

// const a = foo() as User;

// console.log(a.name);

// когда вы юзаете "any" или "as" скорее всег что-то пошло не так
