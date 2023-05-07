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

        expect(ele.text()).to.eq(expectedText)

    })

})

Cypress.Commands.add('verifyTitle', (selector, expectedText) => {
    
        expect(selector).text().to.eq(expectedText)

})

Cypress.Commands.add('verifyTitle2', (selector, expectedText) => {
    
    selector.invoke('text').then((text)=>{
        expect(text).to.include(expectedText)
    })

})