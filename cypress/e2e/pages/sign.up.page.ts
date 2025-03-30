import PageBase from "./pase.bage"

export class SignUpPage extends PageBase {

  getSignUpFormTitle() {
    return cy.get("main section h1");
  }
}