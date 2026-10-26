# Step 01 — Development Environment Setup

**Course step:** 02 · **Branch:** `step-01-development-environment-setup` · **Solution tag:** `solution-step-01`

## Goal

Get the provided Angular 21 starter running locally and learn the files that bootstrap a standalone application. There is no feature to build in this step — the goal is a green dev server, a green build, and a passing test run.

## What you'll learn

- How an Angular CLI workspace is laid out
- How `bootstrapApplication` replaces `AppModule`
- What `ApplicationConfig` providers do
- How the dev server, build, and Vitest runner are wired

## Starting point

This branch already contains the Angular 21 workspace the course starts from: `package.json`, `angular.json`, `src/main.ts`, `src/app/app.config.ts`, the root `App` component, and the default spec files. `node_modules` is intentionally not committed.

## Tasks

- [ ] **1.** Check your toolchain: `node -v` (20.19+ or 22.12+) and `npm -v` (10+). This workspace pins `npm@11.16.0` in `package.json`.
- [ ] **2.** Install dependencies with `npm install` (or `npm ci` if you want the lockfile exactly).
- [ ] **3.** Start the dev server with `npm start` and open <http://localhost:4200>.
- [ ] **4.** Read `src/main.ts` and trace how `App` and `appConfig` are passed to `bootstrapApplication`.
- [ ] **5.** Open `src/app/app.ts`, `src/app/app.html`, and `src/app/app.config.ts` and identify the component metadata, the template, and the providers.
- [ ] **6.** Run `npm test` and `npm run build`; both should finish without errors.

## Hints

<details>
<summary><strong>Node version or install errors</strong></summary>

Angular 21 needs a modern Node LTS. If `npm install` fails on engine checks, switch to Node 22 LTS (or 20.19+) and reinstall. Do not delete `package-lock.json` unless you intentionally want to regenerate it.

</details>

<details>
<summary><strong>Port 4200 is busy</strong></summary>

Run `npm start -- --port 4300` and open that port instead.

</details>

<details>
<summary><strong>Where is `AppModule`?</strong></summary>

There isn't one. Angular 21 bootstraps the standalone `App` component directly; `provideRouter`, `provideBrowserGlobalErrorListeners`, etc. are supplied through `ApplicationConfig`.

</details>

## Acceptance criteria

- [ ] `npm start` serves the default app at <http://localhost:4200>
- [ ] `npm run build` completes and writes output to `dist/`
- [ ] `npm test` passes the default specs
- [ ] You can point at the line in `main.ts` that boots the app

## Files you'll touch

| File | What changes |
|---|---|
| `package.json` | Scripts and dependency versions |
| `angular.json` | Build/serve/test targets and global styles |
| `src/main.ts` | Standalone bootstrap entry point |
| `src/app/app.config.ts` | Application-wide providers |
| `src/app/app.ts` | Root standalone component |
| `src/index.html` | Host page |

## Run it

```bash
npm install
npm start
```

Then open <http://localhost:4200>. Use `npm test` for the unit tests and `npm run build` before you compare with the solution.

## Notes

Nothing is missing in this step. If you want to recreate the workspace from scratch, the equivalent CLI command is `npx @angular/cli@21 new modern-angular --style=css --ssr=false`; this branch saves you that detour so every later step starts from the same baseline.
