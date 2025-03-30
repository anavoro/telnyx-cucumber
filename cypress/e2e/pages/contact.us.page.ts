import PageBase from "./pase.bage";

export class ContactUsPage extends PageBase {
 
  getContactFormTitle() {
    return cy.get("main section h1");
  }
}