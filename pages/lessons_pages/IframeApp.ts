class IFrameApp {
    getIframe(){
        cy.frameLoaded('#mce_0_ifr');
        cy.iframe('#mce_0_ifr').then(IFrameApp=>{
            cy.wrap(IFrameApp).type("{selectAll}{del}").type('Test message!');
            cy.wrap(IFrameApp).clear().type('Second test message!');
        });
    }

    visit(){
        cy.visit(`${Cypress.env("herokuapp")}/iframe`);
    }
}

export const IFrameAppPage = new IFrameApp();
