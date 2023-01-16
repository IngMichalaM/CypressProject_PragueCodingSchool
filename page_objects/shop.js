export default class ShopPage{

    // selectors 
    chekoutButtonLoc = 'a.nav-link';
    // since I want to check also the name of the item, I am looking for the whole
    //  item, not only for the button. There are more of them 
    productPageItemsLoc = 'app-card-list app-card'; 
    
    // -----------------------------------------------------
    // Class methods

    openShopPage(){
        cy.visit('/angularpractice/shop');
    }

    clickCheckout(){
        cy.get(this.chekoutButtonLoc).contains('Checkout').click();
    };

    addFirstItemToCart(){
        cy.get(this.productPageItemsLoc).first().find('button').click();
    }

    addFirstItemToCart2(){
        cy.get('.btn.btn-info').first().click();
    }

    addLastItemToCart2(){
        cy.get('.btn.btn-info').last().click();
    }


    addLastItemToCart(){
        cy.get(this.productPageItemsLoc).last().find('button').click();
    }

    addSamsungToCart(){
        cy.get(this.productPageItemsLoc).as("allItems"); 
        cy.get("@allItems").each((itemPhone) =>{
            cy.wrap(itemPhone).find(".card-title").invoke('text').then((productName)=> {
                cy.log(productName);
      
                if (productName.includes('Samsung')){
                  cy.wrap(itemPhone).find("button").click();
                }
            })
        })
    }  

    addParticularBrandToCart(phoneBrand){
        cy.get(this.productPageItemsLoc).as("allItems"); 
        cy.get("@allItems").each((itemPhone) =>{
            cy.wrap(itemPhone).find(".card-title").invoke('text').then((productName)=> {
                cy.log(productName);
      
                if (productName.includes(phoneBrand)){
                  cy.wrap(itemPhone).find("button").click();
                }
            })
        })
    }  

    addAllItemsToCart(){
        cy.get(this.productPageItemsLoc).as("allItems"); 
        cy.get("@allItems").each((itemPhone) =>{
            cy.wrap(itemPhone).find("button").click();
        })
    }    


} // End is here 

// ******************* Not succesfull method to checdk the Total sum ************************
 
    // verifyTotalIsCorrect(){
        
    //         cy.get(this.totalSumLoc).then((totalSumNumCur) => {
    //         const totalSumNum = parseInt(totalSumNumCur.text().split(' ')[1]);
            
    //         cy.log('My totalSumNum = ')
    //         cy.log(totalSumNum)

    //         let expectedSum = 0;
    //         cy.get(this.column4).then((items) => {
    //             const itemArray = Array.from(items)
    //             cy.log('the itemArray is: ')
    //             cy.log(itemArray)
    //             expectedSum = itemArray.reduce((sum, item) => {
                    
    //                 // const itemPrice = item.text().split(' ')[1];
    //                 const itemPrice = item.querySelector('strong'); // .split(' ')[1];
    //                 cy.log('the item')
    //                 cy.log(item)
    //                 // return sum + itemPrice
    //             }, 0)
    //             // cy.log('Inner expectedSum = ')
    //             // cy.log(expectedSum)

    //         })

            // cy.log('My expectedSum = ')
            // cy.log(expectedSum)

            // //  expect(totalSumNum).to.equal(expectedSum)
            // expect(totalSumNum).to.equal(150000)
    //     })
    // }
            


// ------------------------------  ai reseni -------------------------------------
// describe('Test shopping cart', () => {
//     it('Adds items to cart and checks total sum', () => {
//       cy.visit('https://rahulshettyacademy.com/angularpractice/shop')
  
//       // Add items to cart
//       cy.get('[name="Nokia Lumia 1520"]').click()
//       cy.get('[name="add"]').click()
//       cy.get('[name="Samsung Note 8"]').click()
//       cy.get('[name="add"]').click()
//       cy.get('[name="iphone X"]').click()
//       cy.get('[name="add"]').click()
  
//       // Click on checkout
//       cy.get('.nav-link.btn.btn-primary').click()
  
//       // Check that total sum is correct
//       cy.get('.text-right.h4').then(($total) => {
//         const totalSum = parseInt($total.text().replace(/[^0-9]/g, ''))
//         let expectedSum = 0
  
