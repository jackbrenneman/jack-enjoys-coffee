/**
 * The top navigation bar.
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// React Router
import { NavLink } from 'react-router-dom';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import PersonOutlineTwoToneIcon from '@material-ui/icons/PersonOutlineTwoTone';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import CreateTwoToneIcon from '@material-ui/icons/CreateTwoTone';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
// Custom Components
import logo from '../media/icons/coffee-icon.png';

function TopNav({ user }) {
  const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    root: {
      background: 'grey',
    },
    menuButton: {
      color: 'white',
      marginRight: '5%',
    },
    title: {
      color: 'white',
    },
    navLink: {
      textDecoration: 'none',
      color: 'black',
    },
    activeNavLink: {
      color: 'brown',
    },
  }));
  const classes = useStyles();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const container =
    window !== undefined ? () => window.document.body : undefined;

  const getLoggedInDrawerLinks = () => {
    return (
      <>
        <NavLink
          className={classes.navLink}
          to={'/entries'}
          onClick={handleDrawerToggle}
          activeClassName={classes.activeNavLink}
        >
          <Box pr={2}>
            <ListItem button>
              <ListItemIcon>
                <LocalCafeIcon />
              </ListItemIcon>
              <ListItemText
                primary={<Typography variant="caption">My Entries</Typography>}
              />
            </ListItem>
          </Box>
        </NavLink>
        <NavLink
          className={classes.navLink}
          to={'/data'}
          onClick={handleDrawerToggle}
          activeClassName={classes.activeNavLink}
        >
          <Box pr={2}>
            <ListItem button>
              <ListItemIcon>
                <LocalCafeIcon />
              </ListItemIcon>
              <ListItemText
                primary={<Typography variant="caption">My Data</Typography>}
              />
            </ListItem>
          </Box>
        </NavLink>
        <Divider />
        <NavLink
          className={classes.navLink}
          to={'/new_entry'}
          onClick={handleDrawerToggle}
          activeClassName={classes.activeNavLink}
        >
          <Box pr={2}>
            <ListItem button>
              <ListItemIcon>
                <CreateTwoToneIcon />
              </ListItemIcon>
              <ListItemText
                primary={<Typography variant="caption">New Entry</Typography>}
              />
            </ListItem>
          </Box>
        </NavLink>
        <NavLink
          className={classes.navLink}
          to={'/new_data'}
          onClick={handleDrawerToggle}
          activeClassName={classes.activeNavLink}
        >
          <Box pr={2}>
            <ListItem button>
              <ListItemIcon>
                <CreateTwoToneIcon />
              </ListItemIcon>
              <ListItemText
                primary={<Typography variant="caption">Add Data</Typography>}
              />
            </ListItem>
          </Box>
        </NavLink>
        <Divider />
        <NavLink
          className={classes.navLink}
          to={'/entries?jacks_entries=1'}
          onClick={handleDrawerToggle}
          activeClassName={classes.activeNavLink}
        >
          <Box pr={2}>
            <ListItem button>
              <ListItemIcon>
                <LocalCafeIcon />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="caption">Jack's Entries</Typography>
                }
              />
            </ListItem>
          </Box>
        </NavLink>
        <NavLink
          className={classes.navLink}
          to={'/data?jacks_data=1'}
          onClick={handleDrawerToggle}
          activeClassName={classes.activeNavLink}
        >
          <Box pr={2}>
            <ListItem button>
              <ListItemIcon>
                <LocalCafeIcon />
              </ListItemIcon>
              <ListItemText
                primary={<Typography variant="caption">Jack's Data</Typography>}
              />
            </ListItem>
          </Box>
        </NavLink>
      </>
    );
  };

  const getLoggedOutDrawerLinks = () => {
    return (
      <>
        <Divider />
        <NavLink
          className={classes.navLink}
          to={'/entries?jacks_entries=1'}
          onClick={handleDrawerToggle}
          activeClassName={classes.activeNavLink}
        >
          <Box pr={2}>
            <ListItem button>
              <ListItemIcon>
                <LocalCafeIcon />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="caption">Jack's Entries</Typography>
                }
              />
            </ListItem>
          </Box>
        </NavLink>
        <NavLink
          className={classes.navLink}
          to={'/data?jacks_data=1'}
          onClick={handleDrawerToggle}
          activeClassName={classes.activeNavLink}
        >
          <Box pr={2}>
            <ListItem button>
              <ListItemIcon>
                <LocalCafeIcon />
              </ListItemIcon>
              <ListItemText
                primary={<Typography variant="caption">Jack's Data</Typography>}
              />
            </ListItem>
          </Box>
        </NavLink>
      </>
    );
  };

  return (
    <Box>
      <AppBar className={classes.root} position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            disableRipple
            edge="start"
            color="inherit"
            aria-label="menu"
            size="small"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            jack-enjoys-coffee
          </Typography>
          <Box p={1} display="flex" justifyContent="center">
            <NavLink className={classes.navLink} to="/home">
              <img src={logo} alt="Coffee Logo" width="30px" height="30px" />
            </NavLink>
          </Box>
          <div className={classes.grow} />
          <Box p={1} display="flex" justifyContent="center">
            <NavLink
              className={classes.navLink}
              to={user?.user_id ? '/profile' : '/login'}
            >
              <PersonOutlineTwoToneIcon />
            </NavLink>
          </Box>
        </Toolbar>
      </AppBar>
      <nav className="Drawer" aria-label="side drawer">
        <Drawer
          container={container}
          variant="temporary"
          anchor="left"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <List>
            <NavLink
              className={classes.navLink}
              to={'/home'}
              onClick={handleDrawerToggle}
              activeClassName={classes.activeNavLink}
            >
              <Box pr={2}>
                <ListItem button>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={<Typography variant="caption">Home</Typography>}
                  />
                </ListItem>
              </Box>
            </NavLink>
            <Divider />
            {user?.user_id
              ? getLoggedInDrawerLinks()
              : getLoggedOutDrawerLinks()}
          </List>
        </Drawer>
      </nav>
    </Box>
  );
}

TopNav.propTypes = {
  user: PropTypes.object,
};

TopNav.defaultProps = {
  user: {},
};

export default TopNav;
