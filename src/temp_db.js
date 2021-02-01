/**
 * Temp DB to test GraphQL stuff and also house data before I figure out how to get information from an actual DB
 */
export const methodData = [
  {
    name: 'Espresso',
    value: 0,
  },
  {
    name: 'Pour Over',
    value: 1,
  },
  {
    name: 'Immersion',
    value: 2,
  },
];

const espressoBrewerData = [
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

const pourOverBrewerData = [
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

const immersionBrewerData = [
  {
    name: 'Aeropress',
    value: 0,
    method: 2,
  },
  {
    name: 'French Press',
    value: 1,
    method: 2,
  },
  {
    name: 'Toddy',
    value: 2,
    method: 2,
  },
];

export const methodToBrewerMap = {
  0: espressoBrewerData,
  1: pourOverBrewerData,
  2: immersionBrewerData,
};

export const grinderData = [
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

export const originData = [
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

export const waterData = [
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

const espressoDrinkData = [
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

const pourOverDrinkData = [
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

const immersionDrinkData = [
  {
    name: 'Hot Brew',
    value: 0,
    method: 2,
  },
  {
    name: 'Cold Brew',
    value: 1,
    method: 2,
  },
  {
    name: 'Nitro Cold Brew',
    value: 2,
    method: 2,
  },
];

// const allDrinkData = [espressoDrinkData, pourOverDrinkData, immersionDrinkData];

export const methodToDrinkMap = {
  0: espressoDrinkData,
  1: pourOverDrinkData,
  2: immersionDrinkData,
};

export const timeOfDayData = [
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

export const processData = [
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

export const ratingsInputData = [
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

export const nameData = {
  0: {
    id: 0,
    name: 'Test Name',
  },
};

export const roasterData = {
  0: {
    id: 0,
    name: 'Little Wolf',
    city: 'Ipswhich',
    state: 'Massachusetts',
    country: 'United States',
    website: 'https://littlewolf.coffee/',
  },
  1: {
    id: 1,
    name: 'Tandem',
    city: 'Portland',
    state: 'Maine',
    country: 'United States',
    website: 'https://www.tandemcoffee.com/',
  },
  2: {
    id: 2,
    name: 'George Howell',
    city: 'Acton',
    state: 'Massachusetts',
    country: 'United States',
    website: 'https://www.georgehowellcoffee.com/',
  },
  3: {
    id: 3,
    name: 'Abracadabra',
    city: 'Woodstock',
    state: 'Vermont',
    country: 'United States',
    website: 'https://www.abracadabracoffeeco.com/',
  },
};

const coffeeEntry = {
  id: 1,
  time: {
    date: '1-1-2021',
    timeOfDay: 0,
  },
  coffee: {
    name: 'Coffee Name',
    roaster: roasterData[3],
    origin: 'Mexico',
    process: 'Natural',
  },
  brew: {
    method: {
      category: 0,
      brewer: 'Flair Signature 2',
      drink: 'Straight Espresso',
    },
    grind: {
      grinder: 'Niche',
      setting: '14',
    },
    water: 'Vermont',
    in: 14,
    out: 32,
  },
  rating: 4,
  notes:
    '30s preinfusion and took about 45s. Very thin but super bright and tasty.',
};

export const userData = {
  0: {
    id: 0,
    firstName: 'Jack',
    lastName: 'Brenneman',
    coffeeEntries: [coffeeEntry],
  },
  1: {
    id: 0,
    firstName: 'Stanley',
    lastName: 'Brenneman',
    coffeeEntries: [coffeeEntry],
  },
};
