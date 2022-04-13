// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
    it('visits the app root url', () => {
        cy.intercept('/', { fixture: 'index.html'});

        cy.visit('/');

        cy.contains('h1', 'You did it!')
    })
})
