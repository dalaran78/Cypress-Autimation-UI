class TextBox {
    userName: string = '#userName';
    userEmail: string = '#userEmail';
    currentAddress: string = '#currentAddress';
    permanentAddress: string = '#permanentAddress';
    submitButton: string = '#submit';

    textBoxSubmit(){
        cy.get(this.userName).type('John Doe');
        cy.get(this.userEmail).type('johndoe@mail.com');
        cy.get(this.currentAddress).type('123 Street, apt 1, Test City, CA, 94043');
        cy.get(this.permanentAddress).type('1122 Test Ave, apt 11, Zero City, CA, 95841');
        cy.get(this.submitButton).click();
      }
}

export const TextBoxPage = new TextBox();
