# Step 06 — Effects (Signals)

**Course step:** 07 · **Branch:** `step-06-effects-signals` · **Solution tag:** `solution-step-06`

## Goal

Use `effect()` to run a side effect whenever the counter changes, and understand when effects are the right tool.

## What you'll learn

- Creating an effect in an injection context
- Automatic dependency tracking
- The difference between `computed` and `effect`
- Why effects are for side effects, not state

## Starting point

`Hello` has `count` and `doubleCount` signals; nothing logs changes.

## Tasks

- [ ] **1.** Import `effect` from `@angular/core`.
- [ ] **2.** Add `private readonly countLog = effect(() => console.log('Count changed: ', this.count()))`.
- [ ] **3.** Open the browser console: the effect logs once immediately, then once per counter change.
- [ ] **4.** Keep a reference to the effect (the field does this); do not create it inline in a method that runs repeatedly.

## Hints

<details>
<summary><strong>Effect timing</strong></summary>

Effects run at least once after creation and then whenever a tracked signal changes. The first run is not an error.

</details>

<details>
<summary><strong>Injection context</strong></summary>

Creating an effect in a field initializer or constructor is safe; Angular ties its lifetime to the component. Creating one inside a click handler is usually a bug.

</details>

<details>
<summary><strong>Effect vs computed</strong></summary>

If you only need a value, use `computed`. Use `effect` for things like logging, storage, or imperative APIs.

</details>

## Acceptance criteria

- [ ] Console shows `Count changed: 0` on load
- [ ] Each +/−/RESET produces exactly one new log
- [ ] No signal is written inside the effect (no loop)

## Files you'll touch

| File | What changes |
|---|---|
| `src/app/hello/hello.ts` | Adds the `countLog` effect |

## Run it

```bash
npm install
npm start
```

Then open <http://localhost:4200>. Use `npm test` for the unit tests and `npm run build` before you compare with the solution.

## Notes

Effects are intentionally not used for the product filtering later in the course — that is a pure derivation, so `computed` is the correct tool.
