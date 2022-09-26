/// <reference types="cypress" />

describe("Movie App", () => {
  it("initial render correctly", () => {
    cy.visit("http://localhost:3000/");
    // have title
    cy.contains("Movies").should("be.visible");
    //have search bar
    cy.get("input").should("be.visible");
    // movie result should be empty

    // favorite movies should have empty
  });

  it("should intercept example.json", () => {

    cy.intercept('http://localhost:3000/', {
      fixture: 'example.json'
    })
  });

  it("should intercept movies.json", () => {
    
    cy.visit("http://localhost:3000/");

    cy.intercept('/', {
      fixture: 'movies.json'
    })


    cy.get("input").type("star wars");

    cy.get(".movieCard").should("be.visible");

    // cy.get("input").clear();

  });



});
