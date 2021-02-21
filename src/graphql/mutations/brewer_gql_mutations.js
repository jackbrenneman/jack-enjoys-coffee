/**
 * All GraphQL mutations regarding brewers.
 */

/**
 * The mutation to write new Brewers into the brewers table.
 *
 * @param {array} brewers an array of BrewerInput objects, with the shape:
 *   [
 *     {
 *       name: "Brewer 1 Name",
 *       website: "brewer1.com"
 *     },
 *     {
 *       ...
 *     },
 *     ...
 *   ]
 */
export const brewersMutation = (brewers) => `
  mutation {
    brewers(brewers:${brewers}) {
      brewer_id
      name
      website
    }
  }
`;
