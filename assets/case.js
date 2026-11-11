/* ═══════════════════════════════════════════════════════════════
   案例板块渲染器 · case.html（详情）与 cases.html（列表）
   依赖 data/cases-data.js（window.CASES）；样式复用 style.css / v3.css
   ═══════════════════════════════════════════════════════════════ */
(function () {
  const $ = (s, el) => (el || document).querySelector(s);
  const $$ = (s, el) => Array.from((el || document).querySelectorAll(s));

  function esc(t) {
    return String(t == null ? "" : t)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  /* [文字](链接) → 可点击外链 */
  function hl(t) {
    const raw = String(t).replace(/\[([^\]]{1,60})\]\((https?:\/\/[^)\s]{4,})\)/g, (m, label, url) =>
      `<a href="${url}" target="_blank" rel="noopener">${label}</a>`);
    return raw;
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
    _lb.querySelector("img").src = "assets/photos/" + o.src;
    _lb.querySelector(".lb-cap").textContent = `${_lbIdx + 1} / ${_lbList.length}　${o.cap || ""}`;
    _lb.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closeLb() { if (_lb) { _lb.classList.remove("open"); document.body.style.overflow = ""; } }

  function galleryGroupHtml(g) {
    const thumbs = g.photos.map((p, i) =>
      `<button class="cg-th" type="button" data-g="${esc(g.group)}" data-i="${i}" aria-label="查看大图">
         <img src="assets/photos/${esc(p.src)}" alt="${esc(p.cap)}" loading="lazy">
       </button>`).join("");
    return `<div class="cg-group reveal">
      <h3>${esc(g.group)}<span class="cg-n">${g.photos.length} 张</span></h3>
      <div class="cg-grid">${thumbs}</div>
    </div>`;
  }

  /* ── 案例详情页 ── */
  function initCase() {
    const id = new URLSearchParams(location.search).get("id");
    const c = caseById(id) || (window.CASES || [])[0];
    if (!c) return;
    document.title = `${c.name} · 案例库 · 世界高校图书馆研究`;
    $("#c-crumb").textContent = c.name;
    $("#c-title").textContent = c.name;
    $("#c-en").textContent = `${c.nameEn.toUpperCase()} · ${c.year}`;
    $("#c-tagline").textContent = `「${c.tagline}」`;
    $("#c-mainline").innerHTML = hl(c.mainLine);
    $("#c-chips").innerHTML = `
      <span class="m-chip">${esc(c.location)}</span>
      <span class="m-chip">报告编号 <b>${esc(c.reportId)}</b></span>
      <span class="m-chip">研究日期 <b>${esc(c.reportDate)}</b></span>`;
    $("#c-links").innerHTML = c.links.map(l =>
      `<a class="lib-btn" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}<span class="arr">↗</span></a>`).join("");
    $("#c-roles").innerHTML = c.roles.map(r =>
      `<div class="role"><div class="rk">${esc(r.k)}</div><div class="rv">${esc(r.v)}</div></div>`).join("");

    $("#c-stats").innerHTML = c.stats.map(st =>
      `<div class="stat-card reveal"><div class="k">${esc(st.k)}</div><div class="v">${esc(st.v)}</div><div class="s">${esc(st.s)}</div></div>`).join("");

    $("#c-arch").innerHTML = `<p class="lead">${hl(c.arch.intro)}</p>
      <div class="quote-card reveal"><div class="qc-mark">「</div><p>${hl(c.arch.quote)}</p><div class="qc-by">—— ${esc(c.arch.quoteBy)}</div></div>`;

    $("#c-floors").innerHTML = `<table class="floor-table">
      <tr><th>楼层</th><th>定位</th><th>主要空间</th><th>亮点</th></tr>
      ${c.floors.map(f => `<tr><td><b>${esc(f.f)}</b></td><td>${esc(f.name)}</td><td>${esc(f.spaces)}</td><td class="gray">${esc(f.note)}</td></tr>`).join("")}
    </table>`;
    $("#c-services").innerHTML = `<ul class="dot-list">${c.services.map(s => `<li>${hl(s)}</li>`).join("")}</ul>`;

    $("#c-framework").innerHTML = c.scFramework.map(f =>
      `<div class="fw-card reveal"><b>${esc(f.t)}</b><p>${hl(f.d)}</p></div>`).join("");
    $("#c-products").innerHTML = `<table class="floor-table">
      <tr><th>空间</th><th>代表产品（投标方案摘录）</th></tr>
      ${c.scProducts.map(p => `<tr><td><b>${esc(p.area)}</b></td><td>${esc(p.items)}</td></tr>`).join("")}
    </table>`;
    $("#c-scnote").innerHTML = `<b>品牌矩阵与落地核对。</b>${hl(c.scNote)}`;
    $("#c-scquotes").innerHTML = c.scQuotes.map(q =>
      `<div class="quote-card reveal"><div class="qc-mark">「</div><p>${hl(q.t)}</p><div class="qc-by">—— ${esc(q.by)}</div></div>`).join("");

    /* 图库：全部照片汇入一个灯箱序列 */
    const all = [];
    $("#c-gallery").innerHTML = c.galleries.map(g => {
      g.photos.forEach(p => all.push({ src: p.src, cap: `${g.group} · ${p.cap}` }));
      return galleryGroupHtml(g);
    }).join("");
    ensureLb();
    $("#c-gallery").addEventListener("click", e => {
      const th = e.target.closest(".cg-th");
      if (!th) return;
      const gi = c.galleries.findIndex(g => g.group === th.dataset.g);
      let base = 0;
      for (let k = 0; k < gi; k++) base += c.galleries[k].photos.length;
      _lbList = all;
      showLb(base + parseInt(th.dataset.i, 10));
    });

    $("#c-media").innerHTML = `
      <h3>视频</h3><ul class="dot-list">${c.media.videos.map(v =>
        v.url ? `<li><a href="${esc(v.url)}" target="_blank" rel="noopener">${esc(v.label)}</a></li>` : `<li>${esc(v.label)}</li>`).join("")}</ul>
      <h3>文章</h3><ul class="dot-list">${c.media.articles.map(a =>
        `<li><a href="${esc(a.url)}" target="_blank" rel="noopener">${esc(a.label)}</a></li>`).join("")}</ul>`;

    $("#c-trends").innerHTML = c.trends.map(t => `
      <div class="trend-item">
        <span class="t-badge ${t.type}">${t.type === "fact" ? "事实" : "判断"}</span>
        <div class="t-body"><b>${esc(t.title)}</b><p>${hl(t.note)}</p></div>
      </div>`).join("");
    $("#c-business").innerHTML = c.business.map(b => `<li>${hl(b)}</li>`).join("");
    $("#c-limits").innerHTML = c.limits.map(l => `<li>${esc(l)}</li>`).join("");
    $("#c-sources").innerHTML = c.sources.map(s =>
      s.url ? `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a></li>` : `<li>${esc(s.label)}</li>`).join("");

    bindReveals();
  }

  /* ── 案例列表页 ── */
  function initCases() {
    const box = $("#case-cards");
    if (!box || !window.CASES) return;
    box.innerHTML = window.CASES.map(c => `
      <a class="case-card reveal" href="case.html?id=${c.id}">
        <div class="cc-img"><img src="assets/photos/${esc(c.galleries[0].photos[0].src)}" alt="" loading="lazy"></div>
        <div class="cc-body">
          <div class="cc-kicker">Steelcase 案例 · ${esc(c.year)}</div>
          <h3>${esc(c.name)}</h3>
          <div class="cc-tag">「${esc(c.tagline)}」</div>
          <p>${esc(c.mainLine.slice(0, 92))}…</p>
          <div class="cc-meta">${esc(c.location)} ｜ 家具 ${esc(c.stats[3].v)}</div>
        </div>
      </a>`).join("");
    const total = $("#case-total");
    if (total) total.textContent = window.CASES.length;
    bindReveals();
  }

  function bindReveals() {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    $$(".reveal").forEach(el => io.observe(el));
  }

  document.addEventListener("DOMContentLoaded", () => {
    if ($("#c-title")) initCase();
    if ($("#case-cards")) initCases();
  });
})();
