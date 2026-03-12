import { useCallback, useState } from 'react';
import { Counter } from './components/Counter';
import { Button } from './components/Button';
import { Title } from './components/Title';

export function App() {
  const [counter, setCounter] = useState(0);

  const handleClick = useCallback(() => {
    setCounter((p) => p + 1);
  }, []);

  console.log('render App');

  return (
    <div>
      {counter % 2 === 0 && <div>Hello</div>}
      <br />
      <Counter count={counter} />
      <br />
      <Title prefix="PREFIX" />
      <br />
      <Button onClick={handleClick}>click</Button>
    </div>
  );
}
