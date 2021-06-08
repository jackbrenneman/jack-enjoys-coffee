/**
 * A new origin input, allowing the user to write to the DB
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
import { originsMutation } from '../../graphql/mutations/origin_gql_mutations.js';
import { writeGQL } from '../../graphql/fetch.js';
// Constants
import { newInputPropTypesShape } from '../../consts.js';

function NewOriginInput({
  currentData,
  dataEntry,
  setCurrentData,
  setDataEntry,
  setToast,
}) {
  const { origin } = dataEntry;
  const useStyles = makeStyles(() => ({
    form: {
      width: '200px',
    },
  }));

  const classes = useStyles();

  const { origins: currentOrigins } = currentData;

  const handleNameChange = (e) => {
    setDataEntry({
      ...dataEntry,
      origin: {
        ...origin,
        name: e.target.value,
      },
    });
  };

  const handleSubmit = () => {
    // First let's make sure it's not already an origin in the DB
    const alreadyThere = currentOrigins.find(
      ({ name }) => origin.name === name
    );
    if (alreadyThere) {
      // Let user know this brewer already exists and return
      setToast({
        open: true,
        severity: 'warning',
        message: 'This origin already exists',
      });
      return;
    }
    writeGQL(originsMutation, origin.name)
      .then(({ data }) => {
        const { origin: newOrigin } = data;
        if (newOrigin.origin_id) {
          // Write was successful, let user know, update state and return
          setToast({
            open: true,
            severity: 'success',
            message: 'New Origin Added!',
          });
          setCurrentData({
            ...currentData,
            origins: currentOrigins.concat([newOrigin]),
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
        <Box pt={2}>
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
        </Box>
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

NewOriginInput.propTypes = newInputPropTypesShape;

export default NewOriginInput;