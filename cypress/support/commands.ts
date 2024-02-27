declare global {
    namespace Cypress {
        interface Chainable {
            login(email: string, password: string): Chainable<void>;
            readingXlsx(file: any): any;
            apiLogin(email: string, password: string): Chainable<void>;
        }
    }
}
Cypress.Commands.add("login", (userName: string, password: string) => {
    cy.get("#userName").type(userName);
    cy.get("#password").type(password);
    cy.contains("button", "Login").click();
});
Cypress.Commands.add("readingXlsx", (file) => {
    return cy.task("parseXlsx", { filePath: file });
});
Cypress.Commands.add("apiLogin", (email: string, password: string) => {
    cy.request({
        method: "POST",
        url: "https://server-stage.pasv.us/user/login",
        body: {
            email: email,
            password: password,
        },
    }).then((response) => {
        console.log(response);
    });
});