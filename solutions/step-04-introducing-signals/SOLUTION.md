# Step 04 — Introducing Signals (solution)

**Course commit:** `8f35565` · **Branch:** `step-04-introducing-signals` · **Solution tag:** `solution-step-04`

This folder contains the completed code for this step. The tag points at the same state in the `solution` branch history.

## What was done

- Added a `count` writable signal initialized to `0`
- Used `update()` for increments/decrements and `set(0)` for reset
- Read the signal in the template with `count()`

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

- [ ] Counter starts at 0; + and − change it; RESET returns to 0
- [ ] State is a `WritableSignal`, not a plain number
- [ ] Template reads the signal with `count()`

## Notes

Signals are the primitive; `computed` (next step) builds derived state on top of them, and `effect` handles side effects.
