/**
 * Top level component for the site.
 */
import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import TopNav from './nav/topnav.js';
import Home from './sections/home.js';
import Data from './sections/data.js';
import CoffeeEntryContainer from './sections/coffee_entry/coffee_entry_container.js';
import CurrentCoffeeEntriesContainer from './sections/current_coffee/current_coffee_entries_container.js';
import CurrentDataContainer from './sections/current_data/current_data_container.js';
import DataEntryContainer from './sections/data_entry/data_entry_container.js';

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
            <CurrentCoffeeEntriesContainer />
          </Route>
          <Route exact path="/data">
            <Data />
          </Route>
          <Route exact path="/data/coffee_entry">
            <CoffeeEntryContainer />
          </Route>
          <Route exact path="/data/entry">
            <DataEntryContainer />
          </Route>
          <Route exact path="/data/current">
            <CurrentDataContainer />
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
