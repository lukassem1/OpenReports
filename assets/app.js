/* ==========================================================================
   OpenReports — gallery logic (bilingual EN/PT)
   To add a template: build a self-contained .html in /templates and add one
   entry to REPORTS below (with en/pt title + description). That's the flow.
   ========================================================================== */

/* >>> Set your GitHub repo here (user/repo). Powers the Star button + links. */
const REPO = "lukassem1/OpenReports";
const REPO_URL = "https://github.com/" + REPO;
const ARKHE_URL = "https://arkhen.tech";

/* ---------- catalog ---------- */
const REPORTS = [
  {
    id: "sales-revenue", category: "sales", charts: "embedded",
    file: "templates/sales-revenue.html",
    title: { en: "Sales & Revenue Review", pt: "Relatório de Vendas & Receita" },
    description: {
      en: "Monthly commercial review: revenue vs. target, sales funnel, top products and rep leaderboard. Pure inline SVG — zero dependencies.",
      pt: "Reunião comercial do mês: receita vs. meta, funil de vendas, produtos top e ranking de vendedores. SVG embutido — zero dependências.",
    },
  },
  {
    id: "financial-statement", category: "financial", charts: "embedded",
    file: "templates/financial-statement.html",
    title: { en: "Financial Statement (P&L)", pt: "Demonstrativo Financeiro (DRE)" },
    description: {
      en: "Board-ready income statement with cash flow, expense breakdown and margin trend. Table-heavy, print-friendly, fully self-contained.",
      pt: "DRE pronta pra diretoria, com fluxo de caixa, quebra de despesas e tendência de margem. Foco em tabelas, pronta pra impressão, autossuficiente.",
    },
  },
  {
    id: "kpi-dashboard", category: "kpi", charts: "chartjs",
    file: "templates/kpi-dashboard.html",
    title: { en: "Executive KPI Dashboard", pt: "Painel Executivo de KPIs" },
    description: {
      en: "One-screen executive overview: KPI cards, trend lines and a category breakdown. Interactive charts powered by Chart.js (CDN).",
      pt: "Visão executiva numa tela só: cards de KPI, linhas de tendência e quebra por categoria. Gráficos interativos com Chart.js (CDN).",
    },
  },
  {
    id: "marketing-traffic", category: "marketing", charts: "embedded",
    file: "templates/marketing-traffic.html",
    title: { en: "Marketing & Traffic Report", pt: "Relatório de Marketing & Tráfego" },
    description: {
      en: "Channel performance, acquisition funnel, CAC & ROAS and campaign table for agency or in-house marketing reviews.",
      pt: "Desempenho por canal, funil de aquisição, CAC & ROAS e tabela de campanhas para reuniões de marketing (agência ou interno).",
    },
  },
  {
    id: "people-hr", category: "people", charts: "embedded",
    file: "templates/people-hr.html",
    title: { en: "People & HR Report", pt: "Relatório de Pessoas & RH" },
    description: {
      en: "Headcount by department, hiring funnel, attrition trend and open roles for the people meeting. Pure inline SVG — zero dependencies.",
      pt: "Headcount por área, funil de contratação, tendência de turnover e vagas abertas para a reunião de pessoas. SVG embutido — zero dependências.",
    },
  },
  {
    id: "operations-project", category: "operations", charts: "embedded",
    file: "templates/operations-project.html",
    title: { en: "Operations & Project Status", pt: "Status de Operações & Projetos" },
    description: {
      en: "Project status with progress bars, throughput trend, on-time SLA delivery and a milestone timeline. Fully self-contained.",
      pt: "Status de projetos com barras de progresso, throughput, entrega no prazo (SLA) e timeline de marcos. Totalmente autossuficiente.",
    },
  },
  {
    id: "strategy-report", category: "strategy", charts: "embedded",
    file: "templates/strategy-report.html",
    title: { en: "Strategy Report (long-form)", pt: "Relatório de Estratégia (long-form)" },
    description: {
      en: "A premium long-form executive memo — verdict banner, market map, positioning A/B, value ladder, a named framework, risks and a 90-day plan. Editorial design (Fraunces + Inter), Midnight Slate dark scheme.",
      pt: "Memorando executivo long-form premium — verdict banner, mapa de mercado, A/B de posicionamento, escada de valor, framework nomeado, riscos e plano de 90 dias. Design editorial (Fraunces + Inter), esquema escuro Midnight Slate.",
    },
  },
  {
    id: "annual-results", category: "review", charts: "embedded",
    file: "templates/annual-results.html",
    title: { en: "Annual Results (Year in Review)", pt: "Resultados Anuais (Retrospectiva)" },
    description: {
      en: "A high-impact year-in-review: animated mega-numbers, highlight cards, a full project grid with status pills, a delivery timeline and a consolidated table. Indigo scheme.",
      pt: "Retrospectiva de alto impacto: mega-números animados, cards de destaque, grade de projetos com status, timeline de entregas e tabela consolidada. Esquema indigo.",
    },
  },
  {
    id: "annual-results-emerald", category: "review", charts: "embedded",
    file: "templates/annual-results-emerald.html",
    title: { en: "Annual Results — Emerald", pt: "Resultados Anuais — Emerald" },
    description: {
      en: "The same year-in-review layout in an emerald colour scheme.",
      pt: "A mesma retrospectiva anual em esquema de cor emerald.",
    },
  },
  {
    id: "segmentation-study", category: "analysis", charts: "embedded", pick: true,
    file: "templates/segmentation-study.html",
    title: { en: "Customer Segmentation Study", pt: "Estudo de Segmentação de Clientes" },
    description: {
      en: "Split a base into two mutually-exclusive tiers: a flow diagram, side-by-side columns, stat cards, comparison tables and a decision block. Emerald & amber.",
      pt: "Divide uma base em duas faixas exclusivas: diagrama de fluxo, colunas lado a lado, cards, tabelas comparativas e bloco de decisão. Emerald & âmbar.",
    },
  },
  {
    id: "segmentation-study-slate", category: "analysis", charts: "embedded",
    file: "templates/segmentation-study-slate.html",
    title: { en: "Customer Segmentation — Slate", pt: "Segmentação de Clientes — Slate" },
    description: {
      en: "The same segmentation study in a slate-blue colour scheme.",
      pt: "O mesmo estudo de segmentação em esquema slate (azul ardósia).",
    },
  },
  {
    id: "slide-deck", category: "deck", charts: "chartjs",
    file: "templates/slide-deck.html",
    title: { en: "Executive Quarterly Review (deck)", pt: "Revisão Trimestral Executiva (deck)" },
    description: {
      en: "A multi-slide executive presentation: gradient cover, slide nav, KPI grids, interactive Chart.js charts, tables and insight callouts. Royal blue.",
      pt: "Apresentação executiva multi-slide: capa em gradiente, navegação por slides, grids de KPI, gráficos interativos Chart.js, tabelas e insights. Azul royal.",
    },
  },
  {
    id: "slide-deck-graphite", category: "deck", charts: "chartjs",
    file: "templates/slide-deck-graphite.html",
    title: { en: "Executive Quarterly Review — Graphite", pt: "Revisão Trimestral — Graphite" },
    description: {
      en: "The same multi-slide deck in a dark graphite colour scheme.",
      pt: "O mesmo deck multi-slide em esquema escuro graphite.",
    },
  },
];

