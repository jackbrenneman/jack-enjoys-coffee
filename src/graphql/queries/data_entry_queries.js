/**
 * All GraphQL queries regarding the Data Entry Component.
 */

/**
 * Gets all the current info for all the stuff we can add data for.
 */
export const currentDataQuery = `
  query {
    brewers {
      brewer_id
      name
      website
      method {
        method_id
        name
      }
    }
    coffees {
      coffee_id
      name
      roaster {
        roaster_id
        name
      }
      origin {
        origin_id
        name
      }
      process {
        process_id
        name
      }
    }
    drinks {
      drink_id
      name
      method {
        method_id
        name
      }
    }
    grinders {
      grinder_id
      name
      website
    }
    methods {
      method_id
      name
    }
    origins {
      origin_id
      name
    }
    processes {
      process_id
      name
    }
    roasters {
      roaster_id
      name
      city
      state
      country
      website
    }
    waters {
      water_id
      name
      description
    }
  }
`;
