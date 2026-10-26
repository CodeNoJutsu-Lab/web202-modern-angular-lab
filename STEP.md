# Step 05 — Computed Signals

**Course step:** 06 · **Branch:** `step-05-computed-signals` · **Solution tag:** `solution-step-05`

## Goal

Derive state with a computed signal so the doubled value stays in sync automatically.

## What you'll learn

- `computed()` for derived state
- Dependency tracking between signals
- Why derived state should not be duplicated
- Read-only nature of computed signals

## Starting point

`count` is a writable signal and the template shows only the raw count.

## Tasks

- [ ] **1.** Import `computed` and add `protected doubleCount = computed(() => this.count() * 2)`.
- [ ] **2.** Update the template to show `Count: {{ count() }}` and `Double Count: {{ doubleCount() }}`.
- [ ] **3.** Mark `increaseCounter`, `descreaseCounter`, and `resetCounter` as `protected` so the template can keep calling them.
- [ ] **4.** Click + and − and verify both numbers stay in sync.

## Hints

<details>
<summary><strong>Computed is lazy and cached</strong></summary>

The function runs when the value is read and is recomputed only when a signal it read changes. Do not call `doubleCount.set(...)`.

</details>

<details>
<summary><strong>Do not write to computed</strong></summary>

`computed()` returns a read-only signal. Derive it from `count`; never try to assign to it.

</details>

<details>
<summary><strong>Methods must be visible to the template</strong></summary>

If you made the handlers `private`, the template cannot call them. Use `protected`.

</details>

## Acceptance criteria

- [ ] Double Count is always exactly twice Count
- [ ] No manual update of `doubleCount` exists
- [ ] Template reads both signals with `()`

## Files you'll touch

| File | What changes |
|---|---|
| `src/app/hello/hello.ts` | Adds `doubleCount` computed and `protected` handlers |
| `src/app/hello/hello.html` | Displays both values |

## Run it

```bash
npm install
npm start
```

Then open <http://localhost:4200>. Use `npm test` for the unit tests and `npm run build` before you compare with the solution.