const CATEGORIES = [
  { key: "all", label: { en: "All", pt: "Todos" } },
  { key: "sales", label: { en: "Sales & Revenue", pt: "Vendas & Receita" } },
  { key: "financial", label: { en: "Financial / P&L", pt: "Financeiro / DRE" } },
  { key: "kpi", label: { en: "KPI Dashboard", pt: "Painel de KPIs" } },
  { key: "marketing", label: { en: "Marketing / Traffic", pt: "Marketing / Tráfego" } },
  { key: "people", label: { en: "People / HR", pt: "Pessoas / RH" } },
  { key: "operations", label: { en: "Operations / Project", pt: "Operações / Projetos" } },
  { key: "strategy", label: { en: "Strategy / Memo", pt: "Estratégia / Memo" } },
  { key: "review", label: { en: "Annual Review", pt: "Retrospectiva Anual" } },
  { key: "analysis", label: { en: "Analysis / Study", pt: "Análise / Estudo" } },
  { key: "deck", label: { en: "Presentation / Deck", pt: "Apresentação / Deck" } },
];

/* ---------- UI strings ---------- */
const T = {
  en: {
    navHow: "How it works", navTemplates: "Templates",
    heroTitle: 'Beautiful report templates, <em>ready for AI</em>.',
    heroLead: 'A free, open library of static HTML reports for your managerial meetings. Pick a design you love, download the file, and tell your AI: <em>“make my report in this exact design.”</em>',
    step1h: "Browse & pick", step1p: "Find a report design that fits your meeting — sales, finance, KPIs, marketing.",
    step2h: "Download or copy the prompt", step2p: "Grab the self-contained HTML file and the ready-made prompt with one click.",
    step3h: "Drop it in your AI chat", step3p: "Attach the file, paste your data, and get your own polished report back.",
    fAll: "All charts", fEmbedded: "Self-contained", fInteractive: "Interactive",
    searchPh: "Search templates…",
    count: (n) => `${n} template${n === 1 ? "" : "s"}`,
    preview: "Preview", download: "Download", copy: "Copy AI prompt",
    badgeEmbedded: "Self-contained", badgeInteractive: "Interactive (Chart.js)",
    live: "Live preview", soon: "Coming soon", roadmap: "On the roadmap",
    pick: "Author's pick", dl: "downloads",
    footerLeft: `MIT-licensed · free for commercial use · built by <a href="${ARKHE_URL}" target="_blank" rel="noopener">Instituto Arkhe</a>.`,
    footerRight: "Have a design to share?", contribute: "Contribute on GitHub →",
    viewerBack: "Back to gallery", viewerOpen: "Open in new tab", viewerDownload: "Download",
    copied: "Prompt copied — paste it with the file into Claude",
    empty: "No templates match these filters yet.",
  },
  pt: {
    navHow: "Como funciona", navTemplates: "Modelos",
    heroTitle: 'Relatórios lindos, <em>prontos pra IA</em>.',
    heroLead: 'Uma biblioteca aberta e gratuita de relatórios em HTML estático para suas reuniões gerenciais. Escolha um design, baixe o arquivo e peça pra sua IA: <em>“faça meu relatório nesse mesmo design.”</em>',
    step1h: "Navegue & escolha", step1p: "Ache um design que combine com sua reunião — vendas, finanças, KPIs, marketing.",
    step2h: "Baixe ou copie o prompt", step2p: "Pegue o HTML autossuficiente e o prompt pronto com um clique.",
    step3h: "Cole no chat da sua IA", step3p: "Anexe o arquivo, cole seus dados e receba seu relatório pronto.",
    fAll: "Todos", fEmbedded: "Autossuficiente", fInteractive: "Interativo",
    searchPh: "Buscar modelos…",
    count: (n) => `${n} modelo${n === 1 ? "" : "s"}`,
    preview: "Visualizar", download: "Baixar", copy: "Copiar prompt de IA",
    badgeEmbedded: "Autossuficiente", badgeInteractive: "Interativo (Chart.js)",
    live: "Preview ao vivo", soon: "Em breve", roadmap: "No roadmap",
    pick: "Escolha do autor", dl: "downloads",
    footerLeft: `Licença MIT · livre para uso comercial · feito pelo <a href="${ARKHE_URL}" target="_blank" rel="noopener">Instituto Arkhe</a>.`,
    footerRight: "Tem um design pra compartilhar?", contribute: "Contribua no GitHub →",
    viewerBack: "Voltar à galeria", viewerOpen: "Abrir em nova aba", viewerDownload: "Baixar",
    copied: "Prompt copiado — cole junto com o arquivo no Claude",
    empty: "Nenhum modelo corresponde a esses filtros ainda.",
  },
};

