# Step 06 — Effects (Signals) (solution)

**Course commit:** `cff5c85` · **Branch:** `step-06-effects-signals` · **Solution tag:** `solution-step-06`

This folder contains the completed code for this step. The tag points at the same state in the `solution` branch history.

## What was done

- Imported `effect`
- Created a `countLog` effect that reads `count()`
- Relied on automatic dependency tracking instead of manual subscriptions

## Solution files

The exact changed files are in [`files/`](./files/), mirroring the project paths:

- [`files/src/app/hello/hello.ts`](./files/src/app/hello/hello.ts)

> `package-lock.json` is omitted from the excerpt when it changed. Run `npm install` to regenerate it locally.

## Verify it

```bash
npm install
npm start
```

- [ ] Console shows `Count changed: 0` on load
- [ ] Each +/−/RESET produces exactly one new log
- [ ] No signal is written inside the effect (no loop)

## Notes

Effects are for side effects (logging, storage, focus management), not for deriving values. If you find yourself setting a signal inside an effect just to compute another value, use `computed` instead.
