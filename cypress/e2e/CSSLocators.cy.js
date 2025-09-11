
describe("CSSLocators", ()=>{
    beforeEach("csslocators", ()=>{
        //cy.viewport(550,750)
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.fixture('loginData').then((data)=>{
            cy.xpath('//input[@placeholder="Username"]').type(data.Username)
            cy.xpath('//input[@placeholder="Password"]').type(data.Password)
            cy.xpath("//button[normalize-space()='Login']").click()
            cy.url().should('contain', '/web/index.php/dashboard/index')
        })
    })

      it("should test second page", ()=>{
            cy.get('[class="oxd-grid-item oxd-grid-item--gutters orangehrm-quick-launch-card"]')
            .should('be.visible')
            .and('have.length', 6)
        })

})