/**
 * Constants and such.
 */
import PropTypes from 'prop-types';

// Valid paths
export const homePath = '/home';
export const entriesPath = '/entries';
export const loginPath = '/login';
export const profilePath = '/profile';
export const signupPath = '/signup';
export const newDataPath = '/new_data';
export const newEntryPath = '/new_entry';

// Used so we know what kind of data the user is trying to input
export const drinkEnum = 'DRINK';
export const cafeEnum = 'CAFE';
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
export const espressoId = 1;
export const pouroverId = 2;
export const immersionId = 3;
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
  cafes: [],
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
  cafe: {
    name: '',
    city: '',
    state: '',
    country: '',
    website: '',
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

export const ratingsInputData = [
  {
    name: 1,
    value: 1,
  },
  {
    name: 1.5,
    value: 1.5,
  },
  {
    name: 2,
    value: 2,
  },
  {
    name: 2.5,
    value: 2.5,
  },
  {
    name: 3,
    value: 3,
  },
  {
    name: 3.5,
    value: 3.5,
  },
  {
    name: 4,
    value: 4,
  },
  {
    name: 4.5,
    value: 4.5,
  },
  {
    name: 5,
    value: 5,
  },
  {
    name: 5.5,
    value: 5.5,
  },
  {
    name: 6,
    value: 6,
  },
  {
    name: 6.5,
    value: 6.5,
  },
  {
    name: 7,
    value: 7,
  },
  {
    name: 7.5,
    value: 7.5,
  },
  {
    name: 8,
    value: 8,
  },
  {
    name: 8.5,
    value: 8.5,
  },
  {
    name: 9,
    value: 9,
  },
  {
    name: 9.5,
    value: 9.5,
  },
  {
    name: 10,
    value: 10,
  },
];

const getDateString = (daysAgo = 0) => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month > 9 ? month : `0${month}`}-${
    day > 9 ? day : `0${day}`
  }`;
};

// Used for the default time. Defaults to current day.
export const today = getDateString();
// Last week
export const sevenDaysAgo = getDateString(7);
// Yesterday
export const yesterday = getDateString(1);

// Default state for a coffee entry
export const defaultCoffeeEntry = {
  // General Info
  date: today,
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

// Default state for the most recent coffee entry
export const defaultMostRecentCoffeeEntry = {
  coffee_name: null,
  method_name: null,
  brewer_name: null,
  drink_name: null,
  water_name: null,
  grinder_name: null,
  grinder_setting: null,
  coffee_in: null,
  liquid_out: null,
  water_in: null,
  steep_time: null,
};

// All the props for entering new data
export const newInputPropTypesShape = {
  currentData: PropTypes.object.isRequired,
  dataEntry: PropTypes.object.isRequired,
  setCurrentData: PropTypes.func.isRequired,
  setDataEntry: PropTypes.func.isRequired,
  setToast: PropTypes.func.isRequired,
};

// All the props for filtering for coffee entries
export const filterCoffeeEntriesPropTypesShape = {
  onSubmit: PropTypes.func.isRequired,
  currentData: PropTypes.object.isRequired,
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
