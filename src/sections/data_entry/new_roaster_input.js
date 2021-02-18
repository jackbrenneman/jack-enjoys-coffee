/**
 * A new coffee input, allowing the user to write to the DB
 */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import logo from '../../media/icons/coffee-icon.png';

function NewRoasterInput({ dataEntry, setDataEntry }) {
  const { roaster } = dataEntry;
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
    setDataEntry({
      ...dataEntry,
      roaster: {
        ...roaster,
        name: e.target.value,
      },
    });
  };

  const handleCityChange = (e) => {
    setDataEntry({
      ...dataEntry,
      roaster: {
        ...roaster,
        city: e.target.value,
      },
    });
  };

  const handleStateChange = (e) => {
    setDataEntry({
      ...dataEntry,
      roaster: {
        ...roaster,
        state: e.target.value,
      },
    });
  };

  const handleCountryChange = (e) => {
    setDataEntry({
      ...dataEntry,
      roaster: {
        ...roaster,
        country: e.target.value,
      },
    });
  };

  const handleWebsiteChange = (e) => {
    setDataEntry({
      ...dataEntry,
      roaster: {
        ...roaster,
        website: e.target.value,
      },
    });
  };

  const handleSubmit = () => {
    console.log(roaster);
    return;
  };

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item xs={12}>
        <Box p={4}>
          <Typography variant="h6">New Roaster</Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Grid container align="center" justify="center" spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" align="center">
              Name
            </Typography>
            <form autoComplete="off">
              <TextField
                className={classes.form}
                id="outlined-basic"
                label="Name"
                variant="outlined"
                onChange={handleNameChange}
              />
            </form>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" align="center">
              City
            </Typography>
            <form autoComplete="off">
              <TextField
                className={classes.form}
                id="outlined-basic"
                label="City"
                variant="outlined"
                onChange={handleCityChange}
              />
            </form>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" align="center">
              State
            </Typography>
            <form autoComplete="off">
              <TextField
                className={classes.form}
                id="outlined-basic"
                label="State"
                variant="outlined"
                onChange={handleStateChange}
              />
            </form>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" align="center">
              Country
            </Typography>
            <form autoComplete="off">
              <TextField
                className={classes.form}
                id="outlined-basic"
                label="Contry"
                variant="outlined"
                onChange={handleCountryChange}
              />
            </form>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" align="center">
              Website
            </Typography>
            <form autoComplete="off">
              <TextField
                className={classes.form}
                id="outlined-basic"
                label="Website"
                variant="outlined"
                onChange={handleWebsiteChange}
              />
            </form>
          </Grid>
        </Grid>
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

export default NewRoasterInput;
