/// <reference types="cypress" />

describe("My first test", () => {
  it("verify title", () => {
    // steps
    cy.viewport(1200, 800);
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.title().should("eq", "OrangeHRM");
  });

  it("verify title", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    let expectedTitle = "OrangeHRM";
    let NegativeTitle = "OrangeHRn";
    // Assert that the title is as expected
    cy.title().should("eq", expectedTitle);
    // Assert that the title is not the negative value
    cy.title().should("not.eq", NegativeTitle);
  });
});
