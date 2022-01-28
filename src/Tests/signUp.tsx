import signup from "../PageObject/signupPage";

context("Signup Test Suite", () => {
  beforeEach(() => {
    cy.visit("https://miro.com/signup");
  });

  it("Must not signup with empty form", () => {
    signup.getSubmitButton().click();
    cy.contains("Please enter your name.");
    cy.contains("Enter your email address.");
    cy.contains("Enter your password.");
    cy.contains("Please agree with the Terms to sign up.");
  });

  it("Must not signup with invalid email", () => {
    signup.getNameField().type("Luis");
    signup.getEmailField().type("invalidemail.com");
    signup.getPasswordField().type("1234567890");
    signup.getSignUpTerms().click({ force: true });
    signup.getSubmitButton().click();
    cy.contains("Enter a valid email address.");
  });

  it("Must not signup with less than 8 chars for password", () => {
    signup.getNameField().type("Luis");
    signup.getEmailField().type("validemail@gmail.com");
    signup.getPasswordField().type("123456");
    signup.getSignUpTerms().click({ force: true });
    signup.getSubmitButton().click();
    cy.contains("Please use 8+ characters for secure password.");
  });

  it("Must not signup without agreeing with terms and conditions", () => {
    signup.getNameField().type("Luis");
    signup.getEmailField().type("validemail@gmail.com");
    signup.getPasswordField().type("123456789");
    signup.getSubmitButton().click();
    cy.contains("Please agree with the Terms to sign up.");
  });

  it("Must check how week the  password is", () => {
    signup.getNameField().type("Luis");
    signup.getEmailField().type("validemail$@gmail.com");
    signup.getPasswordField().type("12345678");
    cy.contains("Weak password");
    signup.getPasswordField().clear().type("12345678!@##");
    cy.contains("So-so password");
    signup.getPasswordField().clear().type("12345678!@##@#$");
    cy.contains("Good password");
    signup.getPasswordField().clear().type("12345678!@##@#$@#$%$#");
    cy.contains("Great password");
  });

  it("Must not sigup  with email already registered", () => {
    signup.getNameField().type("Luis");
    signup.getEmailField().type(`validemail1@gmail.com`);
    signup.getPasswordField().clear().type("12345678!@##@#$@#$%$#");
    signup.getSignUpTerms().click({ force: true });
    signup.getSubmitButton().click();
    cy.contains("Sorry, this email is already registered");
  });

  it("Must sigup sucessful ", () => {
    const num = Math.random() * 0xfffff * 1000000;

    signup.getNameField().type("Luis");
    signup.getEmailField().type(`validemail${num}@gmail.com`);
    signup.getPasswordField().clear().type("12345678!@##@#$@#$%$#");
    signup.getSignUpTerms().click({ force: true });
    signup.getSubmitButton().click();
    cy.contains("Check your email");
  });
});
