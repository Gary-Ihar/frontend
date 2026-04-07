import { useNavigate, useParams } from 'react-router';
import { useEffect } from 'react';
import { Spin } from 'antd';
import { withLocalState } from '@/states';
import { State } from './state';

console.log('stript from USER_ONE component');

const One = withLocalState<unknown, State>(({ state }) => {
  const { user, loading } = state;

  const navigate = useNavigate();

  const { userId } = useParams<{ userId?: string }>();

  useEffect(() => {
    if (!userId) return;
    state.load(userId);
  }, [userId, state]);

  return (
    <Spin spinning={loading}>
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
}, State);

export default One;
