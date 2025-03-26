import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePageDesktop from '../../e2e/pages/HomePageDesktop'; 

console.log("HomePageDesktop:", HomePageDesktop);
Cypress.log({ name: "HomePageDesktop", message: JSON.stringify(HomePageDesktop) });

const homePageDesktop = new HomePageDesktop();

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