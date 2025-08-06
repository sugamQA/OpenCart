import { Page, Locator } from '@playwright/test';
import { HomePage } from './HomePage';

export class LogoutPage {
    private readonly page: Page;
    private readonly btnContinue: Locator;

    constructor(page: Page) {
        this.page = page;
        // Using CSS selector with :has-text() pseudo-class for text matching
        this.btnContinue = page.locator('.btn.btn-primary');
    }

    /**
     * Clicks the Continue button after logout
     * @returns Promise<HomePage> - Returns instance of HomePage
     */
    async clickContinue(): Promise<HomePage> {
        await this.btnContinue.click();
        return new HomePage(this.page);
    }

    /**
     * Verifies if the Continue button is visible
     * @returns Promise<boolean> - Returns true if button is visible
     */
    async isContinueButtonVisible(): Promise<boolean> {
        return await this.btnContinue.isVisible();
    }
}