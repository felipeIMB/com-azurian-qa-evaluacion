import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly userInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userInput = page.getByPlaceholder(/admin@azurian\.com/i);
    this.passwordInput = page.getByPlaceholder(/••••••••/);
    this.loginButton = page.getByRole('button', { name: /Iniciar Sesión/i });
  }

  async goto() {
    await this.page.goto('/login');
  }

  async login(user: string, pass: string) {
    await this.userInput.fill(user);
    await this.passwordInput.fill(pass);
    await this.loginButton.click();
    await expect(this.page).toHaveURL(/.*dashboard/);
  }
}