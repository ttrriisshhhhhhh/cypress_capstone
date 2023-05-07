class Country {

    configuration = '//p[contains(text(),"Configuration")]'
    countries = '//p[contains(text(),"Countries")]'
    btnImportCSV = '//button[@name="importcsv"]'
    chooseFile = '//input[@id="importcsvfile"]'
    btnImport = '//button[@class="btn btn-primary"]'


    goToCountries() {
        cy.xpath(this.configuration).click()
        cy.xpath(this.countries).click()
    }

    clickImport() {
        cy.xpath(this.btnImportCSV).click()
    }

    fileUpload() {
        cy.xpath(this.chooseFile).attachFile('countries.csv')
        cy.xpath(this.btnImport).click()
    }

}

export default Country