/**
 * The Date for a Coffee Entry.
 */
import React from 'react';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
// Constants
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
        <Grid container align="center" justify="center">
          <Grid item xs={12}>
            <form autoComplete="off">
              <TextField
                className={classes.form}
                id="date"
                type="date"
                label="Date"
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
