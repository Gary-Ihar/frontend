import { useAuthContext } from '@/contexts/auth-context';
console.log('stript from HOME component');

const Home = () => {
  const { user } = useAuthContext() ?? {};

  return <div>Welcome to our App dear {user?.name}</div>;
};

export default Home;
