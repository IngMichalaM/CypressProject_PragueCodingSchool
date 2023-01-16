export default class CartPage{

    // selectors 
    chekoutButtonLoc = "button[type='button']";
    quantityLoc = "input.form-control[type='number']";
    totalSumLoc = 'td.text-right h3'; // contains number AND currency
    column4Price = 'tr td:nth-child(4) strong'; // column Total only price and currecy  
     // -----------------------------------------------------
    // Class methods for the Cart Page

    
    clickCheckout(){
        cy.get(this.chekoutButtonLoc).contains('Checkout').click();
    };

    
    verifyEachQuantityEq1(){
        // do a for loop over all and check taht thye equal 1 
        cy.get(this.quantityLoc).as("itemsQuantities"); 
        cy.get("@itemsQuantities").each((itemQuantity) =>{
            cy.get(itemQuantity).should('have.value', 1)
        })
    }

    
    getDisplyedTotal(){
        cy.get(this.totalSumLoc).invoke('text').then((totalSumNumCur) => {
            let totalSumNum = parseInt(totalSumNumCur.split(' ')[1]);
            cy.log('My totalSumNum = ')
            cy.log(totalSumNum) // log as number
        })
    }

    getSumOfPrices(){
        var sumOfSubprices = 0; 
        // iterate over all values in the "Total" column, sum only those containng numbers 
        cy.get(this.column4Price).each((priceNumCur) => { // iterating throught all the rows
            const priceNum = priceNumCur.text().split(' ')[1]; // get only the number withou currency
            if (priceNum){
                cy.log(priceNum);
                sumOfSubprices = sumOfSubprices + parseInt(priceNum);
                }
            // cy.log('The sum of subrprices witin its part ot ghte code: ')
            // cy.log(sumOfSubprices) 
        })
    }

    verifyTotalIsCorrect(){

        // get the display Total, with the currency
        cy.get(this.totalSumLoc).invoke('text').as('TotalSumOfCart');

        var sumOfSubprices = 0; 
        // iterate over all values in the "Total" column, sum only those containng numbers 
        cy.get(this.column4Price).each((priceNumCur) => { // iterating throught all the rows
            const priceNum = priceNumCur.text().split(' ')[1]; // get only the number without currency
            
            // skipp "0" nad "nan"
            if (priceNum){
                sumOfSubprices = sumOfSubprices + parseInt(priceNum);
            }

            // put it together
            // get back the Total number (with currency)
            cy.get('@TotalSumOfCart').then((TotalSumOfCart) => {
                // get rid of the currency, only the number will be used
                const totalSumNum = parseInt(TotalSumOfCart.split(' ')[1])
                
                // assert
                expect(sumOfSubprices).to.equal(totalSumNum)                
            })            
        })
    }

}

