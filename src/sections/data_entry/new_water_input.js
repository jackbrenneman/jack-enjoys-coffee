/**
 * A new brewer input, allowing the user to write to the DB
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
import { watersMutation } from '../../graphql/mutations/water_gql_mutations.js';
import { writeGQL } from '../../graphql/fetch.js';
// Logo
import logo from '../../media/icons/coffee-icon.png';
// Constants
import { newInputPropTypesShape } from '../../consts.js';

function NewWaterInput({
  currentData,
  dataEntry,
  setCurrentData,
  setDataEntry,
  setToast,
}) {
  const { water } = dataEntry;
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

  const { waters: currentWaters } = currentData;

  const handleNameChange = (e) => {
    setDataEntry({
      ...dataEntry,
      water: {
        ...water,
        name: e.target.value,
      },
    });
  };

  const handleDescriptionChange = (e) => {
    setDataEntry({
      ...dataEntry,
      water: {
        ...water,
        description: e.target.value,
      },
    });
  };

  const handleSubmit = () => {
    const alreadyThere = currentWaters.find(({ name }) => water.name === name);
    if (alreadyThere) {
      // Let user know this brewer already exists and return
      setToast({
        open: true,
        severity: 'warning',
        message: 'This water name already exists',
      });
      return;
    }
    writeGQL(watersMutation, [water])
      .then(({ data }) => {
        const { waters } = data;
        if (waters.length > currentWaters.length) {
          // Write was successful, let user know, update state and return
          setToast({
            open: true,
            severity: 'success',
            message: 'New Water Added!',
          });
          setCurrentData({
            ...currentData,
            waters: waters,
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
      <Grid item xs={12}>
        <Box p={4}>
          <Typography variant="h6">New Water</Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box pb={1}>
          <Typography variant="body1" align="center">
            Name
          </Typography>
          <form autoComplete="off">
            <TextField
              className={classes.form}
              id="outlined-basic"
              label="Water Name"
              variant="outlined"
              onChange={handleNameChange}
            />
          </form>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box pt={1}>
          <Typography variant="body1" align="center">
            Description
          </Typography>
          <form autoComplete="off">
            <TextField
              className={classes.form}
              onChange={handleDescriptionChange}
              id="outlined-textarea"
              label="Water Description"
              placeholder="Placeholder"
              multiline
              variant="outlined"
            />
          </form>
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
            <Typography variant="body1" align="center">
              Submit
            </Typography>
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

NewWaterInput.propTypes = newInputPropTypesShape;

export default NewWaterInput;
