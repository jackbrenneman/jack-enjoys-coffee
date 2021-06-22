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
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
// Custom Components
import AutocompleteWrapperSimple from '../../helpers/autocomplete_container_simple';
import MethodAndMethodStuffInput from './method_and_method_stuff_input.js';
// Constants
import { coffeeEntryPropTypesShape } from '../../../../consts.js';

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
    resize: {
      fontSize: 14,
      textAlign: 'center',
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
        <Grid container align="center" justify="center">
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
            <Box pt={2}>
              <Divider variant="middle" />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box pt={1}>
              <Typography variant="caption" align="center">
                Grinder
              </Typography>
              <AutocompleteWrapperSimple
                fieldName="name"
                options={grinders}
                onChange={handleGrinderChange}
                textField={(params) => (
                  <TextField
                    {...params}
                    ref={params.InputProps.ref}
                    InputProps={{
                      classes: {
                        input: classes.resize,
                      },
                    }}
                    className={classes.form}
                    id="grinder"
                    variant="outlined"
                    InputLabelProps={{ style: { textAlign: 'center' } }}
                  />
                )}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="caption" align="center">
              Grind Setting
            </Typography>
            <form autoComplete="off">
              <TextField
                className={classes.formSmall}
                InputProps={{
                  classes: {
                    input: classes.resize,
                  },
                }}
                id="grind_setting"
                variant="outlined"
                size="small"
                InputLabelProps={{ shrink: true }}
                onChange={handleGrindSettingChange}
              />
            </form>
          </Grid>
          <Grid item xs={12}>
            <Box pt={2}>
              <Divider variant="middle" />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box pt={1}>
              <Typography variant="caption" align="center">
                Water
              </Typography>
              <AutocompleteWrapperSimple
                fieldName="water"
                options={waters}
                onChange={handleWaterChange}
                textField={(params) => (
                  <TextField
                    {...params}
                    ref={params.InputProps.ref}
                    InputProps={{
                      classes: {
                        input: classes.resize,
                      },
                    }}
                    className={classes.form}
                    id="water"
                    variant="outlined"
                  />
                )}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box pt={2}>
              <Divider variant="middle" />
            </Box>
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
