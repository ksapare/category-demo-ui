Feature: Filtering Search for Category
  Background: Home Page
    Given I visit Home Page

  @REG-122
  Scenario Outline: filter by existing category name
    When I type initial few letters of existing "<category name>" into search box
    Then I should see the "<filtered category>" with details

    Examples:
        | category name | filtered category |
        | App  | Appliances  |
        | Pa  | Paint  |
  
  @PendingImplementation
  Scenario: filter by non-existing category name
    When I type initial few letters of non-existing "category name" into search box
    Then I should see the error message