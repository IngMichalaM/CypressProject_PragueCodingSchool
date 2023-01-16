export default class CheckoutPage{

    // selectors 

    countryInputFieldLoc = '#country';
    countriesSuggestinsList = 'div.suggestions ul li a'; // get all, we just take first 
    checkboxLoc = "#checkbox2[type='checkbox']";
    purchaseButton = "input[value='Purchase']";
    successMessageLoc = 'div.alert';

    // -----------------------------------------------------
    // Class methods
     

    typeInCityNameBeginning(in_string){
        cy.get(this.countryInputFieldLoc).type(in_string)
    };

    selectCity(){
        // cy.wait(1000); // how else? 
        // cy.get(this.countriesSuggestinsList).click();
        
        cy.get(this.countriesSuggestinsList, {timeout:10000}).click();
    };

    checkCheckbox(){
        cy.get(this.checkboxLoc, {force: true}).check({force: true});
    };

    clickPurchaseButton(){
        cy.get(this.purchaseButton).click();
    };

    verifySuccess(){
        cy.get(this.successMessageLoc).should('contain.text', 'Success! Thank you!');
    };

}
