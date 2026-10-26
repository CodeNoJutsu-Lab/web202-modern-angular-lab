# Step 13 — Filtering Products with Computed Signals

**Course step:** 14 · **Branch:** `step-13-filtering-products-with-computed-signals` · **Solution tag:** `solution-step-13`

## Goal

Derive a filtered product list with `computed()` and feed the `@for` from it.

## What you'll learn

- `computed()` over a signal array
- Normalizing user input (lowercase + trim)
- Filtering without mutating source state
- Empty results and the `@empty` block

## Starting point

`searchTerm` exists and the preview updates, but the grid still renders `products()`.

## Tasks

- [ ] **1.** Import `computed` in `products-grid.ts`.
- [ ] **2.** Add `filteredProducts = computed(() => ...)` that lowercases/trims the term, returns all products for an empty term, and filters by product name.
- [ ] **3.** Change the loop to `@for (product of filteredProducts(); track product.id)`.
- [ ] **4.** Update the `@empty` message to “No products match your search”.
- [ ] **5.** Comment out or remove the search preview.
- [ ] **6.** Try “watch”, “head”, and a nonsense term; verify the empty state.

## Hints

<details>
<summary><strong>Signals compose</strong></summary>

`filteredProducts` reads `searchTerm()` and `products()`, so Angular recomputes it when either changes.

</details>

<details>
<summary><strong>Return all for an empty term</strong></summary>

Without the early return, `''.includes('')` is true for every product, but the early return is clearer and avoids extra work.

</details>

<details>
<summary><strong>Case and whitespace</strong></summary>

Normalize both sides: `term = searchTerm().toLocaleLowerCase().trim()` and compare with `product.name.toLocaleLowerCase()`.

</details>

## Acceptance criteria

- [ ] Searching narrows the grid live
- [ ] Clearing the input restores all products
- [ ] A non-matching term shows the empty state
- [ ] `products` is never mutated; filtering produces a new array

## Files you'll touch

| File | What changes |
|---|---|
| `src/app/products/products-grid/products-grid.ts` | Adds `filteredProducts` computed |
| `src/app/products/products-grid/products-grid.html` | Loops over `filteredProducts()` and updates empty text |

## Run it

```bash
npm install
npm start
```

Then open <http://localhost:4200>. Use `npm test` for the unit tests and `npm run build` before you compare with the solution.

## Notes

The original course commit also appends `|| this.products().toLocaleString().includes(term)`. That fallback can never run (an empty array is truthy) and would return a boolean if it did. The reference solution keeps the commit's code for fidelity; remove the fallback and, if you want, also search `description`.
