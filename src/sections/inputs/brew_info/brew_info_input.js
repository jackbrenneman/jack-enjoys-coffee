/**
 * The Brew Info for a Coffee Entry. Contains:
 *   - Method
 *   - Drink Type (based off of Method selected)
 *   - Grinder
 *   - Water
 *   - Coffee in
 *   - Water in/out (depending upon brewing method)
 */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import AutocompleteWrapper from '../helpers/autocomplete_container.js';
import MethodBrewerAndDrinkTypeInput from './method_brewer_drink_type_input.js';
import { coffeeEntryPropTypesShape } from '../../../consts.js';
import { waterData, grinderData } from '../../../temp_db.js';

function BrewInfoInput({ coffeeEntry, setCoffeeEntry }) {
  const { brew } = coffeeEntry;
  const { grind } = brew;
  const useStyles = makeStyles(() => ({
    form: {
      width: '200px',
    },
  }));

  const classes = useStyles();

  const handleGrinderChange = (grinder) => {
    setCoffeeEntry({
      ...coffeeEntry,
      brew: {
        ...brew,
        grind: {
          ...grind,
          grinder,
        },
      },
    });
  };

  const handleGrindSettingChange = (e) => {
    setCoffeeEntry({
      ...coffeeEntry,
      brew: {
        ...brew,
        grind: {
          ...grind,
          setting: parseInt(e.target.value),
        },
      },
    });
  };

  const handleWaterChange = (water) => {
    setCoffeeEntry({
      ...coffeeEntry,
      brew: {
        ...brew,
        water,
      },
    });
  };

  const handleInChange = (e) => {
    setCoffeeEntry({
      ...coffeeEntry,
      brew: {
        ...brew,
        in: parseInt(e.target.value),
      },
    });
  };

  const handleOutChange = (e) => {
    setCoffeeEntry({
      ...coffeeEntry,
      brew: {
        ...brew,
        out: parseInt(e.target.value),
      },
    });
  };

  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <Typography variant="h6" align="center">
          Brew Info
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container align="center" justify="center" spacing={2}>
          <Grid item xs={12}>
            <MethodBrewerAndDrinkTypeInput
              coffeeEntry={coffeeEntry}
              setCoffeeEntry={setCoffeeEntry}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="body1" align="center">
              Grinder
            </Typography>
            <AutocompleteWrapper
              fieldName="grinder"
              onChange={handleGrinderChange}
              options={grinderData}
              textField={(params) => (
                <TextField
                  {...params}
                  className={classes.form}
                  id="outlined-text-field-origin"
                  label="Grinder"
                  variant="outlined"
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="body1" align="center">
              Grind Setting
            </Typography>
            <form autoComplete="off">
              <TextField
                className={classes.form}
                id="outlined-basic"
                label="Grind Setting"
                variant="outlined"
                onChange={handleGrindSettingChange}
              />
            </form>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="body1" align="center">
              Water
            </Typography>
            <AutocompleteWrapper
              fieldName="water"
              onChange={handleWaterChange}
              options={waterData}
              textField={(params) => (
                <TextField
                  {...params}
                  className={classes.form}
                  id="outlined-text-field-origin"
                  label="Water"
                  variant="outlined"
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
              <Grid item xs={4}>
                <Typography variant="body1" align="center">
                  In
                </Typography>
                <form autoComplete="off">
                  <TextField
                    className={classes.formInOut}
                    id="outlined-basic"
                    label="In (g)"
                    variant="outlined"
                    onChange={handleInChange}
                  />
                </form>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="body1" align="center">
                  Out
                </Typography>
                <form autoComplete="off">
                  <TextField
                    id="outlined-basic"
                    label="Out (g)"
                    variant="outlined"
                    onChange={handleOutChange}
                  />
                </form>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

BrewInfoInput.propTypes = coffeeEntryPropTypesShape;

export default BrewInfoInput;
