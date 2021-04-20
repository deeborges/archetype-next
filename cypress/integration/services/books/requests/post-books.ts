/// <reference types="cypress" />

import Book from '../payloads/book.json';

export function addBook() {
  return cy.request({
    method: 'POST',
    url: '/v1/Books',
    failOnStatusCode: false,
    body: Book
  });
}
