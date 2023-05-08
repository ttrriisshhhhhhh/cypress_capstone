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
        cy.fixture('appData.json').then((data) => {                         // use of fixture for easy access to the data
            cy.visit(data.nopCommerceLink)                                  
            cy.viewport(data.viewport)                                      // set viewport for display settings

            cy.verifyTitle('Your store. Login')                             

            loginPage.enterEmail(data.email)                                // login
            loginPage.enterPassword(data.password)
            loginPage.clickRememberMe()                                    
            loginPage.clickLogin()                                          

            cy.verifyTitle('Dashboard / nopCommerce administration')        // validation
        })
    })

    it('Add Product', () => {
        productPage.goToProducts()                                          //go to catalog > products
        productPage.addProductName('Trish Test Product')                    
        productPage.enterProductDetails('Sample short description')
        productPage.loadIFrame()
        productPage.enterPrice('1000')
        productPage.clickSave()
                                                                            // validation
        cy.verifyElementText('div.alert.alert-success.alert-dismissable', 'The new product has been added successfully.')

        cy.wait(3000)                                                       
        cy.screenshot()                                                     // take a screenshot
    })

    it('Search Product', () => {
        productPage.goToProducts()                                          
        productPage.searchProductName('Trish Test Product')                 
        productPage.clickSeachButton()

        cy.wait(3000)                                                       
        cy.screenshot()                                                     // take a screenshot
    })

    it('Delete Product', () => {
        productPage.goToProducts()                                          
        productPage.searchProductName('Trish Test Product')                 
        productPage.clickSeachButton()
        productPage.deleteProduct()              
        
        cy.wait(3000)                                                       
        cy.screenshot()                                                     // take a screenshot
    })

    it('Import countries from CSV', () => {
        countriesPage.goToCountries()
        countriesPage.clickImport()
        countriesPage.fileUpload()

        cy.wait(3000)                                                       
        cy.screenshot()                                                     // take a screenshot
    })

    it('Add Category with Photo', () => {
        categoriesPage.goToCategory()
        categoriesPage.addCategoryName('Test')
        categoriesPage.addCategoryPhoto()

        cy.wait(3000)                                                       
        cy.screenshot()                                                     // take a screenshot
    })

    it.only('Shipment Search', () => {
        shipmentsPage.goToSales()
        shipmentsPage.enterStartDate()
        shipmentsPage.enterEndDate()
        shipmentsPage.clickSearch()

        cy.wait(3000)                                                       
        cy.screenshot()                                                     // take a screenshot
    })
})