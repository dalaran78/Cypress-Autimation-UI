describe("CLIENT SIDE DELAY", () => {
  it("test", () => {
    cy.visit("/clientdelay");
    cy.get("#ajaxButton").should("be.visible").and("exist").click();
    cy.get("#spinner").should("be.visible").should("exist");
    // cy.get('.be-success').contains('Button Triggering Client Side Logic');
    cy.contains(".bg-success", "Data calculated on the client side.");
  });
});

//visit url
//find button
//assert button
//click button
//find spinner element(selector)
//verify spinner loho(assert)
//assert spinner logo(assert)
