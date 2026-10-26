# Step 03 — Component Templates & Interaction (solution)

**Course commit:** `de72208` · **Branch:** `step-03-component-templates-and-interaction` · **Solution tag:** `solution-step-03`

This folder contains the completed code for this step. The tag points at the same state in the `solution` branch history.

## What was done

- Added a component field for the title and a boolean disabled state
- Wired interpolation, property binding, and event binding in the template
- Made the click handler disable the button and fire an alert

## Solution files

The exact changed files are in [`files/`](./files/), mirroring the project paths:

- [`files/src/app/hello/hello.ts`](./files/src/app/hello/hello.ts)
- [`files/src/app/hello/hello.html`](./files/src/app/hello/hello.html)

> `package-lock.json` is omitted from the excerpt when it changed. Run `npm install` to regenerate it locally.

## Verify it

```bash
npm install
npm start
```

- [ ] The heading shows “Welcome to Modern Angular”
- [ ] Clicking Toggle disables the button and fires the alert
- [ ] No event handler is attached with `onclick=`; Angular binding syntax is used

## Notes

Plain class fields are enough for local UI state. Signals (next step) add reactivity, but templates can already bind to any field.
