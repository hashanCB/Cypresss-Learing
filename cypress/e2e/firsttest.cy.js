describe("template spec", () => {
  beforeEach(() => {
    cy.visit("/fundamentals");
  });
  it("passes", () => {
    cy.get('[data-test="fundamentaltest"]').should(
      "contain.text",
      "Testing Fundamentals"
    );
  });

  it("1st pass", () => {
    cy.get('[data-test="fundamentaltest"]').contains(/Testing Fundamentals/i);
  });

  it("Accodting work correctly", () => {
    cy.contains(
      /Your tests will exist in a describe block. This block takes two arguments./
    ).should("not.be.visible");
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click();
    cy.contains(
      /Your tests will exist in a describe block. This block takes two arguments./
    ).should("be.visible");
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click();
    cy.contains(
      /Your tests will exist in a describe block. This block takes two arguments./
    ).should("not.be.visible");
  });
});
