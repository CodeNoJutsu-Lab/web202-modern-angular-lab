# Step 04 — Introducing Signals

**Course step:** 05 · **Branch:** `step-04-introducing-signals` · **Solution tag:** `solution-step-04`

## Goal

Replace plain fields with a writable signal and use `.set()` / `.update()` to drive a counter.

## What you'll learn

- Creating state with `signal()`
- Reading a signal in a template with `count()`
- Updating with `update()` and resetting with `set()`
- Why signals are read as functions

## Starting point

`Hello` has `title`, `isDisabled`, and `onClick()`; there is no counter yet.

## Tasks

- [ ] **1.** Import `signal` from `@angular/core`.
- [ ] **2.** Add `protected count = signal(0)`.
- [ ] **3.** Add `increaseCounter()`, `descreaseCounter()`, and `resetCounter()` using `this.count.update(...)` and `this.count.set(0)`.
- [ ] **4.** In `hello.html`, wrap the content in `<div class="p-2">` and add `{{ count() }}` plus the `+`, `-`, and `RESET` buttons.
- [ ] **5.** Click the buttons and confirm the number changes immediately.

## Hints

<details>
<summary><strong>Why `count()`?</strong></summary>

A signal is a getter function. `count` is the signal object; `count()` reads its current value, and Angular tracks that read for change detection.

</details>

<details>
<summary><strong>`update` vs `set`</strong></summary>

`update(fn)` receives the previous value and returns the next one — ideal for increments. `set(value)` replaces the value outright.

</details>

<details>
<summary><strong>Tailwind classes</strong></summary>

Classes like `p-2` and `bg-blue-600` come from the global Tailwind import in `src/styles.css`. They are cosmetic; the lab works without them.

</details>

## Acceptance criteria

- [ ] Counter starts at 0; + and − change it; RESET returns to 0
- [ ] State is a `WritableSignal`, not a plain number
- [ ] Template reads the signal with `count()`

## Files you'll touch

| File | What changes |
|---|---|
| `src/app/hello/hello.ts` | Adds `count` signal and the three handlers |
| `src/app/hello/hello.html` | Counter readout and buttons |

## Run it

```bash
npm install
npm start
```

Then open <http://localhost:4200>. Use `npm test` for the unit tests and `npm run build` before you compare with the solution.
