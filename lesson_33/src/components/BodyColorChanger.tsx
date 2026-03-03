import { useState } from 'react';

type Btn = {
  id: string;
  color: string;
};

const buttons: [Btn, ...Btn[]] = [
  {
    color: 'red',
    id: 'red',
  },
  {
    color: 'green',
    id: 'green',
  },
  {
    color: 'blue',
    id: 'blue',
  },
];

export const BodyColorChanger = () => {
  const [currentBackground, setCurrentBackground] = useState<Btn | null>(null);

  const handleClick = (btn: Btn) => {
    setCurrentBackground(btn);
    document.body.style.backgroundColor = btn.color;
  };

  const handleClean = () => {
    setCurrentBackground(null);
    document.body.style.backgroundColor = 'unset';
  };

  return (
    <div>
      <div>
        <button onClick={handleClean}>Clean</button>
      </div>
      {buttons.map((btnData) => (
        <button
          key={btnData.id}
          style={{
            padding: btnData.id === currentBackground?.id ? 8 : 6,
          }}
          onClick={() => handleClick(btnData)}
        >
          {btnData.color}
        </button>
      ))}
    </div>
  );
};
