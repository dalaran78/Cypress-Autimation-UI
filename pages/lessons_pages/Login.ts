class Login {
  userName: string = "#userName";
  password: string = "#password";
  loginButton: string = "#login";
  logOutButton: string = "#submit";

  submitButtonLogin() {
    cy.get(this.userName).type(Cypress.env("EMAIL_DEMOQA"));
    cy.get(this.password).type(Cypress.env("PASSWORD_DEMOQA"));
    cy.get(this.loginButton).click();
    cy.contains("Log out");
  }
}

export const LoginPage = new Login();
