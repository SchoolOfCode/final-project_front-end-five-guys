describe('My First Test', () => {
    it('Does not do much!', () => {
        expect(true).to.equal(true);
    });
});

describe('My First Test', () => {
    it('clicks the link "type"', () => {
        cy.visit('http://localhost:3000/');

        cy.contains('type').click();
    });
});
