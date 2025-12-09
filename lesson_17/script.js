// const carsResponse = [
//   {
//     model: 'Tesla',
//     year: 2020,
//   },
//   {
//     model: 'BMW',
//     year: 2021,
//   },
//   {
//     model: 'M-B',
//     year: 2022,
//   },
//   {
//     model: 'VW',
//     year: 2023,
//   },
// ];

// function ChartItem({ model, year }) {
//   this.model = model;
//   this.year = year;
//   this.color = (() => {
//     if (year >= 2023) {
//       return '#a83131ff';
//     }
//     if (year >= 2022) {
//       return '#2623d6ff';
//     }
//     if (year >= 2021) {
//       return '#23d66eff';
//     }
//     if (year >= 2020) {
//       return '#d623d6ff';
//     }
//     return '#000000';
//   })();
// }

// const chartData = carsResponse.map((car) => new ChartItem(car));

// console.log(chartData);

// _________________________________________________________________________ рекурсия

// function pow(number, counter) {
//   if (counter <= 1) {
//     return number;
//   }

//   return number * pow(number, counter - 1);
// }

// [
//     pow(2, 3)
//     [3<= 1 ] // не срабатывает
//       return  2 * pow (2, 2)
//               [2<= 1 ] // не срабатывает
//                return  2 * pow (2, 1)
//                        [1<= 1 ] //СРАБАТЫВАЕТ
//                         return 2; //number
//     // _________________________________________
//     8 <-[2 * 4]<-[2 * 2]<-[2]
// ]

// console.log(pow(2, 2)); //  = 4
// console.log(pow(2, 3)); //  = 8
// console.log(pow(2, 4)); //  = 16

// let company = {
//   sales: [
//     {
//       name: 'John',
//       salary: 1000,
//     },
//     {
//       name: 'Alice',
//       salary: 600,
//     },
//   ],
//   development: {
//     sites: {
//       sitesA: [
//         {
//           name: 'Peter',
//           salary: 2000,
//         },
//         {
//           name: 'Alex',
//           salary: 1800,
//         },
//       ],
//       sitesB: [
//         {
//           name: 'Peter',
//           salary: 2000,
//         },
//         {
//           name: 'Alex',
//           salary: 1800,
//         },
//       ],
//     },
//     internals: [
//       {
//         name: 'Jack',
//         salary: 1300,
//       },
//     ],
//   },
// };

// { // ---------------------------- степ
//     sites: {
//       sitesA: [
//         {
//           name: 'Peter',
//           salary: 2000,
//         },
//         {
//           name: 'Alex',
//           salary: 1800,
//         },
//       ],
//       sitesB: [
//         {
//           name: 'Peter',
//           salary: 2000,
//         },
//         {
//           name: 'Alex',
//           salary: 1800,
//         },
//       ],
//     },
//     internals: [
//       {
//         name: 'Jack',
//         salary: 1300,
//       },
//     ],
//   }
// {
//     sites: {
//       sitesA: [
//         {
//           name: 'Peter',
//           salary: 2000,
//         },
//         {
//           name: 'Alex',
//           salary: 1800,
//         },
//       ],
//       sitesB: [
//         {
//           name: 'Peter',
//           salary: 2000,
//         },
//         {
//           name: 'Alex',
//           salary: 1800,
//         },
//       ],
//     },
//   }

// const getSalary = (entity) => {
//   //   if (typeof entity === 'number') {
//   //     return entity;
//   //   }

//   //   if ('salary' in entity) {
//   //     return getSalary(entity.salary);
//   //   }

//   if (Array.isArray(entity)) {
//     return entity.reduce((summ, user) => summ + user.salary, 0);
//   }

//   return Object.values(entity).reduce((summ, users) => summ + getSalary(users), 0);
// };

// console.log(getSalary(company));
