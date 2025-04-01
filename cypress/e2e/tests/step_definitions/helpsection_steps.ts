import { When, Then, DataTable} from '@badeball/cypress-cucumber-preprocessor';
import { homePageDesktop } from "../pages/homeDesktop.page"; 

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
    const models = [
      'anthropic/claude-3-7-sonnet-latest', 
      'fixie-ai/ultravox-v0_4', 
      'google/gemma-2b-it', 
      'meta-llama/Llama-2-13b-chat-hf'
    ]; 
    const randomModel = models[Math.floor(Math.random() * models.length)]; 
    
    homePageDesktop.selectModel(randomModel);
    
    cy.wrap(randomModel).as('selectedModel'); 
  });  
  
  When('I type a message in the help section', () => {
    homePageDesktop.getHelpSectionTextbox()
      .should('be.visible')
      .should('be.enabled')
      .type('Hello, I need assistance{enter}');
  });
  
  Then('I should receive a response', () => {
    homePageDesktop.getHelpSectionResponseWindow()
      .should('be.visible')
      .should('not.be.empty');
  });
  
  Then('I should see the model name at the top of the response window', function () {
    homePageDesktop.checkModelName(this.selectedModel)
      .should('contain.text', this.selectedModel);  
  });
  
  When('I view the following suggested topics:', function (dataTable: DataTable) {
  
    this.topics = dataTable.hashes();
    
    this.topics.forEach((row: { 'Suggested Topics': string }) => {
      cy.contains('button', row['Suggested Topics']).should('be.visible');
    });
  });
  
  Then('I should see the topic in the response window', function () {
    const randomIndex = Math.floor(Math.random() * this.topics.length);
    const randomTopic = this.topics[randomIndex]['Suggested Topics'];
    
    homePageDesktop.getSuggestedTopicButton(randomTopic).should('be.visible').click();
    homePageDesktop.getHelpSectionResponseWindow().should('be.visible');
    homePageDesktop.getHelpSectionResponseWindow().should('contain.text', randomTopic);
});