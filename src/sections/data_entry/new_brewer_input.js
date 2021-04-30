/**
 * A new brewer input, allowing the user to write to the DB
 */
import React from 'react';
import PropTypes from 'prop-types';
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
// Logo
import logo from '../../media/icons/coffee-icon.png';

function NewBrewerInput({
  dataEntry,
  setDataEntry,
  currentBrewers,
  currentMethods,
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
      return;
    }
    writeGQL(brewersMutation, [brewer])
      .then(({ data }) => {
        // TODO: Determine if write was successful, then change some state
        console.log(data);
      })
      .catch((e) => {
        // TODO: Show that the write was unsuccessful
        console.log(e);
      });
    return;
  };

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item xs={12}>
        <Box p={4}>
          <Typography variant="h6">New Brewer</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} className={classes.inputSection}>
        <Grid container align="center" justify="center" spacing={2}>
          <Grid item xs={12} sm={6}>
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
          </Grid>
          <Grid item xs={12} sm={6}>
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
          </Grid>
          <Grid item xs={12} sm={6}>
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
                {currentMethods.map(({ name, value }) => (
                  <option value={value} key={name}>
                    {name}
                  </option>
                ))}
              </TextField>
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

NewBrewerInput.propTypes = {
  dataEntry: PropTypes.object.isRequired,
  setDataEntry: PropTypes.func.isRequired,
  currentBrewers: PropTypes.array.isRequired,
  currentMethods: PropTypes.array.isRequired,
};

export default NewBrewerInput;
