class Product {
    catalog = '(//p[contains(text(),"Catalog")])[1]'
    products = '(//p[contains(text(),"Products")])[1]'
    btnAddProduct = '//a[@href="/Admin/Product/Create"]'
    txtProductName = '//input[@id="Name"]'
    txtShortDescription = '//textarea[@id="ShortDescription"]'
    txtIFrameDescrption = 'Long description with iFrame plugin use.'
    iFrame = '#FullDescription_ifr'
    clickPrice = '//input[@name="Price"]/preceding-sibling::input'
    inputPrice = '//input[@name="Price"]'
    btnSave = '//button[@name="save"]'
    txtProductNameSearch = '//input[@id="SearchProductName"]'
    btnSearch = '//button[@id="search-products"]'
    checkboxProduct = '//table[@id="products-grid"]/tbody/tr/td/input'
    btnDelete = '//button[@id="delete-selected"]'
    btnDeleteYes = '//button[@id="delete-selected-action-confirmation-submit-button"]'

    goToProducts() {
        cy.xpath(this.catalog).click()
        cy.xpath(this.products).click()
    }

    addProductName(productName) {
        cy.xpath(this.btnAddProduct).click()
        cy.xpath(this.txtProductName).type(productName)
    }

    enterProductDetails(productDescription) {
        cy.xpath(this.txtShortDescription).type(productDescription)
    }

    loadIFrame() {
        cy.frameLoaded(this.iFrame)
        cy.iframe(this.iFrame).type(this.txtIFrameDescrption)
    }

    enterPrice(productPrice) {
        cy.xpath(this.clickPrice).click()
        cy.xpath(this.inputPrice, {force: true}).type(productPrice)
    }

    clickSave() {
        cy.xpath(this.btnSave).click()
    }

    searchProductName(productName) {
        cy.xpath(this.txtProductNameSearch).type(productName)
    }

    clickSeachButton() {
        cy.xpath(this.btnSearch).click()
        cy.wait(3000)
    }

    deleteProduct() {
        cy.xpath(this.checkboxProduct).check()
        cy.xpath(this.btnDelete).click()
        cy.xpath(this.btnDeleteYes).click()
    }  
}

export default Product