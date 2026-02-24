import './style.css';
import { UserComponent } from './UserComponent';

const parseName = (name: string) => name.toUpperCase();

const someJSX = <div>Inserted JSX</div>;

export function App() {
  return (
    <>
      <div>
        <p>My name is - {parseName('Ihar')}</p>
        {someJSX}
      </div>
      <div>asdadadasd</div>
      <UserComponent
        name={'Alex'}
        project="WeatherTS"
        style={{
          borderWidth: '4px',
        }}
      />
      <UserComponent
        name="Ihar"
        project="tad"
        style={{
          borderWidth: '2px',
        }}
      />
    </>
  );
}
