# Project structure

my-webflow-project/
│
├──public/                      # You can store pictures and videos here
│   ├── vite.svg
│
├── src/
│   ├── assets/                 # Static resources (images, icons, etc.)
│   │   ├── images/
│   │   └── icons/
│   │
│   ├── pages/                  # Scripts for individual pages
│   │   ├── home/
│   │   │   └── index.js
│   │   ├── about/
│   │   │   └── index.js
│   │   └── contact/
│   │       └── index.js
│   │
│   ├── utils/                  # Helper functions and constants
│   │   ├── helper.js
│   │   └── constants.js
│   │
│   ├── services/               # API interactions and business logic
│   │   └── api.js
│   │
│   ├── config/                 # Configuration files
│   │   └── config.js
│   │
│   ├── main.js                 # Entry point script
│   └── index.html              # HTML template
│
├── .editorconfig              # Editorconfig configuration
├── .gitignore                 # Git ignore rules
├── .eslintrc                  # ESLint configuration
├── .prettierrc                # Prettier configuration
├── .eslintignore              # ESLint ignore rules
├── .prettierignore            # Prettier ignore rules
├── package.json               # Project dependencies and scripts
└── README.md                  # Project documentation

## Scripts

The `package.json` includes several custom scripts to streamline development tasks.

```json
{
  "scripts": {
    "dev": "concurrently --raw -n "vite" "wf-publish --env=dev --dev-port=5173"",
    "publish": "wf-publish --env=prod",
    "lint": "eslint src/**/*.{js,ts}",
    "format": "prettier --write src/**/*.{js,ts}",
    "lint:fix": "eslint src/**/*.{js,ts} --fix",
    "prepare": "npm run lint && npm run format"
  }
}
```

### Available Scripts

- **`dev`**: Starts the development server using Concurrently.
- **`publish`**: Publishes the project (implementation depends on `wf-publish`).
- **`lint`**: Runs ESLint on all `.js` and `.ts` files within `src/`.
- **`format`**: Formats all `.js` and `.ts` files within `src/` using Prettier.
- **`lint:fix`**: Automatically fixes linting errors where possible.
- **`prepare`**: Runs linting and formatting before committing changes.

## Best Practices

- **Consistent Coding Style**: Adhere to the ESLint and Prettier configurations to maintain a uniform codebase.
- **Modular Code**: Keep your code organized by separating concerns into different directories (`pages`, `utils`, `services`).
- **Error Handling**: Always handle potential errors, especially when dealing with file operations and external APIs.
- **Version Control**: Use Git effectively by committing changes with clear and descriptive messages.
- **Optimize Assets**: Compress and optimize images and other static assets to enhance performance.

## Troubleshooting

- **ESLint Errors**: Ensure that all dependencies are installed correctly. Run `npm install` to install missing packages.
- **Prettier Formatting Issues**: Verify your `.prettierrc` configuration and ensure that the code adheres to the defined rules.
- **Git Initialization Failures**: Check your Git installation and ensure you have the necessary permissions to create repositories on GitHub.

*Please [contact me](mailto:mailmetelev@gmail.com) with any questions or for additional help.*