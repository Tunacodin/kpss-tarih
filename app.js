/* KPSS Tarih — uygulama mantığı + gamification */

const STORE_KEY = "kpss-tarih-v1";
const XP_LEARN = 50;    // padişah "öğrendim" XP
const XP_QUIZ  = 20;    // her doğru cevap XP
const XP_PER_LEVEL = 200;

const BADGES = [
  { id: "kurulus", ikon: "⚔", ad: "Kuruluş Uzmanı", kosul: s => eraLearned("kurulus", s) },
  { id: "yukselme", ikon: "☾", ad: "Yükselme Uzmanı", kosul: s => eraLearned("yukselme", s) },
  { id: "lvl5", ikon: "★", ad: "5. Seviye", kosul: s => level(s.xp) >= 5 },
  { id: "quiz10", ikon: "✎", ad: "10 Doğru", kosul: s => Object.keys(s.quiz).length >= 10 }
];

let state = load();
let seciliId = null;

function load() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return { xp: 0, ogrenilen: {}, quiz: {} };
}
function save() { try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) {} }

const level = xp => Math.floor(xp / XP_PER_LEVEL) + 1;
const fullList = () => SULTANS.filter(s => s.no !== null); // Fetret hariç sayım
function eraLearned(era, s) {
  const list = fullList().filter(x => x.era === era && x.status === "full");
  return list.length > 0 && list.every(x => s.ogrenilen[x.id]);
}

/* ————— Timeline render ————— */
function renderTimeline() {
  const el = document.getElementById("timeline");
  let html = "";

  // Padişahları dönemlerine göre grupla, her dönem kendi omurgalı track'ında
  const gruplar = {};
  const sira = [];
  SULTANS.forEach(s => {
    if (!gruplar[s.era]) { gruplar[s.era] = []; sira.push(s.era); }
    gruplar[s.era].push(s);
  });
  sira.forEach(era => {
    const e = ERAS[era];
    html += `<div class="era-head">
      <div class="era-name"><span class="era-dot" style="background:${e.renk}"></span>${e.ad}</div>
      <div class="era-year">${e.yil}</div>
    </div><div class="track">`;
    gruplar[era].forEach(s => { html += nodeHTML(s); });
    html += `</div>`;
  });

  el.innerHTML = html;
  el.querySelectorAll(".node").forEach(n => {
    n.addEventListener("click", () => sec(n.dataset.id));
  });
}

// Portre yolu: dosya adları padişah id'si ile aynı (padişahlar/<id>.jpg).
// Türkçe karakterli klasör adı için encodeURI ile güvenli hale getiriyoruz.
function foto(s) {
  if (s.foto) return encodeURI(s.foto);          // özel görsel yolu (ör. Atatürk dönemi)
  return s.araDonem ? null : "padisahlar/" + s.id + ".jpg";
}

// Serbest görsel bloğu (padişah olmayan/dönem düğümleri için metin+görsel bağlam).
function gorselHTML(s) {
  if (!s.gorseller || !s.gorseller.length) return "";
  return `<div class="section"><h3>🖼 Görseller</h3>` +
    s.gorseller.map(g => `
      <a class="harita-wrap" href="${g.src}" target="_blank" rel="noopener" title="Büyütmek için tıkla">
        <img src="${g.src}" alt="${g.cap}" loading="lazy" onerror="this.parentElement.style.display='none'">
        <span class="harita-cap"><b>${g.cap}</b>${g.not ? `<span class="harita-note">${g.not}</span>` : ""}</span>
      </a>`).join("") + `</div>`;
}

