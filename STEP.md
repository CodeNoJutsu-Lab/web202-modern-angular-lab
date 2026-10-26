# Step 15 — Creating a Cart Service

**Course step:** 16 · **Branch:** `step-15-creating-a-cart-service` · **Solution tag:** `solution-step-15`

## Goal

Create a root-provided cart service, inject it into the grid, and move cart mutation out of the component.

## What you'll learn

- `@Injectable({ providedIn: 'root' })`
- `inject()` in a component
- Signals inside a service
- Immutable array updates
- Why business logic belongs in a service

## Starting point

The grid logs the clicked product from `onAddToCard`. There is no cart.

## Tasks

- [ ] **1.** Generate a service: `ng g service cart/cart-service` (or create the file) with `providedIn: 'root'`.
- [ ] **2.** Hold `private readonly cartItem = signal<Product[]>([])`.
- [ ] **3.** Implement `addToCart(product)` with `update(items => [...items, product])` (a copy, not `push`).
- [ ] **4.** In `products-grid.ts`, inject the service: `private readonly cartService = inject(CartService)`.
- [ ] **5.** Replace the `console.log` in `onAddToCard` with `this.cartService.addToCart(product)`.
- [ ] **6.** Optional: compare with the commented constructor-injection version in the reference solution.

## Hints

<details>
<summary><strong>`inject()` context</strong></summary>

Call `inject()` in a field initializer or constructor. Calling it later inside a method throws.

</details>

<details>
<summary><strong>Mutating arrays</strong></summary>

`update(items => { items.push(product); return items; })` mutates in place and can defeat change detection. Always return a new array.

</details>

<details>
<summary><strong>Constructor injection</strong></summary>

`constructor(private cartService: CartService)` still works; the course uses `inject()` for brevity. Do not do both.

</details>

## Acceptance criteria

- [ ] The service is a singleton available app-wide through DI
- [ ] Clicking a card appends to the service signal
- [ ] The grid no longer owns cart state
- [ ] `CartService`'s generated creation test passes

## Files you'll touch

| File | What changes |
|---|---|
| `src/app/cart/cart-service.ts` | Root service with a cart signal |
| `src/app/cart/cart-service.spec.ts` | CLI-generated creation test |
| `src/app/products/products-grid/products-grid.ts` | Injects the service and delegates |

## Run it

```bash
npm install
npm start
```

Then open <http://localhost:4200>. Use `npm test` for the unit tests and `npm run build` before you compare with the solution.

## Notes

At this point the cart is in memory only and has no UI. Reloading the page clears it — persistence is out of scope for the course.
