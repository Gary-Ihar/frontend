import { useNavigate, useParams } from 'react-router';
import { useEffect } from 'react';
import { Spin } from 'antd';
import { observer } from 'mobx-react-lite';
import { useAppState } from '@/states';

console.log('stript from USER_ONE component');

const One = observer(() => {
  const { usersState } = useAppState();
  const { user, loadingOne } = usersState;

  const navigate = useNavigate();

  const { userId } = useParams<{ userId?: string }>();

  useEffect(() => {
    if (!userId) return;
    usersState.loadOne(Number(userId));
  }, [userId, usersState]);

  return (
    <Spin spinning={loadingOne}>
      <button
        onClick={() => {
          void navigate(-1);
        }}
      >
        Back
      </button>
      <div>One: {JSON.stringify(user)}</div>
    </Spin>
  );
});

export default One;
