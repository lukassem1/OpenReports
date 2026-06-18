/* ==========================================================================
   OpenReports — gallery logic (bilingual EN/PT)
   To add a template: build a self-contained .html in /templates and add one
   entry to REPORTS below (with en/pt title + description). That's the flow.
   ========================================================================== */

/* >>> Set your GitHub repo here (user/repo). Powers the Star button + links. */
const REPO = "your-user/OpenReports";
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
    id: "people-hr", category: "people", charts: "embedded", soon: true,
    file: "templates/people-hr.html",
    title: { en: "People & HR Report", pt: "Relatório de Pessoas & RH" },
    description: {
      en: "Headcount, hiring funnel, attrition and engagement for the people meeting. On the roadmap — vote for it on GitHub.",
      pt: "Headcount, funil de contratação, turnover e engajamento para a reunião de pessoas. No roadmap — vote no GitHub.",
    },
  },
  {
    id: "operations-project", category: "operations", charts: "embedded", soon: true,
    file: "templates/operations-project.html",
    title: { en: "Operations & Project Status", pt: "Status de Operações & Projetos" },
    description: {
      en: "Project health, milestones, SLAs and throughput for ops and delivery reviews. On the roadmap — vote for it on GitHub.",
      pt: "Saúde de projetos, marcos, SLAs e throughput para reuniões de operações e entregas. No roadmap — vote no GitHub.",
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
         <a class="btn" href="${r.file}" download>${I.down} ${s.download}</a>
         <button class="btn primary icon-btn" data-prompt="${r.id}" title="${s.copy}">${I.copy}</button>
       </div>`;

  return `<article class="card" data-cat="${r.category}" data-charts="${r.charts}">
    ${preview}
    <div class="body">
      <div class="badges">
        <span class="badge cat">${catLabel(r.category)}</span>
        <span class="badge">${chartBadge(r.charts)}</span>
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

/* ---------- GitHub star button ---------- */
function initStar() {
  $("star-btn").href = REPO_URL;
  fetch("https://api.github.com/repos/" + REPO)
    .then((r) => (r.ok ? r.json() : null))
    .then((d) => {
      if (d && typeof d.stargazers_count === "number") {
        const el = $("star-count");
        el.textContent = d.stargazers_count.toLocaleString();
        el.hidden = false;
      }
    })
    .catch(() => {});
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
  document.querySelectorAll(".seg button").forEach((b) =>
    b.addEventListener("click", () => {
      document.querySelectorAll(".seg button").forEach((x) => x.classList.remove("active"));
      b.classList.add("active"); state.charts = b.dataset.charts; render();
    }));
  $("search-input").addEventListener("input", (e) => { state.q = e.target.value; render(); });
  document.querySelectorAll("#lang-toggle button").forEach((b) =>
    b.addEventListener("click", () => setLang(b.dataset.lang)));
  $("viewer-back").addEventListener("click", closeViewer);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !$("viewer").hidden) closeViewer(); });
  initStar();
  setLang(lang);
});
