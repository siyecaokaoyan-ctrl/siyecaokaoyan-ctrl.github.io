/* 世界高校图书馆研究 · 共享脚本 */
"use strict";

/* ── 通用工具 ── */
const $ = (s, el) => (el || document).querySelector(s);
const $$ = (s, el) => Array.from((el || document).querySelectorAll(s));

function schoolShort(id) {
  const map = { harvard:"哈", mit:"M", stanford:"斯", princeton:"普", yale:"耶", jhu:"霍", duke:"杜", uchicago:"芝", glasgow:"格", upenn:"宾", columbia:"哥" };
  return map[id] || id.slice(0, 1).toUpperCase();
}
function schoolById(id) { return SCHOOLS.find(s => s.id === id); }

/* 校色系统：详情页由 JS 覆盖 --accent / --accent-soft */
const SCHOOL_COLORS = {
  harvard:  { accent: "#A51C30", soft: "#f7eef0" },
  mit:      { accent: "#A31F34", soft: "#f5edef" },
  stanford: { accent: "#8C1515", soft: "#f5eaea" },
  princeton:{ accent: "#E77500", soft: "#fdf1e0" },
  yale:     { accent: "#00356B", soft: "#e9eff6" },
  glasgow:  { accent: "#005A87", soft: "#e8f1f6" },
  duke:     { accent: "#00539B", soft: "#e8f1fa" },
  jhu:      { accent: "#002D72", soft: "#e9edf5" },
  uchicago: { accent: "#800000", soft: "#f5ecec" },
  upenn:    { accent: "#011F5B", soft: "#e9edf5" },
  columbia: { accent: "#0038A8", soft: "#eef2fa" }
};
function setSchoolTheme(id) {
  const c = SCHOOL_COLORS[id] || SCHOOL_COLORS.upenn;
  const root = document.documentElement.style;
  root.setProperty("--accent", c.accent);
  root.setProperty("--accent-soft", c.soft);
}

