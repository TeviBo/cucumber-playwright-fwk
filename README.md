# Playwright + Cucumber.js Automation Framework

## 📌 Overview

This framework integrates **Playwright** for browser automation and **Cucumber.js** for behavior-driven testing (BDD). It supports both **API and Web UI testing**, following a structured and maintainable architecture.

---

## 🚀 Getting Started

### **1️⃣ Install the Framework**

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd playwright-cucumber-framework
npm install
```

Ensure Playwright browsers are installed:

```bash
npx playwright install
```

---

### **2️⃣ Running Tests**

#### **Run All Tests**

```bash
npm test
```

#### **Run Only UI Tests**

```bash
npm run test:ui
```

#### **Run Only API Tests**

```bash
npm run test:api
```

#### **Run Tests in Headed Mode** (For UI debugging)

```bash
npm run test:headful
```

---

### **3️⃣ Framework Structure**

```bash
playwright-cucumber-framework/
│── api/
│   ├── src/
│   │   ├── services/        # API service classes
│   │   ├── utils/           # API-specific utilities
│   ├── tests/
│   │   ├── features/        # API Gherkin feature files
│   │   ├── steps/           # API step definitions
│
│── web/
│   ├── src/
│   │   ├── pages/           # Page Objects for UI
│   │   ├── utils/           # UI-specific utilities
│   ├── tests/
│   │   ├── features/        # UI Gherkin feature files
│   │   ├── steps/           # UI step definitions
│
│── common/
│   ├── config/              # Environment configurations
│   ├── hooks/               # Global hooks (setup/teardown)
│   ├── fixtures/            # Shared test data
│
│── reports/                 # Test execution reports
│── playwright.config.ts      # Playwright configuration
│── cucumber.js              # Cucumber configuration
│── package.json             # Project dependencies
│── README.md                # Documentation
```

---

### **4️⃣ Configurations**

#### **Playwright Configuration (`playwright.config.ts`)**

This file defines browser settings and test configurations.

```typescript
import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "./tests",
  timeout: 30000,
  retries: 2,
  use: {
    headless: true,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
};

export default config;
```

#### **Cucumber Configuration (`cucumber.js`)**

This file defines how Cucumber tests are executed.

```javascript
export default {
  default: [
    "--require-module ts-node/register",
    "--require ./tests/steps/**/*.ts",
    "--format progress",
    "--format json:./reports/cucumber_report.json",
    "--publish-quiet",
  ].join(" "),
};
```

#### **Scripts (`package.json`)**

Common test execution commands:

```json
"scripts": {
  "test": "cucumber-js",
  "test:playwright": "playwright test",
  "test:ui": "cucumber-js --tags '@ui'",
  "test:api": "cucumber-js --tags '@api'"
}
```

---

### **5️⃣ Debugging & Logs**

Enable debugging logs when running tests:

```bash
DEBUG=playwright:* npm run test
```

For UI debugging, run in headed mode:

```bash
npm run test:headful
```

---

### **✅ Summary**

- **Runs both API and UI tests** using Playwright & Cucumber.js.
- **Supports multi-browser automation**.
- **Scalable and maintainable** test structure.
- **Easily integrated with CI/CD pipelines**.

🚀 **Start automating with Playwright and Cucumber today!**
