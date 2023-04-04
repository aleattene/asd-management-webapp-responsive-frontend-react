
describe('Carousel', () => {
    it('renders the carousel with three slides', () => {
        cy.visit('localhost:3000/');
        cy.get('div.carousel').find('img').should('have.length', 3);
    });
});