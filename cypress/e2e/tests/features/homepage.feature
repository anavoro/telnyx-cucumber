Feature: Telnyx Homepage

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

  Scenario: Navigate to Sign Up page from header
    Given I am on the Telnyx homepage
    When I click on the "Sign up" button in the header
    Then I should be redirected to the Sign Up page
    And the Sign Up form title should be visible

  Scenario: Navigate to Sign Up page from main body
    Given I am on the Telnyx homepage
    When I click on the "Sign up" button in the main body
    Then I should be redirected to the Sign Up page from main body
    And the Sign Up form title should be visible

  Scenario: Verify Chatbot functionality
    Given I am on the Telnyx homepage
    When I open the chatbot
    Then the chatbot title should be visible
    And the chatbot welcome message should be visible
    And the chatbot textbox should be visible
    When I close the chatbot
    Then the chatbot title should not exist
    And the chatbot welcome message should not exist
    And the chatbot textbox should not exist