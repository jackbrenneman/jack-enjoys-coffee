/**
 * All queries related to the "processes" table.
 */
export const selectAllProcesses = 'SELECT * FROM processes';
export const selectProcessById =
  'SELECT * FROM processes WHERE process_id = $1';
export const selectProcessesByName =
  'SELECT * FROM processes WHERE LOWER(name) LIKE LOWER($1)';
export const insertIntoProcesses =
  'INSERT INTO processes (name) VALUES ($1) RETURNING process_id, name';
