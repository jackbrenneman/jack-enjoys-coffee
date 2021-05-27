/**
 * Helpers for the current data page.
 */

/**
 * Creates a mapping of coffee_ids to coffee info
 * @param {array} coffees the coffees array, in the form:
 *   [
 *     {
 *       coffee_id: 1,
 *       name: "Coffee Name",
 *       ...
 *     }
 *     ...
 *   ]
 * @returns {object} an object that maps coffee_id to coffee, in the form:
 *   {
 *     1: {
 *           ...coffee 1
 *        },
 *     2: {
 *           ...coffee 2
 *        },
 *     ...
 *   }
 *
 */
export const createCoffeeIdsToCoffeeMap = (coffees) => {
  const coffeeIdsToCoffeeMap = coffees.reduce((acc, coffee) => {
    const { coffee_id } = coffee;
    acc[coffee_id] = coffee;
    return acc;
  }, {});
  return coffeeIdsToCoffeeMap;
};

/**
 * Creates a mapping of method_ids to method info
 * @param {array} methods the methods array, in the form:
 *   [
 *     {
 *       method_id: 1,
 *       name: "Method Name",
 *       ...
 *     }
 *     ...
 *   ]
 * @returns {object} an object that maps method_id to method, in the form:
 *   {
 *     1: {
 *           ...method 1
 *        },
 *     2: {
 *           ...method 2
 *        },
 *     ...
 *   }
 *
 */
export const createMethodIdsToMethodMap = (methods) => {
  const methodIdsToMethodMap = methods.reduce((acc, method) => {
    const { method_id } = method;
    acc[method_id] = method;
    return acc;
  }, {});
  return methodIdsToMethodMap;
};

/**
 * Creates a mapping of method_ids to method info
 * @param {array} origins the origins array, in the form:
 *   [
 *     {
 *       origin_id: 1,
 *       name: "Origin Name",
 *       ...
 *     }
 *     ...
 *   ]
 * @returns {object} an object that maps origin_id to origin, in the form:
 *   {
 *     1: {
 *           ...origin 1
 *        },
 *     2: {
 *           ...origin 2
 *        },
 *     ...
 *   }
 *
 */
export const createOriginIdsToOriginMap = (origins) => {
  const originIdsToOriginMap = origins.reduce((acc, origin) => {
    const { origin_id } = origin;
    acc[origin_id] = origin;
    return acc;
  }, {});
  return originIdsToOriginMap;
};

/**
 * Creates a mapping of process_id to process info
 * @param {array} processes the processes array, in the form:
 *   [
 *     {
 *       process_id: 1,
 *       name: "Process Name",
 *       ...
 *     }
 *     ...
 *   ]
 * @returns {object} an object that maps process_id to process, in the form:
 *   {
 *     1: {
 *           ...process 1
 *        },
 *     2: {
 *           ...process 2
 *        },
 *     ...
 *   }
 *
 */
export const createProcessIdsToProcessMap = (processes) => {
  const processIdsToProcessMap = processes.reduce((acc, process) => {
    const { process_id } = process;
    acc[process_id] = process;
    return acc;
  }, {});
  return processIdsToProcessMap;
};

/**
 * Creates a mapping of roaster_ids to roaster info
 * @param {array} roasters the roasters array, in the form:
 *   [
 *     {
 *       roaster_id: 1,
 *       name: "Roaster Name",
 *       city: "Roaster City",
 *       state: "Roaster State",
 *       country: "Roaster Country",
 *       website: "www.roaster.com"
 *     }
 *     ...
 *   ]
 * @returns {object} an object that maps roaster_id to roaster, in the form:
 *   {
 *     1: {
 *           ...roaster 1
 *        },
 *     2: {
 *           ...roaster 2
 *        },
 *     ...
 *   }
 *
 */
export const createRoasterIdsToRoasterMap = (roasters) => {
  const roasterIdsToRoasterMap = roasters.reduce((acc, roaster) => {
    const { roaster_id } = roaster;
    acc[roaster_id] = roaster;
    return acc;
  }, {});
  return roasterIdsToRoasterMap;
};
