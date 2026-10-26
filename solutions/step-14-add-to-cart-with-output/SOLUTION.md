# Step 14 — Add to Cart with output() (solution)

**Course commit:** `50c9c8e` · **Branch:** `step-14-add-to-cart-with-output` · **Solution tag:** `solution-step-14`

This folder contains the completed code for this step. The tag points at the same state in the `solution` branch history.

## What was done

- Added a typed `addToCart` output to the card
- Emitted the current product on button click
- Listened to the event in the grid and logged the payload

## Solution files

The exact changed files are in [`files/`](./files/), mirroring the project paths:

- [`files/src/app/products/product-card/product-card.ts`](./files/src/app/products/product-card/product-card.ts)
- [`files/src/app/products/product-card/product-card.html`](./files/src/app/products/product-card/product-card.html)
- [`files/src/app/products/products-grid/products-grid.html`](./files/src/app/products/products-grid/products-grid.html)
- [`files/src/app/products/products-grid/products-grid.ts`](./files/src/app/products/products-grid/products-grid.ts)

> `package-lock.json` is omitted from the excerpt when it changed. Run `npm install` to regenerate it locally.

## Verify it

```bash
npm install
npm start
```

- [ ] Clicking each card logs that card's product name
- [ ] The child never touches parent state directly
- [ ] The event is typed as `Product` in the parent handler

## Notes

This is the “events up” half of unidirectional data flow. The card owns no cart logic; it just announces what the user did.
