import { ROUTES } from '@/constants/routes';
import { withState } from '@/states';
import { Button } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export const Login = withState(({ state: { authState } }) => {
  const navigate = useNavigate();

  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');

  return (
    <div>
      <input
        value={login}
        onChange={({ target: { value } }) => setLogin(value)}
        placeholder="Input login"
      />
      <br />
      <input
        value={pass}
        type="password"
        onChange={({ target: { value } }) => setPass(value)}
        placeholder="Input password"
      />
      <br />
      <Button
        type="primary"
        loading={authState.loading}
        onClick={() => {
          if (!login || !pass) return;
          authState.login({ login, pass }, () => {
            void navigate(ROUTES.home);
          });
        }}
      >
        Log in
      </Button>
    </div>
  );
});
