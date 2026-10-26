# Step 13 — Filtering Products with Computed Signals (solution)

**Course commit:** `fde7379` · **Branch:** `step-13-filtering-products-with-computed-signals` · **Solution tag:** `solution-step-13`

This folder contains the completed code for this step. The tag points at the same state in the `solution` branch history.

## What was done

- Added a `filteredProducts` computed signal
- Normalized the search term and filtered by product name
- Switched the `@for` loop to the filtered list
- Updated the empty-state copy

## Solution files

The exact changed files are in [`files/`](./files/), mirroring the project paths:

- [`files/src/app/products/products-grid/products-grid.ts`](./files/src/app/products/products-grid/products-grid.ts)
- [`files/src/app/products/products-grid/products-grid.html`](./files/src/app/products/products-grid/products-grid.html)

> `package-lock.json` is omitted from the excerpt when it changed. Run `npm install` to regenerate it locally.

## Verify it

```bash
npm install
npm start
```

- [ ] Searching narrows the grid live
- [ ] Clearing the input restores all products
- [ ] A non-matching term shows the empty state
- [ ] `products` is never mutated; filtering produces a new array

## Notes

This is the canonical signal use case: one writable source (`searchTerm` + `products`) and one derived read-only view (`filteredProducts`). No effect is needed.
