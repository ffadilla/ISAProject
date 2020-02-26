describe('LoginSuite', function()
{
  it('LoginISA', function()
  {
    cy.visit('http://staging.isa-platform.hacktiv8.com')
    cy.get('a').click()
    cy.get('#user_email').type('ffadilla@hacktiv8.com')
    cy.get('#user_password').type('Jakarta90')
    cy.get('.actions > input').click()
    cy.title().should('include','Institutions - Isa Platform')
    cy.get('[type="submit"]').click()
  })

})