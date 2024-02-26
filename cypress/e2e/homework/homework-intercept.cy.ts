// Описание теста
describe("INTERCEPT", () => {
  // Тест с имитацией сетевого запроса 'Katas'
  it("network request spy Katas", function () {
    // **1.** Загрузить фикстуру (ака. Тестовые данные) с данными прогресса Katas
    cy.fixture("katas.json").as("data");
    // **2.** Имитировать POST-запрос на /login
    cy.intercept("POST", "*/login").as("login");
    //**3.** Имитировать GET-запрос на progress/codewars/completed:id с данными прогресса из фикстуры (ака. Тестовые данные)
    cy.intercept(
      "https://server-stage.pasv.us/progress/codewars/completed/65d4265ddb75721937e5329c",
      { fixture: "katas.json" },
    ).as("codewars");
    // **4.** Посетить страницу входа в систему
    cy.visit(`${Cypress.env("stage")}/user/login`);
    // **5.** Ввести логин и пароль (сделать скрытым ввод пароля)
    cy.get("#normal_login_email").type(Cypress.env("email"));
    cy.get("#normal_login_password").type(Cypress.env("password"), {
      log: false,
    });
    // **6.** Нажать кнопку входа
    cy.get('button[type="submit"]').click();
    // **7.** Дождаться завершения имитированного запроса login и проверить ответ
    cy.wait("@login").then((wholeResponse) => {
      console.log(wholeResponse, "res");
      cy.log("123");
      // **8. Извлечь идентификатор пользователя из тела ответа**
      let id = wholeResponse.response.body.payload.user._id;
      // **9. Проверить, перенаправлено ли на страницу профиля с верным URL**
      cy.location().should((loc) => {
        console.log(loc, "loc");
        expect(loc.href).to.eq(`https://stage.pasv.us/profile/${id}`);
        expect(wholeResponse.response.statusCode).to.eq(200);
      });
    });
    // **10. Посетить страницу прогресса курса**
    cy.visit("https://stage.pasv.us/profile/65d4265ddb75721937e5329c/katas");
    // **11. Дождаться завершения имитированного запроса codewars и сравнить ответ с данными из фикстуры**
    cy.wait("@codewars").then((el) => {
      console.log(el, "response");
      cy.wrap(this.data).should("deep.equal", el.response.body);
    });
  });
});
