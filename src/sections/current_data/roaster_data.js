/**
 * Roaster Data. Shows all roasters stored in the DB
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
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
import EditRoasterData from './edit/roaster/edit_roaster_data.js';
import { ActiveBadge, InactiveBadge } from './constants/consts.js';
// Queries and Fetching
import { deleteRoasterMutation } from '../../graphql/mutations/roaster_gql_mutations.js';
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
    width: '36px', // Same width as icon to make things centered
    height: '36px', // Same height as icon to make things centered
  },
}));

function RoasterRow({
  roaster,
  currentData,
  onRoasterDeletion,
  isUserAuthorized,
}) {
  const classes = useStyles();
  const {
    roaster_id,
    name,
    city,
    state,
    country,
    website,
    is_active,
  } = roaster;
  const { coffees } = currentData;

  // State to show the edit roaster entry section
  const [openEdit, setOpenEdit] = useState(false);

  // State used for editing a roaster.
  const [roasterData, setRoasterData] = useState({
    name,
    city,
    state,
    country,
    website,
    is_active,
  });

  const handleSaveChangesSuccess = (newData) => {
    setRoasterData(newData);
  };

  const handleSaveChangesFail = (newData) => {
    // TODO: show the user there was a failed save
    console.log('failed save');
  };

  const handleRoasterDeletionFail = () => {
    // TODO: show the user there was a failed delete
    console.log('failed delete');
  };

  const handleEditRoasterClick = (e) => {
    setOpenEdit(!openEdit);
  };

  const {
    name: currentName,
    is_active: currentActiveStatus,
    city: currentCity,
    state: currentState,
    country: currentCountry,
    website: currentWebsite,
  } = roasterData;

  const getTitle = () => {
    return currentActiveStatus ? (
      <ActiveBadge variant="dot">
        <Link
          target="_blank"
          rel="noreferrer"
          href={currentWebsite}
          variant="body2"
        >
          {currentName}
        </Link>
      </ActiveBadge>
    ) : (
      <InactiveBadge variant="dot">
        <Link
          target="_blank"
          rel="noreferrer"
          href={currentWebsite}
          variant="body2"
        >
          {currentName}
        </Link>
      </InactiveBadge>
    );
  };

  const handleDelete = () => {
    // Should not delete a roaster if it's tied to a coffee.
    if (coffees.find((coffee) => coffee?.roaster?.roaster_id === roaster_id)) {
      handleRoasterDeletionFail();
      console.log('roaster has a coffee bro');
      return;
    }
    writeGQL(deleteRoasterMutation, {
      roaster_id: parseInt(roaster_id),
    })
      .then(({ data }) => {
        const { deleteRoaster: deletedRoasterId } = data;
        if (deletedRoasterId) {
          // Write was successful, let user know, update state and return
          onRoasterDeletion(deletedRoasterId);
          return;
        }
        handleRoasterDeletionFail();
        return;
      })
      .catch((e) => {
        handleRoasterDeletionFail();
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
            subheader={currentCountry}
          />
          <Grid
            direction="row"
            container
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              {isUserAuthorized ? (
                <IconButton
                  aria-label="more"
                  onClick={handleDelete}
                  size="small"
                >
                  <DeleteForeverIcon />
                </IconButton>
              ) : (
                <div className={classes.emptyBox} />
              )}
            </Grid>
            <Grid item>
              <Box px={1}>
                <Typography variant="caption">{`${currentCity ?? ''}${
                  currentState ? `, ${currentState}` : ''
                }`}</Typography>
              </Box>
            </Grid>
            <Grid item>
              {isUserAuthorized ? (
                <IconButton
                  aria-label="more"
                  onClick={handleEditRoasterClick}
                  size="small"
                >
                  {openEdit ? <ExpandLessIcon /> : <EditTwoToneIcon />}
                </IconButton>
              ) : (
                <div className={classes.emptyBox} />
              )}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      {openEdit && (
        <EditRoasterData
          roaster={roaster}
          onSaveChangesSuccess={handleSaveChangesSuccess}
          onSaveChangesFail={handleSaveChangesFail}
        />
      )}
    </Box>
  );
}

RoasterRow.propTypes = {
  roaster: PropTypes.shape({
    roaster_id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    name: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    country: PropTypes.string,
    website: PropTypes.string,
    is_active: PropTypes.bool,
  }).isRequired,
  currentData: PropTypes.shape({
    coffees: PropTypes.array.isRequired,
  }),
  onRoasterDeletion: PropTypes.func.isRequired,
  isUserAuthorized: PropTypes.bool.isRequired,
};

function RoasterData({
  roasters,
  coffees,
  onRoasterDeletion,
  isUserAuthorized,
}) {
  return (
    <Box pb={2}>
      <Grid container>
        <Grid item xs={12}>
          <Box p={2}>
            <Typography variant="h6" align="center">
              Roasters
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Grid container align="center" justify="center">
            {roasters.map((roaster) => (
              <Grid item xs={10} sm={3} lg={2} key={roaster.roaster_id}>
                <RoasterRow
                  roaster={roaster}
                  currentData={{ coffees }}
                  onRoasterDeletion={onRoasterDeletion}
                  isUserAuthorized={isUserAuthorized}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

RoasterData.propTypes = {
  roasters: PropTypes.array.isRequired,
  coffees: PropTypes.array.isRequired,
  onRoasterDeletion: PropTypes.func.isRequired,
  isUserAuthorized: PropTypes.bool,
};

RoasterData.defaultProps = {
  isUserAuthorized: false,
};

export default RoasterData;
