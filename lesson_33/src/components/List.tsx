import { MOCK_USERS } from '@/constants/mocks';
import { useEffect, useMemo, useState } from 'react';

const getUsers = (start: () => void) =>
  new Promise<typeof MOCK_USERS>((res) => {
    start();
    setTimeout(() => res(MOCK_USERS), 4000);
  });

export const List = () => {
  const [users, setUsers] = useState<typeof MOCK_USERS>([]);
  const [loading, setLoading] = useState(false);
  const [counter, setCounter] = useState({ count: 0 });

  //   const someRef = useRef(0);

  useEffect(() => {
    let isMounted = true;
    getUsers(() => setLoading(true))
      .then((newUsers) => {
        if (isMounted) {
          setUsers(newUsers);
        }
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error(error);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  //   useEffect(() => {
  //     setInterval(() => {
  //       someRef.current++;
  //     }, 1000);
  //   }, []);
  console.log('render');

  const memoizedValue = useMemo(() => {
    console.log('calculated');

    return counter.count;
  }, [counter]);

  return (
    <div>
      <div>
        <button
          onClick={() => {
            setCounter(counter);
          }}
        >
          test
        </button>
        <button
          onClick={() => {
            getUsers(() => setLoading(true))
              .then((newUsers) => {
                setUsers(newUsers);
              })
              .finally(() => {
                setLoading(false);
              })
              .catch((error) => {
                console.error(error);
              });
          }}
        >
          refetch
        </button>
      </div>
      memoizedValue: {memoizedValue}
      {loading
        ? 'Loading...'
        : users.map((user, idx) => <div key={idx}>{user.name}</div>)}
    </div>
  );
};
