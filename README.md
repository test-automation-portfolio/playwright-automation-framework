# Playwright Automation Framework

A scalable end-to-end test automation framework built with **Playwright** and **TypeScript**, covering UI, API, and API/UI integration testing.

The project is designed to demonstrate modern QA automation practices including Page Object Model, reusable fixtures, environment-based configuration, API testing, test tagging, reporting, and CI/CD integration with GitHub Actions.

---

## 🚀 Project Overview

This framework automates functional and integration testing for web applications and REST APIs.

### Test Areas

* UI end-to-end testing
* Authentication and login scenarios
* Product and navigation validation
* REST API testing
* API/UI integration testing
* Positive and negative test scenarios
* Smoke and regression test suites
* Environment-based configuration
* Automated CI execution through GitHub Actions

---

## 🛠️ Technology Stack

| Technology     | Purpose                               |
| -------------- | ------------------------------------- |
| Playwright     | Browser automation and test execution |
| TypeScript     | Type-safe test development            |
| Node.js        | Runtime environment                   |
| GitHub Actions | CI/CD automation                      |
| dotenv         | Environment configuration             |
| REST API       | API test automation                   |
| Git/GitHub     | Source control and collaboration      |

---

## 📁 Project Structure

```text
.
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── config/
│   ├── environment.ts
│   └── validateEnvironment.ts
│
├── fixtures/
│   └── testFixtures.ts
│
├── pages/
│   ├── LoginPage.ts
│   └── ProductsPage.ts
│
├── tests/
│   ├── api/
│   ├── integration/
│   │   └── api-ui.integration.spec.ts
│   └── ui/
│       ├── login.spec.ts
│       └── products.spec.ts
│
├── playwright.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

> The exact structure may evolve as the framework grows.

---

## 🧪 Test Strategy

The framework follows a layered automation approach.

### UI Tests

UI tests validate critical user journeys such as:

* User login
* Invalid login handling
* Product page availability
* Product list visibility
* Authenticated user workflows

Example:

```text
Login
 ├── Valid credentials
 └── Invalid credentials

Products
 ├── Product page loads
 └── Product list is displayed
```

### API Tests

API tests validate backend behavior independently of the UI.

Examples include:

* HTTP status codes
* Response data
* API endpoints
* Request/response validation

### API + UI Integration

Integration tests combine API and UI validation to verify that data retrieved through the API is consistent with what is displayed in the application.

---

## 🏗️ Framework Architecture

The framework uses the **Page Object Model (POM)** pattern.

```text
Test
 │
 ├── Fixture
 │     │
 │     ├── LoginPage
 │     └── ProductsPage
 │
 ├── Configuration
 │     │
 │     └── Environment variables
 │
 └── Assertions
```

### Page Objects

Page objects encapsulate UI interactions and locators.

For example:

```typescript
await loginPage.login(username, password);
await productsPage.assertProductsDisplayed();
```

This keeps test cases focused on **business behavior rather than implementation details**.

---

## 🔧 Configuration

Environment-specific values are loaded through environment variables.

Example local `.env`:

```env
TEST_ENV=qa
BASE_URL=https://www.saucedemo.com
API_BASE_URL=https://jsonplaceholder.typicode.com

TEST_USERNAME=standard_user
TEST_PASSWORD=secret_sauce