// Dönem haritaları.
// (1) Kuruluş için padişaha ÖZEL haritalar (dosya + etiket) — yıl bazlı seri bu
//     dönemi doğru göstermediği için (1359 boşluğu). (2) Diğerleri "Territorial
//     changes" serisinin dönem sonuna en yakın (≤) yılı; dosya adı haritalar/<id>.jpg.
const HARITA_OZEL = {
  osman1:   { file: "osman1.png",   cap: "Kuruluş sınırları" },
  orhan:    { file: "orhan.png",    cap: "Orhan Bey dönemi sınırları" },
  murad1:   { file: "murad1.png",   cap: "I. Murad dönemi (1361 → 1389)" },
  bayezid1: { file: "1.bayezid.webp", cap: "Yıldırım Bayezid dönemi" },
  mehmed1:  { file: "mehmed1.jpg",  cap: "I. Mehmed · Fetret sonrası (yaklaşık)" },
  murad2:   { file: "murad2.jpg",   cap: "Fetih öncesi sınırlar (~1451)" }
};
const HARITA_YIL = {
  fatih: 1481, bayezid2: 1481, selim1: 1520,
  suleyman1: 1566, selim2: 1566, murad3: 1566, mehmed3: 1566, ahmed1: 1566, mustafa1: 1566, osman2: 1566,
  murad4: 1639, ibrahim: 1639, mehmed4: 1683, suleyman2: 1683, ahmed2: 1683,
  mustafa2: 1699, ahmed3: 1718, mahmud1: 1739, osman3: 1739, mustafa3: 1774, abdulhamid1: 1783,
  selim3: 1801, mustafa4: 1801, mahmud2: 1830, abdulmecid: 1862, abdulaziz: 1862, murad5: 1862,
  abdulhamid2: 1882, mehmed5: 1913, mehmed6: 1920
};

function haritaHTML(s) {
  const oz = HARITA_OZEL[s.id];
  const yil = HARITA_YIL[s.id];
  if (!oz && !yil) return "";

  // saltanat yılları (s.yil: "1362 – 1389" ya da "1876")
  const yrs = (s.yil.match(/\d{4}/g) || []).map(Number);
  const rs = yrs[0], re = yrs[1] || yrs[0];

  let src, capMain, capNote;
  if (oz) {
    src = "haritalar/" + oz.file;
    capMain = oz.cap;
    capNote = s.yil;
  } else {
    src = "haritalar/" + s.id + ".jpg";
    const within = yil >= rs && yil <= re;
    capMain = yil + " sınırları";
    capNote = within ? s.yil : `dönemine en yakın · ${s.yil}`;
  }

  return `<div class="section harita-sec">
    <h3>🗺 ${s.ad} Dönemi Haritası</h3>
    <a class="harita-wrap" href="${src}" target="_blank" rel="noopener" title="Büyütmek için tıkla">
      <img src="${src}" alt="${s.ad} dönemi Osmanlı haritası" loading="lazy" onerror="this.parentElement.parentElement.style.display='none'">
      <span class="harita-cap"><b>${capMain}</b><span class="harita-note">${capNote}</span></span>
    </a>
  </div>`;
}

function nodeHTML(s) {
  const done = state.ogrenilen[s.id];
  const locked = s.status !== "full";
  const cls = ["node"];
  if (s.araDonem) cls.push("ara");
  if (locked && !s.araDonem) cls.push("locked");
  if (done) cls.push("done");
  if (s.id === seciliId) cls.push("active");

  const no = s.no !== null ? s.no : "•";
  const lakap = s.lakap ? `<span class="node-lakap">${s.lakap}</span>` : "";
  let flag = "";
  if (s.araDonem) flag = "ara dönem";
  else if (done) flag = "✓ öğrenildi";
  else if (locked) flag = "içerik yakında";
  else flag = "incele →";

  const img = foto(s);
  const ava = img
    ? `<img class="node-ava" src="${img}" alt="${s.ad}" loading="lazy" onerror="this.classList.add('noimg')">`
    : `<span class="node-ava noimg ara-ava">◷</span>`;

  return `<button class="node ${cls.join(" ")}" data-id="${s.id}">
    <span class="dot"></span>
    ${ava}
    <span class="node-main">
      <span class="node-top">
        <span class="node-no">${no}</span>
        <span class="node-name">${s.ad}</span>
        ${lakap}
      </span>
      <span class="node-bottom">
        <span class="node-year">${s.yil}</span>
        <span class="node-flag">${flag}</span>
      </span>
    </span>
  </button>`;
}

