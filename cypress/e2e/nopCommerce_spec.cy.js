import Login from "./pages/loginPage"
import Product from "./pages/ProductPage"
import Country from "./pages/CountriesPage"
import Category from "./pages/CategoriesPage"
import Shipments from "./pages/ShipmentsPage"

describe('NopCommerce Capstone', () => {
    const loginPage = new Login()
    const productPage = new Product()
    const countriesPage = new Country()
    const categoriesPage = new Category()
    const shipmentsPage = new Shipments()
    
    beforeEach( () => {
        cy.fixture('appData.json').then(function(data) {                    // use of fixture for easy access to the data
            this.data = data
            
            cy.visit(data.nopCommerceLink)                                  
            cy.viewport(data.viewport)                                      // set viewport for display settings

            cy.verifyTitle('Your store. Login')       

            cy.login(data.email, data.password)                             // custom login command           

            cy.verifyTitle('Dashboard / nopCommerce administration')        // validation
        })
    })

    it('Add Product', function() {
        productPage.goToProducts()                                          //go to catalog > products
        
        cy.verifyTitle('Products / nopCommerce administration')

        productPage.addProductName(this.data.product.name)                    
        productPage.enterProductDetails(this.data.product.description)
        productPage.loadIFrame()
        productPage.enterPrice(this.data.product.price)
        productPage.clickSave()
                                                                            // validation
        cy.verifyElementText(this.data.elementDiv, 'The new product has been added successfully.')

        cy.wait(2000)                                                       
        cy.screenshot()                                                     // take a screenshot
    })

    it('Search Product', function() {
        productPage.goToProducts()   
        
        cy.verifyTitle('Products / nopCommerce administration')

        productPage.searchProductName(this.data.product.name)                 
        productPage.clickSeachButton()
        productPage.validateProduct()

        cy.wait(2000)                                                       
        cy.screenshot()                                                    
    })

    it('Delete Product', function() {
        productPage.goToProducts()             
        
        cy.verifyTitle('Products / nopCommerce administration')
        
        productPage.searchProductName(this.data.product.name)                 
        productPage.clickSeachButton()
        productPage.deleteProduct()              
        
        cy.wait(2000)                                                       
        cy.screenshot()                                                  
    })

    it('Import countries from CSV', function() {
        countriesPage.goToCountries()

        cy.verifyTitle('Countries / nopCommerce administration')

        countriesPage.clickImport()
        countriesPage.fileUpload()

        cy.verifyElementText(this.data.elementDiv, '75 states have been successfully imported')

        cy.wait(2000)                                                       
        cy.screenshot()                                                    
    })

    it('Add Category with Photo', function() {
        categoriesPage.goToCategory()

        cy.verifyTitle('Categories / nopCommerce administration')

        categoriesPage.addCategoryName(this.data.category.name)
        categoriesPage.addCategoryPhoto()

        cy.verifyElementText(this.data.elementDiv, 'The new category has been added successfully.')

        cy.wait(2000)                                                       
        cy.screenshot()                                                     
    })

    it.skip('Shipment Search', function() {
        shipmentsPage.goToSales()

        cy.verifyTitle('Shipments / nopCommerce administration')

        shipmentsPage.enterStartDateNegative()                              // table should be empty
        shipmentsPage.enterEndDateNegative()
        shipmentsPage.clickSearch()
        
        cy.verifyElementText(this.data.tableEmpty, 'No data available in table')

        shipmentsPage.enterStartDate()                                      // search results are shown
        shipmentsPage.enterEndDate()
        shipmentsPage.clickSearch()
        shipmentsPage.validateResults()

        cy.wait(2000)                                                       
        cy.screenshot()                                                     
    })
})