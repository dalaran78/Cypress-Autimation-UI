describe('EXCEL', () => {
    it('read data from excel document', () => {
        cy.readingXlsx('cypress/fixtures/excelData.xlsx').then(data =>{
            cy.log(data)
            cy.log(data[0])
            cy.log(data[0].data)
            cy.log(data[0].data[0])
            cy.log(data[0].data[1])
            cy.log(data[0].data[2])
        })
    });

    it.only('Read from XCLS then Write to JSON and use it to login', () => {
        cy.readingXlsx('cypress/fixtures/excelData.xlsx').then(data =>{
            cy.log(data)
            cy.log(data[0])
            cy.log(data[0].data)
            cy.log(data[0].data[0][0])
            cy.log(data[0].data[0][1])
            let email = data[0].data[0][0]
            let password = data[0].data[0][1]
            // ** Using data from excel file
            // cy.writeFile('cypress/fixtures/login.json', {
            //     email: email,
            //     password: password
            // })
            // ** Using data from .env
            cy.writeFile('cypress/fixtures/login.json', {
                email: Cypress.env("EMAIL_LOCAL_STAGE"),
                password: Cypress.env("PASSWORD_LOCAL_STAGE")
            })
            cy.fixture('login.json').then(login=>{
                cy.log(login)
                cy.apiLogin(login.email,login.password)
                // ** Or we can take the profile ID from the API response body
                cy.visit(`${Cypress.env("stage")}/profile/${Cypress.env("USERID_LOCAL_STAGE")}`);
                cy.contains('Test User')
            })
        })
    });
});
