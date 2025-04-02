import BasePage from "./base.page"

abstract class HomePage extends BasePage {

  visitHomePage(options?: Partial<Cypress.VisitOptions>) {
    cy.visit("/", options);
    return this;
  }

  abstract openNavigation(): void;
  abstract closeNavigation(): void;

  getPrimaryNavigationItems() {
    return cy.get("#main-menu-content").find("a, button");
  }

  abstract getSecondaryNavigationLinkByText(text: string): any;

  getHeroTitle() {
    return cy.get("main section h1");
  }

  verifyHomepageLoaded() {
    cy.get("h1").should("be.visible");
    return this;
  }

  verifyPerformance() {
    cy.request("/").then((response) => {
      cy.wrap(response.duration).should("be.lessThan", 5000);
    });
    return this;
  }

  getFooter() {
    return cy.get("footer");
  }

  goToContactUs() {
    this.getSignUpButtonInHeroSection()
      .parent()
      .siblings("a")
      .contains("Contact us")
      .click();
    return this;
  }

  getSignUpButtonInHeader() {
    return cy.get("header a:not(#main-menu)").contains("Sign up");
  }

  getSignUpButtonInHeroSection() {
    return cy.get("main section a").contains("Sign up");
  }

  openChatbot() {
    cy.get("div.c-bGYNvC > svg").click();
    return this;
  }

  closeChatbot() {
    cy.get('button[data-state="open"].c-cODSYQ').click();
    return this;
  }

  getChatbotTitle() {
    return cy.contains("h4", "Ask our AI assistant");
  }

  getChatbotWelcomeMessage() {
    return cy.contains("I'm Telnyx's AI assistant.");
  }

  getChatbotTextbox() {
    return cy.get(`[placeholder="Type your question here"]`);
  }

  getHelpSectionTitle() {
  return cy.contains("h3", "What can I help with?");
  }
  
  getHelpSectionTextbox() {
   return cy.get('[placeholder="Enter text here"]');
  }
  
  closeHelpSection() {
    cy.contains('Close chat') 
    .click({ force: true });

    return this;
  }

  checkModelName(modelName: string) {
   return cy.get('.PJLV').should('include.text', modelName);
  }

  getHelpSectionResponseWindow() {
   return cy.get('section[class^="c-cHwKMe"]');
  }
  
    getModelDropdown() {
      cy.get('button.c-ewUecD.PJLV')
        .filter(':contains("Choose model")') 
        .invoke('css', 'display', 'block')  
        .click();  

        return this;
    }

    selectModel(modelName: string) {
    

  cy.get('button[data-state="closed"].c-lgwftA')
  .click({force:true});

      cy.get('div[role="menuitem"]')
      .contains(modelName)
      .click({ force: true });

 cy.get('form.c-iuGHFg')
        .find('button[type="submit"]')
        .click();
      
      return this;
    }
  
    getSuggestedTopicsContainer() {
      return cy.contains('label', 'Suggested topics').parent();
    }
    
    getSuggestedTopicButton(topic: string) {
      return this.getSuggestedTopicsContainer()
        .find('button')
        .contains(topic);  
    }

}

export default HomePage;

