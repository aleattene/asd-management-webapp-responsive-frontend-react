
describe('Footer', () => {
  it('should display the current year', () => {
    cy.visit('localhost:3000/');
    const currentYear = new Date().getFullYear().toString();
    cy.get('footer').contains(currentYear);
  });

  it('should display the correct text', () => {
    cy.visit('localhost:3000/');
    cy.get('footer').contains('ASD Management');
  });
});