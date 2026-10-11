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
        this.homePage.goTo('https://rahulshettyacademy.com/loginpagePractise/#/');
        const productPage = this.homePage.login(this.data.username, this.data.password);
        productPage.pageValidation();
        productPage.verifyCardLimit();
        productPage.selectProduct(productname);
        productPage.selectFirstProduct();
        const cartPage = productPage.gotToCart();

        cy.get('app-card').eq(0).contains('button', 'Add').click();
        cy.contains('a', 'Checkout').click();
        let sum = 0
        cy.get('tr td:nth-child(4) strong').each($el => {
            const amount = Number($el.text().split(' ')[1].trim());
            sum = sum + amount;
        }).then(() => {
            expect(sum).to.be.lessThan(200000)
        })
        cy.contains('button', 'Checkout').click();
        cy.get('#country').type('India');
        cy.get('.suggestions > ul > li > a').click();
        cy.get(".btn-success").click();
        cy.get(".alert-success").should('contain', 'Success');
    })
})