API_TOKEN=
```

### Environment Variables

| Variable        | Purpose                                 |
| --------------- | --------------------------------------- |
| `TEST_ENV`      | Target environment                      |
| `BASE_URL`      | Application URL                         |
| `API_BASE_URL`  | API base URL                            |
| `TEST_USERNAME` | Test user                               |
| `TEST_PASSWORD` | Test password                           |
| `API_TOKEN`     | API authentication token, when required |

> `.env` files containing credentials or secrets should not be committed to source control.

For CI/CD, sensitive values are stored using **GitHub Actions Secrets**, while non-sensitive configuration is stored using **GitHub Actions Variables**.

---

## ▶️ Getting Started

### Prerequisites

Make sure you have:

* Node.js installed
* npm installed
* Git installed

Clone the repository:

```bash
git clone <repository-url>
cd playwright-automation-framework
```

Install dependencies:

```bash
npm ci
```

Install Playwright browsers:

```bash
npx playwright install
```

Create your local `.env` file and configure the required variables.

---

## 🧪 Running Tests

### Run all tests

```bash
npx playwright test
```

### Run UI tests

```bash
npx playwright test tests/ui
```

### Run API tests

```bash
npx playwright test tests/api
```

### Run a specific test file

```bash
npx playwright test tests/ui/login.spec.ts
```

### Run tests in headed mode

```bash
npx playwright test --headed
```

### Run a specific test by title

```bash
npx playwright test -g "user can login with valid credentials"
```

---

## 🏷️ Test Tags

Tests can be grouped using Playwright tags.

For example:

```typescript
test('authenticated user can view products @smoke', async () => {
  // ...
});
```

Run smoke tests:

```bash
npx playwright test --grep @smoke
```

Run regression tests:

```bash
npx playwright test --grep @regression
```

This allows CI pipelines to execute different test suites depending on the purpose of the run.

---

## 📊 Test Reports

After execution, Playwright generates a test report.

Open the HTML report with:

```bash
npx playwright show-report
```

The report provides:

* Test results
* Execution duration
* Failed test details
* Screenshots
* Traces
* Error information

---

## 🔄 CI/CD

The project uses **GitHub Actions** to execute automated tests.

The CI pipeline performs the following steps:

```text
Checkout repository
        ↓
Install Node.js
        ↓
Install dependencies
        ↓
Install Playwright browsers
        ↓
Run automated tests
        ↓
Publish Playwright report
```

The workflow runs automatically for:

* Pushes to `master`
* Pull requests targeting `master`

Test reports are uploaded as GitHub Actions artifacts for troubleshooting failed runs.

---

## 🌿 Git Workflow

The repository follows a feature-branch workflow.

```text
master
  │
  ├── feature/login-tests
  │
  ├── feature/api-tests
  │
  └── feature/framework-improvements
```

Changes should be developed on a feature branch and submitted through a Pull Request.

### Typical workflow

```bash
git checkout master
git pull

git checkout -b feature/my-change

# Make changes

git add .
git commit -m "Add automated login coverage"

git push -u origin feature/my-change
```

Then create a Pull Request targeting `master`.

---

## 🔐 Branch Protection

The `master` branch is protected to encourage a controlled development workflow.

The intended workflow is:

```text
Feature Branch
      ↓
Pull Request
      ↓
Automated Playwright Tests
      ↓
Code Review
      ↓
Merge
      ↓
master
```

Direct changes to the protected branch should be avoided.

---

## 🧩 Design Principles

The framework follows several automation engineering principles:

### Maintainability

Reusable page objects, fixtures, and configuration reduce duplicated code.

### Readability

Tests describe user behavior rather than low-level browser interactions.

### Reusability

Common functionality is centralized in fixtures and page objects.

### Separation of concerns

Test logic, page interactions, configuration, and environment validation are separated.

### CI-first execution

Tests are designed to run consistently both locally and in GitHub Actions.

### Secure configuration

Credentials and sensitive values are kept outside the source code and supplied through environment variables and CI secrets.

---

## 📈 Future Improvements

Potential enhancements include:

* Cross-browser execution
* Parallel test execution optimization
* Additional API coverage
* Schema validation for API responses
* Visual regression testing
* Accessibility testing
* Allure reporting
* Dockerized test execution
* Scheduled nightly regression runs
* Test data management
* Multiple environment pipelines
* Slack/Teams CI notifications
* Automated test result dashboards

---

## 👤 Author

**Test Automation Portfolio**

This project demonstrates practical experience in:

* Playwright
* TypeScript
* UI automation
* API automation
* Integration testing
* Page Object Model
* Test architecture
* Git/GitHub workflows
* CI/CD
* Automated quality engineering

---

## 📄 License

This project is intended for educational and portfolio purposes.
