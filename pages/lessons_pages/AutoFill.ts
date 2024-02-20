class AutoFill {
    private inputField: string = '.auto-complete__value-container'
    private dropDown: string = '#react-select-2-option-0'
    private result: string = '.auto-complete__multi-value__label'
    autoComplete(){
        const obj = {
            Y:'Yellow'
        }
        // fisrt means we are selecting fisrt same name element from the page list (was 2)
        // cy.get(this.inputField).first()
        //Or we can select it by this example
        cy.get(this.inputField).eq(0).type(Object.keys(obj)[0]) //type(Y)
        cy.contains(this.dropDown, Object.values(obj)[0]).click()
        cy.get(this.result).should('have.text', Object.values(obj)[0])
    }

}
export const autoFill = new AutoFill()
