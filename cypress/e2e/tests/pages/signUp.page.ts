import PageBase from "./base.page"

export class SignUpPage extends PageBase {

  getSignUpFormTitle() {
    return cy.get("main section h1");
  }
}