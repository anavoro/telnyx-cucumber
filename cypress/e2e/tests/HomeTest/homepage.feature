  Feature: Telnyx Homepage
  As a user
  I want to verify the homepage loads correctly
  So that I can access the website's main functionalities

  Scenario: Homepage loads with correct title and hero text
    Given I am on the Telnyx homepage
    Then the page title should be correct
    And the hero title should be displayed correctly
    And the homepage performance should meet expectations 

  Scenario: Verify footer on the homepage
    Given I am on the Telnyx homepage
    Then the footer should be visible
    And the footer should contain "©"

Scenario: Verify the Contact Us form on the homepage
    Given I am on the Telnyx homepage
    When I go to the Contact Us page
    Then the page URL should be "https://telnyx.com/contact-us"
    And the Contact Us form title should be visible and contain Talk to an expert