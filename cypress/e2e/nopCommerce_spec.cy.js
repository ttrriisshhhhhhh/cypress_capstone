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

        cy.fixture('appData.json').then((data) => {

            //go to site URL
            cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2FAdmin')

            //set viewport for display settings
            cy.viewport(data.viewport)

        })

        //validate title
        cy.title().should('eq', 'Your store. Login')

        //enter email and password
        loginPage.enterEmail('admin@yourstore.com')
        loginPage.enterPassword('admin')

        //click check for remember me checkbox
        loginPage.clickRememberMe()

        //click login button
        loginPage.clickLogin()

        //validation
        cy.title().should('eq', 'Dashboard / nopCommerce administration')

        // cy.verifyElementText(cy.title(), 'Dashboard / nopCommerce administration')

        // cy.verifyTitle2(cy.title(), 'Dashboard / nopCommerce administration')

    })

    it.skip('Add Product', () => {

        //go to catalog > products
        productPage.goToProducts()

        //click Add New button for adding a product
        productPage.addProductName('Trish Test Product')

        cy.xpath('//textarea[@id="ShortDescription"]').type('Short description sample')

        cy.frameLoaded('#FullDescription_ifr')

        cy.iframe('#FullDescription_ifr').type('Long description with iFrame plugin use.')

        cy.xpath('//input[@name="Price"]/preceding-sibling::input').click()

        cy.xpath('//input[@name="Price"]', {force: true}).type('100')

        productPage.clickSave()

        cy.wait(3000)

        cy.screenshot()

    })

    it.skip('Search Product', () => {

        productPage.goToProducts()

        productPage.searchProductName('Trish Test Product')

        productPage.clickSeachButton()

    })

    it.skip('Delete Product', () => {

        productPage.goToProducts()

        productPage.searchProductName('Trish Test Product')

        productPage.clickSeachButton()

        productPage.deleteProduct()
    })

    it.skip('Import countries from CSV', () => {

        countriesPage.goToCountries()

        countriesPage.clickImport()

        countriesPage.fileUpload()

    })

    it.skip('Add Category with Photo', () => {

        categoriesPage.goToCategory()

        categoriesPage.addCategoryName('Test')

        categoriesPage.addCategoryPhoto()

    })


    it('Shipment Search', () => {

        shipmentsPage.goToSales()

        shipmentsPage.enterStartDate()

        shipmentsPage.enterEndDate()

        shipmentsPage.clickSearch()

    })

})