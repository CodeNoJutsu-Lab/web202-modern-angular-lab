# Step 09 — Rendering Lists with Signals and @for

**Course step:** 10 · **Branch:** `step-09-rendering-lists-with-signals-and-for` · **Solution tag:** `solution-step-09`

## Goal

Model products, hold them in a writable signal, and render the list with `@for` (including `track` and `@empty`).

## What you'll learn

- TypeScript interfaces for domain models
- Signals holding arrays
- `@for` with `track`
- `@empty` blocks
- Why `track` matters for DOM reuse

## Starting point

The grid renders five hardcoded `<app-product-card/>` placeholders; there is no `Product` type and no data.

## Tasks

- [ ] **1.** Create `src/app/products/product.ts` with `id`, `name`, `description`, `price`, and optional `originalPrice`.
- [ ] **2.** In `products-grid.ts`, import `signal`, `Product`, and `MatIconModule`; add a `products` signal containing three products (use the reference values or invent your own).
- [ ] **3.** Replace the five static cards with `@for (product of products(); track product.id) { ... }`.
- [ ] **4.** Add an `@empty` block with a `mat-icon` and a “No products available” message.
- [ ] **5.** Show `Total products: {{ products().length }}` above the grid.
- [ ] **6.** Rename `.grid` to `.products-grid`, add `.products-container` and the empty-state styles.

## Hints

<details>
<summary><strong>`@empty` is part of `@for`</strong></summary>

The `@empty` block must sit immediately after the `@for` block; it has no condition of its own.

</details>

<details>
<summary><strong>Cards still show placeholder text</strong></summary>

Correct — `ProductCard` does not accept an input yet. Step 10 wires the data into the card.

</details>

<details>
<summary><strong>Do not use `*ngFor`</strong></summary>

This course uses the built-in control flow. `@for` requires a `track` expression.

</details>

## Acceptance criteria

- [ ] Three cards render from the signal (placeholder card content is expected at this stage)
- [ ] The total reads 3
- [ ] The loop uses `track product.id`
- [ ] An `@empty` block exists and would render for an empty array

## Files you'll touch

| File | What changes |
|---|---|
| `src/app/products/product.ts` | New `Product` interface |
| `src/app/products/products-grid/products-grid.ts` | Products signal + `MatIconModule` |
| `src/app/products/products-grid/products-grid.html` | `@for` / `@empty` and total count |
| `src/app/products/products-grid/products-grid.css` | Container, grid, and empty-state styles |

## Run it

```bash
npm install
npm start
```

Then open <http://localhost:4200>. Use `npm test` for the unit tests and `npm run build` before you compare with the solution.

## Notes

The `empty-state` CSS uses Material system variables (`--mat-sys-*`). They are available because the theme is loaded globally.