/* ————— Detay render ————— */
function sec(id) {
  seciliId = id;
  const s = SULTANS.find(x => x.id === id);
  renderDetail(s);
  // aktiflik güncelle
  document.querySelectorAll(".node").forEach(n => n.classList.toggle("active", n.dataset.id === id));
}

/* görünüm modu: 'klasik' | 'akis' | 'anim' */
let viewMode = (state && state.view) || "klasik";
let reelTimer = null;

const VIEWS = [
  { id: "klasik", ad: "Klasik" },
  { id: "akis",   ad: "Zaman Akışı" },
  { id: "anim",   ad: "Animasyon" }
];
function viewSwitchHTML() {
  return `<div class="view-switch">
    ${VIEWS.map(v => `<button class="vbtn ${v.id === viewMode ? "active" : ""}" data-view="${v.id}">${v.ad}</button>`).join("")}
  </div>`;
}

/* — paylaşılan içerik parçaları (tüm görünümler kullanır) — */
function eraIntroBlock(s, e) {
  const ilkFull = SULTANS.find(x => x.era === s.era && x.status === "full");
  if (!(ERA_INTRO[s.era] && ilkFull && ilkFull.id === s.id)) return "";
  return `<div class="section"><div class="callout">
       <div class="lbl">${e.ad} · Büyük Resim</div>
       <p>${ERA_INTRO[s.era]}</p>
     </div></div>`;
}
function savasCardsHTML(s) {
  if (!(s.savaslar && s.savaslar.length)) return "";
  const savasBaslik = s.savasBaslik || "⚔ Savaşlar &amp; Neden-Sonuç";
  return `<div class="section"><h3>${savasBaslik}</h3>` +
    s.savaslar.map(ev => `
      <div class="event">
        <div class="event-head"><span class="ad">${ev.ad}</span><span class="yil">${ev.yil}</span></div>
        <div class="event-body">
          ${row("Kime", ev.kime)}
          ${row("Sebep", ev.sebep)}
          ${row("Sonuç", ev.sonuc)}
          ${row("Önem", ev.onem, "onem")}
          ${ev.yerler ? row("Alınan yer", ev.yerler) : ""}
        </div>
      </div>`).join("") + `</div>`;
}
function teskilatListHTML(s) {
  return (s.teskilat && s.teskilat.length)
    ? `<div class="section"><h3>🏛 Teşkilatlanma &amp; Yenilikler</h3>
        <ul class="plain">${s.teskilat.map(t => `<li>${t}</li>`).join("")}</ul></div>` : "";
}
function osymBoxHTML(s) {
  return (s.osym && s.osym.length)
    ? `<div class="section"><h3>🔍 ÖSYM Köşesi</h3>
        <div class="osym-box">
          <div class="osym-head">ÖSYM bu dönemde neye bakar?</div>
          <ul class="plain">${s.osym.map(o => `<li>${o}</li>`).join("")}</ul>
        </div></div>` : "";
}

/* — 1) KLASİK: mevcut 2 sütun düzen — */
function classicBody(s, e) {
  return `<div class="d-body">
      <div class="d-col">
        <div class="section"><div class="ruh">${s.ruh}</div></div>
        ${eraIntroBlock(s, e)}
        ${savasCardsHTML(s)}
      </div>
      <div class="d-col">
        ${haritaHTML(s)}
        ${gorselHTML(s)}
        ${teskilatListHTML(s)}
        ${osymBoxHTML(s)}
      </div>
    </div>`;
}

