import { useState } from 'react';

export const Input = () => {
  // TODO: почитать после 10 занятий от 26.02.2026 о том,
  // что будет если передать туда функцию, которая чет вернет
  const [some, setSome] = useState('No value');

  console.log('STATE:', some);

  return (
    <div>
      <div>Input value: {some}</div>
      <div>
        <input onChange={(event) => setSome(event.target.value)} />
      </div>
    </div>
  );
};
