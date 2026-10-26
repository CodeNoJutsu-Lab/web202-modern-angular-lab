# Step 08 — Products Grid with Angular Material (solution)

**Course commit:** `94c8b13` · **Branch:** `step-08-products-grid-with-angular-material` · **Solution tag:** `solution-step-08`

This folder contains the completed code for this step. The tag points at the same state in the `solution` branch history.

## What was done

- Generated the `ProductCard` and `ProductsGrid` components
- Built a Material card with header, content, and actions
- Added a responsive CSS grid with five static cards
- Placed the grid in a centered `.page` container in the root template

## Solution files

The exact changed files are in [`files/`](./files/), mirroring the project paths:

- [`files/src/app/products/product-card/product-card.ts`](./files/src/app/products/product-card/product-card.ts)
- [`files/src/app/products/product-card/product-card.html`](./files/src/app/products/product-card/product-card.html)
- [`files/src/app/products/product-card/product-card.css`](./files/src/app/products/product-card/product-card.css)
- [`files/src/app/products/product-card/product-card.spec.ts`](./files/src/app/products/product-card/product-card.spec.ts)
- [`files/src/app/products/products-grid/products-grid.ts`](./files/src/app/products/products-grid/products-grid.ts)
- [`files/src/app/products/products-grid/products-grid.html`](./files/src/app/products/products-grid/products-grid.html)
- [`files/src/app/products/products-grid/products-grid.css`](./files/src/app/products/products-grid/products-grid.css)
- [`files/src/app/products/products-grid/products-grid.spec.ts`](./files/src/app/products/products-grid/products-grid.spec.ts)
- [`files/src/app/app.ts`](./files/src/app/app.ts)
- [`files/src/app/app.html`](./files/src/app/app.html)
- [`files/src/app/app.css`](./files/src/app/app.css)

> `package-lock.json` is omitted from the excerpt when it changed. Run `npm install` to regenerate it locally.

## Verify it

```bash
npm install
npm start
```

- [ ] Five identical placeholder cards appear below the toolbar
- [ ] The grid reflows from one to multiple columns as the window widens
- [ ] The card component is presentational and knows nothing about data yet
- [ ] `npm run build` passes

## Notes

This step is deliberately data-free: the point is component composition and layout. Data arrives in step 09's `Product` model and step 10's inputs.
