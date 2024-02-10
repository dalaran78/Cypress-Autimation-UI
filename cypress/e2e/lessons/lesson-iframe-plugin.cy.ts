// npm install -D cypress-iframe

import { IFrameAppPage } from "../../../pages/lessons_pages/IframeApp"
describe('IFRAMEAPP', () => {
    beforeEach(() => {
        IFrameAppPage.visit()
    });
    beforeEach(() => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    });
    it('test iframe with plugin extention', () => {
        cy.frameLoaded('#mce_0_ifr')
        cy.iframe('#mce_0_ifr').then(IFrameApp=>{
            cy.wrap(IFrameApp).type("{selectAll}{del}").type('Test message!', )
            cy.wait(2000)
            cy.wrap(IFrameApp).clear().type('second test message!')
        })
    });
});
