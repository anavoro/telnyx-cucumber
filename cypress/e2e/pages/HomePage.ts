import { BasePage } from './BasePage';

export class HomePage extends BasePage {

  private selectors = {
    heroTitle: 'main section h1',
    heroSignUpButton: 'main section a:contains("Sign up")',
    headerSignUpButton: 'header a:not(#main-menu):contains("Sign up")',
    navigationMenu: '#main-menu-content',
    chatbotOpenIcon: 'div.c-bGYNvC > svg',
    chatbotCloseButton: 'button[data-state="open"].c-cODSYQ',
    chatbotTitle: 'h4:contains("Ask our AI assistant")',
    chatbotWelcomeMessage: ':contains("I\'m Telnyx\'s AI assistant.")',
    chatbotTextbox: '[placeholder="Type your question here"]'
  };

  visitHomePage(options?: Partial<Cypress.VisitOptions>) {
    cy.visit("/", options);
    return this;
  }

  getHeroTitle() {
    return cy.get(this.selectors.heroTitle);
  }

  getSignUpButtonInHeroSection() {
    return cy.get(this.selectors.heroSignUpButton);
  }

  getSignUpButtonInHeader() {
    return cy.get(this.selectors.headerSignUpButton);
  }

  verifyHomepageLoaded() {
    cy.get('h1').should('be.visible');
    return this;
  }

  verifyPerformance() {
    cy.request('/').then((response) => {
      cy.wrap(response.duration).should('be.lessThan', 5000);
    });
    return this;
  }


  openChatbot() {
    cy.get(this.selectors.chatbotOpenIcon).click();
    return this;
  }

  closeChatbot() {
    cy.get(this.selectors.chatbotCloseButton).click();
    return this;
  }

  getChatbotTitle() {
    return cy.contains(this.selectors.chatbotTitle);
  }

  getChatbotWelcomeMessage() {
    return cy.contains(this.selectors.chatbotWelcomeMessage);
  }

  getChatbotTextbox() {
    return cy.get(this.selectors.chatbotTextbox);
  }

 
  getPrimaryNavigationItems() {
    return cy.get(this.selectors.navigationMenu).find('a, button');
  }

  goToContactUs() {
    this.getSignUpButtonInHeroSection()
      .parent()
      .siblings('a')
      .contains('Contact us')
      .click();
    return this;
  }
}