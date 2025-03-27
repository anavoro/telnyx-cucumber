import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePageDesktop from "../../pages/HomePageDesktop"; 
import { ContactUsPage } from 'cypress/e2e/pages/ContactUsPage';
import { SignUpPage } from 'cypress/e2e/pages/SignUpPage';

const homePageDesktop = new HomePageDesktop();
const contactUsPage = new ContactUsPage();
const signUpPage = new SignUpPage();

Given('I am on the Telnyx homepage', () => {
  homePageDesktop.visitHomePage({ timeout: 5 * 1000 });
});

Then('the page title should be correct', () => {
  homePageDesktop
    .getPageTitle()
    .should(
      'eq',
      'Telnyx - Global solutions for Communications, IOT, AI, Compute and Networking'
    );
});

Then('the hero title should be displayed correctly', () => {
  homePageDesktop
    .getHeroTitle()
    .should('have.text', 'Experience AI-powered connectivity');
});

Then('the homepage performance should meet expectations', () => {
  homePageDesktop.verifyPerformance();
});

Then('the footer should be visible', () => {
  homePageDesktop.getFooter().should('be.visible');  
});

Then('the footer should contain "©"', () => {
  homePageDesktop.getFooter().should('contain', '©'); 
});

When('I go to the Contact Us page', () => {
  homePageDesktop.goToContactUs();
});

Then('the page URL should be {string}', (url) => {
  cy.url().should('eq', url);
});

Then('the Contact Us form title should be visible and contain Talk to an expert', () => {
  contactUsPage
    .getContactFormTitle()
    .should('be.visible')
    .invoke('text')
    .should('include', 'Talk to an expert');
});

When('I click on the "Sign up" button in the header', () => {
  homePageDesktop.getSignUpButtonInHeader().click();
});

Then('I should be redirected to the Sign Up page', () => {
  signUpPage.getPageUrl().should('eq', 'https://telnyx.com/sign-up');
});

Then('the Sign Up form title should be visible', () => {
  signUpPage
    .getSignUpFormTitle()
    .should('be.visible')
    .should('have.text', 'Create a Telnyx account');
});

When('I click on the "Sign up" button in the main body', () => {
  homePageDesktop.getSignUpButtonInHeroSection().click();
});

Then('I should be redirected to the Sign Up page from main body', () => {
  signUpPage.getPageUrl().should('eq', 'https://telnyx.com/sign-up');
});

When('I open the chatbot', () => {
  homePageDesktop.openChatbot();
});

When('I close the chatbot', () => {
  homePageDesktop.closeChatbot();
});

Then('the chatbot title should be visible', () => {
  homePageDesktop.getChatbotTitle().should('be.visible');
});

Then('the chatbot welcome message should be visible', () => {
  homePageDesktop.getChatbotWelcomeMessage().should('be.visible');
});

Then('the chatbot textbox should be visible', () => {
  homePageDesktop.getChatbotTextbox().should('be.visible');
});

Then('the chatbot title should not exist', () => {
  homePageDesktop.getChatbotTitle().should('not.exist');
});

Then('the chatbot welcome message should not exist', () => {
  homePageDesktop.getChatbotWelcomeMessage().should('not.exist');
});

Then('the chatbot textbox should not exist', () => {
  homePageDesktop.getChatbotTextbox().should('not.exist');
});