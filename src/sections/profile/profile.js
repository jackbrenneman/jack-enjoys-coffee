/**
 * The Profile page for a user.
 */
import React from "react";
import PropTypes from "prop-types";
// React Router
import { NavLink } from "react-router-dom";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
// Custom Components
import Stats from "./stats/stats.js";
// Cookies
import Cookies from "universal-cookie";

function Profile({ user }) {
  const { user_name, user_id } = user;
  const useStyles = makeStyles((theme) => ({
    page: {
      backgroundColor: "#EEEEEE",
      minHeight: "100vh",
    },
    section: {
      maxWidth: "800px",
    },
  }));

  const handleLogoutClick = () => {
    const cookies = new Cookies();
    cookies.remove("user_token");
    cookies.remove("user");
    window.location.replace("/login");
    return;
  };

  const classes = useStyles();

  return (
    <Grid container align="center" justify="center" className={classes.page}>
      <Grid item xs={12}>
        <Box pt={4} pb={2}>
          <Typography variant="h2">Profile</Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">Hello {user_name}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="caption">User ID: {user_id}</Typography>
      </Grid>
      <Grid item xs={4}>
        <NavLink to={"/entries"}>
          <Typography variant="caption" align="center">
            Your Coffee Entries
          </Typography>
        </NavLink>
      </Grid>
      <Grid item xs={4}>
        <NavLink to={"/data"}>
          <Typography variant="caption" align="center">
            Your Coffee Data
          </Typography>
        </NavLink>
      </Grid>
      <Grid item xs={12}>
        <Box py={2}>
          <Button variant="contained" size="large" onClick={handleLogoutClick}>
            <Typography variant="body1" align="center">
              Logout
            </Typography>
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Divider variant="middle" />
      </Grid>
      <Grid item xs={12}>
        <Box pb={8}>
          <Stats user={user} />
        </Box>
      </Grid>
    </Grid>
  );
}

Profile.propTypes = {
  user: PropTypes.object,
};

Profile.defaultProps = {
  user: {},
};

export default Profile;
