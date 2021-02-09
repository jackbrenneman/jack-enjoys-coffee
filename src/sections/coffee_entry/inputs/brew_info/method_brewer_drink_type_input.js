/**
 * The Brew Info for the method and drink type. When the user selects a method, the drink type should update to reflect the different drink types that can be made with that method.
 */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { coffeeEntryPropTypesShape } from '../../../../consts.js';
import { methodData } from '../../../../temp_db.js';
import {
  getBrewerOptions,
  getDrinkOptions,
} from '../../helpers/input_helpers.js';

function MethodBrewerAndDrinkTypeInput({ coffeeEntry, setCoffeeEntry }) {
  const { brew } = coffeeEntry;
  const { method, brewer, drink } = brew;
  const useStyles = makeStyles(() => ({
    form: {
      width: '200px',
    },
  }));

  const classes = useStyles();

  const drinkOptions = getDrinkOptions(method);
  const brewerOptions = getBrewerOptions(method);

  const handleMethodChange = (e) => {
    setCoffeeEntry({
      ...coffeeEntry,
      brew: {
        ...brew,
        method: parseInt(e.target.value),
        // Change drinkType and brewer back to their defaults
        drink: 0,
        brewer: 0,
      },
    });
  };

  const handleDrinkTypeChange = (e) => {
    setCoffeeEntry({
      ...coffeeEntry,
      brew: {
        ...brew,
        drink: parseInt(e.target.value),
      },
    });
  };

  const handleBrewerChange = (e) => {
    setCoffeeEntry({
      ...coffeeEntry,
      brew: {
        ...brew,
        brewer: parseInt(e.target.value),
      },
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
            {methodData.map(({ name, value }) => (
              <option value={value} key={name}>
                {name}
              </option>
            ))}
          </TextField>
        </form>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography variant="body1" align="center">
          Brewer
        </Typography>
        <form autoComplete="off">
          <TextField
            className={classes.form}
            id="outlined-select-brewer-native"
            select
            value={brewer}
            onChange={handleBrewerChange}
            SelectProps={{
              native: true,
            }}
            variant="outlined"
          >
            {brewerOptions.map(({ name, value }) => (
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
            value={drink}
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

MethodBrewerAndDrinkTypeInput.propTypes = coffeeEntryPropTypesShape;

export default MethodBrewerAndDrinkTypeInput;
