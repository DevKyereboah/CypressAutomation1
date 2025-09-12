describe('Assertions', ()=>{
    it('implicit assertions', ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // cy.url()
        // .should('include', 'orangehrmlive.com')
        // cy.url()
        // .should('eq', "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // cy.url().should('contain', 'orangehrmlive')
       

        cy.url().should('include', 'orangehrmlive.com')
        .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain', 'orangehrmlive')
        .and('not.contain', 'greenhrm')

        cy.title().should('include', 'Orange')
        .and('eq', 'OrangeHRM')
        .and('contain', 'HRM')

        cy.get('.orangehrm-login-branding > img').should('be.visible')
        cy.get('.orangehrm-login-branding > img')
        .should('exist')

        // checking links on a page
        cy.xpath('//a').should('have.length', 5)

         cy.fixture('loginData').then((data)=>{
            cy.xpath('//input[@placeholder="Username"]').type(data.Username)
            cy.xpath('//input[@placeholder="Password"]').type(data.Password)
            cy.xpath("//button[normalize-space()='Login']").click()
            cy.url().should('contain', '/web/index.php/dashboard/index')
        })
        
})
})