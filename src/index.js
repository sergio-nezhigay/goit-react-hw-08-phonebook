import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './redux/store';
import { Global, ThemeProvider } from '@emotion/react';
import 'modern-normalize';

import { App } from 'components';
import { GlobalStyles, theme } from 'styles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <App />
    </ThemeProvider>
  </Provider>

  // <React.StrictMode>
  //   <Provider store={store}>
  //     <ThemeProvider theme={theme}>
  //       <Global styles={GlobalStyles} />
  //       <App />
  //     </ThemeProvider>
  //   </Provider>
  // </React.StrictMode>
);
