import { memo, useState } from 'react';

type Props = {
  prefix: string;
};

export const Title = memo((props: Props) => {
  const [title, setTitle] = useState('Example');

  console.log('render Title');

  const handleClick = () => {
    const newTitle = prompt('Input title') ?? 'No title';
    setTitle(newTitle);
  };

  return (
    <div>
      <div>
        {props.prefix} Title: {title}
      </div>
      <div>
        <button onClick={handleClick}>Change title</button>
      </div>
    </div>
  );
});
