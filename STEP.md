# Step 11 — Conditional Rendering with @if and @else

**Course step:** 12 · **Branch:** `step-11-conditional-rendering-with-if-else` · **Solution tag:** `solution-step-11`

## Goal

Render sale and regular prices with `@if` / `@else`, and style the sale state.

## What you'll learn

- `@if` / `@else` control flow
- Conditional UI from optional data
- Class-based styling with Material system variables
- Removing stale placeholder markup

## Starting point

The card renders name, description, price, and button. Every product looks the same, even the ones with `originalPrice`.

## Tasks

- [ ] **1.** Remove the `<mat-card-subtitle>Category</mat-card-subtitle>` placeholder.
- [ ] **2.** Wrap the price area in `@if (product().originalPrice) { ... } @else { ... }`.
- [ ] **3.** In the sale branch, show an “On Sale” badge and both the current and original prices.
- [ ] **4.** In the `@else` branch, show only the current price.
- [ ] **5.** Add CSS for `.sale-badge`, `.price-row`, `.current-price`, and `.original-price` (strikethrough).
- [ ] **6.** Check the two products with `originalPrice` — both should show the sale treatment.

## Hints

<details>
<summary><strong>Truthiness is enough</strong></summary>

`originalPrice` is optional. `@if (product().originalPrice)` is false when it is `undefined` (and also when it is `0`, which is fine for this data).

</details>

<details>
<summary><strong>`@else` placement</strong></summary>

`@else` must immediately follow the closing brace of the `@if` block.

</details>

<details>
<summary><strong>CSS variables</strong></summary>

`var(--mat-sys-primary)` and `var(--mat-sys-on-surface-variant)` come from the Material theme; they keep the badge on-brand in light/dark themes.

</details>

## Acceptance criteria

- [ ] Sale products show a badge and a struck-through original price
- [ ] The regular product shows only one price
- [ ] Description still renders below the price block
- [ ] No `*ngIf` is used

## Files you'll touch

| File | What changes |
|---|---|
| `src/app/products/product-card/product-card.html` | `@if` / `@else` price block, subtitle removed |
| `src/app/products/product-card/product-card.css` | Sale badge and price styles |

## Run it

```bash
npm install
npm start
```

Then open <http://localhost:4200>. Use `npm test` for the unit tests and `npm run build` before you compare with the solution.
