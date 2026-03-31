import { useNavigate, useParams } from 'react-router';
import { useEffect } from 'react';
import { Spin } from 'antd';
import { userState } from '@/states/users';
import { observer } from 'mobx-react-lite';

console.log('stript from USER_ONE component');

const One = observer(() => {
  const { user, loadingOne } = userState;

  const navigate = useNavigate();

  const { userId } = useParams<{ userId?: string }>();

  useEffect(() => {
    if (!userId) return;
    userState.loadOne(Number(userId));
  }, [userId]);

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
