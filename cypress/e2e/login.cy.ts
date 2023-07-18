describe('Visit Page', () => {
  it('passes', () => {
    cy.visit('http://autopract.com/')
    expect(true).to.equal(true)
  })

  it('Failed Test', () => {
    cy.visit('http://autopract.com/')
    expect(true).to.equal(false)
  })

  
})