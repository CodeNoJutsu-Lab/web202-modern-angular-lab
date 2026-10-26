# Step 02 — Your First Standalone Component (solution)

**Course commit:** `c1dfbe9` · **Branch:** `step-02-your-first-standalone-component` · **Solution tag:** `solution-step-02`

This folder contains the completed code for this step. The tag points at the same state in the `solution` branch history.

## What was done

- Generated the `Hello` standalone component
- Registered it in the root component's `imports`
- Rendered `<app-hello/>` from `app.html`
- Commented out the default title assertion in `app.spec.ts`

## Solution files

The exact changed files are in [`files/`](./files/), mirroring the project paths:

- [`files/src/app/hello/hello.ts`](./files/src/app/hello/hello.ts)
- [`files/src/app/hello/hello.html`](./files/src/app/hello/hello.html)
- [`files/src/app/hello/hello.css`](./files/src/app/hello/hello.css)
- [`files/src/app/hello/hello.spec.ts`](./files/src/app/hello/hello.spec.ts)
- [`files/src/app/app.ts`](./files/src/app/app.ts)
- [`files/src/app/app.html`](./files/src/app/app.html)
- [`files/src/app/app.spec.ts`](./files/src/app/app.spec.ts)

> `package-lock.json` is omitted from the excerpt when it changed. Run `npm install` to regenerate it locally.

## Verify it

```bash
npm install
npm start
```

- [ ] The page shows “This is my first standalone component”
- [ ] `App` imports `Hello`; there are no `declarations` or `NgModule`s anywhere
- [ ] `npm test` and `npm run build` pass

## Notes

A standalone component is a component that declares its own dependencies in its `imports` array instead of belonging to an `NgModule`. The CLI's default is standalone in Angular 21.
