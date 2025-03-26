  Feature: Telnyx Homepage
  As a user
  I want to verify the homepage loads correctly
  So that I can access the website's main functionalities

  Scenario: Homepage loads with correct title and hero text
    Given I am on the Telnyx homepage
    Then the page title should be correct
    And the hero title should be displayed correctly
    And the homepage performance should meet expectations 