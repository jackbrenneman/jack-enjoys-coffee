/**
 * Drink Data. Shows all drink stored in the DB
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CardHeader from '@material-ui/core/CardHeader';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
// Custom Components
import EditDrinkData from './edit/drink/edit_drink_data.js';
// Queries and Fetching
import { deleteDrinkMutation } from '../../graphql/mutations/drink_gql_mutations.js';
import { writeGQL } from '../../graphql/fetch.js';

const useStyles = makeStyles((theme) => ({
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
}));

function DrinkRow({ drink, onDrinkDeletion, currentData }) {
  const classes = useStyles();
  const { drink_id, name, method, is_active } = drink;

  // State to show the edit drink entry section
  const [openEdit, setOpenEdit] = useState(false);

  // State used for editing a drink.
  const [drinkData, setDrinkData] = useState({
    name,
    method,
    is_active,
  });

  const handleSaveChangesSuccess = (newData) => {
    setDrinkData(newData);
  };

  const handleSaveChangesFail = () => {
    // TODO: show the user there was a failed save
    console.log('failed save -- drinks');
  };

  const handleDeletionFail = () => {
    // TODO: show the user there was a failed delete
    console.log('failed delete -- drinks');
  };

  const handleEditBrewerClick = (e) => {
    setOpenEdit(!openEdit);
  };

  const { name: currentName, method: currentMethod } = drinkData;

  const { name: currentMethodName } = currentMethod;

  const handleDelete = () => {
    writeGQL(deleteDrinkMutation, {
      drink_id: parseInt(drink_id),
    })
      .then(({ data }) => {
        const { deleteDrink: deletedDrinkId } = data;
        if (deletedDrinkId) {
          // Write was successful, let user know, update state and return
          onDrinkDeletion(deletedDrinkId);
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

  return (
    <Box p={1}>
      <Card raised className={classes.card}>
        <CardContent className={classes.content}>
          <CardHeader
            className={classes.header}
            titleTypographyProps={{ variant: 'body2' }}
            title={currentName}
          />
          <Grid
            direction="row"
            container
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <Grid item>
                <IconButton
                  aria-label="more"
                  onClick={handleDelete}
                  size="small"
                >
                  <DeleteForeverIcon />
                </IconButton>
              </Grid>
            </Grid>
            <Grid item>
              <Box px={1}>
                <Typography variant="caption">{currentMethodName}</Typography>
              </Box>
            </Grid>
            <Grid item>
              <IconButton
                aria-label="more"
                onClick={handleEditBrewerClick}
                size="small"
              >
                {openEdit ? <ExpandLessIcon /> : <EditTwoToneIcon />}
              </IconButton>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      {openEdit && (
        <EditDrinkData
          drink={drink}
          {...currentData}
          onSaveChangesSuccess={handleSaveChangesSuccess}
          onSaveChangesFail={handleSaveChangesFail}
        />
      )}
    </Box>
  );
}

DrinkRow.propTypes = {
  drink: PropTypes.shape({
    drink_id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    name: PropTypes.string,
    method: PropTypes.object,
  }).isRequired,
  currentData: PropTypes.shape({
    methods: PropTypes.array.isRequired,
  }),
  onDrinkDeletion: PropTypes.func.isRequired,
};

function DrinkData({ drinks, methods, onDrinkDeletion }) {
  return (
    <Box pb={2}>
      <Grid container direction="column" alignItems="center">
        <Grid item xs={12}>
          <Box p={2}>
            <Typography variant="h6">Drinks</Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Grid container align="center" justify="center">
            {drinks.map((drink) => (
              <Grid item xs={10} sm={3} lg={2} key={drink.drink_id}>
                <DrinkRow
                  drink={drink}
                  currentData={{ methods }}
                  onDrinkDeletion={onDrinkDeletion}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

DrinkData.propTypes = {
  drinks: PropTypes.array.isRequired,
  methods: PropTypes.array.isRequired,
  onDrinkDeletion: PropTypes.func.isRequired,
};

export default DrinkData;
