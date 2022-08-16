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


    it('Second test', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.get('[data-cy="signInButton"]')

        cy.contains('Sign in')

        cy.contains('[status="warning"]', 'Sign in')

        //find works only to find element in parents
        cy.get('#inputEmail3')
        .parents('form')
        .find('button')
        .should('contain', 'Sign in')
        .parents('form')
        .find('nb-checkbox')
        .click()

        cy.contains('nb-card', 'Horizontal form').find('[type="email"]')

    })


    it('Then and wrap methods', () => { 

    cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        // cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email')
        // cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain', 'Password')
        // cy.contains('nb-card', 'Basic form').find('[for="exampleInputEmail1"]').should('contain', 'Email')
        // cy.contains('nb-card', 'Basic form').find('[for="exampleInputPassword1"]').should('contain', 'Password')

        cy.contains('nb-card', 'Using the Grid').then(firstForm => {
            const emailLabelFirst = firstForm.find('[for="inputEmail1"]').text()
            const passwordLabelFirst = firstForm.find('[for="inputPassword2"]').text()
            expect(emailLabelFirst).to.equal('Email')
            expect(passwordLabelFirst).to.equal('Password')

        

            cy.contains('nb-card','Basic form').then(secondForm => {
                //const emailLabelSecond = secondForm.find('[for="exampleInputEmail1"]').text()
                const passwordSecondText = secondForm.find('[for="exampleInputPassword1"]').text()
                //expect(emailLabelSecond).to.equal('Email')
                expect(passwordLabelFirst).to.equal(passwordSecondText)

                cy.wrap(secondForm).find('[for="exampleInputPassword1"]').should('contain', 'Password')

            })
        })
    })


    it('invoke command', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        //1st approach
        cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address')

        //2nd approach
        cy.get('[for="exampleInputEmail1"]').then(label => {
            expect(label.text()).to.equal('Email address')
        })

        cy.get('[for="exampleInputEmail1"]').invoke('text').then(text => {
            expect(text).to.equal('Email address')
        })

        //3rd approach
        cy.get('[for="exampleInputEmail1"]').invoke('text').then(text => {
            expect(text).to.equal('Email address')
        })

        //Checkbox ckecking
        cy.contains('nb-card', 'Basic form')
            .find('nb-checkbox')
            .click()
            .find('.custom-checkbox')
            .invoke('attr', 'class')
            //.should('contain', 'checked')
            .then(classValue => {
                expect(classValue).to.contain('checked')
            })

    })

    it.only


})

