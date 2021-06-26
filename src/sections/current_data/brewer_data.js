/**
 * Brewer Data. Shows all brewers stored in the DB
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
import EditBrewerData from './edit/brewer/edit_brewer_data.js';
import { ActiveBadge, InactiveBadge } from './constants/consts.js';
// Queries and Fetching
import { deleteBrewerMutation } from '../../graphql/mutations/brewer_gql_mutations.js';
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

function BrewerRow({
  brewer,
  onBrewerDeletion,
  currentData,
  isUserAuthorized,
}) {
  const classes = useStyles();
  const { brewer_id, name, website, method, is_active } = brewer;

  // State to show the edit brewer entry section
  const [openEdit, setOpenEdit] = useState(false);

  // State used for editing a brewer.
  const [brewerData, setBrewerData] = useState({
    name,
    website,
    method,
    is_active,
  });

  const handleSaveChangesSuccess = (newData) => {
    setBrewerData(newData);
  };

  const handleSaveChangesFail = () => {
    // TODO: show the user there was a failed save
    console.log('failed save -- brewers');
  };

  const handleDeletionFail = () => {
    // TODO: show the user there was a failed delete
    console.log('failed delete -- brewers');
  };

  const handleEditBrewerClick = (e) => {
    setOpenEdit(!openEdit);
  };

  const {
    name: currentName,
    is_active: currentActiveStatus,
    website: currentWebsite,
    method: currentMethod,
  } = brewerData;

  const { name: currentMethodName } = currentMethod;

  const getTitle = () => {
    return currentActiveStatus ? (
      <ActiveBadge variant="dot">{currentName}</ActiveBadge>
    ) : (
      <InactiveBadge variant="dot">{currentName}</InactiveBadge>
    );
  };

  const handleDelete = () => {
    writeGQL(deleteBrewerMutation, {
      brewer_id: parseInt(brewer_id),
    })
      .then(({ data }) => {
        const { deleteBrewer: deletedBrewerId } = data;
        if (deletedBrewerId) {
          // Write was successful, let user know, update state and return
          onBrewerDeletion(deletedBrewerId);
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
            subheaderTypographyProps={{ variant: 'caption' }}
            title={getTitle()}
            subheader={currentMethodName}
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
                <Typography variant="caption">{currentWebsite}</Typography>
              </Box>
            </Grid>
            <Grid item>
              {isUserAuthorized ? (
                <IconButton
                  aria-label="more"
                  onClick={handleEditBrewerClick}
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
        <EditBrewerData
          brewer={brewer}
          {...currentData}
          onSaveChangesSuccess={handleSaveChangesSuccess}
          onSaveChangesFail={handleSaveChangesFail}
        />
      )}
    </Box>
  );
}

BrewerRow.propTypes = {
  brewer: PropTypes.shape({
    brewer_id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    name: PropTypes.string,
    website: PropTypes.string,
    method: PropTypes.object,
    is_active: PropTypes.bool,
  }).isRequired,
  currentData: PropTypes.shape({
    methods: PropTypes.array.isRequired,
  }),
  onBrewerDeletion: PropTypes.func.isRequired,
  isUserAuthorized: PropTypes.bool.isRequired,
};

function BrewerData({ brewers, methods, onBrewerDeletion, isUserAuthorized }) {
  return (
    <Box pb={2}>
      <Grid container direction="column" alignItems="center">
        <Grid item xs={12}>
          <Box p={2}>
            <Typography variant="h6">Brewers</Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Grid container align="center" justify="center">
            {brewers.map((brewer) => (
              <Grid item xs={10} sm={3} lg={2} key={brewer.brewer_id}>
                <BrewerRow
                  brewer={brewer}
                  currentData={{ methods }}
                  onBrewerDeletion={onBrewerDeletion}
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

BrewerData.propTypes = {
  brewers: PropTypes.array.isRequired,
  methods: PropTypes.array.isRequired,
  onBrewerDeletion: PropTypes.func.isRequired,
  isUserAuthorized: PropTypes.bool,
};

BrewerData.defaultProps = {
  isUserAuthorized: false,
};

export default BrewerData;
