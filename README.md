<div align="center">

# OpenReports

### Templates for management reports, built with AI.

A free, open library of **40+ self-contained HTML report templates** for your
management meetings. Pick a design you like, download the file, and hand it to
your AI assistant — *“make my report in this exact design.”*

**[🌐 Live gallery → lukassem1.github.io/OpenReports](https://lukassem1.github.io/OpenReports/)**

[![Live demo](https://img.shields.io/badge/demo-live-3f7d57)](https://lukassem1.github.io/OpenReports/)
[![GitHub stars](https://img.shields.io/github/stars/lukassem1/OpenReports?style=flat&color=e3a008)](https://github.com/lukassem1/OpenReports/stargazers)
[![License: MIT](https://img.shields.io/badge/license-MIT-c96442.svg)](LICENSE)
[![Made by Instituto Arkhe](https://img.shields.io/badge/by-Instituto%20Arkhe-1a1a18)](https://arkhen.tech)

</div>

---

## Why this exists

Most managers waste hours fighting with slides and spreadsheets just to make a
report look presentable. OpenReports flips that around: every template is a
clean, single-file HTML report with obvious placeholder data, designed so an AI
(like Claude) can instantly understand the structure and swap in your real
numbers — keeping the exact same design.

You don't need to know how to code. You just need a design you like and your data.

## How it works

1. **Browse & pick** — open the [gallery](https://lukassem1.github.io/OpenReports/)
   and find a report design that fits your meeting (sales, finance, KPIs, marketing, people, ops).
2. **Download or copy the prompt** — grab the self-contained `.html` file, or hit
   **Copy prompt** for a ready-made instruction.
3. **Drop it into your AI chat** — attach the file, paste your data, and get your
   own polished report back in seconds.

## What's inside

**40+ self-contained templates across 13 categories** — from quick one-pagers and
dashboards to full slide decks and an editorial annual report. A few highlights:

| Category | Examples |
|---|---|
| **Sales & Revenue** | Sales & Revenue Review · Pipeline & Forecast · Sales deck · E-commerce dashboard |
| **Financial / P&L** | Financial Statement · Budget vs Actual · Finance dashboard · Financial deck |
| **KPI Dashboard** | Executive KPI Dashboard · KPI Scorecard · SaaS Metrics · Metrics Command Center |
| **Marketing / Traffic** | Marketing Report · Campaign Retro · Web Analytics · Social Media dashboard |
| **People / HR** | People & HR Report · Recruiting Funnel · People & HR deck |
| **Operations / Project** | Operations Status · Project Portfolio · Service Desk · Incident Postmortem |
| **Strategy / Memo** | Strategy Report · Board Update · Board deck · Competitive Analysis |
| **Customer Success · Product · OKRs** | NPS report · Product Analytics · Product Roadmap · OKR Tracker |
| **Presentation · Annual · Analysis** | Pitch Deck · Annual Report (magazine) · Customer/Audience Segmentation |

Two chart styles, filterable in the gallery — **Self-contained** (pure inline
SVG/CSS, zero dependencies, works offline) and **Interactive** ([Chart.js](https://www.chartjs.org/)
via CDN). The full catalog lives in the `REPORTS` array in
[`assets/app.js`](assets/app.js).

## Features

- 🧩 **Self-contained files** — one `.html` each, no build step, no broken assets.
- 🤖 **AI-ready** — clear `[placeholders]` and round sample numbers so any AI swaps your data cleanly.
- 📋 **One-click "Copy prompt"** — a ready-made instruction, generated in your language.
- 🌍 **Bilingual gallery** — English / Portuguese toggle (English by default).
- 👀 **Live, full-page preview** inside the site, with a one-click *Back to gallery*.
- 🖨️ **Print-friendly** — export any report straight to PDF from your browser.
- 🎨 **One-variable theming** — recolor everything from the CSS `:root` block.

## Using a template

1. Open the [gallery](https://lukassem1.github.io/OpenReports/) and click **Preview**
   to see the full design, or **Download** to save the `.html` file.
2. Click **Copy prompt** on the card you like.
3. In your AI chat (e.g. [Claude](https://claude.ai)), **attach the downloaded
   file**, paste the prompt, and add your own data where it says
   `[ PASTE YOUR NUMBERS / CONTEXT HERE ]`.
4. You'll get back a single HTML file with your numbers in the exact same design.
   Open it in any browser, or print it to PDF.

> **Tip:** the *Self-contained* templates are the most reliable to remix, because
> the whole report — layout, styles and charts — lives in one file with no
> external dependencies.

## Project structure

```
.
├── index.html            # the gallery (GitHub Pages entry point)
├── assets/
│   ├── style.css         # gallery design system (re-skin via :root variables)
│   └── app.js            # catalog + filtering + i18n + viewer + Copy prompt
└── templates/            # 40+ self-contained report templates (one .html each)
    ├── sales-revenue.html
    ├── kpi-dashboard.html
    ├── saas-dashboard.html
    ├── pitch-deck.html
    └── …                 # the full catalog is the REPORTS array in assets/app.js
```

## Run it locally

It's a static site — no build step.

```bash
# clone, then from the project folder:
python -m http.server 8000
# open http://localhost:8000
```

> The gallery thumbnails are live `<iframe>` previews of the real templates, so
> serve the folder over HTTP (opening `index.html` from `file://` may block them).

## Deploy your own (GitHub Pages)

1. Fork or push this repo to GitHub.
2. **Settings → Pages → Build and deployment → Source: “Deploy from a branch” →
   Branch: `main` / `/ (root)` → Save.**
3. Your gallery goes live at `https://<your-user>.github.io/<repo>/`.

## Design system

The whole look lives in CSS variables at the top of every file (`:root`). The
palette is neutral-warm — a cream background, near-black ink, and a terracotta
accent — so reports read well in any context. Change the variables in one place
to re-skin everything.

## Contributing a template

Pull requests are welcome — submit a **brand-new template you designed yourself**, or a variation (a new colour scheme or a different category) of an existing one. Both are equally welcome. 🐾

**📖 Full guide: [CONTRIBUTING.md](CONTRIBUTING.md)** — and every PR is checked automatically by a [validation workflow](.github/workflows/validate-templates.yml).

1. Add your design as a self-contained file in `templates/` — either an original report you built from scratch, or a copy of an existing one, restyled.
2. Keep it **self-contained** (inline `<style>`; inline SVG, or Chart.js via CDN).
3. Use clear `[placeholders]` and round sample numbers so AIs swap data cleanly.
4. Add one entry — with `en` + `pt` title and description — to the `REPORTS`
   array in [`assets/app.js`](assets/app.js).
5. Open a pull request.

## Roadmap

- ✅ 40+ templates across 13 categories, with download counts, likes and a bilingual gallery.
- Static image thumbnails as the catalog grows (lighter than the live `<iframe>` previews).
- A one-click “open in Claude” hand-off.

Have a request? [Open an issue](https://github.com/lukassem1/OpenReports/issues).

## License

[MIT](LICENSE) — free for personal and commercial use. Attribution appreciated,
not required.

---

<div align="center">
Built with care by <a href="https://arkhen.tech">Instituto Arkhe</a> — where applied intelligence is born.
</div>
