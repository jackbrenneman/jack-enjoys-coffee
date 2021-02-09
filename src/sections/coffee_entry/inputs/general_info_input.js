/**
 * The General Info for a Coffee Entry. Contains:
 *    - Date
 *    - Time of Day
 */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { coffeeEntryPropTypesShape } from '../../../consts.js';

function GeneralInfoInput({ coffeeEntry, setCoffeeEntry }) {
  const { date } = coffeeEntry;

  const useStyles = makeStyles(() => ({
    form: {
      width: '200px',
    },
  }));

  const classes = useStyles();

  const handleDateChange = (e) => {
    setCoffeeEntry({
      ...coffeeEntry,
      date: e.target.value,
    });
  };

  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <Typography variant="h6" align="center">
          General Info
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container align="center" justify="center" spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" align="center">
              Date
            </Typography>
            <form autoComplete="off">
              <TextField
                className={classes.form}
                id="date"
                type="date"
                defaultValue={date}
                onChange={handleDateChange}
                SelectProps={{
                  native: true,
                }}
                variant="outlined"
              />
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

GeneralInfoInput.propTypes = coffeeEntryPropTypesShape;

export default GeneralInfoInput;
