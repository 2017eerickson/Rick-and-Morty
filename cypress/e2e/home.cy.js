
describe('checks home page display and page navagation ', ()=>{
    beforeEach(()=>{
        cy.visit("/")
    })
    //tests banner is visible
    it("displays banner on intial load",() =>{
        cy.get("#banner").should("be.visible")

        })
    
    it('should navigate correctly betweeen pages', ()=>{
        cy.get("nav a").contains('Home').click();
        cy.url().should('include','/')

        cy.get('nav a').contains('About').click();
        cy.url().should('include','/about')

        cy.get('nav a').contains('Characters').click()
        cy.url().should('include','/character')

        cy.get('nav a').contains('Favorite Chaarcters').click()
        cy.url().should('include','/favoriteCharactersPage')

    })

    
    });

    


