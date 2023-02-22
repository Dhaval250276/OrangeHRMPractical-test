import { LoginPage} from "./Test/LoginwithPOM.cy"
import { Dashboard } from "./Test/Dashboard.cy"
import { PIM } from "./Test/PIM.cy"
import { AddEmployee } from "./Test/AddEmployee.cy"
import { Utils } from "./Utils/utils.cy"

const util = new Utils()
const pim = new PIM()
const dashboard = new Dashboard()
const login = new LoginwithPOM()
const addEmp = new AddEmployee()
describe('Orange HRM Flow1', () => {
  it('Main', () => {
    login.LoginPage()
    login.doLoginAdmin()
     cy.wait(2000)
    dashboard.assertDashboard()
    cy.wait(2000)
    dashboard.clickPIM()
    pim.pimBeforeAdd()
    cy.wait(2000)
    addEmp.createUserInfo()
    cy.wait(2000)
    addEmp.updateEmpInfo()
    cy.wait(2000)
    addEmp.createSecondUser()
    cy.wait(1000)
    addEmp.doLogout()
    cy.wait(1000)
    login.doLoginUser()
    cy.wait(2000)
    dashboard.assertDashboardUser()

  })
})
 