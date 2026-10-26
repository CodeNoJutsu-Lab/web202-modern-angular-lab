# Step 07 — Angular Material + Header Setup

**Course step:** 08 · **Branch:** `step-07-angular-material-header-setup` · **Solution tag:** `solution-step-07`

## Goal

Install Angular Material, wire a Material 3 theme and icon fonts, and replace the hello demo with a real application header.

## What you'll learn

- Adding Angular Material and CDK
- Material 3 theming with `mat.theme()`
- Registering global styles in `angular.json`
- Standalone Material component imports
- Toolbar layout with a flex spacer

## Starting point

The app renders the `Hello` counter demo. No Material packages, theme, fonts, or header exist.

## Tasks

- [ ] **1.** Install the packages: `npm install @angular/material @angular/cdk`.
- [ ] **2.** Create `src/material-theme.scss` and include a `mat.theme()` call with an azure primary palette, Roboto typography, and density 0. Add sensible `html`/`body` defaults.
- [ ] **3.** Register the theme in `angular.json` under `projects.modern-angular.architect.build.options.styles`, before `src/styles.css`.
- [ ] **4.** Add the Roboto and Material Icons Google Fonts links to `src/index.html`.
- [ ] **5.** Generate a `header` component (`ng g c header`).
- [ ] **6.** In `header.ts`, import `MatToolbarModule`, `MatButtonModule`, and `MatIconModule` and add them to `imports`.
- [ ] **7.** Build the toolbar: a store icon button, the “Modern Angular” branding, a flex spacer, a Products button, and a shopping-cart icon.
- [ ] **8.** Add `header.css` rules for the spacer, header shadow, and branding overflow.
- [ ] **9.** In `app.ts`, swap `Hello` for `Header`; in `app.html`, render `<app-header/>`.

## Hints

<details>
<summary><strong>Icons show as text (`shopping_cart`)</strong></summary>

The Material Icons font link is missing or the icon has no `fontIcon`. Add the Google Fonts stylesheet in `index.html` and use `fontIcon="shopping_cart"`.

</details>

<details>
<summary><strong>Theme not applied</strong></summary>

The Sass file must be listed in `angular.json` styles. `styles.css` uses Tailwind; keep the theme first so Material variables are available.

</details>

<details>
<summary><strong>`matButton` vs `mat-button`</strong></summary>

Angular Material 21 uses the `matButton` attribute on native buttons, not the legacy `mat-button` class/attribute.

</details>

<details>
<summary><strong>Spacer not working</strong></summary>

The spacer needs `flex: 1 1 auto` and the toolbar must be a flex row (Material's toolbar already is).

</details>

## Acceptance criteria

- [ ] Toolbar spans the page with Material styling and Material icons render as glyphs
- [ ] “Modern Angular” and the cart/product controls are visible
- [ ] `Hello` is no longer rendered, but its files remain
- [ ] `npm run build` passes

## Files you'll touch

| File | What changes |
|---|---|
| `package.json` | Adds `@angular/material` and `@angular/cdk` |
| `angular.json` | Loads `src/material-theme.scss` before `styles.css` |
| `src/index.html` | Roboto + Material Icons font links |
| `src/material-theme.scss` | Material 3 theme |
| `src/app/header/header.ts` | Header component + Material imports |
| `src/app/header/header.html` | Toolbar markup |
| `src/app/header/header.css` | Toolbar layout styles |
| `src/app/header/header.spec.ts` | CLI-generated test |
| `src/app/app.ts` | Imports `Header` instead of `Hello` |
| `src/app/app.html` | Renders `<app-header/>` |

## Run it

```bash
npm install
npm start
```

Then open <http://localhost:4200>. Use `npm test` for the unit tests and `npm run build` before you compare with the solution.
