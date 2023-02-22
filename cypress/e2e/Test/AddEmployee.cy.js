
import { Utils } from "./Utility/Utility.cy";
import { AddEmployee } from "../PageObjects/AddEmployee.js";
import { EmployeeInfo } from "../PageObjects/EmployeeInfo.js";

const addEmp = new AddEmployee()
const empInfo = new EmployeeInfo()
const utils = new Utils()
export class AddEmployee {
  AddEmployee() {

  }
  createUserInfo() {

    var fileName = '../cypress/fixtures/userinfo.json'
    var user = utils.generateUserInfo()
    utils.writeJson(fileName, user)
    addEmp.enterFirstName(user.firstName)
    addEmp.enterLastName(user.lastName)
    addEmp.toggleSwitch()
    addEmp.enterUserName(user.userName)
    addEmp.enterPassword(user.password)
    addEmp.enterConfPassword(user.confPass)
    addEmp.clickSubmit()

  }
  updateEmpInfo() {
    empInfo.updateNationality('Indian')
    empInfo.updateMaritalStatus('Married')
    empInfo.clickSave()

  }
  clickAdd() {
    empInfo.clickAdd()
  }
  createSecondUser() {
    this.clickAdd()

    var fileName = 'C:/CypressAutomation/cypress/fixtures/userinfo.json'
    var user = utils.generateUserInfo()
    utils.appendJson(fileName, user)

    addEmp.enterFirstName(user.firstName)
    addEmp.enterLastName(user.lastName)
    addEmp.toggleSwitch()
    addEmp.enterUserName(user.userName)
    addEmp.enterPassword(user.password)
    addEmp.enterConfPassword(user.confPass)
    
    addEmp.clickSubmit()
  }

  doLogout() {
    empInfo.clickLogout()
  }
}
