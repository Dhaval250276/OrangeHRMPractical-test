class Login
{
    txtUserName="input[placeholder='Username']";
    txtPassword="input[placeholder='Password']";
    btnSubmit="button[type='submit']";
    lblMessage=".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module";

    /**
     * @param {any} username
     * This method is used to find username locator using cssSelector.
     */
    setUserName(username) 
        {
            cy.get(this.txtUserName).type(username);
            
        }
    /**
     * @param {any} password
     *  This method is used to find Password locator using cssSelector.

     */
    setPassword(password)
        {
            cy.get(this.txtPassword).type(password);

        }
    clickSubmit() // click event when click on login using cssSelector
        {
        cy.get(this.btnSubmit).click();
        
        }

     verifyLogin()// Verify Login by finding title using cssSelector
        {
        cy.get(this.lblMessage).should('have.text','Dashboard');
        }
    

   }
export default Login;


