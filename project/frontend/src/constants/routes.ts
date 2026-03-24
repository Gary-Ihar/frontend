export const ROUTES = {
  login: '/login',
  home: '/home',
  users: {
    index: '/users',
    id: '/users/:userId',
    getLinkById: (userId: string) => `/users/${userId}`,
  },
};
