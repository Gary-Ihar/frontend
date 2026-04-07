import { Navigate, NavLink, Route, Routes, useLocation } from 'react-router';
import { Login } from './pages/login';
import { ROUTES } from './constants/routes';

import { lazy, Suspense } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Button, Layout, Menu, theme } from 'antd';
import { withState } from './states';
// import { Avatar } from './components/Some';
// import { TeamOutlined, UserOutlined } from '@ant-design/icons';

// const renderAvatarIcon = (isAdmin: boolean) => {
//   return isAdmin ? <UserOutlined /> : <TeamOutlined />;
// };

const { Header, Content, Footer } = Layout;

const HomePage = lazy(() => import('@/pages/home'));
const UsersPage = lazy(() => import('@/pages/users'));
const ListUsersPage = lazy(() => import('@/pages/users/List'));
const OneUserPage = lazy(() => import('@/pages/users/One'));

export const App = withState(({ state: { authState, uiState } }) => {
  const { isLogged } = authState;
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <Layout>
      {isLogged && (
        <Header
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div className="demo-logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[pathname]}
            onClick={({ key }) => {
              if (key === 'logout') {
                authState.logout();
              }
            }}
            items={[
              {
                key: ROUTES.home,
                title: 'Home',
                label: <NavLink to={ROUTES.home}>Home</NavLink>,
              },
              {
                key: ROUTES.users.index,
                title: 'Home',
                label: (
                  <NavLink
                    to={ROUTES.users.index}
                    className={({ isActive, isPending }) =>
                      isPending ? 'pending' : isActive ? 'active' : ''
                    }
                  >
                    Users
                  </NavLink>
                ),
              },
              {
                key: 'logout',
                title: 'Home',
                label: 'logout',
              },
            ]}
            style={{ flex: 1, minWidth: 0 }}
          />

          <Button type="primary" onClick={() => uiState.changeTheme()}>
            Change theme
          </Button>
        </Header>
      )}

      <Content style={{ padding: '0 48px' }}>
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <ErrorBoundary fallback={'TADAAAAAAAAM!'}>
            <Routes>
              {isLogged ? (
                <>
                  <Route
                    path={`${ROUTES.users.index}/`}
                    element={<UsersPage />}
                  >
                    <Route index element={<ListUsersPage />} />
                    <Route path=":userId" element={<OneUserPage />} />
                  </Route>

                  <Route
                    path={ROUTES.home}
                    element={
                      <Suspense>
                        <HomePage />
                      </Suspense>
                    }
                  />
                  <Route
                    path="*"
                    element={<Navigate to={ROUTES.home} replace />}
                  />
                </>
              ) : (
                <>
                  <Route path={ROUTES.login} element={<Login />} />
                  <Route
                    path="*"
                    element={<Navigate to={ROUTES.login} replace />}
                  />
                </>
              )}
            </Routes>
          </ErrorBoundary>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
});
