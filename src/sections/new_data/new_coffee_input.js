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
import AutocompleteWrapperSimple from '../new_coffee_entry/helpers/autocomplete_container_simple.js';
// Queries and Fetching
import { coffeesMutation } from '../../graphql/mutations/coffee_gql_mutations.js';
import { writeGQL } from '../../graphql/fetch.js';
// Constants
import { newInputPropTypesShape } from '../../consts.js';

function NewCoffeeInput({
  currentData,
  dataEntry,
  setCurrentData,
  setDataEntry,
  setToast,
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
  }));

  const classes = useStyles();

  const {
    coffees: currentCoffees,
    origins: currentOrigins,
    processes: currentProcesses,
    roasters: currentRoasters,
  } = currentData;

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
      // Let user know this brewer already exists and return
      setToast({
        open: true,
        severity: 'warning',
        message: 'This coffee already exists',
      });
      return;
    }
    writeGQL(coffeesMutation, coffee)
      .then(({ data }) => {
        const { coffee: newCoffee } = data;
        if (newCoffee.coffee_id) {
          // Write was successful, let user know, update state and return
          setToast({
            open: true,
            severity: 'success',
            message: 'New Coffee Added!',
          });
          setCurrentData({
            ...currentData,
            coffees: currentCoffees.concat([newCoffee]),
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
                  id="coffee-name"
                  variant="outlined"
                  onChange={handleNameChange}
                />
              </form>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box pt={2}>
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
                    id="coffee-roaster"
                    variant="outlined"
                  />
                )}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box pt={2}>
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
                    id="coffee-origin"
                    variant="outlined"
                  />
                )}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box pt={2}>
              <Typography variant="body1" align="center">
                Process
              </Typography>
              <form autoComplete="off">
                <TextField
                  className={classes.form}
                  id="coffee-process"
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

NewCoffeeInput.propTypes = newInputPropTypesShape;

export default NewCoffeeInput;
