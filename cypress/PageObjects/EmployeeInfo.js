export class EmployeeInfo {
    EmployeeInfo() {

    }
    assertInfo(firstName, lastName) {
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').contains(firstName + '').should('be.true')
        cy.wait(2000)
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').contains(lastName + '').should('be.true')
        cy.wait(2000)
    }
    updateNationality(nationality) {
        cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
        cy.contains(nationality + '').click()
        cy.wait(2000)
    }
    updateMaritalStatus(mStatus) {
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
        cy.contains(mStatus + '').click()
        cy.wait(2000)
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
        cy.wait(2000)
    }
    clickSave() {
        cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()
    }

    clickAdd() {
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
    }
    clickLogout() {
        cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
        cy.wait(2000)
        cy.contains('Logout').click()
    }
}