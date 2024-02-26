class IFrame {
  private iframe: string = "#frame1";
  private body: string = "body";
  private iFrameChild: string = "iframe";

  getIframe() {
    cy.get(this.iframe).then((iFrame) => {
      const body = iFrame.contents().find(this.body);
      cy.wrap(body).should("have.text", "Parent frame");
      cy.wrap(body)
        .find(this.iFrameChild)
        .then((iFrameChild) => {
          const iframeChild = iFrameChild.contents().find(this.body);
          cy.wrap(iframeChild).should("have.text", "Child Iframe");
        });
    });
  }
  visit() {
    cy.visit(`${Cypress.env("demoQA")}/nestedframes`);
  }
}

export const IFramePage = new IFrame();
