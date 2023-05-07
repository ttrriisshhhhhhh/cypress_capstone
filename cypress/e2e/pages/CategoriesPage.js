class Category {

    catalog = '(//p[contains(text(),"Catalog")])[1]'
    categories = '//p[contains(text(),"Categories")]'
    btnAddCategory = '//a[@href="/Admin/Category/Create"]'
    txtCategoryName = '//input[@id="Name"]'
    btnUploadFile = '//input[@title="file input"]'
    btnSave = '//button[@name="save"]'

    goToCategory() {
        cy.xpath(this.catalog).click()
        cy.xpath(this.categories).click()
    }

    addCategoryName(categoryName) {
        cy.xpath(this.btnAddCategory).click()
        cy.xpath(this.txtCategoryName).type(categoryName)
    }

    addCategoryPhoto() {
        cy.xpath(this.btnUploadFile).attachFile('test.png')
        cy.xpath(this.btnSave).click()
    }

}

export default Category