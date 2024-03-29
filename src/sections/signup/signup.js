/**
 * The page to Sign a user up.
 */
import React, { useState } from "react";
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
import { signupMutation } from "../../graphql/mutations/signup_gql_mutations.js";
import { writeGQL } from "../../graphql/fetch.js";
// Cookies
import Cookies from "universal-cookie";

function Signup() {
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

  // State used for the username and password feels
  const [signup, setSignup] = useState({});

  // State used for the username and password feels
  const [confirmPassword, setConfirmPassword] = useState();

  // State used for showing password field
  const [showPassword, setShowPassword] = useState(false);

  // State used for showing confirm password field
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSignupFailure = () => {
    // TODO: surface to the user that login failed for some reason.
    console.log("failure :(");
    return;
  };

  const onSignupSuccess = (token, user_id, user_name) => {
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

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSignupClick = () => {
    const { user_name, email, password } = signup;
    if (!user_name) {
      console.log("No username inputted");
      return;
    }
    if (!email) {
      console.log("No email inputted");
      return;
    }
    if (!password) {
      console.log("No password inputted");
      return;
    }
    if (confirmPassword !== password) {
      console.log("Passwords do not match");
      return;
    }
    writeGQL(signupMutation, { signup: signup })
      .then(({ data }) => {
        const { signup } = data;
        const { user, token } = signup;
        if (user?.user_id) {
          // Signup was successful
          const { user_name, user_id } = user;
          onSignupSuccess(token, user_id, user_name);
          return;
        }
        // Signup was not successful, let user know and return
        onSignupFailure();
        setToast({
          open: true,
          severity: "error",
          message: "Something went wrong...please try again",
        });
      })
      .catch((e) => {
        onSignupFailure();
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
    setSignup({
      ...signup,
      user_name: e.target.value,
    });
  };

  const handleEmailChange = (e) => {
    setSignup({
      ...signup,
      email: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    setSignup({
      ...signup,
      password: e.target.value,
    });
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
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
          <Typography variant="h2">Signup</Typography>
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
              id="usernam"
              variant="outlined"
              onChange={handleUsernameChange}
            />
          </form>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box pt={2}>
          <Typography variant="body2" align="center">
            Email
          </Typography>
          <form autoComplete="off">
            <TextField
              className={classes.form}
              id="email"
              variant="outlined"
              onChange={handleEmailChange}
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
        <Box pt={2}>
          <Typography variant="body2" align="center">
            Confirm Password
          </Typography>
          <form autoComplete="off">
            <OutlinedInput
              type={showConfirmPassword ? "text" : "password"}
              className={classes.form}
              id="confirm-password"
              onChange={handleConfirmPasswordChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle confirm password visibility"
                    onClick={handleClickShowConfirmPassword}
                    size="small"
                  >
                    {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </form>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box pt={4} pb={8}>
          <Button variant="contained" size="large" onClick={handleSignupClick}>
            <Typography variant="body1" align="center">
              Signup
            </Typography>
          </Button>
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

export default Signup;
