let addItemButton;
const addItemButtonPart1 = `[data-cy="add-button_`;
const items = ["1", "2", "3", "4"];
const locatorLastPart = `"]`;
let oldCount;
/**
 * Return the exiting number of items in the item list
 */
Cypress.Commands.add("getItemCount", () => {
  let i;
  let itemCount = 0;
  oldCount = 0;

  for (i = 0; i < 4; i++) {
    addItemButton = addItemButtonPart1 + items[i] + locatorLastPart;
    if (Cypress.$(addItemButton).length > 0) {
      itemCount++;
    }
    cy.wrap(itemCount).as("existingItemCount");
  }

  cy.get("@existingItemCount").then((existingItemCount) => {
    oldCount = existingItemCount;
    cy.wrap(oldCount);
  });
});
