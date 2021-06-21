/**
 * The form to input a new Coffee Entry.
 */
import React, { useState, useEffect } from 'react';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
// Queries and Fetching
import { activeCurrentDataQuery } from '../../graphql/queries/data_entry_queries.js';
import { coffeeEntryMutation } from '../../graphql/mutations/coffee_entry_gql_mutations';
import { queryGQL, writeGQL } from '../../graphql/fetch.js';
// Components
import DateInput from './inputs/date_input.js';
import CoffeeInput from './inputs/coffee_input.js';
import BrewInput from './inputs/brew/brew_input.js';
import RatingInput from './inputs/rating_input.js';
import NotesInput from './inputs/notes_input.js';
// Consts
import { currentDataDefault, defaultCoffeeEntry } from '../../consts.js';
// Helpers
import {
  createRoasterIdToCoffeesMap,
  createMethodIdToBrewersMap,
  createMethodIdToDrinksMap,
  normalizeCoffeeEntryInput,
} from './helpers/input_helpers.js';
// Context
import { UserContext } from '../../contexts/user_context.js';

function CoffeeEntryContainer() {
  const useStyles = makeStyles((theme) => ({
    page: {
      backgroundColor: '#EEEEEE',
      minHeight: '100vh',
    },
    section: {
      maxWidth: '800px',
    },
  }));

  const classes = useStyles();

  // State used for the entire entry form
  const [coffeeEntry, setCoffeeEntry] = useState(defaultCoffeeEntry);

  // State used for the current data
  const [currentData, setCurrentData] = useState(currentDataDefault);

  // State used for roaster to coffee map
  const [roasterToCoffees, setRoasterToCoffees] = useState({});

  // State used for roaster to coffee map
  const [methodToBrewers, setMethodToBrewers] = useState({});

  // State used for roaster to coffee map
  const [methodToDrinks, setMethodToDrinks] = useState({});

  // State used for popping toast message for when write is successful or not
  const [toast, setToast] = useState({
    open: false,
    severity: 'success',
    message: '',
  });

  const handleToastClose = () => {
    setToast({
      ...toast,
      open: false,
    });
  };

  // When the component renders, we fetch all the current data
  useEffect(() => {
    queryGQL(activeCurrentDataQuery)
      .then(({ data }) => {
        if (data) {
          const { coffees, brewers, drinks } = data;
          if (coffees.length) {
            setRoasterToCoffees(createRoasterIdToCoffeesMap(coffees));
          }
          if (brewers.length) {
            setMethodToBrewers(createMethodIdToBrewersMap(brewers));
          }
          if (drinks.length) {
            setMethodToDrinks(createMethodIdToDrinksMap(drinks));
          }
          setCurrentData(data);
        }
      })
      .catch((e) => {
        // TODO: Determine what to do if fetch is unsuccessful
        console.log(e);
      });
  }, []);

  const {
    brewers,
    coffees,
    drinks,
    grinders,
    methods,
    roasters,
    waters,
  } = currentData;

  const { open, severity, message } = toast;

  const sections = [
    {
      component: (
        <DateInput coffeeEntry={coffeeEntry} setCoffeeEntry={setCoffeeEntry} />
      ),
      name: 'Date',
    },
    {
      component: (
        <CoffeeInput
          coffeeEntry={coffeeEntry}
          setCoffeeEntry={setCoffeeEntry}
          coffees={coffees}
          roasters={roasters}
          roasterIdToCoffeesMap={roasterToCoffees}
        />
      ),
      name: 'Coffee',
    },
    {
      component: (
        <BrewInput
          coffeeEntry={coffeeEntry}
          setCoffeeEntry={setCoffeeEntry}
          brewers={brewers}
          drinks={drinks}
          grinders={grinders}
          methods={methods}
          waters={waters}
          methodIdToBrewersMap={methodToBrewers}
          methodIdToDrinksMap={methodToDrinks}
        />
      ),
      name: 'Brew',
    },
    {
      component: (
        <RatingInput
          coffeeEntry={coffeeEntry}
          setCoffeeEntry={setCoffeeEntry}
        />
      ),
      name: 'Rating',
    },
    {
      component: (
        <NotesInput coffeeEntry={coffeeEntry} setCoffeeEntry={setCoffeeEntry} />
      ),
      name: 'Notes',
    },
  ];

  const handleSubmit = () => {
    const normalizedCoffeeEntry = normalizeCoffeeEntryInput(coffeeEntry);
    writeGQL(coffeeEntryMutation, { coffeeEntry: normalizedCoffeeEntry })
      .then(({ data }) => {
        const { coffeeEntry: newCoffeeEntry } = data;
        if (newCoffeeEntry.coffee_entry_id) {
          // Write was successful
          window.location.replace('/entries?new_entry=1');
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
    <UserContext.Consumer>
      {(value) => (
        <Grid
          container
          direction="column"
          alignItems="center"
          className={classes.page}
        >
          <Grid item xs={12}>
            <Box py={2}>
              <Typography variant="h2">New Coffee Entry</Typography>
            </Box>
          </Grid>
          {sections.map(({ component, name }) => (
            <Box px={2} className={classes.section} key={name}>
              <Grid item xs={12}>
                {component}
              </Grid>
            </Box>
          ))}
          <Grid item xs={12}>
            <Box pt={4} pb={8}>
              <Button variant="contained" size="large" onClick={handleSubmit}>
                <Typography variant="body1" align="center">
                  Submit
                </Typography>
              </Button>
            </Box>
          </Grid>
          <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={handleToastClose}
          >
            <Alert onClose={handleToastClose} severity={severity}>
              <Typography variant="body1">{message}</Typography>
            </Alert>
          </Snackbar>
        </Grid>
      )}
    </UserContext.Consumer>
  );
}

export default CoffeeEntryContainer;
