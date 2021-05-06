/**
 * All GraphQL mutations regarding coffee entries.
 */

/**
 * The mutation to write a new Coffee Entry into the coffee_entries table.
 */
export const coffeeEntryMutation = `
 mutation CreateCoffeeEntry($input: CoffeeEntryInput) {
   coffeeEntry(coffeeEntry: $input) {
     entry_id
   }
 }
`;
