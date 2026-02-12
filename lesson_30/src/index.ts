// type StringType = string;
// type NumberType = number;
// type BooleanType = boolean;
type TypedFunction = (user: User) => string;

type User = {
  name: string;
  age: number;
  children: Array<{
    name: string;
    age: number;
  }>;
  cars: string[];
  surname?: string;
};

type RenderFunction = (elems: HTMLElement[]) => void;

export const render: RenderFunction = function (elems) {
  document.body.append(...elems);
};

// export const user1: User = {
//   name: 'Ihar',
//   age: 30,
//   children: [
//     {
//       age: 7,
//       name: 'Alex',
//     },
//   ],
//   cars: ['audi', 'vw', 'mb'],
//   surname: 'slabykho',
// };

// export const user2: User = {
//   name: 'viktor',
//   age: 30,
//   children: [
//     {
//       age: 7,
//       name: 'Alex',
//     },
//   ],
//   cars: ['audi', 'vw', 'mb'],
// };

// export const users = [user1, user2];

// users.forEach((user) => {
//   user.surname?.toLowerCase();
// });

export const fooArrow = (user: User): boolean => {
  return !!user;
};

export const fooBase = function (user?: User): string {
  return JSON.stringify(user);
};

export function fooBase2(user?: User): number {
  return user?.age ?? 0;
}

export const getUser: TypedFunction = (user) => {
  return user.name;
};
