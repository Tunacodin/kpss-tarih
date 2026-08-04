/* ————————————————————————————————————————————————————————————
   ÖĞRENİM MODÜLÜ — Cumhuriyet / Atatürk dönemi tam-konu sayfaları
   Sinema akışının içinde çalışır: cumhuriyet konu düğümlerinde
   cinema.js kısa slayt yerine bu scrollable "Harita Masası" sayfasını basar.
   İçerik kaynağı: data_ek.js (ATA_ICERIK → SULTANS) + aşağıdaki OGRENIM_EK.
   4 etkileşim: Test · Eşleştirme · Kronoloji Sıralama · Kartlar.
   Kural: gölge yok; derinlik = kroki hatları + hairline + dönem-rengi tint.
———————————————————————————————————————————————————————————— */
(function () {
  "use strict";

  const esc = t => String(t == null ? "" : t)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  // teşkilat/ösym metinlerinde bilinçli <b> geçtiği için sınırlı izinli kaçış
  const richEsc = t => String(t == null ? "" : t)
    .replace(/<(?!\/?b>)/g, "&lt;");

  /* ——— Ek etkileşim verisi: eşleştirme çiftleri + flashcard'lar ———
     Anahtar = düğüm id'si. Sıralama & test otomatik türetilir (savaslar / quiz). */
  const OGRENIM_EK = {
    mm_hazirlik: {
      eslestirme: [
        ["Amasya Genelgesi", "Gerekçe–amaç–yöntemi veren ihtilal genelgesi"],
        ["Erzurum Kongresi", "Bölgesel toplanış, ulusal karar; manda ilk kez reddi"],
        ["Sivas Kongresi", "Cemiyetler tek çatıda birleşti; manda kesin reddi"],
        ["Amasya Görüşmeleri", "İstanbul Hükümeti Temsil Heyeti'ni ilk kez tanıdı"],
        ["Mondros 7. madde", "İşgallere hukuki kılıf"],
        ["Mondros 24. madde", "Vilayet-i Sitte / Ermenistan zemini"]
      ],
      kartlar: [
        ["Manda–himaye İLK KEZ nerede reddedildi?", "Erzurum Kongresi (KESİN olarak Sivas'ta)"],
        ["İzmir'in işgali / ilk kurşun", "15 Mayıs 1919 · Hasan Tahsin"],
        ["Samsun'a çıkış: tarih ve sıfat", "19 Mayıs 1919 · 9. Ordu Müfettişi"],
        ["Milli Varlığa Düşman cemiyetler", "İngiliz Muhipleri, Sulh ve Selamet, Teali İslam, Kürt Teali, Wilson Prensipleri"],
        ["Azınlık cemiyetleri", "Mavri Mira, Pontus Rum, Etniki Eterya, Taşnak–Hınçak, Alyans İsrailit"]
      ]
    },
    tbmm: {
      eslestirme: [
        ["Misak-ı Milli", "Milli sınır ve barış programı (28 Ocak 1920)"],
        ["İstanbul'un İşgali", "Mebusan kapatıldı → Ankara'da TBMM'ye zemin"],
        ["I. TBMM", "Güçler Birliği; kurucu-ihtilalci meclis"],
        ["İlk kanun", "Ağnam (hayvan) Vergisi — 24 Nisan 1920"],
        ["Sevr", "Meclis onayı yok → hukuken geçersiz (ölü doğan)"],
        ["İstiklal Mahkemeleri", "Yargı yetkisinin meclisçe kullanımı"]
      ],
      kartlar: [
        ["TBMM'nin açılışı", "23 Nisan 1920 · Ankara"],
        ["1921 Anayasası'nın ana ilkesi", "Egemenlik kayıtsız şartsız milletindir"],
        ["Sevr neden geçersiz?", "Mebusan Meclisi onayından geçmedi (Kanun-ı Esasi)"],
        ["Halifelik Ordusu isyanı", "Kuva-yı İnzibatiye + Anzavur (İstanbul/İngiliz kışkırtması)"],
        ["Misak-ı Milli'de rejim?", "Cumhuriyet'ten BAHSEDİLMEZ (İtilaf'ı ürkütmemek için)"]
      ]
    },
    kurtulus_cephe: {
      eslestirme: [
        ["Gümrü Antlaşması", "TBMM'nin ilk uluslararası antlaşması (Doğu)"],
        ["I. İnönü", "TALİM: Teşkilat-ı Esasiye, Afgan, Londra, İstiklal Marşı, Moskova"],
        ["Ankara Antlaşması (1921)", "Fransa: TBMM'yi tanıyan ilk İtilaf devleti"],
        ["Sakarya", "Geri çekilme bitti; Gazi–Mareşal; savunmadan taarruza"],
        ["Büyük Taarruz", "9 Eylül İzmir; askeri safha bitti"],
        ["Mudanya", "Doğu Trakya-İstanbul-Boğazlar savaşsız; Osmanlı fiilen sona"]
      ],
      kartlar: [
        ["TALİM kodu (I. İnönü sonuçları)", "Teşkilat-ı Esasiye · Afganistan · Londra · İstiklal Marşı · Moskova"],
        ["Misak-ı Milli'den İLK taviz", "Batum (Moskova Antlaşması, 1921)"],
        ["TBMM'yi tanıyan ilk İtilaf devleti", "Fransa (Ankara Antlaşması, 1921)"],
        ["Tekâlif-i Millîye", "Sakarya öncesi topyekûn seferberlik (İstiklal Mahkemeleri denetledi)"],
        ["Sakarya'nın sözü", "“Hattı müdafaa yoktur, sathı müdafaa vardır.”"]
      ]
    },
    lozan_devrim: {
      eslestirme: [
        ["Saltanatın Kaldırılması", "Osmanlı resmen sona; Lozan'a çift davet engeli (1 Kasım 1922)"],
        ["Lozan (1923)", "Yeni devletin tapusu; Musul sonraya bırakıldı"],
        ["Cumhuriyet'in İlanı", "Meclis Hükümeti → Kabine sistemi (29 Ekim 1923)"],
        ["Halifeliğin Kaldırılması", "Tevhid-i Tedrisat; laikliğin temeli (3 Mart 1924)"],
        ["Şeyh Said İsyanı", "Takrir-i Sükûn; TCF kapatıldı (1925)"],
        ["TCF (1924)", "İlk muhalefet partisi"]
      ],
      kartlar: [
        ["Ankara başkent oldu", "13 Ekim 1923"],
        ["İlk muhalefet partisi", "Terakkiperver Cumhuriyet Fırkası (1924)"],
        ["Soyadı Kanunu yılı", "1934 (3 Mart 1924 DEĞİL)"],
        ["Lozan'da çözülemeyen mesele", "Musul → 1926 Ankara Antlaşması ile Irak'a"]
      ]
    },
    ilke_inkilap: {
      eslestirme: [
        ["Tevhid-i Tedrisat", "Laiklik + Milliyetçilik"],
        ["Türk Medeni Kanunu", "Halkçılık + Laiklik"],
        ["Harf İnkılabı", "Milliyetçilik + İnkılapçılık"],
        ["Kadınlara siyasi haklar", "Cumhuriyetçilik + Halkçılık"],
        ["Aşar'ın kaldırılması", "Halkçılık"],
        ["I. Beş Yıllık Sanayi Planı", "Devletçilik"]
      ],
      kartlar: [
        ["Kadınlara siyasi haklar takvimi", "Belediye 1930 · Muhtarlık 1933 · Milletvekili 1934"],
        ["Laiklik anayasaya girdi", "1937 (1928: 'Devletin dini İslam' ibaresi çıkarıldı)"],
        ["Medeni Kanun kaynağı", "İsviçre Medeni Kanunu (1926)"],
        ["Altı Ok", "Cumhuriyetçilik · Milliyetçilik · Halkçılık · Devletçilik · Laiklik · İnkılapçılık"]
      ]
    },
    dis_politika: {
      eslestirme: [
        ["Musul Meselesi (1926)", "İngiltere/Irak'a bırakıldı (Misak-ı Milli tavizi)"],
        ["Milletler Cemiyeti (1932)", "“Yurtta sulh, cihanda sulh”"],
        ["Balkan Antantı (1934)", "Batı sınır güvenliği (TAYYAR)"],
        ["Montrö (1936)", "Boğazlar'da tam egemenlik"],
        ["Sadabat Paktı (1937)", "Doğu sınır güvenliği"],
        ["Hatay (1939)", "Atatürk'ün son dış politika hedefi"]
      ],
      kartlar: [
        ["TAYYAR (Balkan Antantı)", "Türkiye · Yunanistan · Yugoslavya · Romanya"],
        ["Sadabat Paktı üyeleri", "Türkiye · İran · Irak · Afganistan (Suriye Hatay yüzünden yok)"],
        ["Misak-ı Milli'den 3 taviz", "Batum · Musul · Hatay"],
        ["Montrö'nün önemi", "Boğazlar Komisyonu kalktı; asker bulundurma yetkisi Türkiye'ye"]
      ]
    },
    cagdas: {
      eslestirme: [
        ["Truman/Marshall", "Soğuk Savaş yardımı; Batı'ya yöneliş"],
        ["NATO (1952)", "Kore Savaşı katkısıyla üyelik"],
        ["TMT (1958)", "Kıbrıs: EOKA/Enosis'e karşı"],
        ["Küba Füze Krizi (1962)", "Türkiye'deki Jüpiter füzeleri söküldü"],
        ["Varşova Paktı", "Doğu Bloku askeri ittifakı"],
        ["Bandung (1955)", "Bağlantısızlar: Tito–Nasır–Nehru"]
      ],
      kartlar: [
        ["BM kurucu üyeliği şartı", "1 Mart 1945'e kadar Mihver'e savaş ilanı (Yalta)"],
        ["NATO üyeliği", "1952 (Yunanistan ile birlikte)"],
        ["1991 bağımsız Türk Cumhuriyetleri", "Azerbaycan · Kazakistan · Özbekistan · Türkmenistan · Kırgızistan"],
        ["Marshall Planı yanılgısı", "II. Dünya Savaşı önlemi DEĞİL → savaş sonrası Soğuk Savaş yardımı"]
      ]
    }
  };

  // Deterministik karıştırma (Math.random yok — id + tur bazlı seed)
  function seededShuffle(arr, seed) {
    const a = arr.slice();
    let s = 0;
    for (let i = 0; i < seed.length; i++) s = (s * 31 + seed.charCodeAt(i)) >>> 0;
    for (let i = a.length - 1; i > 0; i--) {
      s = (s * 1103515245 + 12345) & 0x7fffffff;
      const j = s % (i + 1);
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  const yilNum = str => { const m = String(str).match(/\d{4}/); return m ? +m[0] : 0; };

  /* ————————————— SAYFA HTML ————————————— */
  function slideHTML(s, sirano) {
    const ek = OGRENIM_EK[s.id] || {};
    const savaslar = s.savaslar || [];
    const num = String(sirano).padStart(2, "0");

    const eventsHTML = savaslar.map(ev => `
      <article class="km-event">
        <div class="km-spine"><span class="km-dot"></span><span class="km-yil">${esc(ev.yil)}</span></div>
        <div class="km-ev-body">
          <div class="km-ev-head">${esc(ev.ad)}</div>
          ${ev.kime  ? kmRow("Kime",  ev.kime)  : ""}
          ${ev.sebep ? kmRow("Sebep", ev.sebep) : ""}
          ${ev.sonuc ? kmRow("Sonuç", ev.sonuc) : ""}
          ${ev.onem  ? kmRow("Önem",  ev.onem, "onem") : ""}
        </div>
      </article>`).join("");

    const teskilatHTML = (s.teskilat && s.teskilat.length)
      ? `<section class="km-sec">
           <h3 class="km-sec-h">🏛 Teşkilatlanma &amp; Yenilikler</h3>
           <ul class="km-list">${s.teskilat.map(t => `<li>${richEsc(t)}</li>`).join("")}</ul>
         </section>` : "";

    const osymCard = (s.osym && s.osym.length)
      ? `<aside class="km-osym-card">
           <div class="km-osym-h">🔍 ÖSYM — Dikkat Noktaları</div>
           <ul class="km-osym-list">${s.osym.map(o => `<li>${richEsc(o)}</li>`).join("")}</ul>
         </aside>` : "";

    const hasEsles  = ek.eslestirme && ek.eslestirme.length;
    const hasSira   = savaslar.length >= 3;
    const hasKart   = ek.kartlar && ek.kartlar.length;
    const hasQuiz   = s.quiz && s.quiz.length;
    const hasIliski = savaslar.some(ev => ev.sebep && ev.sonuc);

    const tabs = [];
    if (hasQuiz)   tabs.push(["quiz",   "◎ Test",       s.quiz.length]);
    if (hasEsles)  tabs.push(["esles",  "⇄ Eşleştirme", ek.eslestirme.length]);
    if (hasIliski) tabs.push(["iliski", "⇢ İlişkiler",  savaslar.filter(e => e.sebep && e.sonuc).length]);
    if (hasSira)   tabs.push(["sira",   "⇅ Sıralama",   savaslar.length]);
    if (hasKart)   tabs.push(["kart",   "▭ Kartlar",    ek.kartlar.length]);

    const tabBtns = tabs.map((t, i) =>
      `<button class="km-tab ${i === 0 ? "on" : ""}" data-t="${t[0]}">${t[1]}<i>${t[2]}</i></button>`).join("");

    const era = (typeof ERAS !== "undefined" && ERAS[s.era] && ERAS[s.era].renk) || "var(--gold)";

    return `
      <div class="cin-slide konu" style="--era:${era}">

        <div class="km-pane konu-left">
          <header class="km-head">
            <div class="km-num">${num}</div>
            <div class="km-head-txt">
              <div class="km-era-tag"><span class="km-etag-dot"></span>Cumhuriyet Dönemi · Öğrenim Modülü</div>
              <h2 class="km-title">${esc(s.ad)}</h2>
              ${s.baslik ? `<div class="km-sub">${esc(s.baslik)}</div>` : ""}
              <div class="km-year">${esc(s.yil)}</div>
            </div>
          </header>

          ${s.ruh ? `<p class="km-ruh">${esc(s.ruh)}</p>` : ""}

          <section class="km-sec">
            <h3 class="km-sec-h">${richEsc(s.savasBaslik || "⚔ Olaylar &amp; Neden–Sonuç")}</h3>
            <div class="km-timeline">${eventsHTML}</div>
          </section>

          ${teskilatHTML}
        </div>

        <div class="km-pane konu-right">
          ${osymCard}
          <section class="km-sec km-inter">
            <h3 class="km-sec-h">🎯 Pratik Alanı</h3>
            <div class="km-tabs">${tabBtns}</div>
            <div class="km-panes" data-id="${s.id}"></div>
          </section>
        </div>

      </div>`;
  }

  function kmRow(lbl, val, mod) {
    return `<div class="km-row ${mod || ""}"><span class="km-lbl">${lbl}</span><span class="km-val">${richEsc(val)}</span></div>`;
  }

  /* ————————————— ETKİLEŞİMLER ————————————— */

  function paneQuiz(s) {
    const qs = s.quiz || [];
    return `<div class="km-quiz">` + qs.map((q, i) => {
      const opts = q.secenek.map((o, j) =>
        `<button class="kq-opt" data-i="${j}">${esc(o)}</button>`).join("");
      return `<div class="kq-item" data-qi="${i}" data-dogru="${q.dogru}">
        <div class="kq-q"><b>${i + 1}.</b> ${esc(q.q)}</div>
        <div class="kq-opts">${opts}</div>
        <div class="kq-exp">${esc(q.aciklama || "")}</div>
      </div>`;
    }).join("") + `</div>`;
  }

  function paneEsles(s) {
    const ek = OGRENIM_EK[s.id] || {};
    const pairs = ek.eslestirme || [];
    const sol = pairs.map((p, i) => `<button class="ke-item sol" data-k="${i}">${esc(p[0])}</button>`).join("");
    const sagOrder = seededShuffle(pairs.map((_, i) => i), s.id + "sag");
    const sag = sagOrder.map(i => `<button class="ke-item sag" data-k="${i}">${esc(pairs[i][1])}</button>`).join("");
    return `<div class="km-esles">
      <div class="ke-hint">Soldan bir kavram, sonra sağdan karşılığını seç.</div>
      <div class="ke-cols">
        <div class="ke-col">${sol}</div>
        <div class="ke-col">${sag}</div>
      </div>
      <div class="ke-score"></div>
    </div>`;
  }

  function paneSira(s) {
    const savaslar = (s.savaslar || []).map((ev, i) => ({ ad: ev.ad, yil: ev.yil, y: yilNum(ev.yil), i }));
    const shuffled = seededShuffle(savaslar, s.id + "sira");
    const rows = shuffled.map(ev =>
      `<li class="ks-row" data-y="${ev.y}">
         <span class="ks-grip">⋮⋮</span>
         <span class="ks-ad">${esc(ev.ad)}</span>
         <span class="ks-yil"></span>
         <span class="ks-move"><button class="ks-up" title="yukarı">▲</button><button class="ks-dn" title="aşağı">▼</button></span>
       </li>`).join("");
    return `<div class="km-sira">
      <div class="ks-hint">Olayları en eskiden en yeniye sırala, sonra kontrol et.</div>
      <ol class="ks-list">${rows}</ol>
      <div class="ks-actions"><button class="ks-check">Kontrol et</button><span class="ks-score"></span></div>
    </div>`;
  }

  function paneKart(s) {
    const ek = OGRENIM_EK[s.id] || {};
    const kartlar = ek.kartlar || [];
    const cards = kartlar.map(k =>
      `<button class="kk-card" data-flip="0">
         <span class="kk-face kk-front"><span class="kk-tag">SORU</span>${esc(k[0])}</span>
         <span class="kk-face kk-back"><span class="kk-tag">CEVAP</span>${esc(k[1])}</span>
       </button>`).join("");
    return `<div class="km-kart">
      <div class="kk-hint">Karta dokun → çevrilir.</div>
      <div class="kk-grid">${cards}</div>
    </div>`;
  }

  function paneIliski(s) {
    const flows = (s.savaslar || []).filter(ev => ev.sebep && ev.sonuc);
    const rows = flows.map(ev => `
      <div class="ki-flow">
        <div class="ki-node sebep"><span class="ki-tag">Sebep</span>${esc(ev.sebep)}</div>
        <div class="ki-arrow">➜</div>
        <div class="ki-node olay"><span class="ki-tag">${esc(ev.yil)}</span>${esc(ev.ad)}</div>
        <div class="ki-arrow">➜</div>
        <div class="ki-node sonuc"><span class="ki-tag">Sonuç</span>${esc(ev.sonuc)}</div>
        ${ev.onem ? `<div class="ki-onem"><b>Önem:</b> ${richEsc(ev.onem)}</div>` : ""}
      </div>`).join("");
    return `<div class="km-iliski">
      <div class="ki-hint">Her olayın <b>sebep ➜ olay ➜ sonuç</b> zinciri. ÖSYM en çok bu bağlantıyı sorar.</div>
      ${rows}
    </div>`;
  }

  /* ————————————— ETKİLEŞİM WIRING ————————————— */
  function wireQuiz(pane) {
    pane.querySelectorAll(".kq-item").forEach(item => {
      const dogru = +item.dataset.dogru;
      item.querySelectorAll(".kq-opt").forEach(btn => {
        btn.addEventListener("click", () => {
          if (item.classList.contains("answered")) return;
          const sec = +btn.dataset.i;
          item.classList.add("answered");
          item.querySelectorAll(".kq-opt").forEach((b, j) => {
            if (j === dogru) b.classList.add("dogru");
            else if (j === sec) b.classList.add("yanlis");
            b.disabled = true;
          });
          item.classList.add(sec === dogru ? "ok" : "no");
          item.querySelector(".kq-exp").classList.add("show");
        });
      });
    });
  }

  function wireEsles(pane) {
    let selSol = null;
    const score = pane.querySelector(".ke-score");
    const total = pane.querySelectorAll(".ke-item.sol").length;
    let done = 0;
    const clearSel = () => pane.querySelectorAll(".ke-item.sel").forEach(x => x.classList.remove("sel"));

    pane.querySelectorAll(".ke-item.sol").forEach(b => b.addEventListener("click", () => {
      if (b.classList.contains("matched")) return;
      clearSel(); selSol = b; b.classList.add("sel");
    }));
    pane.querySelectorAll(".ke-item.sag").forEach(b => b.addEventListener("click", () => {
      if (b.classList.contains("matched") || !selSol) return;
      if (selSol.dataset.k === b.dataset.k) {
        selSol.classList.add("matched"); b.classList.add("matched");
        selSol.classList.remove("sel"); selSol = null; done++;
        score.textContent = `${done} / ${total} eşleşti`;
        if (done === total) score.classList.add("full");
      } else {
        b.classList.add("shake");
        const s2 = selSol;
        setTimeout(() => { b.classList.remove("shake"); }, 380);
        s2.classList.add("miss"); b.classList.add("miss");
        setTimeout(() => { s2.classList.remove("miss", "sel"); b.classList.remove("miss"); }, 380);
        selSol = null;
      }
    }));
  }

  function wireSira(pane) {
    const list = pane.querySelector(".ks-list");
    const move = (row, dir) => {
      if (dir < 0 && row.previousElementSibling) list.insertBefore(row, row.previousElementSibling);
      else if (dir > 0 && row.nextElementSibling) list.insertBefore(row.nextElementSibling, row);
      pane.querySelectorAll(".ks-row").forEach(r => r.classList.remove("ok", "no"));
      pane.querySelector(".ks-score").textContent = "";
    };
    list.querySelectorAll(".ks-up").forEach(b => b.addEventListener("click", () => move(b.closest(".ks-row"), -1)));
    list.querySelectorAll(".ks-dn").forEach(b => b.addEventListener("click", () => move(b.closest(".ks-row"), 1)));
    pane.querySelector(".ks-check").addEventListener("click", () => {
      const rows = [...list.querySelectorAll(".ks-row")];
      let prev = -Infinity, dogru = 0;
      rows.forEach(r => {
        const y = +r.dataset.y;
        const ok = y >= prev;
        r.classList.toggle("ok", ok); r.classList.toggle("no", !ok);
        r.querySelector(".ks-yil").textContent = y || "";
        if (ok) dogru++;
        prev = y;
      });
      const sc = pane.querySelector(".ks-score");
      sc.textContent = dogru === rows.length ? "Tam doğru sıralama! ✓" : `${dogru} / ${rows.length} yerinde`;
      sc.classList.toggle("full", dogru === rows.length);
    });
  }

  function wireKart(pane) {
    pane.querySelectorAll(".kk-card").forEach(c =>
      c.addEventListener("click", () => c.classList.toggle("flip")));
  }

  const PANE_BUILD = { quiz: paneQuiz, esles: paneEsles, iliski: paneIliski, sira: paneSira, kart: paneKart };
  const PANE_WIRE  = { quiz: wireQuiz, esles: wireEsles, iliski: function () {}, sira: wireSira, kart: wireKart };

  function showPane(panes, s, tur) {
    panes.innerHTML = PANE_BUILD[tur](s);
    PANE_WIRE[tur](panes);
  }

  function init(stage, s, sirano) {
    const tabsWrap = stage.querySelector(".km-tabs");
    const panes = stage.querySelector(".km-panes");
    if (!panes) return;
    const first = tabsWrap && tabsWrap.querySelector(".km-tab");
    if (first) showPane(panes, s, first.dataset.t);
    if (tabsWrap) {
      tabsWrap.querySelectorAll(".km-tab").forEach(btn => btn.addEventListener("click", () => {
        tabsWrap.querySelectorAll(".km-tab").forEach(b => b.classList.remove("on"));
        btn.classList.add("on");
        showPane(panes, s, btn.dataset.t);
      }));
    }
  }

  // Bu düğüm öğrenim modülüyle mi gösterilsin?
  function isKonu(s) {
    return s && s.era === "cumhuriyet" && s.no === null && Array.isArray(s.savaslar) && s.savaslar.length > 0;
  }

  window.KonuModulu = { slideHTML, init, isKonu };
})();