//         // Calculate expected sum by adding prices of all items in the cart
//         cy.get('.cart-item').each(($item) => {
//           const itemPrice = parseInt($item.find('.price').text().replace(/[^0-9]/g, ''))
//           expectedSum += itemPrice
//         })
  
//         expect(totalSum).to.equal(expectedSum)
//       })
//     })
//   })


// cy.get('.cart-item').then((items) => {
//     expectedSum = items.reduce((sum, item) => {
//       const itemPrice = parseInt(item.querySelector('.price').textContent.replace(/[^0-9]/g, ''))
//       return sum + itemPrice
//     }, 0)
//   })

//   expect(totalSum).to.equal(expectedSum)


        // works ok - print hte total sum as number
        // cy.get(this.totalSumLoc).invoke('text').then((totalSumNumCur) => {
        //     const totalSumNum = parseInt(totalSumNumCur.split(' ')[1]);
        //     cy.log(totalSumNum) // log as number
        // })

        // cy.get(this.totalSumLoc).invoke('text').then((totalSumNumCur) => {
        //     const totalSumNum = parseInt(totalSumNumCur.split(' ')[1]);
        //     cy.log(totalSumNum) // log as number
        // })


      
        // kind of work 
        // cy.get(this.totalSumLoc).invoke('text').as("totalSumNum3"); // not working
        // cy.get('@totalSumNum3').then(function (aliasValue){
        //     cy.log('Who knows what is going on .')
        //     cy.log(aliasValue);
        // })
        
        // cy.get(this.totalSumLoc).invoke('text').then((totalSumNumCur) => {
        //     const totalSumNum = parseInt(totalSumNumCur.split(' ')[1]);
        //     cy.log('**********************************************')
        //     cy.log(totalSumNum) // log as number
        //     cy.log('**********************************************')
        // }).as('theTotalSumNum')

        // cy.log('totalSumNum outside its part of the code:')
        // cy.get('@theTotalSumNum').then(function (theTotalSumNum){
        //     cy.log('Who knows what is going on:')
        //     cy.log(theTotalSumNum);
        // })



        // cy.get(this.totalSumLoc).invoke('text').then((totalSumNumCur) => {
        //     const totalSumNum = parseInt(totalSumNumCur.split(' ')[1]);
        //     cy.wrap(totalSumNum).as('totalSumNum2');
        //     //return totalSumNum
        //     cy.log("totalSumNum within its part of the code:")
        //     cy.log(totalSumNum) // log as number
        // })

        // cy.log('totalSumNum outside its part of the code:')
        // cy.log(cy.get('@totalSumNum2')); // log as number
        //cy.log(cy.get('@theTotalSumNum'));

        // works 
        // var sumOfSubprices = 0; // unlike const, var can be changed during execution of the code
        // // iterate over all values in the "Total" column, sum only those containng numbers 
        // cy.get(this.column4).each((priceNumCur) => { // iterating throught all the rows
        //     const priceNum = priceNumCur.text().split(' ')[1];
        //     //priceNum.length()
        //     if (priceNum){
        //         cy.log(priceNum);
        //         sumOfSubprices = sumOfSubprices + parseInt(priceNum);
        //         }
        // //    cy.log('The sum of subrprices witin its part ot ghte code: ')
        // //    cy.log(sumOfSubprices) 
        // }).as('theSumOfSubprices'); 

        // cy.log('The theSumOfSubprices:');

        // cy.get('@theSumOfSubprices').then(function (theSumOfSubprices){
        // cy.log('Who knows what is going on 2:')
        // cy.log(theSumOfSubprices);
        // })

        // AI 
        // cy.get('.text-right.h4').then(($total) => {
        //     const totalSum = parseInt($total.text().replace(/[^0-9]/g, ''))
        //     const nokiaPrice = parseInt(cy.get('[name="Nokia Lumia 1520"]').next().text().replace(/[^0-9]/g, ''))
        //     const samsungPrice = parseInt(cy.get('[name="Samsung Note 8"]').next().text().replace(/[^0-9]/g, ''))
        //     expect(totalSum).to.equal(nokiaPrice + samsungPrice)
        //   })
    

        // Get teh total sum 
        // cy.get('.text-right.h4').then(($total) => {
        //     const totalSum = parseInt($total.text().replace(/[^0-9]/g, ''))
        //     cy.log(totalSum)
        // })
           
        // the expectedSum is still not accessible
        // cy.get(this.totalSumLoc).then((totalSumNumCur) => {
        //     const totalSumNum = parseInt(totalSumNumCur.text().split(' ')[1]);
        //     // cy.log('My new  attempt. TotalSum = ')
        //     // cy.log(totalSumNum)
    
        //     let expectedSum = 0;

        //     cy.get(this.column4).each((priceNumCur) => { // iterating throught all the rows
        //         const priceNum = priceNumCur.text().split(' ')[1];
            
        //         if (priceNum){        
        //             expectedSum = expectedSum + parseInt(priceNum);
        //             }
        //         cy.log('expectedSUm in its part = ')
        //         cy.log(expectedSum)
        //     }).as('expectedSum')

        //     cy.log('New attempt with help of AI. ExpectedSum = ')
    
        //     cy.get('@expectedSum').then((sum)=>{
        //         cy.log(sum)
        //         expect(totalSumNum).to.equal(sum)
        //     })
        // })
               

