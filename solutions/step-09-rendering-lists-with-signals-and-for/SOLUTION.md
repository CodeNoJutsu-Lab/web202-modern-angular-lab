# Step 09 — Rendering Lists with Signals and @for (solution)

**Course commit:** `c969d05` · **Branch:** `step-09-rendering-lists-with-signals-and-for` · **Solution tag:** `solution-step-09`

This folder contains the completed code for this step. The tag points at the same state in the `solution` branch history.

## What was done

- Added the `Product` interface
- Held the catalogue in a `signal<Product[]>`
- Replaced static cards with `@for` + `track`
- Added the total count and an `@empty` state

## Solution files

The exact changed files are in [`files/`](./files/), mirroring the project paths:

- [`files/src/app/products/product.ts`](./files/src/app/products/product.ts)
- [`files/src/app/products/products-grid/products-grid.ts`](./files/src/app/products/products-grid/products-grid.ts)
- [`files/src/app/products/products-grid/products-grid.html`](./files/src/app/products/products-grid/products-grid.html)
- [`files/src/app/products/products-grid/products-grid.css`](./files/src/app/products/products-grid/products-grid.css)

> `package-lock.json` is omitted from the excerpt when it changed. Run `npm install` to regenerate it locally.

## Verify it

```bash
npm install
npm start
```

- [ ] Three cards render from the signal (placeholder card content is expected at this stage)
- [ ] The total reads 3
- [ ] The loop uses `track product.id`
- [ ] An `@empty` block exists and would render for an empty array

## Notes

At this point the card still renders placeholder text because it has no inputs. That is the expected state between steps 09 and 10.
