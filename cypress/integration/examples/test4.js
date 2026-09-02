/// <reference types="Cypress" />
 
describe('My Second Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
 
cy.visit("https://rahulshettyacademy.com/AutomationPractice/#/")
cy.get('#alertbtn').click()
cy.get('[value="Confirm"]').click()



//window:alert
cy.on('window:alert',(str) => {
    expect(str).to.equal('Hello , share this practice page and share your knowledge')
})
})
})