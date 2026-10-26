# Step 16 — Cart Badge with Computed Signals (solution)

**Course commit:** `3133eb2` · **Branch:** `step-16-cart-badge-with-computed-signals` · **Solution tag:** `solution-step-16`

This folder contains the completed code for this step. The tag points at the same state in the `solution` branch history.

## What was done

- Added the `CartItem` model with quantity
- Merged duplicate products by incrementing quantity
- Derived the total item count with `computed()`
- Injected the service into the header and bound a Material badge

## Solution files

The exact changed files are in [`files/`](./files/), mirroring the project paths:

- [`files/src/app/cart/cart-item.ts`](./files/src/app/cart/cart-item.ts)
- [`files/src/app/cart/cart-service.ts`](./files/src/app/cart/cart-service.ts)
- [`files/src/app/header/header.ts`](./files/src/app/header/header.ts)
- [`files/src/app/header/header.html`](./files/src/app/header/header.html)

> `package-lock.json` is omitted from the excerpt when it changed. Run `npm install` to regenerate it locally.

## Verify it

```bash
npm install
npm start
```

- [ ] Badge is hidden when the cart is empty
- [ ] Adding the same product twice increments quantity (the array does not grow)
- [ ] The badge total equals the sum of quantities
- [ ] `npm run build` and `npm test` pass

## Notes

The derived total is computed from state, not stored. That means it cannot drift out of sync with the cart array.
