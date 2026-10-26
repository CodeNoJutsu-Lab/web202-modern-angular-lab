# Completed Solution — Modern Angular: From Zero to Advanced

This branch is the **finished application**. Its history contains one commit per step, each tagged so you can inspect or check out the exact solution for a lesson.

```bash
npm install
npm start
```

## Checkpoints

| Tag | Step | What it contains |
|---|---|---|
| `solution-step-01` | Development Environment Setup | Run the scaffold; learn the standalone bootstrap |
| `solution-step-02` | Your First Standalone Component | Create `Hello` and render it from `App` |
| `solution-step-03` | Component Templates & Interaction | Interpolation, property binding, event binding |
| `solution-step-04` | Introducing Signals | Writable signal counter with `set` / `update` |
| `solution-step-05` | Computed Signals | Derive `doubleCount` with `computed()` |
| `solution-step-06` | Effects (Signals) | Log count changes with `effect()` |
| `solution-step-07` | Angular Material + Header Setup | Install Material, theme the app, build the toolbar |
| `solution-step-08` | Products Grid with Angular Material | Create card + grid components and page layout |
| `solution-step-09` | Rendering Lists with Signals and @for | Product model, signal array, `@for` / `@empty` |
| `solution-step-10` | Passing Data to Child Components with input() | Signal inputs in `ProductCard` |
| `solution-step-11` | Conditional Rendering with @if and @else | Sale badge and dual price with `@if` / `@else` |
| `solution-step-12` | Writable Signals for Search State | Search field + `searchTerm` signal with `ngModel` |
| `solution-step-13` | Filtering Products with Computed Signals | `filteredProducts` computed drives the grid |
| `solution-step-14` | Add to Cart with output() | Child emits `Product`; parent logs it |
| `solution-step-15` | Creating a Cart Service | Root service, `inject()`, signal cart |
| `solution-step-16` | Cart Badge with Computed Signals | Quantities, total computed, header badge |

## Inspect a step

```bash
git show solution-step-07 --stat
git diff solution-step-06..solution-step-07
git checkout solution-step-07    # detached HEAD
```

## Per-step folders

Every folder under `solutions/` has:

- `SOLUTION.md` — what changed, why, and how to verify it.
- `files/` — the exact files changed in that step (except `package-lock.json`).

## Notes

- The app is intentionally the course's final state. Known quirks are documented per step (for example, the dead fallback in the step 13 filter).
- There is no cart page, remove/clear, or persistence yet; the step notes list those as extensions.