/* — 2) ZAMAN AKIŞI: özet → savaş timelapse → adım adım yenilikler — */
function flowBody(s, e) {
  const savas = s.savaslar || [];
  const savasTL = savas.length ? `
    <div class="flow-block">
      <div class="flow-bhead"><h3>⚔ Savaş Akışı</h3><button class="flow-play">▶ Oynat</button></div>
      <ol class="tl">
        ${savas.map((ev, i) => `
          <li class="tl-item" style="--i:${i}">
            <span class="tl-dot"></span>
            <div class="tl-year">${ev.yil}</div>
            <div class="tl-card">
              <div class="tl-ad">${ev.ad}</div>
              <div class="tl-meta"><span>Kime</span>${ev.kime}</div>
              <div class="tl-meta"><span>Sebep</span>${ev.sebep}</div>
              <div class="tl-meta"><span>Sonuç</span>${ev.sonuc}</div>
              <div class="tl-onem">${ev.onem}</div>
            </div>
          </li>`).join("")}
      </ol>
    </div>` : "";
  const yeni = (s.teskilat && s.teskilat.length) ? `
    <div class="flow-block">
      <h3>🏛 Yenilikler — Adım Adım</h3>
      <div class="step-flow">
        ${s.teskilat.map((t, i) => `<div class="step"><span class="step-no">${i + 1}</span><p>${t}</p></div>`).join("")}
      </div>
    </div>` : "";
  return `<div class="flow-view">
    <div class="flow-hero">
      <div class="flow-lbl">Dönemin Ruhu</div>
      <p class="flow-quote">${s.ruh}</p>
    </div>
    ${eraIntroBlock(s, e)}
    ${savasTL}
    ${yeni}
    ${gorselHTML(s)}
    ${osymBoxHTML(s)}
  </div>`;
}

/* — 3) ANİMASYON: yıl sayacı + otomatik oynayan sefer şeridi + pop-in — */
function animBody(s, e) {
  const savas = s.savaslar || [];
  const startYear = (s.yil.match(/\d{4}/) || [""])[0];
  const reel = savas.length ? `
    <div class="reel reveal" style="--i:1">
      <div class="reel-head">
        <h3>⚔ Sefer Şeridi</h3>
        <div class="reel-ctrl">
          <button class="reel-prev" aria-label="önceki">‹</button>
          <span class="reel-count">1/${savas.length}</span>
          <button class="reel-play" aria-label="oynat/duraklat">⏸</button>
          <button class="reel-next" aria-label="sonraki">›</button>
        </div>
      </div>
      <div class="reel-stage">
        ${savas.map((ev, i) => `
          <div class="reel-slide ${i === 0 ? "active" : ""}" data-i="${i}">
            <div class="reel-year">${ev.yil}</div>
            <div class="reel-ad">${ev.ad}</div>
            <div class="reel-sonuc">${ev.sonuc}</div>
            <div class="reel-onem">${ev.onem}</div>
          </div>`).join("")}
      </div>
      <div class="reel-dots">
        ${savas.map((_, i) => `<button class="rdot ${i === 0 ? "on" : ""}" data-i="${i}"></button>`).join("")}
      </div>
    </div>` : "";
  const pops = (s.teskilat && s.teskilat.length) ? `
    <div class="anim-block reveal" style="--i:2">
      <h3>🏛 Yenilikler</h3>
      <div class="pop-grid">
        ${s.teskilat.map((t, i) => `<div class="pop" style="--i:${i}">${t}</div>`).join("")}
      </div>
    </div>` : "";
  return `<div class="anim-view">
    <div class="anim-hero reveal" style="--i:0">
      <div class="anim-year"><span class="count" data-to="${startYear}">${startYear}</span></div>
      <p class="anim-ruh">${s.ruh}</p>
    </div>
    ${reel}
    ${pops}
    <div class="reveal" style="--i:3">${osymBoxHTML(s)}</div>
  </div>`;
}

