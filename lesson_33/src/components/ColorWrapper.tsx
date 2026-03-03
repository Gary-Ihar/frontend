import { useState, type CSSProperties, type PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  color: Required<CSSProperties>['backgroundColor'];
  padding: Required<CSSProperties>['padding'];
}>;

export const ColorWrapper = (props: Props) => {
  const { color, padding, children = 'No Children' } = props;

  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div
      style={{
        display: 'inline-block',
        padding,
        backgroundColor: color,
      }}
    >
      <div>
        <button onClick={toggleVisibility}>
          {isVisible ? 'hide' : 'show'}
        </button>
      </div>
      {/* {!isVisible && <div>Content is hidden!!!</div>} */}
      {/* {isVisible && children} */}
      {isVisible ? children : <div>Content is hidden!!!</div>}
    </div>
  );
};
