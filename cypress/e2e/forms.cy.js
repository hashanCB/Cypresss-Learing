describe("form tests", () => {
  beforeEach(() => {
    cy.visit("/forms");
  });
  it("Check form Page", () => {
    cy.contains(/Testing Forms/i);
    cy.get('[data-test="sub-form"]').find("input").type("hashan.hchana.com");
    cy.contains(/Successfully subbed: hashan.hchana.com!/i).should("not.exist");
    cy.get('[data-test="sub-btn"]').click();
    cy.contains(/Successfully subbed: hashan.hchana.com!/i).should("exist");
  });
});
