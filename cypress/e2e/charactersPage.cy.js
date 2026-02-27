describe("Character pages", () => {

    beforeEach(()=> {
        cy.visit("/character") 
    });

    //test if 20 cards are visible
    it("tests if cards found on page", () => {
        cy.get("#cardHolder").children().should("have.length",20);
    });

    //if view deatils button for rick sanchez is exisit and  visible
    it("checks for detail button on card" ,() => {
        cy.get("button").should("contain.text", 'View Details')
        cy.get("#RickSanchez").click()
    });

    //if button navs correctly to details for rick 
    it("checks if detail buttons takes goes to detail page ", ()=> {
        cy.get("#RickSanchez").click()
        cy.url().should("include",'/characterdetails/1')
        cy.get('#characterDetails').should('exist')

    })

    it("should add and remove chacter from favorites", ()=>{
        
        cy.get('div:nth-child(2) div.flex #addfav').click();
        cy.get('div:nth-child(1) > div.flex > #addfav').click();
        cy.get('div:nth-child(3) #addfav').click();
        cy.get('div:nth-child(4) #addfav').click();
        cy.get('#basic-navbar-nav a[role="button"]').click();
        cy.get("#cardHolder").children().should("have.length",4);
        cy.get('#cardHolder div:nth-child(1) > div.flex > button.btn-danger').click();
        cy.get('#cardHolder div:nth-child(1) > div.flex > button.btn-danger').click();
        cy.get("#cardHolder").children().should("have.length",2);



    })

});