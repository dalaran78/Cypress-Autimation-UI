describe("ENV", () => {
  it("stage", () => {
    cy.visit(Cypress.env("stage"));
  });
  it("prod", () => {
    cy.visit(Cypress.env("prod"));
  });
  it("test", () => {
    cy.log(Cypress.env("test"));
  });

  it("baseUrl", () => {
    cy.visit("/textinput");
  });
});
