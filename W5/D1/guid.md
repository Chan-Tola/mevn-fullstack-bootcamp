# W5 D1: Request Validation Using Express-Validator

## Introduction

[Express-Validator](https://express-validator.github.io/docs) is a powerful middleware for **Express.js** that helps you validate and sanitize incoming request data. It ensures that the data sent to your server is both **valid** and **safe**, providing various built-in functions to achieve this.

### What does Express-Validator do?

- **Validation**: Verifies if the input meets specific criteria (e.g., correct email format, minimum length, required fields).
- **Sanitization**: Cleans up input data to prevent potential security risks like **SQL injection** or **cross-site scripting (XSS)**.

## Install Express and Express-Validator

Install Express and Express-Validator as dependencies in your project.

```bash
npm install express express-validator
```

## Step 3: Create an Express App

Create a new file named `app.js` (or any other preferred name) and set up a basic Express app.

```javascript
const express = require("express");
const { body, validationResult } = require("express-validator");

const app = express();
app.use(express.json());

// Define routes and validation rules here
// ...

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

## Step 4: Define Validation Rules

Inside your `app.js` file, define validation rules using Express-Validator's `body` method or by using schema validation.

```Javascript
app.post(
  '/submit',
  [
    body('username').isLength({ min: 5 }).trim(),
    body('email').optional().isEmail()
    body('password').isStrongPassword(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Proceed with handling the valid data
    // ...
  }
);
```
