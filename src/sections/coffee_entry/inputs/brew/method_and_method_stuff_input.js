/**
 * The Brew Info for the method and drink type. When the user selects a method, the drink type should update to reflect the different drink types that can be made with that method.
 */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import NumberFormat from "react-number-format";
// Material UI
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from "@material-ui/core/Divider";
// Custom Components
import AutocompleteWrapperSimple from "../../helpers/autocomplete_container_simple";
// Constants
import {
  coffeeEntryPropTypesShape,
  espressoEnum,
  pouroverEnum,
  immersionEnum,
  hoursEnum,
  minutesEnum,
  secondsEnum,
  defaultSteepTimeState,
  methodIdToMethodEnum,
} from "../../../../consts.js";

const NumberFormatCustom = (props) => {
  const { inputRef, onChange, ...other } = props;
  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      isNumericString
    />
  );
};

function MethodAndMethodStuffInput({
  coffeeEntry,
  setCoffeeEntry,
  brewers,
  drinks,
  methods,
  methodIdToBrewersMap,
  methodIdToDrinksMap,
  mostRecentMethodData,
}) {
  const { brew } = coffeeEntry;
  const { method_id: selectedMethodId } = brew;
  const useStyles = makeStyles(() => ({
    form: {
      width: "200px",
    },
    resizeBigger: {
      fontSize: 18,
      textAlign: "center",
    },
    resize: {
      fontSize: 14,
      textAlign: "center",
    },
  }));

  const classes = useStyles();

  // State used for steep time
  const [steepTime, setSteepTime] = useState(defaultSteepTimeState);

  // State used to reset inputs
  const [key, setKey] = useState(true);

  // State used for the initial and default values
  const [initialValues, setInitialValues] = useState(mostRecentMethodData);

  // When the component renders, check to see if mostRecentMethodData has updated
  useEffect(() => {
    if (mostRecentMethodData) {
      setInitialValues(mostRecentMethodData);
    }
  }, [mostRecentMethodData]);

  // Determines what brewer options there are after a user selects a method
  const getBrewerOptions = () => {
    if (selectedMethodId) {
      return methodIdToBrewersMap[selectedMethodId]
        ? methodIdToBrewersMap[selectedMethodId]
        : [];
    }
    return brewers;
  };

  // Determines what drink options there are after a user selects a method
  const getDrinkOptions = () => {
    if (selectedMethodId) {
      return methodIdToDrinksMap[selectedMethodId]
        ? methodIdToDrinksMap[selectedMethodId]
        : [];
    }
    return drinks;
  };

  const handleBrewerChange = (brewer) => {
    const { brewer_id, method_id } = brewer;
    setCoffeeEntry({
      ...coffeeEntry,
      brew: {
        ...brew,
        method_id: method_id ? parseInt(method_id) : selectedMethodId,
        brewer_id: parseInt(brewer_id),
      },
    });
  };

  const handleDrinkChange = (drink) => {
    const { drink_id } = drink;
    setCoffeeEntry({
      ...coffeeEntry,
      brew: {
        ...brew,
        drink_id: parseInt(drink_id),
      },
    });
  };

  const handleCoffeeInChange = (e) => {
    setCoffeeEntry({
      ...coffeeEntry,
      brew: {
        ...brew,
        coffee_in: parseFloat(e.target.value),
      },
    });
  };

  const handleLiquidOutChange = (e) => {
    setCoffeeEntry({
      ...coffeeEntry,
      brew: {
        ...brew,
        liquid_out: parseFloat(e.target.value),
        water_in: null,
        steep_time: null,
      },
    });
  };

  const handleLiquidInChange = (e) => {
    setCoffeeEntry({
      ...coffeeEntry,
      brew: {
        ...brew,
        water_in: parseInt(e.target.value),
      },
    });
  };

  // Gets the steep time in seconds after a user changes the hours, minutes, or seconds input
  const getSteepTimeInSeconds = (timeEnum, timeValue, currentTimeState) => {
    switch (timeEnum) {
      case hoursEnum: {
        return (
          timeValue * 3600 +
          currentTimeState[minutesEnum] * 60 +
          parseInt(currentTimeState[secondsEnum])
        );
      }
      case minutesEnum: {
        return (
          currentTimeState[hoursEnum] * 3600 +
          timeValue * 60 +
          parseInt(currentTimeState[secondsEnum])
        );
      }
      case secondsEnum: {
        return (
          currentTimeState[hoursEnum] * 3600 +
          currentTimeState[minutesEnum] * 60 +
          parseInt(timeValue)
        );
      }
      default: {
        return (
          currentTimeState[hoursEnum] * 3600 +
          currentTimeState[minutesEnum] * 60 +
          parseInt(currentTimeState[secondsEnum])
        );
      }
    }
  };

  const handleSteepTimeChange = (e) => {
    const timeEnum = e.target.name;
    const timeValue = parseInt(e.target.value) || 0;
    const steepTimeInSeconds = getSteepTimeInSeconds(
      timeEnum,
      timeValue,
      steepTime
    );
    if (timeEnum === hoursEnum) {
      setSteepTime({
        ...steepTime,
        [hoursEnum]: parseInt(e.target.value) || 0,
      });
    } else if (timeEnum === minutesEnum) {
      setSteepTime({
        ...steepTime,
        [minutesEnum]: parseInt(e.target.value) || 0,
      });
    } else if (timeEnum === secondsEnum) {
      setSteepTime({
        ...steepTime,
        [secondsEnum]: parseInt(e.target.value) || 0,
      });
    } else {
      // Something's off if anything makes it here, let's just return
      return;
    }
    setCoffeeEntry({
      ...coffeeEntry,
      brew: {
        ...brew,
        steep_time: parseInt(steepTimeInSeconds) || null,
      },
    });
  };

  const handleMethodChange = (e) => {
    const method_id = e.target.value;
    // Don't need to change anything if they just selected the same method twice
    if (method_id === selectedMethodId) {
      return;
    }
    setCoffeeEntry({
      ...coffeeEntry,
      brew: {
        ...brew,
        method_id: parseInt(method_id),
        drink_id: null,
        brewer_id: null,
        coffee_in: null,
        liquid_out: null,
        water_in: null,
        steep_time: null,
      },
    });
    setKey(!key);
    setInitialValues({});
  };

  const getMostRecentCoffeeIn = () => {
    return initialValues?.coffee_in ?? null;
  };

  const getMostRecentLiquidOut = () => {
    return initialValues?.liquid_out ?? null;
  };

  const getMostRecentWaterIn = () => {
    return initialValues?.water_in ?? null;
  };

  const getMostRecentSteepTime = () => {
    return initialValues?.steep_time ?? 0;
  };

  const getMostRecentSteepTimeHours = () => {
    return Math.floor(getMostRecentSteepTime() / 3600) ?? null;
  };

  const getMostRecentSteepTimeMinutes = () => {
    return Math.floor((getMostRecentSteepTime() % 3600) / 60) ?? null;
  };

  const getMostRecentSteepTimeSeconds = () => {
    return (getMostRecentSteepTime() % 3600) % 60 ?? null;
  };

  const getMostRecentBrewerName = () => {
    return initialValues?.brewer?.name ?? null;
  };

  const getMostRecentDrinkName = () => {
    return initialValues?.drink?.name ?? null;
  };

  const coffeeInInput = (
    <Grid item xs={4}>
      <Box px={1}>
        <Typography variant="caption" align="center">
          Coffee In (g)
        </Typography>
        <form autoComplete="off">
          <TextField
            InputProps={{
              inputComponent: NumberFormatCustom,
              classes: {
                input: classes.resize,
              },
              inputProps: {
                decimalScale: 1,
                allowNegative: false,
              },
            }}
            defaultValue={getMostRecentCoffeeIn()}
            key={`${key}${getMostRecentCoffeeIn()}`}
            className={classes.formInOut}
            id="outlined-basic"
            variant="outlined"
            onChange={handleCoffeeInChange}
            size="small"
          />
        </form>
      </Box>
    </Grid>
  );

  const waterInInput = (
    <Grid item xs={4}>
      <Box px={1}>
        <Typography variant="caption" align="center">
          Water In (g)
        </Typography>
        <form autoComplete="off">
          <TextField
            InputProps={{
              inputComponent: NumberFormatCustom,
              classes: {
                input: classes.resize,
              },
              inputProps: {
                decimalScale: 1,
                allowNegative: false,
              },
            }}
            defaultValue={getMostRecentWaterIn()}
            key={`${key}${getMostRecentWaterIn()}`}
            id="outlined-basic"
            variant="outlined"
            onChange={handleLiquidInChange}
            size="small"
          />
        </form>
      </Box>
    </Grid>
  );

  const liquidOutInput = (
    <Grid item xs={4}>
      <Box px={1}>
        <Typography variant="caption" align="center">
          Liquid Out (g)
        </Typography>
        <form autoComplete="off">
          <TextField
            InputProps={{
              inputComponent: NumberFormatCustom,
              classes: {
                input: classes.resize,
              },
              inputProps: {
                decimalScale: 1,
                allowNegative: false,
              },
            }}
            defaultValue={getMostRecentLiquidOut()}
            key={`${key}${getMostRecentLiquidOut()}`}
            id="liquid_out"
            variant="outlined"
            onChange={handleLiquidOutChange}
            size="small"
          />
        </form>
      </Box>
    </Grid>
  );

  const steepTimeInput = (
    <Grid item xs={12}>
      <Typography variant="caption" align="center">
        Steep Time
      </Typography>
      <Grid container justify="center">
        <Grid item xs={4} sm={2}>
          <Typography variant="caption" align="center">
            Hours
          </Typography>
          <Box px={1}>
            <form autoComplete="off">
              <TextField
                InputProps={{
                  inputComponent: NumberFormatCustom,
                  classes: {
                    input: classes.resize,
                  },
                  inputProps: {
                    decimalScale: 0,
                    allowNegative: false,
                    name: hoursEnum,
                    isAllowed: ({ value }) => value < 1000,
                  },
                }}
                defaultValue={getMostRecentSteepTimeHours()}
                key={`${key}${getMostRecentSteepTimeHours()}`}
                variant="outlined"
                onChange={handleSteepTimeChange}
                size="small"
              />
            </form>
          </Box>
        </Grid>
        <Grid item xs={4} sm={2}>
          <Typography variant="caption" align="center">
            Minutes
          </Typography>
          <Box px={1}>
            <form autoComplete="off">
              <TextField
                InputProps={{
                  inputComponent: NumberFormatCustom,
                  classes: {
                    input: classes.resize,
                  },
                  inputProps: {
                    decimalScale: 0,
                    allowNegative: false,
                    name: minutesEnum,
                    isAllowed: ({ value }) => value < 60,
                  },
                }}
                defaultValue={getMostRecentSteepTimeMinutes()}
                key={`${key}${getMostRecentSteepTimeMinutes()}`}
                variant="outlined"
                onChange={handleSteepTimeChange}
                size="small"
              />
            </form>
          </Box>
        </Grid>
        <Grid item xs={4} sm={2}>
          <Typography variant="caption" align="center">
            Seconds
          </Typography>
          <Box px={1}>
            <form autoComplete="off">
              <TextField
                InputProps={{
                  inputComponent: NumberFormatCustom,
                  classes: {
                    input: classes.resize,
                  },
                  inputProps: {
                    decimalScale: 0,
                    allowNegative: false,
                    name: secondsEnum,
                    isAllowed: ({ value }) => value < 60,
                  },
                }}
                defaultValue={getMostRecentSteepTimeSeconds()}
                key={`${key}${getMostRecentSteepTimeSeconds()}`}
                variant="outlined"
                onChange={handleSteepTimeChange}
                size="small"
              />
            </form>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );

  /**
   * Gets the correct inputs to show based on the method the user has chosen
   * @returns {object} the input components to show
   */
  const getCoffeeAndWaterInputs = () => {
    const methodEnum = methodIdToMethodEnum[selectedMethodId];
    switch (methodEnum) {
      case espressoEnum:
        return (
          <>
            {coffeeInInput}
            {liquidOutInput}
          </>
        );
      case pouroverEnum:
        return (
          <>
            {coffeeInInput}
            {waterInInput}
          </>
        );
      case immersionEnum:
        return (
          <>
            {coffeeInInput}
            {waterInInput}
            {steepTimeInput}
          </>
        );
      default:
        return (
          <>
            {coffeeInInput}
            {liquidOutInput}
          </>
        );
    }
  };

  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <Typography variant="caption" align="center">
          Method
        </Typography>
        <form autoComplete="off">
          <TextField
            className={classes.form}
            id="method"
            value={selectedMethodId}
            select
            onChange={handleMethodChange}
            variant="outlined"
            InputProps={{
              classes: {
                input: classes.resizeBigger,
              },
            }}
          >
            {methods.map(({ method_id, name }) => (
              <MenuItem value={method_id} key={method_id}>
                {name}
              </MenuItem>
            ))}
          </TextField>
        </form>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography variant="caption" align="center">
          Brewer
        </Typography>
        <AutocompleteWrapperSimple
          fieldName="brewer"
          options={getBrewerOptions()}
          onChange={handleBrewerChange}
          initialValue={getMostRecentBrewerName()}
          key={`${key}${getMostRecentBrewerName()}`}
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
              id="brewer"
              variant="outlined"
            />
          )}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography variant="caption" align="center">
          Drink
        </Typography>
        <AutocompleteWrapperSimple
          fieldName="drink"
          options={getDrinkOptions()}
          onChange={handleDrinkChange}
          initialValue={getMostRecentDrinkName()}
          key={`${key}${getMostRecentDrinkName()}`}
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
              id="drink"
              variant="outlined"
            />
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <Box pt={2}>
          <Divider variant="middle" />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box pt={1}>
          <Grid container justify="center">
            {getCoffeeAndWaterInputs()}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}

MethodAndMethodStuffInput.propTypes = {
  ...coffeeEntryPropTypesShape,
  brewers: PropTypes.array.isRequired,
  drinks: PropTypes.array.isRequired,
  methods: PropTypes.array.isRequired,
  methodIdToBrewersMap: PropTypes.object.isRequired,
  methodIdToDrinksMap: PropTypes.object.isRequired,
  mostRecentMethodData: PropTypes.object,
};

MethodAndMethodStuffInput.defaultProps = {
  mostRecentMethodData: {},
};

export default MethodAndMethodStuffInput;
