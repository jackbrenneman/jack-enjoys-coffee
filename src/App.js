/**
 * Top level component for the site.
 */
import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
// Material UI
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
// Custom Components and Sections
import TopNav from './nav/topnav.js';
import Home from './sections/home.js';
import Login from './sections/login/login.js';
import Signup from './sections/signup/signup.js';
import CoffeeEntryContainer from './sections/coffee_entry/coffee_entry_container.js';
import CurrentCoffeeEntriesContainer from './sections/coffee_entries/coffee_entries_container.js';
import CurrentDataContainer from './sections/current_data/current_data_container.js';
import DataEntryContainer from './sections/new_data/new_data_container.js';
// Context
import { UserContext } from './contexts/user_context.js';
// Cookies
import Cookies from 'universal-cookie';
import Profile from './sections/profile/profile.js';

const history = createBrowserHistory();
const cookies = new Cookies();

function App() {
  const theme = createMuiTheme({
    typography: {
      fontFamily: ['PT Sans Narrow'].join(','),
    },
  });

  theme.typography.h2 = {
    fontSize: '3.75rem',
    '@media (max-width:750px)': {
      fontSize: '1.5rem',
      fontWeight: '400',
    },
    fontWeight: '300',
    lineHeight: '1.2',
    fontFamily: ['PT Sans Narrow'].join(','),
    letterSpacing: '-0.00833em',
  };

  // Get user info from cookies so the user gets the right info
  const user = cookies.get('user') || null;

  return (
    <Router history={history}>
      <UserContext.Provider user={user}>
        <ThemeProvider theme={theme}>
          <TopNav user={user} />
          <Switch>
            <Route exact path="/login">
              {user?.user_id ? <Profile user={user} /> : <Login user={user} />}
            </Route>
            <Route exact path="/profile">
              {user?.user_id ? <Profile user={user} /> : <Login user={user} />}
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/jacks_entries">
              <CurrentCoffeeEntriesContainer user={user} />
            </Route>
            <Route exact path="/entries">
              <CurrentCoffeeEntriesContainer user={user} />
            </Route>
            <Route exact path="/new_entry" user={user}>
              <CoffeeEntryContainer />
            </Route>
            <Route exact path="/data">
              <CurrentDataContainer />
            </Route>
            <Route exact path="/new_data">
              <DataEntryContainer user={user} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </ThemeProvider>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
