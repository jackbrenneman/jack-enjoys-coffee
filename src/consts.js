/**
 * Constants and such
 *
 * @author Jack Brenneman
 */
import React from 'react';
import PropTypes from 'prop-types';
import HomeIcon from '@material-ui/icons/Home';
import AssessmentIcon from '@material-ui/icons/Assessment';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import BuildIcon from '@material-ui/icons/Build';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

export const drawerPages = [
  {
    name: 'Home',
    icon: <HomeIcon />,
    path: '/home',
  },
  {
    name: 'Data',
    icon: <AssessmentIcon />,
    path: '/data',
  },
  {
    name: 'Coffee',
    icon: <LocalCafeIcon />,
    path: '/coffee',
  },
  {
    name: 'Equipment',
    icon: <BuildIcon />,
    path: '/equipment',
  },
  {
    name: 'Blog',
    icon: <LibraryBooksIcon />,
    path: '/blog',
  },
];

// Used for the default time. Defaults to current day.
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
const defaultTime = `${year}-${month > 9 ? month : `0${month}`}-${day}`;

export const defaultCoffeeEntry = {
  date: defaultTime,
  timeOfDay: 0,
  roaster: '',
  origin: '',
  process: 0,
  method: 0,
  brewer: 0,
  drinkType: 0,
  grinder: '',
  grindSetting: null,
  water: '',
  in: null,
  out: null,
  rating: 8,
  note: '',
};

export const coffeeEntryPropTypesShape = {
  coffeeEntry: PropTypes.shape({
    date: PropTypes.string,
    timeOfDay: PropTypes.number,
    roaster: PropTypes.string,
    origin: PropTypes.string,
    process: PropTypes.number,
    method: PropTypes.number,
    brewer: PropTypes.number,
    drinkType: PropTypes.number,
    grinder: PropTypes.string,
    grindSetting: PropTypes.number,
    water: PropTypes.string,
    in: PropTypes.number,
    out: PropTypes.number,
    rating: PropTypes.number,
    note: PropTypes.string,
  }).isRequired,
  setCoffeeEntry: PropTypes.func.isRequired,
};
