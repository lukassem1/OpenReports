# OpenReports

**Beautiful report templates, ready for AI.**

A free, open library of self-contained HTML report templates for managerial
meetings. Pick a design you like, download the file, and hand it to your AI
assistant: *“make my report in this exact design.”* Paste your numbers, get a
polished report back.

Built and maintained by [Instituto Arkhe](https://arkhen.tech).

---

## Why this exists

Most managers waste hours fighting with slides and spreadsheets to make a report
look presentable. OpenReports flips that: every template is a clean, single-file
HTML report with obvious placeholder data, designed so an AI (Claude, etc.) can
instantly understand the structure and swap in your real numbers — keeping the
exact same design.

## How it works

1. **Browse & pick** a template on the [gallery](#running-locally) that fits
   your meeting — sales, finance, KPIs, marketing.
2. **Download** the `.html` file, or hit **Copy prompt** for a ready-made
   instruction.
3. **Drop it into your AI chat**, attach the file, paste your data, and get your
   own version back.

## What's inside

| Template | Category | Charts |
|---|---|---|
| Sales & Revenue Review | Sales & Revenue | Inline SVG (self-contained) |
| Financial Statement (P&L) | Financial / P&L | Inline SVG (self-contained) |
| Executive KPI Dashboard | KPI Dashboard | Chart.js (interactive, CDN) |
| Marketing & Traffic Report | Marketing / Traffic | Inline SVG (self-contained) |
| People & HR Report | People / HR | Inline SVG (self-contained) |
| Operations & Project Status | Operations / Project | Inline SVG (self-contained) |

Two chart styles, filterable in the gallery:

- **Self-contained** — pure inline SVG/CSS, zero dependencies. Works offline and
  is the easiest for an AI to edit. Best default for sharing.
- **Interactive** — powered by [Chart.js](https://www.chartjs.org/) via CDN.
  Nicer hover/animations, but needs an internet connection.

## Project structure

```
.
├── index.html            # the gallery (GitHub Pages entry point)
├── assets/
│   ├── style.css         # gallery design system (re-skin via :root variables)
│   └── app.js            # catalog + filtering + copy-prompt logic
└── templates/            # the report templates (each is one self-contained file)
    ├── sales-revenue.html
    ├── financial-statement.html
    ├── kpi-dashboard.html
    ├── marketing-traffic.html
    ├── people-hr.html
    └── operations-project.html
```

## Running locally

It's a static site — no build step.

```bash
# any static server works, e.g.:
python -m http.server 8000
# then open http://localhost:8000
```

> The gallery thumbnails are live `<iframe>` previews of the real templates, so
> serve the folder over HTTP (opening `index.html` from `file://` may block them).

## Deploying (GitHub Pages)

1. Push this repo to GitHub.
2. **Settings → Pages → Build from branch → `main` / root.**
3. Your gallery goes live at `https://<user>.github.io/OpenReports/`.

## Design system

The whole look lives in CSS variables at the top of each file (`:root`). The
palette is neutral-warm — cream background, near-black ink, a terracotta accent —
so reports read well across contexts. Change the variables in one place to
re-skin everything.

## Contributing a template

1. Copy an existing file in `templates/` and restyle it.
2. Keep it **self-contained** (inline `<style>`; inline SVG, or Chart.js via CDN).
3. Use clear `[placeholders]` and round sample numbers so AIs swap data cleanly.
4. Add one entry to the `REPORTS` array in `assets/app.js`.
5. Open a pull request. 🐾

## License

[MIT](LICENSE) — free for personal and commercial use. Attribution appreciated,
not required.
