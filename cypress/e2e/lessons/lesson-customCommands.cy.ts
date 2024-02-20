describe('LOGIN PAGE', () => {
    beforeEach(() => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    });
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}/login`)
    });
it('login',()=>{
    cy.login('test', 'Test1234*')
    // cy.login(Cypress.env('EMAIL_DEMOQA'), Cypress.env('PASSWORD_DEMOQA'))
    // cy.login()
    cy.contains('Log out')
    })
});
