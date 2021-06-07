/**
 * Multiple Coffee Entries to display.
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
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

  const handleDateChangeEntry = () => {
    onDateChange(startDate, endDate);
  };

  return (
    <Grid container align="center" justify="center">
      <Grid item xs={12} sm={6}>
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
      <Grid item xs={12} sm={6}>
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
        <Box py={2}>
          <Button
            variant="contained"
            size="large"
            onClick={handleDateChangeEntry}
          >
            <Typography variant="body1" align="center">
              Update
            </Typography>
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box p={1}>
          <TableContainer component={Paper}>
            <Table
              className={classes.table}
              size="small"
              stickyHeader
              aria-label="current_coffee_entries"
            >
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell align="right">Date</TableCell>
                  <TableCell align="right">Roaster</TableCell>
                  <TableCell align="right">Rating</TableCell>
                  <TableCell align="right">Method</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {coffeeEntries.map((coffeeEntry) => (
                  <CoffeeEntry
                    key={coffeeEntry.coffee_entry_id}
                    coffeeEntry={coffeeEntry}
                  />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Grid>
    </Grid>
  );
}

CurrentCoffeeEntries.propTypes = {
  coffeeEntries: PropTypes.array.isRequired,
  onDateChange: PropTypes.func.isRequired,
};

export default CurrentCoffeeEntries;
