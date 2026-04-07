import { withState } from '@/states';

console.log('stript from HOME component');

type Props = {
  defaultName?: string;
};

const Home = withState<Props>((props) => {
  const { state, defaultName = 'defaultName' } = props;

  return (
    <div>
      Welcome to our App dear {state.authState.user?.fullName ?? defaultName}
    </div>
  );
});

export default Home;
