// ---------------------------------------------------------- awaited

// // ----------------------------- npm lib
// type User = {
//   m_name: string;
// };

// export const getUser = async () => {
//   const result = await fetch('sdfsasd');
//   const res = (await result.json()) as User;
//   return res;
// };
// //

// type Foo = typeof getUser

// type FromUser = ReturnType<Foo>

// type OurUser = {
//   address: string;
// } & Awaited<FromUser>;

// let myUser: OurUser;

// const mergeUser = async () => {
//   const libUser = await getUser();

//   myUser = {
//     ...libUser,
//     address: 'Minsk',
//   };
//   console.log(myUser.name, libUser.m_name);
// };

// mergeUser().catch(() => {});

// ---------------------------------------------------------------Partial<Type>
// type User = {
//   id: string;
//   name: string;
//   age: number;
//   address: string;
// };

// function updateUser(user: Omit<Partial<User>, 'id'> & Pick<User, 'id'>) {
//   fetch(`1231223123/${user.id}`, { body: JSON.stringify({ ...user }) }).catch(() => {});
//   // path request to backend ...updateUser
// }

// updateUser({
//   id: '1',
//   address: 'Minsk',
// });

// ---------------------------------------------------------------Required<Type>
// type User = {
//   id?: string;
//   name?: string;
//   age?: number;
//   address?: string;
// };

// export const a: Required<User> = {

// }

// --------------------------------------------------------------- Readonly<Type>
// type User = {
//   id?: string;
//   name?: string;
//   age?: number;
//   address?: string;
// };

// export const a: Readonly<User> = {
//   name: 'Ihar',
// };

// a.name = 'Alex'

// --------------------------------------------------------------- Record<TypeKey, TypeValue>
// type CatName = 'miffy' | 'boris' | 'mordred';

// type CatInfo = {
//   age: number;
//   breed: string;
// };

// export const cats: Partial<Record<CatName, CatInfo>> = {
//   miffy: { age: 10, breed: 'Persian' },
//   mordred: { age: 16, breed: 'British Shorthair' },
// };

// --------------------------------------------------------------- Pick<TargetType, "key from target type">

// type User = {
//   id?: string;
//   name?: string;
//   age?: number;
//   address?: string;
// };

// export type User1 = Pick<User, 'address' | 'name' | 'id'>

// --------------------------------------------------------------- Omit<TargetType, "key from target type">

// type User = {
//   id?: string;
//   name?: string;
//   age?: number;
//   address?: string;
// };

// export type User1 = Omit<User, 'age'>

// --------------------------------------------------------------- Exclude

// export type T0 = Exclude<'a' | 'b' | 'c', 'a'>;

// export type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>;

// export type Shape = { kind: 'circle'; radius: number } | { kind: 'square'; x: number } | { kind: 'triangle'; x: number; y: number };

// export type T3 = Exclude<Shape, { kind: 'circle' }>;

// --------------------------------------------------------------- Extract

// по аналогии Pick/omit <=> Exclude/extract

// --------------------------------------------------------------- NonNullable
//https://www.typescriptlang.org/docs/handbook/utility-types.html#nonnullabletype - там изи

// --------------------------------------------------------------- Parameters
//https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype - там не изи

// function f1(arg1: string, arg2: {name: string}) {};

// type ParamTest = Parameters<typeof f1>;

// export const a: ParamTest = ['Ihar', {name: 'Alex'}]

// --------------------------------------------------------------- ConstructorParameters
//https://www.typescriptlang.org/docs/handbook/utility-types.html#constructorparameterstype - там не изи

// --------------------------------------------------------------- ReturnType
// NodeJS.Timeout
const timer = setInterval(() => {
  clearInterval(timer);
}, 1000);
