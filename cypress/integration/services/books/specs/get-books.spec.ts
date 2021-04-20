import * as Books from '../requests/get-books';

describe('GET All books', () => {
  it('listar todos os livros', () => {
    Books.allBooks().should((response) => {
      cy.log(response.status);
      cy.log(response.statusText);
    });
  });
});
