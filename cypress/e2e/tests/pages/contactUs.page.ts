import PageBase from "./base.page";

export class ContactUsPage extends PageBase {
 
  getContactFormTitle() {
    return cy.get("main section h1");
  }
}
export const contactUsPage = new ContactUsPage();