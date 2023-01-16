export default class HomePage1{

    // selectors 
    nameInputField = 'input[name="name"]:nth-child(2)';
    dropdownSelectID = "#exampleFormControlSelect1";
    dataBindingExampleField = 'input[name="name"]:nth-child(1)';
    enterpreneurRadioButton = '#inlineRadio3';
    emailInputField = 'input[name=email]';
    shopButtonLoc = 'a.nav-link';

    // this is a method of the class
    openAngularPracticeWebsite(){
         // step 1 - vistit homepage
        // in the settings of cypress you can write the base URL and later
        // only wirte the endpoints (https://rahulshettyacademy.com - see cypress.config.js)
        // cy.visit('https://rahulshettyacademy.com/angularpractice/');
        cy.visit('/angularpractice/');
    }

    typeNameInTextBox(firstName){
        //     // it types in both field??
        // input.form-control[name="name"]
        cy.get(this.nameInputField).type(firstName); // use when there a re less then 5 elements, othwrwise it is not clear
    };


    selectGenderFromDropdown(gender){
        // step 3 - select gender 
        cy.get(this.dropdownSelectID).select(gender);
    };

    typeEmail(email){
        cy.get(this.emailInputField).type(email);
    }

    clickShopButton(){
        cy.get(this.shopButtonLoc).contains('Shop').click();
        }
    

    verifyDataBindingExample(personName){
        cy.get(this.dataBindingExampleField).should('have.value', personName);
    };

    verifyMinNameLenghtName(){
        //cy.get('input[name="name"]:nth-child(2)').clear();
        //cy.get('input[name="name"]:nth-child(2)').type("M"); 
        // check teh error message 
        //    cy.get('div.alert-danger').should('have.text', "Name should be at least 2 characters");    
        //cy.get(this.nameInputField).clear();
        //cy.get(this.nameInputField).type("M"); 
        // check teh error message 
        //cy.get('div.alert-danger').should('have.text', "Name should be at least 2 characters");    
        cy.get(this.nameInputField).should('have.attr', 'minLength', 2);
        };
     
    verifyEntrepreneurButtonDisabled(){
        cy.get(this.enterpreneurRadioButton).should('be.disabled');
    };


    

}