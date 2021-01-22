/**
 * The Brew Info for a Coffee Entry. Contains:
 *   - Method
 *   - Grinder
 *   - Water
 *   - Coffee in
 *   - Water in/out (depending upon brewing method)
 *
 * @author Jack Brenneman
 */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

function BrewInfoInput({ coffeeEntry, setCoffeeEntry }) {
  const useStyles = makeStyles(() => ({
    brewInfoInput: {
      outline: '2px solid white',
    },
    box: {
      padding: '4px',
    },
  }));

  const classes = useStyles();

  // TODO: possibly change this to only change state when the user is done typing or something. It works now tho so it's chill
  const handleMethodChange = (e) => {
    setCoffeeEntry({
      ...coffeeEntry,
      method: e.target.value,
    });
  };

  const handleGrinderChange = (e) => {
    setCoffeeEntry({
      ...coffeeEntry,
      grinder: e.target.value,
    });
  };

  const handleWaterChange = (e) => {
    setCoffeeEntry({
      ...coffeeEntry,
      water: e.target.value,
    });
  };

  const handleInChange = (e) => {
    setCoffeeEntry({
      ...coffeeEntry,
      in: e.target.value,
    });
  };

  const handleOutChange = (e) => {
    setCoffeeEntry({
      ...coffeeEntry,
      out: e.target.value,
    });
  };

  return (
    <Box p={2} className={classes.brewInfoInput}>
      <Typography variant="h6" align="center">
        Brew Info
      </Typography>
      <Grid container align="center">
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" align="center">
            Method
          </Typography>
          <form autoComplete="off">
            <TextField
              id="outlined-basic"
              label="Method"
              variant="outlined"
              onChange={handleMethodChange}
            />
          </form>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" align="center">
            Grinder
          </Typography>
          <form autoComplete="off">
            <TextField
              id="outlined-basic"
              label="Grinder"
              variant="outlined"
              onChange={handleGrinderChange}
            />
          </form>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" align="center">
            Water
          </Typography>
          <form autoComplete="off">
            <TextField
              id="outlined-basic"
              label="Water"
              variant="outlined"
              onChange={handleWaterChange}
            />
          </form>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" align="center">
            In
          </Typography>
          <form autoComplete="off">
            <TextField
              id="outlined-basic"
              label="In"
              variant="outlined"
              onChange={handleInChange}
            />
          </form>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" align="center">
            Out
          </Typography>
          <form autoComplete="off">
            <TextField
              id="outlined-basic"
              label="Out"
              variant="outlined"
              onChange={handleOutChange}
            />
          </form>
        </Grid>
      </Grid>
    </Box>
  );
}

BrewInfoInput.propTypes = {
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

export default BrewInfoInput;
