import { useAppState } from '@/states';
import { Button, DatePicker } from 'antd';
import { observer } from 'mobx-react-lite';
import { Outlet } from 'react-router';

const UsersPage = observer(() => {
  const { uiState } = useAppState();

  return (
    <div>
      Main user page title!
      <Button type="primary" onClick={() => uiState.changeLocale()}>
        Change Locale
      </Button>
      <DatePicker />
      <Outlet />
    </div>
  );
});

export default UsersPage;
