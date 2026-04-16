import { Button, Col, Row } from 'antd';
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from 'react';

type Item = {
  value: string;
};

type Context = {
  currentValue: Item | null;
  setCurrentvalue: (c: Item) => void;
};

const RadioButtonContext = createContext<Context | null>(null);

export function RadioButtonContextProvider({ children }: PropsWithChildren) {
  const [currentValue, setCurrentvalue] = useState<Item | null>(null);

  return (
    <RadioButtonContext.Provider
      value={{
        currentValue,
        setCurrentvalue,
      }}
    >
      {children}
    </RadioButtonContext.Provider>
  );
}

export const RadioButton = (props: PropsWithChildren) => {
  return (
    <RadioButtonContextProvider>
      <Row gutter={8}>{props.children}</Row>
    </RadioButtonContextProvider>
  );
};

type ItemProps = {
  value: string;
  label: string;
};

RadioButton.Item = function Item(props: ItemProps) {
  const context = useContext(RadioButtonContext);

  useEffect(() => {
    if (!context?.currentValue) {
      context?.setCurrentvalue({
        value: props.value,
      });
    }
  }, [context, context?.currentValue, props.value]);

  return (
    <Col>
      <Button
        type={
          context?.currentValue?.value === props.value ? 'primary' : 'default'
        }
        onClick={() =>
          context?.setCurrentvalue({
            value: props.value,
          })
        }
      >
        {props.label}
      </Button>
    </Col>
  );
};
