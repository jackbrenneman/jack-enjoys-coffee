/**
 * All GraphQL queries regarding a user.
 */

/**
 * Gets all the stats for a user to show on their profile page.
 */
export const userStatsQuery = (user_id) => `
query {
  user(user_id: ${user_id}) {
    user_id
    user_name
    email
    stats {
      start_date
      total_coffee_entries
      total_unique_coffees
      total_unique_roasters
      espresso_breakdown: method_breakdown(method_id:1) {
        total_coffee_in
        total_count
        method {
          method_id
          name
        }
        drink_breakdown {
          drink {
            name
            drink_id
            method {
              method_id
              name
            }
          }
          total_coffee_in
          total_count
        }
      }
      pour_over_breakdown: method_breakdown(method_id:2) {
        total_count
        total_coffee_in
        method {
          method_id
          name
        }
        drink_breakdown {
          drink {
            name
            drink_id
            method {
              method_id
              name
            }
          }
          total_coffee_in
          total_count
        }
      }
      immersion_breakdown: method_breakdown(method_id:3) {
        total_count
        total_coffee_in
        method {
          method_id
          name
        }
        drink_breakdown {
          drink {
            name
            drink_id
            method {
              method_id
              name
            }
          }
          total_coffee_in
          total_count
        }
      }
    }
  }
}
`;
