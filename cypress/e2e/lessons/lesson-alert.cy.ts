import { AlertPage } from "../../../pages/lessons_pages/Alert";
describe("ALERT", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("herokuapp")}/javascript_alerts`);
  });

  it("Click for JS Alert", () => {
    AlertPage.jsAlert();
  });

  it("Click for JS Confirm OK/true", () => {
    AlertPage.jsConfirm();
  });
  //Homework
  it("Click for JS Prompt OK/true", () => {
    AlertPage.jsPrompt();
  });

  // it('Click for JS Confirm FALSE', () => {
  //     AlertPage.jsConfirm()
  // });
});
