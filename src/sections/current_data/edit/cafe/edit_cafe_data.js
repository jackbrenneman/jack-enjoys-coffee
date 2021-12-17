/**
 * Edit Cafe Data. Allows users to edit Cafe Data
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
import { updateCafeMutation } from "../../../../graphql/mutations/cafe_gql_mutations.js";
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

function EditCafeData({ cafe, onSaveChangesSuccess, onSaveChangesFail }) {
  const classes = useStyles();

  const {
    cafe_id,
    name: currentName,
    city: currentCity,
    state: currentState,
    country: currentCountry,
    website: currentWebsite,
    is_active: currentActiveStatus,
  } = cafe;

  // State used for editing a cafe.
  const [cafeData, setCafeData] = useState({
    name: currentName,
    city: currentCity,
    state: currentState,
    country: currentCountry,
    website: currentWebsite,
    is_active: currentActiveStatus,
  });

  const { name, city, state, country, website, is_active } = cafeData;

  const handleChangeActiveStatus = (e) => {
    setCafeData({
      ...cafeData,
      is_active: !is_active,
    });
  };

  const handleSaveChanges = () => {
    const cafeInput = {
      name: name,
      city: city,
      state: state,
      country: country,
      website: website,
      is_active: is_active,
    };
    writeGQL(updateCafeMutation, {
      cafe: cafeInput,
      cafe_id: parseInt(cafe_id),
    })
      .then(({ data }) => {
        const { updateCafe: updatedCafe } = data;
        if (updatedCafe.cafe_id) {
          // Write was successful, let user know, update state and return
          onSaveChangesSuccess(cafeData);
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
    setCafeData({
      ...cafeData,
      name: e.target.value,
    });
  };

  const handleCityChange = (e) => {
    setCafeData({
      ...cafeData,
      city: e.target.value,
    });
  };

  const handleStateChange = (e) => {
    setCafeData({
      ...cafeData,
      state: e.target.value,
    });
  };

  const handleCountryChange = (e) => {
    setCafeData({
      ...cafeData,
      country: e.target.value,
    });
  };

  const handleWebsiteChange = (e) => {
    setCafeData({
      ...cafeData,
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
                City
              </Typography>
              <form autoComplete="off">
                <TextField
                  className={classes.form}
                  value={city}
                  id="city"
                  variant="outlined"
                  size="small"
                  onChange={handleCityChange}
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
                State
              </Typography>
              <form autoComplete="off">
                <TextField
                  className={classes.form}
                  value={state}
                  id="state"
                  variant="outlined"
                  size="small"
                  onChange={handleStateChange}
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
                Country
              </Typography>
              <form autoComplete="off">
                <TextField
                  className={classes.form}
                  value={country}
                  id="country"
                  variant="outlined"
                  size="small"
                  onChange={handleCountryChange}
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

EditCafeData.propTypes = {
  cafe: PropTypes.shape({
    cafe_id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    name: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    country: PropTypes.string,
    website: PropTypes.string,
  }).isRequired,
  onSaveChangesSuccess: PropTypes.func.isRequired,
  onSaveChangesFail: PropTypes.func.isRequired,
};

export default EditCafeData;
