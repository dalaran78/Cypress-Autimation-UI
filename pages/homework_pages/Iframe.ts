class IFrame {
  private mainFrame: string = "#frame1";
  private mainFrameTitle: string = ".navbar-brand";
  private mainFrameButton: string = "#click_me_1";

  private nestedFrame: string = "#frame2";
  private nestedFrameTitle: string =
    ".navbar.navbar-expand-sm.bg-dark.navbar-dark > .navbar-brand";
  private nestedFrameButton: string = "#click_me_2";

  visit() {
    cy.visit(`${Cypress.env("playground")}/frames`);
  }

  clickButtonInsideMainFrame() {
    cy.frameLoaded(this.mainFrame);
    cy.iframe(this.mainFrame)
      .find(this.mainFrameTitle)
      .should("have.text", "Frame1 (ID=frame1)");
    cy.iframe(this.mainFrame)
      .find(this.mainFrameButton)
      .should("have.text", "Click Me 1")
      .click();
    cy.iframe(this.mainFrame)
      .find(this.mainFrameButton)
      .should("have.text", "Clicked");
  }

  clickButtonInsideNestedFrame() {
    cy.iframe(this.mainFrame)
      .iframe()
      .then((iframe1) => {
        cy.wrap(iframe1)
          .find(this.nestedFrame)
          .then((iframe2) => {
            const bodyIframe2 = iframe2.contents().find("body");
            cy.wrap(bodyIframe2).contains("Frame2 (ID=frame2)");
            cy.wrap(bodyIframe2)
              .find(this.nestedFrameButton)
              .click()
              .should("have.text", "Clicked")
              .and("have.css", "background-color", "rgb(55, 58, 60)");
          });
      });
  }
}

export const IFramePage = new IFrame();
