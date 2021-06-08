/**
 * Home page.
 */
import React from 'react';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// Custom Components
import logo from '../media/icons/coffee-icon.png';

function Home() {
  const useStyles = makeStyles((theme) => ({
    home: {
      backgroundColor: '#EEEEEE',
      minHeight: '100vh',
    },
  }));
  const classes = useStyles();

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
          to open the side drawer and navigate to other sections. Thanks for
          checking out the site!
        </Typography>
      </Box>
    </Box>
  );
}

export default Home;
