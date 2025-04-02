  class BasePage {
    
  visit(path: string = "") {
    cy.visit(path);
    return this;
  }

  getPageTitle() {
    return cy.title();
  }

  getPageUrl() {
    return cy.url();
  }
}

export default BasePage;