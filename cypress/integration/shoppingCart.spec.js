/// <reference types="cypress" />
import ShoppingCartPage from "../pageObjects/ShoppingCartPage";

let itemNumber;
const shoppingCartPage = new ShoppingCartPage();

describe("Verify adding, removing, deleting items, restarting and resetting from shopping cart", () => {
  it("add items to cart", () => {
    itemNumber = 0;
    shoppingCartPage.addItem(itemNumber);
    itemNumber = 1;
    shoppingCartPage.addItem(itemNumber, 2);
  });
  it("remove item from cart", () => {
    itemNumber = 0;
    shoppingCartPage.removeItem(itemNumber);
  });
  it("reset cart", () => {
    shoppingCartPage.resetCart();
  });
  it("delete items from cart", () => {
    shoppingCartPage.restartCart();
    itemNumber = 0;
    shoppingCartPage.deleteItem(itemNumber, 3);
    itemNumber = 2;
    shoppingCartPage.deleteItem(itemNumber, 2);
  });
  it("restart cart", () => {
    shoppingCartPage.restartCart();
  });
});
