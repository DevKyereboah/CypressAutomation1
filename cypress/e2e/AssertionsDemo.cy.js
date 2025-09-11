describe('Assertions', ()=>{
    it('implicit assertions', ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.url()
        .should('include', 'orangehrmlive.com')
        cy.url()
        .should('eq', "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    })
})