class confirmationPage{
    submitFormDetails(){
        cy.submitFormDetails();
    }

    getAlertMessage(){
        return cy.get(".alert-success");
    }

}

export default confirmationPage;