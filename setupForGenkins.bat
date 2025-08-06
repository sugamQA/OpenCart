npm install
npm install -D allure-playwright
npm install -g allure-commandline --force
npx playwright install
npm install --omit=dev --legacy-peer-deps || echo "Ignoring install errors"