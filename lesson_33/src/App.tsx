import './style.css';
import {
  ColorWrapper,
  Input,
  UserComponent,
  Counter,
  BodyColorChanger,
} from './componetns';

const parseName = (name: string) => name.toUpperCase();

const someJSX = <div>Inserted JSX</div>;

export function App() {
  console.log('render app');

  return (
    <>
      <div>
        <p>My name is - {parseName('Ihar')}</p>
        {someJSX}
      </div>
      <div>asdadadasd</div>
      <ColorWrapper color="yellow" padding={20} />
      <ColorWrapper color="green" padding={20}>
        <UserComponent
          key={1} // ВСЕ КРОМЕ этого
          name={'Alex'}
          project="WeatherTS"
          style={{
            borderWidth: '4px',
          }}
        />
      </ColorWrapper>

      <ColorWrapper color="black" padding={20}>
        <UserComponent
          name="Ihar"
          project="tad"
          style={{
            borderWidth: '2px',
          }}
        />
      </ColorWrapper>
      <div />
      <ColorWrapper color="gray" padding={15}>
        <Input />
      </ColorWrapper>
      <div />
      <ColorWrapper color="orange" padding={20}>
        <Counter />
      </ColorWrapper>
      <div />
      <ColorWrapper color="pink" padding={20}>
        <BodyColorChanger />
      </ColorWrapper>
    </>
  );
}
