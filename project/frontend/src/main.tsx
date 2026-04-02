import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import { BrowserRouter } from 'react-router';
import { ConfigProvider, theme } from 'antd';
import { StateProvider } from './states';
import en_GB from 'antd/locale/en_GB';
import ru_RU from 'antd/locale/ru_RU';
import { Observer } from 'mobx-react-lite';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <StateProvider>
      {({ uiState }) => (
        <Observer>
          {() => (
            <ConfigProvider
              locale={uiState.locale === 'en_GB' ? en_GB : ru_RU}
              theme={{
                algorithm:
                  uiState.theme === 'dark'
                    ? theme.darkAlgorithm
                    : theme.defaultAlgorithm,
              }}
            >
              <App />
            </ConfigProvider>
          )}
        </Observer>
      )}
    </StateProvider>
  </BrowserRouter>,
);
