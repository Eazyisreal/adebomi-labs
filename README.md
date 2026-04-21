# Project Title Template

This is an organizational template for building modern, robust web applications using the Next.js framework. It comes pre-configured with a comprehensive suite of tools to ensure code quality, consistency, and a highly efficient developer workflow.

## Tech Stack

This template is built with a modern, industry-standard tech stack:

- **Framework**: [Next.js](httpss://nextjs.org/) (with App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Testing**: [Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- **Linting**: [ESLint](https://eslint.org/)
- **Formatting**: [Prettier](https://prettier.io/)
- **Package Manager**: [NPM](https://www.npmjs.com/)

---

## Getting Started

To get started with this template, follow these steps:

1.  **Create your repository**: Use this repository as a template on GitHub.
2.  **Clone the repository**:
    ```bash
    git clone <your-new-repository-url>
    cd <your-repository-name>
    ```
3.  **Install dependencies**:
    ```bash
    npm install
    ```
    This command will also automatically run `husky install` to set up the Git hooks.

---

## Available Scripts

In the project directory, you can run the following commands:

### `npm run dev`

Runs the app in development mode with Turbopack.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits.

### `npm run build`

Builds the app for production to the `.next` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run start`

Starts a Next.js production server. You should run `npm run build` before this command.

### `npm run test`

Launches the test runner in interactive watch mode.

### `npm run lint`

Runs ESLint to find and fix problems in your codebase.

### `npm run format`

Formats all files in the project using Prettier.

---

## Automated Workflows & Quality Assurance

This template is pre-configured with several automated workflows to maintain high code quality and consistency.

### Git Hooks (Husky)

We use [Husky](https://typicode.github.io/husky/) to manage Git hooks. These hooks run automatically before you commit or push code.

- **Pre-commit**: Before each commit, `lint-staged` will automatically run ESLint and Prettier on only the files you've changed. This ensures no code with linting errors or formatting issues can be committed.
- **Commit-msg**: Before each commit is finalized, `commitlint` will validate your commit message against the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard. This enforces a clean and readable Git history.

### Editor Integration (VS Code)

The `.vscode` directory contains settings and extension recommendations for an optimal developer experience in VS Code, Cursor, and Windsurf.

- **Recommended Extensions**: You will be prompted to install recommended extensions for ESLint, Prettier, and Tailwind CSS IntelliSense.
- **Automatic Formatting**: The editor is configured to format your code with Prettier and fix ESLint issues every time you save a file.

### Continuous Integration (GitHub Actions)

The `.github/workflows/ci.yml` file configures a CI pipeline that runs on every push and pull request to the `main` branch. It automatically:

1.  Installs dependencies.
2.  Builds the project.
3.  Runs the full test suite.
4.  Runs the linter.

This ensures that the `main` branch is always in a healthy, deployable state.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
