 class AddEmployee {
    
    enterFirstName(firstName) {
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type(firstName)
        cy.wait(1000)
    }
    enterLastName(lastName) {
        cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type(lastName)
        cy.wait(1000)
    }
    toggleSwitch() {
        cy.get('.oxd-switch-input').click()
        cy.wait(1000)
    }
    enterUserName(userName) {
        cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userName)
        cy.wait(1000)
    }
    enterPassword(pass) {
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type(pass)
        cy.wait(1000)
    }
    enterConfPassword(confPass) {
        cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(confPass)
        cy.wait(1000)
    }
    clickSubmit() {
        cy.get('.oxd-button--secondary').click()
    }

}
export default AddEmployee;