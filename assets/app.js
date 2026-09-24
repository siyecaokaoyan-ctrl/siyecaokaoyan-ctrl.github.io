/* 世界高校图书馆研究 · 共享脚本 */
"use strict";

/* ── 通用工具 ── */
const $ = (s, el) => (el || document).querySelector(s);
const $$ = (s, el) => Array.from((el || document).querySelectorAll(s));

function schoolShort(id) {
  const map = { harvard:"哈", mit:"M", stanford:"斯", princeton:"普", yale:"耶", jhu:"霍", duke:"杜", uchicago:"芝", glasgow:"格" };
  return map[id] || id.slice(0, 1).toUpperCase();
}
function schoolById(id) { return SCHOOLS.find(s => s.id === id); }

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
function renderCards(filter) {
  const grid = $("#cards");
  if (!grid) return;
  const list = filter === "all" ? SCHOOLS : SCHOOLS.filter(s => s.region === filter);
  grid.innerHTML = list.map((s, i) => `
    <a class="card reveal" style="transition-delay:${(i % 3) * 0.07}s" href="school.html?id=${s.id}">
      <div class="region">${s.country} · ${s.state.split(" · ")[0]}</div>
      <div class="c-name">${s.name}</div>
      <div class="c-tagline">「${s.tagline}」</div>
      <div class="c-line">${s.mainLine}</div>
      <div class="c-foot"><span>旗舰 <b>${s.flagship.name.split("/")[0].trim()}</b></span><span class="arrow">→</span></div>
    </a>`).join("");
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
      <div class="schools">${t.schools.map(id =>
        `<div class="chip-s${activeIds && activeIds.includes(id) ? " hot" : ""}" title="${schoolById(id).name}">${schoolShort(id)}</div>`
      ).join("")}</div>
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
  const aTrendTitles = a.trends.map(t => t.title);
  const bTrendTitles = b.trends.map(t => t.title);
  const row = (label, va, vb, head) => `
    <div class="vs-row${head ? " vs-head" : ""}">
      <div class="vs-cell">${va}</div>
      <div class="vs-label">${label}</div>
      <div class="vs-cell">${vb}</div>
    </div>`;
  const matchRows = (ids) => ids.map(id => {
    const t = TRENDS.find(x => x.id === id);
    return t ? `<span class="match">● ${t.title}</span>` : "";
  }).join("<br>") || "—";
  const common = TRENDS.filter(t => t.schools.includes(a.id) && t.schools.includes(b.id)).map(t => t.id);
  panel.innerHTML =
    row("对比维度",
      `${a.name}<span>${a.nameEn.toUpperCase()} · ${a.founded}</span>`,
      `${b.name}<span>${b.nameEn.toUpperCase()} · ${b.founded}</span>`, true) +
    row("一句话主线", `<b>「${a.tagline}」</b>${a.mainLine}`, `<b>「${b.tagline}」</b>${b.mainLine}`) +
    row("旗舰项目", `<b>${a.flagship.name}</b><br>${a.flagship.note}`, `<b>${b.flagship.name}</b><br>${b.flagship.note}`) +
    row("学习空间", a.learningSpaces, b.learningSpaces) +
    row("趋势交集", matchRows(common), matchRows(common)) +
    row("独有判断", a.trends[0].title + "——" + a.trends[0].note, b.trends[0].title + "——" + b.trends[0].note);
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
  bindCompare();
  renderTrendMap(null);
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
  document.title = `${s.name} · 世界高校图书馆研究`;
  const crumb = $("#crumb-name");
  if (crumb) crumb.textContent = s.name;
  $("#d-title").textContent = s.name;
  $("#d-en").textContent = `${s.nameEn.toUpperCase()} · 建校 ${s.founded}`;
  $("#d-tagline").textContent = `「${s.tagline}」`;
  $("#d-mainline").textContent = s.mainLine;
  $("#d-chips").innerHTML = `
    <span class="m-chip">${s.country} · ${s.state}</span>
    <span class="m-chip">报告编号 <b>${s.reportId}</b></span>
    <span class="m-chip">研究日期 <b>${s.reportDate}</b></span>`;
  $("#d-flagship").innerHTML = `
    <div class="f-tag">旗舰项目</div>
    <div class="f-name">${s.flagship.name}</div>
    <div class="f-note">${s.flagship.note}</div>`;
  $("#d-overview-intro").innerHTML = `<b>系统概况。</b>${s.overview.intro}`;
  $("#d-stats").innerHTML = s.overview.stats.map(st =>
    `<div class="stat-card reveal"><div class="k">${st.k}</div><div class="v">${st.v}</div><div class="s">${st.s}</div></div>`).join("");
  $("#d-projects").innerHTML = s.projects.map(p => `
    <div class="proj reveal">
      <div class="p-kicker">${p.year}</div>
      <h3>${p.name}</h3>
      <div class="p-en">${p.nameEn}</div>
      ${p.stats && p.stats.length ? `<div class="p-stats">${p.stats.map(st => `<div class="p-stat"><div class="k">${st.k}</div><div class="v">${st.v}</div></div>`).join("")}</div>` : ""}
      <div class="p-facts">${p.facts}</div>
      <div class="p-insight"><b>判断 · 启示</b>　${p.insight}</div>
    </div>`).join("");
  $("#d-learning").innerHTML = `<b>学习空间与配置。</b>${s.learningSpaces}`;
  $("#d-service").innerHTML = `<b>服务模式与运营。</b>${s.serviceModel}`;
  $("#d-trends").innerHTML = s.trends.map(t => `
    <div class="trend-item">
      <span class="t-badge ${t.type}">${t.type === "fact" ? "事实" : "判断"}</span>
      <div class="t-body"><b>${t.title}</b><p>${t.note}</p></div>
    </div>`).join("");
  $("#d-insights").innerHTML = s.business.map(b => `<li>${b}</li>`).join("");
  $("#d-limits").innerHTML = s.limits.map(l => `<li>${l}</li>`).join("");
  $("#d-sources").innerHTML = s.sources.map(src => `
    <li><a href="https://${src.url}" target="_blank" rel="noopener">${src.label}</a><span class="s-url">${src.url}</span></li>`).join("");
  // 上一所 / 下一所
  const idx = SCHOOLS.indexOf(s);
  const prev = SCHOOLS[(idx - 1 + SCHOOLS.length) % SCHOOLS.length];
  const next = SCHOOLS[(idx + 1) % SCHOOLS.length];
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
  $("#t-summary").textContent = t.summary;
  $("#t-count").textContent = `${t.schools.length} 所学校独立验证了这一趋势`;
  $("#t-chips").innerHTML = t.schools.map(id2 =>
    `<a class="m-chip" href="school.html?id=${id2}"><b>${schoolById(id2).name}</b></a>`).join("");
  $("#t-evidence").innerHTML = t.schools.map((sid, i) => {
    const sc = schoolById(sid);
    return `<div class="evidence reveal" style="transition-delay:${i * 0.06}s">
      <div class="e-school">${sc.name}<span>${sc.state}</span></div>
      <p>${t.evidence[sid]}</p>
      <p style="margin-top:10px"><a href="school.html?id=${sid}">查看 ${sc.name} 完整研究 →</a></p>
    </div>`;
  }).join("");
  bindReveals();
}

document.addEventListener("DOMContentLoaded", () => {
  if ($("#cards")) initIndex();
  if ($("#d-title")) initSchool();
  if ($("#t-title")) initTrend();
});
