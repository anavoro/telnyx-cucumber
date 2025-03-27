import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePageDesktop from "../../pages/HomePageDesktop"; 
import { ContactUsPage } from 'cypress/e2e/pages/ContactUsPage';

const homePageDesktop = new HomePageDesktop();
const contactUsPage = new ContactUsPage();

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

Then('the Contact Us form title should be visible and contain {string}', (title) => {
  contactUsPage
    .getContactFormTitle()
    .should('be.visible')
    .should('have.text', title);
});
