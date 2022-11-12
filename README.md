
# Validate CPF with POO

## Configured tools

- [Typescript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/pt-BR/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Lint Staged](https://github.com/okonet/lint-staged)
- [Husky](https://typicode.github.io/husky/#/)

## Scripts

- For run unit test. It allows the test suite to pass when no files are found.

```Shell
  yarn test
```

- Finds and runs tests that cover a list of space-separated source files passed as arguments.

```Shell
  yarn test:staged
```

- For run coverage tests.

```Shell
  yarn coverage
```

- For run lint.

```Shell
  yarn lint
```

- To check for updated dependencies.

```Shell
  yarn check
```

## Conventional Commits

**Example:**

``` Shell
  feat: description new feature implementation
```

**Types:**

- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix 
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **test**: Adding missing tests or correcting existing tests
