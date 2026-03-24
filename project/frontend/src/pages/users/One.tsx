import { useRequest } from '@/hooks/useRequest';
import { useNavigate, useParams } from 'react-router';
import { useEffect } from 'react';
import type { User } from '@/types';

export const One = () => {
  const navigate = useNavigate();

  const { userId } = useParams<{ userId?: string }>();

  const { data, load } = useRequest<User>({
    method: 'GET',
    path: `https://jsonplaceholder.typicode.com/users/${userId}`,
  });

  useEffect(() => {
    if (!userId) return;
    load();
  }, [load, userId]);

  return (
    <div>
      <button
        onClick={() => {
          void navigate(-1);
        }}
      >
        Back
      </button>
      <div>One: {JSON.stringify(data)}</div>
    </div>
  );
};
