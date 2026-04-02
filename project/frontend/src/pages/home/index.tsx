import { useAppState } from '@/states';
import { observer } from 'mobx-react-lite';

console.log('stript from HOME component');

const Home = observer(() => {
  const {
    authState: { user },
  } = useAppState();

  return <div>Welcome to our App dear {user?.name}</div>;
});

export default Home;
