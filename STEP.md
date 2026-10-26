# Step 14 — Add to Cart with output()

**Course step:** 15 · **Branch:** `step-14-add-to-cart-with-output` · **Solution tag:** `solution-step-14`

## Goal

Emit the clicked product from the card with `output()` and handle it in the grid.

## What you'll learn

- `output<T>()`
- Parent listening with `(addToCart)="handler($event)"`
- Typed `$event`
- Unidirectional data flow: data down, events up

## Starting point

The card shows the product and has a button, but the button has no click handler. The grid has no event listener.

## Tasks

- [ ] **1.** In `product-card.ts`, import `output`.
- [ ] **2.** Add `readonly addToCart = output<Product>()` and `protected onAddToCart() { this.addToCart.emit(this.product()); }`.
- [ ] **3.** In `product-card.html`, bind `(click)="onAddToCart()"` on the button.
- [ ] **4.** In `products-grid.html`, listen: `<app-product-card [product]="product" (addToCart)="onAddToCard($event)"/>`.
- [ ] **5.** In `products-grid.ts`, add `onAddToCard(product: Product)` and log the product name for now.

## Hints

<details>
<summary><strong>Output name</strong></summary>

The property name `addToCart` is the event name used in the parent template.

</details>

<details>
<summary><strong>`$event` type</strong></summary>

With `output<Product>()`, `$event` is inferred as `Product`; no cast is needed.

</details>

<details>
<summary><strong>Why not call the service here?</strong></summary>

The card is presentational. It reports intent; the smart container decides what to do. Step 15 moves the handling into a service.

</details>

## Acceptance criteria

- [ ] Clicking each card logs that card's product name
- [ ] The child never touches parent state directly
- [ ] The event is typed as `Product` in the parent handler

## Files you'll touch

| File | What changes |
|---|---|
| `src/app/products/product-card/product-card.ts` | Adds `addToCart` output + emitter |
| `src/app/products/product-card/product-card.html` | Button click handler |
| `src/app/products/products-grid/products-grid.html` | Listens to `(addToCart)` |
| `src/app/products/products-grid/products-grid.ts` | Adds `onAddToCard` handler |

## Run it

```bash
npm install
npm start
```

Then open <http://localhost:4200>. Use `npm test` for the unit tests and `npm run build` before you compare with the solution.
