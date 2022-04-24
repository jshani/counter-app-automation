import "./commands";
import config from "../fixtures/config";

before(() => {
  cy.visit(config.url);
});
