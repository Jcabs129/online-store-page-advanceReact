describe('My First Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:7777/');
    cy.get('#__next a:nth-child(2)').click();
    cy.get('#__next input[type=email]').first().type('test@example.com');
    cy.get('#__next input[type=password]').first().type('testing123');
    cy.get('#__next button').first().click();
    cy.expect('button:nth-child(5)').to.exist;
  });

  it('To land on cart page', () => {
    cy.get('button:nth-child(6)').click();
    cy.wait(500);
    cy.get('class[id="root"]').find(
      '#root > form > div > div.CardField-input-wrapper.is-ready-to-slide > span.CardField-number.CardField-child > span:nth-child(2) > div > div.CardNumberField-input-wrapper > span'
    );
  });
});
