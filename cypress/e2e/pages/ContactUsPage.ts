import PageBase from "./PageBase";

export class ContactUsPage extends PageBase {
  constructor() {
    super();
  }

  getContactFormTitle() {
    return cy.get("main section h1");
  }
}