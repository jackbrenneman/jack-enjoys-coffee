/**
 * Helpers for the coffee entry input page.
 */
import { methodToBrewerMap, methodToDrinkMap } from '../../../temp_db.js';

/**
 * Gets the correct brewers based on the method selected
 */
export const getBrewerOptions = (methodValue) => {
  return methodToBrewerMap[methodValue];
};

/**
 * Gets the correct drink types based on the method selected
 */
export const getDrinkOptions = (methodValue) => {
  return methodToDrinkMap[methodValue];
};
