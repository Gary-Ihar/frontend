import { useState } from 'react';

const getterOfValue = () => {
  let a = 0;
  return () => {
    a++;
    return a;
  };
};

const getter = () => {
  console.log('computed');
  return getterOfValue();
};

export const Counter = () => {
  const [value, setValue] = useState(0);
  const [test] = useState(() => getter()());

  const handleClick = () => {
    setValue((prevState) => prevState + 1);
    setValue((prevState) => prevState + 1);
    setValue((prevState) => prevState + 1);
    setValue((prevState) => prevState + 1);
    setValue((prevState) => prevState + 1);
    // просуммирует до 5 за раз
    setValue(value + 1);
    setValue(value + 1);
    setValue(value + 1);
    setValue(value + 1);
    setValue(value + 1);
    // просуммирует до 1 за раз
  };

  console.log(`test: ${test}`);

  return (
    <div>
      <div>Current value: {value}</div>
      <div>
        <button onClick={handleClick}>INCREMENT</button>
      </div>
    </div>
  );
};
