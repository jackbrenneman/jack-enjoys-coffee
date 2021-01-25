/**
 * The Brew Info for the method and drink type. When the user selects a method, the drink type should update to reflect the different drink types that can be made with that method
 *
 * @author Jack Brenneman
 */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {
  coffeeEntryPropTypesShape,
  methodOptions,
  getDrinkOptions,
} from '../../../consts.js';

function MethodAndDrinkTypeInput({ coffeeEntry, setCoffeeEntry }) {
  const { method, drinkType } = coffeeEntry;
  const useStyles = makeStyles(() => ({
    form: {
      width: '200px',
    },
  }));

  const classes = useStyles();

  const drinkOptions = getDrinkOptions(method);

  // TODO: possibly change these to only change state when the user is done typing or something. It works now tho so it's chill
  const handleMethodChange = (e) => {
    setCoffeeEntry({
      ...coffeeEntry,
      method: parseInt(e.target.value),
      // Change drinkType back to the default value
      drinkType: 1,
    });
  };

  const handleDrinkTypeChange = (e) => {
    setCoffeeEntry({
      ...coffeeEntry,
      drinkType: parseInt(e.target.value),
    });
  };

  return (
    <Grid container justify="center" spacing={2}>
      <Grid item xs={12} sm={4}>
        <Typography variant="body1" align="center">
          Method
        </Typography>
        <form autoComplete="off">
          <TextField
            className={classes.form}
            id="outlined-select-method-native"
            select
            value={method}
            onChange={handleMethodChange}
            SelectProps={{
              native: true,
            }}
            variant="outlined"
          >
            {methodOptions.map(({ name, value }) => (
              <option value={value} key={name}>
                {name}
              </option>
            ))}
          </TextField>
        </form>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography variant="body1" align="center">
          Drink Type
        </Typography>
        <form autoComplete="off">
          <TextField
            className={classes.form}
            id="outlined-select-drink-type-native"
            select
            value={drinkType}
            onChange={handleDrinkTypeChange}
            SelectProps={{
              native: true,
            }}
            variant="outlined"
          >
            {drinkOptions.map(({ name, value }) => (
              <option value={value} key={name}>
                {name}
              </option>
            ))}
          </TextField>
        </form>
      </Grid>
    </Grid>
  );
}

MethodAndDrinkTypeInput.propTypes = coffeeEntryPropTypesShape;

export default MethodAndDrinkTypeInput;
