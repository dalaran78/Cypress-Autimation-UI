import { DemoQaAlertPage } from "../../../pages/homework_pages/Alert";
// Cypress.session.clearAllSavedSessions();

describe("DEMOQA ALERTS", () => {
  // beforeEach(() => {
  //     cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
  // });
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/alerts`);
  });

  it("-1- Click Button to see alert", () => {
    DemoQaAlertPage.jsAlert();
  });

  it("-2- Click Button to see alert with timer", () => {
    DemoQaAlertPage.jsTimer();
  });

  it('-3- Click Button to see alert Confirm "Ok"', () => {
    DemoQaAlertPage.jsConfirmOk();
  });

  it('-4- Click Button to see alert Confirm "Cancel"', () => {
    DemoQaAlertPage.jsConfirmCancel();
  });

  it('-5- Click Button to see alert Prompt "Ok"', () => {
    DemoQaAlertPage.jsPromptOk();
  });

  it('-6- Click Button to see alert Prompt "Cancel"', () => {
    DemoQaAlertPage.jsPromptCancel();
  });
});
