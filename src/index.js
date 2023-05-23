import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { Global, ThemeProvider } from '@emotion/react';
import { App } from 'components';
import { GlobalStyles, theme } from 'styles';

import 'modern-normalize';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="goit-react-hw-08-phonebook">
        <ThemeProvider theme={theme}>
          <Global styles={GlobalStyles} />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
