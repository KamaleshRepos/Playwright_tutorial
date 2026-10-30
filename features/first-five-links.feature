Feature: The first five examples on The Internet
  As a visitor
  I want to open the first five examples from the home page
  So that I can verify the examples are available and usable

  Background:
    Given I open the home page

  Scenario: Open A/B Testing
    When I open the "A/B Testing" example
    Then I should see a heading containing "A/B Test"

  Scenario: Add an element
    When I open the "Add/Remove Elements" example
    Then I should see a heading containing "Add/Remove Elements"
    When I add an element
    Then I should see 1 delete button

  Scenario: Open Basic Auth with the example credentials
    When I open the "Basic Auth" example
    Then I should see a heading containing "Basic Auth"
    And I should see the authenticated welcome message

  Scenario: Find broken images
    When I open the "Broken Images" example
    Then I should see at least 1 broken image

  Scenario: Open Canvas
    When I open the "Canvas" example
    Then I should see a heading containing "Canvas"
    And I should see a visible canvas
