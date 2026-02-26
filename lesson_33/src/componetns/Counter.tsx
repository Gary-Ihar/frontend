import { useState } from 'react';

export const Counter = () => {
  const [value, setValue] = useState(0);

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

  return (
    <div>
      <div>Current value: {value}</div>
      <div>
        <button onClick={handleClick}>INCREMENT</button>
      </div>
    </div>
  );
};
