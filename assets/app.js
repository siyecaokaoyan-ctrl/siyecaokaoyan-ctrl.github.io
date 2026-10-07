/* 世界高校图书馆研究 · 共享脚本 */
"use strict";

/* ── 通用工具 ── */
const $ = (s, el) => (el || document).querySelector(s);
const $$ = (s, el) => Array.from((el || document).querySelectorAll(s));

function schoolShort(id) {
  const map = { harvard:"哈", mit:"M", stanford:"斯", princeton:"普", yale:"耶", jhu:"霍", duke:"杜", uchicago:"芝", glasgow:"格", edinburgh:"爱", manchester:"曼", kcl:"王", ucl:"伦", psl:"巴", epfl:"洛", upenn:"宾", columbia:"哥", cornell:"康", oxford:"牛", cambridge:"剑", ethz:"苏", imperial:"帝" };
  return map[id] || id.slice(0, 1).toUpperCase();
}
function schoolById(id) { return SCHOOLS.find(s => s.id === id); }

/* ── 图片画廊：页面内缩略图并排，点击打开大图灯箱 ── */
function galleryHtml(items) {
  if (!items) return "";
  const arr = (Array.isArray(items) ? items : [items]).filter(Boolean);
  if (!arr.length) return "";
  const norm = arr.map(it => typeof it === "string" ? { src: it, cap: "" } : { src: it.src || it.img || "", cap: it.cap || it.imgCap || "" });
  const thumbs = norm.map((o, i) => `<button class="gal-th" type="button" data-i="${i}" aria-label="查看第${i + 1}张"><img src="assets/photos/${esc(o.src)}" alt="" loading="lazy"></button>`).join("");
  const caps = norm.map((o, i) => `<p class="gal-cap${i === 0 ? " on" : ""}" data-i="${i}">${esc(o.cap)}</p>`).join("");
  return `<div class="gal" data-gal>
    <div class="gal-thumbs">${thumbs}${norm.length > 1 ? `<span class="gal-n">共 ${norm.length} 张 · 点击看大图</span>` : ""}</div>
    <div class="gal-caps">${caps}</div>
  </div>`;
}

/* ── 灯箱：大图 + 说明 + 左右切换 + 键盘支持 ── */
let _lb = null, _lbItems = [], _lbIdx = 0;
function lightbox() {
  if (_lb) return _lb;
  _lb = document.createElement("div");
  _lb.className = "lb";
  _lb.innerHTML = `<button class="lb-x" type="button" aria-label="关闭">✕</button>
    <button class="lb-arrow prev" type="button" aria-label="上一张">‹</button>
    <img alt="">
    <button class="lb-arrow next" type="button" aria-label="下一张">›</button>
    <div class="lb-count"></div><div class="lb-cap"></div>`;
  document.body.appendChild(_lb);
  _lb.addEventListener("click", e => {
    if (e.target === _lb || e.target.closest(".lb-x")) closeLb();
    else if (e.target.closest(".lb-arrow.prev")) showLb((_lbIdx - 1 + _lbItems.length) % _lbItems.length);
    else if (e.target.closest(".lb-arrow.next")) showLb((_lbIdx + 1) % _lbItems.length);
  });
  document.addEventListener("keydown", e => {
    if (!_lb || !_lb.classList.contains("open")) return;
    if (e.key === "Escape") closeLb();
    else if (e.key === "ArrowLeft") showLb((_lbIdx - 1 + _lbItems.length) % _lbItems.length);
    else if (e.key === "ArrowRight") showLb((_lbIdx + 1) % _lbItems.length);
  });
  return _lb;
}
function showLb(i) {
  const o = _lbItems[i]; if (!o) return;
  _lbIdx = i;
  const box = lightbox();
  const img = box.querySelector("img");
  img.src = "assets/photos/" + o.src;
  box.querySelector(".lb-cap").textContent = o.cap || "";
  box.querySelector(".lb-count").textContent = `${i + 1} / ${_lbItems.length}`;
  box.querySelectorAll(".lb-arrow").forEach(a => a.style.display = _lbItems.length > 1 ? "" : "none");
  box.classList.add("open");
}
function closeLb() { if (_lb) _lb.classList.remove("open"); }

