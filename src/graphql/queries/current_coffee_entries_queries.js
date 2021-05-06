/**
 * All GraphQL queries regarding Current Coffee Entries Container.
 */

/**
 * Gets all the current coffee entries for a specified user.
 */
export const currentCoffeeEntriesQuery = `
 query {
  coffeeEntries(user_id: 1) {
    coffee_entry_id
    user_id
    date
    coffee {
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
    brew {
      method {
        __typename
        ... on Espresso {
          liquid_out
        }
        ... on PourOver {
          water_in
        }
        ... on Immersion{
          water_in
          steep_time
        }
        category
        coffee_in
        drink {
          drink_id
          name
        }
        brewer {
          brewer_id
          name
        }
      }
    }
    rating
    notes
  }
}
`;