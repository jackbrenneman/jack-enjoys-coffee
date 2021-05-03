/**
 * Constants and such.
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

export const drinkEnum = 'DRINK';
export const grinderEnum = 'GRINDER';
export const roasterEnum = 'ROASTER';
export const coffeeEnum = 'COFFEE';
export const originEnum = 'ORIGIN';
export const brewerEnum = 'BREWER';
export const waterEnum = 'WATER';

export const currentCoffeeEntriesDefault = [];

export const currentDataDefault = {
  brewers: [],
  coffees: [],
  drinks: [],
  grinders: [],
  methods: [],
  origins: [],
  processes: [],
  roasters: [],
  waters: [],
};

export const dataEntryDefault = {
  currentData: currentDataDefault,
  dataOption: coffeeEnum,
  brewer: {
    name: '',
    website: '',
    method_id: 1,
  },
  coffee: {
    name: '',
    roaster_id: '',
    process_id: 1,
    origin_id: '',
  },
  drink: {
    name: '',
    method_id: 1,
  },
  grinder: {
    name: '',
    website: '',
  },
  origin: {
    name: '',
  },
  roaster: {
    name: '',
    city: '',
    state: '',
    country: '',
    website: '',
  },
  water: {
    name: '',
    description: '',
  },
};

// Used for the default time. Defaults to current day.
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
const defaultDate = `${year}-${month > 9 ? month : `0${month}`}-${day}`;

// Default state for a coffee entry
export const defaultCoffeeEntry = {
  date: defaultDate,
  coffee: {
    name: '',
    roaster: '',
    origin: '',
    process: 0,
  },
  brew: {
    method: 0,
    brewer: 0,
    drink: 0,
    grind: {
      grinder: '',
      setting: null,
    },
    water: '',
    coffee_in: null,
    out: null,
  },
  rating: 8,
  note: '',
};

// All the props for entering new data
export const newInputPropTypesShape = {
  currentData: PropTypes.object.isRequired,
  dataEntry: PropTypes.object.isRequired,
  setCurrentData: PropTypes.func.isRequired,
  setDataEntry: PropTypes.func.isRequired,
  setToast: PropTypes.func.isRequired,
};

// All the Coffee info for a coffee entry
const coffeePropTypesShape = {
  name: PropTypes.string,
  roaster: PropTypes.string,
  origin: PropTypes.string,
  process: PropTypes.number,
};

// All the Grind info for a coffee entry
const grindPropTypesShape = {
  grinder: PropTypes.string,
  setting: PropTypes.number,
};

// All the Brew Info for a coffee entry
const brewPropTypesShape = {
  method: PropTypes.number,
  brewer: PropTypes.number,
  drink: PropTypes.number,
  grind: PropTypes.shape(grindPropTypesShape),
  water: PropTypes.string,
  coffee_in: PropTypes.number,
  out: PropTypes.number,
};

export const coffeeEntryPropTypesShape = {
  coffeeEntry: PropTypes.shape({
    date: PropTypes.string,
    coffee: PropTypes.shape(coffeePropTypesShape),
    brew: PropTypes.shape(brewPropTypesShape),
    rating: PropTypes.number,
    note: PropTypes.string,
  }).isRequired,
  setCoffeeEntry: PropTypes.func.isRequired,
};
