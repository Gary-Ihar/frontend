import { RadioButton } from '@/components/RadioButton';
import { withState } from '@/states';

console.log('stript from HOME component');

type Props = {
  defaultName?: string;
};

const Home = withState<Props>((props) => {
  const { state, defaultName = 'defaultName' } = props;

  return (
    <div>
      <RadioButton>
        <RadioButton.Item value={'1'} label="One" />
        <RadioButton.Item value={'2'} label="Two" />
        <RadioButton.Item value={'3'} label="Три" />
      </RadioButton>
      Welcome to our App dear {state.authState.user?.fullName ?? defaultName}
    </div>
  );
});

export default Home;
