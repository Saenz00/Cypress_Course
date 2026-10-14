import homePage from '../../support/pageObjects/homePage';

describe('End to end test', function () {

    before(function () {
        cy.fixture('example').then(function (data) {
            this.data = data;
            this.homePage = new homePage();
        })
    })

    it('Submit order', function () {
        Cypress.defaultCommandTimeout = 8000; //local timeout for this test
        
        const productname = this.data.productname;
        this.homePage.goTo(Cypress.env('url')+"/loginpagePractise/#/");

        const productPage = this.homePage.login(this.data.username, this.data.password);
        productPage.pageValidation();
        productPage.verifyCardLimit();
        productPage.selectProduct(productname);
        productPage.selectFirstProduct();
        const cartPage = productPage.goToCart();
        cartPage.sumOfProducts().then(function (sum) {
            expect(sum).to.be.lessThan(200000);
        })

        const confirmationPage = cartPage.checkoutItems();
        confirmationPage.submitFormDetails();
        confirmationPage.getAlertMessage().should('contain', 'Success');

    })
})