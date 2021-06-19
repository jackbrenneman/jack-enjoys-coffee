/**
 * Edit Coffee Data. Allows users to edit Coffee Data
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
// Queries and Fetching
import { updateCoffeeMutation } from '../../../../graphql/mutations/coffee_gql_mutations.js';
import { writeGQL } from '../../../../graphql/fetch.js';
// Custom Components
import AutocompleteWrapperSimple from '../../../new_coffee_entry/helpers/autocomplete_container_simple.js';

const useStyles = makeStyles(() => ({
  form: {
    width: '200px',
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

function EditCoffeeData({
  coffee,
  onSaveChangesSuccess,
  onSaveChangesFail,
  origins,
  processes,
  roasters,
}) {
  const classes = useStyles();

  const {
    coffee_id,
    name: currentName,
    origin: currentOrigin,
    process: currentProcess,
    roaster: currentRoaster,
    is_active: currentActiveStatus,
  } = coffee;

  // State used for editing a coffee.
  const [coffeeData, setCoffeeData] = useState({
    name: currentName,
    origin: currentOrigin,
    process: currentProcess,
    roaster: currentRoaster,
    is_active: currentActiveStatus,
  });

  const { name, roaster, origin, process, is_active } = coffeeData;

  const handleChangeActiveStatus = (e) => {
    setCoffeeData({
      ...coffeeData,
      is_active: !is_active,
    });
  };

  const handleSaveChanges = () => {
    const coffeeInput = {
      name: name,
      roaster_id: parseInt(roaster.roaster_id),
      origin_id: parseInt(origin.origin_id),
      process_id: parseInt(process.process_id),
      is_active: is_active,
    };
    writeGQL(updateCoffeeMutation, {
      coffee: coffeeInput,
      coffee_id: parseInt(coffee_id),
    })
      .then(({ data }) => {
        const { updateCoffee: updatedCoffee } = data;
        if (updatedCoffee.coffee_id) {
          // Write was successful, let user know, update state and return
          onSaveChangesSuccess(coffeeData);
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

  const handleNameChange = (e) => {
    setCoffeeData({
      ...coffeeData,
      name: e.target.value,
    });
  };

  const handleRoasterChange = (newRoaster) => {
    setCoffeeData({
      ...coffeeData,
      roaster: newRoaster,
    });
  };

  const handleOriginChange = (newOrigin) => {
    setCoffeeData({
      ...coffeeData,
      origin: newOrigin,
    });
  };

  const handleProcessChange = (newProcess) => {
    setCoffeeData({
      ...coffeeData,
      process: newProcess,
    });
  };

  return (
    <Box p={1}>
      <Card raised className={classes.card}>
        <CardContent className={classes.content}>
          <Grid direction="row" container justify="center" alignItems="center">
            <Grid item xs={12}>
              <Typography variant="caption" align="center">
                Name
              </Typography>
              <form autoComplete="off">
                <TextField
                  className={classes.form}
                  value={name}
                  id="name"
                  variant="outlined"
                  size="small"
                  onChange={handleNameChange}
                  InputProps={{
                    classes: {
                      input: classes.resize,
                    },
                  }}
                />
              </form>
            </Grid>
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
                initialValue={roaster.name}
                textField={(params) => (
                  <TextField
                    {...params}
                    ref={params.InputProps.ref}
                    InputProps={{
                      classes: {
                        input: classes.resize,
                      },
                    }}
                    value={roaster}
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
                Process
              </Typography>
            </Grid>
            <Grid item>
              <AutocompleteWrapperSimple
                fieldName="process"
                options={processes}
                onChange={handleProcessChange}
                initialValue={process.name}
                textField={(params) => (
                  <TextField
                    {...params}
                    ref={params.InputProps.ref}
                    InputProps={{
                      classes: {
                        input: classes.resize,
                      },
                    }}
                    value={process}
                    className={classes.form}
                    id="process"
                    size="small"
                    variant="outlined"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="caption" align="center">
                Origin
              </Typography>
            </Grid>
            <Grid item>
              <AutocompleteWrapperSimple
                fieldName="origin"
                options={origins}
                onChange={handleOriginChange}
                initialValue={origin.name}
                textField={(params) => (
                  <TextField
                    {...params}
                    ref={params.InputProps.ref}
                    InputProps={{
                      classes: {
                        input: classes.resize,
                      },
                    }}
                    value={origin}
                    className={classes.form}
                    size="small"
                    id="origin"
                    variant="outlined"
                  />
                )}
              />
            </Grid>
          </Grid>
          <Grid direction="row" container justify="center" alignItems="center">
            <Grid item>
              <Grid
                direction="column"
                container
                justify="center"
                alignItems="center"
              >
                <Grid item>
                  <Typography variant="caption" align="center">
                    Toggle Active
                  </Typography>
                </Grid>
                <Grid item>
                  <Switch
                    checked={is_active}
                    onChange={handleChangeActiveStatus}
                    name="is_active"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container justify="center" alignItems="center">
            <Grid xs={12} item>
              <Divider variant="middle" />
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
        </CardContent>
      </Card>
    </Box>
  );
}

EditCoffeeData.propTypes = {
  coffee: PropTypes.shape({
    coffee_id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    name: PropTypes.string,
    roaster: PropTypes.object,
    origin: PropTypes.object,
    process: PropTypes.object,
  }).isRequired,
  origins: PropTypes.array.isRequired,
  processes: PropTypes.array.isRequired,
  roasters: PropTypes.array.isRequired,
  onSaveChangesSuccess: PropTypes.func.isRequired,
  onSaveChangesFail: PropTypes.func.isRequired,
};

export default EditCoffeeData;
