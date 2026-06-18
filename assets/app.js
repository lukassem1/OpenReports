/* ==========================================================================
   OpenReports — gallery logic
   To add a template: build a self-contained .html in /templates and add one
   entry to the REPORTS array below. That's the whole contribution flow.
   ========================================================================== */

const REPORTS = [
  {
    id: "sales-revenue",
    title: "Sales & Revenue Review",
    category: "sales",
    catLabel: "Sales & Revenue",
    charts: "embedded",
    file: "templates/sales-revenue.html",
    description:
      "Monthly commercial review: revenue vs. target, sales funnel, top products and rep leaderboard. Pure inline SVG — zero dependencies.",
  },
  {
    id: "financial-statement",
    title: "Financial Statement (P&L)",
    category: "financial",
    catLabel: "Financial / P&L",
    charts: "embedded",
    file: "templates/financial-statement.html",
    description:
      "Board-ready income statement with cash flow, expense breakdown and margin trend. Table-heavy, print-friendly, fully self-contained.",
  },
  {
    id: "kpi-dashboard",
    title: "Executive KPI Dashboard",
    category: "kpi",
    catLabel: "KPI Dashboard",
    charts: "chartjs",
    file: "templates/kpi-dashboard.html",
    description:
      "One-screen executive overview: KPI cards, trend lines and a category breakdown. Interactive charts powered by Chart.js (CDN).",
  },
  {
    id: "marketing-traffic",
    title: "Marketing & Traffic Report",
    category: "marketing",
    catLabel: "Marketing / Traffic",
    charts: "embedded",
    file: "templates/marketing-traffic.html",
    description:
      "Channel performance, acquisition funnel, CAC & ROAS and campaign table for agency or in-house marketing reviews.",
  },
  {
    id: "people-hr",
    title: "People & HR Report",
    category: "people",
    catLabel: "People / HR",
    charts: "embedded",
    file: "templates/people-hr.html",
    description:
      "Headcount, hiring funnel, attrition and engagement for the people meeting. On the roadmap — vote for it on GitHub.",
    soon: true,
  },
  {
    id: "operations-project",
    title: "Operations & Project Status",
    category: "operations",
    catLabel: "Operations / Project",
    charts: "embedded",
    file: "templates/operations-project.html",
    description:
      "Project health, milestones, SLAs and throughput for ops and delivery reviews. On the roadmap — vote for it on GitHub.",
    soon: true,
  },
];

const CATEGORIES = [
  { key: "all", label: "All" },
  { key: "sales", label: "Sales & Revenue" },
  { key: "financial", label: "Financial / P&L" },
  { key: "kpi", label: "KPI Dashboard" },
  { key: "marketing", label: "Marketing / Traffic" },
  { key: "people", label: "People / HR" },
  { key: "operations", label: "Operations / Project" },
];

const state = { category: "all", charts: "all", q: "" };

/* ---------- prompt generator ---------- */
function buildPrompt(r) {
  return (
    `Create a report in the EXACT same design, layout, typography and colour ` +
    `system as the attached HTML file (OpenReports — "${r.title}"). ` +
    `Keep the structure and visual style identical; only swap the sample data ` +
    `for mine. Output a single self-contained HTML file.\n\n` +
    `Here is my data:\n[ PASTE YOUR NUMBERS / CONTEXT HERE ]`
  );
}

/* ---------- icons ---------- */
const I = {
  eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',
  down: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"/></svg>',
  copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>',
};

/* ---------- render ---------- */
function chartLabel(c) { return c === "chartjs" ? "Interactive (Chart.js)" : "Self-contained"; }

function cardHTML(r) {
  const soon = r.soon;
  const preview = soon
    ? `<div class="thumb"><div class="live">Coming soon</div></div>`
    : `<div class="thumb">
         <iframe src="${r.file}" loading="lazy" title="${r.title} preview"></iframe>
         <span class="live">Live preview</span>
         <a class="glass" href="${r.file}" target="_blank" rel="noopener" aria-label="Open ${r.title}"></a>
       </div>`;

  const actions = soon
    ? `<div class="actions"><button class="btn" disabled style="opacity:.5;cursor:default">In progress</button></div>`
    : `<div class="actions">
         <a class="btn" href="${r.file}" target="_blank" rel="noopener">${I.eye} Preview</a>
         <a class="btn" href="${r.file}" download>${I.down} Download</a>
         <button class="btn primary icon-btn" data-prompt="${r.id}" title="Copy AI prompt">${I.copy}</button>
       </div>`;

  return `<article class="card" data-cat="${r.category}" data-charts="${r.charts}">
    ${preview}
    <div class="body">
      <div class="badges">
        <span class="badge cat">${r.catLabel}</span>
        <span class="badge">${chartLabel(r.charts)}</span>
      </div>
      <h3>${r.title}</h3>
      <p>${r.description}</p>
      ${actions}
    </div>
  </article>`;
}

function render() {
  const grid = document.getElementById("grid");
  const q = state.q.trim().toLowerCase();
  const list = REPORTS.filter((r) => {
    if (state.category !== "all" && r.category !== state.category) return false;
    if (state.charts !== "all" && r.charts !== state.charts) return false;
    if (q && !(r.title + r.description + r.catLabel).toLowerCase().includes(q)) return false;
    return true;
  });

  grid.innerHTML = list.length
    ? list.map(cardHTML).join("")
    : `<div class="empty">No templates match these filters yet.<br>Want one? Open an issue on GitHub.</div>`;

  document.getElementById("count").textContent =
    `${list.length} template${list.length === 1 ? "" : "s"}`;

  grid.querySelectorAll("[data-prompt]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const r = REPORTS.find((x) => x.id === btn.dataset.prompt);
      copyText(buildPrompt(r), "Prompt copied — paste it with the file into Claude");
    });
  });
}

/* ---------- chips & controls ---------- */
function buildChips() {
  const box = document.getElementById("chips");
  box.innerHTML = CATEGORIES.map(
    (c) => `<button class="chip ${c.key === "all" ? "active" : ""}" data-cat="${c.key}">${c.label}</button>`
  ).join("");
  box.querySelectorAll(".chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      box.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      state.category = chip.dataset.cat;
      render();
    });
  });
}

function bindSeg() {
  document.querySelectorAll(".seg button").forEach((b) => {
    b.addEventListener("click", () => {
      document.querySelectorAll(".seg button").forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
      state.charts = b.dataset.charts;
      render();
    });
  });
  const input = document.getElementById("search-input");
  input.addEventListener("input", () => { state.q = input.value; render(); });
}

/* ---------- clipboard + toast ---------- */
let toastT;
function showToast(msg) {
  let t = document.getElementById("toast");
  if (!t) { t = document.createElement("div"); t.id = "toast"; t.className = "toast"; document.body.appendChild(t); }
  t.textContent = msg; t.classList.add("show");
  clearTimeout(toastT);
  toastT = setTimeout(() => t.classList.remove("show"), 2600);
}
async function copyText(text, msg) {
  try {
    await navigator.clipboard.writeText(text);
    showToast(msg);
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text; document.body.appendChild(ta); ta.select();
    document.execCommand("copy"); ta.remove();
    showToast(msg);
  }
}

/* ---------- boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  buildChips();
  bindSeg();
  render();
});