/* HTML 转义 */
function esc(t) {
  return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/* 关键数字自动加粗：金额/数量（带单位）与年份 */
function hl(t) {
  return esc(t).replace(
    /(\$?\d[\d,]*(?:\.\d+)?(?:\s*[万亿])?(?:\s*(?:(?:美)?元|册|卷|座|所|个|项|人次|平方英尺|英尺|%|倍))|(?:19|20)\d{2}(?:[–—-]\d{2,4})?年?)/g,
    "<b>$1</b>"
  );
}

/* ── 滚动浮现动画 ── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); revealObserver.unobserve(e.target); }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

function bindReveals() {
  $$(".reveal:not(.in)").forEach(el => revealObserver.observe(el));
}

/* ── 数字滚动 ── */
function countUp(el, target, dur = 900) {
  const start = performance.now();
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) { el.firstChild.nodeValue = String(target); return; }
  function tick(now) {
    const p = Math.min(1, (now - start) / dur);
    const eased = 1 - Math.pow(1 - p, 3);
    el.firstChild.nodeValue = String(Math.round(target * eased));
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* ── 学校卡片 ── */
/* 校徽（本地文件；mit/jhu 为 SVG 矢量，其余 PNG） */
const LOGO_EXT = { mit: "svg", jhu: "svg" };
const logoSrc = id => `assets/logos/${id}.${LOGO_EXT[id] || "png"}`;
const logoImg = (id, cls) => `<img class="${cls}" src="${logoSrc(id)}" alt="" loading="lazy" onerror="this.style.display='none'">`;

function renderCards(filter) {
  const grid = $("#cards");
  if (!grid) return;
  const list = (filter === "all" ? SCHOOLS : SCHOOLS.filter(s => s.region === filter)).map(s => SCHOOLS.indexOf(s));
  grid.innerHTML = list.map((idx, i) => {
    const s = SCHOOLS[idx];
    return `
    <a class="card reveal" style="transition-delay:${(i % 3) * 0.07}s" href="school.html?id=${s.id}">
      <div class="c-head">
        ${logoImg(s.id, "c-logo")}
        <div class="c-top">
          <div class="region">${s.country} · ${s.state.split(" · ")[0]}</div>
          <div class="idx">${String(idx + 1).padStart(2, "0")}</div>
        </div>
      </div>
      <div class="c-name">${esc(s.name)}</div>
      <div class="c-tagline">${esc(s.tagline)}</div>
      <div class="c-line">${hl(s.mainLine)}</div>
      <div class="c-foot"><span>旗舰 <b>${esc(s.flagship.name.split("（")[0].trim())}</b></span><span class="arrow">→</span></div>
    </a>`;
  }).join("");
  bindReveals();
}

function bindFilters() {
  const box = $("#filters");
  if (!box) return;
  const regions = ["all", ...new Set(SCHOOLS.map(s => s.region))];
  box.innerHTML = regions.map(r => {
    const n = r === "all" ? SCHOOLS.length : SCHOOLS.filter(s => s.region === r).length;
    const label = r === "all" ? `全部 ${n}` : `${r} ${n}`;
    return `<div class="f-chip${r === "all" ? " on" : ""}" data-region="${r}">${label}</div>`;
  }).join("");
  box.addEventListener("click", (e) => {
    const chip = e.target.closest(".f-chip");
    if (!chip) return;
    $$(".f-chip", box).forEach(c => c.classList.remove("on"));
    chip.classList.add("on");
    renderCards(chip.dataset.region);
  });
}

/* ── 趋势共识图谱 ── */
function renderTrendMap(activeIds) {
  const box = $("#trendmap");
  if (!box) return;
  const sorted = [...TRENDS].sort((a, b) => b.schools.length - a.schools.length);
  box.innerHTML = sorted.map((t, i) => `
    <a class="trend reveal" style="transition-delay:${i * 0.05}s" href="trend.html?id=${t.id}">
      <div class="rank">${String(i + 1).padStart(2, "0")}</div>
      <div class="t-name">${t.title}<span>${t.subtitle}</span></div>
      <div class="schools">${t.schools.map(id => {
        const hot = activeIds && activeIds.includes(id);
        const c = hot ? SCHOOL_COLORS[id] : null;
        return `<div class="chip-s${hot ? " hot" : ""}"${c ? ` style="background:${c.accent};border-color:${c.accent}"` : ""} title="${schoolById(id).name}">${schoolShort(id)}</div>`;
      }).join("")}</div>
      <div class="count">${t.schools.length} 校共鸣</div>
    </a>`).join("");
  bindReveals();
}

/* ── 双校对比 ── */
function trendIdsOf(school) { return school.trends.map(t => t.title); }

function renderCompare(aId, bId) {
  const panel = $("#vs-panel");
  const a = schoolById(aId), b = schoolById(bId);
  if (!a || !b || !panel) return;
  const ca = SCHOOL_COLORS[a.id] || { accent: "var(--accent)", soft: "var(--accent-soft)" };
  const cb = SCHOOL_COLORS[b.id] || { accent: "var(--accent)", soft: "var(--accent-soft)" };
  const aTrendTitles = a.trends.map(t => t.title);
  const bTrendTitles = b.trends.map(t => t.title);
  const row = (label, va, vb, head) => `
    <div class="vs-row${head ? " vs-head" : ""}">
      <div class="vs-cell"${head ? ` style="box-shadow:inset 0 3px 0 ${ca.accent};background:${ca.soft}"` : ""}>${va}</div>
      <div class="vs-label">${label}</div>
      <div class="vs-cell"${head ? ` style="box-shadow:inset 0 3px 0 ${cb.accent};background:${cb.soft}"` : ""}>${vb}</div>
    </div>`;
  const matchRows = (ids) => ids.map(id => {
    const t = TRENDS.find(x => x.id === id);
    return t ? `<span class="match">● ${t.title}</span>` : "";
  }).join("<br>") || "—";
  const common = TRENDS.filter(t => t.schools.includes(a.id) && t.schools.includes(b.id)).map(t => t.id);
  panel.innerHTML =
    row("对比维度",
      `<div class="vs-id">${logoImg(a.id, "vs-logo")}<div><b style="color:${ca.accent}">${esc(a.name)}</b><span>${esc(a.nameEn.toUpperCase())} · ${a.founded}</span></div></div>`,
      `<div class="vs-id">${logoImg(b.id, "vs-logo")}<div><b style="color:${cb.accent}">${esc(b.name)}</b><span>${esc(b.nameEn.toUpperCase())} · ${b.founded}</span></div></div>`, true) +
    row("一句话主线", `<b>「${esc(a.tagline)}」</b>${hl(a.mainLine)}`, `<b>「${esc(b.tagline)}」</b>${hl(b.mainLine)}`) +
    row("旗舰项目", `<b>${esc(a.flagship.name)}</b><br>${hl(a.flagship.note)}`, `<b>${esc(b.flagship.name)}</b><br>${hl(b.flagship.note)}`) +
    row("学习空间", hl(a.learningSpaces), hl(b.learningSpaces)) +
    row("趋势交集", matchRows(common), matchRows(common)) +
    row("独有判断", `<b>${esc(a.trends[0].title)}</b>——${hl(a.trends[0].note)}`, `<b>${esc(b.trends[0].title)}</b>——${hl(b.trends[0].note)}`);
  // 图谱高亮联动
  renderTrendMap([a.id, b.id]);
  const url = new URL(location.href);
  url.searchParams.set("a", a.id);
  url.searchParams.set("b", b.id);
  history.replaceState(null, "", url);
}

function bindCompare() {
  const selA = $("#sel-a"), selB = $("#sel-b");
  if (!selA || !selB) return;
  const options = SCHOOLS.map(s => `<option value="${s.id}">${s.name} · ${s.state.split(" · ")[0]}</option>`).join("");
  selA.innerHTML = options; selB.innerHTML = options;
  const params = new URLSearchParams(location.search);
  const aId = params.get("a") || "harvard";
  const bId = params.get("b") || "uchicago";
  selA.value = schoolById(aId) ? aId : "harvard";
  selB.value = schoolById(bId) ? bId : "uchicago";
  const subA = $("#sel-a-sub"), subB = $("#sel-b-sub");
  const sync = () => {
    subA.textContent = schoolById(selA.value).state;
    subB.textContent = schoolById(selB.value).state;
  };
  sync();
  selA.addEventListener("change", () => { sync(); renderCompare(selA.value, selB.value); });
  selB.addEventListener("change", () => { sync(); renderCompare(selA.value, selB.value); });
  renderCompare(selA.value, selB.value);
}

/* ── 留言板 ── */
/* FormSubmit 免费表单服务：留言直达站长邮箱，首次提交后会收到一封激活邮件，点击确认即可 */
const FORM_ENDPOINT = "https://formsubmit.co/ajax/843020573@qq.com";

function bindMessageForm() {
  const form = $("#msg-form");
  if (!form) return;
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const ok = $("#msg-ok");
    const btn = $("#msg-btn");
    const data = {
      _subject: "【图书馆研究图谱】新留言",
      name: $("#msg-name").value.trim() || "匿名",
      message: $("#msg-text").value.trim()
    };
    if (!data.message) return;
    btn.disabled = true; btn.textContent = "发送中…";
    try {
      if (FORM_ENDPOINT.includes("PLACEHOLDER")) {
        // 本地预览：未配置表单端点，仅演示交互
        await new Promise(r => setTimeout(r, 600));
      } else {
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify(data)
        });
        if (!res.ok) throw new Error("submit failed");
      }
      ok.style.display = "block";
      form.reset();
    } catch (err) {
      alert("发送失败，请稍后重试，或直接邮件联系站长。");
    } finally {
      btn.disabled = false; btn.textContent = "提交";
    }
  });
}

