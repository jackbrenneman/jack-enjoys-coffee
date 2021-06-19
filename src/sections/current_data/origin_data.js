/**
 * Origin Data. Shows all origins stored in the DB
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
// Custom Components
import EditOriginData from './edit/origin/edit_origin_data.js';
// Queries and Fetching
import { deleteOriginMutation } from '../../graphql/mutations/origin_gql_mutations.js';
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
}));

function OriginRow({ origin, onOriginDeletion }) {
  const classes = useStyles();
  const { origin_id, name } = origin;

  // State to show the edit origin entry section
  const [openEdit, setOpenEdit] = useState(false);

  // State used for editing a origin.
  const [originName, setOriginName] = useState(name);

  const handleSaveChangesSuccess = (newName) => {
    setOriginName(newName);
  };

  const handleSaveChangesFail = () => {
    // TODO: show the user there was a failed save
    console.log('failed save -- origins');
  };

  const handleDeletionFail = () => {
    // TODO: show the user there was a failed delete
    console.log('failed delete -- origins');
  };

  const handleEditOriginClick = (e) => {
    setOpenEdit(!openEdit);
  };

  const handleDelete = () => {
    writeGQL(deleteOriginMutation, {
      origin_id: parseInt(origin_id),
    })
      .then(({ data }) => {
        const { deleteOrigin: deletedOriginId } = data;
        if (deletedOriginId) {
          // Write was successful, let user know, update state and return
          onOriginDeletion(deletedOriginId);
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
                <Typography variant="body2">{originName}</Typography>
              </Box>
            </Grid>
            <Grid item>
              <IconButton
                aria-label="more"
                onClick={handleEditOriginClick}
                size="small"
              >
                {openEdit ? <ExpandLessIcon /> : <EditTwoToneIcon />}
              </IconButton>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      {openEdit && (
        <EditOriginData
          origin={origin}
          onSaveChangesSuccess={handleSaveChangesSuccess}
          onSaveChangesFail={handleSaveChangesFail}
        />
      )}
    </Box>
  );
}

OriginRow.propTypes = {
  origin: PropTypes.shape({
    origin_id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    name: PropTypes.string,
  }).isRequired,
  onOriginDeletion: PropTypes.func.isRequired,
};

function OriginData({ origins, onOriginDeletion }) {
  return (
    <Box pb={2}>
      <Grid container direction="column" alignItems="center">
        <Grid item xs={12}>
          <Box p={2}>
            <Typography variant="h6">Origins</Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Grid container align="center" justify="center">
            {origins.map((origin) => (
              <Grid item xs={10} sm={3} lg={2} key={origin.origin_id}>
                <OriginRow
                  origin={origin}
                  onOriginDeletion={onOriginDeletion}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

OriginData.propTypes = {
  origins: PropTypes.array.isRequired,
  onOriginDeletion: PropTypes.func.isRequired,
};

export default OriginData;
