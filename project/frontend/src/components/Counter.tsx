export const Counter = ({ count }: { count: number }) => {
  console.log(`render Counter ${count}`);

  return <div>{count}</div>;
};
