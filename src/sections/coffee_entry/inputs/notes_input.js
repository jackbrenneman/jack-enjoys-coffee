/**
 * The Notes for a Coffee Entry. Is basically just a space for the user to write notes on the brew overall or whatever they're feeling.
 */
import React from 'react';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
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
    <Grid container align="center" spacing={2}>
      <Grid item xs={12}>
        <TextField
          className={classes.form}
          onChange={handleNoteChange}
          id="outlined-textarea"
          label="Notes"
          placeholder="Placeholder"
          multiline
          variant="outlined"
        />
      </Grid>
    </Grid>
  );
}

NotesInput.propTypes = coffeeEntryPropTypesShape;

export default NotesInput;
