/**
 * The Coffee Info for a Coffee Entry. Contains:
 *   - Roaster
 *   - Origin
 *   - Process
 */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import AutocompleteWrapper from '../helpers/autocomplete_container.js';
import { coffeeEntryPropTypesShape } from '../../../consts.js';
import {
  nameData,
  roasterData,
  originData,
  processData,
} from '../../../temp_db.js';

function CoffeeInfoInput({ coffeeEntry, setCoffeeEntry }) {
  const { coffee } = coffeeEntry;
  const { process } = coffee;
  const useStyles = makeStyles(() => ({
    form: {
      width: '200px',
    },
  }));

  const classes = useStyles();

  const handleNameChange = (name) => {
    setCoffeeEntry({
      ...coffeeEntry,
      coffee: {
        ...coffee,
        name,
      },
    });
  };

  const handleRoasterChange = (roaster) => {
    setCoffeeEntry({
      ...coffeeEntry,
      coffee: {
        ...coffee,
        roaster,
      },
    });
  };

  const handleOriginChange = (origin) => {
    setCoffeeEntry({
      ...coffeeEntry,
      coffee: {
        ...coffee,
        origin,
      },
    });
  };

  const handleProcessChange = (e) => {
    setCoffeeEntry({
      ...coffeeEntry,
      coffee: {
        ...coffee,
        process: parseInt(e.target.value),
      },
    });
  };

  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <Typography variant="h6" align="center">
          Coffee Info
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container align="center" justify="center" spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" align="center">
              Name
            </Typography>
            <AutocompleteWrapper
              fieldName="name"
              onChange={handleNameChange}
              options={Object.values(nameData)}
              textField={(params) => (
                <TextField
                  {...params}
                  className={classes.form}
                  id="outlined-text-field-name"
                  label="Name"
                  variant="outlined"
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" align="center">
              Roaster
            </Typography>
            <AutocompleteWrapper
              fieldName="roaster"
              onChange={handleRoasterChange}
              options={Object.values(roasterData)}
              textField={(params) => (
                <TextField
                  {...params}
                  className={classes.form}
                  id="outlined-text-field-roaster"
                  label="Roaster"
                  variant="outlined"
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" align="center">
              Origin
            </Typography>
            <AutocompleteWrapper
              fieldName="origin"
              onChange={handleOriginChange}
              options={originData}
              textField={(params) => (
                <TextField
                  {...params}
                  className={classes.form}
                  id="outlined-text-field-origin"
                  label="Origin"
                  variant="outlined"
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" align="center">
              Process
            </Typography>
            <form autoComplete="off">
              <TextField
                className={classes.form}
                id="outlined-select-process-native"
                select
                value={process}
                onChange={handleProcessChange}
                SelectProps={{
                  native: true,
                }}
                variant="outlined"
              >
                {processData.map(({ name, value }) => (
                  <option value={value} key={name}>
                    {name}
                  </option>
                ))}
              </TextField>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

CoffeeInfoInput.propTypes = coffeeEntryPropTypesShape;

export default CoffeeInfoInput;
