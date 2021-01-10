import React from 'react';
import {NavLink} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {drawerPages} from '../consts.js';

function Footer() {

  const drawerPagesMinusHome = drawerPages.slice(1);

  const useStyles = makeStyles((theme) => ({
    navLink: {
      textDecoration: 'none',
      color: 'black'
    },
    activeNavLink: {
      color: 'brown'
    }
  }));
  const classes = useStyles();

  return (
    <Box p={4} >
      <Grid container align="center" >
      {drawerPagesMinusHome.map(({name, icon, path}) => (
        <Grid item xs={6} sm={3} key={name}>
          <Box p={2}>
            <NavLink className={classes.navLink} to={path} activeClassName={classes.activeNavLink}>
                <Box>
                  {icon}
                </Box>
                <Box>
                  {name}
                </Box>
            </NavLink>
          </Box>
        </Grid>
      ))}
    </Grid>
    </Box>
  )
};

export default Footer;
