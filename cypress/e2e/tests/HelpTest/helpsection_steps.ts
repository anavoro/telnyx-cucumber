import { Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
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
      .invoke('text')
      .should('not.be.empty');
  });

  When('I close the chat', () => {
    homePageDesktop.getHelpSectionResponseWindow().should('not.exist');
    homePageDesktop.getHelpSectionTextbox()
      .should('be.visible')
      .should('be.enabled')  
      .type('Hello{enter}');
  
    homePageDesktop.getHelpSectionResponseWindow()
      .should('be.visible'); 

    homePageDesktop.closeHelpSection();
  });
  
  Then('the chat should not exist', () => {
    homePageDesktop.getHelpSectionResponseWindow()
      .should('not.exist');
  });
  

  When('I click on Model Scrolldown', () => {
    homePageDesktop.getModelDropdown();
  });
  
  When('I am choosing a model', function () {
    const models = ['anthropic/claude-3-7-sonnet-latest', 'mofixie-ai/ultravox-v0_4', 'google/gemma-2b-it', 'mometa-llama/Llama-2-13b-chat-hf'];  
    const randomModel = models[Math.floor(Math.random() * models.length)];
  
    homePageDesktop.getModelOption(randomModel);
    
    cy.wrap(randomModel).as('selectedModel');  // Store selected model for later use
  });
  
  When('I type a message in the help section', () => {
    homePageDesktop.getHelpSectionTextbox()
      .should('be.visible')
      .should('be.enabled')
      .type('Hello, I need assistance');
  });
  
  Then('I should receive a response', () => {
    homePageDesktop.getHelpSectionResponseWindow()
      .should('be.visible')
      .should('not.be.empty');
  });
  
  Then('I should see the model name at the top of the response window', function () {
    homePageDesktop.getHelpSectionResponseWindow()
      .should('be.visible')
      .should('contain.text', this.selectedModel);  // Check that the model name is in the response window
  });
  