/**
 * Centralized fetch function for fetching information through GraphQL.
 *
 * Basically a wrapper around the fetch function.
 */

export const fetchGQL = (queryString) => {
  return fetch('/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ query: queryString }),
  }).then((r) => r.json());
};
