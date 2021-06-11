/**
 * The Current Cofffee Entries Container, which will allow users to view their coffee entries.
 */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// React Router
import { NavLink } from 'react-router-dom';
// Material UI
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// Queries and Fetching
import { currentCoffeeEntriesQuery } from '../../graphql/queries/current_coffee_entries_queries.js';
import { queryGQL } from '../../graphql/fetch.js';
// Custom Components
import CurrentCoffeeEntries from './current_coffee_entries.js';
// Constants
import { today, sevenDaysAgo } from '../../consts.js';

function CurrentCoffeeEntriesContainer({ user }) {
  // State that basically contains all the current info
  const [currentCoffeeEntries, setCurrentCoffeeEntries] = useState([]);

  // When the component renders, we fetch all the current data of the past week
  useEffect(() => {
    if (user?.user_id) {
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
  }, [user]);

  // Updates the date range, and fetches the coffee entry data for that given range
  const updateDateRange = (startDate, endDate) => {
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
  };

  return (
    <Grid container align="center" justify="center">
      <Grid item xs={12}>
        <Box pt={4}>
          <Typography variant="h2">Coffee Entries</Typography>
        </Box>
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
      <Grid item xs={12}>
        <CurrentCoffeeEntries
          coffeeEntries={currentCoffeeEntries}
          onDateChange={updateDateRange}
        />
      </Grid>
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
