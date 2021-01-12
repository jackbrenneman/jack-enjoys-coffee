import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import logo from '../media/icons/coffee-icon.png';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function JournalInput() {
  const useStyles = makeStyles((theme) => ({
    page: {
      backgroundColor: '#EEEEEE',
      minHeight: '100vh',
    },
    box: {
      padding: '4px',
    },
    formSection: {
      outline: '2px solid white',
      '&-title': {},
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

  const [wasCoffeeDrank, setCoffeeDrank] = useState(true);

  const handleRadioSelection = () => {
    setCoffeeDrank(!wasCoffeeDrank);
  };

  const coffeeIcon = (
    <Box p={1} display="flex" justifyContent="center">
      <img width={30} src={logo} alt="Coffee Logo" />
    </Box>
  );

  const classes = useStyles();

  // Used for the default time. Defaults to current day at 9:00AM
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const defaultTime = `${year}-${month > 9 ? month : `0${month}`}-${day}`;

  const handleSubmit = () => {
    console.log('log all the info here');
    return;
  };

  return (
    <Box className={classes.page} p={4}>
      <Box p={4} display="flex" justifyContent="center">
        <Typography variant="h2" align="center">
          New Coffee Entry
        </Typography>
      </Box>
      <Box>
        <Grid container align="center">
          <Grid item xs={12} className={classes.box}>
            <Box p={2} className={classes.formSection}>
              <Typography
                variant="h6"
                align="center"
                className={classes.formSectionTitle}
              >
                General Info
              </Typography>
              <Grid container align="center">
                <Grid item xs={12}>
                  <FormControl component="fieldset">
                    <RadioGroup
                      aria-label="coffee?"
                      name="coffee?"
                      value={wasCoffeeDrank}
                      onChange={handleRadioSelection}
                    >
                      <FormControlLabel
                        value={true}
                        control={<Radio color="primary" />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value={false}
                        control={<Radio color="primary" />}
                        label="No"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1" align="center">
                    Time
                  </Typography>
                  <form noValidate>
                    <TextField
                      margin="normal"
                      id="date"
                      label="Coffee Time"
                      type="date"
                      defaultValue={defaultTime}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                    />
                  </form>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} className={classes.box}>
            <Box p={2} className={classes.formSection}>
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
                    />
                  </form>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box p={4}>
              <Button
                startIcon={coffeeIcon}
                endIcon={coffeeIcon}
                className={classes.submitButton}
                onClick={handleSubmit}
              >
                <Typography variant="body1">Submit</Typography>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default JournalInput;
