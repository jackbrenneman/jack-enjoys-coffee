/**
 * Home page.
 */
import React from "react";
import { Link } from "react-router-dom";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Divider } from "@material-ui/core";
// Custom Components
import logo from "../media/icons/coffee-icon.png";

function Home() {
  const useStyles = makeStyles((theme) => ({
    home: {
      backgroundColor: "#EEEEEE",
      minHeight: "100vh",
    },
    navLink: {
      textDecoration: "none",
    },
    divider: {
      maxWidth: "200px",
    },
  }));
  const classes = useStyles();

  const getRatingDefinition = (rating) => {
    switch (rating) {
      case 1:
        return (
          <Typography variant="subtitle1">
            {rating}: Actively Harmful
          </Typography>
        );
      case 2:
        return (
          <Typography variant="subtitle1">{rating}: Horrendous</Typography>
        );
      case 3:
        return <Typography variant="subtitle1">{rating}: Bad</Typography>;
      case 4:
        return <Typography variant="subtitle1">{rating}: Meh</Typography>;
      case 5:
        return <Typography variant="subtitle1">{rating}: Good</Typography>;
      case 6:
        return <Typography variant="subtitle1">{rating}: Very Good</Typography>;
      case 7:
        return <Typography variant="subtitle1">{rating}: Great</Typography>;
      case 8:
        return (
          <Typography variant="subtitle1">
            {rating}: Absolutely Amazing
          </Typography>
        );
      case 9:
        return (
          <Typography variant="subtitle1">
            {rating}: Between 8 and 10
          </Typography>
        );
      case 10:
        return (
          <Typography variant="subtitle1">
            {rating}: Life Changing Experience
          </Typography>
        );
      default:
        return null;
    }
  };

  const ratingScale = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Box className={classes.home} p={4}>
      <Box p={2} display="flex" justifyContent="center">
        <Typography variant="h2">jack-enjoys-coffee</Typography>
      </Box>
      <Box p={1} display="flex" justifyContent="center">
        <img src={logo} alt="Coffee Logo" />
      </Box>
      <Box py={2} px={1} display="flex" justifyContent="center">
        <Typography variant="body1" align="center">
          Welcome! This is a site for me (Jack) and my love for coffee. I wanted
          to create a way for me to be able to easily track my coffee drinking
          habits and see what different coffees I've had. I have also always
          wanted to create a website from start to finish, so I figured this was
          a great way to just combine those two goals into one thing.
          Eventually, I hope to make some visualizations on the data that I've
          been recording.
        </Typography>
      </Box>
      <Box py={2} px={1} display="flex" justifyContent="center">
        <Typography variant="body1" align="center">
          You can click the hamburger icon in the top left of this page in order
          to navigate to other sections. You are always allowed to view Jack's
          coffee data, but if you want to start tracking your own data, you can
          create a new account just for own stuff by clicking on the person logo
          in the top right. I'm new to this stuff so I'm not promising your data
          won't be compromised...but it's just coffee stuff in the end so I
          don't think it really matters.
        </Typography>
      </Box>
      <Box py={2} px={1} display="flex" justifyContent="center">
        <Typography variant="body1" align="center">
          Something that might be a little strange to others looking at my
          ratings is how low they might be. My rating scale is definetely
          different, so I wanted to get down in writing what the rating numbers
          mean to me, so that others might hopefully get a better understanding
          (and so people know I don't think I'm drinking bad coffee most days).
        </Typography>
      </Box>
      <Grid container align="center" justify="center" direction="row">
        <Grid item xs={8}>
          <Divider />
        </Grid>
        {ratingScale.map((rating) => (
          <Grid item xs={8} key={rating}>
            <Box px={1} display="flex" justifyContent="left">
              {getRatingDefinition(rating)}
            </Box>
            <Box>
              <Divider />
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box py={2} px={1} display="flex" justifyContent="center">
        <Typography variant="body1" align="center">
          Thanks for checking out the site!{" "}
          <Link
            to={{
              pathname: "https://github.com/jackbrenneman/jack-enjoys-coffee",
            }}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.navLink}
          >
            Here's
          </Link>{" "}
          the Github page for it if you're into looking at that.
        </Typography>
      </Box>
    </Box>
  );
}

export default Home;
