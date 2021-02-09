/**
 * A new origin input, allowing the user to write to the DB
 */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import logo from '../../media/icons/coffee-icon.png';

function NewOriginInput({ dataEntry, setDataEntry }) {
  const { origin } = dataEntry;
  const useStyles = makeStyles(() => ({
    form: {
      width: '200px',
    },
    submitButton: {
      background: 'linear-gradient(45deg, grey 30%, #DC7633 90%)',
      color: 'black',
      '&:hover': {
        color: 'white',
        background: 'linear-gradient(45deg, #DC7633 30%, grey 90%)',
      },
    },
  }));

  const coffeeIcon = (
    <Box p={1} display="flex" justifyContent="center">
      <img width={30} src={logo} alt="Coffee Logo" />
    </Box>
  );

  const classes = useStyles();

  const handleNameChange = (e) => {
    console.log(e.target.value);
    setDataEntry({
      ...dataEntry,
      origin: {
        ...origin,
        name: e.target.value,
      },
    });
  };

  const handleSubmit = () => {
    // TODO: save the coffee entry
    console.log(origin);
    return;
  };

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item xs={12}>
        <Box p={4}>
          <Typography variant="h6">New Origin</Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" align="center">
          Name
        </Typography>
        <form autoComplete="off">
          <TextField
            className={classes.form}
            id="outlined-basic"
            label="Origin Name"
            variant="outlined"
            onChange={handleNameChange}
          />
        </form>
      </Grid>
      <Grid item xs={12}>
        <Box p={4}>
          <Button
            startIcon={coffeeIcon}
            endIcon={coffeeIcon}
            className={classes.submitButton}
            onClick={handleSubmit}
          >
            <Typography variant="body1" align="center">
              Submit
            </Typography>
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default NewOriginInput;
