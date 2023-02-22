 class Dashboard{
   
    getDashboardText(topTitle) {
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains(topTitle+'').should('be.visible')
        cy.wait(1000)
    }
    getDashboardItem(){
        cy.get('.orangehrm-attendance-card-summary-total > .oxd-text').should('be.visible')
        cy.wait(1000)
    }
    clickPIM() {
        cy.get(':nth-child(2) > .oxd-main-menu-item').click()
    }
    getDashboardTextUser(userName) {
        cy.get('.oxd-userdropdown-name').contains(userName+'').should('be.visible')
    }
}
export default Dashboard
