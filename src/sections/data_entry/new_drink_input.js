/**
 * A new drink input, allowing the user to write to the DB
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
import { drinksMutation } from '../../graphql/mutations/drink_gql_mutations.js';
import { writeGQL } from '../../graphql/fetch.js';
// Constants
import { newInputPropTypesShape } from '../../consts.js';

function NewDrinkInput({
  currentData,
  dataEntry,
  setCurrentData,
  setDataEntry,
  setToast,
}) {
  const { drink } = dataEntry;
  const { method_id } = drink;
  const useStyles = makeStyles(() => ({
    form: {
      width: '200px',
    },
  }));

  const classes = useStyles();

  const { drinks: currentDrinks, methods: currentMethods } = currentData;

  const handleNameChange = (e) => {
    setDataEntry({
      ...dataEntry,
      drink: {
        ...drink,
        name: e.target.value,
      },
    });
  };

  const handleMethodIdChange = (e) => {
    console.log(e.target.value);
    setDataEntry({
      ...dataEntry,
      drink: {
        ...drink,
        method_id: parseInt(e.target.value),
      },
    });
  };

  const handleSubmit = () => {
    const alreadyThere = currentDrinks.find(({ name }) => drink.name === name);
    if (alreadyThere) {
      // Let user know this brewer already exists and return
      setToast({
        open: true,
        severity: 'warning',
        message: 'This drink already exists',
      });
      return;
    }
    writeGQL(drinksMutation, drink)
      .then(({ data }) => {
        const { drink: newDrink } = data;
        if (newDrink.drink_id) {
          // Write was successful, let user know, update state and return
          setToast({
            open: true,
            severity: 'success',
            message: 'New Drink Added!',
          });
          setCurrentData({
            ...currentData,
            drinks: currentDrinks.concat([newDrink]),
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
          <Typography variant="h6">New Drink</Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Grid container align="center" justify="center" spacing={2}>
          <Grid item xs={12}>
            <Typography variant="body1" align="center">
              Name
            </Typography>
            <form autoComplete="off">
              <TextField
                className={classes.form}
                id="outlined-basic"
                label="Drink Name"
                variant="outlined"
                onChange={handleNameChange}
              />
            </form>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" align="center">
              Method
            </Typography>
            <form autoComplete="off">
              <TextField
                className={classes.form}
                id="outlined-select-method-native"
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

NewDrinkInput.propTypes = newInputPropTypesShape;

export default NewDrinkInput;
