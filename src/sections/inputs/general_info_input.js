/**
 * The General Info for a Coffee Entry. Contains:
 *    - If coffee was consumed
 *    - Date
 *    - Time of Day
 *
 * @author Jack Brenneman
 */

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

function GeneralInfoInput({ coffeeEntry, setCoffeeEntry }) {
  const { date, timeOfDay } = coffeeEntry;
  const useStyles = makeStyles(() => ({
    generalInfoInput: {
      outline: '2px solid white',
    },
    box: {
      padding: '4px',
    },
  }));

  const classes = useStyles();

  const handleDateChange = (e) => {
    setCoffeeEntry({
      ...coffeeEntry,
      date: e.target.value,
    });
  };

  const handleTimeOfDayChange = (e) => {
    setCoffeeEntry({
      ...coffeeEntry,
      timeOfDay: parseInt(e.target.value),
    });
  };

  return (
    <Box p={2} className={classes.generalInfoInput}>
      <Typography
        variant="h6"
        align="center"
        className={classes.formSectionTitle}
      >
        General Info
      </Typography>
      <Grid container align="center">
        <Grid item xs={12} sm={6}>
          <form noValidate>
            <TextField
              margin="normal"
              id="date"
              label="Date"
              type="date"
              defaultValue={date}
              onChange={handleDateChange}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </form>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl>
            <InputLabel>Time of Day</InputLabel>
            <NativeSelect
              value={timeOfDay}
              onChange={handleTimeOfDayChange}
              inputProps={{
                name: 'TimeOfDay',
              }}
            >
              <option value={1}>Morning</option>
              <option value={2}>Afternoon</option>
              <option value={3}>Night</option>
            </NativeSelect>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
}

GeneralInfoInput.propTypes = {
  coffeeEntry: PropTypes.shape({
    date: PropTypes.string,
    timeOfDay: PropTypes.number,
    roaster: PropTypes.string,
    origin: PropTypes.string,
    process: PropTypes.string,
    method: PropTypes.string,
    grinder: PropTypes.string,
    water: PropTypes.string,
    in: PropTypes.number,
    out: PropTypes.number,
    rating: PropTypes.number,
    notes: PropTypes.string,
  }).isRequired,
  setCoffeeEntry: PropTypes.func.isRequired,
};

export default GeneralInfoInput;
