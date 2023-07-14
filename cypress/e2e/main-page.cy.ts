describe('Main Page', () => {
  const getPostTiles = () => cy.get('.ap-post-tile');
  const getSearchInput = () => cy.get('.ap-search-input > input');

  beforeEach(() => {
    cy.visit('/');
  });

  it('has header title', () => {
    cy.get('.ap-header-title').contains('ANGULAB');
  });

  it('has main section heading', () => {
    cy.get('h1').should('contain', 'Post list');
  });

  it('has post tiles', () => {
    getPostTiles().should('have.length', 4);
  });

  it('should filter posts based on search input value', () => {
    getSearchInput().type('First');
    getPostTiles()
      .should('have.length', 1)
      .should('contain.text', 'First post');
  });

  it('should reset posts on clearing search input', () => {
    getSearchInput().clear();
    getPostTiles().should('have.length', 4);
  });
});
