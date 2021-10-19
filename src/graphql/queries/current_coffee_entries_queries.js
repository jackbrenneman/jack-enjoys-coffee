/**
 * All GraphQL queries regarding Current Coffee Entries Container.
 */

/**
 * Gets all the current coffee entries for a specified user.
 */
export const currentCoffeeEntriesQuery = (user_id, date_start, date_end) => `
 query {
  coffeeEntries(user_id:${user_id}, date_start:"${date_start}", date_end:"${date_end}" ) {
    coffee_entry_id
    user_id
    date
    cafe {
      cafe_id
      name
    }
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
        method_id
        name
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
      water {
        water_id
        name
      }
      grind {
        grinder {
          grinder_id
          name
        }
        setting
      }
    }
    rating
    notes
  }
  brewers(user_id:${user_id}) {
    brewer_id
    name
    website
    is_active
    method {
      method_id
      name
    }
  }
  cafes(user_id:${user_id}) {
    cafe_id
    name
    city
    state
    country
    is_active
  }
  coffees(user_id:${user_id}) {
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
  drinks(user_id:${user_id}) {
    drink_id
    name
    method {
      method_id
      name
    }
  }
  grinders(user_id:${user_id}) {
    grinder_id
    name
    website
    is_active
  }
  methods {
    method_id
    name
  }
  origins(user_id:${user_id}) {
    origin_id
    name
  }
  processes {
    process_id
    name
  }
  roasters(user_id:${user_id}) {
    roaster_id
    name
    city
    state
    country
    website
    is_active
  }
  waters(user_id:${user_id}) {
    water_id
    name
    description
    is_active
  }
}
`;
