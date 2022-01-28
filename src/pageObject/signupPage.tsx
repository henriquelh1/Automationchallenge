export default {
  getNameField() {
    return cy.get('[data-testid="mr-form-signup-name-1"]');
  },
  getEmailField() {
    return cy.get('[data-testid="mr-form-signup-email-1"]');
  },
  getPasswordField() {
    return cy.get('[data-testid="mr-form-signup-password-1"]');
  },
  getSignUpTerms() {
    return cy.get("#signup-terms");
  },
  getSignUpSubscribe() {
    return cy.get("#signup-subscribe");
  },
  getSubmitButton() {
    return cy.get('[data-testid="mr-form-signup-btn-start-1"]');
  },
};
