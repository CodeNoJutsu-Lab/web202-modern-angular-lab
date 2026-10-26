# Step 16 — Cart Badge with Computed Signals

**Course step:** 17 · **Branch:** `step-16-cart-badge-with-computed-signals` · **Solution tag:** `solution-step-16`

## Goal

Track quantities, derive a total with `computed()`, and surface it as a cart badge in the header.

## What you'll learn

- Modeling `CartItem` with quantity
- Merging duplicate items in a signal update
- `computed()` totals in a service
- Injecting a service into the header
- `matBadge` / `matBadgeHidden`

## Starting point

`CartService` stores `Product[]` and appends; the header shows a plain cart icon.

## Tasks

- [ ] **1.** Create `src/app/cart/cart-item.ts` with `product: Product` and `quantity: number`.
- [ ] **2.** Change the service signal to `signal<CartItem[]>([])`.
- [ ] **3.** In `addToCart`, find an existing item by `product.id`; if found, return a new array with that item's quantity incremented; otherwise append `{ product, quantity: 1 }`.
- [ ] **4.** Add `readonly tottalItems = computed(() => this.cartItem().reduce((total, item) => total + item.quantity, 0))`.
- [ ] **5.** In `header.ts`, import `inject`, `CartService`, and `MatBadgeModule`; inject the service.
- [ ] **6.** In `header.html`, add `[matBadge]="cartService.tottalItems()"` and `[matBadgeHidden]="cartService.tottalItems() === 0"` to the cart icon.
- [ ] **7.** Click a product several times and confirm the badge increments; add different products and confirm the total.

## Hints

<details>
<summary><strong>Immutability in the merge</strong></summary>

Return a new item object (`{ ...item, quantity: item.quantity + 1 }`) and a new array; both are needed for signal consumers to see the change.

</details>

<details>
<summary><strong>Badge hidden</strong></summary>

`matBadgeHidden` takes a boolean. `=== 0` is clearer than relying on truthiness.

</details>

<details>
<summary><strong>Typo in the course</strong></summary>

The property is `tottalItems` in the original commit (one `t` in “total”). The reference solution keeps it for fidelity; renaming to `totalItems` is a safe refactor if you update the header too.

</details>

## Acceptance criteria

- [ ] Badge is hidden when the cart is empty
- [ ] Adding the same product twice increments quantity (the array does not grow)
- [ ] The badge total equals the sum of quantities
- [ ] `npm run build` and `npm test` pass

## Files you'll touch

| File | What changes |
|---|---|
| `src/app/cart/cart-item.ts` | New `CartItem` interface |
| `src/app/cart/cart-service.ts` | Quantities + `tottalItems` computed |
| `src/app/header/header.ts` | Injects `CartService`, imports `MatBadgeModule` |
| `src/app/header/header.html` | Cart badge bound to the total |

## Run it

```bash
npm install
npm start
```

Then open <http://localhost:4200>. Use `npm test` for the unit tests and `npm run build` before you compare with the solution.

## Notes

There is still no cart page, remove/clear, or persistence. Good extensions: a `cart` route with a list, a remove button, and `localStorage` sync via an effect.
