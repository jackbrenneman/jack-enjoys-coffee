/**
 * The form to input a new Coffee Entry
 *
 * @author Jack Brenneman
 */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import GeneralInfoInput from './general_info_input.js';
import CoffeeInfoInput from './coffee_info_input.js';
import BrewInfoInput from './brew_info/brew_info_input.js';
import NotesInput from './notes_input.js';
import logo from '../../media/icons/coffee-icon.png';
import { defaultCoffeeEntry } from '../../consts.js';

function CoffeeDataEntryContainer() {
  const useStyles = makeStyles((theme) => ({
    page: {
      backgroundColor: '#EEEEEE',
      minHeight: '100vh',
    },
    section: {
      maxWidth: '800px',
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

  // State used for the entire entry form
  const [coffeeEntry, setCoffeeEntry] = useState(defaultCoffeeEntry);

  const sections = [
    {
      component: (
        <GeneralInfoInput
          coffeeEntry={coffeeEntry}
          setCoffeeEntry={setCoffeeEntry}
        />
      ),
      name: 'General Info',
    },
    {
      component: (
        <CoffeeInfoInput
          coffeeEntry={coffeeEntry}
          setCoffeeEntry={setCoffeeEntry}
        />
      ),
      name: 'Coffee Info',
    },
    {
      component: (
        <BrewInfoInput
          coffeeEntry={coffeeEntry}
          setCoffeeEntry={setCoffeeEntry}
        />
      ),
      name: 'Brew Info',
    },
    {
      component: (
        <NotesInput coffeeEntry={coffeeEntry} setCoffeeEntry={setCoffeeEntry} />
      ),
      name: 'Notes',
    },
  ];

  const handleSubmit = () => {
    // TODO: save the coffee entry
    return;
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={classes.page}
    >
      <Grid item xs={12}>
        <Box p={4}>
          <Typography variant="h2">New Coffee Entry</Typography>
        </Box>
      </Grid>
      {sections.map(({ component, name }) => (
        <Box p={2} className={classes.section} key={name}>
          <Grid item xs={12}>
            {component}
          </Grid>
        </Box>
      ))}
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

export default CoffeeDataEntryContainer;
