import { LoginPage } from "../../../pages/lessons_pages/Login"
describe('LOGIN PAGE', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}/login`)
    });
it('login with PageObject',()=>{
    LoginPage.submitButtonLogin()
    })
});
