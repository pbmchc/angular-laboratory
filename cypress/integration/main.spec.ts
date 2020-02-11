describe('Main Page', () => {
    before(() => {
        cy.visit('/');
    });

    it('has header title', () => {
        cy.get('.ap-header-title').contains('ANGULAB');
    });

    it('has main section heading', () => {
        cy.get('h1').should('contain', 'Post list');
    });
});
