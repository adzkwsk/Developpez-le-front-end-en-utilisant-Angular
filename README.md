# OlympicGamesStarter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.3.

Don't forget to install your node_modules before starting (`npm install`).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Conventional Commits Guide

I realized that I haven't been following a structured commit message format in this project. I know it's important for maintaining a codebase, so here's a guide to the conventional commit style that I usually adhere to. This method helps in understanding the history of changes and makes automated tools more effective.

### What are Conventional Commits?
Conventional Commits are a specification for adding human and machine-readable meaning to commit messages. This convention dovetails with SemVer, by describing the features, fixes, and breaking changes made in commit messages.

### Commit Message Format
A typical commit message using the conventional commits standard looks like this:
```<type>(<scope>): <description>```

Type: Indicates the purpose of the commit.
Scope: Refers to the part of the codebase affected by the change (optional).
Description: A brief description of the change.

### Common Types of Commits
**feat**: A new feature for the user.
feat(authentication): add two-factor authentication

**fix**: A bug fix for the user.
fix(login): resolve incorrect password error

**docs**: Changes in the documentation.
docs(readme): update installation instructions

**style**: Changes that do not affect the meaning of the code (formatting).
style(header): align title correctly

**refactor**: A code change that neither fixes a bug nor adds a feature.
refactor(user-service): streamline user data processing

**perf**: A code change that improves performance.
perf(cache): optimize image caching logic

**test**: Adding or correcting tests.
test(api): increase coverage for user endpoint

**chore**: Changes to the build process or auxiliary tools.
chore(release): update version to 1.0.1