document.addEventListener("click", e => {
  const th = e.target.closest(".gal-th");
  if (!th) return;
  const gal = th.closest("[data-gal]");
  _lbItems = $$(".gal-th img", gal).map((img, i) => ({
    src: img.getAttribute("src").replace("assets/photos/", ""),
    cap: (($(".gal-cap[data-i=\"" + i + "\"]", gal) || {}).textContent || "")
  }));
  // 缩略图下方说明同步高亮
  $$(".gal-cap", gal).forEach(c => c.classList.toggle("on", +c.dataset.i === +th.dataset.i));
  showLb(+th.dataset.i);
});

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
  columbia: { accent: "#0038A8", soft: "#eef2fa" },
  cornell:  { accent: "#B31B1B", soft: "#f9ecec" },
  oxford:   { accent: "#002147", soft: "#e9eef4" },
  cambridge:{ accent: "#A3C1AD", soft: "#eef4f0" },
  ethz:     { accent: "#1F407A", soft: "#e9eef4" },
  imperial: { accent: "#002E5E", soft: "#e9eef4" },
  edinburgh:{ accent: "#1B4B8F", soft: "#eaf0f8" },
  manchester:{ accent: "#660099", soft: "#f3e9f8" },
  kcl:      { accent: "#C8102E", soft: "#fdeef0" },
  ucl:      { accent: "#500778", soft: "#f1e8f9" },
  psl:      { accent: "#003A70", soft: "#e8eef5" },
  epfl:     { accent: "#C8102E", soft: "#fbe9ec" }
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

/* 关键数字自动加粗：金额/数量（带单位）与年份
   同时支持内联出处链接写法：[文字](https://url) —— 读到就能点 */
function hl(t) {
  const links = [];
  const raw = String(t).replace(/\[([^\]]{1,60})\]\((https?:\/\/[^)\s]{4,})\)/g, (m, label, url) => {
    links.push({ label, url });
    return "\u0007LINK\u0007";
  });
  const out = esc(raw).replace(
    /(\$?\d[\d,]*(?:\.\d+)?(?:\s*[万亿])?(?:\s*(?:(?:美)?元|册|卷|座|所|个|项|人次|平方英尺|英尺|%|倍))|(?:19|20)\d{2}(?:[–—-]\d{2,4})?年?)/g,
    "<b>$1</b>"
  );
  let n = 0;
  return out.replace(/\u0007LINK\u0007/g, () => {
    const l = links[n++];
    return `<a class="inl" href="${l.url}" target="_blank" rel="noopener">${l.label}<i>↗</i></a>`;
  });
}

/* 图片点击放大：详情页项目图 / 旗舰图 */
document.addEventListener("click", (e) => {
  const t = e.target;
  if (!(t instanceof HTMLImageElement)) return;
  if (!t.closest(".p-fig, .f-fig")) return;
  const ov = document.createElement("div");
  ov.style.cssText = "position:fixed;inset:0;z-index:999;background:rgba(12,12,14,.92);display:flex;align-items:center;justify-content:center;cursor:zoom-out;padding:30px;";
  const im = document.createElement("img");
  im.src = t.src;
  im.alt = "";
  im.style.cssText = "max-width:94vw;max-height:92vh;border-radius:14px;box-shadow:0 24px 90px rgba(0,0,0,.55);";
  ov.appendChild(im);
  ov.addEventListener("click", () => ov.remove());
  document.body.appendChild(ov);
});

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
const LOGO_EXT = { mit: "svg", edinburgh: "svg", manchester: "svg", kcl: "svg", ucl: "svg", psl: "svg", epfl: "svg" };
const logoSrc = id => `assets/logos/${id}.${LOGO_EXT[id] || "png"}`;
const logoImg = (id, cls) => `<img class="${cls}" src="${logoSrc(id)}" alt="" loading="lazy" onerror="this.style.display='none'">`;

