Feature: Homepage

  Scenario: First visit
    When the homepage is working
    Then it says Hello world!

  Scenario: Log in
    When the user is on the sign in page
    And the user types in their email and password
    And clicks the sign in button
    Then they should be signed in