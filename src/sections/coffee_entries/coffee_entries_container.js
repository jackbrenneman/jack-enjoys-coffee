/**
 * The Current Cofffee Entries Container, which will allow users to view their coffee entries.
 */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// React Router
import { NavLink, useLocation } from 'react-router-dom';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
// Queries and Fetching
import { currentCoffeeEntriesQuery } from '../../graphql/queries/current_coffee_entries_queries.js';
import { queryGQL } from '../../graphql/fetch.js';
// Custom Components
import CurrentCoffeeEntries from './coffee_entries.js';
// Constants and Helpers
import { today, sevenDaysAgo } from '../../consts.js';
import {
  createMethodIdToDrinksMap,
  createMethodIdToBrewersMap,
  createRoasterIdToCoffeesMap,
} from '../coffee_entry/helpers/input_helpers.js';

const useStyles = makeStyles((theme) => ({
  page: {
    backgroundColor: '#EEEEEE',
    minHeight: '100vh',
  },
  navLink: {
    textDecoration: 'none',
  },
}));

function CurrentCoffeeEntriesContainer({ user }) {
  // State that basically contains all the current coffee entries
  const [currentCoffeeEntries, setCurrentCoffeeEntries] = useState([]);

  // State that basically contains all the current coffee data
  const [currentData, setCurrentData] = useState({});

  const queryParams = new URLSearchParams(useLocation().search);
  const queryParamsObject = {
    newEntry: queryParams.get('new_entry') ?? false,
    queryParamsUserId: queryParams.get('user_id') ?? false,
    jacksEntries: queryParams.get('jacks_entries') ?? false,
  };
  const { queryParamsUserId, jacksEntries, newEntry } = queryParamsObject;
  // State used for popping toast message for when write is successful
  const [toastOpen, setToastOpen] = useState(!!newEntry);

  const handleToastClose = () => {
    setToastOpen(false);
  };

  const classes = useStyles();

  // Will set states on initial data fetch if it was successfully
  const maybeSetState = (data) => {
    const {
      coffeeEntries,
      brewers,
      coffees,
      drinks,
      grinders,
      methods,
      origins,
      processes,
      roasters,
      waters,
    } = data;
    if (coffeeEntries) {
      setCurrentCoffeeEntries(coffeeEntries);
    }
    if (
      brewers &&
      coffees &&
      drinks &&
      grinders &&
      methods &&
      origins &&
      processes &&
      roasters &&
      waters
    ) {
      setCurrentData({
        brewers,
        coffees,
        drinks,
        grinders,
        methods,
        origins,
        processes,
        roasters,
        waters,
        roasterIdToCoffees: createRoasterIdToCoffeesMap(coffees),
        methodIdToBrewers: createMethodIdToBrewersMap(brewers),
        methodIdToDrinks: createMethodIdToDrinksMap(drinks),
      });
    }
  };

  // When the component renders, we fetch all the current data of the past week
  useEffect(() => {
    // Fetch the coffee entries for the correct user. Three scenarios:
    // - Jack's specific coffee entries page -> Jack's entries
    // - A user_id in query params -> user_id's entries
    // - A signed in user's entries -> signed in user's entries
    if (jacksEntries) {
      queryGQL(currentCoffeeEntriesQuery(1, sevenDaysAgo, today))
        .then(({ data }) => {
          maybeSetState(data);
        })
        .catch((e) => {
          // TODO: Determine what to do if fetch is unsuccessful
          console.log(e);
        });
    } else if (queryParamsUserId) {
      queryGQL(
        currentCoffeeEntriesQuery(queryParamsUserId, sevenDaysAgo, today)
      )
        .then(({ data }) => {
          maybeSetState(data);
        })
        .catch((e) => {
          // TODO: Determine what to do if fetch is unsuccessful
          console.log(e);
        });
    } else if (user?.user_id) {
      queryGQL(currentCoffeeEntriesQuery(user.user_id, sevenDaysAgo, today))
        .then(({ data }) => {
          maybeSetState(data);
        })
        .catch((e) => {
          // TODO: Determine what to do if fetch is unsuccessful
          console.log(e);
        });
    }
  }, [queryParamsUserId, jacksEntries, user]);

  // Updates the date range, and fetches the coffee entry data for that given range
  const updateDateRange = (startDate, endDate) => {
    if (jacksEntries) {
      queryGQL(currentCoffeeEntriesQuery(1, startDate, endDate))
        .then(({ data }) => {
          const { coffeeEntries } = data;
          if (coffeeEntries) {
            setCurrentCoffeeEntries(coffeeEntries);
          }
        })
        .catch((e) => {
          // TODO: Determine what to do if fetch is unsuccessful
          console.log(e);
        });
    } else if (queryParamsUserId) {
      queryGQL(currentCoffeeEntriesQuery(queryParamsUserId, startDate, endDate))
        .then(({ data }) => {
          const { coffeeEntries } = data;
          if (coffeeEntries) {
            setCurrentCoffeeEntries(coffeeEntries);
          }
        })
        .catch((e) => {
          // TODO: Determine what to do if fetch is unsuccessful
          console.log(e);
        });
    } else if (user?.user_id) {
      queryGQL(currentCoffeeEntriesQuery(user.user_id, startDate, endDate))
        .then(({ data }) => {
          const { coffeeEntries } = data;
          if (coffeeEntries) {
            setCurrentCoffeeEntries(coffeeEntries);
          }
        })
        .catch((e) => {
          // TODO: Determine what to do if fetch is unsuccessful
          console.log(e);
        });
    }
  };

  const getPageTitle = () => {
    if (jacksEntries) {
      // Viewing Jack's entries
      return <Typography variant="h2">Jack's Coffee Entries</Typography>;
    }
    if (queryParamsUserId) {
      // Viewing some user's entries
      return <Typography variant="h2">Someone's Coffee Entries</Typography>;
    }
    return <Typography variant="h2">Coffee Entries</Typography>;
  };

  const handleCoffeeEntryDeletion = (deleted_coffee_entry_id) => {
    const coffeeEntriesMinusDeletedOne = currentCoffeeEntries.filter(
      ({ coffee_entry_id }) => deleted_coffee_entry_id !== coffee_entry_id
    );
    setCurrentCoffeeEntries(coffeeEntriesMinusDeletedOne);
  };

  const getCanEdit = () => {
    if (jacksEntries || queryParamsUserId) {
      return false;
    }
    if (user?.user_id) {
      return true;
    }
    return false;
  };

  return (
    <Box className={classes.page}>
      <Grid container align="center" justify="center">
        <Grid item xs={12}>
          <Box pt={4}>{getPageTitle()}</Box>
        </Grid>
        {user?.user_id && (
          <Grid item xs={12}>
            <Box>
              <NavLink to={'/new_entry'}>
                <Typography variant="caption" align="center">
                  New Entry
                </Typography>
              </NavLink>
            </Box>
          </Grid>
        )}
        {user?.user_id || queryParamsUserId || jacksEntries ? (
          <>
            <Grid item xs={12}>
              <CurrentCoffeeEntries
                canEdit={getCanEdit()}
                coffeeEntries={currentCoffeeEntries}
                onDateChange={updateDateRange}
                onCoffeeEntryDeletion={handleCoffeeEntryDeletion}
                currentData={currentData}
              />
            </Grid>
            <Snackbar
              open={toastOpen}
              autoHideDuration={3000}
              onClose={handleToastClose}
            >
              <Alert onClose={handleToastClose}>
                <Typography variant="body1">
                  New Entry Added Successfully!
                </Typography>
              </Alert>
            </Snackbar>
          </>
        ) : (
          <>
            <Grid item xs={12}>
              <Box py={4}>
                <Typography variant="body1" align="center">
                  Please{' '}
                  {
                    <NavLink className={classes.navLink} to={'/login'}>
                      Login
                    </NavLink>
                  }{' '}
                  in order to see your coffee entries.
                </Typography>
              </Box>
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
}
CurrentCoffeeEntriesContainer.propTypes = {
  user: PropTypes.object,
};

CurrentCoffeeEntriesContainer.defaultProps = {
  user: {},
};

export default CurrentCoffeeEntriesContainer;
