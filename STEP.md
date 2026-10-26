# Step 03 — Component Templates & Interaction

**Course step:** 04 · **Branch:** `step-03-component-templates-and-interaction` · **Solution tag:** `solution-step-03`

## Goal

Make the `Hello` component interactive: interpolate state, bind it to the DOM, and react to a click.

## What you'll learn

- Interpolation with `{{ }}`
- Property binding with `[disabled]`
- Event binding with `(click)`
- Component state as plain class fields

## Starting point

`Hello` renders one static paragraph and has an empty class body.

## Tasks

- [ ] **1.** Add `protected title = 'Welcome to Modern Angular'` to `Hello`.
- [ ] **2.** Add `protected isDisabled = false`.
- [ ] **3.** Add `protected onClick() { this.isDisabled = true; alert('Button clicked'); }`.
- [ ] **4.** In `hello.html`, render `{{ title }}` in an `<h1>`.
- [ ] **5.** Add `<button [disabled]="isDisabled" (click)="onClick()">Toggle</button>`.
- [ ] **6.** Click the button: it should disable itself and show the alert.

## Hints

<details>
<summary><strong>`protected` and templates</strong></summary>

Angular templates can read `protected` members. `protected` keeps the API out of the public surface while still allowing the template to bind.

</details>

<details>
<summary><strong>Binding syntax</strong></summary>

`[disabled]` sets a DOM property from an expression; `(click)` listens to the DOM event. `{{ }}` is interpolation.

</details>

<details>
<summary><strong>Alert fires twice?</strong></summary>

Make sure you used `(click)="onClick()"` exactly once — a plain `onclick` attribute plus Angular's binding would both run.

</details>

## Acceptance criteria

- [ ] The heading shows “Welcome to Modern Angular”
- [ ] Clicking Toggle disables the button and fires the alert
- [ ] No event handler is attached with `onclick=`; Angular binding syntax is used

## Files you'll touch

| File | What changes |
|---|---|
| `src/app/hello/hello.ts` | Adds `title`, `isDisabled`, and `onClick()` |
| `src/app/hello/hello.html` | Adds interpolation, `[disabled]`, and `(click)` |

## Run it

```bash
npm install
npm start
```

Then open <http://localhost:4200>. Use `npm test` for the unit tests and `npm run build` before you compare with the solution.
