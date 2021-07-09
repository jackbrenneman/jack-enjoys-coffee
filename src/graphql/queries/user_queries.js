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
      total_coffee_in
      method_stats {
        espresso_stats {
          method {
            method_id
            name
          }
          total_espresso_count
          total_espresso_coffee_in
          total_espresso_liquid_out
          drink_stats {
            drink {
              drink_id
              name
            }
            total_count
            total_coffee_in
            total_espresso_liquid_out
          }
        }
        pour_over_stats {
          method {
            method_id
            name
          }
          total_pour_over_count
          total_pour_over_coffee_in
          total_pour_over_water_in
          drink_stats {
            drink {
              drink_id
              name
            }
            total_count
            total_coffee_in
            total_water_in
          }
        }
        immersion_stats {
          method {
            method_id
            name
          }
          total_immersion_count
          total_immersion_coffee_in
          total_immersion_water_in
          total_immersion_steep_time
          drink_stats {
            drink {
              drink_id
              name
            }
            total_count
            total_coffee_in
            total_water_in
            total_steep_time
          }
        }
      }
    }
  }
}
`;
