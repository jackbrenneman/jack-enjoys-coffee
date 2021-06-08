/**
 * The Current Cofffee Entries Container, which will allow users to view their coffee entries.
 */
import React, { useState, useEffect } from 'react';
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

function CurrentCoffeeEntriesContainer() {
  // State that basically contains all the current info
  const [currentCoffeeEntries, setCurrentCoffeeEntries] = useState([]);

  // When the component renders, we fetch all the current data of the past week
  useEffect(() => {
    queryGQL(currentCoffeeEntriesQuery(1, sevenDaysAgo, today))
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
  }, []);

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
        <Box py={2}>
          <Box py={2}>
            <Typography variant="h2">Coffee Entries</Typography>
          </Box>

          <CurrentCoffeeEntries
            coffeeEntries={currentCoffeeEntries}
            onDateChange={updateDateRange}
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default CurrentCoffeeEntriesContainer;