function renderDetail(s) {
  const el = document.getElementById("detail");
  const e = ERAS[s.era];
  if (reelTimer) { clearInterval(reelTimer); reelTimer = null; }

  // iskelet / ara dönem (görünüm seçici gösterilmez)
  if (s.status !== "full") {
    el.innerHTML = `<div class="detail-inner">
      ${headHTML(s, e, false)}
      <div class="d-body">
        <div class="d-col">
          ${s.ruh ? `<div class="section"><div class="ruh">${s.ruh}</div></div>` : ""}
          <div class="stub-note">
            <div class="big">İçerik yakında</div>
            <div>Bu dönemin ayrıntıları (savaşlar, teşkilat, ÖSYM köşesi, mini test) henüz eklenmedi.<br>
            Gemini kaynağı geldikçe <code>data.js</code> dosyasına eklenecek.</div>
          </div>
        </div>
        <div class="d-col">${haritaHTML(s)}</div>
      </div>
    </div>`;
    renderQuiz(s);
    el.scrollTop = 0;
    return;
  }

  const body = viewMode === "akis" ? flowBody(s, e)
             : viewMode === "anim" ? animBody(s, e)
             : classicBody(s, e);

  el.innerHTML = `<div class="detail-inner">
    ${headHTML(s, e, true)}
    ${viewSwitchHTML()}
    ${body}
  </div>`;

  // öğrendim düğmesi
  const lb = el.querySelector(".learn-btn");
  if (lb) lb.addEventListener("click", () => toggleLearn(s));

  // görünüm değiştirici
  el.querySelectorAll(".vbtn").forEach(b => {
    b.addEventListener("click", () => {
      if (b.dataset.view === viewMode) return;
      viewMode = b.dataset.view;
      state.view = viewMode; save();
      renderDetail(s);
    });
  });

  // görünüme özel etkileşimler
  if (viewMode === "akis") wireFlow(el);
  if (viewMode === "anim") wireAnim(el);

  // sağ panelde soruları oluştur
  renderQuiz(s);

  // yeni padişaha / görünüme geçince scroll'u sıfırla
  el.scrollTop = 0;
}

/* Zaman Akışı: "Oynat" ile savaşları sırayla vurgula */
function wireFlow(el) {
  const btn = el.querySelector(".flow-play");
  const items = [...el.querySelectorAll(".tl-item")];
  if (!btn || !items.length) return;
  btn.addEventListener("click", () => {
    btn.disabled = true;
    items.forEach(it => it.classList.remove("on"));
    items.forEach((it, i) => {
      setTimeout(() => {
        it.classList.add("on");
        it.scrollIntoView({ behavior: "smooth", block: "center" });
        if (i === items.length - 1) setTimeout(() => { btn.disabled = false; }, 500);
      }, i * 850);
    });
  });
}

/* Animasyon: yıl sayacı + otomatik oynayan sefer şeridi */
function wireAnim(el) {
  const cnt = el.querySelector(".count");
  if (cnt) animateCount(cnt);

  const reel = el.querySelector(".reel");
  if (!reel) return;
  const slides = [...reel.querySelectorAll(".reel-slide")];
  const dots = [...reel.querySelectorAll(".rdot")];
  const countEl = reel.querySelector(".reel-count");
  const playBtn = reel.querySelector(".reel-play");
  const n = slides.length;
  let cur = 0, playing = true;

  function show(i) {
    cur = (i + n) % n;
    slides.forEach((sl, k) => sl.classList.toggle("active", k === cur));
    dots.forEach((d, k) => d.classList.toggle("on", k === cur));
    if (countEl) countEl.textContent = (cur + 1) + "/" + n;
  }
  function start() { stop(); if (n > 1 && playing) reelTimer = setInterval(() => show(cur + 1), 4200); }
  function stop() { if (reelTimer) { clearInterval(reelTimer); reelTimer = null; } }

  reel.querySelector(".reel-next").addEventListener("click", () => { show(cur + 1); start(); });
  reel.querySelector(".reel-prev").addEventListener("click", () => { show(cur - 1); start(); });
  dots.forEach(d => d.addEventListener("click", () => { show(+d.dataset.i); start(); }));
  playBtn.addEventListener("click", () => {
    playing = !playing;
    playBtn.textContent = playing ? "⏸" : "▶";
    if (playing) start(); else stop();
  });
  start();
}

function animateCount(el) {
  const to = parseInt(el.dataset.to, 10);
  if (!to) return;
  const from = Math.max(0, to - 60);
  const dur = 900, t0 = performance.now();
  (function tick(t) {
    const p = Math.min(1, (t - t0) / dur);
    const ease = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(from + (to - from) * ease);
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = to;
  })(performance.now());
}

