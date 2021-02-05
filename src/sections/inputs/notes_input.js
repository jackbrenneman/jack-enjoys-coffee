/**
 * The Notes for a Coffee Entry. Is basically just a space for the user to write notes on the brew overall or whatever they're feeling.
 */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { coffeeEntryPropTypesShape } from '../../consts.js';

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
      note: e.target.value,
    });
  };

  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <Typography variant="h6" align="center">
          Notes
        </Typography>
      </Grid>
      <Grid item xs={12}>
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
      </Grid>
    </Grid>
  );
}

NotesInput.propTypes = coffeeEntryPropTypesShape;

export default NotesInput;
