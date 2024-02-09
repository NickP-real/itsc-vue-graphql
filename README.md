# itsc-article-workshop

This work is not finished yet, I am lazy to do now lol

## Dependencies

backend using with `https://github.com/NickP-real/itsc-dotnet-graphql`
design from `https://www.figma.com/file/Y9wRXSnFX4sQJp6cIOj6RB/Book-Management-System?type=design&node-id=178-444&mode=design&t=4yEf7mcaYpg5sWVy-0`

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
pnpm test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
pnpm build
pnpm test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```