let lang = localStorage.getItem("or-lang") || "en";
const state = { category: "all", charts: "all", q: "" };
const $ = (id) => document.getElementById(id);
const tr = (o) => (o && o[lang]) || (o && o.en) || o;

/* ---------- prompt generator (language-aware) ---------- */
function buildPrompt(r) {
  const title = tr(r.title);
  if (lang === "pt") {
    return (
      `Crie um relatório com EXATAMENTE o mesmo design, layout, tipografia e ` +
      `cores do arquivo HTML anexado (OpenReports — "${title}"). Mantenha a ` +
      `estrutura e o estilo visual idênticos; troque apenas os dados de exemplo ` +
      `pelos meus. Gere um único arquivo HTML autossuficiente.\n\n` +
      `Meus dados:\n[ COLE AQUI SEUS NÚMEROS / CONTEXTO ]`
    );
  }
  return (
    `Create a report in the EXACT same design, layout, typography and colour ` +
    `system as the attached HTML file (OpenReports — "${title}"). Keep the ` +
    `structure and visual style identical; only swap the sample data for mine. ` +
    `Output a single self-contained HTML file.\n\n` +
    `Here is my data:\n[ PASTE YOUR NUMBERS / CONTEXT HERE ]`
  );
}

/* ---------- icons ---------- */
const I = {
  eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',
  down: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"/></svg>',
  copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>',
};

