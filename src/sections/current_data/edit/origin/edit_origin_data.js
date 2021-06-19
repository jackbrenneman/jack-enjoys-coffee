/**
 * Edit Origin Data. Allows users to edit Origin Data
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
// Queries and Fetching
import { updateOriginMutation } from '../../../../graphql/mutations/origin_gql_mutations.js';
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

function EditOriginData({ origin, onSaveChangesSuccess, onSaveChangesFail }) {
  const classes = useStyles();

  const { origin_id, name: currentName } = origin;

  // State used for editing a coffee.
  const [originName, setOriginName] = useState(currentName);

  const handleSaveChanges = () => {
    writeGQL(updateOriginMutation, {
      name: originName,
      origin_id: parseInt(origin_id),
    })
      .then(({ data }) => {
        const { updateOrigin: updatedOrigin } = data;
        if (updatedOrigin.origin_id) {
          // Write was successful, let user know, update state and return
          onSaveChangesSuccess(originName);
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
    setOriginName(e.target.value);
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
                  value={originName}
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

EditOriginData.propTypes = {
  origin: PropTypes.shape({
    origin_id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    name: PropTypes.string,
  }).isRequired,
  onSaveChangesSuccess: PropTypes.func.isRequired,
  onSaveChangesFail: PropTypes.func.isRequired,
};

export default EditOriginData;
