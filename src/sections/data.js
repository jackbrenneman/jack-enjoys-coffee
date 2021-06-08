/**
 * All of the current coffee data for a user.
 */
import React from 'react';
import PropTypes from 'prop-types';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// React Router
import { Link } from 'react-router-dom';

function Data() {
  const useStyles = makeStyles((theme) => ({
    data: {
      backgroundColor: '#EEEEEE',
      minHeight: '100vh',
    },
    link: {
      textDecoration: 'none',
    },
  }));
  const classes = useStyles();

  return (
    <Box className={classes.data} p={4} justifyContent="center">
      <Grid container align="center">
        <Grid item xs={12}>
          <Link to={'/data/coffee_entry'} className={classes.link}>
            <Typography variant="body1" align="center">
              New Coffee Entry
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Link to={'/data/entry'} className={classes.link}>
            <Typography variant="body1" align="center">
              New Data Entry
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Link to={'/data/current'} className={classes.link}>
            <Typography variant="body1" align="center">
              Current Data
            </Typography>
          </Link>
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
