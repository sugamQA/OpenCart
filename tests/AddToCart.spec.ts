/**
 * Test Case: Add Product to Cart
 * 
 * Tags: @master @regression
 * 
 * Steps:
 * 1. Navigate to application URL
 * 2. Enter an existing product name in the search box
 * 3. Click the search button
 * 4. Verify the product appears in the search results
 * 5. Select the product
 * 6. Set quantity
 * 7. Add the product to the cart
 * 8. Verify the success message
 */

import { test, expect } from '@playwright/test';
import { TestConfig } from '../test.config';
import { HomePage } from '../pages/HomePage';
import { SearchResultsPage } from '../pages/SearchResultsPage';
import { ProductPage } from '../pages/ProductPage';

// Shared instances
let config: TestConfig;
let homePage: HomePage;
let searchResultsPage: SearchResultsPage;
let productPage: ProductPage;

test.beforeEach(async ({ page }) => {
  config = new TestConfig(); // Load test configuration
  await page.goto(config.appUrl); // Step 1: Open application URL

  // Initialize page objects
  homePage = new HomePage(page);
  searchResultsPage = new SearchResultsPage(page);
  productPage=new ProductPage(page);
});

test.afterEach(async ({ page }) => {
  await page.close(); // Optional cleanup
});

test('Add product to cart test @master @regression', async ({ page }) => {
  // Step 2: Enter product name in search box
  await homePage.enterProductName(config.productName);

  // Step 3: Click the search button
  await homePage.clickSearch();

  // Step 4: Verify search results page is displayed
  expect(await searchResultsPage.isSearchResultsPageExists()).toBeTruthy();

  // Step 5: Verify that the product exists in the results
  const productName = config.productName;
  expect(await searchResultsPage.isProductExist(productName)).toBeTruthy();

  // Step 6-7-8: Select product → Set quantity → Add to cart → Verify confirmation
  if (await searchResultsPage.isProductExist(productName)) {
    //productPage = await searchResultsPage.selectProduct(productName);
    await searchResultsPage.selectProduct(productName);
    await productPage.setQuantity(config.productQuantity); // Set quantity
    await productPage.addToCart();                         // Add to cart

    // Step 8: Assert success message is visible
    expect(await productPage.isConfirmationMessageVisible()).toBeTruthy();
  }
});
