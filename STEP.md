# Step 12 — Writable Signals for Search State

**Course step:** 13 · **Branch:** `step-12-writable-signals-for-search-state` · **Solution tag:** `solution-step-12`

## Goal

Add a search field backed by a writable signal, bound two-way with `ngModel`.

## What you'll learn

- Writable signals as form state
- `[(ngModel)]` two-way binding with a signal (Angular 21)
- Material form field + input modules
- Keeping derived state (filtering) out of this step

## Starting point

The grid displays all products. There is no search UI or `searchTerm` state.

## Tasks

- [ ] **1.** Import `MatInputModule`, `FormsModule`, and `MatFormFieldModule` in `products-grid.ts` and add them to `imports`.
- [ ] **2.** Add `protected readonly searchTerm = signal('')`.
- [ ] **3.** Add a `mat-form-field` with `mat-label` “Search Products” and an `<input matInput [(ngModel)]="searchTerm" placeholder="e.g. headphones"/>`.
- [ ] **4.** Show a temporary preview: `<p class="search-preview">Search Term: {{ searchTerm() }}</p>`.
- [ ] **5.** Add `clearSearch()` (`.set('')`) and optionally `trimSearch()` (`.update(v => v.trim())`).
- [ ] **6.** Add `.search-field` and `.search-preview` styles.

## Hints

<details>
<summary><strong>Two-way binding to a signal</strong></summary>

Angular 21 understands a writable signal on the right-hand side of `[(ngModel)]` and writes through it. Do not replace it with a plain string field.

</details>

<details>
<summary><strong>Missing `matInput`</strong></summary>

The `matInput` attribute is what wires the native input into the Material form field.

</details>

<details>
<summary><strong>`ngModel` without `name`</strong></summary>

Outside a form, no `name` is required. If you later wrap this in a `<form>`, add `name="search"` or use `[ngModelOptions]="{standalone: true}"`.

</details>

## Acceptance criteria

- [ ] Typing updates the preview immediately
- [ ] The input is a Material outlined form field
- [ ] `searchTerm` is a writable signal; the template reads it with `searchTerm()`
- [ ] No filtering happens yet — the grid still shows all products

## Files you'll touch

| File | What changes |
|---|---|
| `src/app/products/products-grid/products-grid.ts` | `searchTerm` signal + Material/forms imports + clearSearch |
| `src/app/products/products-grid/products-grid.html` | Search form field and preview |
| `src/app/products/products-grid/products-grid.css` | Search field/preview styles |

## Run it

```bash
npm install
npm start
```

Then open <http://localhost:4200>. Use `npm test` for the unit tests and `npm run build` before you compare with the solution.

## Notes

`clearSearch()` is not wired to a button in the course. Add a suffix clear icon as an optional polish task; step 13 is where the signal starts driving the list.
