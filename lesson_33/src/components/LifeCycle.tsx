import { useEffect, useState } from 'react';

const DeepComponent = ({ from }: { from: string }) => {
  return <div>DeepComponent from: {from}</div>;
};

export const LifeCycle = () => {
  return <DeepComponent from={'LifeCycle'} />;
};

type User = {
  id: number;
  name: string;
};

const getUsers = () =>
  new Promise<User[]>((res) => {
    setTimeout(
      () =>
        res([
          {
            id: 1,
            name: 'Ihar',
          },
          {
            id: 2,
            name: 'Alex',
          },
        ]),
      3000,
    );
  });

export const LifeCycle2 = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    let isMounted = true;

    getUsers().then((users) => {
      console.log(users, isMounted);
      if (isMounted) {
        console.log(users, isMounted);
        setUsers(users);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};
// export const LifeCycle2 = () => {
//   useEffect(() => {
//     const foo = () => {
//       console.log('click');
//     };

//     window.addEventListener('click', foo);

//     return () => {
//       window.removeEventListener('click', foo);
//     };
//   }, []);

//   return <DeepComponent from={'LifeCycle2'} />;
// };
// const DeepComponent = ({ from }: { from: string }) => {
//   console.log('call DeepComponent', from);

//   useEffect(() => {
//     console.log('mounted DeepComponent', from);
//   }, []);

//   useEffect(() => {
//     return () => {
//       console.log('UNmounted DeepComponent', from);
//     };
//   }, []);

//   return <div>DeepComponent from: {from}</div>;
// };

// export const LifeCycle = ({ count }: { count: number }) => {
//   console.log('call LifeCycle');

//   useEffect(() => {
//     console.log('mounted LifeCycle');
//   }, []);

//   useEffect(() => {
//     console.log(`Update LifeCycle with ${count}`);
//   }, [count]);

//   return <DeepComponent from={'LifeCycle'} />;
// };

// export const LifeCycle2 = () => {
//   console.log('call LifeCycle2');

//   useEffect(() => {
//     console.log('mounted LifeCycle2');
//   }, []);

//   useEffect(() => {
//     return () => {
//       console.log('UNmounted LifeCycle2');
//     };
//   }, []);

//   return <DeepComponent from={'LifeCycle2'} />;
// };
