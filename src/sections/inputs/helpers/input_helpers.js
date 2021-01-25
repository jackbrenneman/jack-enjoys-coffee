/**
 * Helpers for the coffee entry input page
 *
 * @author Jack Brenneman
 */
import { methodToBrewerMap, methodToDrinkMap } from '../../../consts.js';

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
