describe('about page content check ', ()=>{
    it('should display title and text', ()=>{
        cy.visit("/about")
        cy.get('#about').children().should('have.length',2)
        cy.get('h1').contains('About')
    })
})