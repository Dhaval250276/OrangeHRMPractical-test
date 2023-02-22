import Login from "../../PageObjects/LoginPage.js"

// using POM

describe('Login', () => {
    it('Positive Test', () => {
      cy.visit("/")
 const ln=new Login();
 ln.setUserName(Cypress.env('userName'))
 ln.setPassword(Cypress.env('password'))
 ln.clickSubmit();
 ln.verifyLogin(); 

})

     })

    // describe ('Recruit', ()=> {

     // it ('Recruitment Test', () => {
        // cy.get('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/div/div').click()
        // cy.get('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[2]/div/div[2]/div/div').click()
        // cy.get('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[3]/div/div[2]/div') .click()
        // cy.get('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[4]/div/div[2]/div/div') .click()
        // cy.get("input[@placeholder='Type for hints...']").type();
        // cy.get("input[@placeholder='Enter comma seperated words...']").type();
        // cy.get('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[3]/div/div/div/div[2]/div/div').click();        
      //})
     //})