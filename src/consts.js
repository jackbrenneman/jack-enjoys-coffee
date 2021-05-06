/**
 * Constants and such.
 */
import React from 'react';
import PropTypes from 'prop-types';
import HomeIcon from '@material-ui/icons/Home';
import AssessmentIcon from '@material-ui/icons/Assessment';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';

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
];

// Used so we know what kind of data the user is trying to input
export const drinkEnum = 'DRINK';
export const grinderEnum = 'GRINDER';
export const roasterEnum = 'ROASTER';
export const coffeeEnum = 'COFFEE';
export const originEnum = 'ORIGIN';
export const brewerEnum = 'BREWER';
export const waterEnum = 'WATER';

// Only for when no rating has been inputted yet by the user
export const naRating = 'NA';

// Steep Time Constants
export const hoursEnum = 'HOURS';
export const minutesEnum = 'MINUTES';
export const secondsEnum = 'SECONDS';
export const defaultSteepTimeState = {
  [hoursEnum]: 0,
  [minutesEnum]: 0,
  [secondsEnum]: 0,
};

// Method Constants
export const espressoEnum = 'ESPRESSO';
export const pouroverEnum = 'POUROVER';
export const immersionEnum = 'IMMERSION';
export const methodIdToMethodEnum = {
  1: espressoEnum,
  2: pouroverEnum,
  3: immersionEnum,
};

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
const defaultDate = `${year}-${month > 9 ? month : `0${month}`}-${
  day > 9 ? day : `0${day}`
}`;

// Default state for a coffee entry
export const defaultCoffeeEntry = {
  // General Info
  date: defaultDate,
  // Coffee Info
  coffee_id: null,
  // Brew Info
  brew: {
    method_id: 1,
    brewer_id: null,
    drink_id: null,
    water_id: null,
    grinder_id: null,
    grinder_setting: null,
    coffee_in: null,
    liquid_out: null,
    water_in: null,
    steep_time: null,
  },
  // Notes and Rating
  notes: '',
  rating: null,
};

// All the props for entering new data
export const newInputPropTypesShape = {
  currentData: PropTypes.object.isRequired,
  dataEntry: PropTypes.object.isRequired,
  setCurrentData: PropTypes.func.isRequired,
  setDataEntry: PropTypes.func.isRequired,
  setToast: PropTypes.func.isRequired,
};

// All the Brew Info for a coffee entry
const brewPropTypesShape = {
  method_id: PropTypes.number,
  brewer_id: PropTypes.number,
  drink_id: PropTypes.number,
  water_id: PropTypes.number,
  grinder_id: PropTypes.number,
  grinder_setting: PropTypes.number,
  coffee_in: PropTypes.number,
  liquid_out: PropTypes.number,
  water_in: PropTypes.number,
  steep_time: PropTypes.number,
};

export const coffeeEntryPropTypesShape = {
  coffeeEntry: PropTypes.shape({
    date: PropTypes.string,
    coffee_id: PropTypes.number,
    brew: PropTypes.shape(brewPropTypesShape),
    notes: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
  setCoffeeEntry: PropTypes.func.isRequired,
};
