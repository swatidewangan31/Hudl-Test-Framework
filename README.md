# Hudl QA Automation Framework

## 📌 Overview

This repository contains an end-to-end test automation framework for validating the login functionality of the Hudl application using Cypress. The test suite validates critical login scenarios to ensure application stability and reliability.

The framework is designed using:

* Page Object Model (POM)
* Data-driven testing approach
* Reusable selectors
* Cross-origin handling (`cy.origin`)
* CI integration with GitHub Actions

---

## 🛠 Tech Stack

* JavaScript (ES6)
* Cypress
* Node.js
* GitHub Actions (CI/CD)

---

## 📁 Project Structure

```
.
├── cypress
│   ├── e2e
│   │   ├── createAccountTest.cy.js
│   │   ├── loginTests.cy.js
│   │   └── ...
│   ├── fixtures
│   │   ├── errorMessages.js
│   │   ├── loginTestData.js
│   │   └── ...
│   ├── pages
│   │   ├── HomePage.js
│   │   └── LoginPage.js
│   ├── selectors
│   │   ├── loginPageSelectors.js
│   │   └── ...
│   └── support
│       ├── commands.js
│       ├── e2e.js
│       └── ...
├── .github/workflows
│   └── hudl-tests.yml
├── package.json
├── cypress.config.js
└── README.md
```

### Structure Explanation

* **e2e/** → Contains test specifications
* **fixtures/** → Test data and reusable messages
* **pages/** → Page Object classes
* **selectors/** → Centralized locators
* **support/** → Custom Cypress commands
* **.github/workflows/** → CI configuration

---

## 🚀 Getting Started

### Prerequisites

* Node.js (v16 or later recommended)
* npm

---

## 📥 Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/swatidewangan31/Hudl-Test-Framework.git
cd Hudl-Test-Framework
```

### 2️⃣ Install Dependencies

* Install NPM packages

```bash
npm install
```
* Install Cypress

```bash
npm i -D cypress
```

---

## ▶️ Running Tests

### Run All Tests (Headless Mode)

* Through CLI/ terminal, open terminal and paste below command

```bash
npx cypress run
```

### Run Tests in Interactive Mode

* Open terminal and paste below command

```bash
npx cypress open
```

Then:

* Select browser
* Navigate to e2e specs
* Choose the test file

---

### Run Tests in Specific Browser

```bash
npx cypress run --browser chrome
```

Supported browsers:

* Chrome
* Edge
* Firefox
* Electron

---

## 🔄 CI/CD Integration

Continuous Integration is configured using GitHub Actions.

Workflow file location:

```
.github/workflows/hudl-tests.yml
```

### How to Trigger CI

1. Go to GitHub repository
2. Click **Actions** tab
3. Select **Hudl Test Framework**
4. Click **Run workflow**

---