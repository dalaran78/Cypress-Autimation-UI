class IFrame {
    private mainFrame: string = "#frame1";
    private mainFrameTitle: string = ".navbar-brand";
    private mainFrameButton: string = "#click_me_1";

    private nestedFrame: string = "#frame2";
    private nestedFrameTitle: string = ".navbar.navbar-expand-sm.bg-dark.navbar-dark > .navbar-brand";
    private nestedFrameButton: string = "#click_me_2";

    visit() {
      cy.visit(`${Cypress.env("playground")}/frames`);
    }

    clickButtonInsideMainFrame() {
      cy.frameLoaded(this.mainFrame);
      cy.iframe(this.mainFrame).find(this.mainFrameTitle).should("have.text", "Frame1 (ID=frame1)");
      cy.iframe(this.mainFrame).find(this.mainFrameButton).should("have.text", "Click Me 1").click();
      cy.iframe(this.mainFrame).find(this.mainFrameButton).should("have.text", "Clicked");
    }

    clickButtonInsideNestedFrame() {
        cy.frameLoaded(this.mainFrame);
        cy.iframe(this.nestedFrame).iframe().then(nestedFrame=> {
          cy.wrap(nestedFrame).find(this.nestedFrameTitle).should("have.text", "Frame2 (ID=frame2)");
          cy.wrap(nestedFrame).find(this.nestedFrameButton).click();
          cy.wrap(nestedFrame).find(this.nestedFrameButton).should("have.text", "Clicked");
        });
      }
  }

  export const IFramePage = new IFrame();
