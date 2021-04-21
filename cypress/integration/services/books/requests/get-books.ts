/// <reference types="cypress" />

interface AllBookTypes {
  id: number;
  title: string;
  description: string;
  pageCount: number;
  excerpt: string;
  publishDate: string;
}

function allBooks() {
  return cy.request({
    method: 'GET',
    url: '/v1/Books',
    failOnStatusCode: false // nao falha caso o status seja diferente de 200
  });
}

export { allBooks };
