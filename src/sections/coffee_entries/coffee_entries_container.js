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
  // State that contains all the current coffee entries
  const [currentCoffeeEntries, setCurrentCoffeeEntries] = useState([]);

   // State that contains the data for the applied filters on coffee entries
   const [currentlyAppliedFilters, setCurrentlyAppliedFilters] = useState({
    filteredCoffees: [],
    filteredRoasters: [],
    filteredOrigins: [],
    filteredProcesses: []
  });

  // State that contains all the current FILTERED coffee entries
  const [currentFilteredCoffeeEntries, setCurrentFilteredCoffeeEntries] = useState([]);

  // State that contains all the current coffee data
  const [currentData, setCurrentData] = useState({});

  // State that contains info on if coffee entries are being loaded
  const [isLoading, setIsLoading] = useState(true);

  const queryParams = new URLSearchParams(useLocation().search);
  const queryParamsObject = {
    newEntry: queryParams.get('new_entry') ?? false,
    queryParamsUserId: queryParams.get('user_id') ?? false,
    jacksEntries: queryParams.get('jacks_entries') ?? false,
  };
  const { queryParamsUserId, jacksEntries, newEntry } = queryParamsObject;
  // State used for popping toast message for when write is successful
  const [newEntryToastOpen, setNewEntryToastOpen] = useState(!!newEntry);

  const handleNewEntryToastClose = () => {
    setNewEntryToastOpen(false);
  };

   // State used for popping toast message for when filtering returns no results
   const [noFilterResultsToastOpen, setNoFilterResultsToastOpen] = useState(false);

   const handleNoFilterResultsToastClose = () => {
    setNoFilterResultsToastOpen(false);
  };

  const classes = useStyles();

  // Will set states on initial data fetch if it was successfully
  const maybeSetState = (data) => {
    const {
      coffeeEntries,
      cafes,
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
      cafes &&
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
        cafes,
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
    setIsLoading(true);
    if (jacksEntries) {
      queryGQL(currentCoffeeEntriesQuery(1, sevenDaysAgo, today))
        .then(({ data }) => {
          maybeSetState(data);
          setIsLoading(false);
        })
        .catch((e) => {
          // TODO: Determine what to do if fetch is unsuccessful
          console.log(e);
          setIsLoading(false);
        });
    } else if (queryParamsUserId) {
      queryGQL(
        currentCoffeeEntriesQuery(queryParamsUserId, sevenDaysAgo, today)
      )
        .then(({ data }) => {
          maybeSetState(data);
          setIsLoading(false);
        })
        .catch((e) => {
          // TODO: Determine what to do if fetch is unsuccessful
          console.log(e);
          setIsLoading(false);
        });
    } else if (user?.user_id) {
      queryGQL(currentCoffeeEntriesQuery(user.user_id, sevenDaysAgo, today))
        .then(({ data }) => {
          maybeSetState(data);
          setIsLoading(false);
        })
        .catch((e) => {
          // TODO: Determine what to do if fetch is unsuccessful
          console.log(e);
          setIsLoading(false);
        });
    }
  }, [queryParamsUserId, jacksEntries, user]);

  // Updates the date range, and fetches the coffee entry data for that given range
  const updateDateRange = (startDate, endDate) => {
    setIsLoading(true);
    if (jacksEntries) {
      queryGQL(currentCoffeeEntriesQuery(1, startDate, endDate))
        .then(({ data }) => {
          const { coffeeEntries } = data;
          if (coffeeEntries) {
            setCurrentCoffeeEntries(coffeeEntries);
            setIsLoading(false);
          }
        })
        .catch((e) => {
          // TODO: Determine what to do if fetch is unsuccessful
          console.log(e);
          setIsLoading(false);
        });
    } else if (queryParamsUserId) {
      queryGQL(currentCoffeeEntriesQuery(queryParamsUserId, startDate, endDate))
        .then(({ data }) => {
          const { coffeeEntries } = data;
          if (coffeeEntries) {
            setCurrentCoffeeEntries(coffeeEntries);
            setIsLoading(false);
          }
        })
        .catch((e) => {
          // TODO: Determine what to do if fetch is unsuccessful
          console.log(e);
          setIsLoading(false);
        });
    } else if (user?.user_id) {
      queryGQL(currentCoffeeEntriesQuery(user.user_id, startDate, endDate))
        .then(({ data }) => {
          const { coffeeEntries } = data;
          if (coffeeEntries) {
            setCurrentCoffeeEntries(coffeeEntries);
            setIsLoading(false);
          }
        })
        .catch((e) => {
          // TODO: Determine what to do if fetch is unsuccessful
          console.log(e);
          setIsLoading(false);
        });
    }
  };

  // Filters the coffee entries with the appropriate filters selected
  const filterCoffeeEntries = (filterData) => {
    setIsLoading(true);
    let filteredCoffeeEntries = currentCoffeeEntries;
    const {filteredCoffees, filteredRoasters, filteredOrigins, filteredProcesses} = filterData;
    if (!filteredCoffees.length && !filteredRoasters.length && !filteredOrigins.length && !filteredProcesses.length) {
      setCurrentFilteredCoffeeEntries([]);
      setCurrentlyAppliedFilters({
        filteredCoffees: [],
        filteredRoasters: [],
        filteredOrigins: [],
        filteredProcesses: []
      });
      setIsLoading(false);
      return;
    }
    if (filteredCoffees.length || filteredRoasters.length) {
      // Coffees and Roasters are the "top level"; first, let's find all the coffees that fit in the filters selected for coffees and/or roasters
      filteredCoffeeEntries = currentCoffeeEntries.filter(coffeeEntry => {
        // First check if it's a coffee that's being filtered for
        let isAFilteredCoffee = false;
        if (filteredCoffees.length) {
          isAFilteredCoffee = filteredCoffees.findIndex(filteredCoffee => coffeeEntry?.coffee?.coffee_id === filteredCoffee?.coffee_id) > -1;
        }
        if (!isAFilteredCoffee) {
          // Now let's check if it's a roaster that's being filtered for (because it's not a coffee)
          let isAFilteredRoaster = false;
          if (filteredRoasters.length) {
            isAFilteredRoaster = filteredRoasters.findIndex(filteredRoaster => coffeeEntry?.coffee?.roaster?.roaster_id === filteredRoaster?.roaster_id) > -1;
          }
          return isAFilteredRoaster;
        } else {
          // It is a filtered coffee, so return true
          return true;
        }
      });
    }
    // Now we have coffee entries that are only of certain coffees/roasters. If there are origins and/or processes to filter for, let's do that
    if (filteredOrigins.length) {
      filteredCoffeeEntries = filteredCoffeeEntries.filter(coffeeEntry => (filteredOrigins.findIndex(filteredOrigin => coffeeEntry?.coffee?.origin?.origin_id === filteredOrigin?.origin_id) > -1));
    }
    if (filteredProcesses.length) {
      filteredCoffeeEntries = filteredCoffeeEntries.filter(coffeeEntry => (filteredProcesses.findIndex(filteredProcess => coffeeEntry?.coffee?.process?.process_id === filteredProcess?.process_id) > -1));
    }
    // If there are no filtered coffee entries left, we need to let the user know that they filtered out everything for the current date range
    if (filteredCoffeeEntries.length === 0) {
      setNoFilterResultsToastOpen(true);
    }
    setCurrentFilteredCoffeeEntries(filteredCoffeeEntries);
    setCurrentlyAppliedFilters(filterData);
    setIsLoading(false);
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

  const getCoffeeEntriesToShow = () => {
    // If there are filtered coffee entries, show those
    if (currentFilteredCoffeeEntries.length) {
      return currentFilteredCoffeeEntries;
    } else {
      // Otherwise, just show them all
      return currentCoffeeEntries;
    }
  }

  const {filteredCoffees, filteredRoasters, filteredOrigins, filteredProcesses} = currentlyAppliedFilters;

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
                coffeeEntries={getCoffeeEntriesToShow()}
                currentlyAppliedCoffeeFilters={filteredCoffees}
                currentlyAppliedRoasterFilters={filteredRoasters}
                currentlyAppliedOriginFilters={filteredOrigins}
                currentlyAppliedProcessFilters={filteredProcesses}
                isLoading={isLoading}
                onDateChange={updateDateRange}
                onFilter={filterCoffeeEntries}
                onCoffeeEntryDeletion={handleCoffeeEntryDeletion}
                currentData={currentData}
              />
            </Grid>
            <Snackbar
              open={newEntryToastOpen}
              autoHideDuration={3000}
              onClose={handleNewEntryToastClose}
            >
              <Alert onClose={handleNewEntryToastClose}>
                <Typography variant="body1">
                  New Entry Added Successfully!
                </Typography>
              </Alert>
            </Snackbar>
            <Snackbar
              open={noFilterResultsToastOpen}
              autoHideDuration={3000}
              onClose={handleNoFilterResultsToastClose}
            >
              <Alert onClose={handleNoFilterResultsToastClose}>
                <Typography variant="body1">
                  Filters resulted in no results!
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