/* ── 首页初始化 ── */
function initIndex() {
  const totalProjects = SCHOOLS.reduce((n, s) => n + s.projects.length, 0);
  const totalTrends = SCHOOLS.reduce((n, s) => n + s.trends.length, 0);
  const countries = new Set(SCHOOLS.map(s => s.country)).size;
  const stats = [
    { id: "stat-schools", v: SCHOOLS.length, suffix: " / 100", label: "已研究学校" },
    { id: "stat-projects", v: totalProjects, suffix: "", label: "关键改造项目" },
    { id: "stat-trends", v: totalTrends, suffix: "", label: "趋势判断" },
    { id: "stat-countries", v: countries, suffix: "", label: "覆盖国家" }
  ];
  $(".hero .meta").innerHTML = stats.map(s =>
    `<div class="stat"><div class="n" id="${s.id}">0<small>${s.suffix}</small></div><div class="l">${s.label}</div></div>`
  ).join("");
  renderCards("all");
  bindFilters();
  renderTrendMap(null);
  bindCompare();
  bindMessageForm();
  // 数字滚动（进入视口时触发一次）
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      const def = stats.find(s => s.id === en.target.id);
      if (def) countUp(en.target, def.v);
      statObserver.unobserve(en.target);
    });
  }, { threshold: 0.4 });
  stats.forEach(s => statObserver.observe($("#" + s.id)));
  bindReveals();
}

