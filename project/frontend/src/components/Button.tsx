import { memo, type PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  onClick?: () => void;
}>;

export const Button = memo((props: Props) => {
  const { children, onClick } = props;

  console.log('render Button');

  return <button onClick={onClick}>{children}</button>;
});
