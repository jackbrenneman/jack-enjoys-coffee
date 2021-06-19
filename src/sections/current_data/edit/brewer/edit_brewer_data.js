/**
 * Edit Brewer Data. Allows users to edit Brewer Data
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
import MenuItem from '@material-ui/core/MenuItem';
// Queries and Fetching
import { updateBrewerMutation } from '../../../../graphql/mutations/brewer_gql_mutations.js';
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

function EditBrewerData({
  brewer,
  onSaveChangesSuccess,
  onSaveChangesFail,
  methods,
}) {
  const classes = useStyles();

  const {
    brewer_id,
    name: currentName,
    website: currentWebsite,
    method: currentMethod,
    is_active: currentActiveStatus,
  } = brewer;

  // State used for editing a coffee.
  const [brewerData, setBrewerData] = useState({
    name: currentName,
    method: currentMethod,
    website: currentWebsite,
    is_active: currentActiveStatus,
  });

  const { name, website, method, is_active } = brewerData;
  const { method_id } = method;

  const getMethodFromMethodId = (methodId) => {
    return methods.find((method) => method.method_id === methodId);
  };

  const handleChangeActiveStatus = (e) => {
    setBrewerData({
      ...brewerData,
      is_active: !is_active,
    });
  };

  const handleSaveChanges = () => {
    const brewerInput = {
      name: name,
      website: website,
      method_id: parseInt(method_id),
      is_active: is_active,
    };
    writeGQL(updateBrewerMutation, {
      brewer: brewerInput,
      brewer_id: parseInt(brewer_id),
    })
      .then(({ data }) => {
        const { updateBrewer: updatedBrewer } = data;
        if (updatedBrewer.brewer_id) {
          // Write was successful, let user know, update state and return
          onSaveChangesSuccess(brewerData);
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
    setBrewerData({
      ...brewerData,
      name: e.target.value,
    });
  };

  const handleWebsiteChange = (e) => {
    setBrewerData({
      ...brewerData,
      website: e.target.value,
    });
  };

  const handleMethodChange = (e) => {
    setBrewerData({
      ...brewerData,
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
                Website
              </Typography>
              <form autoComplete="off">
                <TextField
                  className={classes.form}
                  value={website}
                  id="website"
                  variant="outlined"
                  size="small"
                  onChange={handleWebsiteChange}
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

EditBrewerData.propTypes = {
  brewer: PropTypes.shape({
    brewer_id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    name: PropTypes.string,
    website: PropTypes.string,
    is_active: PropTypes.bool,
  }).isRequired,
  methods: PropTypes.array.isRequired,
  onSaveChangesSuccess: PropTypes.func.isRequired,
  onSaveChangesFail: PropTypes.func.isRequired,
};

export default EditBrewerData;
