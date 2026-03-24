import { useNavigate } from 'react-router';
import { ROUTES } from '@/constants/routes';
import { useUsersContext } from '@/contexts/users-context';

export const List = () => {
  const navigate = useNavigate();
  const { users } = useUsersContext() ?? {};

  return (
    <div>
      {users?.map((user) => (
        <div key={user.id}>
          <div>{user.name}</div>
          <div>
            {user.email}{' '}
            <button
              onClick={() => {
                void navigate(ROUTES.users.getLinkById(String(user.id)));
              }}
            >
              View more
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
