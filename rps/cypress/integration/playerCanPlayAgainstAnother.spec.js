describe("Rock Papper Scissors", () => {
  beforeEach(() => {
    cy.visit("/");
  });

it("Checks two players can play eachother", () => {
  cy.get("body").contains("Welcome");
  //cy.get("button").contains("start");
  cy.get("body").contains("Rock").click();
  cy.get("body").contains("Papper").click();
   cy.get("body").contains("Scissors").click();

    
  
  });

});
