/**
 * Coffee Data. Shows all coffees stored in the DB
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
import EditCoffeeData from './edit/coffee/edit_coffee_data.js';
import { ActiveBadge, InactiveBadge } from './constants/consts.js';
// Queries and Fetching
import { deleteCoffeeMutation } from '../../graphql/mutations/coffee_gql_mutations.js';
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
  emptyBox: {
    width: '30px', // Same width as icon to make things centered
    height: '30px', // Same height as icon to make things centered
  },
}));

function CoffeeRow({ coffee, currentData, onCoffeeDeletion }) {
  const classes = useStyles();
  const { coffee_id, name, origin, process, roaster, is_active } = coffee;

  // State to show the edit coffee entry section
  const [openEdit, setOpenEdit] = useState(false);

  // State used for editing a coffee.
  const [coffeeData, setCoffeeData] = useState({
    name,
    origin,
    process,
    roaster,
    is_active,
  });

  const handleSaveChangesSuccess = (newData) => {
    setCoffeeData(newData);
  };

  const handleSaveChangesFail = (newData) => {
    // TODO: show the user there was a failed save
    console.log('failed save');
  };

  const handleCoffeeDeletionFail = () => {
    // TODO: show the user there was a failed delete
    console.log('failed delete');
  };

  const handleEditCoffeeClick = (e) => {
    setOpenEdit(!openEdit);
  };

  const {
    name: currentName,
    is_active: currentActiveStatus,
    roaster: currentRoaster,
    origin: currentOrigin,
    process: currentProcess,
  } = coffeeData;

  const { name: currentRoasterName } = currentRoaster;
  const { name: currentProcessName } = currentProcess;
  const { name: currentOriginName } = currentOrigin;

  const getTitle = () => {
    return currentActiveStatus ? (
      <ActiveBadge variant="dot">{currentName}</ActiveBadge>
    ) : (
      <InactiveBadge variant="dot">{currentName}</InactiveBadge>
    );
  };

  const handleDelete = () => {
    writeGQL(deleteCoffeeMutation, {
      coffee_id: parseInt(coffee_id),
    })
      .then(({ data }) => {
        const { deleteCoffee: deletedCoffeeId } = data;
        if (deletedCoffeeId) {
          // Write was successful, let user know, update state and return
          onCoffeeDeletion(deletedCoffeeId);
          return;
        }
        handleCoffeeDeletionFail();
        return;
      })
      .catch((e) => {
        handleCoffeeDeletionFail();
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
            subheaderTypographyProps={{ variant: 'caption' }}
            title={getTitle()}
            subheader={currentRoasterName}
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
                <Typography variant="caption">{currentProcessName}</Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box px={1}>
                <Typography variant="caption">{currentOriginName}</Typography>
              </Box>
            </Grid>
            <Grid item>
              <IconButton
                aria-label="more"
                onClick={handleEditCoffeeClick}
                size="small"
              >
                {openEdit ? <ExpandLessIcon /> : <EditTwoToneIcon />}
              </IconButton>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      {openEdit && (
        <EditCoffeeData
          coffee={coffee}
          {...currentData}
          onSaveChangesSuccess={handleSaveChangesSuccess}
          onSaveChangesFail={handleSaveChangesFail}
        />
      )}
    </Box>
  );
}

CoffeeRow.propTypes = {
  coffee: PropTypes.shape({
    coffee_id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    name: PropTypes.string,
    roaster: PropTypes.object,
    origin: PropTypes.object,
    process: PropTypes.object,
  }).isRequired,
  currentData: PropTypes.shape({
    origins: PropTypes.array.isRequired,
    processes: PropTypes.array.isRequired,
    roasters: PropTypes.array.isRequired,
  }),
  onCoffeeDeletion: PropTypes.func.isRequired,
};

function CoffeeData({
  coffees,
  origins,
  processes,
  roasters,
  onCoffeeDeletion,
}) {
  return (
    <Box pb={2}>
      <Grid container direction="column" alignItems="center">
        <Grid item xs={12}>
          <Box p={2}>
            <Typography variant="h6">Coffees</Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Grid container align="center" justify="center">
            {coffees.map((coffee) => (
              <Grid item xs={10} sm={3} lg={2} key={coffee.coffee_id}>
                <CoffeeRow
                  coffee={coffee}
                  currentData={{ origins, processes, roasters }}
                  onCoffeeDeletion={onCoffeeDeletion}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

CoffeeData.propTypes = {
  coffees: PropTypes.array.isRequired,
  origins: PropTypes.array.isRequired,
  processes: PropTypes.array.isRequired,
  roasters: PropTypes.array.isRequired,
  onCoffeeDeletion: PropTypes.func.isRequired,
};

export default CoffeeData;
