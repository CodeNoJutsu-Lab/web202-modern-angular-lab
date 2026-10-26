# Step 15 — Creating a Cart Service (solution)

**Course commit:** `3b6bd0e` · **Branch:** `step-15-creating-a-cart-service` · **Solution tag:** `solution-step-15`

This folder contains the completed code for this step. The tag points at the same state in the `solution` branch history.

## What was done

- Created a root-provided `CartService`
- Stored cart products in a private signal
- Appended immutably in `addToCart`
- Injected the service into the grid with `inject()`

## Solution files

The exact changed files are in [`files/`](./files/), mirroring the project paths:

- [`files/src/app/cart/cart-service.ts`](./files/src/app/cart/cart-service.ts)
- [`files/src/app/cart/cart-service.spec.ts`](./files/src/app/cart/cart-service.spec.ts)
- [`files/src/app/products/products-grid/products-grid.ts`](./files/src/app/products/products-grid/products-grid.ts)

> `package-lock.json` is omitted from the excerpt when it changed. Run `npm install` to regenerate it locally.

## Verify it

```bash
npm install
npm start
```

- [ ] The service is a singleton available app-wide through DI
- [ ] Clicking a card appends to the service signal
- [ ] The grid no longer owns cart state
- [ ] `CartService`'s generated creation test passes

## Notes

A root service is a singleton for the app's lifetime. Keeping the cart signal private means consumers must go through `addToCart` — a good default until you need read access (step 16 adds a derived total).
