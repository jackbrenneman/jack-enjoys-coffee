/**
 * The Brew Info for a Coffee Entry. Contains:
 *   - Method
 *   - Brewer (based off of Method selected)
 *   - Drink (based off of Method selected)
 *   - Water in (g) and Coffee in/out (g) (based on Method selected)
 *   - Grinder and Grinder Setting
 *   - Water
 */
import React from 'react';
import PropTypes from 'prop-types';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
// Custom Components
import AutocompleteWrapperSimple from '../../helpers/autocomplete_container_simple';
import MethodAndMethodStuffInput from './method_and_method_stuff_input.js';
// Constants
import { coffeeEntryPropTypesShape } from '../../../../consts.js';
import { Divider } from '@material-ui/core';

function BrewInput({
  coffeeEntry,
  setCoffeeEntry,
  brewers,
  drinks,
  grinders,
  methods,
  waters,
  methodIdToBrewersMap,
  methodIdToDrinksMap,
}) {
  const { brew } = coffeeEntry;
  const useStyles = makeStyles(() => ({
    form: {
      width: '200px',
    },
    formSmall: {
      width: '130px',
    },
  }));

  const classes = useStyles();

  const handleGrinderChange = (grinder) => {
    const { grinder_id } = grinder;
    setCoffeeEntry({
      ...coffeeEntry,
      brew: {
        ...brew,
        grinder_id: parseInt(grinder_id),
      },
    });
  };

  const handleGrindSettingChange = (e) => {
    setCoffeeEntry({
      ...coffeeEntry,
      brew: {
        ...brew,
        grinder_setting: parseFloat(e.target.value) || null,
      },
    });
  };

  const handleWaterChange = (water) => {
    const { water_id } = water;
    setCoffeeEntry({
      ...coffeeEntry,
      brew: {
        ...brew,
        water_id: parseInt(water_id) || null,
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
            <MethodAndMethodStuffInput
              coffeeEntry={coffeeEntry}
              setCoffeeEntry={setCoffeeEntry}
              brewers={brewers}
              drinks={drinks}
              methods={methods}
              methodIdToBrewersMap={methodIdToBrewersMap}
              methodIdToDrinksMap={methodIdToDrinksMap}
            />
          </Grid>
          <Grid item xs={12}>
            <Divider variant="middle" />
          </Grid>
          <Grid item xs={12}>
            <AutocompleteWrapperSimple
              fieldName="name"
              options={grinders}
              onChange={handleGrinderChange}
              textField={(params) => (
                <TextField
                  {...params}
                  className={classes.form}
                  id="grinder"
                  label="Grinder"
                  variant="outlined"
                  InputLabelProps={{ style: { textAlign: 'center' } }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <form autoComplete="off">
              <TextField
                className={classes.formSmall}
                id="grinder_setting"
                variant="outlined"
                label="Grind Setting"
                size="small"
                InputLabelProps={{ shrink: true }}
                onChange={handleGrindSettingChange}
              />
            </form>
          </Grid>
          <Grid item xs={12}>
            <Divider variant="middle" />
          </Grid>
          <Grid item xs={12}>
            <AutocompleteWrapperSimple
              fieldName="water"
              options={waters}
              onChange={handleWaterChange}
              textField={(params) => (
                <TextField
                  {...params}
                  className={classes.form}
                  id="water"
                  label="Water"
                  variant="outlined"
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Divider variant="middle" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

BrewInput.propTypes = {
  ...coffeeEntryPropTypesShape,
  brewers: PropTypes.array.isRequired,
  drinks: PropTypes.array.isRequired,
  grinders: PropTypes.array.isRequired,
  methods: PropTypes.array.isRequired,
  waters: PropTypes.array.isRequired,
  methodIdToBrewersMap: PropTypes.object.isRequired,
  methodIdToDrinksMap: PropTypes.object.isRequired,
};

export default BrewInput;
