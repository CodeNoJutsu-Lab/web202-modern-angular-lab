# Modern Angular — From Zero to Advanced Lab

A hands-on lab built from the **Modern Angular: From Zero to Advanced** course history. Every lesson is a branch. Each branch is the *starter* for that step; the completed app lives on the `solution` branch and at per-step tags.

The app is a small product catalogue with a search field and a live cart badge, built with **Angular 21**, **Angular Material 21**, **signals**, and **Tailwind CSS 4**.

## How the repo works

```
main                  index + workflow (no app code)
step-01 ... step-16   starter code + STEP.md for one lesson
solution              the finished app, one commit per step
solution-step-NN      tags on `solution`: completed code for step NN
```

The step branches share a linear history, so you can create a work branch from any of them. They are learning snapshots, not branches to merge.

## Requirements

- Node.js 20.19+ or 22.12+ (22 LTS recommended)
- npm 10+ (the workspace pins `npm@11.16.0`)

## Start a step

```bash
git checkout step-01-development-environment-setup
npm install
npm start
```

Open <http://localhost:4200>, read `STEP.md`, and do the tasks. Then compare with the solution:

```bash
git diff step-01-development-environment-setup..solution-step-01
```

Or browse the finished app:

```bash
git checkout solution     # tip = final app
git tag -l 'solution-step-*'
git checkout solution-step-07   # detached HEAD, read-only
```

On the `solution` branch, every step also has a folder under `solutions/` with a walkthrough and the exact changed files, so you can read a solution without leaving the tip.

## Step index

| # | Branch | Course | Focus | Solution |
|---|---|---|---|---|
| 01 | `step-01-development-environment-setup` | 02 | Run the scaffold; learn the standalone bootstrap | `solution-step-01` |
| 02 | `step-02-your-first-standalone-component` | 03 | Create `Hello` and render it from `App` | `solution-step-02` |
| 03 | `step-03-component-templates-and-interaction` | 04 | Interpolation, property binding, event binding | `solution-step-03` |
| 04 | `step-04-introducing-signals` | 05 | Writable signal counter with `set` / `update` | `solution-step-04` |
| 05 | `step-05-computed-signals` | 06 | Derive `doubleCount` with `computed()` | `solution-step-05` |
| 06 | `step-06-effects-signals` | 07 | Log count changes with `effect()` | `solution-step-06` |
| 07 | `step-07-angular-material-header-setup` | 08 | Install Material, theme the app, build the toolbar | `solution-step-07` |
| 08 | `step-08-products-grid-with-angular-material` | 09 | Create card + grid components and page layout | `solution-step-08` |
| 09 | `step-09-rendering-lists-with-signals-and-for` | 10 | Product model, signal array, `@for` / `@empty` | `solution-step-09` |
| 10 | `step-10-passing-data-with-input` | 11 | Signal inputs in `ProductCard` | `solution-step-10` |
| 11 | `step-11-conditional-rendering-with-if-else` | 12 | Sale badge and dual price with `@if` / `@else` | `solution-step-11` |
| 12 | `step-12-writable-signals-for-search-state` | 13 | Search field + `searchTerm` signal with `ngModel` | `solution-step-12` |
| 13 | `step-13-filtering-products-with-computed-signals` | 14 | `filteredProducts` computed drives the grid | `solution-step-13` |
| 14 | `step-14-add-to-cart-with-output` | 15 | Child emits `Product`; parent logs it | `solution-step-14` |
| 15 | `step-15-creating-a-cart-service` | 16 | Root service, `inject()`, signal cart | `solution-step-15` |
| 16 | `step-16-cart-badge-with-computed-signals` | 17 | Quantities, total computed, header badge | `solution-step-16` |

## What each step contains

- `STEP.md` — goal, tasks, collapsible hints, acceptance criteria, and the files you will touch.
- `README.md` — branch navigation and run instructions.
- The complete Angular workspace at the **previous** step's state, so the app runs before you start.

## Notes

- `node_modules` is not committed; run `npm install` after switching branches. Step 07 adds Material, so reinstall when moving across it.
- The `hello` component is a teaching artifact from steps 02–06 and remains in the tree after the header replaces it.
- The course code is kept as-is for fidelity, including the `tottalItems` spelling. Step notes call out known quirks and optional improvements.
- This lab repo is self-contained; the original course repository is the source of the step history.
