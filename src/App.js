import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import TopNav from './nav/topnav.js';
import Home from './sections/home.js';
import Blog from './sections/blog.js';
import Coffee from './sections/coffee.js';
import Equipment from './sections/equipment.js';
import Data from './sections/data.js';
import JournalInput from './sections/journal_input.js';

const history = createBrowserHistory();

function App() {
  const theme = createMuiTheme({
    typography: {
      fontFamily: ['Roboto Condensed'].join(','),
    },
  });
  // And this is more specific to what I like
  theme.typography.h2 = {
    fontSize: '3.75rem',
    '@media (max-width:750px)': {
      fontSize: '1.5rem',
      fontWeight: '400',
    },
    fontWeight: '300',
    lineHeight: '1.2',
    fontFamily: ['Roboto Condensed'].join(','),
    letterSpacing: '-0.00833em',
  };

  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <TopNav />
        <Switch>
          <Route exact path="/coffee">
            <Coffee />
          </Route>
          <Route exact path="/data">
            <Data />
          </Route>
          <Route exact path="/equipment">
            <Equipment />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route exact path="/input">
            <JournalInput />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
