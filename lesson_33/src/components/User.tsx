import type { CSSProperties } from 'react';

type Props = {
  style: CSSProperties;
  name: string;
  project: string;
};

export const UserComponent = (props: Props) => {
  const { name, style, project } = props;

  return (
    <div
      style={{
        padding: '0 10px',
        margin: 5,
        display: 'inline-block',
        border: '1px solid black',
        borderRadius: 14,
        background: 'red',
        ...style,
      }}
      className="user"
    >
      <p>Name: {name}</p>
      <p>Project: {project}</p>
    </div>
  );
};
