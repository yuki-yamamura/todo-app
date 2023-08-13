# Next.js App Router template

This template is aimed at quickly building a [Next.js](https://nextjs.org) application with shared coding style.

## Getting Started

First, be sure Node.js version in your machine is over _v16.8_.
Then, just clone the repository and start development server typing `npm run dev`. There's no need to do extra setups.

## Features

- Next.js App Router
- TypeScript
- Jest and React Testing Library (no E2E framework)
- ESLint, Stylelint, and Prettier
- Husky and Commitlint to check commit messages
- GitHub Actions
- VS Code configurations

## Additional npm scripts

I'll introduce some of the npm scripts you can use:

- `format`: Run Prettier with `--write` option.
- `lint:es`: Run ESList with `--fix` option.
- `lint:style`: Run Stylelint with `--fix` option.
- `test`: Run Jest with `--watch` option.

## Coding Style

This template is kind of opinionated because of my preference.

- Put codebase in `src` directory.
- Use CSS Modules and name CSS selectors by lower camel case.
- Use arrow function expression in every case.
- Write commit messages following a specification of the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).
