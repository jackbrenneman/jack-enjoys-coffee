/**
 * Edit Grinder Data. Allows users to edit Grinder Data
 */
import React, { useState } from "react";
import PropTypes from "prop-types";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
// Queries and Fetching
import { updateGrinderMutation } from "../../../../graphql/mutations/grinder_gql_mutations.js";
import { writeGQL } from "../../../../graphql/fetch.js";

const useStyles = makeStyles(() => ({
  form: {
    width: "200px",
  },
  card: {
    padding: "0",
  },
  header: {
    padding: "0",
    paddingTop: "10px",
  },
  content: {
    padding: "0",
    "&:last-child": {
      padding: 0,
    },
  },
  resize: {
    fontSize: 12,
    textAlign: "center",
  },
}));

function EditGrinderData({ grinder, onSaveChangesSuccess, onSaveChangesFail }) {
  const classes = useStyles();

  const {
    grinder_id,
    name: currentName,
    website: currentWebsite,
    is_active: currentActiveStatus,
  } = grinder;

  // State used for editing a coffee.
  const [grinderData, setGrinderData] = useState({
    name: currentName,
    website: currentWebsite,
    is_active: currentActiveStatus,
  });

  const { name, website, is_active } = grinderData;

  const handleChangeActiveStatus = (e) => {
    setGrinderData({
      ...grinderData,
      is_active: !is_active,
    });
  };

  const handleSaveChanges = () => {
    const grinderInput = {
      name: name,
      website: website,
      is_active: is_active,
    };
    writeGQL(updateGrinderMutation, {
      grinder: grinderInput,
      grinder_id: parseInt(grinder_id),
    })
      .then(({ data }) => {
        const { updateGrinder: updatedGrinder } = data;
        if (updatedGrinder.grinder_id) {
          // Write was successful, let user know, update state and return
          onSaveChangesSuccess(grinderData);
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
    setGrinderData({
      ...grinderData,
      name: e.target.value,
    });
  };

  const handleWebsiteChange = (e) => {
    setGrinderData({
      ...grinderData,
      website: e.target.value,
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

EditGrinderData.propTypes = {
  grinder: PropTypes.shape({
    grinder_id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    name: PropTypes.string,
    website: PropTypes.string,
    is_active: PropTypes.bool,
  }).isRequired,
  onSaveChangesSuccess: PropTypes.func.isRequired,
  onSaveChangesFail: PropTypes.func.isRequired,
};

export default EditGrinderData;
