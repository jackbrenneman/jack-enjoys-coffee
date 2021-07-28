/**
 * Multiple Coffee Entries to display.
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// Material UI
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import RefreshIcon from '@material-ui/icons/Refresh';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
// Custom Components
import CoffeeEntry from './coffee_entry.js';
// Constants
import { today, sevenDaysAgo } from '../../consts.js';

function CurrentCoffeeEntries({
  canEdit,
  coffeeEntries,
  onDateChange,
  onCoffeeEntryDeletion,
  currentData,
}) {
  // State that contains the date entries
  const [currentDates, setCurrentDates] = useState({
    startDate: sevenDaysAgo,
    endDate: today,
  });
  const { startDate, endDate } = currentDates;

  const handleStartDateChange = (e) => {
    const date = e.target.value;
    setCurrentDates({
      ...currentDates,
      startDate: date,
    });
  };

  const handleEndDateChange = (e) => {
    const date = e.target.value;
    setCurrentDates({
      ...currentDates,
      endDate: date,
    });
  };

  const handleUpdateDate = () => {
    // TODO: Make sure startDate is before or equal to endDate
    onDateChange(startDate, endDate);
  };

  return (
    <Grid container align="center" justify="center">
      <Grid item xs={12} sm={3}>
        <Box py={1}>
          <Typography variant="caption" align="center">
            Start
          </Typography>
          <form autoComplete="off">
            <TextField
              id="start_date"
              type="date"
              defaultValue={startDate}
              onChange={handleStartDateChange}
              SelectProps={{
                native: true,
              }}
              variant="outlined"
              size="small"
            />
          </form>
        </Box>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Box py={1}>
          <Typography variant="caption" align="center">
            End
          </Typography>
          <form autoComplete="off">
            <TextField
              id="end_date"
              type="date"
              defaultValue={endDate}
              onChange={handleEndDateChange}
              SelectProps={{
                native: true,
              }}
              variant="outlined"
              size="small"
            />
          </form>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box py={1}>
          <IconButton
            aria-label="refresh"
            onClick={handleUpdateDate}
            size="small"
          >
            <RefreshIcon />
          </IconButton>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box py={2}>
          <Divider variant="middle" />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Grid container align="center" justify="center">
          {coffeeEntries.map((coffeeEntry) => (
            <Grid item xs={10} sm={3} lg={2} key={coffeeEntry.coffee_entry_id}>
              <CoffeeEntry
                canEdit={canEdit}
                onCoffeeEntryDeletion={onCoffeeEntryDeletion}
                coffeeEntry={coffeeEntry}
                currentData={currentData}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

CurrentCoffeeEntries.propTypes = {
  canEdit: PropTypes.bool,
  coffeeEntries: PropTypes.array.isRequired,
  onDateChange: PropTypes.func.isRequired,
  onCoffeeEntryDeletion: PropTypes.func.isRequired,
  currentData: PropTypes.shape({
    brewers: PropTypes.array,
    coffees: PropTypes.array,
    drinks: PropTypes.array,
    grinders: PropTypes.array,
    methods: PropTypes.array,
    origins: PropTypes.array,
    processes: PropTypes.array,
    roasters: PropTypes.array,
    waters: PropTypes.array,
  }),
};

CurrentCoffeeEntries.defaultProps = {
  canEdit: true,
};

export default CurrentCoffeeEntries;
