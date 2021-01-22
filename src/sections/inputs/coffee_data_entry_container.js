/**
 * The form to input a new Coffee Entry
 *
 * @author Jack Brenneman
 */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import GeneralInfoInput from './general_info_input.js';
import CoffeeInfoInput from './coffee_info_input.js';
import BrewInfoInput from './brew_info_input.js';
import logo from '../../media/icons/coffee-icon.png';
import { defaultCoffeeEntry } from '../../consts.js';

function CoffeeDataEntryContainer() {
  const useStyles = makeStyles((theme) => ({
    page: {
      backgroundColor: '#EEEEEE',
      minHeight: '100vh',
    },
    formSection: {
      outline: '2px solid white',
      '&-title': {},
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
  console.log(coffeeEntry);

  const handleSubmit = () => {
    console.log(`The current Coffee Entry is ${coffeeEntry}`);
    return;
  };

  return (
    <Box className={classes.page} p={4}>
      <Box p={4} display="flex" justifyContent="center">
        <Typography variant="h2" align="center">
          New Coffee Entry
        </Typography>
      </Box>
      <Box>
        <GeneralInfoInput
          coffeeEntry={coffeeEntry}
          setCoffeeEntry={setCoffeeEntry}
        />
        <CoffeeInfoInput
          coffeeEntry={coffeeEntry}
          setCoffeeEntry={setCoffeeEntry}
        />
        <BrewInfoInput
          coffeeEntry={coffeeEntry}
          setCoffeeEntry={setCoffeeEntry}
        />
        <Box p={4} display="flex" justifyContent="center">
          <Button
            startIcon={coffeeIcon}
            endIcon={coffeeIcon}
            className={classes.submitButton}
            onClick={handleSubmit}
          >
            <Typography variant="body1">Submit</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default CoffeeDataEntryContainer;
