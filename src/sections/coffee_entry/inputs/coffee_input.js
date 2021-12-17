/**
 * The Coffee Info for a Coffee Entry.
 */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import AutocompleteWrapperSimple from "../helpers/autocomplete_container_simple.js";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// Custom Components
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
// Constants
import { coffeeEntryPropTypesShape } from "../../../consts.js";

function CoffeeInput({
  coffeeEntry,
  setCoffeeEntry,
  coffees,
  roasters,
  roasterIdToCoffeesMap,
  mostRecentCoffee,
}) {
  const useStyles = makeStyles(() => ({
    card: {
      padding: "0",
    },
    content: {
      padding: "0",
      "&:last-child": {
        padding: 0,
      },
    },
    form: {
      width: "200px",
    },
    accordion: {
      width: "250px",
    },
    paper: {
      width: "150px",
      padding: "5px",
      backgroundColor: "#EEEEEE",
    },
    name: {
      fontWeight: "bold",
    },
    resize: {
      fontSize: 14,
      textAlign: "center",
    },
    resizeSmall: {
      fontSize: 12,
      textAlign: "center",
    },
  }));

  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleMoreDetailsClick = (e) => {
    setOpen(!open);
  };

  // State used for the roaster filter form
  const [roasterIdSelected, setRoasterIdSelected] = useState(null);

  // State used for the selection of coffee so we can show the user info about it
  const [selectedCoffee, setSelectedCoffee] = useState(null);

  // State used for the coffee name so we can have an initial coffee populated correctly
  const [coffeeName, setCoffeeName] = useState("");

  // State used to reset inputs
  const [key, setKey] = useState(true);

  // When the component renders, check to see if mostRecentCoffee has updated
  useEffect(() => {
    if (mostRecentCoffee) {
      setCoffeeName(mostRecentCoffee?.name ?? "");
      setSelectedCoffee(mostRecentCoffee);
    }
  }, [mostRecentCoffee]);

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
      setCoffeeName("");
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
        <Grid container align="center" justify="center">
          <Grid item xs={12}>
            <Box pt={1}>
              <Typography variant="caption" align="center">
                Roaster
              </Typography>
              <AutocompleteWrapperSimple
                fieldName="roaster"
                options={roasters}
                onChange={handleRoasterChange}
                initialValue={mostRecentCoffee?.roaster?.name}
                key={`${mostRecentCoffee?.name}`}
                textField={(params) => (
                  <TextField
                    {...params}
                    className={classes.form}
                    ref={params.InputProps.ref}
                    InputProps={{
                      classes: {
                        input: classes.resizeSmall,
                      },
                    }}
                    id="roaster"
                    size="small"
                    variant="outlined"
                  />
                )}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="caption" align="center">
              Coffee Name
            </Typography>
            <AutocompleteWrapperSimple
              fieldName="name"
              options={getCoffeeOptions()}
              onChange={handleCoffeeChange}
              initialValue={coffeeName}
              key={`${key}${coffeeName}`}
              textField={(params) => (
                <TextField
                  {...params}
                  ref={params.InputProps.ref}
                  InputProps={{
                    classes: {
                      input: classes.resize,
                    },
                  }}
                  className={classes.form}
                  id="coffee"
                  variant="outlined"
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Box px={1}>
              <IconButton
                aria-label="more"
                onClick={handleMoreDetailsClick}
                size="small"
                disabled={!selectedCoffee}
              >
                {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            </Box>
          </Grid>
          {open && (
            <Grid item xs={10}>
              <Card raised className={classes.card}>
                <CardContent className={classes.content}>
                  <Grid
                    direction="row"
                    container
                    justify="center"
                    alignItems="center"
                  >
                    <Grid item>
                      <Box px={2}>
                        <Typography variant="caption" className={classes.name}>
                          {selectedCoffee?.roaster?.name}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                  <Grid
                    direction="row"
                    container
                    justify="center"
                    alignItems="center"
                  >
                    <Grid item>
                      <Box px={2}>
                        <Typography variant="caption" className={classes.name}>
                          {selectedCoffee?.name}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                  <Grid
                    direction="row"
                    container
                    justify="center"
                    alignItems="center"
                  >
                    <Grid item>
                      <Box px={2}>
                        <Typography variant="caption" color="textSecondary">
                          {selectedCoffee?.process?.name}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item>
                      <Box px={2}>
                        <Typography variant="caption" color="textSecondary">
                          {selectedCoffee?.origin?.name}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          )}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Box py={2}>
          <Divider variant="middle" />
        </Box>
      </Grid>
    </Grid>
  );
}

CoffeeInput.propTypes = {
  ...coffeeEntryPropTypesShape,
  coffees: PropTypes.array.isRequired,
  roasters: PropTypes.array.isRequired,
  roasterIdToCoffeesMap: PropTypes.object.isRequired,
  mostRecentCoffee: PropTypes.object,
};

CoffeeInput.defaultProps = {
  mostRecentCoffee: {},
};

export default CoffeeInput;
