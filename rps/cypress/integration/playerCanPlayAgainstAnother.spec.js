describe("Rock Papper Scissors", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("has a start button and two buttons for the players", () => {
    cy.get("body").contains("Rock Papper Scissors");
    cy.get('[data-cy="Player 1"]').contains("Player 1").click();
    cy.get('[data-cy="Player 2"]').contains("Player2").click();
    cy.get('[data-cy="Start"]').contains("Player 1").click();
    
  });
});
