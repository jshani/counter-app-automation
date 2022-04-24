///<reference types="Cypress" />

const itemButtonPart1 = `[data-cy="item-button_`;
let addItemButton;
const addItemButtonPart1 = `[data-cy="add-button_`;
let locatorAppend;
const cartItemText = `[data-cy="cartItem-text"]`;
let removeItemButton;
const removeItemButtonPart1 = `[data-cy="remove-button_`;
let deleteItemButton;
const deleteItemButtonPart1 = `[data-cy="delete-button_`;
const locatorLastPart = `"]`;
const resetButton = `[data-cy="reset-button"]`;
const restartButton = `[data-cy="restart-button"]`;
const items = ["1", "2", "3", "4"];

class ShoppingCartPage {
  /**
   * Verify the number of item count displayed in the cart is accurate
   */
  verifyCartItemCount() {
    let count = 0;
    let i;
    for (i = 0; i < 4; i++) {
      locatorAppend = items[i] + locatorLastPart;
      cy.get(itemButtonPart1 + locatorAppend)
        .invoke("text")
        .then((text) => {
          if (text !== "Zero") {
            count++;
            cy.wrap(count).as("expectedCartItemCount");
          }
        });
    }
    cy.get("@expectedCartItemCount").then((expectedCartItemCount) => {
      cy.get(cartItemText).should("contain.text", expectedCartItemCount);
    });
  }
  /**
   * Add items to the cart
   * @param  {string} itemNo Number of the item to be added
   */
  addItem(itemNo) {
    addItemButton = addItemButtonPart1 + items[itemNo] + locatorLastPart;
    cy.get(addItemButton).click();
    cy.get(addItemButton).click();
    this.verifyCartItemCount();
  }
  /**
   * Remove/Decrease the items added
   * @param  {} itemNo Number of the item to be removed
   */
  removeItem(itemNo) {
    removeItemButton = removeItemButtonPart1 + items[itemNo] + locatorLastPart;
    cy.get(removeItemButton).click();
    this.verifyCartItemCount();
  }
  /**
   * Reset the cart back to it's previous state
   */
  resetCart() {
    cy.get(resetButton).click();
  }
  /**
   * Delete Items from the items list
   * @param  {} itemNo Number of the item to be deleted
   * @param  {} newCount Expected item count after deletion
   */
  deleteItem(itemNo, newCount) {
    deleteItemButton = deleteItemButtonPart1 + items[itemNo] + locatorLastPart;
    cy.get(deleteItemButton).click({ force: true });
    cy.getItemCount().should("equal", newCount);
  }
  /**
   * Delete all items from the item list
   */
  deleteAllItems() {
    let i;
    for (i = 0; i < 4; i++) {
      deleteItemButton = deleteItemButtonPart1 + items[i] + locatorLastPart;
      if (Cypress.$(deleteItemButton).length > 0) {
        cy.get(deleteItemButton).click();
      }
    }
    cy.getItemCount().should("equal", 0);
  }
  /**
   * Restart the cart and restore all items
   */
  restartCart() {
    this.deleteAllItems();
    cy.get(restartButton).click({ force: true });
    cy.getItemCount().should("equal", 4);
  }
}
export default ShoppingCartPage;
