import HomePage from "./home.page";

class HomePageDesktop extends HomePage {
  constructor() {
    super();
  }

  openNavigation() {}
  closeNavigation() {}

  getPrimaryNavigationItems(): Cypress.Chainable {
    return cy.get("#main-menu-content").find("a, button");
  }

  getSecondaryNavigationLinkByText(text: string): Cypress.Chainable {
    return cy.contains("header a", text).should("be.visible");
  }
}

export default HomePageDesktop; 
 
