class IFrame {
    private iframe: string = "#frame1";
    private frame1Title: string = ".navbar-brand";
    private iFrame1Button: string = "#click_me_1";

    // Посещение страницы, содержащей iframe
    visit() {
        cy.visit(`${Cypress.env("playground")}/frames`);
    }

    // Клик по кнопке внутри iframe после проверки заголовка фрейма
    clickButtonInsideFrame() {
        // Переключаемся внутрь iframe
        cy.get(this.iframe).then($iframe => {
            const $iframeBody = $iframe.contents().find('body');
            // Проверяем заголовок фрейма
            cy.wrap($iframeBody).find(this.frame1Title).should('have.text', 'Frame1 (ID=frame1)');
            // Кликаем на кнопку внутри iframe
            cy.wrap($iframeBody).find(this.iFrame1Button).click();
        });
    }
}

export const IFramePage = new IFrame();
