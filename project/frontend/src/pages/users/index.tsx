import { Outlet } from 'react-router';
console.log('stript from USERS component');

const UsersPage = () => {
  return (
    <div>
      Main user page title!
      <Outlet />
    </div>
  );
};

export default UsersPage;
