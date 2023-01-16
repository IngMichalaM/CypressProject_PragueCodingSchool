/// <reference types="cypress"/>

// improt the java class
import HomePage1 from "../page_objects/homePage";
import ShopPage from "../page_objects/shop";
import CartPage from "../page_objects/cart";
import CheckoutPage from "../page_objects/checkoutPage";

// instance of the class
const HomePageObj = new HomePage1();
const ShopPageObj = new ShopPage();
const CartPageObj = new CartPage();
const CheckoutPageObj = new CheckoutPage();


// ========================================
// HomePage was not part of the project
//  see the Shop test bellow 
// =========================================

// test suite 
describe('Proto commerce', () => {

  // // const personName = 'Michala'; // accesible for all tests

  // // this runs before the tests
  // // rad and load the test data from the fixture folder
  // // mark it as "this" meaing that the whole file will have access to it
  // before('Read our Test Data', function (){
  //   cy.fixture('testData.json').then(function (data){
  //     this.sampleTestData = data;

  //   })
  // })

  // it('HomePage', function () {

  //   // reading from the config file 
  //   const personName = Cypress.env("username");
  //   cy.log(personName);
   
  //   //const personName = 'Michala'; // accesible only within this test 
  //   const {gender, email, username} = this.sampleTestData;

  //   HomePageObj.openAngularPracticeWebsite();
  //   HomePageObj.typeNameInTextBox(username);
  //   HomePageObj.selectGenderFromDropdown(gender);
  //   HomePageObj.typeEmail(email);
       
  //   HomePageObj.verifyDataBindingExample(username);
  //   HomePageObj.verifyMinNameLenghtName();
  //   HomePageObj.verifyEntrepreneurButtonDisabled();

  // })


  // ==============================================================
  // Final project
  // 
  // Associated classes: ShopPage, CartPage, CheckoutPage
  //
  // Base URL is defined in cypress.config.js ('https://rahulshettyacademy.com/angularpractice/')
  //    1) Open the shop page
  //    2) Add all Samsung and Nokia phones into the cart 
  //    3) Click Checkout button
  //    4) Verify that there is only 1 piece for each item in the cart
  //    5) Verify that the total sum is correct (that it equals to the sum of the items in the cart)
  //    6) Click Checkout button
  //    7) Start typing the name of the city "Cy"
  //    8) Select the first city from the list
  //    9) Check the checkbox
  //    10) Click Purchase
  //    11) Verify that there is a "success" message on the next screen

  // what to send 
  // no node.js
  // package.json
// From Palash Dange to Everyone 09:11 PM
// package.json file
// Cypress config file
// Cypress folder


    it('Shop - add phones to the cart, check result.', () => {

      ShopPageObj.openShopPage();
      ShopPageObj.addSamsungToCart(); // add Samsung 
      ShopPageObj.addParticularBrandToCart('Nokia'); // add all Nokia
      ShopPageObj.clickCheckout();

      CartPageObj.verifyEachQuantityEq1(); 
      CartPageObj.verifyTotalIsCorrect();
      // CartPageObj.getDisplyedTotal();
      CartPageObj.clickCheckout();

      CheckoutPageObj.typeInCityNameBeginning('Cy');
      CheckoutPageObj.selectCity();      
      CheckoutPageObj.checkCheckbox();
      CheckoutPageObj.clickPurchaseButton();
      CheckoutPageObj.verifySuccess();
    })
})


// ================== QUESTIONS ===========================
// what if the page is small and the menu is compressed to the hamburger menu? 

// ================== comments ===========================
// see https://docs.cypress.io/guides/references/best-practices
// for nest practice, esp. best and after section, 
// but also that ID is not assumed as best locator 