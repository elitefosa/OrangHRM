class LandingPage {

    Navigate () {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }
    Username (){
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .clear()
        .type('Admin')
        return this
    }
     Password () {
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .clear ()
        .type('admin123')
        return this
     }
     Login (){
        cy.get('.oxd-button')
        .click()
     }

    
}

export default LandingPage 