import { Outlet } from 'react-router';

export const UsersPage = () => {
  return (
    <div>
      Main user page title!
      <Outlet />
    </div>
  );
};
