/**
 * All queries related to the "brewers" table.
 */
export const selectAllBrewers = `
  SELECT
  brewers.brewer_id AS brewer_id,
  brewers.name AS brewer_name,
  brewers.website AS brewer_website,
  brewers.method_id AS method_id,
  methods.name AS method_name
  FROM brewers
  INNER JOIN methods ON brewers.method_id = methods.method_id
`;
export const selectBrewerById = `
  SELECT
  brewers.brewer_id AS brewer_id,
  brewers.name AS brewer_name,
  brewers.website AS brewer_website,
  brewers.method_id AS method_id,
  methods.name AS method_name
  FROM brewers
  INNER JOIN methods ON brewers.method_id = methods.method_id
  WHERE brewers.brewer_id = $1
`;
export const selectBrewersByMethodId = `
  SELECT
  brewers.brewer_id AS brewer_id,
  brewers.name AS brewer_name,
  brewers.website AS brewer_website,
  brewers.method_id AS method_id,
  methods.name AS method_name
  FROM brewers
  INNER JOIN methods ON brewers.method_id = methods.method_id
  WHERE brewers.method_id = $1
`;
export const selectBrewersByName = `
  SELECT
  brewers.brewer_id AS brewer_id,
  brewers.name AS brewer_name,
  brewers.website AS brewer_website,
  brewers.method_id AS method_id,
  methods.name AS method_name
  FROM brewers
  INNER JOIN methods ON brewers.method_id = methods.method_id
  WHERE LOWER(brewers.name) LIKE LOWER($1)
`;
export const insertIntoBrewers =
  'INSERT INTO brewers (name, website, method_id) VALUES ($1, $2, $3) RETURNING *';
