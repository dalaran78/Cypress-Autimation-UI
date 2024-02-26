import { LoginPage } from "../../../pages/lessons_pages/Login";
//Cypress.session.clearAllSavedSessions()
describe("COOKIES", () => {
  beforeEach(() => {
    cy.session("myCurrentSession", () => {
      cy.visit(`${Cypress.env("demoQA")}/login`);
      // cy.get('#userName').type('test');
      // cy.get('#password').type('Test1234*');
      // cy.contains('button', 'Login').click();
      // cy.contains('Log out');
      LoginPage.submitButtonLogin();
      cy.wait(2000);
    });
  });
  beforeEach(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
  });
  //no cookies in the database
  it("create cookies with cy.session", () => {
    cy.visit(`${Cypress.env("demoQA")}/login`);
    cy.url().then((url) => {
      cy.log(url);
    });
  });
  //no cookies in the database

  it("create cookies with cy.session", () => {
    cy.visit(`${Cypress.env("demoQA")}/login`);
    cy.contains("Log out");
  });
});
