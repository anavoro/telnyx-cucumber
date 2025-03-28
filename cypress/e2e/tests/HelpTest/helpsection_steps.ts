import { Given, When, Then, Before } from '@badeball/cypress-cucumber-preprocessor';
import HomePageDesktop from "../../pages/home.page.desktop"; 

const homePageDesktop = new HomePageDesktop(); 

Given('I am on the Telnyx homepage', () => {
  homePageDesktop.visitHomePage()
});

Then('the chatbot title should be {string}', (expectedTitle: string) => {
    homePageDesktop.getHelpSectionTitle().should('have.text', expectedTitle);
  });


Then('the chatbot input textbox should be visible', () => {
 homePageDesktop.getHelpSectionTextbox().should('be.visible');
});

When('I enter a query {string}', (query: string) => {
  homePageDesktop.getHelpSectionTextbox().type(query);
});

When('I submit the query', () => {
  homePageDesktop.getHelpSectionTextbox()
    .type('{enter}');
  cy.wait(2000);
});

Then('the chatbot should provide a response', () => {
    homePageDesktop
      .getHelpSectionResponseWindow()
      .should('be.visible')
      .and('have.text') 
      .and('not.have.text', ''); 
  });

When('I close the chat', () => {
  homePageDesktop.closeHelpSection();
});

Then('the chat should no longer be visible', () => {
  homePageDesktop.getHelpSectionResponseWindow()
    .should('not.exist');
});