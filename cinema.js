/* ————————————————————————————————————————————————————————————
   SİNEMATİK YOLCULUK — Osmanlı zaman çizelgesinde sinematik gezinti
   Kaynak: data.js / data_ek.js  (SULTANS, ERAS, ERA_INTRO, foto())
   Kural: gölge yok; derinlik dönem-rengi tint + hairline border ile.
   Ana müzik: osmanli_backgorund_music.mp4
———————————————————————————————————————————————————————————— */
(function () {
  "use strict";

  const MUSIC_SRC = "osmanli_backgorund_music.mp4";
  const AUTOPLAY_MS = 11000;   // otomatik oynatmada slayt süresi

  // ——— Yolculuk listesi: kronolojik padişahlar + dönem kapıları ———
  function buildJourney() {
    const items = [];
    let sonEra = null;
    SULTANS.forEach(s => {
      if (s.id && s.id.indexOf("test_") === 0) return;                        // salt quiz düğümleri
      if (s.no === null && !s.araDonem && s.era !== "cumhuriyet") return;     // sadece padişah/ara dönem/cumhuriyet
      if (s.era !== sonEra) {
        items.push({ type: "gate", era: s.era });     // döneme giriş kapısı
        sonEra = s.era;
      }
      items.push({ type: "sultan", s });
    });
    return items;
  }

  const JOURNEY = buildJourney();

  let idx = 0;
  let autoplay = false;
  let autoTimer = null;
  let audioEl = null;
  let root = null;
  let opened = false;

  // ——— Yardımcılar ———
  const yilBas = s => (String(s.yil).match(/\d{4}/) || [""])[0];

  function kilitAnlar(s) {
    const out = [];
    if (s.savaslar && s.savaslar[0]) {
      const ev = s.savaslar[0];
      out.push({ lbl: ev.yil, ad: ev.ad, txt: ev.onem || ev.sonuc || "" });
    }
    if (s.teskilat && s.teskilat[0]) {
      out.push({ lbl: "Yenilik", ad: "", txt: s.teskilat[0] });
    }
    return out.slice(0, 2);
  }

  // ——— DOM kurulum ———
  function ensureRoot() {
    if (root) return root;
    root = document.createElement("div");
    root.className = "cinema";
    root.id = "cinema";
    root.hidden = true;
    root.innerHTML = `
      <div class="cin-ambient" id="cin-ambient"></div>
      <div class="cin-grain"></div>

      <div class="cin-topbar">
        <div class="cin-era" id="cin-era"></div>
        <button class="cin-close" id="cin-close">✕ Çıkış</button>
      </div>

      <button class="cin-nav prev" id="cin-prev" aria-label="önceki">‹</button>
      <div class="cin-stage" id="cin-stage"></div>
      <button class="cin-nav next" id="cin-next" aria-label="sonraki">›</button>

      <div class="cin-bottom">
        <div class="cin-controls">
          <button class="cin-btn" id="cin-music" title="Müzik aç/kapa">♪ Müzik</button>
          <button class="cin-btn" id="cin-auto" title="Otomatik oynat">▶ Oto</button>
          <span class="cin-pos" id="cin-pos"></span>
        </div>
        <div class="cin-rail" id="cin-rail"></div>
      </div>`;
    document.body.appendChild(root);

    root.querySelector("#cin-close").addEventListener("click", closeCinema);
    root.querySelector("#cin-prev").addEventListener("click", () => { stopAuto(); go(idx - 1); });
    root.querySelector("#cin-next").addEventListener("click", () => { stopAuto(); go(idx + 1); });
    root.querySelector("#cin-music").addEventListener("click", toggleMusic);
    root.querySelector("#cin-auto").addEventListener("click", toggleAuto);

    buildRail();
    return root;
  }

  function buildRail() {
    const rail = root.querySelector("#cin-rail");
    // dönem segmentleri
    const segs = {};
    JOURNEY.forEach((it, i) => {
      const era = it.type === "gate" ? it.era : it.s.era;
      (segs[era] = segs[era] || []).push(i);
    });
    let html = "";
    Object.keys(segs).forEach(era => {
      const e = ERAS[era];
      const list = segs[era];
      html += `<button class="cin-seg" data-i="${list[0]}" style="--era:${e.renk}"
                 title="${e.ad} · ${e.yil}"><span></span><b>${e.ad.replace(/ Dönemi.*/,"").replace(/ &.*/,"")}</b></button>`;
    });
    rail.innerHTML = html;
    rail.querySelectorAll(".cin-seg").forEach(b =>
      b.addEventListener("click", () => { stopAuto(); go(+b.dataset.i); }));
  }

  // ——— Slayt üretimi ———
  function gateSlide(it) {
    const e = ERAS[it.era];
    const intro = (typeof ERA_INTRO !== "undefined" && ERA_INTRO[it.era]) || "";
    return `
      <div class="cin-slide gate" style="--era:${e.renk}">
        <div class="cin-gate-kicker">Zaman kapısı</div>
        <div class="cin-gate-name">${e.ad}</div>
        <div class="cin-gate-yr">${e.yil}</div>
        ${intro ? `<p class="cin-gate-intro">${intro}</p>` : ""}
        <div class="cin-gate-hint">Döneme giriliyor —  ilerlemek için  ›</div>
      </div>`;
  }

  function sultanSlide(it) {
    const s = it.s;
    const e = ERAS[s.era];
    const img = foto(s);
    const bas = yilBas(s);
    const lakap = s.lakap ? `<span class="cin-lakap">“${s.lakap}”</span>` : "";
    const no = s.no !== null ? `${s.no}. Padişah` : (s.araDonem ? "Ara Dönem" : "Dönem · Konu");
    const anlar = kilitAnlar(s);

    const portre = img
      ? `<div class="cin-portre-wrap"><img class="cin-portre" src="${img}" alt="${s.ad}"
            onerror="this.closest('.cin-portre-wrap').classList.add('noimg')"></div>`
      : `<div class="cin-portre-wrap noimg"><span class="cin-seal">۩</span></div>`;

    return `
      <div class="cin-slide sultan" style="--era:${e.renk}">
        <div class="cin-portre-col">${portre}</div>
        <div class="cin-info-col">
          <div class="cin-era-tag"><span class="cin-dot"></span>${e.ad} · ${no}</div>
          <div class="cin-year"><span class="cin-count" data-to="${bas}">${bas}</span></div>
          <h2 class="cin-name">${s.ad}${lakap}</h2>
          ${s.baslik ? `<div class="cin-baslik">${s.baslik}</div>` : ""}
          ${s.ruh ? `<p class="cin-ruh">${s.ruh}</p>` : ""}
          ${anlar.length ? `<div class="cin-moments">${anlar.map(a => `
            <div class="cin-moment">
              <div class="cin-moment-lbl">${a.lbl}</div>
              <div class="cin-moment-txt">${a.ad ? `<b>${a.ad}.</b> ` : ""}${a.txt}</div>
            </div>`).join("")}</div>` : ""}
        </div>
      </div>`;
  }

  function render() {
    const it = JOURNEY[idx];
    const era = it.type === "gate" ? it.era : it.s.era;
    const e = ERAS[era];

    // ambient + dönem etiketi
    root.querySelector("#cin-ambient").style.setProperty("--era", e.renk);
    root.querySelector("#cin-era").innerHTML =
      `<span class="cin-era-pill" style="--era:${e.renk}">${e.ad}</span><span class="cin-era-yr">${e.yil}</span>`;

    const stage = root.querySelector("#cin-stage");
    stage.innerHTML = it.type === "gate" ? gateSlide(it) : sultanSlide(it);

    // yıl sayacı
    const cnt = stage.querySelector(".cin-count");
    if (cnt) countUp(cnt);

    // konum + ray
    root.querySelector("#cin-pos").textContent = `${idx + 1} / ${JOURNEY.length}`;
    root.querySelectorAll(".cin-seg").forEach(b => {
      const bi = +b.dataset.i;
      b.classList.toggle("active", era === (JOURNEY[bi].era || (JOURNEY[bi].s && JOURNEY[bi].s.era)));
    });
    root.querySelector("#cin-prev").disabled = idx === 0;
    root.querySelector("#cin-next").disabled = idx === JOURNEY.length - 1;
  }

  function go(n) {
    idx = Math.max(0, Math.min(JOURNEY.length - 1, n));
    render();
    if (autoplay && idx === JOURNEY.length - 1) stopAuto();
  }

  function countUp(el) {
    const to = parseInt(el.dataset.to, 10);
    if (!to) return;
    const from = Math.max(0, to - 40);
    const dur = 1100, t0 = performance.now();
    (function tick(t) {
      const p = Math.min(1, (t - t0) / dur);
      const ease = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(from + (to - from) * ease);
      if (p < 1) requestAnimationFrame(tick); else el.textContent = to;
    })(performance.now());
  }

  // ——— Müzik (ana uygulama + sinema ortak tek ses) ———
  function getAudio() {
    if (audioEl) return audioEl;
    audioEl = document.createElement("video");
    audioEl.id = "bgm-audio";
    audioEl.loop = true; audioEl.playsInline = true; audioEl.preload = "auto";
    audioEl.style.cssText = "position:fixed;width:2px;height:2px;opacity:0;pointer-events:none;left:-10px;top:-10px;";
    const src = document.createElement("source");
    src.src = MUSIC_SRC; src.type = "video/mp4";
    audioEl.appendChild(src);
    audioEl.volume = 0.55;
    document.body.appendChild(audioEl);
    audioEl.addEventListener("play", syncMusicUI);
    audioEl.addEventListener("pause", syncMusicUI);
    return audioEl;
  }
  function startMusic() {
    getAudio();
    const p = audioEl.play();
    if (p && p.catch) p.catch(() => {/* otomatik oynatma engellenebilir; buton jesti çözer */});
    syncMusicUI();
  }
  function toggleMusic() {
    getAudio();
    if (audioEl.paused) startMusic();
    else audioEl.pause();
  }
  function syncMusicUI() {
    const on = !!(audioEl && !audioEl.paused);
    const hud = document.getElementById("music-toggle");
    if (hud) {
      hud.classList.toggle("on", on);
      const ic = hud.querySelector(".mt-ico");
      if (ic) ic.textContent = on ? "🔊" : "🔇";
    }
    if (root) {
      const b = root.querySelector("#cin-music");
      if (b) { b.classList.toggle("on", on); b.textContent = on ? "♪ Müzik ▮▮" : "♪ Müzik ▶"; }
    }
  }

  // ——— Otomatik oynatma ———
  function toggleAuto() { autoplay ? stopAuto() : startAuto(); }
  function startAuto() {
    autoplay = true;
    root.querySelector("#cin-auto").classList.add("on");
    root.querySelector("#cin-auto").textContent = "▮▮ Oto";
    clearInterval(autoTimer);
    autoTimer = setInterval(() => {
      if (idx >= JOURNEY.length - 1) { stopAuto(); return; }
      go(idx + 1);
    }, AUTOPLAY_MS);
  }
  function stopAuto() {
    autoplay = false;
    clearInterval(autoTimer);
    if (root) {
      const b = root.querySelector("#cin-auto");
      b.classList.remove("on");
      b.textContent = "▶ Oto";
    }
  }

  // ——— Aç / kapa ———
  function keyHandler(ev) {
    if (!opened) return;
    if (ev.key === "ArrowRight") { stopAuto(); go(idx + 1); }
    else if (ev.key === "ArrowLeft") { stopAuto(); go(idx - 1); }
    else if (ev.key === "Escape") closeCinema();
  }

  function openCinema() {
    ensureRoot();
    opened = true;
    root.hidden = false;
    document.body.classList.add("cinema-on");
    requestAnimationFrame(() => root.classList.add("show"));
    // seçili padişahtan başla (varsa)
    if (typeof seciliId !== "undefined" && seciliId) {
      const found = JOURNEY.findIndex(it => it.type === "sultan" && it.s.id === seciliId);
      idx = found >= 0 ? found : 0;
    } else idx = 0;
    render();
    startMusic();
    startAuto();
    document.addEventListener("keydown", keyHandler);
  }

  function closeCinema() {
    opened = false;
    stopAuto();
    // müzik global arka plan olduğu için çıkışta durdurulmaz (HUD 🔊 ile kapatılır)
    root.classList.remove("show");
    document.body.classList.remove("cinema-on");
    document.removeEventListener("keydown", keyHandler);
    setTimeout(() => { if (!opened) root.hidden = true; }, 400);
  }

  // ——— Başlat ———
  const openBtn = document.getElementById("cinema-open");
  if (openBtn) openBtn.addEventListener("click", openCinema);

  // HUD global müzik düğmesi (ana uygulamada da arka plan müziği)
  const musicBtn = document.getElementById("music-toggle");
  if (musicBtn) musicBtn.addEventListener("click", toggleMusic);
})();
