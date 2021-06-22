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
      is_active
      method {
        method_id
        name
      }
    }
    coffees {
      coffee_id
      name
      is_active
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
      is_active
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
      is_active
    }
    waters {
      water_id
      name
      description
      is_active
    }
  }
`;

/**
 * Gets all the ACTIVE current info for all the stuff we can add data for.
 */
export const activeCurrentDataQuery = `
 query {
   brewers(only_active: true) {
     brewer_id
     name
     website
     is_active
     method {
       method_id
       name
     }
   }
   coffees(only_active: true) {
     coffee_id
     name
     is_active
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
   grinders(only_active: true) {
     grinder_id
     name
     website
     is_active
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
   roasters(only_active: true) {
     roaster_id
     name
     city
     state
     country
     website
     is_active
   }
   waters(only_active: true) {
     water_id
     name
     description
     is_active
   }
 }
`;
