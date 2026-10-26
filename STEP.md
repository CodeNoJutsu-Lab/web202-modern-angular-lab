# Step 02 — Your First Standalone Component

**Course step:** 03 · **Branch:** `step-02-your-first-standalone-component` · **Solution tag:** `solution-step-02`

## Goal

Create your first standalone component (`Hello`) and render it from the root `App` component. No `NgModule` is involved.

## What you'll learn

- What a standalone component is in Angular 21
- The `@Component` metadata: `selector`, `templateUrl`, `styleUrl`, `imports`
- How a parent component imports and renders a child
- How the CLI scaffolds components

## Starting point

The default scaffold from step 01. `App` imports only `RouterOutlet` and its template is just `<router-outlet />`.

## Tasks

- [ ] **1.** Generate the component with `ng generate component hello` (or `ng g c hello`). Confirm it creates `hello.ts`, `hello.html`, `hello.css`, and `hello.spec.ts`.
- [ ] **2.** In `hello.html`, add the paragraph `<p>This is my first standalone component</p>`.
- [ ] **3.** In `hello.ts`, check the `@Component` metadata: selector `app-hello`, `templateUrl`, `styleUrl`; the class body can stay empty for now.
- [ ] **4.** Import `Hello` in `src/app/app.ts` and add it to the root component's `imports` array.
- [ ] **5.** Render `<app-hello/>` in `src/app/app.html` above `<router-outlet />`.
- [ ] **6.** Comment out or update the default `should render title` test in `app.spec.ts` so the suite stays green (the default title assertion no longer matches).

## Hints

<details>
<summary><strong>Standalone by default</strong></summary>

In Angular 21, `ng g c` produces a standalone component automatically; there is no `standalone: true` flag to add.

</details>

<details>
<summary><strong>Component is not rendering</strong></summary>

A component only renders if the parent lists it in `imports` (for standalone) and the template contains its selector, e.g. `<app-hello/>`.

</details>

<details>
<summary><strong>Selector mismatch</strong></summary>

The selector in `@Component` must match the tag in the template. The CLI derives `app-hello` from the project prefix and component name.

</details>

## Acceptance criteria

- [ ] The page shows “This is my first standalone component”
- [ ] `App` imports `Hello`; there are no `declarations` or `NgModule`s anywhere
- [ ] `npm test` and `npm run build` pass

## Files you'll touch

| File | What changes |
|---|---|
| `src/app/hello/hello.ts` | New standalone component with `selector: 'app-hello'` |
| `src/app/hello/hello.html` | Static paragraph |
| `src/app/hello/hello.css` | Empty stylesheet |
| `src/app/hello/hello.spec.ts` | CLI-generated creation test |
| `src/app/app.ts` | Imports `Hello` into the root component |
| `src/app/app.html` | Renders `<app-hello/>` |
| `src/app/app.spec.ts` | Default title test commented out |

## Run it

```bash
npm install
npm start
```

Then open <http://localhost:4200>. Use `npm test` for the unit tests and `npm run build` before you compare with the solution.

## Notes

`Hello` is a teaching component. Later steps leave the file in place but stop rendering it once the real header and products UI arrive. Keep it around for reference.
