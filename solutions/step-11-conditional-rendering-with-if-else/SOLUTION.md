# Step 11 — Conditional Rendering with @if and @else (solution)

**Course commit:** `127f611` · **Branch:** `step-11-conditional-rendering-with-if-else` · **Solution tag:** `solution-step-11`

This folder contains the completed code for this step. The tag points at the same state in the `solution` branch history.

## What was done

- Removed the category subtitle placeholder
- Conditionally rendered the sale badge and both prices
- Added the sale/price CSS

## Solution files

The exact changed files are in [`files/`](./files/), mirroring the project paths:

- [`files/src/app/products/product-card/product-card.html`](./files/src/app/products/product-card/product-card.html)
- [`files/src/app/products/product-card/product-card.css`](./files/src/app/products/product-card/product-card.css)

> `package-lock.json` is omitted from the excerpt when it changed. Run `npm install` to regenerate it locally.

## Verify it

```bash
npm install
npm start
```

- [ ] Sale products show a badge and a struck-through original price
- [ ] The regular product shows only one price
- [ ] Description still renders below the price block
- [ ] No `*ngIf` is used

## Notes

`@if` also accepts an `@else if` chain if you need more than two branches. For a simple optional field, `@if` / `@else` is enough.
