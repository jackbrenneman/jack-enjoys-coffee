/**
 * A new coffee input, allowing the user to write to the DB
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
import AutocompleteWrapperSimple from '../coffee_entry/helpers/autocomplete_container_simple.js';
// Queries and Fetching
import { coffeesMutation } from '../../graphql/mutations/coffee_gql_mutations.js';
import { writeGQL } from '../../graphql/fetch.js';
// Logo
import logo from '../../media/icons/coffee-icon.png';

function NewCoffeeInput({
  dataEntry,
  setDataEntry,
  currentCoffees,
  currentOrigins,
  currentProcesses,
  currentRoasters,
}) {
  const { coffee } = dataEntry;
  const { process_id } = coffee;
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
      coffee: {
        ...coffee,
        name: e.target.value,
      },
    });
  };

  const handleRoasterIdChange = (roaster) => {
    setDataEntry({
      ...dataEntry,
      coffee: {
        ...coffee,
        roaster_id: parseInt(roaster.roaster_id),
      },
    });
  };

  const handleOriginIdChange = (origin) => {
    setDataEntry({
      ...dataEntry,
      coffee: {
        ...coffee,
        origin_id: parseInt(origin.origin_id),
      },
    });
  };

  const handleProcessIdChange = (e) => {
    setDataEntry({
      ...dataEntry,
      coffee: {
        ...coffee,
        process_id: parseInt(e.target.value),
      },
    });
  };

  const handleSubmit = () => {
    const alreadyThere = currentCoffees.find(
      ({ name }) => coffee.name === name
    );
    if (alreadyThere) {
      return;
    }
    writeGQL(coffeesMutation, [coffee])
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
          <Typography variant="h6">New Coffee</Typography>
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
                label="Name"
                variant="outlined"
                onChange={handleNameChange}
              />
            </form>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" align="center">
              Roaster
            </Typography>
            <AutocompleteWrapperSimple
              fieldName="name"
              options={currentRoasters}
              onChange={handleRoasterIdChange}
              textField={(params) => (
                <TextField
                  {...params}
                  className={classes.form}
                  id="outlined-text-field-name"
                  label="Roaster"
                  variant="outlined"
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" align="center">
              Origin
            </Typography>
            <AutocompleteWrapperSimple
              fieldName="name"
              options={currentOrigins}
              onChange={handleOriginIdChange}
              textField={(params) => (
                <TextField
                  {...params}
                  className={classes.form}
                  id="outlined-text-field-name"
                  label="Origin"
                  variant="outlined"
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" align="center">
              Process
            </Typography>
            <form autoComplete="off">
              <TextField
                className={classes.form}
                id="outlined-select-process-native"
                select
                value={process_id}
                onChange={handleProcessIdChange}
                SelectProps={{
                  native: true,
                }}
                variant="outlined"
              >
                {currentProcesses.map(({ name, process_id }) => (
                  <option value={process_id} key={name}>
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

NewCoffeeInput.propTypes = {
  dataEntry: PropTypes.object.isRequired,
  setDataEntry: PropTypes.func.isRequired,
  currentCoffees: PropTypes.array.isRequired,
  currentOrigins: PropTypes.array.isRequired,
  currentProcesses: PropTypes.array.isRequired,
  currentRoasters: PropTypes.array.isRequired,
};

export default NewCoffeeInput;
