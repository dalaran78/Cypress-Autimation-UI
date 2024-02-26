it("network request spy", function () {
  // Load fixture data
  cy.fixture("progress.json").as("data");

  // Intercept login request
  cy.intercept("POST", "*/login").as("login");

  // Intercept course request and force 500 error
  cy.intercept(
    `https://server-stage.pasv.us/course/coursesProgress/${Cypress.env("USERID_LOCAL_STAGE")}`,
    {
      statusCode: 500,
    },
  ).as("course");

  // cy.intercept({
  //     method: 'GET',
  //     url: 'https://server-stage.pasv.us/course/coursesProgress/5fb95c1f360c14003c7ab541',
  //     },
  //     (req) => {
  //         req.continue((res) => {
  //             if (res.statusCode === 200) {
  //                 throw new Error('ERROR 200');
  //             }
  //         });
  //     }
  // ).as('course');

  // Perform login actions
  cy.visit(`${Cypress.env("stage")}/user/login`);
  cy.get("#normal_login_email").type(Cypress.env("EMAIL_LOCAL_STAGE"));
  cy.get("#normal_login_password").type(Cypress.env("PASSWORD_LOCAL_STAGE"), {
    log: false,
  });
  cy.get('button[type="submit"]').click();

  // Wait for login response and verify status code
  cy.wait("@login").then((wholeResponse) => {
    console.log(wholeResponse, "res");
    const id = wholeResponse.response.body.payload.user._id;
    cy.location().should((loc) => {
      console.log(loc, "loc");
      expect(loc.href).to.eq(`https://stage.pasv.us/profile/${id}`);
      expect(wholeResponse.response.statusCode).to.eq(200);
    });
  });

  // Visit course progress page and verify response
  cy.visit(
    `https://stage.pasv.us/profile/${Cypress.env("USERID_LOCAL_STAGE")}/progress`,
  );
  cy.wait("@course").then((el) => {
    console.log(el, "response");
  });
});
