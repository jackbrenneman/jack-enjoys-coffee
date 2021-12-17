/**
 * The page to Login a user.
 */
import React, { useState } from "react";
import PropTypes from "prop-types";
// React Router
import { NavLink } from "react-router-dom";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import TextField from "@material-ui/core/TextField";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
// Queries and Fetching
import { signinMutation } from "../../graphql/mutations/signin_gql_mutations.js";
import { writeGQL } from "../../graphql/fetch.js";
// Cookies
import Cookies from "universal-cookie";

function Login() {
  const useStyles = makeStyles((theme) => ({
    page: {
      backgroundColor: "#EEEEEE",
      minHeight: "100vh",
    },
    form: {
      width: "225px",
    },
    section: {
      maxWidth: "800px",
    },
  }));

  // State used for the username and password fields
  const [signin, setSignin] = useState({});

  // State used for the username and password fields
  const [showPassword, setShowPassword] = useState(false);

  const onLoginFailure = () => {
    // TODO: surface to the user that login failed for some reason.
    console.log("failure :(");
    return;
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onLoginSuccess = (token, user_id, user_name) => {
    const cookies = new Cookies();
    cookies.set("user_token", token, {
      path: "/",
      expires: new Date(Date.now() + 3600000),
    });
    cookies.set(
      "user",
      { user_id: user_id, user_name: user_name },
      { path: "/", expires: new Date(Date.now() + 3600000) }
    );
    window.location.replace("/profile");
    return;
  };

  const handleLoginClick = () => {
    // TODO: Login the user.
    writeGQL(signinMutation, { signin: signin })
      .then(({ data }) => {
        const { signin } = data;
        const { user, token } = signin;
        if (user.user_id) {
          // Login was successful
          const { user_name, user_id } = user;
          onLoginSuccess(token, user_id, user_name);
          return;
        }
        // Login was not successful, let user know and return
        onLoginFailure();
        setToast({
          open: true,
          severity: "error",
          message: "Something went wrong...please try again",
        });
      })
      .catch((e) => {
        onLoginFailure();
        setToast({
          open: true,
          severity: "error",
          message: "Something went wrong...please try again",
        });
        console.log(e);
      });
    return;
  };

  const classes = useStyles();

  const handleUsernameChange = (e) => {
    setSignin({
      ...signin,
      user_name: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    setSignin({
      ...signin,
      password: e.target.value,
    });
  };

  // State used for popping toast message for when write is successful or not
  const [toast, setToast] = useState({
    open: false,
    severity: "success",
    message: "",
  });

  const handleToastClose = () => {
    setToast({
      ...toast,
      open: false,
    });
  };

  const { open, severity, message } = toast;

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={classes.page}
    >
      <Grid item xs={12}>
        <Box py={2}>
          <Typography variant="h2">Login</Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box pt={2}>
          <Typography variant="body2" align="center">
            Username
          </Typography>
          <form autoComplete="off">
            <TextField
              className={classes.form}
              id="outlined-basic"
              variant="outlined"
              onChange={handleUsernameChange}
            />
          </form>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box pt={2}>
          <Typography variant="body2" align="center">
            Password
          </Typography>
          <form autoComplete="off">
            <OutlinedInput
              type={showPassword ? "text" : "password"}
              className={classes.form}
              id="password"
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleLoginClick();
                }
              }}
              onChange={handlePasswordChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    size="small"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </form>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box pt={4} pb={8}>
          <Button
            type="submit"
            variant="contained"
            size="large"
            onClick={handleLoginClick}
          >
            <Typography variant="body1" align="center">
              Login
            </Typography>
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box>
          <Typography variant="caption" align="center">
            Don't have an account?
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box>
          <NavLink to={"/signup"}>
            <Typography variant="caption" align="center">
              Sign Up Here
            </Typography>
          </NavLink>
        </Box>
      </Grid>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleToastClose}>
        <Alert onClose={handleToastClose} severity={severity}>
          <Typography variant="body1">{message}</Typography>
        </Alert>
      </Snackbar>
    </Grid>
  );
}

Login.propTypes = {
  user: PropTypes.object,
};

Login.defaultProps = {
  user: {},
};

export default Login;
