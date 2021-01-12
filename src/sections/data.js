import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import logo from '../media/icons/coffee-icon.png';
import { NavLink } from 'react-router-dom';
import Box from '@material-ui/core/Box';

function Data() {
  const useStyles = makeStyles((theme) => ({
    data: {
      backgroundColor: '#EEEEEE',
      minHeight: '100vh',
    },
  }));
  const classes = useStyles();

  return (
    <Box className={classes.data} p={4} display="flex" justifyContent="center">
      <Grid container align="center">
        <Grid item xs={12}>
          <Box p={4}>
            <Typography variant="body1" align="center">
              Click on the button below to input a Coffee Journal Entry!
            </Typography>
            <Box p={2}>
              <NavLink
                className={classes.navLink}
                to={'/input'}
                activeClassName={classes.activeNavLink}
              >
                <Box p={1}>
                  <img src={logo} alt="Coffee Logo" />
                </Box>
              </NavLink>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box p={4}>
            <Typography variant="body1" align="center">
              Here is where your data will be when you put in some journal
              entries!
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

Data.propTypes = {
  user: PropTypes.string.isRequired,
  entries: PropTypes.array.isRequired,
};

Data.defaultProps = {
  user: '',
  entries: [],
};

export default Data;
