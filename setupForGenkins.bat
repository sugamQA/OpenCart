@echo off
REM Install dependencies without audit warnings
npm install --no-audit --legacy-peer-deps

REM Allure-related installs
npm install -D allure-playwright
npm install -g allure-commandline --force

REM Install Playwright browsers
npx playwright install
