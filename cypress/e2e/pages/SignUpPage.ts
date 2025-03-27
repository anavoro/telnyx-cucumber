import PageBase from "./PageBase"

export class SignUpPage extends PageBase {
  constructor() {
    super();
  }

  getSignUpFormTitle() {
    return cy.get("main section h1");
  }
}