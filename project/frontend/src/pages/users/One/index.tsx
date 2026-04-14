import { useEffect } from 'react';
import { Spin } from 'antd';
import { withLocalState } from '@/states';
import { State } from './state';

type Props = {
  userId: string;
};

export const One = withLocalState<Props, State>(({ state, userId }) => {
  const { user, loading } = state;

  useEffect(() => {
    state.load(userId);
  }, [userId, state]);

  return (
    <Spin spinning={loading}>
      <div>One: {JSON.stringify(user)}</div>
    </Spin>
  );
}, State);