//     each((priceNumCur) => { // iterating throught all the rows
        //         const priceNum = priceNumCur.text().split(' ')[1];
            
        //         if (priceNum){        
        //             expectedSum = expectedSum + parseInt(priceNum);
        //             }
        //         cy.log('expectedSUm in its part = ')
        //         cy.log(expectedSum)
        //     }).as('expectedSum')

        //     cy.log('New attempt with help of AI. ExpectedSum = ')
    
        //     cy.get('@expectedSum').then((sum)=>{
        //         cy.log(sum)
        //         expect(totalSumNum).to.equal(sum)
        //     })
        // })
          
        
            // cy.log('the expected sum = ')
            // cy.log(expectedSum)
            // expect(totalSumNum).to.equal(expectedSum);
            

        //  })
        
        // .invoke('text').then((totalSumNumCur) => {
          
        //     cy.log(totalSumNum) // log as number
        // })


    //    //    Check that total sum is correct
    //   cy.get('.text-right.h4').then(($total) => {
    //     const totalSum = parseInt($total.text().replace(/[^0-9]/g, ''))
    //     let expectedSum = 0
  
    //     // Calculate expected sum by adding prices of all items in the cart
    //     cy.get('.cart-item').each(($item) => {
    //       const itemPrice = parseInt($item.find('.price').text().replace(/[^0-9]/g, ''))
    //       expectedSum += itemPrice
    //     }).as('expectedSum')
  
    //     cy.get('@expectedSum').then((sum)=>{
    //         expect(totalSum).to.equal(sum)
    //     })
        
    //   })
  
  
        // // works 
        // var sumOfSubprices = 0; // unlike const, var can be changed during execution of the code
        // // iterate over all values in the "Total" column, sum only those containng numbers 
        // cy.get(this.column4).each((priceNumCur) => { // iterating throught all the rows
        //     const priceNum = priceNumCur.text().split(' ')[1];
        //     //priceNum.length()
        //     if (priceNum){
        //         cy.log(priceNum);
        //         sumOfSubprices = sumOfSubprices + parseInt(priceNum);
        //       }
        //     // cy.log(sumOfSubprices) 
        // }).then(()=>{
        //     expect(sumOfSubprices).to.equal(150000); //  works ok 
        //     // does not work cy.get(sumOfSubprices).should('eq', 150000)
        //     // expect(sumOfSubprices).to.equal("@totalSumNum");
        // })

        // not yet 
        // var sumOfSubprices = 0; // unlike const, var can be changed during execution of the code
        // // iterate over all values in the "Total" column, sum only those containng numbers 
        // cy.get(this.column4).each((priceNumCur) => { // iterating throught all the rows
        //     const priceNum = priceNumCur.text().split(' ')[1];
        //     //priceNum.length()
        //     if (priceNum){
        //         cy.log(priceNum);
        //         sumOfSubprices = sumOfSubprices + parseInt(priceNum);
        //       }
        //     // cy.log(sumOfSubprices) 
        // }).as('blablabla_sumOfSubprices');

        // then((sumOfSubprices)=>{

        //     cy.get(this.totalSumLoc).invoke('text').then((totalSumNumCur) => {
        //             const totalSumNum = parseInt(totalSumNumCur.split(' ')[1]);
        //             expect(sumOfSubprices).to.equal(totalSumNum);
        //         })

               
        
        // const price1 = cy.get(tr td:nth-child(4))
        // cy.get(this.totalSumLoc).should('have.value', 165000);

        
        //     each((priceNumCur) => { // iterating throught all the rows
        //         const priceNum = priceNumCur.text().split(' ')[1];
            
        //         if (priceNum){        
        //             expectedSum = expectedSum + parseInt(priceNum);
        //             }
        //         cy.log('expectedSUm in its part = ')
        //         cy.log(expectedSum)
        //     }).as('expectedSum')

        //     cy.log('New attempt with help of AI. ExpectedSum = ')
    
        //     cy.get('@expectedSum').then((sum)=>{
        //         cy.log(sum)
        //         expect(totalSumNum).to.equal(sum)
        //     })
        // })
          
        
            // cy.log('the expected sum = ')
            // cy.log(expectedSum)
            // expect(totalSumNum).to.equal(expectedSum);
            

        //  })
        
        // .invoke('text').then((totalSumNumCur) => {
          
        //     cy.log(totalSumNum) // log as number
        // })


    //    //    Check that total sum is correct
    //   cy.get('.text-right.h4').then(($total) => {
    //     const totalSum = parseInt($total.text().replace(/[^0-9]/g, ''))
    //     let expectedSum = 0
  
    //     // Calculate expected sum by adding prices of all items in the cart
    //     cy.get('.cart-item').each(($item) => {
    //       const itemPrice = parseInt($item.find('.price').text().replace(/[^0-9]/g, ''))
    //       expectedSum += itemPrice
    //     }).as('expectedSum')
  
    //     cy.get('@expectedSum').then((sum)=>{
    //         expect(totalSum).to.equal(sum)
    //     })
        
    //   })
  
  
        // // works 
        // var sumOfSubprices = 0; // unlike const, var can be changed during execution of the code
        // // iterate over all values in the "Total" column, sum only those containng numbers 
        // cy.get(this.column4).each((priceNumCur) => { // iterating throught all the rows
        //     const priceNum = priceNumCur.text().split(' ')[1];
        //     //priceNum.length()
        //     if (priceNum){
        //         cy.log(priceNum);
        //         sumOfSubprices = sumOfSubprices + parseInt(priceNum);
        //       }
        //     // cy.log(sumOfSubprices) 
        // }).then(()=>{
        //     expect(sumOfSubprices).to.equal(150000); //  works ok 
        //     // does not work cy.get(sumOfSubprices).should('eq', 150000)
        //     // expect(sumOfSubprices).to.equal("@totalSumNum");
        // })

        // not yet 
        // var sumOfSubprices = 0; // unlike const, var can be changed during execution of the code
        // // iterate over all values in the "Total" column, sum only those containng numbers 
        // cy.get(this.column4).each((priceNumCur) => { // iterating throught all the rows
        //     const priceNum = priceNumCur.text().split(' ')[1];
        //     //priceNum.length()
        //     if (priceNum){
        //         cy.log(priceNum);
        //         sumOfSubprices = sumOfSubprices + parseInt(priceNum);
        //       }
        //     // cy.log(sumOfSubprices) 
        // }).as('blablabla_sumOfSubprices');

        // then((sumOfSubprices)=>{

        //     cy.get(this.totalSumLoc).invoke('text').then((totalSumNumCur) => {
        //             const totalSumNum = parseInt(totalSumNumCur.split(' ')[1]);
        //             expect(sumOfSubprices).to.equal(totalSumNum);
        //         })

               
        
        // const price1 = cy.get(tr td:nth-child(4))
        // cy.get(this.totalSumLoc).should('have.value', 165000);


    //     verifyTotalIsCorrect(){
        
    //         cy.get(this.totalSumLoc).then((totalSumNumCur) => {
    //         const totalSumNum = parseInt(totalSumNumCur.text().split(' ')[1]);
            
    //         cy.log('My totalSumNum = ')
    //         cy.log(totalSumNum)

    //         let expectedSum = 0;
    //         cy.get(this.column4).then((items) => {
    //             expectedSum = items.reduce((sum, item) => {
    //                 const itemPrice = item.text().split(' ')[1];
    //                 return sum + itemPrice
    //             }, 0)
    //             cy.log('Inner expectedSum = ')
    //             cy.log(expectedSum)

    //         })

    //         cy.log('My expectedSum = ')
    //         cy.log(expectedSum)

    //         //  expect(totalSumNum).to.equal(expectedSum)
    //         expect(totalSumNum).to.equal(150000)
    //     })
    // }