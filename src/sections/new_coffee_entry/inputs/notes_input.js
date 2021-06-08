/**
 * The Notes for a Coffee Entry. Is basically just a space for the user to write notes on the brew overall or whatever they're feeling.
 */
import React from 'react';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
// Constants
import { coffeeEntryPropTypesShape } from '../../../consts.js';

function NotesInput({ coffeeEntry, setCoffeeEntry }) {
  const useStyles = makeStyles(() => ({
    form: {
      width: '250px',
    },
  }));

  const classes = useStyles();

  const handleNoteChange = (e) => {
    setCoffeeEntry({
      ...coffeeEntry,
      notes: e.target.value,
    });
  };

  return (
    <Grid container align="center">
      <Grid item xs={12}>
        <Typography variant="caption" align="center">
          Notes
        </Typography>
        <form autoComplete="off">
          <TextField
            className={classes.form}
            onChange={handleNoteChange}
            id="notes"
            multiline
            variant="outlined"
          />
        </form>
      </Grid>
    </Grid>
  );
}

NotesInput.propTypes = coffeeEntryPropTypesShape;

export default NotesInput;
