class Shipments {

    sales = '(//p[contains(text(),"Sales")])[1]'
    shipments = '//p[contains(text(),"Shipments")]'
    startDateN = '//div[@id="StartDate_dateview"]//a[@data-value="2023/4/1"]'
    endDateN = '//div[@id="EndDate_dateview"]//a[@title="Wednesday, May 10, 2023"]'
    startDate = '//span[@aria-controls="StartDate_dateview"]/span[@class="k-icon k-i-calendar"]'
    findRange = '(//a[@aria-live="assertive"])[1]'
    findYear = '//div[@class="k-animation-container"]//a[@data-value="2010/0/1"]'
    clickYear = '(//a[contains(text(),"2010")])[2]'
    clickMonth = '//a[contains(text(),"Jan")]'
    clickDay = '//a[@title="Friday, January 1, 2010"]'
    endDate = '//span[@aria-controls="EndDate_dateview"]/span[@class="k-icon k-i-calendar"]'
    clickDate = '//div[@class="k-animation-container"][2]//a[@title="Monday, May 1, 2023"]'
    btnSearch = '//button[@id="search-shipments"]'
    shipmentsTable = 'class="dataTables_scrollBody"'
    searchResults = '//div[@class="dataTables_scrollBody"]/table/tbody/tr'

    goToSales() {
        cy.xpath(this.sales).click()
        cy.xpath(this.shipments).click()
    }

    enterStartDateNegative() {
        cy.xpath(this.startDate).click({force: true})
        cy.xpath(this.startDateN).click({force: true})
    }

    enterEndDateNegative() {
        cy.xpath(this.endDate).click({force: true})
        cy.xpath(this.endDateN).click({force: true})
    }

    enterStartDate() {
        cy.wait(1000)
        cy.xpath(this.startDate).click({force: true})
        cy.xpath(this.findRange).click({force: true}).click().click()
        cy.xpath(this.findYear).click()
        cy.xpath(this.clickYear).click()
        cy.xpath(this.clickMonth).click()
        cy.xpath(this.clickDay).click()
    }

    enterEndDate() {
        cy.wait(1000)
        cy.xpath(this.endDate).click({force:true})
        cy.xpath(this.clickDate).click()
    }

    clickSearch() {
        cy.xpath(this.btnSearch).click()
    }

    validateResults() {
        cy.xpath(this.shipmentsTable).should('exist')
        cy.xpath(this.searchResults).should('have.length.above', 1)
    }
}

export default Shipments