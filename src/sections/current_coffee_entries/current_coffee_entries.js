/**
 * Multiple Coffee Entries to display.
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// Custom Components
import CoffeeEntry from './current_coffee_entry.js';
// Constants
import { today, sevenDaysAgo } from '../../consts.js';

function CurrentCoffeeEntries({ coffeeEntries, onDateChange }) {
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    dateSection: {
      maxWidth: 500,
    },
  });

  const classes = useStyles();

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
          <form autoComplete="off">
            <TextField
              className={classes.form}
              id="date"
              type="date"
              label="Start"
              defaultValue={startDate}
              onChange={handleStartDateChange}
              SelectProps={{
                native: true,
              }}
              variant="outlined"
            />
          </form>
        </Box>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Box py={1}>
          <form autoComplete="off">
            <TextField
              className={classes.form}
              id="date"
              type="date"
              label="End"
              defaultValue={endDate}
              onChange={handleEndDateChange}
              SelectProps={{
                native: true,
              }}
              variant="outlined"
            />
          </form>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box py={1}>
          <Button variant="contained" size="large" onClick={handleUpdateDate}>
            <Typography variant="body1" align="center">
              Update
            </Typography>
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Grid container align="center" justify="center">
          {coffeeEntries.map((coffeeEntry) => (
            <Grid item xs={10} sm={3} lg={2} key={coffeeEntry.coffee_entry_id}>
              <CoffeeEntry coffeeEntry={coffeeEntry} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

CurrentCoffeeEntries.propTypes = {
  coffeeEntries: PropTypes.array.isRequired,
  onDateChange: PropTypes.func.isRequired,
};

export default CurrentCoffeeEntries;
