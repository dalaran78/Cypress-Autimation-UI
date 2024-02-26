import { TextBoxPage } from "../../../pages/homework_pages/TextBox";
Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});
const name = "John Doe";
const email = "johndoe@mail.com";
const curAddress = "123 Street, apt 1, Test City, CA, 94043 ";
const perAddress = "1122 Test Ave, apt 11, Zero City, CA, 95841";

describe("TEXT BOX", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/text-box`);
  });

  it("TextBox input with PageObject", () => {
    TextBoxPage.textBoxSubmit();
    cy.get("#name").should("have.text", `Name:${name}`);
    cy.get("#email").should("have.text", `Email:${email}`);
    cy.get(".border > #currentAddress").should(
      "have.text",
      `Current Address :${curAddress}`,
    );
    cy.get(".border > #permanentAddress").should(
      "have.text",
      `Permananet Address :${perAddress}`,
    );
  });
});
