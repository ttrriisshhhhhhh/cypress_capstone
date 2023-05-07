class Login {

    txtEmail = 'input#Email'
    txtPass = 'input#Password'
    checkboxRememberMe = '#RememberMe'
    btnLogin = '.button-1'

    //Methods

    enterEmail(emailID) {
        cy.get(this.txtEmail).clear().type(emailID)
    }

    enterPassword(passID) {
        cy.get(this.txtPass).clear().type(passID)
    }

    clickRememberMe() {
        cy.get(this.checkboxRememberMe).check()
    }

    clickLogin() {
        cy.get(this.btnLogin).click()
    }

}

export default Login