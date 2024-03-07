// need to find an image using devtools and console jquery $('img[src="asdf.jpg"]') to make sure that image has
//naturalHeight:0
//naturalWidth:0

let img: HTMLImageElement;

describe("BROKEN IMAGE POSITIVE", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("herokuapp")}/broken_images`);
  });
  it("verify that image is broken", () => {
    cy.get("div.example img")
      .first()
      .should("be.visible")
      .and((el) => {
        img = el[0] as HTMLImageElement;
        expect(
          img.naturalHeight,
          `Image naturalHeight size is ${img.naturalHeight}`
        ).to.equal(0);
        expect(
          img.naturalWidth,
          `Image naturalWidth size is ${img.naturalWidth}`
        ).to.equal(0);
      });
  });

  it("verify that image is not broken", () => {
    cy.get("div.example img")
      .last()
      .should("be.visible")
      .and((el) => {
        img = el[0] as HTMLImageElement;
        expect(
          img.naturalHeight,
          `Image naturalHeight size is ${img.naturalHeight}`
        ).to.equal(160);
        expect(
          img.naturalWidth,
          `Image naturalWidth size is ${img.naturalWidth}`
        ).to.equal(160);
      });
  });
});

describe("BROKEN IMAGE NEGATIVE", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("herokuapp")}/broken_images`);
  });

  it("negative - verify that image is not broken", () => {
    cy.get("div.example img")
      .last()
      .should("be.visible")
      .and((el) => {
        img = el[0] as HTMLImageElement;
        expect(
          img.naturalHeight,
          `Image naturalHeight size is ${img.naturalHeight}`
        ).not.to.equal(0);
      });
  });
});
