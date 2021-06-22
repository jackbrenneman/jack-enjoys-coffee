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
// Constants
import { today, sevenDaysAgo } from '../../consts.js';

const useStyles = makeStyles((theme) => ({
  navLink: {
    textDecoration: 'none',
  },
}));

function CurrentCoffeeEntriesContainer({ user }) {
  // State that basically contains all the current info
  const [currentCoffeeEntries, setCurrentCoffeeEntries] = useState([]);

  const queryParams = new URLSearchParams(useLocation().search);
  const containsNewEntry = queryParams.get('new_entry');
  const queryParamUserId = queryParams.get('user_id');
  // State used for popping toast message for when write is successful
  const [toastOpen, setToastOpen] = useState(!!containsNewEntry);

  const handleToastClose = () => {
    setToastOpen(false);
  };

  const classes = useStyles();

  // When the component renders, we fetch all the current data of the past week
  useEffect(() => {
    if (queryParamUserId) {
      queryGQL(currentCoffeeEntriesQuery(queryParamUserId, sevenDaysAgo, today))
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
      queryGQL(currentCoffeeEntriesQuery(user.user_id, sevenDaysAgo, today))
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
  }, [queryParamUserId, user]);

  // Updates the date range, and fetches the coffee entry data for that given range
  const updateDateRange = (startDate, endDate) => {
    if (user?.user_id) {
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

  return (
    <Grid container align="center" justify="center">
      <Grid item xs={12}>
        <Box pt={4}>
          <Typography variant="h2">Coffee Entries</Typography>
        </Box>
      </Grid>
      {user?.user_id || queryParamUserId ? (
        <>
          <Grid item xs={12}>
            <Box>
              <NavLink to={'/new_entry'}>
                <Typography variant="caption" align="center">
                  New Entry
                </Typography>
              </NavLink>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <CurrentCoffeeEntries
              coffeeEntries={currentCoffeeEntries}
              onDateChange={updateDateRange}
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
  );
}
CurrentCoffeeEntriesContainer.propTypes = {
  user: PropTypes.object,
};

CurrentCoffeeEntriesContainer.defaultProps = {
  user: {},
};

export default CurrentCoffeeEntriesContainer;