/* ── 学校详情页 ── */
function initSchool() {
  const id = new URLSearchParams(location.search).get("id");
  const s = schoolById(id) || SCHOOLS[0];
  setSchoolTheme(s.id);
  document.title = `${s.name} · 世界高校图书馆研究`;
  const crumb = $("#crumb-name");
  if (crumb) crumb.textContent = s.name;
  $("#d-title").textContent = s.name;
  const dlogo = $("#d-logo");
  if (dlogo) { dlogo.src = logoSrc(s.id); dlogo.onerror = () => dlogo.style.display = "none"; }
  $("#d-en").textContent = `${s.nameEn.toUpperCase()} · 建校 ${s.founded}`;
  $("#d-tagline").textContent = `「${s.tagline}」`;
  $("#d-mainline").innerHTML = hl(s.mainLine);
  $("#d-chips").innerHTML = `
    <span class="m-chip">${s.country} · ${s.state}</span>
    <span class="m-chip">报告编号 <b>${s.reportId}</b></span>
    <span class="m-chip">研究日期 <b>${s.reportDate}</b></span>`;
  // 锚点快导航
  const qn = $("#d-quicknav");
  if (qn) {
    qn.innerHTML = [
      ["#sec-overview", "系统概况"], ["#sec-projects", "重点项目"],
      ["#sec-spaces", "空间与服务"], ["#sec-trends", "趋势研判"],
      ["#sec-business", "业务启发"], ["#sec-limits", "待验证限制"],
      ["#sec-readers", "读者来信"], ["#sec-sources", "来源"]
    ].map(([h, t]) => `<a href="${h}">${t}</a>`).join("");
  }
  $("#d-flagship").innerHTML = `
    <div class="f-tag">旗舰项目</div>
    <div class="f-name">${esc(s.flagship.name)}</div>
    <div class="f-note">${hl(s.flagship.note)}</div>`;
  $("#d-overview-intro").innerHTML = `<b>系统概况。</b>${hl(s.overview.intro)}`;
  $("#d-stats").innerHTML = s.overview.stats.map(st =>
    `<div class="stat-card reveal"><div class="k">${esc(st.k)}</div><div class="v">${esc(st.v)}</div><div class="s">${esc(st.s)}</div></div>`).join("");
  $("#d-projects").innerHTML = s.projects.map(p => `
    <div class="proj reveal">
      <span class="p-kicker">${esc(p.year)}</span>
      <h3>${esc(p.name)}</h3>
      <div class="p-en">${esc(p.nameEn)}</div>
      ${p.stats && p.stats.length ? `<div class="p-stats">${p.stats.map(st => `<div class="p-stat"><div class="k">${esc(st.k)}</div><div class="v">${esc(st.v)}</div></div>`).join("")}</div>` : ""}
      <div class="p-facts"><span class="p-badge fact">事实</span>${hl(p.facts)}</div>
      <div class="p-insight"><span class="p-badge judge">判断 · 启示</span>${hl(p.insight)}</div>
    </div>`).join("");
  $("#d-learning").innerHTML = `<b>学习空间与配置。</b>${hl(s.learningSpaces)}`;
  $("#d-service").innerHTML = `<b>服务模式与运营。</b>${hl(s.serviceModel)}`;
  $("#d-trends").innerHTML = s.trends.map(t => `
    <div class="trend-item">
      <span class="t-badge ${t.type}">${t.type === "fact" ? "事实" : "判断"}</span>
      <div class="t-body"><b>${esc(t.title)}</b><p>${hl(t.note)}</p></div>
    </div>`).join("");
  $("#d-insights").innerHTML = s.business.map(b => `<li>${hl(b)}</li>`).join("");
  $("#d-limits").innerHTML = s.limits.map(l => `<li>${esc(l)}</li>`).join("");
  // 读者来信：有精选留言则展示，否则显示「虚位以待」引导
  const letters = (typeof READERS !== "undefined" && READERS[s.id]) || [];
  const tagName = { "感受": "feel", "建议": "advice", "选题": "topic", "启发": "insp" };
  $("#d-readers").innerHTML = letters.length
    ? letters.map(l => `
      <div class="reader-card reveal">
        <div class="r-head">
          <span class="r-tag ${tagName[l.tag] || "feel"}">${esc(l.tag)}</span>
          <span class="r-who">${esc(l.who)}</span>
          <span class="r-when">${esc(l.when)}</span>
        </div>
        <p>${hl(l.text)}</p>
      </div>`).join("")
    : `<div class="reader-empty reveal">
        <div class="r-quote">「</div>
        <p>这里虚位以待——读完这所学校图书馆的研究，你有什么<b>感受</b>、<b>启发</b>，或者希望深入探究的<b>选题</b>？</p>
        <p class="r-cta">到首页<a href="index.html#message">留言板</a>告诉我，精选内容会展示在这里与大家分享。</p>
      </div>`;
  $("#d-sources").innerHTML = s.sources.map(src => `
    <li><a href="https://${src.url}" target="_blank" rel="noopener">${esc(src.label)}</a><span class="s-url">${esc(src.url)}</span></li>`).join("");
  // 上一所 / 下一所
  const idx = SCHOOLS.indexOf(s);
  const prev = SCHOOLS[(idx - 1 + SCHOOLS.length) % SCHOOLS.length];
  const next = SCHOOLS[(idx + 1 + SCHOOLS.length) % SCHOOLS.length];
  $("#d-pager").innerHTML = `
    <a class="prev" href="school.html?id=${prev.id}"><div class="p-dir">← 上一所</div><div class="p-name">${prev.name}</div></a>
    <a class="next" href="school.html?id=${next.id}"><div class="p-dir">下一所 →</div><div class="p-name">${next.name}</div></a>`;
  bindReveals();
}

