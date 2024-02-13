// npm install -D cypress-iframe

import { IFrameAppPage } from "../../../pages/lessons_pages/IframeApp"

describe('IFRAMEAPP', () => {
    beforeEach(() => {
        IFrameAppPage.visit();
    });

    beforeEach(() => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    });

    it('test iframe with plugin extension', () => {
        IFrameAppPage.getIframe();
    });
});
