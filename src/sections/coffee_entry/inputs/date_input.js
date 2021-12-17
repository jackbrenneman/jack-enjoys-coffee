/**
 * The Date for a Coffee Entry.
 */
import React from "react";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
// Constants
import { coffeeEntryPropTypesShape } from "../../../consts.js";

function DateInput({ coffeeEntry, setCoffeeEntry }) {
  const { date } = coffeeEntry;
  const useStyles = makeStyles(() => ({
    form: {
      width: "200px",
    },
    resize: {
      textAlign: "center",
    },
  }));

  const classes = useStyles();

  const handleDateChange = (e) => {
    setCoffeeEntry({
      ...coffeeEntry,
      date: e.target.value,
    });
  };

  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <Grid container align="center" justify="center">
          <Grid item xs={12}>
            <Typography variant="caption" align="center">
              Date
            </Typography>
            <form autoComplete="off">
              <TextField
                className={classes.form}
                InputProps={{
                  classes: {
                    input: classes.resize,
                  },
                }}
                id="date"
                type="date"
                defaultValue={date}
                onChange={handleDateChange}
                SelectProps={{
                  native: true,
                }}
                variant="outlined"
                size="small"
              />
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

DateInput.propTypes = coffeeEntryPropTypesShape;

export default DateInput;