/* ── 趋势详情页 ── */
function initTrend() {
  const id = new URLSearchParams(location.search).get("id");
  const t = TRENDS.find(x => x.id === id) || TRENDS[0];
  document.title = `${t.title} · 世界高校图书馆研究`;
  $("#t-title").textContent = t.title;
  $("#t-sub").textContent = t.subtitle;
  $("#t-summary").innerHTML = hl(t.summary);
  $("#t-count").textContent = `${t.schools.length} 所学校独立验证了这一趋势`;
  $("#t-chips").innerHTML = t.schools.map(id2 =>
    `<a class="m-chip" href="school.html?id=${id2}"><b>${schoolById(id2).name}</b></a>`).join("");
  $("#t-evidence").innerHTML = t.schools.map((sid, i) => {
    const sc = schoolById(sid);
    return `<div class="evidence reveal" style="transition-delay:${i * 0.06}s">
      <div class="e-school">${sc.name}<span>${sc.state}</span></div>
      <p>${hl(t.evidence[sid])}</p>
      <p style="margin-top:12px"><a href="school.html?id=${sid}">查看 ${sc.name} 完整研究 →</a></p>
    </div>`;
  }).join("");
  bindReveals();
}

document.addEventListener("DOMContentLoaded", () => {
  if ($("#cards")) initIndex();
  if ($("#d-title")) initSchool();
  if ($("#t-title")) initTrend();
});
