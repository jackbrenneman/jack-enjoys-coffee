/**
 * The Coffee Info for a Coffee Entry. Contains:
 *   - Roaster
 *   - Origin
 *   - Process
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

function CoffeeInfoInput({ coffeeEntry, setCoffeeEntry }) {
  const useStyles = makeStyles(() => ({
    coffeeInfoInput: {
      outline: '2px solid white',
    },
    box: {
      padding: '4px',
    },
  }));

  const classes = useStyles();

  // TODO: possibly change this to only change state when the user is done typing or something. It works now tho so it's chill
  const handleRoasterChange = (e) => {
    setCoffeeEntry({
      ...coffeeEntry,
      roaster: e.target.value,
    });
  };

  const handleOriginChange = (e) => {
    setCoffeeEntry({
      ...coffeeEntry,
      origin: e.target.value,
    });
  };

  const handleProcessChange = (e) => {
    setCoffeeEntry({
      ...coffeeEntry,
      process: e.target.value,
    });
  };

  return (
    <Box p={2} className={classes.coffeeInfoInput}>
      <Typography variant="h6" align="center">
        Coffee Info
      </Typography>
      <Grid container align="center">
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" align="center">
            Roaster
          </Typography>
          <form autoComplete="off">
            <TextField
              id="outlined-basic"
              label="Roaster"
              variant="outlined"
              onChange={handleRoasterChange}
            />
          </form>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" align="center">
            Origin
          </Typography>
          <form autoComplete="off">
            <TextField
              id="outlined-basic"
              label="Origin"
              variant="outlined"
              onChange={handleOriginChange}
            />
          </form>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" align="center">
            Process
          </Typography>
          <form autoComplete="off">
            <TextField
              id="outlined-basic"
              label="Process"
              variant="outlined"
              onChange={handleProcessChange}
            />
          </form>
        </Grid>
      </Grid>
    </Box>
  );
}

CoffeeInfoInput.propTypes = {
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

export default CoffeeInfoInput;