/* ————— Quiz paneli (en sağ sütun) ————— */
function renderQuiz(s) {
  const el = document.getElementById("quiz");
  if (!el) return;

  if (!s || !s.quiz || !s.quiz.length) {
    el.innerHTML = `<div class="quiz-head"><h3>🎯 Mini Test</h3></div>
      <div class="quiz-empty">Bu dönem için sorular yakında eklenecek.</div>`;
    return;
  }

  const toplam = s.quiz.length;
  const dogruSayi = s.quiz.filter((q, i) => state.quiz[s.id + "-" + i]).length;

  el.innerHTML = `
    <div class="quiz-head">
      <h3>🎯 Mini Test</h3>
      <span class="quiz-score">${dogruSayi}/${toplam} doğru</span>
    </div>
    <div class="quiz-list">
      ${s.quiz.map((q, i) => quizHTML_one(s.id, q, i)).join("")}
    </div>`;

  el.querySelectorAll(".opt").forEach(btn => {
    btn.addEventListener("click", () => cevapla(s, btn));
  });
}

function headHTML(s, e, showLearn) {
  const done = state.ogrenilen[s.id];
  const lakap = s.lakap ? `<span class="d-lakap">“${s.lakap}”</span>` : "";
  const baslik = s.baslik ? `<div class="d-baslik">${s.baslik}</div>` : "";
  const no = s.no !== null ? `${s.no}. Padişah · ` : "";
  const learnBtn = showLearn
    ? `<button class="learn-btn ${done ? "done" : ""}">${done ? "✓ Öğrenildi" : "Öğrendim (+" + XP_LEARN + " XP)"}</button>`
    : "";
  const img = foto(s);
  const portre = img
    ? `<img class="d-portre" src="${img}" alt="${s.ad} portresi" onerror="this.style.display='none'">`
    : "";
  return `<div class="d-head">
    <div class="era-pill"><span class="era-dot" style="background:${e.renk}"></span>${e.ad}</div>
    <div class="d-title-row">
      <div class="d-title-left">
        ${portre}
        <div>
          <div class="d-name">${s.ad}${lakap}</div>
          <div class="d-sub">${no}<span class="yil">${s.yil}</span></div>
          ${baslik}
        </div>
      </div>
      ${learnBtn}
    </div>
  </div>`;
}

const row = (k, v, extra = "") =>
  `<div class="event-row ${extra}"><div class="k">${k}</div><div class="v">${v}</div></div>`;

function quizHTML_one(sid, q, i) {
  const qid = sid + "-" + i;
  const answered = state.quiz[qid]; // kayıtlı doğru cevap => kilit
  const opts = q.secenek.map((o, idx) => {
    let cls = "opt";
    let dis = "";
    if (answered !== undefined) {
      dis = "disabled";
      if (idx === q.dogru) cls += " correct";
    }
    return `<button class="${cls}" ${dis} data-qid="${qid}" data-idx="${idx}" data-dogru="${q.dogru}">${o}</button>`;
  }).join("");
  const explain = answered !== undefined
    ? `<div class="quiz-explain"><b>Doğru.</b> ${q.aciklama}</div>` : "";
  return `<div class="quiz-q" data-qid="${qid}">
    <div class="q"><b>${i + 1}.</b> ${q.q}</div>
    ${opts}
    ${explain}
  </div>`;
}

