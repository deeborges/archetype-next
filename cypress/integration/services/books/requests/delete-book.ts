/// <reference types="cypress" />

export function deleteBook(bookID: number) {
  return cy.request({
    method: 'DELETE',
    url: `/v1/Books${bookID}`,
    failOnStatusCode: false
  });
}
