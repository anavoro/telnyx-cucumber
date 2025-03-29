import { Given, When, Then, } from '@badeball/cypress-cucumber-preprocessor';
import HomePageDesktop from "../../pages/home.page.desktop"; 
import HomePageMobile from '../../pages/HomePageMobile';
import HomePage from '../../pages/home.page';

interface NavItem {
    text: string;
    link: string;
  }
  
  function createHomePageObject(viewType: 'Desktop' | 'Mobile'): HomePage {
    const viewportConfigs = {
      'Desktop': { width: 1920, height: 1080, pageObject: HomePageDesktop },
      'Mobile': { width: 375, height: 667, pageObject: HomePageMobile }
    };
  
    const config = viewportConfigs[viewType];
    cy.viewport(config.width, config.height);
    return new config.pageObject();
  }
  
  Given('I am on the homepage in {string} view', (viewType: 'Desktop' | 'Mobile') => {
    const homePage = createHomePageObject(viewType);
    homePage.visitHomePage();
    Cypress.env('currentHomePage', homePage);
  });
  
  When('I open the navigation menu', () => {
    const homePage: HomePage = Cypress.env('currentHomePage');
    homePage.openNavigation();
  });
  
  Then('the primary navigation should contain the following items:', (dataTable: { rawTable: string[][] }) => {
    const homePage: HomePage = Cypress.env('currentHomePage');
    const expectedNavItems = dataTable.rawTable.flat();
  
    homePage
      .getPrimaryNavigationItems()
      .should('be.visible')
      .each(($item, index) => {
        cy.wrap($item).should('have.text', expectedNavItems[index]);
      });
  });
  
  Then('the secondary navigation should contain:', (dataTable: { hashes(): NavItem[] }) => {
    const homePage: HomePage = Cypress.env('currentHomePage');
    
    dataTable.hashes().forEach((item: NavItem) => {
      homePage
        .getSecondaryNavigationLinkByText(item.text)
        .should('have.attr', 'href', item.link);
    });
  
    homePage.closeNavigation();
  });