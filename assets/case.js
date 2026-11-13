/* ═══════════════════════════════════════════════════════════════
   案例渲染器 v3 · A+C 融合框架（档案 × 特稿）
   首屏 idx 条 / 粘性目录 / 档案表 / FIG 编号 / 内部视角开关
   ═══════════════════════════════════════════════════════════════ */
(function () {
  const PHOTO = "assets/photos/";
  const $ = (s, el) => (el || document).querySelector(s);
  const $$ = (s, el) => Array.from((el || document).querySelectorAll(s));

  function esc(t) {
    return String(t == null ? "" : t)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  function caseById(id) { return (window.CASES || []).find(c => c.id === id); }

  /* ── 灯箱 ── */
  let _lb = null, _lbList = [], _lbIdx = 0;
  function ensureLb() {
    if (_lb) return;
    _lb = document.createElement("div");
    _lb.className = "lb";
    _lb.innerHTML = `<button class="lb-x" type="button" aria-label="关闭">×</button>
      <button class="lb-prev" type="button" aria-label="上一张">‹</button>
      <img alt="">
      <button class="lb-next" type="button" aria-label="下一张">›</button>
      <div class="lb-cap"></div>`;
    document.body.appendChild(_lb);
    _lb.addEventListener("click", e => {
      if (e.target === _lb || e.target.classList.contains("lb-x")) closeLb();
      else if (e.target.classList.contains("lb-prev")) showLb(_lbIdx - 1);
      else if (e.target.classList.contains("lb-next")) showLb(_lbIdx + 1);
    });
    document.addEventListener("keydown", e => {
      if (!_lb.classList.contains("open")) return;
      if (e.key === "Escape") closeLb();
      if (e.key === "ArrowLeft") showLb(_lbIdx - 1);
      if (e.key === "ArrowRight") showLb(_lbIdx + 1);
    });
  }
  function showLb(i) {
    if (!_lbList.length) return;
    _lbIdx = (i + _lbList.length) % _lbList.length;
    const o = _lbList[_lbIdx];
    _lb.querySelector("img").src = PHOTO + o.src;
    _lb.querySelector(".lb-cap").textContent = `${_lbIdx + 1} / ${_lbList.length}　${o.cap || ""}`;
    _lb.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closeLb() { if (_lb) { _lb.classList.remove("open"); document.body.style.overflow = ""; } }

  /* ── FIG 编号 ── */
  let _fig = 0;
  const figNo = () => `FIG.${String(++_fig).padStart(2, "0")}`;

  /* ── 区块 ── */
  function blockHtml(b, prevType) {
    switch (b.type) {
      case "chapter":
        return `<section class="blk ch-sec" id="ch-${esc(b.no)}"><div class="wrap ch-grid">
          <div class="ch-l"><div class="ch-no">${esc(b.no)}</div><div class="ch-tag">${esc(b.tag)}</div></div>
          <div class="ch-r"><h2>${b.title}</h2>${b.sub ? `<p class="ch-sub">${esc(b.sub)}</p>` : ""}</div>
        </div></section>`;
      case "prose": {
        /* 首字下沉：仅当段首是「有体感的字」时启用（一/二/三等横画字会变成蓝条） */
        let lead = false;
        if (prevType === "chapter") {
          const t = String(b.html).replace(/<[^>]+>/g, "").trim();
          lead = t.length > 0 && !"一二三四五六七八九十「『（(《·—".includes(t[0]);
        }
        return `<section class="blk blk-prose"><div class="wrap"><div class="prose${lead ? " lead" : ""} reveal">${b.html}</div></div></section>`;
      }
      case "quote":
        return `<section class="blk blk-quote"><div class="wrap"><div class="pullq${b.big ? " big" : ""} reveal">
          <p>${esc(b.t)}</p><div class="pq-by">—— ${esc(b.by)}</div></div></div></section>`;
      case "photo":
        if (b.full) return `<section class="blk blk-photo-full"><figure class="band reveal" data-lb="${esc(b.src)}" data-cap="${esc(b.cap || "")}">
          <img src="${PHOTO}${esc(b.src)}" alt="" loading="lazy">
          ${b.cap ? `<figcaption class="band-cap"><div class="q">${esc(b.cap)}</div></figcaption>` : ""}</figure></section>`;
        return `<section class="blk blk-photo"><div class="wrap"><figure class="ph reveal" data-lb="${esc(b.src)}" data-cap="${esc(b.cap || "")}">
          <img src="${PHOTO}${esc(b.src)}" alt="" loading="lazy">
          ${b.cap ? `<figcaption class="fig-cap"><span class="fig-no">${figNo()}</span>${esc(b.cap)}</figcaption>` : ""}</figure></div></section>`;
      case "split":
        return `<section class="blk blk-split"><div class="wrap"><div class="sp${b.flip ? " flip" : ""}">
          <div class="sp-fig reveal">
            <figure data-lb="${esc(b.img)}" data-cap="${esc(b.cap || "")}"><img src="${PHOTO}${esc(b.img)}" alt="" loading="lazy"></figure>
            ${b.cap ? `<div class="fig-cap"><span class="fig-no">${figNo()}</span>${esc(b.cap)}</div>` : ""}
          </div>
          <div class="sp-t reveal">${b.html}</div>
        </div></div></section>`;
      case "stats":
        return `<section class="blk blk-stats"><div class="wrap"><div class="numline reveal">${b.items.map(it =>
          `<div><div class="n">${esc(it.v)}</div><div class="l">${esc(it.k)}${it.s ? `<span class="s">${esc(it.s)}</span>` : ""}</div></div>`).join("")}</div></div></section>`;
      case "cards":
        return `<section class="blk blk-cards"><div class="wrap"><div class="cd-grid">${b.items.map((c, i) =>
          `<div class="cd reveal" style="transition-delay:${i * 0.05}s"><div class="cd-t">${esc(c.t)}</div><p>${esc(c.d)}</p></div>`).join("")}</div></div></section>`;
      case "table":
        return `<section class="blk blk-table"><div class="wrap reveal"><table class="tb">
          <tr>${b.head.map(h => `<th>${esc(h)}</th>`).join("")}</tr>
          ${b.rows.map(r => `<tr>${r.map((c, i) => i === 0 ? `<td><b>${esc(c)}</b></td>` : `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}
        </table></div></section>`;
      case "voices":
        return `<section class="blk blk-voices"><div class="wrap-narrow">${b.items.map(v =>
          `<div class="vc reveal"><div class="pq-mark">「</div><p>${esc(v.t)}</p><div class="pq-by">—— ${esc(v.by)}</div></div>`).join("")}</div></section>`;
      case "links":
        return `<section class="blk blk-links"><div class="wrap-narrow reveal">
          ${b.title ? `<h3 class="lk-t">${esc(b.title)}</h3>` : ""}
          <div class="lk-rows">${b.items.map(l =>
            `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}<span class="lk-arr">↗</span></a>`).join("")}</div></div></section>`;
      case "note":
        return `<section class="blk blk-note"><div class="wrap-narrow reveal"><div class="nt">${b.html}</div></div></section>`;
      default:
        return "";
    }
  }

  /* ── 首屏 ── */
  function heroHtml(c) {
    const h = c.hero;
    return `<header class="cs-hero">
      <div class="hero-img"><img src="${PHOTO}${esc(h.img)}" alt=""></div>
      <div class="idx"><span>STEELCASE CASE LIBRARY</span><span class="r">№ ${esc(c.num || "001")} · ${esc((c.year || "").slice(0, 4))}</span></div>
      <div class="hero-in">
        <div class="kick reveal in">${esc(h.kicker)}</div>
        <h1 class="reveal in">${h.title}</h1>
        <p class="stand reveal in">${esc(h.standfirst)}</p>
      </div>
      <div class="cue reveal in">SCROLL ↓</div>
    </header>`;
  }

  /* ── 目录条 ── */
  function tocHtml(c) {
    const chapters = c.story.filter(b => b.type === "chapter");
    return `<div class="toc" id="toc">${chapters.map(ch =>
      `<a href="#ch-${esc(ch.no)}" data-ch="ch-${esc(ch.no)}"><b>${esc(ch.no)}</b>${esc(ch.tag)}</a>`).join("")}</div>`;
  }

  /* ── 档案表 ── */
  function factsHtml(c) {
    if (!c.facts || !c.facts.length) return "";
    return `<div class="facts">${c.facts.map(f =>
      `<div><div class="k">${esc(f.k)}</div><div class="v">${esc(f.v)}</div></div>`).join("")}</div>`;
  }

  /* ── 内部档案 ── */
  function internalHtml(c) {
    const it = c.internal;
    if (!it) return "";
    return `<section class="int-sec" id="internal-sec"><div class="wrap">
      <div class="in-banner"><span>INTERNAL ARCHIVE · 内部档案</span><span class="r">仅内部视角可见</span></div>
      ${it.business ? `<h3 class="in-h">对业务工作的启发</h3>
        <div class="in-cards">${it.business.map(x => `<div class="in-card"><div class="cd-t">${esc(x.t)}</div><p>${esc(x.d)}</p></div>`).join("")}</div>` : ""}
      ${it.sources ? `<h3 class="in-h">资料来源</h3><ul class="in-list">${it.sources.map(s => `<li>${esc(s)}</li>`).join("")}</ul>` : ""}
      ${it.todos ? `<h3 class="in-h">待验证清单</h3><ul class="in-list todo">${it.todos.map(s => `<li>${esc(s)}</li>`).join("")}</ul>` : ""}
      ${it.furnNote ? `<h3 class="in-h">家具清单说明</h3><div class="in-note">${esc(it.furnNote)}</div>` : ""}
    </div></section>`;
  }

  /* ── 内部视角开关 ── */
  function initInternalToggle(c) {
    if (!c.internal) return;
    const pill = document.createElement("button");
    pill.className = "in-toggle";
    pill.type = "button";
    pill.innerHTML = `<span class="dot"></span>内部视角`;
    document.body.appendChild(pill);
    const apply = on => {
      document.body.classList.toggle("internal", on);
      pill.classList.toggle("on", on);
      pill.innerHTML = `<span class="dot"></span>${on ? "内部视角 · 开" : "内部视角"}`;
      try { localStorage.setItem("lr-internal", on ? "1" : "0"); } catch (e) {}
      if (on) bindReveals();
    };
    /* URL ?internal=1 优先（内部直达链接），否则读本地记忆 */
    let on = new URLSearchParams(location.search).get("internal") === "1";
    if (!on) { try { on = localStorage.getItem("lr-internal") === "1"; } catch (e) {} }
    apply(on);
    pill.addEventListener("click", () => apply(!document.body.classList.contains("internal")));
  }

  /* ── 详情页 ── */
  function initCase() {
    const id = new URLSearchParams(location.search).get("id");
    const c = caseById(id) || (window.CASES || [])[0];
    if (!c) return;
    document.title = `${c.name} · 案例库 · 世界高校图书馆研究`;
    let html = heroHtml(c) + tocHtml(c) + factsHtml(c);
    _fig = 0;
    let prev = null;
    html += `<main id="story">${c.story.map(b => { const s = blockHtml(b, prev); prev = b.type; return s; }).join("")}</main>`;
    html += internalHtml(c);
    $("#cs-root").innerHTML = html;
    ensureLb();
    _lbList = $$("#cs-root [data-lb]").map(f => ({ src: f.dataset.lb, cap: f.dataset.cap || "" }));
    $("#cs-root").addEventListener("click", e => {
      const f = e.target.closest("[data-lb]");
      if (!f) return;
      const i = _lbList.findIndex(o => o.src === f.dataset.lb && o.cap === (f.dataset.cap || ""));
      showLb(i < 0 ? 0 : i);
    });
    /* 目录高亮 */
    const links = $$("#toc a");
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        links.forEach(l => l.classList.toggle("on", l.dataset.ch === e.target.id));
      });
    }, { rootMargin: "-30% 0px -60% 0px" });
    $$(".ch-sec").forEach(s => io.observe(s));
    initInternalToggle(c);
    bindReveals();
  }

  /* ── 列表页（正式站用）── */
  function initCases() {
    const box = $("#case-cards");
    if (!box || !window.CASES) return;
    box.innerHTML = window.CASES.map(c => `
      <a class="case-card reveal" href="case.html?id=${c.id}">
        <div class="cc-img"><img src="${PHOTO}${esc(c.hero.img)}" alt="" loading="lazy"></div>
        <div class="cc-body">
          <div class="cc-kicker">Steelcase 案例 · ${esc(c.year)} · № ${esc(c.num || "")}</div>
          <h3>${esc(c.name)}</h3>
          <div class="cc-tag">${esc(String(c.hero.title).replace(/<[^>]+>/g, ""))}</div>
          <div class="cc-meta">${esc(c.location)}</div>
        </div>
      </a>`).join("");
    const total = $("#case-total");
    if (total) total.textContent = window.CASES.length;
    bindReveals();
  }

  function bindReveals() {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.08 });
    $$(".reveal:not(.in)").forEach(el => io.observe(el));
  }

  document.addEventListener("DOMContentLoaded", () => {
    if ($("#cs-root")) initCase();
    if ($("#case-cards")) initCases();
  });
})();
