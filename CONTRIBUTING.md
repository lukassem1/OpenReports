# Contributing a template

Thanks for helping grow **OpenReports**! You can submit a **brand-new template
you designed yourself**, or a **variation** (a new colour scheme or a different
category) of an existing one. Both are equally welcome. 🐾

## How the system works

```
Fork  →  add your .html  →  register it in the catalog  →  open a Pull Request
                                                                  │
                                            GitHub Action validates it  ✔
                                                                  │
                                        a maintainer merges to `main`
                                                                  │
                                   GitHub Pages auto-deploys — it's live 🎉
```

There's no build step and no backend. The site is plain static HTML/CSS/JS, and
the gallery deploys automatically from the `main` branch.

## Step by step

1. **Fork** this repo and create a branch.
2. **Add your report** as a single self-contained file in `templates/`, e.g.
   `templates/my-report.html`. (Copy an existing one to start, or bring your own.)
3. **Register it** by adding one entry to the `REPORTS` array in
   [`assets/app.js`](assets/app.js):

   ```js
   {
     id: "my-report",              // unique, matches the file name
     category: "sales",            // a key from the CATEGORIES list below
     charts: "embedded",           // "embedded" (SVG/CSS) or "chartjs" (interactive)
     file: "templates/my-report.html",
     // pick: true,                // optional — adds the ★ "Author's pick" badge
     title:       { en: "My Report", pt: "Meu Relatório" },
     description: { en: "One-line English summary.", pt: "Resumo em português." },
   },
   ```

   If your report fits a category that doesn't exist yet, add it to the
   `CATEGORIES` array too.
4. **Open a Pull Request.** The validation check runs automatically.

## Rules for a template

- **Self-contained.** Everything in one `.html` file — inline `<style>`, inline
  SVG, and (if needed) inline `<script>`. External CDNs are OK only for fonts or
  Chart.js. No local image/CSS/JS files.
- **Placeholder-driven.** Use clear `[bracketed placeholders]` and round, obvious
  sample numbers, so anyone's AI can swap in their own data cleanly. **Never ship
  real, confidential, or company-identifying data** — keep it generic and fictional.
- **English** for the report content (the gallery UI is bilingual, the templates
  are English).
- **Keep the footer credit** line:
  `Made with OpenReports — free report templates by Instituto Arkhe`.
- **Theme from `:root`.** Put your colours in CSS variables at the top so the
  template can be re-skinned in one place.

## Categories

`sales`, `financial`, `kpi`, `marketing`, `people`, `operations`, `strategy`,
`review`, `analysis`, `deck` — or propose a new one in your PR.

## What the CI checks

The [validation workflow](.github/workflows/validate-templates.yml) fails the PR if:

- a file in `templates/` isn't registered in `assets/app.js` (or vice-versa), or
- a template isn't a complete HTML document.

It warns (but doesn't block) if the Instituto Arkhe credit line is missing.

## Not sure where to start?

Open a **[New template proposal](../../issues/new/choose)** issue and describe the
report you'd like to see — or that you'd like to contribute.
