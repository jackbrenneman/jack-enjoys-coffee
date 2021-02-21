/**
 * A new origin input, allowing the user to write to the DB
 */
import React from 'react';
import PropTypes from 'prop-types';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
// Queries and Fetching
import { originsMutation } from '../../graphql/mutations/origin_gql_mutations.js';
import { fetchGQL } from '../../graphql/fetch.js';
// Logo
import logo from '../../media/icons/coffee-icon.png';

function NewOriginInput({ dataEntry, setDataEntry, currentOrigins }) {
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
    setDataEntry({
      ...dataEntry,
      origin: {
        ...origin,
        name: e.target.value,
      },
    });
  };

  const handleSubmit = () => {
    fetchGQL(originsMutation([origin]))
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

NewOriginInput.propTypes = {
  dataEntry: PropTypes.object.isRequired,
  setDataEntry: PropTypes.func.isRequired,
  currentOrigins: PropTypes.array.isRequired,
};

export default NewOriginInput;
