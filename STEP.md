# Step 08 — Products Grid with Angular Material

**Course step:** 09 · **Branch:** `step-08-products-grid-with-angular-material` · **Solution tag:** `solution-step-08`

## Goal

Create the products feature shell: a reusable product card and a responsive grid, then place the grid in the app layout.

## What you'll learn

- Feature folder organization (`products/`)
- Presentational components with Angular Material cards
- CSS Grid with `auto-fill` and `minmax`
- Composing a page in the root component

## Starting point

The toolbar renders; there is no products UI. `App` only renders the header.

## Tasks

- [ ] **1.** Generate `products/product-card` and `products/products-grid` components.
- [ ] **2.** In `product-card.ts`, import `MatCardModule` and `MatButtonModule`.
- [ ] **3.** Build `product-card.html` with `mat-card`, `mat-card-header`, `mat-card-content`, and `mat-card-actions`; use placeholder text and an Add to Cart button.
- [ ] **4.** Add the card CSS (`height: 100%`, flex column, `mat-card-content { flex: 1 }`).
- [ ] **5.** In `products-grid.ts`, import `ProductCard`; in the template render five `<app-product-card/>` inside a grid container.
- [ ] **6.** Add the responsive grid CSS (`repeat(auto-fill, minmax(280px, 1fr))`, 16px gap).
- [ ] **7.** In `app.ts`, import `ProductsGrid`; in `app.html`, add `<main class="page"><app-products-grid/></main>` below the header.
- [ ] **8.** Add the `.page` rule to `app.css` (max-width 1200px, centered, small padding).

## Hints

<details>
<summary><strong>Card content does not stretch</strong></summary>

`mat-card-content { flex: 1 }` plus a flex-column card makes the actions sit at the bottom of equal-height cards.

</details>

<details>
<summary><strong>Grid class mismatch</strong></summary>

The grid CSS class must match the template (`.grid` at this step). The next step renames it to `.products-grid`.

</details>

<details>
<summary><strong>Component not found</strong></summary>

Import and register `ProductsGrid` in `App`, and `ProductCard` in `ProductsGrid`; standalone components do not inherit each other's imports.

</details>

## Acceptance criteria

- [ ] Five identical placeholder cards appear below the toolbar
- [ ] The grid reflows from one to multiple columns as the window widens
- [ ] The card component is presentational and knows nothing about data yet
- [ ] `npm run build` passes

## Files you'll touch

| File | What changes |
|---|---|
| `src/app/products/product-card/product-card.ts` | Card component + Material imports |
| `src/app/products/product-card/product-card.html` | mat-card placeholder markup |
| `src/app/products/product-card/product-card.css` | Equal-height card layout |
| `src/app/products/product-card/product-card.spec.ts` | CLI-generated test |
| `src/app/products/products-grid/products-grid.ts` | Grid component + `ProductCard` import |
| `src/app/products/products-grid/products-grid.html` | Five static cards |
| `src/app/products/products-grid/products-grid.css` | Responsive grid |
| `src/app/products/products-grid/products-grid.spec.ts` | CLI-generated test |
| `src/app/app.ts` | Registers `ProductsGrid` |
| `src/app/app.html` | Adds the `<main class="page">` layout |
| `src/app/app.css` | `.page` container styles |

## Run it

```bash
npm install
npm start
```

Then open <http://localhost:4200>. Use `npm test` for the unit tests and `npm run build` before you compare with the solution.
