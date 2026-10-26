# Step 07 — Angular Material + Header Setup (solution)

**Course commit:** `78f87e5` · **Branch:** `step-07-angular-material-header-setup` · **Solution tag:** `solution-step-07`

This folder contains the completed code for this step. The tag points at the same state in the `solution` branch history.

## What was done

- Added `@angular/material` and `@angular/cdk`
- Created a Material 3 theme and registered it in `angular.json`
- Added Roboto and Material Icons font links
- Built the `Header` toolbar component
- Swapped the root template from `Hello` to `Header`

## Solution files

The exact changed files are in [`files/`](./files/), mirroring the project paths:

- [`files/package.json`](./files/package.json)
- [`files/angular.json`](./files/angular.json)
- [`files/src/index.html`](./files/src/index.html)
- [`files/src/material-theme.scss`](./files/src/material-theme.scss)
- [`files/src/app/header/header.ts`](./files/src/app/header/header.ts)
- [`files/src/app/header/header.html`](./files/src/app/header/header.html)
- [`files/src/app/header/header.css`](./files/src/app/header/header.css)
- [`files/src/app/header/header.spec.ts`](./files/src/app/header/header.spec.ts)
- [`files/src/app/app.ts`](./files/src/app/app.ts)
- [`files/src/app/app.html`](./files/src/app/app.html)

> `package-lock.json` is omitted from the excerpt when it changed. Run `npm install` to regenerate it locally.

## Verify it

```bash
npm install
npm start
```

- [ ] Toolbar spans the page with Material styling and Material icons render as glyphs
- [ ] “Modern Angular” and the cart/product controls are visible
- [ ] `Hello` is no longer rendered, but its files remain
- [ ] `npm run build` passes

## Notes

The package-lock.json also changes in this step, but it is omitted from the solution file excerpt to keep the diff readable. Run `npm install` after checking out this step.
