import Dashboard from "../../PageObjects/Dashboard"


const dashboardPage = new Dashboard();
export class Dashboard {
    Dashboard() {

    }
    assertDashboard() {
        dashboardPage.getDashboardText('Dashboard')
        dashboardPage.getDashboardItem()
    }
    clickPIM() {
        dashboardPage.clickPIM()
    }
    assertDashboardUser() {
        cy.readFile('C:\\CypressAutomation\\cypress\\fixtures\\userinfo.json').then((user)=>{
            var dashboardName=user[0].firstName+' '+user[0].lastName
            dashboardPage.getDashboardTextUser(dashboardName)
        })
      
    }
    }
    
