/**
 * A new coffee input, allowing the user to write to the DB
 */
import React from 'react';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
// Queries and Fetching
import { roastersMutation } from '../../graphql/mutations/roaster_gql_mutations.js';
import { writeGQL } from '../../graphql/fetch.js';
// Constants
import { newInputPropTypesShape } from '../../consts.js';

function NewRoasterInput({
  currentData,
  dataEntry,
  setCurrentData,
  setDataEntry,
  setToast,
}) {
  const { roaster } = dataEntry;
  const useStyles = makeStyles(() => ({
    inputSection: {
      maxWidth: '600px',
    },
    form: {
      width: '200px',
    },
  }));

  const classes = useStyles();

  const { roasters: currentRoasters } = currentData;

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
    const alreadyThere = currentRoasters.find(
      ({ name }) => roaster.name === name
    );
    if (alreadyThere) {
      // Let user know this brewer already exists and return
      setToast({
        open: true,
        severity: 'warning',
        message: 'This roaster name already exists',
      });
      return;
    }
    writeGQL(roastersMutation, roaster)
      .then(({ data }) => {
        const { roaster: newRoaster } = data;
        if (newRoaster.roaster_id) {
          // Write was successful, let user know, update state and return
          setToast({
            open: true,
            severity: 'success',
            message: 'New Roaster Added!',
          });
          setCurrentData({
            ...currentData,
            roasters: currentRoasters.concat([newRoaster]),
          });
          return;
        }
        // Write was not successful, let user know and return
        setToast({
          open: true,
          severity: 'error',
          message: 'Something went wrong...please try again',
        });
      })
      .catch((e) => {
        setToast({
          open: true,
          severity: 'error',
          message: 'Something went wrong...please try again',
        });
        console.log(e);
      });
    return;
  };

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item xs={12} className={classes.inputSection}>
        <Grid container align="center" justify="center">
          <Grid item xs={12} sm={6}>
            <Box pt={2}>
              <Typography variant="body1" align="center">
                Name
              </Typography>
              <form autoComplete="off">
                <TextField
                  className={classes.form}
                  id="outlined-basic"
                  label="Roaster Name"
                  variant="outlined"
                  onChange={handleNameChange}
                />
              </form>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box pt={2}>
              <Typography variant="body1" align="center">
                City
              </Typography>
              <form autoComplete="off">
                <TextField
                  className={classes.form}
                  id="outlined-basic"
                  label="Roaster City"
                  variant="outlined"
                  onChange={handleCityChange}
                />
              </form>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box pt={2}>
              <Typography variant="body1" align="center">
                State
              </Typography>
              <form autoComplete="off">
                <TextField
                  className={classes.form}
                  id="outlined-basic"
                  label="Roaster State"
                  variant="outlined"
                  onChange={handleStateChange}
                />
              </form>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box pt={2}>
              <Typography variant="body1" align="center">
                Country
              </Typography>
              <form autoComplete="off">
                <TextField
                  className={classes.form}
                  id="outlined-basic"
                  label="Roaster Contry"
                  variant="outlined"
                  onChange={handleCountryChange}
                />
              </form>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box pt={2}>
              <Typography variant="body1" align="center">
                Website
              </Typography>
              <form autoComplete="off">
                <TextField
                  className={classes.form}
                  id="outlined-basic"
                  label="Roaster Website"
                  variant="outlined"
                  onChange={handleWebsiteChange}
                />
              </form>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Box pt={4} pb={8}>
          <Button variant="contained" size="large" onClick={handleSubmit}>
            <Typography variant="body1" align="center">
              Submit
            </Typography>
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

NewRoasterInput.propTypes = newInputPropTypesShape;

export default NewRoasterInput;