/* 筛选状态：地区 + 主题 + 关键词，三者叠加 */
const cardFilter = { region: "all", topic: "all", q: "" };

function schoolMatches(s) {
  if (cardFilter.region !== "all" && s.region !== cardFilter.region) return false;
  if (cardFilter.topic !== "all") {
    const tr = TRENDS.find(x => x.id === cardFilter.topic);
    if (!tr || !tr.schools.includes(s.id)) return false;
  }
  if (cardFilter.q) {
    const q = cardFilter.q.toLowerCase();
    const hay = [s.name, s.nameEn, s.country, s.state, s.tagline, s.mainLine,
      s.flagship.name, s.flagship.note,
      ...s.projects.flatMap(p => [p.name, p.nameEn, p.facts]),
      ...s.trends.map(t => t.title + t.note)].join(" ").toLowerCase();
    if (!hay.includes(q)) return false;
  }
  return true;
}

function renderCards() {
  const grid = $("#cards");
  if (!grid) return;
  const picked = SCHOOLS.map((s, i) => ({ s, i })).filter(x => schoolMatches(x.s));
  $("#cards-empty").hidden = picked.length > 0;
  // 按地区分组：美洲 → 欧洲 → 亚太，组与组之间独占一行（区域标题跨整行）
  const REGION_ORDER = ["美洲", "欧洲", "亚太"];
  const byRegion = new Map();
  picked.forEach(x => {
    if (!byRegion.has(x.s.region)) byRegion.set(x.s.region, []);
    byRegion.get(x.s.region).push(x);
  });
  const regionNames = [...byRegion.keys()].sort((a, b) => {
    const ia = REGION_ORDER.indexOf(a), ib = REGION_ORDER.indexOf(b);
    return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
  });
  let n = 0;
  grid.innerHTML = regionNames.map(rg => {
    const items = byRegion.get(rg);
    const head = `<div class="region-head reveal"><span class="rh-name">${esc(rg)}</span><span class="rh-n">${items.length} 所</span></div>`;
    const cards = items.map(({ s, i }) => {
      const headStat = s.overview.stats[0];
      const delay = n % 3;
      n++;
      return `
    <a class="card reveal" style="transition-delay:${delay * 0.07}s" href="school.html?id=${s.id}">
      <div class="c-head">
        ${logoImg(s.id, "c-logo")}
        <div class="c-top">
          <div class="region">${esc(s.country)}</div>
          <div class="idx">${String(i + 1).padStart(2, "0")}</div>
        </div>
      </div>
      <div class="c-name">${esc(s.name)}</div>
      <div class="c-tags">
        <span>建校 ${s.founded}</span>
        ${headStat ? `<span>${esc(headStat.k)} ${esc(headStat.v)}</span>` : ""}
        <span>更新 ${esc(s.reportDate.slice(5))}</span>
      </div>
      <div class="c-tagline">${esc(s.tagline)}</div>
      <div class="c-line">${hl(s.mainLine)}</div>
      <div class="c-foot"><span class="c-like" data-like="${s.id}" title="为这所学校点赞">♡ <b class="like-n">–</b></span><span>旗舰 <b>${esc(s.flagship.name.split("（")[0].trim())}</b></span><span class="arrow">→</span></div>
    </a>`;
    }).join("");
    return head + cards;
  }).join("");
  bindReveals();
  loadLikesInto(grid);
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
    cardFilter.region = chip.dataset.region;
    renderCards();
  });
  // 主题筛选：选项来自趋势库标题，计数为该趋势已验证的学校数
  const tbox = $("#topic-filters");
  if (tbox) {
    tbox.innerHTML = [`<div class="f-chip on" data-topic="all">全部主题</div>`,
      ...TRENDS.map(t => `<div class="f-chip" data-topic="${t.id}">${esc(t.title)} ${t.schools.length}</div>`)
    ].join("");
    tbox.addEventListener("click", (e) => {
      const chip = e.target.closest(".f-chip");
      if (!chip) return;
      $$(".f-chip", tbox).forEach(c => c.classList.remove("on"));
      chip.classList.add("on");
      cardFilter.topic = chip.dataset.topic;
      renderCards();
    });
  }
  // 关键词搜索（防抖）
  const q = $("#q");
  if (q) {
    let timer = null;
    q.addEventListener("input", () => {
      clearTimeout(timer);
      timer = setTimeout(() => { cardFilter.q = q.value.trim(); renderCards(); }, 160);
    });
  }
  // 最近更新（按报告日期倒序取 3 所）
  const recent = $("#recent");
  if (recent) {
    const latest = [...SCHOOLS].sort((a, b) => b.reportDate.localeCompare(a.reportDate)).slice(0, 3);
    recent.innerHTML = `<span class="tb-label">最近更新</span>` + latest.map(s =>
      `<a class="recent-link" href="school.html?id=${s.id}">${esc(s.name)} <i>${esc(s.reportDate.slice(5))}</i></a>`).join("");
  }
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
        return `<div class="chip-s" title="${schoolById(id).name}">${schoolShort(id)}</div>`;
      }).join("")}</div>
      <div class="count">${t.schools.length} 校共鸣</div>
    </a>`).join("");
  bindReveals();
}

/* ── 双校对比 ── */
/* 单元格：第一句作为加粗短结论，其余折入「展开细节」 */
function splitFirst(raw) {
  const i = String(raw).indexOf("。");
  if (i < 0 || i > 90) return { short: raw, more: "" };
  return { short: raw.slice(0, i + 1), more: raw.slice(i + 1) };
}
function vsRich(shortHtml, raw) {
  const { short, more } = splitFirst(raw);
  return `${shortHtml}<div class="vs-short">${hl(short)}</div>` +
    (more ? `<div class="vs-more" hidden>${hl(more)}</div><button class="vs-toggle" type="button">展开细节 ↓</button>` : "");
}

function renderCompare(aId, bId) {
  const panel = $("#vs-panel");
  const a = schoolById(aId), b = schoolById(bId);
  if (!a || !b || !panel) return;
  const ca = SCHOOL_COLORS[a.id] || { accent: "var(--accent)", soft: "var(--accent-soft)" };
  const cb = SCHOOL_COLORS[b.id] || { accent: "var(--accent)", soft: "var(--accent-soft)" };
  const row = (label, va, vb, head) => `
    <div class="vs-row${head ? " vs-head" : ""}">
      <div class="vs-cell"${head ? ` style="box-shadow:inset 0 3px 0 ${ca.accent};background:${ca.soft}"` : ""}>${va}</div>
      <div class="vs-label">${label}</div>
      <div class="vs-cell"${head ? ` style="box-shadow:inset 0 3px 0 ${cb.accent};background:${cb.soft}"` : ""}>${vb}</div>
    </div>`;
  // 趋势口径统一以趋势库（TRENDS）为准：交集/各自侧重都由 TRENDS.schools 推导，杜绝两个数字
  const trendLink = t => `<a href="trend.html?id=${t.id}">${esc(t.title)}</a>`;
  const matchRows = (arr) => arr.map(t => `<span class="match">● ${trendLink(t)}</span>`).join("<br>") || "—";
  const onlyCell = (school, arr) => arr.length
    ? arr.map(t => {
        const ev = (t.evidence && t.evidence[school.id]) || "";
        const { short } = splitFirst(ev);
        return `<div class="only-item"><span class="match only">○ ${trendLink(t)}</span>${short ? `<div class="vs-mini">${hl(short)}</div>` : ""}</div>`;
      }).join("") : "—";
  const common = TRENDS.filter(t => t.schools.includes(a.id) && t.schools.includes(b.id));
  const onlyA = TRENDS.filter(t => t.schools.includes(a.id) && !t.schools.includes(b.id));
  const onlyB = TRENDS.filter(t => t.schools.includes(b.id) && !t.schools.includes(a.id));
  panel.innerHTML =
    row("对比维度",
      `<div class="vs-id">${logoImg(a.id, "vs-logo")}<div><b style="color:${ca.accent}">${esc(a.name)}</b><span>${esc(a.nameEn.toUpperCase())} · ${a.founded}</span></div></div>`,
      `<div class="vs-id">${logoImg(b.id, "vs-logo")}<div><b style="color:${cb.accent}">${esc(b.name)}</b><span>${esc(b.nameEn.toUpperCase())} · ${b.founded}</span></div></div>`, true) +
    row("一句话主线", vsRich(`<b>「${esc(a.tagline)}」</b>`, a.mainLine), vsRich(`<b>「${esc(b.tagline)}」</b>`, b.mainLine)) +
    row("旗舰项目", vsRich(`<b>${esc(a.flagship.name)}</b>`, a.flagship.note), vsRich(`<b>${esc(b.flagship.name)}</b>`, b.flagship.note)) +
    row("学习空间", vsRich("", a.learningSpaces), vsRich("", b.learningSpaces)) +
    row("趋势交集（相同点）", matchRows(common), matchRows(common)) +
    row("各自侧重（对方未验证）", onlyCell(a, onlyA), onlyCell(b, onlyB)) +
    row("代表判断", vsRich(`<b>${esc(a.trends[0].title)}</b>`, a.trends[0].note), vsRich(`<b>${esc(b.trends[0].title)}</b>`, b.trends[0].note));
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
  const options = SCHOOLS.map(s => `<option value="${s.id}">${s.name} · ${s.country}</option>`).join("");
  selA.innerHTML = options; selB.innerHTML = options;
  const params = new URLSearchParams(location.search);
  const aId = params.get("a") || "harvard";
  const bId = params.get("b") || "uchicago";
  selA.value = schoolById(aId) ? aId : "harvard";
  selB.value = schoolById(bId) ? bId : "uchicago";
  const subA = $("#sel-a-sub"), subB = $("#sel-b-sub");
  const sync = () => {
    subA.textContent = schoolById(selA.value).country;
    subB.textContent = schoolById(selB.value).country;
  };
  sync();
  selA.addEventListener("change", () => { sync(); renderCompare(selA.value, selB.value); });
  selB.addEventListener("change", () => { sync(); renderCompare(selA.value, selB.value); });
  // 「展开细节」开关（事件委托，重渲染后仍然有效）
  const panel = $("#vs-panel");
  if (panel) panel.addEventListener("click", (e) => {
    const btn = e.target.closest(".vs-toggle");
    if (!btn) return;
    const more = btn.previousElementSibling;
    if (more && more.classList.contains("vs-more")) {
      more.hidden = !more.hidden;
      btn.textContent = more.hidden ? "展开细节 ↓" : "收起 ↑";
    }
  });
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
  // 图书馆官网直达按钮
  const libBox = $("#d-liburl");
  if (libBox) {
    const libUrl = (window.LIB_URLS || {})[s.id];
    libBox.innerHTML = libUrl
      ? `<a class="lib-btn" href="${esc(libUrl)}" target="_blank" rel="noopener">访问图书馆官网<span class="arr">↗</span></a>`
      : "";
  }
  // 点赞按钮
  const likeBox = $("#d-like");
  if (likeBox) {
    likeBox.innerHTML = `<button class="like-btn" type="button" data-like="${s.id}"><span class="lh">♡</span>为这所学校点赞<b class="like-n">–</b></button>`;
    loadLikesInto(likeBox);
  }
  // 锚点快导航
  const qn = $("#d-quicknav");
  if (qn) {
    qn.innerHTML = [
      ["#sec-overview", "系统概况"], ["#sec-projects", "重点项目"],
      ["#sec-spaces", "空间与服务"], ["#sec-trends", "趋势研判"],
      ["#sec-questions", "交流问题"], ["#sec-business", "业务启发"],
      ["#sec-brief", "团队摘要"], ["#sec-limits", "待验证限制"],
      ["#sec-readers", "读者来信"], ["#sec-sources", "来源"]
    ].map(([h, t]) => `<a href="${h}">${t}</a>`).join("");
  }
  $("#d-flagship").innerHTML = `
    <div class="f-tag">旗舰项目</div>
    <div class="f-name">${esc(s.flagship.name)}</div>
    <div class="f-note">${hl(s.flagship.note)}</div>
    ${galleryHtml(s.flagship.imgs || (s.flagship.img ? [{ src: s.flagship.img, cap: s.flagship.imgCap || "" }] : null))}`;
  $("#d-overview-intro").innerHTML = `<b>系统概况。</b>${hl(s.overview.intro)}`;
  $("#d-stats").innerHTML = s.overview.stats.map(st =>
    `<div class="stat-card reveal"><div class="k">${esc(st.k)}</div><div class="v">${esc(st.v)}</div><div class="s">${esc(st.s)}</div></div>`).join("");
  // 扩展内容（问题/摘要/案例问题与边界）：见 data/extras-data.js，缺省自动隐藏
  const ex = (typeof EXTRAS_DATA !== "undefined" && EXTRAS_DATA[s.id]) || {};
  $("#d-projects").innerHTML = s.projects.map(p => {
    const px = (ex.projects && ex.projects[p.name]) || {};
    const problem = p.problem || px.problem, boundary = p.boundary || px.boundary;
    return `
    <div class="proj reveal">
      <span class="p-kicker">${esc(p.year)}</span>
      <h3>${esc(p.name)}</h3>
      <div class="p-en">${esc(p.nameEn)}</div>
      ${p.stats && p.stats.length ? `<div class="p-stats">${p.stats.map(st => `<div class="p-stat"><div class="k">${esc(st.k)}</div><div class="v">${esc(st.v)}</div></div>`).join("")}</div>` : ""}
      ${problem ? `<div class="p-problem"><b>要解决的问题。</b>${hl(problem)}</div>` : ""}
      ${galleryHtml(p.imgs || (p.img ? [{ src: p.img, cap: p.imgCap || "" }] : null))}
      <div class="p-facts"><span class="p-badge fact">事实</span>${hl(p.facts)}</div>
      <div class="p-insight"><span class="p-badge judge">判断 · 启示</span>${hl(p.insight)}</div>
      ${boundary ? `<div class="p-boundary"><span class="p-badge bnd">边界 · 不宜照搬</span>${hl(boundary)}</div>` : ""}
    </div>`;
  }).join("");
  $("#d-learning").innerHTML = `<b>学习空间与配置。</b>${hl(s.learningSpaces)}`;
  $("#d-service").innerHTML = `<b>服务模式与运营。</b>${hl(s.serviceModel)}`;
  $("#d-trends").innerHTML = s.trends.map(t => {
    const tr = t.tid ? TRENDS.find(x => x.id === t.tid) : null;
    const verified = tr && tr.schools.includes(s.id);
    return `
    <div class="trend-item">
      <span class="t-badge ${t.type}">${t.type === "fact" ? "事实" : "判断"}</span>
      <div class="t-body"><b>${esc(t.title)}</b><p>${hl(t.note)}</p>
      ${verified ? `<a class="t-link" href="trend.html?id=${tr.id}">查看「${esc(tr.title)}」跨校共识 →</a>` : ""}</div>
    </div>`;
  }).join("");
  // 交流问题 / 团队分享摘要（见 extras-data.js，缺省自动隐藏板块）
  const qsec = $("#d-questions"), bsec = $("#d-brief");
  if (qsec) {
    if (ex.questions && ex.questions.length) {
      qsec.innerHTML = `<ol class="q-list">${ex.questions.map(q => `<li>${hl(q)}</li>`).join("")}</ol>`;
    } else { qsec.closest("section").style.display = "none"; }
  }
  if (bsec) {
    if (ex.brief) { bsec.innerHTML = `<div class="brief-body reveal">${hl(ex.brief)}</div>`; }
    else { bsec.closest("section").style.display = "none"; }
  }
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
  scheduleSmartFigures();
}

/* ── v8 智能图排：图片旁文字填不满图高时，图片自动改通栏居中 ── */
function smartFigures() {
  document.querySelectorAll(".proj, .flagship").forEach(box => {
    const fig = [...box.children].find(el => el.tagName === "FIGURE");
    if (!fig || fig.classList.contains("stacked")) return;
    const img = fig.querySelector("img");
    if (!img) return;
    const textH = [...box.children].filter(el => el !== fig)
      .reduce((sum, el) => sum + el.offsetHeight, 0);
    if (textH < fig.offsetHeight + 60) fig.classList.add("stacked");
  });
}
function scheduleSmartFigures() {
  const run = () => {
    // 等正文图片加载完再测量，避免高度不准
    const imgs = [...document.querySelectorAll(".p-fig img, .f-fig img")];
    Promise.all(imgs.map(i => i.complete ? 1 :
      new Promise(r => { i.onload = i.onerror = r; })))
      .then(() => setTimeout(smartFigures, 80));
  };
  if (document.readyState === "complete") run();
  else window.addEventListener("load", run);
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
      <div class="e-school">${sc.name}<span>${sc.country}</span></div>
      <p>${hl(t.evidence[sid])}</p>
      <p style="margin-top:12px"><a href="school.html?id=${sid}">查看 ${sc.name} 完整研究 →</a></p>
    </div>`;
  }).join("");
  bindReveals();
}

