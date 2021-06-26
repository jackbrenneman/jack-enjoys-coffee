/**
 * Water Data. Shows all waters stored in the DB
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
// Custom Components
import EditWaterData from './edit/water/edit_water_data.js';
import { ActiveBadge, InactiveBadge } from './constants/consts.js';
// Queries and Fetching
import { deleteWaterMutation } from '../../graphql/mutations/water_gql_mutations.js';
import { writeGQL } from '../../graphql/fetch.js';

const useStyles = makeStyles((theme) => ({
  card: {
    padding: '0',
  },
  content: {
    padding: '0',
    '&:last-child': {
      padding: 0,
    },
  },
  row: {
    flexGrow: 1,
  },
  emptyBox: {
    width: '36px', // Same width as icon to make things centered
    height: '36px', // Same height as icon to make things centered
  },
}));

function WaterRow({ water, onWaterDeletion, isUserAuthorized }) {
  const classes = useStyles();
  const { water_id, name, description, is_active } = water;

  // State to show the edit water entry section
  const [openEdit, setOpenEdit] = useState(false);

  // State used for editing a water.
  const [waterData, setWaterData] = useState({
    name,
    description,
    is_active,
  });

  const handleSaveChangesSuccess = (newData) => {
    setWaterData(newData);
  };

  const handleSaveChangesFail = () => {
    // TODO: show the user there was a failed save
    console.log('failed save -- waters');
  };

  const handleDeletionFail = () => {
    // TODO: show the user there was a failed delete
    console.log('failed delete -- waters');
  };

  const handleEditWaterClick = (e) => {
    setOpenEdit(!openEdit);
  };

  const {
    name: currentName,
    is_active: currentActiveStatus,
    description: currentDescription,
  } = waterData;

  const getTitle = () => {
    return currentActiveStatus ? (
      <ActiveBadge variant="dot">{currentName}</ActiveBadge>
    ) : (
      <InactiveBadge variant="dot">{currentName}</InactiveBadge>
    );
  };

  const handleDelete = () => {
    writeGQL(deleteWaterMutation, {
      water_id: parseInt(water_id),
    })
      .then(({ data }) => {
        const { deleteWater: deletedWaterId } = data;
        if (deletedWaterId) {
          // Write was successful, let user know, update state and return
          onWaterDeletion(deletedWaterId);
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
    <Box p={1} className={classes.row}>
      <Card raised className={classes.card}>
        <CardContent className={classes.content}>
          <CardHeader
            className={classes.header}
            titleTypographyProps={{ variant: 'body2' }}
            title={getTitle()}
          />
          <Grid item xs={12}>
            <Box px={1}>
              <Typography variant="caption">{currentDescription}</Typography>
            </Box>
          </Grid>
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
              {isUserAuthorized ? (
                <IconButton
                  aria-label="more"
                  onClick={handleEditWaterClick}
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
        <EditWaterData
          water={water}
          onSaveChangesSuccess={handleSaveChangesSuccess}
          onSaveChangesFail={handleSaveChangesFail}
        />
      )}
    </Box>
  );
}

WaterRow.propTypes = {
  water: PropTypes.shape({
    water_id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    name: PropTypes.string,
    description: PropTypes.string,
    is_active: PropTypes.bool,
  }).isRequired,
  onWaterDeletion: PropTypes.func.isRequired,
  isUserAuthorized: PropTypes.bool.isRequired,
};

function WaterData({ waters, onWaterDeletion, isUserAuthorized }) {
  return (
    <Box pb={2}>
      <Grid container>
        <Grid item xs={12}>
          <Box p={2}>
            <Typography variant="h6" align="center">
              Waters
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Grid container align="center" justify="center">
            {waters.map((water) => (
              <Grid item xs={10} sm={3} lg={2} key={water.water_id}>
                <WaterRow
                  water={water}
                  onWaterDeletion={onWaterDeletion}
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

WaterData.propTypes = {
  waters: PropTypes.array.isRequired,
  onWaterDeletion: PropTypes.func.isRequired,
  isUserAuthorized: PropTypes.bool,
};

WaterData.defaultProps = {
  isUserAuthorized: false,
};

export default WaterData;
