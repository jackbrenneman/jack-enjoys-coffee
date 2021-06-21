/**
 * All queries related to the "brewers" table.
 */
export const selectAllBrewers = `
  SELECT
  brewers.brewer_id AS brewer_id,
  brewers.name AS brewer_name,
  brewers.website AS brewer_website,
  brewers.method_id AS method_id,
  brewers.is_active AS is_active,
  methods.name AS method_name
  FROM brewers
  INNER JOIN methods ON brewers.method_id = methods.method_id
`;
export const selectBrewersByUserId = `
  SELECT
  brewers.brewer_id AS brewer_id,
  brewers.name AS brewer_name,
  brewers.website AS brewer_website,
  brewers.method_id AS method_id,
  brewers.is_active AS is_active,
  methods.name AS method_name
  FROM brewers
  INNER JOIN methods ON brewers.method_id = methods.method_id
  WHERE brewers.user_id = $1
  ORDER BY is_active DESC
`;
export const selectActiveBrewersByUserId = `
  SELECT
  brewers.brewer_id AS brewer_id,
  brewers.name AS brewer_name,
  brewers.website AS brewer_website,
  brewers.method_id AS method_id,
  brewers.is_active AS is_active,
  methods.name AS method_name
  FROM brewers
  INNER JOIN methods ON brewers.method_id = methods.method_id
  WHERE brewers.user_id = $1
  AND is_active = true
`;
export const selectBrewerById = `
  SELECT
  brewers.brewer_id AS brewer_id,
  brewers.name AS brewer_name,
  brewers.website AS brewer_website,
  brewers.method_id AS method_id,
  brewers.is_active AS is_active,
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
  brewers.is_active AS is_active,
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
  brewers.is_active AS is_active,
  methods.name AS method_name
  FROM brewers
  INNER JOIN methods ON brewers.method_id = methods.method_id
  WHERE LOWER(brewers.name) LIKE LOWER($1)
`;
export const insertIntoBrewers =
  'INSERT INTO brewers (name, website, method_id, is_active, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *';
export const deleteBrewer =
  'DELETE FROM brewers WHERE brewer_id = $1 AND user_id = $2';
export const updateBrewer =
  'UPDATE brewers SET name = $1, website = $2, method_id = $3, is_active = $4 WHERE brewer_id = $5 AND user_id = $6 RETURNING *';
