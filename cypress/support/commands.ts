declare global {
    namespace Cypress {
      interface Chainable {
        login(email: string, password: string): Chainable<void>
      }
    }
  }
  Cypress.Commands.add('login', (userName: string, password: string)=> {
          cy.get('#userName').type(userName)
          cy.get('#password').type(password)
          cy.contains('button', 'Login').click()
    })
