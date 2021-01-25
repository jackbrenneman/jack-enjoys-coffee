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

// TODO: eventually get this from the backend
export const originExamples = [
  {
    name: 'Ethiopia',
    value: 0,
  },
  {
    name: 'Yemen',
    value: 1,
  },
  {
    name: 'Brazil',
    value: 2,
  },
  {
    name: 'Costa Rica',
    value: 3,
  },
];

// TODO: eventually get this from the backend
export const roasterExamples = [
  {
    name: 'Little Wolf',
    value: 0,
  },
  {
    name: 'Tandem',
    value: 1,
  },
  {
    name: 'Abracadabra',
    value: 2,
  },
  {
    name: 'George Howell',
    value: 3,
  },
  {
    name: 'Square Mile',
    value: 4,
  },
];

// TODO: eventually get this from the backend
export const waterExamples = [
  {
    name: 'Boston Tap',
    value: 0,
  },
  {
    name: 'Vermont Tap',
    value: 1,
  },
  {
    name: 'Homemade',
    value: 2,
  },
];

// TODO: eventually get this from the backend
export const grinderExamples = [
  {
    name: 'Comandante Red Clix',
    value: 0,
  },
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
    value: 0,
  },
  {
    name: 'Pour Over',
    value: 1,
  },
  {
    name: 'Aeropress',
    value: 2,
  },
  {
    name: 'French Press',
    value: 3,
  },
  {
    name: 'Cold Brew',
    value: 4,
  },
];

const espressoBrewerOptions = [
  {
    name: 'Flair Pro 2',
    value: 0,
    method: 0,
  },
  {
    name: 'Flair Signature 2',
    value: 1,
    method: 0,
  },
  {
    name: 'Lelit Mara',
    value: 2,
    method: 0,
  },
];

const pourOverBrewerOptions = [
  {
    name: 'Stagg X',
    value: 0,
    method: 1,
  },
  {
    name: 'Stagg XF',
    value: 1,
    method: 1,
  },
  {
    name: 'Kalita Wave',
    value: 2,
    method: 1,
  },
  {
    name: 'V60',
    value: 3,
    method: 1,
  },
];

const aeroPressBrewerOptions = [
  {
    name: 'Normal',
    value: 0,
    method: 2,
  },
  {
    name: 'Inverted',
    value: 1,
    method: 2,
  },
  {
    name: 'Prismo',
    value: 2,
    method: 2,
  },
];

const frenchPressBrewerOptions = [
  {
    name: 'Espro P7',
    value: 0,
    method: 3,
  },
];

const coldBrewBrewerOptions = [
  {
    name: 'French Press',
    value: 0,
    method: 4,
  },
];

export const methodToBrewerMap = {
  0: espressoBrewerOptions,
  1: pourOverBrewerOptions,
  2: aeroPressBrewerOptions,
  3: frenchPressBrewerOptions,
  4: coldBrewBrewerOptions,
};

// TODO: eventually get this from the backend
const espressoDrinkOptions = [
  {
    name: 'Straight Espresso',
    value: 0,
    method: 0,
  },
  {
    name: 'Americano',
    value: 1,
    method: 0,
  },
  {
    name: 'Cortado',
    value: 2,
    method: 0,
  },
  {
    name: 'Flat White',
    value: 3,
    method: 0,
  },
  {
    name: 'Cappacino',
    value: 4,
    method: 0,
  },
  {
    name: 'Latte',
    value: 5,
    method: 0,
  },
  {
    name: 'Mocha',
    value: 6,
    method: 0,
  },
  {
    name: 'Iced Latte',
    value: 7,
    method: 0,
  },
];

const pourOverDrinkOptions = [
  {
    name: 'Normal',
    value: 0,
    method: 1,
  },
  {
    name: 'Japanese Iced Coffee',
    value: 1,
    method: 1,
  },
];

const aeroPressDrinkOptions = [
  {
    name: 'Normal',
    value: 0,
    method: 2,
  },
  {
    name: 'Dilution',
    value: 1,
    method: 2,
  },
];

const frenchPressDrinkOptions = [
  {
    name: 'Normal',
    value: 0,
    method: 3,
  },
];

const coldBrewDrinkOptions = [
  {
    name: 'Normal',
    value: 0,
    method: 4,
  },
  {
    name: 'Nitro',
    value: 0,
    method: 4,
  },
];

export const methodToDrinkMap = {
  0: espressoDrinkOptions,
  1: pourOverDrinkOptions,
  2: aeroPressDrinkOptions,
  3: frenchPressDrinkOptions,
  4: coldBrewDrinkOptions,
};

export const timeOfDayOptions = [
  {
    name: 'Morning',
    value: 0,
  },
  {
    name: 'Afternoon',
    value: 1,
  },
  {
    name: 'Night',
    value: 2,
  },
];

export const processOptions = [
  {
    name: 'Washed',
    value: 0,
  },
  {
    name: 'Natural',
    value: 1,
  },
  {
    name: 'Honey',
    value: 2,
  },
  {
    name: 'Other',
    value: 3,
  },
];

export const ratingOptions = [
  {
    name: 1,
    value: 0,
  },
  {
    name: 1.5,
    value: 1,
  },
  {
    name: 2,
    value: 2,
  },
  {
    name: 2.5,
    value: 3,
  },
  {
    name: 3,
    value: 4,
  },
  {
    name: 3.5,
    value: 5,
  },
  {
    name: 4,
    value: 6,
  },
  {
    name: 4.5,
    value: 7,
  },
  {
    name: 5,
    value: 8,
  },
  {
    name: 5.5,
    value: 9,
  },
  {
    name: 6,
    value: 10,
  },
  {
    name: 6.5,
    value: 11,
  },
  {
    name: 7,
    value: 12,
  },
  {
    name: 7.5,
    value: 13,
  },
  {
    name: 8,
    value: 14,
  },
  {
    name: 8.5,
    value: 15,
  },
  {
    name: 9,
    value: 16,
  },
  {
    name: 9.5,
    value: 17,
  },
  {
    name: 10,
    value: 18,
  },
];
