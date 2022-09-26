import App from "../../src/App";

describe("App", () => {
  it("initial render", () => {
    cy.mount(<App />);
  });

  cy.contains("Movies").should('be.visible');
  cy.contains("Favorites").should('be.visible');

  cy.get('input').type('hello');
});
