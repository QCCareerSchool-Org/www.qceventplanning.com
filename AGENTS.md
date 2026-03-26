# Repository Guidelines

## Project Structure & Module Organization
This repository is a Next.js 16 app using the App Router and TypeScript. Main application code lives in `src/`. Use `src/app/` for routes, layouts, metadata files, and global styles; `src/components/` for reusable UI; `src/hooks/`, `src/providers/`, `src/lib/`, and `src/domain/` for shared logic and domain code. Static assets belong in `public/`. Tests currently live in `__tests__/`. Custom lint rules are defined in `eslint-rules/`.

## Build, Test, and Development Commands
Use npm scripts from the repo root:

- `npm run dev` starts the local Next.js dev server with webpack.
- `npm run build` creates a production build.
- `npm run start` serves the production build locally.
- `npm run lint` runs ESLint against `src/`.
- `npm run lint:fix` applies safe lint fixes.
- `npm test` runs Jest in verbose mode.
- `npm run test:watch` reruns tests interactively during development.

## Coding Style & Naming Conventions
TypeScript is `strict`, and the repo uses the `@/*` path alias for `src/*`. Follow the existing ESLint rules in `eslint.config.ts`: 2-space indentation, single quotes, semicolons, spaced braces, and grouped imports with `import/order`. Prefer `type` imports when possible. Keep React component filenames consistent with the surrounding codebase, which commonly uses lower camel case file names such as `layoutClient.tsx` and `chatLink.tsx`. Use PascalCase for component identifiers and `handle...` for event handlers.

### HTML

#### <br /> Tags
Avoid <br /> tags for anything other than a line break, such as <address>123 Main St<br />SomeCity</address>. I.e., don't use it for spacing.

Prefer

```
<li>
  <hx className="hy">A QC Success Story</hx>
  As a former student, Lisa knows how to turn QC&apos;s training into a profitable event business.
</li>
```

over

```
<li>
  <strong>A QC Success Story</strong>
  <br />
  As a former student, Lisa knows how to turn QC&apos;s training into a profitable event business.
</li>
```

where hx is the appropriate semantic level, and hy is a suitable visual style, usually on the smaller side.

#### <p>, <li>, <button>, etc. Tags
Keep <p> tags with their text. Prefer

```
<p>Some text</p>
```

over

```
<p>
  Some text
</p>

We want to see at a glance the overal structure of the page without extra line breaks in the html. Long lines are what the scrollbar is for.

#### Apostrophes and Quotation Marks
Use straight apostrophes and quotation marks.

#### Dashes
Use "to" for ranges, e.g. "6 to 9 months" instead of using any kind of dash or hyphen for the range. Fix existing copy to follow this rule.
                                                                                                                                                   
When text uses a spaced hyphen as punctuation, standardize it to an em-dash: "—" with no spaces around it. If any em-dashes are present with space around them, remove the space to follow this rule.
                                                                                                                                                   
Do not rewrite sentences to add dashes where none existed unless explicitly requested.

## Testing Guidelines
Jest runs in `jsdom` via `next/jest`. Add tests under `__tests__/` or beside the feature using `.test.ts(x)` or `.spec.ts(x)` naming. Use Testing Library for React behavior and `jest-axe` where accessibility checks matter. No coverage threshold is enforced in config, but new UI and logic changes should include targeted tests before review.

## Commit & Pull Request Guidelines
Recent history shows short imperative subjects (`Added implicit opt-in feature`, `Fixed purgecss rules`) plus version tags such as `1.0.95` on releases. Keep commit messages brief, imperative, and focused on one change. For pull requests, include a concise summary, linked issue or ticket when available, test/lint status, and screenshots for visual changes. The project uses the Git Flow flow, with `main`, `develop`, `feature/*`, `release/*`, and `bugfix/*` branches. Releases typically use patch-level version bumps.


## Security & Configuration Tips
Keep secrets in `.env.local` only; never commit environment-specific values. Review `vercel.json`, `next.config.ts`, and metadata routes like `src/app/robots.ts` when changing deployment or SEO behavior.
