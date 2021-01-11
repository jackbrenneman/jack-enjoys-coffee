import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import logo from '../media/icons/coffee-icon.png';
import Box from '@material-ui/core/Box';
import Footer from '../nav/footer';

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
      <Box p={4} display="flex" justifyContent="center">
        <Typography variant="h2">jack-enjoys-coffee</Typography>
      </Box>
      <Box p={1} display="flex" justifyContent="center">
        <img src={logo} alt="Coffee Logo" />
      </Box>
      <Box p={4} display="flex" justifyContent="center">
        <Typography variant="body1" align="center">
          Welcome! This is a site for Jack and his love for coffee. I want to be
          able to track all the coffee I've tried and my drinking habits. I also
          wanted to create a simple website from start to finish. Eventually, I
          hope to make some visualizations on the data that I've been recording.
        </Typography>
      </Box>
      <Box p={4} display="flex" justifyContent="center">
        <Typography variant="body1" align="center">
          You can click the hamburger icon in the top left of this page in order
          to open the side drawer and navigate to other sections, or you can
          just click on one of the buttons below to look around. Thanks for
          checking out the site!
        </Typography>
      </Box>
      <Footer />
    </Box>
  );
}

export default Home;
