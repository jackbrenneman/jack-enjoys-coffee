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
import { currentCoffeeEntriesDefault } from '../../consts.js';

function CurrentCoffeeEntriesContainer() {
  // State that basically contains all the current info
  const [currentCoffeeEntries, setCurrentCoffeeEntries] = useState(
    currentCoffeeEntriesDefault
  );

  // When the component renders, we fetch all the current data
  useEffect(() => {
    queryGQL(currentCoffeeEntriesQuery)
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

  return (
    <Box>
      <Box py={4}>
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Box p={4}>
              <Typography variant="h2">Coffee Entries</Typography>
              <CurrentCoffeeEntries coffeeEntries={currentCoffeeEntries} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default CurrentCoffeeEntriesContainer;
