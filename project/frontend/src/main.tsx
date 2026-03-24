import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import { BrowserRouter } from 'react-router';
import { AuthProvider } from './contexts/auth-context.tsx';
import { UsersProvider } from './contexts/users-context.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <AuthProvider>
      <UsersProvider>
        <App />
      </UsersProvider>
    </AuthProvider>
  </BrowserRouter>,
);
