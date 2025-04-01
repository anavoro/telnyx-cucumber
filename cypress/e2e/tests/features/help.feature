Feature: "What can I help with?" section

  Scenario: Verify help section presence
    Given I am on the Telnyx homepage
    Then the chatbot title should be "What can I help with?"
    And the chatbot input textbox should be visible

  Scenario: Sending a basic query to the help section
    Given I am on the Telnyx homepage
    When I enter a query "What products does Telnyx offer?"
    And I submit the query
    Then the chatbot should provide a response

  Scenario: Help section closure
    Given I am on the Telnyx homepage
    When I close the chat
    Then the chat should not exist

  Scenario: Selecting a model and receiving a response based on the model
    Given I am on the Telnyx homepage
    When I click on Model Scrolldown
    And I am choosing a model
    And I type a message in the help section
    Then I should receive a response
    And I should see the model name at the top of the response window

  Scenario: Verify that the help section returns correct answers for suggested topics
    Given I am on the Telnyx homepage
    When I view the following suggested topics:
      | Suggested Topics                                                  |
      | Draft a 10DLC messaging campaign                                  |
      | What is an eSIM?                                                  |
      | What are some use cases of LLMs for real-time voice or messaging? |
      | How can bi-directional streaming improve my call center?          |
    Then I should see the topic in the response window