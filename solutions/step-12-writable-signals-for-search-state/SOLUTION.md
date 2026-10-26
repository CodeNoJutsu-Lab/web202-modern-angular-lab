# Step 12 — Writable Signals for Search State (solution)

**Course commit:** `7d8458b` · **Branch:** `step-12-writable-signals-for-search-state` · **Solution tag:** `solution-step-12`

This folder contains the completed code for this step. The tag points at the same state in the `solution` branch history.

## What was done

- Added a writable `searchTerm` signal
- Imported the Material input/form-field modules and `FormsModule`
- Bound the input two-way to the signal
- Added a temporary preview and helper methods

## Solution files

The exact changed files are in [`files/`](./files/), mirroring the project paths:

- [`files/src/app/products/products-grid/products-grid.ts`](./files/src/app/products/products-grid/products-grid.ts)
- [`files/src/app/products/products-grid/products-grid.html`](./files/src/app/products/products-grid/products-grid.html)
- [`files/src/app/products/products-grid/products-grid.css`](./files/src/app/products/products-grid/products-grid.css)

> `package-lock.json` is omitted from the excerpt when it changed. Run `npm install` to regenerate it locally.

## Verify it

```bash
npm install
npm start
```

- [ ] Typing updates the preview immediately
- [ ] The input is a Material outlined form field
- [ ] `searchTerm` is a writable signal; the template reads it with `searchTerm()`
- [ ] No filtering happens yet — the grid still shows all products

## Notes

The course uses `ngModel` rather than reactive forms here so the focus stays on signal state. `searchTerm()` is read with parentheses because it is still a signal.
