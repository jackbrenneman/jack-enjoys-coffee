/**
 * Edit Drink Data. Allows users to edit Drink Data
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
import { updateDrinkMutation } from '../../../../graphql/mutations/drink_gql_mutations.js';
import { writeGQL } from '../../../../graphql/fetch.js';

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

function EditDrinkData({
  drink,
  onSaveChangesSuccess,
  onSaveChangesFail,
  methods,
}) {
  const classes = useStyles();

  const { drink_id, name: currentName, method: currentMethod } = drink;

  // State used for editing a coffee.
  const [drinkData, setdrinkData] = useState({
    name: currentName,
    method: currentMethod,
  });

  const { name, method } = drinkData;
  const { method_id } = method;

  const getMethodFromMethodId = (methodId) => {
    return methods.find((method) => method.method_id === methodId);
  };

  const handleSaveChanges = () => {
    const drinkInput = {
      name: name,
      method_id: parseInt(method_id),
    };
    writeGQL(updateDrinkMutation, {
      drink: drinkInput,
      drink_id: parseInt(drink_id),
    })
      .then(({ data }) => {
        const { updateDrink: updatedDrink } = data;
        if (updatedDrink.drink_id) {
          // Write was successful, let user know, update state and return
          onSaveChangesSuccess(drinkData);
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
    setdrinkData({
      ...drinkData,
      name: e.target.value,
    });
  };

  const handleMethodChange = (e) => {
    setdrinkData({
      ...drinkData,
      method: getMethodFromMethodId(e.target.value),
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
        </CardContent>
      </Card>
    </Box>
  );
}

EditDrinkData.propTypes = {
  drink: PropTypes.shape({
    drink_id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    name: PropTypes.string,
    method: PropTypes.object,
  }).isRequired,
  methods: PropTypes.array.isRequired,
  onSaveChangesSuccess: PropTypes.func.isRequired,
  onSaveChangesFail: PropTypes.func.isRequired,
};

export default EditDrinkData;
