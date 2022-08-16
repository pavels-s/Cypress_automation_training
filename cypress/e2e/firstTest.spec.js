/// <reference types="cypress" />

describe('Our first suite', () => {


    it('first test', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        //search element by tag name
        cy.get('input')

        //find element by id
        cy.get('#inputEmail1')

        //find by classname
        cy.get('.input-full-width')

        //find by attribute name
        cy.get('[placeholder]')

        //find by attribute name and value
        cy.get('[placeholder="Email"]')

        //find element by class value
        cy.get('[class="input-full-width size-medium shape-rectangle"]')

        //by tagname and attribute
        cy.get('input[placeholder="Email"]')

        //by two different attributes
        cy.get('[placeholder="Email"][fullwidth][type="email"]')

        //by tag name, attribute with value, ID and class name
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')

        //the most recommended way
        cy.get('[data-cy="imputEmail1"]')

    })


    it.only('Second test', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.get('[data-cy="signInButton"]')

        cy.contains('Sign in')

        cy.contains('[status="warning"]', 'Sign in')

    })


})

