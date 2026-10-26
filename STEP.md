# Step 10 — Passing Data to Child Components with input()

**Course step:** 11 · **Branch:** `step-10-passing-data-with-input` · **Solution tag:** `solution-step-10`

## Goal

Pass each product into the card with signal inputs and render real product data.

## What you'll learn

- `input.required<T>()`
- Optional inputs with a default: `input(...)`
- Binding inputs in a parent template
- Calling input signals in the child template

## Starting point

`ProductsGrid` has a `products` signal and loops with `@for`, but `ProductCard` has no inputs and renders placeholder text.

## Tasks

- [ ] **1.** In `product-card.ts`, import `input` and `Product`.
- [ ] **2.** Add `readonly product = input.required<Product>()` and `readonly addButtonLabel = input('Add to Cart')`.
- [ ] **3.** Update the card template to render `product().name`, `product().description`, `product().price`, and `addButtonLabel()`.
- [ ] **4.** In `products-grid.html`, bind the product: `<app-product-card [product]="product"/>`.
- [ ] **5.** Move the total-products heading below the grid and add `margin-top: 5px` to the grid.
- [ ] **6.** Update the generated `product-card.spec.ts`: set the required input with `fixture.componentRef.setInput('product', {...})` before `whenStable()`, then run `npm test`.

## Hints

<details>
<summary><strong>Required input error</strong></summary>

`input.required<Product>()` throws if the parent forgets `[product]`. That is the point — it makes the contract explicit.

</details>

<details>
<summary><strong>Reading inputs</strong></summary>

Inputs are signals. Use `product()` in the template, not `product`.

</details>

<details>
<summary><strong>Alias not needed</strong></summary>

The property name `product` becomes the binding name `[product]`.

</details>

<details>
<summary><strong>The generated card spec now fails</strong></summary>

After adding `input.required`, creating `ProductCard` in isolation throws `NG0950: Input "product" is required but no value is available yet`. Provide a value before stability: `fixture.componentRef.setInput('product', { id: 1, name: 'Test', description: '...', price: 1 })`.

</details>

## Acceptance criteria

- [ ] The three cards show real names, descriptions, and prices
- [ ] The button label comes from the input default
- [ ] The parent does not pass `addButtonLabel` (the default is intentional)
- [ ] No `@Input()` decorators are used
- [ ] `npm test` passes (including the updated `ProductCard` spec)

## Files you'll touch

| File | What changes |
|---|---|
| `src/app/products/product-card/product-card.ts` | `input.required<Product>()` + optional label input |
| `src/app/products/product-card/product-card.html` | Renders `product()` data |
| `src/app/products/product-card/product-card.spec.ts` | Provides the required input in the test |
| `src/app/products/products-grid/products-grid.html` | Passes `[product]="product"` |
| `src/app/products/products-grid/products-grid.css` | Grid margin tweak |

## Run it

```bash
npm install
npm start
```

Then open <http://localhost:4200>. Use `npm test` for the unit tests and `npm run build` before you compare with the solution.