/* ---------- download counters (Abacus — free hosted counter, no key) ---------- */
const COUNTER_NS = "openreports-lukassem1";
let currentViewer = null;
const dlCache = {};
const counterFmt = (n) => (n == null ? "—" : Number(n).toLocaleString());
function counterGet(id) {
  return fetch(`https://abacus.jasoncameron.dev/get/${COUNTER_NS}/${id}`)
    .then((r) => (r.ok ? r.json() : null))
    .then((d) => (d && typeof d.value === "number" ? d.value : null))
    .catch(() => null);
}
function counterHit(id) {
  return fetch(`https://abacus.jasoncameron.dev/hit/${COUNTER_NS}/${id}`)
    .then((r) => (r.ok ? r.json() : null))
    .then((d) => (d && typeof d.value === "number" ? d.value : null))
    .catch(() => null);
}
function setDl(id, v) {
  document.querySelectorAll(`[data-dl="${id}"] b`).forEach((el) => { el.textContent = counterFmt(v); });
}
function bumpDownload(id) { counterHit(id).then((v) => { if (v != null) { dlCache[id] = v; setDl(id, v); } }); }

function catLabel(key) {
  const c = CATEGORIES.find((x) => x.key === key);
  return c ? tr(c.label) : key;
}
function chartBadge(c) { return c === "chartjs" ? T[lang].badgeInteractive : T[lang].badgeEmbedded; }

/* ---------- render cards ---------- */
function cardHTML(r) {
  const s = T[lang];
  const title = tr(r.title);
  const preview = r.soon
    ? `<div class="thumb"><div class="live">${s.soon}</div></div>`
    : `<div class="thumb">
         <iframe src="${r.file}" loading="lazy" title="${title} preview"></iframe>
         <span class="live">${s.live}</span>
         <div class="glass" data-preview="${r.id}" role="button" aria-label="${title}"></div>
       </div>`;

  const actions = r.soon
    ? `<div class="actions"><button class="btn" disabled style="opacity:.5;cursor:default">${s.roadmap}</button></div>`
    : `<div class="actions">
         <button class="btn" data-preview="${r.id}">${I.eye} ${s.preview}</button>
         <a class="btn" href="${r.file}" download data-dl-btn="${r.id}">${I.down} ${s.download}</a>
         <button class="btn primary icon-btn" data-prompt="${r.id}" title="${s.copy}">${I.copy}</button>
       </div>`;

  return `<article class="card" data-cat="${r.category}" data-charts="${r.charts}">
    ${preview}
    <div class="body">
      <div class="badges">
        <span class="badge cat">${catLabel(r.category)}</span>
        <span class="badge">${chartBadge(r.charts)}</span>
        ${r.pick ? `<span class="badge pick">★ ${s.pick}</span>` : ""}
        <span class="badge dl" data-dl="${r.id}" title="${s.dl}">${I.down}<b>—</b></span>
      </div>
      <h3>${title}</h3>
      <p>${tr(r.description)}</p>
      ${actions}
    </div>
  </article>`;
}

function render() {
  const grid = $("grid");
  const q = state.q.trim().toLowerCase();
  const list = REPORTS.filter((r) => {
    if (state.category !== "all" && r.category !== state.category) return false;
    if (state.charts !== "all" && r.charts !== state.charts) return false;
    if (q && !(tr(r.title) + tr(r.description) + catLabel(r.category)).toLowerCase().includes(q)) return false;
    return true;
  });

  grid.innerHTML = list.length
    ? list.map(cardHTML).join("")
    : `<div class="empty">${T[lang].empty}</div>`;
  $("count").textContent = T[lang].count(list.length);

  grid.querySelectorAll("[data-prompt]").forEach((b) =>
    b.addEventListener("click", () => copyText(buildPrompt(byId(b.dataset.prompt)), T[lang].copied)));
  grid.querySelectorAll("[data-preview]").forEach((b) =>
    b.addEventListener("click", () => openViewer(byId(b.dataset.preview))));

  // download counters: fetch current count + increment on download click
  grid.querySelectorAll("[data-dl]").forEach((el) => {
    const id = el.getAttribute("data-dl");
    if (dlCache[id] != null) { setDl(id, dlCache[id]); return; }
    counterGet(id).then((v) => { if (v != null) { dlCache[id] = v; setDl(id, v); } });
  });
  grid.querySelectorAll("[data-dl-btn]").forEach((a) =>
    a.addEventListener("click", () => bumpDownload(a.getAttribute("data-dl-btn"))));
}
const byId = (id) => REPORTS.find((x) => x.id === id);

