/**
 * The Rating for a Coffee Entry.
 */
import React, { useState } from 'react';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
// Constants
import { coffeeEntryPropTypesShape, naRating } from '../../../consts.js';
import { ratingsInputData } from '../../../temp_db.js';

function RatingInput({ coffeeEntry, setCoffeeEntry }) {
  // State used for rating
  const [rating, setRating] = useState(naRating);

  const useStyles = makeStyles(() => ({
    form: {
      width: '100px',
    },
  }));

  const classes = useStyles();

  const handleRatingChange = (e) => {
    if (e.target.value === naRating) {
      setRating(naRating);
      return;
    }
    setRating(e.target.value);
    setCoffeeEntry({
      ...coffeeEntry,
      rating: parseFloat(e.target.value),
    });
  };

  return (
    <Grid container align="center" spacing={2}>
      <Grid item xs={12}>
        <form autoComplete="off">
          <TextField
            className={classes.form}
            id="outlined-select-rating-native"
            label="Rating"
            select
            value={rating}
            onChange={handleRatingChange}
            variant="outlined"
          >
            {ratingsInputData.map(({ name, value }) => (
              <MenuItem value={value} key={value}>
                {name}
              </MenuItem>
            ))}
          </TextField>
        </form>
      </Grid>
    </Grid>
  );
}

RatingInput.propTypes = coffeeEntryPropTypesShape;

export default RatingInput;
