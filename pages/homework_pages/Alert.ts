class Alert {
    //Selectors
    private alertButton: string = '#alertButton'
    private timerAlertButton: string = '#timerAlertButton'
    private confirmoButton: string = '#confirmButton'
    private confirmResult: string = '#confirmResult'
    private promtButton: string = '#promtButton'
    private promptResult: string = '#promptResult'
    //Popup window text
    private alertWindow: string = 'You clicked a button'
    private timerWindow: string = 'This alert appeared after 5 seconds'
    private confirmWindow: string = 'Do you confirm action?'
    private promptWindow: string = 'Please enter your name'
    //Text results after button click
    private afterConfirmText: string = 'You selected '
    private afterPromptText: string = 'You entered '

    jsAlert(){
        cy.get(this.alertButton).click()
        cy.on("window:alert", (textAlert)=>{
            expect(textAlert).to.eq(this.alertWindow)
        })
        cy.on('window:confirm', ()=>true)
    }

    jsTimer(){
        cy.get(this.timerAlertButton).click()
        cy.wait(5000)
        cy.on("window:alert", (textAlert)=>{
            expect(textAlert).to.eq(this.timerWindow)
        })
        cy.on('window:confirm', ()=>true)
    }

    jsConfirmOk(){
        const okText = 'Ok'
        cy.get(this.confirmoButton).click()
        cy.on("window:alert", (textAlert)=>{
            expect(textAlert).to.eq(this.confirmWindow)
        })
        cy.on('window:confirm', ()=>true)
        cy.get(this.confirmResult).should('have.text', this.afterConfirmText + `${okText}`)
    }

    jsConfirmCancel(){
        const cancelText = 'Cancel'
        cy.get(this.confirmoButton).click()
        cy.on("window:alert", (textAlert)=>{
            expect(textAlert).to.eq(this.confirmWindow)
        })
        cy.on('window:confirm', ()=>false)
        cy.get(this.confirmResult).should('have.text', this.afterConfirmText + `${cancelText}`)
    }

    jsPromptOk() {
        const promptText = "John Doe";
        cy.window().then((window) => {
            cy.stub(window, "prompt").returns(promptText);
        });
        cy.get(this.promtButton).click();
        cy.on("window:alert", (textAlert) => {
            expect(textAlert).to.equal(this.promptWindow);
        });
        cy.on('window:confirm', () => true);
        cy.get(this.promptResult).should('have.text', this.afterPromptText + `${promptText}`);
    }

    jsPromptCancel() {
         cy.window().then((window) => {
            cy.stub(window, "prompt").returns('');
        });
        cy.get(this.promtButton).click();
        cy.on("window:alert", (textAlert) => {
            expect(textAlert).to.equal(this.promptWindow);
        });
        cy.on('window:confirm', () => false);
        cy.get(this.promptResult).should('not.exist');
    }
}

export const DemoQaAlertPage = new Alert();
