/* eslint-disable @typescript-eslint/no-explicit-any */
declare namespace Cypress {
  interface Response {
    allRequestResponses: any[];
    body: any;
    duration: number;
    headers: { [key: string]: string };
    isOkStatusCode: boolean;
    redirectedToUrl: string;
    requestHeaders: { [key: string]: string };
    status: number;
    statusText: string;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Chainable<Subject = any> {
    request(url: string, body?: RequestBody): Chainable<Response>;
    request(
      method: HttpMethod,
      url: string,
      body?: RequestBody
    ): Chainable<Response>;
    request(options: Partial<RequestOptions>): Chainable<Response>;
  }
}
