/**
 * The form to input a new Coffee Entry.
 */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// React Router
import { NavLink } from 'react-router-dom';
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
import {
  currentDataDefault,
  defaultCoffeeEntry,
  defaultMostRecentCoffeeEntry,
  yesterday,
  today,
} from '../../consts.js';
// Helpers
import {
  createRoasterIdToCoffeesMap,
  createMethodIdToBrewersMap,
  createMethodIdToDrinksMap,
  normalizeCoffeeEntryInput,
  normalizeMostRecentCoffeeEntryForInput,
  normalizeMostRecentCoffeeEntry,
} from './helpers/input_helpers.js';

function CoffeeEntryContainer({ user }) {
  const useStyles = makeStyles((theme) => ({
    page: {
      backgroundColor: '#EEEEEE',
      minHeight: '100vh',
    },
    section: {
      maxWidth: '800px',
    },
    navLink: {
      textDecoration: 'none',
    },
  }));

  const classes = useStyles();

  // State used for the entire entry form
  const [coffeeEntry, setCoffeeEntry] = useState(defaultCoffeeEntry);

  // State used for the most recent coffee entry
  const [mostRecentCoffeeEntry, setMostRecentCoffeeEntry] = useState(
    defaultMostRecentCoffeeEntry
  );

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
    if (user?.user_id) {
      queryGQL(activeCurrentDataQuery(user.user_id, yesterday, today))
        .then(({ data }) => {
          if (data) {
            const { coffees, coffeeEntries, brewers, drinks } = data;
            if (coffees.length) {
              setRoasterToCoffees(createRoasterIdToCoffeesMap(coffees));
            }
            if (brewers.length) {
              setMethodToBrewers(createMethodIdToBrewersMap(brewers));
            }
            if (drinks.length) {
              setMethodToDrinks(createMethodIdToDrinksMap(drinks));
            }
            if (coffeeEntries.length) {
              // Only care about the most recent entry, so we grab the entry with the highest coffee_entry_id from the array
              let mostRecentEntry = coffeeEntries[0];
              if (coffeeEntries.length > 1) {
                coffeeEntries.forEach((coffeeEntry) => {
                  if (
                    coffeeEntry.coffee_entry_id >
                    mostRecentEntry.coffee_entry_id
                  ) {
                    mostRecentEntry = coffeeEntry;
                  }
                });
              }
              setMostRecentCoffeeEntry(
                normalizeMostRecentCoffeeEntry(mostRecentEntry)
              );
              setCoffeeEntry(
                normalizeMostRecentCoffeeEntryForInput(mostRecentEntry)
              );
            }
            setCurrentData(data);
          }
        })
        .catch((e) => {
          // TODO: Determine what to do if fetch is unsuccessful
          console.log(e);
        });
    }
  }, [user]);

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

  const { mostRecentCoffee, mostRecentBrewData } = mostRecentCoffeeEntry;

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
          mostRecentCoffee={mostRecentCoffee}
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
          mostRecentBrewData={mostRecentBrewData}
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

  const getEntrySections = () => {
    return sections.map(({ component, name }) => (
      <Box px={2} className={classes.section} key={name}>
        <Grid item xs={12}>
          {component}
        </Grid>
      </Box>
    ));
  };

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
    <Box className={classes.page}>
      {user?.user_id ? (
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Box py={2}>
              <Typography variant="h2">New Coffee Entry</Typography>
            </Box>
          </Grid>
          {getEntrySections()}
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
      ) : (
        <Box py={4}>
          <Typography variant="body1" align="center">
            You must{' '}
            {
              <NavLink className={classes.navLink} to={'/login'}>
                Login
              </NavLink>
            }{' '}
            to create a new entry
          </Typography>
        </Box>
      )}
    </Box>
  );
}

CoffeeEntryContainer.propTypes = {
  user: PropTypes.object,
};

CoffeeEntryContainer.defaultProps = {
  user: {},
};

export default CoffeeEntryContainer;
