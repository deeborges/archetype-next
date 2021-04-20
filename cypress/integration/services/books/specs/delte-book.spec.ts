import * as Book from '../requests/delete-book';
import * as Get from '../requests/get-books';

describe('POST one book', () => {
  it('inserir um novo livro', () => {
    Get.allBooks().then((resAllBooks) => {
      cy.log(resAllBooks.body[0].ID);
    });
  });
});
