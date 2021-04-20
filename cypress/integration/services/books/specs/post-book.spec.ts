import * as Book from '../requests/post-books';

describe('POST one book', () => {
  it('inserir um novo livro', () => {
    Book.addBook().should((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.Title).to.eq(/Ola mundo/);
    });
  });
});
