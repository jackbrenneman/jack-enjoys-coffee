/**
 * Edit a Coffee Entry. Allows users to edit their coffee entry
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
// Queries and Fetching
import { writeGQL } from '../../../graphql/fetch.js';
import {
  updateCoffeeEntryMutation,
  deleteCoffeeEntryMutation,
} from '../../../graphql/mutations/coffee_entry_gql_mutations.js';
// Custom Components
import AutocompleteWrapperSimple from '../../coffee_entry/helpers/autocomplete_container_simple.js';
import {
  ratingsInputData,
  hoursEnum,
  minutesEnum,
  secondsEnum,
  espressoEnum,
  pouroverEnum,
  immersionEnum,
  methodIdToMethodEnum,
} from '../../../consts.js';

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

const useStyles = makeStyles(() => ({
  form: {
    width: '180px',
  },
  card: {
    padding: '0',
  },
  header: {
    padding: '0',
    paddingTop: '10px',
  },
  content: {
    padding: '0',
    '&:last-child': {
      padding: 0,
    },
  },
  resize: {
    fontSize: 12,
    textAlign: 'center',
  },
}));

function EditCoffeeEntry({
  coffeeEntry,
  currentData,
  onSaveChangesSuccess,
  onSaveChangesFail,
  onCoffeeEntryDeletion,
}) {
  const classes = useStyles();

  const { coffee_entry_id, coffee } = coffeeEntry;

  // State used to reset inputs
  const [key, setKey] = useState(true);

  // State used for the coffee name so we can have an initial coffee populated correctly
  const [coffeeName, setCoffeeName] = useState(coffee?.name);

  // State used for editing a coffee.
  const [coffeeEntryData, setCoffeeEntryData] = useState(coffeeEntry);

  // State used for selecting a roaster
  const [roasterId, setRoasterId] = useState(coffee?.roaster?.roaster_id);

  const initialSteepTime = coffeeEntry?.brew?.method?.steep_time ?? 0;

  const mostRecentSteepTimeHours = Math.floor(initialSteepTime / 3600) ?? null;

  const mostRecentSteepTimeMinutes =
    Math.floor((initialSteepTime % 3600) / 60) ?? null;

  const mostRecentSteepTimeSeconds = (initialSteepTime % 3600) % 60 ?? null;

  const mostRecentSteepTime = {
    [hoursEnum]: mostRecentSteepTimeHours,
    [minutesEnum]: mostRecentSteepTimeMinutes,
    [secondsEnum]: mostRecentSteepTimeSeconds,
  };

  // State used for steep time
  const [steepTime, setSteepTime] = useState(mostRecentSteepTime);

  const {
    methods,
    coffees,
    brewers,
    drinks,
    roasters,
    waters,
    grinders,
    methodIdToBrewers,
    methodIdToDrinks,
    roasterIdToCoffees,
  } = currentData;

  /**
   * Given a coffee entry, get the important bits to write to the database
   *
   * @param {object} updatedCoffeeEntry The updated coffee entry
   *
   * @returns {object}                  The normalized, updated coffee entry
   */
  const normalizeCoffeeEntryForUpdate = (updatedCoffeeEntry) => {
    return {
      date: updatedCoffeeEntry?.date,
      coffee_id: updatedCoffeeEntry?.coffee?.coffee_id,
      method_id: updatedCoffeeEntry?.brew?.method?.method_id,
      brewer_id: updatedCoffeeEntry?.brew?.method?.brewer?.brewer_id,
      drink_id: updatedCoffeeEntry?.brew?.method?.drink?.drink_id,
      grinder_id: updatedCoffeeEntry?.brew?.grind?.grinder?.grinder_id,
      grinder_setting: updatedCoffeeEntry?.brew?.grind?.setting,
      water_id: updatedCoffeeEntry?.brew?.water?.water_id,
      coffee_in: updatedCoffeeEntry?.brew?.method?.coffee_in,
      liquid_out: updatedCoffeeEntry?.brew?.method?.liquid_out,
      water_in: updatedCoffeeEntry?.brew?.method?.water_in,
      steep_time: updatedCoffeeEntry?.brew?.method?.steep_time,
      notes: updatedCoffeeEntry?.notes,
      rating: updatedCoffeeEntry?.rating,
    };
  };

  const handleSaveChanges = () => {
    const normalizedCoffeeEntry = normalizeCoffeeEntryForUpdate(
      coffeeEntryData
    );
    writeGQL(updateCoffeeEntryMutation, {
      coffeeEntry: normalizedCoffeeEntry,
      coffee_entry_id: parseInt(coffee_entry_id),
    })
      .then(({ data }) => {
        const { updateCoffeeEntry: updatedCoffeeEntry } = data;
        if (updatedCoffeeEntry.coffee_entry_id) {
          // Write was successful, let user know, update state and return
          onSaveChangesSuccess(coffeeEntryData);
          return;
        }
        onSaveChangesFail();
        return;
      })
      .catch((e) => {
        onSaveChangesFail();
        console.log(e);
      });
    return;
  };

  const handleDeletionFail = () => {
    // TODO: show the user there was a failed delete
    console.log('failed delete -- coffee entry');
  };

  const handleDelete = () => {
    writeGQL(deleteCoffeeEntryMutation, {
      coffee_entry_id: parseInt(coffee_entry_id),
    })
      .then(({ data }) => {
        const { deleteCoffeeEntry: deletedCoffeeEntryId } = data;
        if (deletedCoffeeEntryId) {
          // Write was successful, let user know, update state and return
          onCoffeeEntryDeletion(deletedCoffeeEntryId);
          return;
        }
        handleDeletionFail();
        return;
      })
      .catch((e) => {
        handleDeletionFail();
        console.log(e);
      });
    return;
  };

  const handleDateChange = (e) => {
    setCoffeeEntryData({
      ...coffeeEntryData,
      date: e.target.value,
    });
  };

  const handleRoasterChange = ({ roaster_id }) => {
    if (roaster_id === roasterId) {
      return;
    }
    setRoasterId(roaster_id);
    setCoffeeName('');
  };

  const handleCoffeeChange = (coffee) => {
    setCoffeeEntryData({
      ...coffeeEntryData,
      coffee,
    });
  };

  const getMethodFromMethodId = (methodId) => {
    return methods.find((method) => method.method_id === methodId);
  };

  const handleMethodChange = (e) => {
    const method_id = e.target.value;
    // Don't need to change anything if they just selected the same method twice
    if (method_id === coffeeEntryData?.brew?.method?.method_id) {
      return;
    }
    setCoffeeEntryData({
      ...coffeeEntryData,
      brew: {
        ...coffeeEntryData?.brew,
        method: {
          ...getMethodFromMethodId(method_id),
          coffee_in: null,
          water_in: null,
          liquid_out: null,
          steep_time: null,
          drink: {
            drink_id: null,
            name: null,
          },
          brewer: {
            brewer_id: null,
            name: null,
          },
        },
      },
    });
    setKey(!key);
    setSteepTime({
      ...steepTime,
      [hoursEnum]: 0,
      [minutesEnum]: 0,
      [secondsEnum]: 0,
    });
  };

  const handleBrewerChange = (brewer) => {
    setCoffeeEntryData({
      ...coffeeEntryData,
      brew: {
        ...coffeeEntryData?.brew,
        method: {
          ...coffeeEntryData?.brew?.method,
          brewer,
        },
      },
    });
  };

  const handleDrinkChange = (drink) => {
    setCoffeeEntryData({
      ...coffeeEntryData,
      brew: {
        ...coffeeEntryData?.brew,
        method: {
          ...coffeeEntryData?.brew?.method,
          drink,
        },
      },
    });
  };

  const handleCoffeeInChange = (e) => {
    setCoffeeEntryData({
      ...coffeeEntryData,
      brew: {
        ...coffeeEntryData?.brew,
        method: {
          ...coffeeEntryData?.brew?.method,
          coffee_in: parseFloat(e.target.value),
        },
      },
    });
  };

  const handleLiquidOutChange = (e) => {
    setCoffeeEntryData({
      ...coffeeEntryData,
      brew: {
        ...coffeeEntryData?.brew,
        method: {
          ...coffeeEntryData?.brew?.method,
          liquid_out: parseFloat(e.target.value),
          water_in: null,
          steep_time: null,
        },
      },
    });
  };

  const handleLiquidInChange = (e) => {
    setCoffeeEntryData({
      ...coffeeEntryData,
      brew: {
        ...coffeeEntryData?.brew,
        method: {
          ...coffeeEntryData?.brew?.method,
          water_in: parseFloat(e.target.value),
        },
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
    setCoffeeEntryData({
      ...coffeeEntryData,
      brew: {
        ...coffeeEntryData?.brew,
        method: {
          ...coffeeEntryData?.brew?.method,
          steep_time: parseInt(steepTimeInSeconds) || null,
        },
      },
    });
  };

  const handleWaterChange = (water) => {
    setCoffeeEntryData({
      ...coffeeEntryData,
      brew: {
        ...coffeeEntryData?.brew,
        water,
      },
    });
  };

  const handleGrinderChange = (grinder) => {
    setCoffeeEntryData({
      ...coffeeEntryData,
      brew: {
        ...coffeeEntryData?.brew,
        grind: {
          ...coffeeEntryData?.brew?.grind,
          grinder,
        },
      },
    });
  };

  const handleGrindSettingChange = (e) => {
    // 0 is a valid setting, so need to make sure we handle it correctly
    let grinderSetting = parseFloat(e.target.value);
    if (grinderSetting >= 0) {
      setCoffeeEntryData({
        ...coffeeEntryData,
        brew: {
          ...coffeeEntryData?.brew,
          grind: {
            ...coffeeEntryData?.brew?.grind,
            setting: grinderSetting,
          },
        },
      });
    } else {
      setCoffeeEntryData({
        ...coffeeEntryData,
        brew: {
          ...coffeeEntryData?.brew,
          grind: {
            ...coffeeEntryData?.brew?.grind,
            setting: grinderSetting || null,
          },
        },
      });
    }
  };

  const handleRatingChange = (e) => {
    setCoffeeEntryData({
      ...coffeeEntryData,
      rating: parseFloat(e.target.value),
    });
  };

  const handleNoteChange = (e) => {
    setCoffeeEntryData({
      ...coffeeEntryData,
      notes: e.target.value,
    });
  };

  const { rating, notes, brew, date } = coffeeEntryData;
  const { method, grind, water } = brew;
  const { method_id, drink, brewer, water_in, liquid_out, coffee_in } = method;
  const { name: brewer_name } = brewer;
  const { name: drink_name } = drink;
  const { name: water_name } = water;
  const { grinder, setting } = grind;
  const { name: grinder_name } = grinder;

  // Determines what coffee options there are for the roaster selected
  const getCoffeeOptions = () => {
    if (roasterId) {
      return roasterIdToCoffees[roasterId] ? roasterIdToCoffees[roasterId] : [];
    }
    return coffees;
  };

  // Determines what brewer options there are for the method selected
  const getBrewerOptions = () => {
    if (method_id) {
      return methodIdToBrewers[method_id] ? methodIdToBrewers[method_id] : [];
    }
    return brewers;
  };

  // Determines what drink options there are for the method selected
  const getDrinkOptions = () => {
    if (method_id) {
      return methodIdToDrinks[method_id] ? methodIdToDrinks[method_id] : [];
    }
    return drinks;
  };

  // Gets the date in the form we want
  const getDate = () => {
    const realDate = new Date(date);
    const year = realDate.getFullYear();
    const month = realDate.getMonth() + 1;
    const day = realDate.getDate();
    return `${year}-${month > 9 ? month : `0${month}`}-${
      day > 9 ? day : `0${day}`
    }`;
  };

  const coffeeInInput = (
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
          defaultValue={coffee_in ?? 0}
          key={`${key}`}
          className={classes.formInOut}
          id="outlined-basic"
          variant="outlined"
          onChange={handleCoffeeInChange}
          size="small"
        />
      </form>
    </Box>
  );

  const waterInInput = (
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
          defaultValue={water_in ?? 0}
          key={`${key}`}
          id="outlined-basic"
          variant="outlined"
          onChange={handleLiquidInChange}
          size="small"
        />
      </form>
    </Box>
  );

  const liquidOutInput = (
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
          defaultValue={liquid_out ?? 0}
          key={`${key}`}
          id="liquid_out"
          variant="outlined"
          onChange={handleLiquidOutChange}
          size="small"
        />
      </form>
    </Box>
  );

  const steepTimeInput = (
    <>
      <Grid container justify="center">
        <Grid item xs={12}>
          <Typography variant="caption" align="center">
            Steep Time
          </Typography>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item xs={4}>
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
                defaultValue={steepTime[hoursEnum]}
                variant="outlined"
                onChange={handleSteepTimeChange}
                size="small"
              />
            </form>
          </Box>
        </Grid>
        <Grid item xs={4}>
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
                defaultValue={steepTime[minutesEnum]}
                variant="outlined"
                onChange={handleSteepTimeChange}
                size="small"
              />
            </form>
          </Box>
        </Grid>
        <Grid item xs={4}>
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
                defaultValue={steepTime[secondsEnum]}
                variant="outlined"
                onChange={handleSteepTimeChange}
                size="small"
              />
            </form>
          </Box>
        </Grid>
      </Grid>
    </>
  );

  /**
   * Gets the correct inputs to show based on the method the user has chosen
   * @returns {object} the input components to show
   */
  const getCoffeeAndWaterInputs = () => {
    const methodEnum = methodIdToMethodEnum[method_id];
    switch (methodEnum) {
      case espressoEnum:
        return (
          <Grid container justify="center">
            <Grid item xs={4}>
              {coffeeInInput}
            </Grid>
            <Grid item xs={4}>
              {liquidOutInput}
            </Grid>
          </Grid>
        );
      case pouroverEnum:
        return (
          <Grid container justify="center">
            <Grid item xs={4}>
              {coffeeInInput}
            </Grid>
            <Grid item xs={4}>
              {waterInInput}
            </Grid>
          </Grid>
        );
      case immersionEnum:
        return (
          <>
            <Grid container justify="center">
              <Grid item xs={4}>
                {coffeeInInput}
              </Grid>
              <Grid item xs={4}>
                {waterInInput}
              </Grid>
            </Grid>
            {steepTimeInput}
          </>
        );
      default:
        return (
          <Grid container justify="center">
            <Grid item xs={4}>
              {coffeeInInput}
            </Grid>
            <Grid item xs={4}>
              {liquidOutInput}
            </Grid>
          </Grid>
        );
    }
  };

  return (
    <Box p={1}>
      <Card raised className={classes.card}>
        <CardContent className={classes.content}>
          <Grid direction="row" container justify="center" alignItems="center">
            <Grid item xs={12}>
              <Typography variant="caption" align="center">
                Date
              </Typography>
            </Grid>
            <form autoComplete="off">
              <TextField
                className={classes.form}
                InputProps={{
                  classes: {
                    input: classes.resize,
                  },
                }}
                id="date"
                type="date"
                defaultValue={getDate()}
                onChange={handleDateChange}
                SelectProps={{
                  native: true,
                }}
                variant="outlined"
                size="small"
              />
            </form>
            <Grid item xs={12}>
              <Typography variant="caption" align="center">
                Roaster
              </Typography>
            </Grid>
            <Grid item>
              <AutocompleteWrapperSimple
                fieldName="roaster"
                options={roasters}
                onChange={handleRoasterChange}
                initialValue={coffee?.roaster?.name}
                textField={(params) => (
                  <TextField
                    {...params}
                    ref={params.InputProps.ref}
                    InputProps={{
                      classes: {
                        input: classes.resize,
                      },
                    }}
                    value={coffee?.roaster}
                    className={classes.form}
                    id="roaster"
                    size="small"
                    variant="outlined"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="caption" align="center">
                Coffee
              </Typography>
            </Grid>
            <Grid item>
              <AutocompleteWrapperSimple
                fieldName="coffee"
                options={getCoffeeOptions()}
                onChange={handleCoffeeChange}
                initialValue={coffeeName}
                key={`${coffeeName}${roasterId}`}
                textField={(params) => (
                  <TextField
                    {...params}
                    ref={params.InputProps.ref}
                    InputProps={{
                      classes: {
                        input: classes.resize,
                      },
                    }}
                    value={coffee}
                    className={classes.form}
                    id="coffee"
                    size="small"
                    variant="outlined"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="caption" align="center">
                Method
              </Typography>
            </Grid>
            <form autoComplete="off">
              <TextField
                className={classes.form}
                id="method"
                value={method_id}
                select
                onChange={handleMethodChange}
                variant="outlined"
                size="small"
                InputProps={{
                  classes: {
                    input: classes.resize,
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
            <Grid item xs={12}>
              <Typography variant="caption" align="center">
                Brewer
              </Typography>
            </Grid>
            <AutocompleteWrapperSimple
              fieldName="brewer"
              options={getBrewerOptions()}
              onChange={handleBrewerChange}
              initialValue={brewer_name}
              key={`${key}${brewer_name}`}
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
                  size="small"
                  variant="outlined"
                />
              )}
            />

            <Grid item xs={12}>
              <Typography variant="caption" align="center">
                Drink
              </Typography>
            </Grid>
            <AutocompleteWrapperSimple
              fieldName="drink"
              options={getDrinkOptions()}
              onChange={handleDrinkChange}
              initialValue={drink_name}
              key={`${key}${drink_name}`}
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
                  size="small"
                  variant="outlined"
                />
              )}
            />
            <Grid item xs={12}>
              <Box pt={1}>
                <Grid container justify="center">
                  {getCoffeeAndWaterInputs()}
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="caption" align="center">
                Grinder
              </Typography>
            </Grid>
            <AutocompleteWrapperSimple
              fieldName="name"
              options={grinders}
              onChange={handleGrinderChange}
              initialValue={grinder_name}
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
                  id="grinder"
                  size="small"
                  variant="outlined"
                  InputLabelProps={{ style: { textAlign: 'center' } }}
                />
              )}
            />
            <Grid item xs={12}>
              <Typography variant="caption" align="center">
                Grind Setting
              </Typography>
            </Grid>
            <form autoComplete="off">
              <TextField
                className={classes.formSmall}
                defaultValue={setting}
                InputProps={{
                  classes: {
                    input: classes.resize,
                  },
                }}
                id="grind_setting"
                variant="outlined"
                size="small"
                InputLabelProps={{ shrink: true }}
                onChange={handleGrindSettingChange}
              />
            </form>
            <Grid item xs={12}>
              <Typography variant="caption" align="center">
                Water
              </Typography>
            </Grid>
            <AutocompleteWrapperSimple
              fieldName="name"
              options={waters}
              onChange={handleWaterChange}
              initialValue={water_name}
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
                  id="grinder"
                  size="small"
                  variant="outlined"
                  InputLabelProps={{ style: { textAlign: 'center' } }}
                />
              )}
            />
            <Grid item xs={12}>
              <Typography variant="caption" align="center">
                Rating
              </Typography>
            </Grid>
            <form autoComplete="off">
              <TextField
                className={classes.formSmall}
                id="rating"
                select
                value={rating}
                InputProps={{
                  classes: {
                    input: classes.resize,
                  },
                }}
                InputLabelProps={{ shrink: true }}
                onChange={handleRatingChange}
                variant="outlined"
              >
                {ratingsInputData.map(({ name, value }) => (
                  <MenuItem value={value} key={value}>
                    {name}
                  </MenuItem>
                ))}
              </TextField>
            </form>
            <Grid item xs={12}>
              <Typography variant="caption" align="center">
                Notes
              </Typography>
            </Grid>
            <form autoComplete="off">
              <TextField
                className={classes.form}
                onChange={handleNoteChange}
                id="notes"
                value={notes}
                InputProps={{
                  classes: {
                    input: classes.resize,
                  },
                }}
                InputLabelProps={{ shrink: true }}
                multiline
                variant="outlined"
              />
            </form>
          </Grid>
          <Grid container justify="center" alignItems="center">
            <Grid xs={12} item>
              <Box py={2}>
                <Divider variant="middle" />
              </Box>
            </Grid>
          </Grid>
          <Grid direction="row" container justify="center" alignItems="center">
            <Grid item>
              <Box py={1}>
                <Button
                  variant="contained"
                  size="small"
                  onClick={handleSaveChanges}
                >
                  <Typography variant="caption" align="center">
                    Save Changes
                  </Typography>
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Grid container justify="center" alignItems="center">
            <Grid xs={12} item>
              <Box py={2}>
                <Divider variant="middle" />
              </Box>
            </Grid>
          </Grid>
          <Grid direction="row" container justify="center" alignItems="center">
            <Grid item>
              <Box py={1}>
                <Button variant="contained" size="small" onClick={handleDelete}>
                  <Typography variant="caption" align="center">
                    Delete Entry
                  </Typography>
                </Button>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}

EditCoffeeEntry.propTypes = {
  coffeeEntry: PropTypes.shape({
    coffee_entry_id: PropTypes.number,
  }),
  currentData: PropTypes.shape({
    brewers: PropTypes.array,
    coffees: PropTypes.array,
    drinks: PropTypes.array,
    grinders: PropTypes.array,
    methods: PropTypes.array,
    origins: PropTypes.array,
    processes: PropTypes.array,
    roasters: PropTypes.array,
    waters: PropTypes.array,
    methodIdToBrewers: PropTypes.object,
    methodIdToDrinks: PropTypes.object,
    roasterIdToCoffees: PropTypes.object,
  }),
  onSaveChangesSuccess: PropTypes.func.isRequired,
  onSaveChangesFail: PropTypes.func.isRequired,
  onCoffeeEntryDeletion: PropTypes.func.isRequired,
};

export default EditCoffeeEntry;
