import {LocCodingLogin} from "../../../pages/lessons_pages/LoginLocalCoding"
describe('LOGIN', () => {
    beforeEach(() => {
        cy.session('myCurrentSession',()=>{
            cy.visit(`${Cypress.env('stage')}/user/login`)
            LocCodingLogin.buttonLogin(Cypress.env('EMAIL_LOCAL_STAGE'), Cypress.env('PASSWORD_LOCAL_STAGE'))
        }, {cacheAcrossSpecs:true});
    });
    // beforeEach(() => {
    //     cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    // });
    it('Login Page', () => {
        cy.visit(`${Cypress.env('stage')}/course`)

    });
});
