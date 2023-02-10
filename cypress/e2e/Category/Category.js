import { Given,When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";


Before(() => {

})

Given("I visit Home Page", () => {

  cy.visit("/");
  cy.intercept("GET", Cypress.env('API_BASE_URL')+"/v1/category/", 
  {fixture:"category.json"}).as("stubbedCategory")
  cy.wait("@stubbedCategory")
  
});



When("I type initial few letters of existing {string} into search box", (string) =>{
  cy.get('.search').type(string)
});


Then("I should see the {string} with details", (string) => {

  cy.get("[data-cy=card-list-category]")
  .contains(string)
  .should("be.visible")

})

When("I type initial few letters of non-existing {string} into search box", (string) =>{
  cy.get('.search').type(string)
});

Then("I should see the error message", () => {

})