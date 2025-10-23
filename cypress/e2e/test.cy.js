describe("Navbar tests", () => {
    beforeEach(() => {
        cy.visit("http://localhost:5178");
    });

    it("renders skill and project buttons", () => {
        cy.get("[data-testid=skills-button]").should("exist");
        cy.get("[data-testid=projects-button]").should("exist");
    });

    it("scrolls to sections when buttons are clicked", () => {
        cy.get("[data-testid=skills-button]").click();
        cy.get("section#skills").should("exist");
        cy.get("[data-testid=projects-button]").click();
        cy.get("div#projects").should("be.visible");

    });

    it("Hire me button triggers API call", () => {
        cy.intercept("POST", "https://reqres.in/api/users").as("postUser");
        cy.get("[data-testid=hireme-button]").click();
        cy.wait("@postUser").its("response.statusCode").should("eq", 201);
    });
});
