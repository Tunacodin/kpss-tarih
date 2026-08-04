/* KPSS Pratik — 3 Modül: Soru Bankası · Hızlı Eşleştirme · Hata Kutusu */
(function () {
  "use strict";

  /* ─── DOM yardımcısı ──────────────────────────────────────── */
  const $ = id => document.getElementById(id);

  /* ─── Panel aç/kapat ──────────────────────────────────────── */
  const overlay = document.getElementById("pratik-overlay");

  document.getElementById("pratik-open").addEventListener("click", openPanel);
  document.getElementById("pratik-close").addEventListener("click", closePanel);

  function openPanel() {
    overlay.classList.add("show");
    document.body.classList.add("pratik-on");
    refreshHataKutusuStats();
    updateTopbarSub("Modül Seç");
    goScreen("home");
  }

  function closePanel() {
    stopTimer();
    overlay.classList.remove("show");
    document.body.classList.remove("pratik-on");
  }

  /* ─── Ekran yönetimi ──────────────────────────────────────── */
  const screens = {
    home:              $("screen-home"),
    sorubankasi:       $("screen-sorubankasi"),
    quiz:              $("screen-quiz"),
    result:            $("screen-result"),
    eslestirme:        $("screen-eslestirme"),
    "eslestirme-oyun": $("screen-eslestirme-oyun"),
    hata:              $("screen-hata")
  };

  function goScreen(name) {
    Object.values(screens).forEach(s => s.classList.remove("active"));
    screens[name].classList.add("active");
  }

  function updateTopbarSub(txt) {
    const el = $("pr-topbar-sub");
    if (el) el.textContent = txt;
  }

  /* ═══════════════════════════════════════════════════════════
     MODÜL SEÇİCİ
  ═══════════════════════════════════════════════════════════ */
  document.querySelectorAll(".modul-kart").forEach(kart => {
    kart.addEventListener("click", () => {
      const m = kart.dataset.modul;
      if (m === "sorubankasi") {
        updateTopbarSub("Soru Bankası");
        buildKatGrid();
        goScreen("sorubankasi");
      } else if (m === "eslestirme") {
        updateTopbarSub("Hızlı Eşleştirme");
        buildEslesSetGrid();
        goScreen("eslestirme");
      } else if (m === "hatakutusu") {
        updateTopbarSub("Hata Kutusu");
        refreshHataKutusuStats();
        goScreen("hata");
      }
    });
  });

  /* ═══════════════════════════════════════════════════════════
     SORU BANKASI
  ═══════════════════════════════════════════════════════════ */
  let state = {
    seciliKat: "hepsi",
    soru_sayisi: 50,
    sure: 60,
    zorluk: "hepsi",
    sorular: [],
    idx: 0,
    cevaplar: {},
    dogru_say: 0,
    timerInterval: null,
    timerLeft: 0,
    cevapVerildi: false,
    modAdi: "sorubankasi"   // "sorubankasi" | "hatakutusu"
  };

  /* ─── Geri butonları ──────────────────────────────────────── */
  $("btn-sb-geri").addEventListener("click", () => {
    updateTopbarSub("Modül Seç"); goScreen("home");
  });

  /* ─── Kategori kartları ───────────────────────────────────── */
  function buildKatGrid() {
    const grid = $("kat-grid");
    grid.innerHTML = "";
    const allCard = makeKatCard("hepsi", PRATIK_KATEGORILER.hepsi, PRATIK_SORULAR.length);
    allCard.classList.add("selected");
    state.seciliKat = "hepsi";
    grid.appendChild(allCard);
    Object.keys(PRATIK_KATEGORILER).filter(k => k !== "hepsi").forEach(key => {
      const sayi = PRATIK_SORULAR.filter(q => q.kategori === key).length;
      if (sayi === 0) return;
      grid.appendChild(makeKatCard(key, PRATIK_KATEGORILER[key], sayi));
    });
  }

  function makeKatCard(key, meta, sayi) {
    const div = document.createElement("div");
    div.className = "kat-card";
    div.style.setProperty("--kat-renk", meta.renk);
    div.dataset.kat = key;
    div.innerHTML = `<div class="kat-ikon">${meta.ikon}</div><div class="kat-ad">${meta.ad}</div><div class="kat-sayi">${sayi} soru</div>`;
    div.addEventListener("click", () => selectKat(key));
    return div;
  }

  function selectKat(key) {
    state.seciliKat = key;
    document.querySelectorAll(".kat-card").forEach(c => {
      c.classList.toggle("selected", c.dataset.kat === key);
    });
  }

  /* ─── Sınav başlat ────────────────────────────────────────── */
  $("btn-start").addEventListener("click", () => startQuiz("sorubankasi"));

  function startQuiz(modAdi, forcedSorular) {
    state.modAdi = modAdi || "sorubankasi";

    let pool;
    if (forcedSorular) {
      pool = forcedSorular.slice();
    } else {
      pool = PRATIK_SORULAR.slice();
      if (state.seciliKat !== "hepsi") pool = pool.filter(q => q.kategori === state.seciliKat);
      if (state.zorluk !== "hepsi")    pool = pool.filter(q => q.zorluk === state.zorluk);
      state.soru_sayisi = parseInt($("sel-sayi").value);
      state.sure        = parseInt($("sel-sure").value);
      state.zorluk      = $("sel-zorluk").value;
    }

    if (pool.length === 0) { alert("Seçilen filtreye uygun soru bulunamadı."); return; }

    pool = shuffle(pool);
    state.sorular     = pool.slice(0, Math.min(state.soru_sayisi, pool.length));
    state.idx         = 0;
    state.cevaplar    = {};
    state.dogru_say   = 0;
    state.cevapVerildi = false;

    $("q-total").textContent = state.sorular.length;
    $("q-dogru-say").textContent = "0";

    updateTopbarSub("Soru Bankası");
    goScreen("quiz");
    renderSoru();
  }

  /* ─── Soru render ─────────────────────────────────────────── */
  function renderSoru() {
    stopTimer();
    state.cevapVerildi = false;

    const q    = state.sorular[state.idx];
    const meta = PRATIK_KATEGORILER[q.kategori] || PRATIK_KATEGORILER.hepsi;
    const num  = state.idx + 1;

    $("q-index").textContent = num;
    const chip = $("q-kat-chip");
    chip.textContent = meta.ad;
    chip.style.setProperty("--kat-renk", meta.renk);

    const body = $("quiz-body");
    body.innerHTML = `
      <div class="q-num-display" style="--kat-renk:${meta.renk}">${String(num).padStart(2,"0")}</div>
      <div><span class="q-zorluk ${q.zorluk}">${q.zorluk === "zor" ? "⚠ ÖSYM Tuzak" : "Orta"}</span></div>
      <div class="q-text">${escHtml(q.soru)}</div>
      <div class="q-options" id="q-opts"></div>
      <div class="q-explanation" id="q-exp"></div>
    `;

    const optsDiv = document.getElementById("q-opts");
    Object.entries(q.secenekler).forEach(([key, val]) => {
      const btn = document.createElement("button");
      btn.className = "q-opt";
      btn.dataset.key = key;
      btn.innerHTML = `<span class="opt-key">${key}</span><span>${escHtml(val)}</span>`;
      btn.addEventListener("click", () => secimiYap(key, q));
      optsDiv.appendChild(btn);
    });

    $("btn-next").classList.remove("show");
    $("quiz-hint").textContent = "Bir şık seç";
    body.scrollTop = 0;

    if (state.sure > 0) startTimer(state.sure, q);
  }

  function secimiYap(key, q) {
    if (state.cevapVerildi) return;
    state.cevapVerildi = true;
    stopTimer();

    state.cevaplar[q.id] = key;
    const dogru = key === q.dogru;
    if (dogru) { state.dogru_say++; $("q-dogru-say").textContent = state.dogru_say; }

    document.querySelectorAll(".q-opt").forEach(btn => {
      btn.disabled = true;
      const k = btn.dataset.key;
      if (k === q.dogru)           btn.classList.add("correct");
      else if (k === key && !dogru) btn.classList.add("wrong");
    });

    const expDiv = document.getElementById("q-exp");
    expDiv.textContent = q.aciklama;
    expDiv.className = "q-explanation show" + (dogru ? "" : " wrong-exp");

    const fill = $("timer-fill");
    fill.style.width = "100%";
    fill.style.background = dogru ? "var(--ok)" : "var(--err)";

    $("quiz-hint").textContent = dogru ? "✓ Doğru!" : "✗ Yanlış";
    $("btn-next").classList.add("show");
    $("btn-next").textContent = state.idx + 1 < state.sorular.length ? "Sonraki Soru →" : "Sonuçları Gör →";
  }

  $("btn-next").addEventListener("click", () => {
    state.idx++;
    if (state.idx < state.sorular.length) renderSoru();
    else showResult();
  });

  /* ─── Timer ───────────────────────────────────────────────── */
  function startTimer(sn, q) {
    state.timerLeft = sn;
    const fill = $("timer-fill");
    const txt  = $("q-timer-text");
    fill.style.transition = "none";
    fill.style.background = "var(--gold)";
    fill.style.width = "100%";
    txt.textContent = sn;
    txt.className = "q-timer";

    requestAnimationFrame(() => {
      fill.style.transition = `width ${sn}s linear`;
      fill.style.width = "0%";
    });

    state.timerInterval = setInterval(() => {
      state.timerLeft--;
      txt.textContent = state.timerLeft;
      if (state.timerLeft <= 10) { txt.className = "q-timer warn"; fill.classList.add("warn"); }
      if (state.timerLeft <= 0) {
        stopTimer();
        if (!state.cevapVerildi) {
          state.cevapVerildi = true;
          state.cevaplar[q.id] = null;
          document.querySelectorAll(".q-opt").forEach(btn => {
            btn.disabled = true;
            if (btn.dataset.key === q.dogru) btn.classList.add("correct");
          });
          const expDiv = document.getElementById("q-exp");
          expDiv.textContent = "⏱ Süre doldu. " + q.aciklama;
          expDiv.className = "q-explanation show wrong-exp";
          $("quiz-hint").textContent = "⏱ Süre doldu";
          $("btn-next").classList.add("show");
          $("btn-next").textContent = state.idx + 1 < state.sorular.length ? "Sonraki Soru →" : "Sonuçları Gör →";
        }
      }
    }, 1000);
  }

  function stopTimer() {
    if (state.timerInterval) { clearInterval(state.timerInterval); state.timerInterval = null; }
    const txt  = $("q-timer-text");
    const fill = $("timer-fill");
    if (txt)  txt.className = "q-timer";
    if (fill) fill.classList.remove("warn");
  }

  /* ─── Sonuç ekranı ────────────────────────────────────────── */
  function showResult() {
    stopTimer();
    goScreen("result");

    const total = state.sorular.length;
    const dogru = state.dogru_say;
    const pct   = Math.round((dogru / total) * 100);

    $("res-skor").textContent = `${dogru}/${total}`;
    $("res-sub").textContent  = `soruda doğru — %${pct} başarı`;

    const gradeEl = $("res-grade");
    if (pct >= 80)      { gradeEl.textContent = "Harika! 🏆"; gradeEl.className = "grade grade-great"; }
    else if (pct >= 60) { gradeEl.textContent = "İyi 👍";     gradeEl.className = "grade grade-good"; }
    else                { gradeEl.textContent = "Tekrar Et 📚"; gradeEl.className = "grade grade-fail"; }

    const bd = $("res-breakdown");
    bd.innerHTML = "";
    const katStats = {};
    state.sorular.forEach(q => {
      if (!katStats[q.kategori]) katStats[q.kategori] = { dogru: 0, toplam: 0 };
      katStats[q.kategori].toplam++;
      if (state.cevaplar[q.id] === q.dogru) katStats[q.kategori].dogru++;
    });
    Object.entries(katStats).forEach(([key, stat]) => {
      const meta = PRATIK_KATEGORILER[key] || { ad: key, renk: "var(--gold)", ikon: "" };
      const p = Math.round((stat.dogru / stat.toplam) * 100);
      const row = document.createElement("div");
      row.className = "kat-row";
      row.innerHTML = `
        <span class="kat-lbl">${meta.ikon} ${meta.ad}</span>
        <div class="kat-bar-wrap"><div class="kat-bar-fill" style="width:0%;background:${barColor(p)}"></div></div>
        <span class="kat-pct">${stat.dogru}/${stat.toplam}</span>
      `;
      bd.appendChild(row);
      requestAnimationFrame(() => { row.querySelector(".kat-bar-fill").style.width = p + "%"; });
    });

    const yanlis = state.sorular.filter(q => state.cevaplar[q.id] !== q.dogru);
    const wWrap  = $("res-wrongs-wrap");
    const wList  = $("res-wrongs-list");
    wList.innerHTML = "";
    if (yanlis.length > 0) {
      wWrap.style.display = "block";
      yanlis.forEach(q => {
        const verilen = state.cevaplar[q.id];
        const item = document.createElement("div");
        item.className = "wrong-item";
        item.innerHTML = `
          <div class="wi-soru">${escHtml(q.soru.length > 110 ? q.soru.slice(0,110)+"…" : q.soru)}</div>
          <div class="wi-meta">
            <span class="wi-senin">Seçtiğin: ${verilen ? verilen+") "+escHtml(q.secenekler[verilen]||"") : "⏱ Süre doldu"}</span>
            <span class="wi-dogru">Doğrusu: ${q.dogru}) ${escHtml(q.secenekler[q.dogru])}</span>
          </div>
        `;
        wList.appendChild(item);
      });
    } else { wWrap.style.display = "none"; }

    if (state.modAdi === "hatakutusu") {
      updateHataKutusuDates(yanlis);
    } else {
      saveHataKutusu(yanlis);
    }
    screens.result.scrollTop = 0;
  }

  function barColor(p) {
    if (p >= 75) return "var(--ok)";
    if (p >= 50) return "var(--gold)";
    return "var(--garnet)";
  }

  $("btn-retry").addEventListener("click", () => startQuiz(state.modAdi));
  $("btn-home").addEventListener("click", () => {
    stopTimer(); updateTopbarSub("Modül Seç"); goScreen("home");
  });

  /* ─── Hata Kutusu — localStorage kaydet (yeni yanlışlar) ── */
  function saveHataKutusu(yanlisSorular) {
    try {
      const now = Date.now();
      const existing = JSON.parse(localStorage.getItem("kpss-hata-kutusu") || "{}");
      yanlisSorular.forEach(q => {
        if (!existing[q.id]) existing[q.id] = { yanlisSay: 0, sonYanlis: 0, sonraTekrar: now };
        existing[q.id].yanlisSay++;
        existing[q.id].sonYanlis = now;
        existing[q.id].sonraTekrar = now + 24 * 60 * 60 * 1000;
      });
      localStorage.setItem("kpss-hata-kutusu", JSON.stringify(existing));
    } catch (e) {}
  }

  /* ─── Hata Kutusu — tekrar sonrası tarihleri güncelle ───── */
  function updateHataKutusuDates(yanlisSorular) {
    try {
      const now = Date.now();
      const yanlisIdler = new Set(yanlisSorular.map(q => q.id));
      const existing = JSON.parse(localStorage.getItem("kpss-hata-kutusu") || "{}");
      state.sorular.forEach(q => {
        if (!existing[q.id]) return;
        if (yanlisIdler.has(q.id)) {
          existing[q.id].yanlisSay++;
          existing[q.id].sonYanlis = now;
          existing[q.id].sonraTekrar = now + 1 * 24 * 60 * 60 * 1000;  // 1 gün
        } else {
          existing[q.id].sonraTekrar = now + 3 * 24 * 60 * 60 * 1000;  // 3 gün
        }
      });
      localStorage.setItem("kpss-hata-kutusu", JSON.stringify(existing));
    } catch (e) {}
  }

  /* ═══════════════════════════════════════════════════════════
     HIZLI EŞLEŞTİRME
  ═══════════════════════════════════════════════════════════ */
  let eslesState = {
    setIdx: 0,
    set: null,
    sollar: [],    // shuffled sol items [{idx, metin}]
    saglar: [],    // shuffled sag items [{idx, metin}]
    seciliSolIdx: null,
    dogru: 0,
    toplam: 0
  };

  /* ─── Set seçici grid ─────────────────────────────────────── */
  function buildEslesSetGrid() {
    const grid = $("esles-set-grid");
    grid.innerHTML = "";
    ESLESTIRME_SETLERI.forEach((set, i) => {
      const btn = document.createElement("button");
      btn.className = "esles-set-kart";
      btn.style.setProperty("--esk-renk", set.renk);
      btn.innerHTML = `
        <div class="esk-ikon">${set.ikon}</div>
        <div><div class="esk-ad">${set.ad}</div><div class="esk-sayi">${set.ciftler.length} çift</div></div>
      `;
      btn.addEventListener("click", () => startEslestirme(i));
      grid.appendChild(btn);
    });
  }

  $("btn-esles-geri").addEventListener("click", () => {
    updateTopbarSub("Modül Seç"); goScreen("home");
  });
  $("esles-oyun-geri").addEventListener("click", () => {
    updateTopbarSub("Hızlı Eşleştirme"); buildEslesSetGrid(); goScreen("eslestirme");
  });

  /* ─── Oyunu başlat ────────────────────────────────────────── */
  function startEslestirme(setIdx) {
    const set = ESLESTIRME_SETLERI[setIdx];
    eslesState.set    = set;
    eslesState.setIdx = setIdx;
    eslesState.seciliSolIdx = null;
    eslesState.dogru  = 0;
    eslesState.toplam = set.ciftler.length;

    // Sol ve sağ kolonları ayrı karıştır
    const indices = set.ciftler.map((_, i) => i);
    eslesState.sollar = shuffle(indices);
    eslesState.saglar = shuffle(indices);

    $("esles-set-baslik").textContent = set.ad;
    $("esles-dogru").textContent  = "0";
    $("esles-toplam").textContent = set.ciftler.length;
    $("esles-aciklama").className = "esles-aciklama";
    $("esles-bitti").style.display = "none";

    renderEslesKartlar();
    updateTopbarSub("Eşleştirme · " + set.ad);
    goScreen("eslestirme-oyun");
  }

  /* ─── Kartları render et ──────────────────────────────────── */
  function renderEslesKartlar() {
    const solDiv = $("esles-sol");
    const sagDiv = $("esles-sag");
    solDiv.innerHTML = "";
    sagDiv.innerHTML = "";

    eslesState.sollar.forEach(idx => {
      const btn = document.createElement("button");
      btn.className = "esles-kart";
      btn.dataset.idx = idx;
      btn.dataset.taraf = "sol";
      btn.textContent = eslesState.set.ciftler[idx].sol;
      btn.addEventListener("click", () => solKartTikla(idx, btn));
      solDiv.appendChild(btn);
    });

    eslesState.saglar.forEach(idx => {
      const btn = document.createElement("button");
      btn.className = "esles-kart";
      btn.dataset.idx = idx;
      btn.dataset.taraf = "sag";
      btn.textContent = eslesState.set.ciftler[idx].sag;
      btn.addEventListener("click", () => sagKartTikla(idx, btn));
      sagDiv.appendChild(btn);
    });
  }

  function solKartTikla(idx, btn) {
    if (btn.disabled) return;
    // Önceki seçimi temizle
    document.querySelectorAll(".esles-kart[data-taraf=sol]").forEach(b => {
      if (!b.classList.contains("dogru")) b.classList.remove("secili");
    });
    eslesState.seciliSolIdx = idx;
    btn.classList.add("secili");
    $("esles-aciklama").className = "esles-aciklama";
  }

  function sagKartTikla(idx, btn) {
    if (btn.disabled) return;
    if (eslesState.seciliSolIdx === null) return;

    const solIdx = eslesState.seciliSolIdx;
    const dogru  = solIdx === idx;

    // Sol kartı bul
    const solBtn = $("esles-sol").querySelector(`[data-idx="${solIdx}"]`);

    if (dogru) {
      // Eşleşme doğru
      btn.classList.remove("secili");
      btn.classList.add("dogru");
      btn.disabled = true;
      if (solBtn) { solBtn.classList.remove("secili"); solBtn.classList.add("dogru"); solBtn.disabled = true; }

      eslesState.dogru++;
      $("esles-dogru").textContent = eslesState.dogru;
      eslesState.seciliSolIdx = null;

      // Kısa açıklama göster
      const exp = $("esles-aciklama");
      exp.textContent = "✓ " + eslesState.set.ciftler[idx].aciklama;
      exp.className = "esles-aciklama show dogru-exp";

      if (eslesState.dogru === eslesState.toplam) {
        setTimeout(showEslesBitti, 600);
      }
    } else {
      // Yanlış eşleşme
      btn.classList.add("yanlis");
      if (solBtn) solBtn.classList.add("yanlis");

      const exp = $("esles-aciklama");
      exp.textContent = "✗ " + escHtml(eslesState.set.ciftler[solIdx].sol) + " → " + escHtml(eslesState.set.ciftler[solIdx].sag) + ". " + eslesState.set.ciftler[solIdx].aciklama;
      exp.className = "esles-aciklama show";

      setTimeout(() => {
        btn.classList.remove("yanlis", "secili");
        if (solBtn) { solBtn.classList.remove("yanlis", "secili"); }
        eslesState.seciliSolIdx = null;
      }, 900);
    }
  }

  function showEslesBitti() {
    const pct = Math.round((eslesState.dogru / eslesState.toplam) * 100);
    const txt = pct === 100 ? "Mükemmel! Tüm eşleştirmeler doğru 🏆"
              : pct >= 60  ? `${eslesState.dogru}/${eslesState.toplam} doğru — İyi iş 👍`
              :               `${eslesState.dogru}/${eslesState.toplam} doğru — Tekrar dene 📚`;
    $("esles-sonuc-txt").textContent = txt;
    $("esles-bitti").style.display = "flex";
    $("esles-aciklama").className = "esles-aciklama";
  }

  $("esles-tekrar").addEventListener("click", () => startEslestirme(eslesState.setIdx));
  $("esles-eve").addEventListener("click", () => { updateTopbarSub("Modül Seç"); goScreen("home"); });

  /* ═══════════════════════════════════════════════════════════
     HATA KUTUSU
  ═══════════════════════════════════════════════════════════ */
  function refreshHataKutusuStats() {
    try {
      const now = Date.now();
      const kutu = JSON.parse(localStorage.getItem("kpss-hata-kutusu") || "{}");
      const kayitlar = Object.values(kutu);
      const toplam   = kayitlar.length;
      const bekleyen = kayitlar.filter(k => k.sonraTekrar <= now).length;
      const tamam    = toplam - bekleyen;

      const stats = $("hata-stats");
      stats.innerHTML = `
        <div class="hata-stat-item bekleyen">
          <div class="hata-stat-sayi">${bekleyen}</div>
          <div class="hata-stat-lbl">Bugün Bekleyen</div>
        </div>
        <div class="hata-stat-item">
          <div class="hata-stat-sayi" style="color:var(--ink-2)">${toplam}</div>
          <div class="hata-stat-lbl">Toplam Kayıt</div>
        </div>
        <div class="hata-stat-item ok">
          <div class="hata-stat-sayi">${tamam}</div>
          <div class="hata-stat-lbl">Ertelenmiş</div>
        </div>
      `;

      const btn = $("btn-hata-baslat");
      if (bekleyen === 0) {
        btn.textContent = toplam === 0 ? "Henüz hata yok" : "Bugün beklenen soru yok";
        btn.disabled = true;
        btn.style.opacity = ".5";
      } else {
        btn.textContent = `${bekleyen} Soruyu Çöz →`;
        btn.disabled = false;
        btn.style.opacity = "1";
      }

      // Modül seçici kartındaki açıklamayı güncelle
      const mkAcik = $("mk-hata-acik");
      if (mkAcik) {
        mkAcik.textContent = bekleyen > 0
          ? `${bekleyen} soru bugün bekliyor`
          : toplam === 0 ? "Henüz hata yok — önce soru bankasını çöz"
                        : "Bugün bekleyen soru yok";
      }
    } catch (e) {}
  }

  $("btn-hata-baslat").addEventListener("click", () => {
    const now = Date.now();
    const kutu = JSON.parse(localStorage.getItem("kpss-hata-kutusu") || "{}");
    const bekleyenIdler = Object.entries(kutu)
      .filter(([, v]) => v.sonraTekrar <= now)
      .map(([id]) => parseInt(id));

    const bekleyenSorular = PRATIK_SORULAR.filter(q => bekleyenIdler.includes(q.id));
    if (bekleyenSorular.length === 0) { alert("Bugün bekleyen soru yok."); return; }

    state.sure        = 0;    // hata kutusunda süresiz
    state.soru_sayisi = bekleyenSorular.length;
    startQuiz("hatakutusu", bekleyenSorular);
  });

  $("btn-hata-geri").addEventListener("click", () => {
    updateTopbarSub("Modül Seç"); goScreen("home");
  });

  /* ═══════════════════════════════════════════════════════════
     KLAVYE KISAYOLLARI
  ═══════════════════════════════════════════════════════════ */
  document.addEventListener("keydown", e => {
    if (!overlay.classList.contains("show")) return;
    if (e.key === "Escape") { closePanel(); return; }

    if (screens.quiz.classList.contains("active")) {
      const keys = ["a","b","c","d","e"];
      const kidx = keys.indexOf(e.key.toLowerCase());
      if (kidx !== -1 && !state.cevapVerildi) {
        const q   = state.sorular[state.idx];
        const sik = Object.keys(q.secenekler)[kidx];
        if (sik) secimiYap(sik, q);
      }
      if ((e.key === "Enter" || e.key === " " || e.key === "ArrowRight") && state.cevapVerildi) {
        const btn = $("btn-next");
        if (btn.classList.contains("show")) btn.click();
      }
    }
  });

  /* ═══════════════════════════════════════════════════════════
     YARDIMCILAR
  ═══════════════════════════════════════════════════════════ */
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function escHtml(t) {
    return String(t ?? "")
      .replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
  }

  /* ─── Init ────────────────────────────────────────────────── */
  buildKatGrid();
  refreshHataKutusuStats();

})();
