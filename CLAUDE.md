# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is pnpm (see `pnpm-lock.yaml`).

- `pnpm dev` — start Vite dev server
- `pnpm build` — production build (outputs to `dist/`)
- `pnpm preview` — preview the production build
- `pnpm lint` — run ESLint over the whole project

There is no test suite/framework configured in this project.

## Architecture

This is a static-data, frontend-only mobile health-tracking UI (mmh-smartcare). There is no backend, no API layer, and no persistence — every screen renders from hardcoded JS objects in `src/data/`. Zustand is a listed dependency but is not currently used anywhere.

### Routing

`src/routes.js` defines a single `ROUTES` object as the source of truth for every path string. `src/App.jsx` builds a flat array (`routeDefinitions`) mapping each `ROUTES.*` value to a page component and feeds it into `@tanstack/react-router`'s `createRootRoute`/`createRoute`/`createRouter`. Adding a page means: add the path to `ROUTES`, add one entry to `routeDefinitions`. Several routes reuse the same generic page component parameterized by a `config` object (see below).

### Data-driven pages, not one-off components

Most "detail" and "add record" screens are not separate implementations per metric — they're a shared page component fed a per-metric config object:

- `src/data/metrics.js` — the home-page metric list (glucose, spo2, blood pressure, heart rate, ecg, weight, body fat, BMI, waist, cholesterol). Each entry declares its own `chartType` (`"donut" | "bar" | "dualBar" | "line" | "multiLine"`), series data, `yDomain`, icon, color, and target route. `HomePage` maps over this array and switches on `metric.id` only for the two screens that need bespoke cards (`GlucoseCard`, `EcgCard`); everything else renders through the generic `MetricCard`, which itself switches on `chartType` to pick a chart from `components/metric-card/charts/`.
- `src/data/simpleMetricDetails.js` — config consumed by `SimpleMetricDetailPage` for the metrics that don't have a bespoke detail page (weight, height, body fat, BMI, waist). Several entries are derived from `metrics.js` via the local `fromHomeMetric()` helper (computing min/max from the same `series` array) specifically so the home-page card and the detail page can't drift apart by being hand-edited independently. When editing shared numbers, prefer editing `metrics.js` and letting `fromHomeMetric` propagate rather than hardcoding the detail page too.
- `src/data/addRecordDetails.js` — config consumed by `AddRecordPage` for every "add a new reading" form (which fields to show, whether there's a meal-period pill, labels/units).
- Metrics with genuinely different layouts (glucose, spo2, blood pressure/heart rate, ECG, cholesterol) get their own detail page under `src/pages/*DetailPage.jsx` plus their own `src/data/*Detail.js` config, but still follow the shared shell pattern below.

### Shared page shells

- `src/components/detail/DetailPageShell.jsx` — the common wrapper for all metric detail pages: `TopBar` + `LastReadingLegend` + `TimeRangeFilter` + page-specific children (usually `SectionCard`s) + `FooterLinks`. New detail pages should compose this rather than rebuilding the layout.
- `src/components/metric-card/CardShell.jsx` / `IconBadge.jsx` / `MetricValue.jsx` — the common home-page card chrome (icon badge, title, chevron-to-route header) that `MetricCard`, `GlucoseCard`, and `EcgCard` all build on.
- Chart components live in `src/components/metric-card/charts/` (recharts-based: line/bar/dual-bar/multi-line trends) and are selected by `chartType`, not imported ad hoc per page.

### Styling and theme

Tailwind v4 via `@tailwindcss/vite` (no `tailwind.config.js` — theme tokens are declared inline in `src/index.css` under `@theme`, e.g. `--color-primary`, `--color-good`, `--color-bad`, `--color-warn`, `--color-page`, `--color-card`). Status semantics (`good`/`bad`/`primary`/`warn`) are used consistently across cards, stat boxes, and legends via these color tokens.

`src/theme/iconColors.js` holds `ICON_TEXT_COLOR`, a map from the same `color` keys to literal `text-[#...]` Tailwind class strings — kept as literal strings (not computed) because Tailwind's scanner needs the class name to appear verbatim in source.

All user-facing copy is in Traditional Chinese (zh-TW); keep new strings consistent with this.

### React Compiler

The React Compiler (babel-plugin-react-compiler) is enabled via `@rolldown/plugin-babel` in `vite.config.js`. Avoid patterns that fight the compiler's assumptions (e.g. don't hand-roll memoization the compiler is meant to handle).

### Navigation helper

`src/hooks/useSafeBack.js` wraps back-navigation: it uses router history when available and falls back to a fixed route (default `ROUTES.HOME`) when a page was opened via direct link and has no in-app history. Use this instead of calling `router.history.back()` directly on any page reachable via a deep link.
