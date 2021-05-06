/**
 * The Coffee Info for a Coffee Entry.
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import AutocompleteWrapperSimple from '../helpers/autocomplete_container_simple.js';
import Paper from '@material-ui/core/Paper';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// Constants
import { coffeeEntryPropTypesShape } from '../../../consts.js';

function CoffeeInfoInput({
  coffeeEntry,
  setCoffeeEntry,
  coffees,
  roasters,
  roasterIdToCoffeesMap,
}) {
  const useStyles = makeStyles(() => ({
    form: {
      width: '200px',
    },
    accordion: {
      width: '250px',
    },
    paper: {
      width: '150px',
      padding: '5px',
      backgroundColor: '#EEEEEE',
    },
  }));

  const classes = useStyles();

  // State used for the roaster filter form
  const [roasterIdSelected, setRoasterIdSelected] = useState(null);

  // State used for the selection of coffee so we can show the user info about it
  const [selectedCoffee, setSelectedCoffee] = useState(null);

  // State used to reset inputs
  const [key, setKey] = useState(true);

  // Only giving a roaster search to filter what coffees show up
  const handleRoasterChange = ({ roaster_id }) => {
    // Don't need to change if they chose the same roaster twice
    if (roaster_id === roasterIdSelected) {
      return;
    }
    setRoasterIdSelected(roaster_id);
    // This will reset the coffee name field to be empty if it has already been populated
    if (selectedCoffee) {
      setCoffeeEntry({
        ...coffeeEntry,
        coffee_id: null,
      });
      setSelectedCoffee(null);
      setKey(!key);
    }
  };

  const handleCoffeeChange = (selectedCoffee) => {
    // Check if the user unselected the coffee first
    if (!selectedCoffee) {
      // If so, unset all the fields under coffee
      setCoffeeEntry({
        ...coffeeEntry,
        coffee_id: null,
      });
      setSelectedCoffee(null);
      return;
    }
    // Otherwise, populate data with the correct info on the coffee selected
    const { coffee_id } = selectedCoffee;
    setCoffeeEntry({
      ...coffeeEntry,
      coffee_id: parseInt(coffee_id),
    });
    setSelectedCoffee(selectedCoffee);
  };

  // Determines what coffee options there are when a user selects a roaster
  const getCoffeeOptions = () => {
    if (roasterIdSelected) {
      return roasterIdToCoffeesMap[roasterIdSelected]
        ? roasterIdToCoffeesMap[roasterIdSelected]
        : [];
    }
    return coffees;
  };

  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <Typography variant="h6" align="center">
          Coffee
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container align="center" justify="center" spacing={2}>
          <Grid item xs={12}>
            <AutocompleteWrapperSimple
              fieldName="roaster"
              options={roasters}
              onChange={handleRoasterChange}
              textField={(params) => (
                <TextField
                  {...params}
                  className={classes.form}
                  id="roaster"
                  label="Roaster"
                  size="small"
                  variant="outlined"
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <AutocompleteWrapperSimple
              fieldName="name"
              options={getCoffeeOptions()}
              onChange={handleCoffeeChange}
              key={key}
              textField={(params) => (
                <TextField
                  {...params}
                  className={classes.form}
                  id="coffee"
                  label="Coffee Name"
                  variant="outlined"
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Accordion className={classes.accordion}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="caption" display="block">
                  Coffee Info
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {selectedCoffee ? (
                  <Grid container spacing={2} justify="center">
                    <Grid item xs={12}>
                      <Paper className={classes.paper}>
                        <Typography variant="caption" display="block">
                          Name: {selectedCoffee?.name}
                        </Typography>
                      </Paper>
                    </Grid>
                    <Grid item xs={12}>
                      <Paper className={classes.paper}>
                        <Typography variant="caption" display="block">
                          Roaster: {selectedCoffee?.roaster?.name}
                        </Typography>
                      </Paper>
                    </Grid>
                    <Grid item xs={12}>
                      <Paper className={classes.paper}>
                        <Typography variant="caption" display="block">
                          Origin: {selectedCoffee?.origin?.name}
                        </Typography>
                      </Paper>
                    </Grid>
                    <Grid item xs={12}>
                      <Paper className={classes.paper}>
                        <Typography variant="caption" display="block">
                          Process: {selectedCoffee?.process?.name}
                        </Typography>
                      </Paper>
                    </Grid>
                  </Grid>
                ) : (
                  <Typography variant="caption" display="block">
                    Select a Coffee above to see info
                  </Typography>
                )}
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

CoffeeInfoInput.propTypes = {
  ...coffeeEntryPropTypesShape,
  coffees: PropTypes.array.isRequired,
  roasters: PropTypes.array.isRequired,
  roasterIdToCoffeesMap: PropTypes.object.isRequired,
};

export default CoffeeInfoInput;
