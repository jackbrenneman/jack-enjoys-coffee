/**
 * All GraphQL mutations regarding coffee entries.
 */

/**
 * The mutation to write a new Coffee Entry into the coffee_entries table.
 */
export const coffeeEntryMutation = `
 mutation CreateCoffeeEntry($coffeeEntry: CoffeeEntryInput) {
   coffeeEntry(coffeeEntry: $coffeeEntry) {
     coffee_entry_id
   }
 }
`;

/**
 * The mutation to edit an existing coffee entry from the coffee_entries table.
 */
export const updateCoffeeEntryMutation = `
 mutation UpdateCoffeeEntry($coffee_entry: CoffeeEntryInput, $coffee_entry_id: Int!) {
   updateCoffeeEntry(coffee_entry: $coffee_entry, coffee_entry_id: $coffee_entry_id) {
     coffee_entry_id
   }
 }
`;

/**
 * The mutation to delete an existing coffee entry from the coffee_entries table.
 */
export const deleteCoffeeEntryMutation = `
 mutation DeleteCoffeeEntry($coffee_entry_id: Int!) {
   deleteCoffeeEntry(coffee_entry_id: $coffee_entry_id)
 }
`;
