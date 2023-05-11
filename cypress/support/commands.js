// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import 'cypress-file-upload'

require('@4tw/cypress-drag-drop')

require('cypress-iframe')

Cypress.Commands.add('verifyElementText', (selector, expectedText) => {
    
    cy.get(selector).then((ele) => {

        expect(ele.text()).to.contain(expectedText)

    })

})

Cypress.Commands.add('verifyTitle', (expectedText) => {
    
    cy.title().should('eq', expectedText)

})

Cypress.Commands.add('login', (email, password) => {

    cy.get('input#Email').clear().type(email)
    cy.get('input#Password').clear().type(password)
    cy.get('#RememberMe').check()
    cy.get('.button-1').click()
                                               
})
