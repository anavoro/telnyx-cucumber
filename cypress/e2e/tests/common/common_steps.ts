import { Given, When, Then, DataTable} from '@badeball/cypress-cucumber-preprocessor';
import { homePageDesktop } from "../pages/homeDesktop.page"; 

Given('I am on the Telnyx homepage', () => {
  homePageDesktop.visitHomePage()
});