/* ————— Etkileşim ————— */
function cevapla(s, btn) {
  const qid = btn.dataset.qid;
  const idx = +btn.dataset.idx;
  const dogru = +btn.dataset.dogru;
  const wrap = btn.closest(".quiz-q");
  const opts = wrap.querySelectorAll(".opt");

  opts.forEach(o => {
    o.disabled = true;
    if (+o.dataset.idx === dogru) o.classList.add("correct");
  });

  if (idx === dogru) {
    // ilk kez doğru => XP
    if (state.quiz[qid] === undefined) {
      state.quiz[qid] = true;
      addXP(XP_QUIZ, "+" + XP_QUIZ + " XP · doğru cevap");
    }
    // açıklama ekle
    if (!wrap.querySelector(".quiz-explain")) {
      const q = s.quiz[+qid.split("-").pop()];
      const ex = document.createElement("div");
      ex.className = "quiz-explain";
      ex.innerHTML = `<b>Doğru.</b> ${q.aciklama}`;
      wrap.appendChild(ex);
    }
  } else {
    btn.classList.add("wrong");
    const q = s.quiz[+qid.split("-").pop()];
    if (!wrap.querySelector(".quiz-explain")) {
      const ex = document.createElement("div");
      ex.className = "quiz-explain";
      ex.innerHTML = `<b style="color:var(--garnet)">Yanlış.</b> Doğru cevap işaretlendi. ${q.aciklama}`;
      wrap.appendChild(ex);
    }
    // yanlışta XP yok; tekrar denenebilsin diye kaydı kilitliyoruz (görüldü)
  }
  save();

  // sağ paneldeki skoru güncelle
  const scoreEl = document.querySelector("#quiz .quiz-score");
  if (scoreEl) {
    const t = s.quiz.length;
    const d = s.quiz.filter((q, i) => state.quiz[s.id + "-" + i]).length;
    scoreEl.textContent = d + "/" + t + " doğru";
  }
}

function toggleLearn(s) {
  if (state.ogrenilen[s.id]) {
    delete state.ogrenilen[s.id];
    state.xp = Math.max(0, state.xp - XP_LEARN);
    toast("Öğrenildi işareti kaldırıldı");
  } else {
    state.ogrenilen[s.id] = true;
    addXP(XP_LEARN, "+" + XP_LEARN + " XP · " + s.ad + " öğrenildi");
  }
  save();
  renderTimeline();
  sec(s.id);
  renderHUD();
}

function addXP(amount, msg) {
  const eskiLvl = level(state.xp);
  const eskiBadges = earnedBadgeIds();
  state.xp += amount;
  renderHUD();
  const yeniLvl = level(state.xp);
  if (yeniLvl > eskiLvl) toast("🎉 Seviye " + yeniLvl + "! " + (msg || ""));
  else toast(msg || "+" + amount + " XP");
  // yeni rozet?
  const yeniBadges = earnedBadgeIds().filter(b => !eskiBadges.includes(b));
  if (yeniBadges.length) {
    const b = BADGES.find(x => x.id === yeniBadges[0]);
    if (b) setTimeout(() => toast(b.ikon + " Rozet: " + b.ad), 900);
  }
}

/* ————— HUD ————— */
function earnedBadgeIds() { return BADGES.filter(b => b.kosul(state)).map(b => b.id); }

function renderHUD() {
  const lvl = level(state.xp);
  const inLevel = state.xp % XP_PER_LEVEL;
  const pct = (inLevel / XP_PER_LEVEL) * 100;

  document.getElementById("lvl").textContent = lvl;
  document.getElementById("xp-now").textContent = inLevel + " / " + XP_PER_LEVEL + " XP";
  document.getElementById("xp-total").textContent = state.xp + " XP";
  document.getElementById("xp-fill").style.width = pct + "%";

  const total = fullList().filter(s => s.status === "full").length;
  const done = fullList().filter(s => s.status === "full" && state.ogrenilen[s.id]).length;
  document.getElementById("prog-done").textContent = done;
  document.getElementById("prog-total").textContent = total;

  const earned = earnedBadgeIds();
  document.getElementById("badges").innerHTML = BADGES.map(b =>
    `<div class="badge ${earned.includes(b.id) ? "earned" : ""}" title="${b.ad}${earned.includes(b.id) ? " ✓" : " (kilitli)"}">${b.ikon}</div>`
  ).join("");
}

/* ————— Toast ————— */
let toastT;
function toast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastT);
  toastT = setTimeout(() => el.classList.remove("show"), 2200);
}

/* ————— Başlat ————— */
renderTimeline();
renderHUD();
// açılışta ilk padişahı seç
sec("osman1");
