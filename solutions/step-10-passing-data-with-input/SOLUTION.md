# Step 10 — Passing Data to Child Components with input() (solution)

**Course commit:** `5630c9e` · **Branch:** `step-10-passing-data-with-input` · **Solution tag:** `solution-step-10`

This folder contains the completed code for this step. The tag points at the same state in the `solution` branch history.

## What was done

- Declared a required signal input for the product
- Added an optional button-label input with a default
- Rendered the product fields and label in the card
- Bound each product from the `@for` loop
- Updated the generated card spec to provide the required input

## Solution files

The exact changed files are in [`files/`](./files/), mirroring the project paths:

- [`files/src/app/products/product-card/product-card.ts`](./files/src/app/products/product-card/product-card.ts)
- [`files/src/app/products/product-card/product-card.html`](./files/src/app/products/product-card/product-card.html)
- [`files/src/app/products/product-card/product-card.spec.ts`](./files/src/app/products/product-card/product-card.spec.ts)
- [`files/src/app/products/products-grid/products-grid.html`](./files/src/app/products/products-grid/products-grid.html)
- [`files/src/app/products/products-grid/products-grid.css`](./files/src/app/products/products-grid/products-grid.css)

> `package-lock.json` is omitted from the excerpt when it changed. Run `npm install` to regenerate it locally.

## Verify it

```bash
npm install
npm start
```

- [ ] The three cards show real names, descriptions, and prices
- [ ] The button label comes from the input default
- [ ] The parent does not pass `addButtonLabel` (the default is intentional)
- [ ] No `@Input()` decorators are used
- [ ] `npm test` passes (including the updated `ProductCard` spec)

## Notes

Signal inputs replaced the decorator-based `@Input()` API. `input.required` documents and enforces that the parent must provide a product.
