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

// Used for the default time. Defaults to current day
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
const defaultTime = `${year}-${month > 9 ? month : `0${month}`}-${day}`;

export const defaultCoffeeEntry = {
  date: defaultTime,
  timeOfDay: 1,
  roaster: '',
  origin: '',
  process: 1,
  method: 1,
  grinder: '',
  water: '',
  in: null,
  out: null,
  rating: null,
  notes: '',
};

export const coffeeEntryPropTypesShape = {
  coffeeEntry: PropTypes.shape({
    date: PropTypes.string,
    timeOfDay: PropTypes.number,
    roaster: PropTypes.string,
    origin: PropTypes.string,
    process: PropTypes.number,
    method: PropTypes.number,
    drinkType: PropTypes.number,
    grinder: PropTypes.string,
    water: PropTypes.string,
    in: PropTypes.number,
    out: PropTypes.number,
    rating: PropTypes.number,
    notes: PropTypes.string,
  }).isRequired,
  setCoffeeEntry: PropTypes.func.isRequired,
};

// TODO: eventually get this from the backend
export const originExamples = [
  {
    name: 'Ethiopia',
    value: 1,
  },
  {
    name: 'Yemen',
    value: 2,
  },
  {
    name: 'Brazil',
    value: 3,
  },
  {
    name: 'Costa Rica',
    value: 4,
  },
];

// TODO: eventually get this from the backend
export const roasterExamples = [
  {
    name: 'Little Wolf',
    value: 1,
  },
  {
    name: 'Tandem',
    value: 2,
  },
  {
    name: 'Abracadabra',
    value: 3,
  },
  {
    name: 'George Howell',
    value: 4,
  },
  {
    name: 'Square Mile',
    value: 5,
  },
];

// TODO: eventually get this from the backend
export const waterExamples = [
  {
    name: 'Boston Tap',
    value: 1,
  },
  {
    name: 'Vermont Tap',
    value: 2,
  },
  {
    name: 'Homemade',
    value: 3,
  },
];

// TODO: eventually get this from the backend
export const grinderExamples = [
  {
    name: 'Comandante',
    value: 1,
  },
  {
    name: 'Niche',
    value: 2,
  },
  {
    name: 'Pre-ground',
    value: 3,
  },
];

// TODO: eventually get this from the backend
export const methodOptions = [
  {
    name: 'Espresso',
    value: 1,
  },
  {
    name: 'Pour Over',
    value: 2,
  },
  {
    name: 'Aeropress',
    value: 3,
  },
  {
    name: 'French Press',
    value: 4,
  },
  {
    name: 'Cold Brew',
    value: 5,
  },
];

// TODO: eventually get this from the backend
const espressoDrinkOptions = [
  {
    name: 'Straight Espresso',
    value: 1,
    method: 1,
  },
  {
    name: 'Americano',
    value: 2,
    method: 1,
  },
  {
    name: 'Cortado',
    value: 3,
    method: 1,
  },
  {
    name: 'Flat White',
    value: 4,
    method: 1,
  },
  {
    name: 'Cappacino',
    value: 5,
    method: 1,
  },
  {
    name: 'Latte',
    value: 6,
    method: 1,
  },
  {
    name: 'Mocha',
    value: 7,
    method: 1,
  },
  {
    name: 'Iced Latte',
    value: 8,
    method: 1,
  },
];

export const pourOverDrinkOptions = [
  {
    name: 'Normal',
    value: 1,
    method: 2,
  },
  {
    name: 'Japanese Iced Coffee',
    value: 2,
    method: 2,
  },
];

const aeroPressDrinkOptions = [
  {
    name: 'Normal',
    value: 1,
    method: 3,
  },
  {
    name: 'Dilution',
    value: 2,
    method: 3,
  },
];

const frenchPressDrinkOptions = [
  {
    name: 'Normal',
    value: 1,
    method: 4,
  },
];

const coldBrewDrinkOptions = [
  {
    name: 'Normal',
    value: 1,
    method: 5,
  },
  {
    name: 'Nitro',
    value: 1,
    method: 5,
  },
];

const methodToDrinkMap = {
  1: espressoDrinkOptions,
  2: pourOverDrinkOptions,
  3: aeroPressDrinkOptions,
  4: frenchPressDrinkOptions,
  5: coldBrewDrinkOptions,
};

/**
 * Gets the correct drink types based on the method selected
 */
export const getDrinkOptions = (methodValue) => {
  return methodToDrinkMap[methodValue];
};

export const timeOfDayOptions = [
  {
    name: 'Morning',
    value: 1,
  },
  {
    name: 'Afternoon',
    value: 2,
  },
  {
    name: 'Night',
    value: 3,
  },
];

export const processOptions = [
  {
    name: 'Washed',
    value: 1,
  },
  {
    name: 'Natural',
    value: 2,
  },
  {
    name: 'Honey',
    value: 3,
  },
  {
    name: 'Other',
    value: 4,
  },
];
