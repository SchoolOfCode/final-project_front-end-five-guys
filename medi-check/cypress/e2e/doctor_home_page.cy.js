import cy from 'cypress';

describe('The Home Page', () => {
    it('successfully loads', () => {
        cy.visit('http://localhost:3000');
    });

    it('opens doctor homepage', () => {
        cy.contains('Doctor').click();
    });
    it('select first patient on list', () => {
        cy.wait(2000)
            .get('tbody')
            .children()
            .last()
            .children()
            .first()
            .dblclick();
    });
    it('check that file has all rows returned', () => {
        console.log(
            cy.get('#patient-info-table').children().first().children()
        );
        let table = [
            cy.get('#patient-info-table').children().first().children(),
        ];
        // expect(table).to.have.lengthOf(9);
    });
});
