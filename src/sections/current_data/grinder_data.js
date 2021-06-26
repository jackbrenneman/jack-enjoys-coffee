/**
 * Grinder Data. Shows all grinders stored in the DB
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
// Custom Components
import EditGrinderData from './edit/grinder/edit_grinder_data';
import { ActiveBadge, InactiveBadge } from './constants/consts.js';
// Queries and Fetching
import { deleteGrinderMutation } from '../../graphql/mutations/grinder_gql_mutations.js';
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
  emptyBox: {
    width: '36px', // Same width as icon to make things centered
    height: '36px', // Same height as icon to make things centered
  },
}));

function GrinderRow({ grinder, onGrinderDeletion, isUserAuthorized }) {
  const classes = useStyles();
  const { grinder_id, name, website, is_active } = grinder;

  // State to show the edit grinder entry section
  const [openEdit, setOpenEdit] = useState(false);

  // State used for editing a grinder.
  const [grinderData, setGrinderData] = useState({
    name,
    website,
    is_active,
  });

  const handleSaveChangesSuccess = (newData) => {
    setGrinderData(newData);
  };

  const handleSaveChangesFail = () => {
    // TODO: show the user there was a failed save
    console.log('failed save -- brewers');
  };

  const handleDeletionFail = () => {
    // TODO: show the user there was a failed delete
    console.log('failed delete -- brewers');
  };

  const handleEditGrinderClick = (e) => {
    setOpenEdit(!openEdit);
  };

  const {
    name: currentName,
    is_active: currentActiveStatus,
    website: currentWebsite,
  } = grinderData;

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
    writeGQL(deleteGrinderMutation, {
      grinder_id: parseInt(grinder_id),
    })
      .then(({ data }) => {
        const { deleteGrinder: deletedGrinderId } = data;
        if (deletedGrinderId) {
          // Write was successful, let user know, update state and return
          onGrinderDeletion(deletedGrinderId);
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
              <Box px={1}>{getTitle()}</Box>
            </Grid>
            <Grid item>
              {isUserAuthorized ? (
                <IconButton
                  aria-label="more"
                  onClick={handleEditGrinderClick}
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
        <EditGrinderData
          grinder={grinder}
          onSaveChangesSuccess={handleSaveChangesSuccess}
          onSaveChangesFail={handleSaveChangesFail}
        />
      )}
    </Box>
  );
}

GrinderRow.propTypes = {
  grinder: PropTypes.shape({
    grinder_id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    name: PropTypes.string,
    website: PropTypes.string,
    is_active: PropTypes.bool,
  }).isRequired,
  onGrinderDeletion: PropTypes.func.isRequired,
  isUserAuthorized: PropTypes.bool.isRequired,
};

function GrinderData({ grinders, onGrinderDeletion, isUserAuthorized }) {
  return (
    <Box pb={2}>
      <Grid container>
        <Grid item xs={12}>
          <Box p={2}>
            <Typography variant="h6" align="center">
              Grinders
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Grid container align="center" justify="center">
            {grinders.map((grinder) => (
              <Grid item xs={10} sm={3} lg={2} key={grinder.grinder_id}>
                <GrinderRow
                  grinder={grinder}
                  onGrinderDeletion={onGrinderDeletion}
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

GrinderData.propTypes = {
  grinders: PropTypes.array.isRequired,
  onGrinderDeletion: PropTypes.func.isRequired,
  isUserAuthorized: PropTypes.bool,
};

GrinderData.defaultProps = {
  isUserAuthorized: false,
};

export default GrinderData;
