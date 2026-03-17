import { useState, useEffect, useRef } from 'react';

// function User({
//   name,
//   onDelete,
// }: {
//   name: string;
//   onDelete: (name: string) => void;
// }) {
//   const isMounted = useRef(false);

//   useEffect(() => {
//     console.log(`mount ${name}`);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   useEffect(() => {
//     if (!isMounted.current) {
//       isMounted.current = true;
//       return;
//     }
//     console.log(`update ${name}`);
//   }, [name]);

//   useEffect(() => {
//     return () => {
//       console.log(`unmount ${name}`);
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <div style={{ display: 'flex' }}>
//       My name is {name}! <br />
//       <button onClick={() => onDelete(name)}>X</button>
//     </div>
//   );
// }

// export function App() {
//   const [users, setUsers] = useState([
//     'Ihar',
//     'Alex',
//     'Denis',
//     'Ivan',
//     'Pavel',
//   ]);
//   return (
//     <div>
//       <h3>Users list</h3>
//       <button
//         onClick={() =>
//           setUsers((prev) => [
//             ...prev,
//             `User_${crypto.randomUUID().slice(0, 5)}`,
//           ])
//         }
//       >
//         Add to end
//       </button>
//       <br />
//       <button
//         onClick={() =>
//           setUsers((prev) => [
//             `User_${crypto.randomUUID().slice(0, 5)}`,
//             ...prev,
//           ])
//         }
//       >
//         Add to start
//       </button>
//       {/* <br />
//       <button
//         onClick={() =>
//           setUsers((prev) => {
//             const newData = [...prev];
//             newData[2] = 'UPDATED NAME';
//             return newData;
//           })
//         }
//       >
//         Update 3
//       </button> */}
//       <br />
//       {users.map((user) => (
//         <User
//           name={user}
//           key={user}
//           onDelete={(name) => {
//             setUsers((prev) => prev.filter((user) => user !== name));
//           }}
//         />
//       ))}
//     </div>
//   );
// }

// Компонент элемента с багом
const styles = {
  demoContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  mainTitle: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '30px',
  },
  flexContainer: {
    display: 'flex',
    gap: '30px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  container: {
    flex: 1,
    minWidth: '400px',
    padding: '20px',
    border: '2px solid #ff6b6b',
    borderRadius: '10px',
    backgroundColor: '#fff9f9',
  },
  title: {
    marginTop: 0,
    color: '#ff6b6b',
    fontSize: '1.5rem',
  },
  buttonGroup: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#4CAF50',
    color: 'white',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'opacity 0.3s',
  },
  resetButton: {
    backgroundColor: '#f44336',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  listItem: {
    backgroundColor: 'white',
    marginBottom: '10px',
    padding: '15px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  itemHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  },
  itemText: {
    fontSize: '16px',
  },
  index: {
    color: '#ff6b6b',
    fontSize: '12px',
    fontWeight: 'bold',
    padding: '2px 6px',
    backgroundColor: '#ffeeee',
    borderRadius: '3px',
  },
  id: {
    color: '#4CAF50',
    fontSize: '12px',
    fontWeight: 'bold',
    padding: '2px 6px',
    backgroundColor: '#e8f5e9',
    borderRadius: '3px',
  },
  input: {
    width: '100%',
    padding: '8px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '14px',
  },
  note: {
    marginTop: '20px',
    fontSize: '14px',
    color: '#666',
    fontStyle: 'italic',
  },
};

const ItemWithBug = ({
  item,
  index,
}: {
  index: number;
  item: { id: number; text: string };
}) => {
  const [inputValue, setInputValue] = useState('');
  const isMounted = useRef(false);

  useEffect(() => {
    console.log(`mount ${item.text}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    console.log(`update ${item.text}`);
  }, [item.text]);

  useEffect(() => {
    return () => {
      console.log(`unmount ${item.text}`);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <li style={styles.listItem}>
      <div style={styles.itemHeader}>
        <strong style={styles.itemText}>{item.text}</strong>
        <span style={styles.index}>index: {index}</span>
      </div>
      <input
        style={styles.input}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Введите текст..."
      />
    </li>
  );
};

const BuggySortingList = () => {
  const [items, setItems] = useState([
    { id: 1, text: 'Первый элемент' },
    { id: 2, text: 'Второй элемент' },
    { id: 3, text: 'Третий элемент' },
  ]);

  const handleSort = () => {
    setItems([...items].reverse());
  };

  const handleReset = () => {
    setItems([
      { id: 1, text: 'Первый элемент' },
      { id: 2, text: 'Второй элемент' },
      { id: 3, text: 'Третий элемент' },
    ]);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>❌ С БАГОМ (index как key)</h2>
      <div style={styles.buttonGroup}>
        <button onClick={handleSort} style={styles.button}>
          Сортировать (реверс)
        </button>
        <button
          onClick={handleReset}
          style={{ ...styles.button, ...styles.resetButton }}
        >
          Сбросить
        </button>
      </div>
      <ul style={styles.list}>
        {items.map((item, index) => (
          <ItemWithBug
            key={index} // ← ПРОБЛЕМА ЗДЕСЬ
            item={item}
            index={index}
          />
        ))}
      </ul>
      <p style={styles.note}>
        👆 Введите текст в поля, нажмите сортировку - текст "переедет" к другому
        элементу
      </p>
    </div>
  );
};

export function App() {
  return <BuggySortingList />;
}

// 1) после map отрисовки ВСЕГДА указываем react key!!!
// 2) react key всегда что-то уникальное(id)!!!
// 3) index можно если список статичен
