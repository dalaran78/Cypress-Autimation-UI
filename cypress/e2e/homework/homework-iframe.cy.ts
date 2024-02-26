// npm install -D cypress-iframe

import { IFramePage } from "../../../pages/homework_pages/Iframe";

describe("IFRAME", () => {
  beforeEach(() => {
    IFramePage.visit();
  });

  beforeEach(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
  });

  it("test Frame 1 with Button click", () => {
    IFramePage.clickButtonInsideMainFrame();
  });

  it("test Frame 2 with Button click", () => {
    IFramePage.clickButtonInsideNestedFrame();
  });

  // it('test Frame 3 with Button click', () => {
  //     IFramePage.clickButtonInsideFrame3();
  // });

  // it('test Frame 4 with Button click', () => {
  //     IFramePage.clickButtonInsideFrame4();
  // });
});
