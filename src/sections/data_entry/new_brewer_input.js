/**
 * A new brewer input, allowing the user to write to the DB
 */
import React from 'react';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// Queries and Fetching
import { brewersMutation } from '../../graphql/mutations/brewer_gql_mutations.js';
import { writeGQL } from '../../graphql/fetch.js';
// Constants
import { newInputPropTypesShape } from '../../consts.js';

function NewBrewerInput({
  currentData,
  dataEntry,
  setCurrentData,
  setDataEntry,
  setToast,
}) {
  const { brewer } = dataEntry;
  const { method_id } = brewer;
  const useStyles = makeStyles(() => ({
    inputSection: {
      maxWidth: '600px',
    },
    form: {
      width: '200px',
    },
  }));

  const classes = useStyles();

  const { brewers: currentBrewers, methods: currentMethods } = currentData;

  const handleNameChange = (e) => {
    setDataEntry({
      ...dataEntry,
      brewer: {
        ...brewer,
        name: e.target.value,
      },
    });
  };

  const handleWebsiteChange = (e) => {
    setDataEntry({
      ...dataEntry,
      brewer: {
        ...brewer,
        website: e.target.value,
      },
    });
  };

  const handleMethodIdChange = (e) => {
    setDataEntry({
      ...dataEntry,
      brewer: {
        ...brewer,
        method_id: parseInt(e.target.value),
      },
    });
  };

  const handleSubmit = () => {
    const alreadyThere = currentBrewers.find(
      ({ name }) => brewer.name === name
    );
    if (alreadyThere) {
      // Let user know this brewer already exists and return
      setToast({
        open: true,
        severity: 'warning',
        message: 'This brewer already exists',
      });
      return;
    }
    writeGQL(brewersMutation, brewer)
      .then(({ data }) => {
        const { brewer: newBrewer } = data;
        if (newBrewer.brewer_id) {
          // Write was successful, let user know, update state and return
          setToast({
            open: true,
            severity: 'success',
            message: 'New Brewer Added!',
          });
          setCurrentData({
            ...currentData,
            brewers: currentBrewers.concat([newBrewer]),
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
                  label="Brewer Name"
                  variant="outlined"
                  onChange={handleNameChange}
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
                  label="Brewer Website"
                  variant="outlined"
                  onChange={handleWebsiteChange}
                />
              </form>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box pt={2}>
              <Typography variant="body1" align="center">
                Method
              </Typography>
              <form autoComplete="off">
                <TextField
                  className={classes.form}
                  id="outlined-select-process-native"
                  select
                  value={method_id}
                  onChange={handleMethodIdChange}
                  SelectProps={{
                    native: true,
                  }}
                  variant="outlined"
                >
                  {currentMethods.map(({ name, method_id }) => (
                    <option value={method_id} key={name}>
                      {name}
                    </option>
                  ))}
                </TextField>
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

NewBrewerInput.propTypes = newInputPropTypesShape;

export default NewBrewerInput;