/* ── 点赞：Cloudflare Workers 计数接口；每人每校限一次，点赞记录存本地 ── */
const LIKE_API = "https://library-likes.pages.dev";   // Pages Functions 计数接口（国内可直连）

function likedSet() {
  try { return new Set(JSON.parse(localStorage.getItem("likedSchools") || "[]")); }
  catch { return new Set(); }
}
function markLiked(id) {
  const s = likedSet(); s.add(id);
  localStorage.setItem("likedSchools", JSON.stringify([...s]));
}
async function loadLikesInto(root) {
  if (!LIKE_API) return;
  const els = $$("[data-like]", root || document);
  if (!els.length) return;
  const liked = likedSet();
  els.forEach(el => { if (liked.has(el.dataset.like)) el.classList.add("liked"); });
  await Promise.all(els.map(async el => {
    try {
      const r = await fetch(`${LIKE_API}/api/likes/${el.dataset.like}`);
      const d = await r.json();
      const n = el.querySelector(".like-n");
      if (n) n.textContent = d.likes;
    } catch { /* 接口不可达时保留占位符 */ }
  }));
}
document.addEventListener("click", (e) => {
  const el = e.target.closest("[data-like]");
  if (!el) return;
  e.preventDefault(); e.stopPropagation();
  const id = el.dataset.like;
  if (likedSet().has(id) || !LIKE_API) return;
  markLiked(id);
  el.classList.add("liked");
  const nEl = el.querySelector(".like-n");
  const cur = parseInt(nEl.textContent, 10);
  if (!isNaN(cur)) nEl.textContent = cur + 1;
  fetch(`${LIKE_API}/api/likes/${id}`, { method: "POST" })
    .then(r => r.json()).then(d => { if (nEl) nEl.textContent = d.likes; })
    .catch(() => {});
});

document.addEventListener("DOMContentLoaded", () => {
  const sp = $("#stat-progress");
  if (sp && typeof SCHOOLS !== "undefined") sp.textContent = SCHOOLS.length;
  if ($("#cards")) initIndex();
  if ($("#d-title")) initSchool();
  if ($("#t-title")) initTrend();
});
