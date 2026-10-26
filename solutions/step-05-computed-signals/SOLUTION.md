# Step 05 — Computed Signals (solution)

**Course commit:** `fb82541` · **Branch:** `step-05-computed-signals` · **Solution tag:** `solution-step-05`

This folder contains the completed code for this step. The tag points at the same state in the `solution` branch history.

## What was done

- Added `doubleCount = computed(() => this.count() * 2)`
- Displayed both the count and the derived value
- Made the handlers `protected` for template access

## Solution files

The exact changed files are in [`files/`](./files/), mirroring the project paths:

- [`files/src/app/hello/hello.ts`](./files/src/app/hello/hello.ts)
- [`files/src/app/hello/hello.html`](./files/src/app/hello/hello.html)

> `package-lock.json` is omitted from the excerpt when it changed. Run `npm install` to regenerate it locally.

## Verify it

```bash
npm install
npm start
```

- [ ] Double Count is always exactly twice Count
- [ ] No manual update of `doubleCount` exists
- [ ] Template reads both signals with `()`

## Notes

Computed signals are memoized and lazy. They are the right tool for filtering (step 13) and cart totals (step 16).
