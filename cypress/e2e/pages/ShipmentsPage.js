class Shipments {

    sales = '(//p[contains(text(),"Sales")])[1]'
    shipments = '//p[contains(text(),"Shipments")]'
    startDate = '//span[@aria-controls="StartDate_dateview"]/span[@class="k-icon k-i-calendar"]'
    findRange = '//a[@aria-live="assertive"]'
    findYear = '//div[@class="k-animation-container"]//a[@data-value="2010/0/1"]'
    clickYear = '(//a[contains(text(),"2010")])[2]'
    clickMonth = '//a[contains(text(),"Jan")]'
    clickDay = '//a[@title="Friday, January 1, 2010"]'
    endDate = '//span[@aria-controls="EndDate_dateview"]/span[@class="k-icon k-i-calendar"]'
    clickDate = '//div[@class="k-animation-container"][2]//a[@title="Monday, May 1, 2023"]'
    btnSearch = '//button[@id="search-shipments"]'

    goToSales() {
        cy.xpath(this.sales).click()
        cy.xpath(this.shipments).click()
    }

    enterStartDate() {
        cy.xpath(this.startDate).click()
        cy.xpath(this.findRange).click({force: true}).click().click()
        cy.xpath(this.findYear).click()
        cy.xpath(this.clickYear).click()
        cy.xpath(this.clickMonth).click()
        cy.xpath(this.clickDay).click()
    }

    enterEndDate() {
        cy.xpath(this.endDate).click({force:true})
        cy.xpath(this.clickDate).click()
    }

    clickSearch() {
        cy.xpath(this.btnSearch).click()
    }
}

export default Shipments