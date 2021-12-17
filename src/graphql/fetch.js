/**
 * Centralized fetch function for fetching and writing information through GraphQL.
 *
 * Basically a wrapper around the fetch function.
 */

export const queryGQL = (queryString) => {
  return fetch("/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ query: queryString }),
  }).then((r) => r.json());
};

export const writeGQL = (queryString, inputs) => {
  return fetch("/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: queryString,
      variables: {
        ...inputs,
      },
    }),
  }).then((r) => r.json());
};
