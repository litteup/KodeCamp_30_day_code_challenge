# 30 DAYS CODING CHALLENGE DECEMBER 2020
# DAY 1 19 DECEMBER 2023
## Environment setup 
 -- Install NodeJs and set up a basic project structure
 ---- 1. Set up git
 ---- 2. Set up Code Style and Linting rules
 ---- 3. Create a README file containing your task

2. Set up Code Style and Linting rules
# Node.js Project Setup

This repository contains the setup instructions for code style and linting rules in a Node.js project.

## Getting Started

To get started with linting and code formatting, follow the steps below.

### Prerequisites

- Node.js and npm should be installed on your machine.

### Installation

1. Clone this repository:

```
git clone <repository-url>
```

2. Navigate to the project directory:

```
cd project-directory
```

3. Install the required dependencies:

```
npm install
```

### Code Style and Linting Setup

1. Install ESLint for linting JavaScript code:

```
npm install eslint --save-dev
```

2. Install Prettier for code formatting:

```
npm install prettier --save-dev
```

3. Create a `.prettierrc` config file to customize Prettier rules:

```
{
  "printWidth": 80,
  "tabWidth": 2,
  "singleQuote": true
}
```

4. Create a `.eslintrc` file and specify Prettier as the style guide:

```
{
  "extends": ["prettier"]
}
```

5. Install the `eslint-config-prettier` plugin to integrate Prettier and ESLint:

```
npm install eslint-config-prettier --save-dev
```

6. Add NPM scripts for running the linters:

```
"lint": "eslint .",
"format": "prettier --write ."
```

## Usage

- To lint your code, run the following command:

```
npm run lint
```

- To format your code using Prettier, run the following command:

```
npm run format
```

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

# DAY 2 20 DECEMBER 2023

## Setting up a HTTP Server
---- Create a simple HTTP server that responds with "Welcome to KodeCamp 30-Day Code Challenge!