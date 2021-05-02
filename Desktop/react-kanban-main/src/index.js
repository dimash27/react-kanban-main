import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider } from 'easy-peasy';
import { ThemeProvider } from '@emotion/react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter as Router } from "react-router-dom";

import store from 'store';
import theme from 'Style/theme';
import muiTheme from 'Style/muiTheme';

import NormalizeStyle from 'Style/normalize';
import GlobalStyle from 'Style/global';
import App from 'Components/App';

import './index.css';

const AppWrapper = () => (
  <StoreProvider store={store}>
    <ThemeProvider theme={theme}>
      <MuiThemeProvider theme={muiTheme}>
        <NormalizeStyle />
        <GlobalStyle />
        <Router>
          <App />
        </Router>
      </MuiThemeProvider>
    </ThemeProvider>
  </StoreProvider>
);

ReactDOM.render(<AppWrapper />, document.getElementById('root'));