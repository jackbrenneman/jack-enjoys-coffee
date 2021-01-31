/**
 * The Rating for a Coffee Entry.
 * @author Jack Brenneman
 */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { coffeeEntryPropTypesShape } from '../../consts.js';
import { ratingsInputData } from '../../temp_db.js';

function RatingInput({ coffeeEntry, setCoffeeEntry }) {
  const { rating } = coffeeEntry;
  const useStyles = makeStyles(() => ({
    form: {
      width: '100px',
    },
  }));

  const classes = useStyles();

  const handleRatingChange = (e) => {
    setCoffeeEntry({
      ...coffeeEntry,
      rating: parseInt(e.target.value),
    });
  };

  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <Typography variant="h6" align="center">
          Rating
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container align="center" spacing={2}>
          <Grid item xs={12}>
            <form autoComplete="off">
              <TextField
                className={classes.form}
                id="outlined-select-rating-native"
                select
                value={rating}
                onChange={handleRatingChange}
                SelectProps={{
                  native: true,
                }}
                variant="outlined"
              >
                {ratingsInputData.map(({ name, value }) => (
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

RatingInput.propTypes = coffeeEntryPropTypesShape;

export default RatingInput;
