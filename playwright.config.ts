import { defineBddConfig } from 'playwright-bdd';
import { defineConfig, devices } from '@playwright/test';

const bddTestDir = defineBddConfig({
  features: 'tests/features/**/*.feature',
  steps: ['tests/features/step-definitions/**/*.ts'],
});

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  reporter: 'allure-playwright',

  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'setup',
      testMatch: /.*\.setup\.ts/,
    },
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'bdd-chromium',
      testDir: bddTestDir,
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});