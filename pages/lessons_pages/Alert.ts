class Alert {
  // Selectors
  private resultSelector: string = "#result";
  private buttonSelector: string = "button";
  //ButtonText
  private alertTextButton: string = "Click for JS Alert";
  private jsConfirmText: string = "Click for JS Confirm";
  private jsPromptText: string = "Click for JS Prompt";
  //Popup window text
  private jsAlertText: string = "I am a JS Alert";
  private jsConfirmWindowText: string = "I am a JS Confirm";
  private jsPromptWindowText: string = "I am a JS promt";
  // Text after cLick on the button
  private resultTextAlert: string = "You successfully clicked an alert";
  private resultTextConfirm: string = "You clicked: Ok";
  private resultTextPrompt: string = "You entered: ";

  jsAlert() {
    cy.contains(this.buttonSelector, this.alertTextButton).click();
    cy.on("window:alert", (textAlert) => {
      expect(textAlert).to.equal(this.jsAlertText);
    });
    cy.on("window:confirm", () => true);
    cy.get(this.resultSelector).should("have.text", this.resultTextAlert);
  }
  jsConfirm() {
    cy.contains(this.buttonSelector, this.jsConfirmText).click();
    cy.on("window:alert", (textAlert) => {
      expect(textAlert).to.equal(this.jsConfirmWindowText);
    });
    cy.on("window:confirm", () => true);
    cy.get(this.resultSelector).should("have.text", this.resultTextConfirm);
  }

  jsPrompt() {
    const text = "Prompt message!";
    cy.window().then((window) => {
      cy.stub(window, "prompt").returns(text); // waiting for
      cy.contains(this.buttonSelector, this.jsPromptText).click();
    });
    cy.get(this.resultSelector).should(
      "have.text",
      this.resultTextPrompt + `${text}`,
    );
  }
}

export const AlertPage = new Alert();