/* ---------- chips ---------- */
function buildChips() {
  const box = $("chips");
  box.innerHTML = CATEGORIES.map(
    (c) => `<button class="chip ${c.key === state.category ? "active" : ""}" data-cat="${c.key}">${tr(c.label)}</button>`
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

/* ---------- viewer (full page in-site, preserves gallery scroll) ---------- */
function openViewer(r) {
  if (!r || r.soon) return;
  currentViewer = r.id;
  $("viewer-title").textContent = tr(r.title);
  $("viewer-frame").src = r.file;
  $("viewer-open").href = r.file;
  $("viewer-download").href = r.file;
  $("viewer").hidden = false;
  document.body.classList.add("viewer-open");
}
function closeViewer() {
  $("viewer").hidden = true;
  document.body.classList.remove("viewer-open");
  $("viewer-frame").src = "about:blank"; // stop any Chart.js / scripts
}

/* ---------- i18n apply ---------- */
function applyLang() {
  const s = T[lang];
  document.documentElement.lang = lang;
  $("nav-how").textContent = s.navHow;
  $("nav-templates").textContent = s.navTemplates;
  $("hero-title").innerHTML = s.heroTitle;
  $("hero-lead").innerHTML = s.heroLead;
  $("step1-h").textContent = s.step1h; $("step1-p").textContent = s.step1p;
  $("step2-h").textContent = s.step2h; $("step2-p").textContent = s.step2p;
  $("step3-h").textContent = s.step3h; $("step3-p").textContent = s.step3p;
  document.querySelector('.seg [data-charts="all"]').textContent = s.fAll;
  document.querySelector('.seg [data-charts="embedded"]').textContent = s.fEmbedded;
  document.querySelector('.seg [data-charts="chartjs"]').textContent = s.fInteractive;
  $("search-input").placeholder = s.searchPh;
  $("footer-left").innerHTML = s.footerLeft;
  $("footer-right").childNodes[0].nodeValue = s.footerRight + " ";
  $("footer-contribute").textContent = s.contribute;
  $("footer-contribute").href = REPO_URL;
  $("viewer-back-label").textContent = s.viewerBack;
  $("viewer-open-label").textContent = s.viewerOpen;
  $("viewer-download-label").textContent = s.viewerDownload;
  buildChips();
  render();
}

function setLang(l) {
  lang = l;
  localStorage.setItem("or-lang", l);
  document.querySelectorAll("#lang-toggle button").forEach((b) =>
    b.classList.toggle("active", b.dataset.lang === l));
  applyLang();
}

/* ---------- clipboard + toast ---------- */
let toastT;
function showToast(msg) {
  let t = $("toast");
  if (!t) { t = document.createElement("div"); t.id = "toast"; t.className = "toast"; document.body.appendChild(t); }
  t.textContent = msg; t.classList.add("show");
  clearTimeout(toastT);
  toastT = setTimeout(() => t.classList.remove("show"), 2600);
}
async function copyText(text, msg) {
  try { await navigator.clipboard.writeText(text); showToast(msg); }
  catch {
    const ta = document.createElement("textarea");
    ta.value = text; document.body.appendChild(ta); ta.select();
    document.execCommand("copy"); ta.remove(); showToast(msg);
  }
}

/* ---------- boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  // 1) Render the gallery first — nothing should be able to block it.
  try { setLang(lang); } catch (e) { console.error("OpenReports: render failed", e); }

  // 2) Wire up interactions (guarded, so a missing element never breaks the page).
  try {
    document.querySelectorAll(".seg button").forEach((b) =>
      b.addEventListener("click", () => {
        document.querySelectorAll(".seg button").forEach((x) => x.classList.remove("active"));
        b.classList.add("active"); state.charts = b.dataset.charts; render();
      }));
    let searchT;
    $("search-input").addEventListener("input", (e) => {
      const v = e.target.value;
      clearTimeout(searchT);
      searchT = setTimeout(() => { state.q = v; render(); }, 220);
    });
    document.querySelectorAll("#lang-toggle button").forEach((b) =>
      b.addEventListener("click", () => setLang(b.dataset.lang)));
    $("viewer-back").addEventListener("click", closeViewer);
    $("viewer-download").addEventListener("click", () => { if (currentViewer) bumpDownload(currentViewer); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !$("viewer").hidden) closeViewer(); });
  } catch (e) { console.error("OpenReports: event wiring failed", e); }

  // 3) Fallback if the official GitHub star widget can't render (e.g. blocked iframe).
  setTimeout(() => {
    const host = document.querySelector(".gh-star");
    if (host && !host.querySelector("iframe")) {
      host.innerHTML =
        `<a class="gh-btn" href="${REPO_URL}" target="_blank" rel="noopener" aria-label="Star on GitHub">` +
        `<svg width="15" height="15" viewBox="0 0 24 24" fill="#e3a008"><path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 20.9l1.1-6.5L2.6 9.8l6.5-.9L12 2.5z"/></svg> Star on GitHub</a>`;
    }
  }, 2500);
});
