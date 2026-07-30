/* ————————————————————————————————————————————————————————————
   ARKA PLAN MÜZİĞİ — ana sayfada loop olarak çalan Osmanlı müziği
   Kaynak: osmanli_backgorund_music.mp4
   Sağ üstteki 🔊 düğmesiyle açılıp kapatılır. Tercih localStorage'da.
   Sinematik mod açıkken kendi müziğini çaldığı için burada duraklatılır.
———————————————————————————————————————————————————————————— */
(function () {
  "use strict";

  const MUSIC_SRC = "osmanli_backgorund_music.mp4";
  const KEY = "bgmuted";

  let muted = localStorage.getItem(KEY) === "1";
  const btn = document.getElementById("music-toggle");
  if (!btn) return;

  // Sesi tutan gizli <video> (mp4 ses için)
  const el = document.createElement("video");
  el.id = "bg-music";
  el.src = MUSIC_SRC;
  el.loop = true;
  el.playsInline = true;
  el.preload = "auto";
  el.volume = 0.4;
  el.style.display = "none";
  document.body.appendChild(el);

  let cinemaOn = false;

  function syncBtn() {
    btn.querySelector(".mt-ico").textContent = muted ? "🔇" : "🔊";
    btn.classList.toggle("muted", muted);
    btn.title = muted ? "Müziği aç" : "Müziği kapat";
  }

  function play() {
    if (muted || cinemaOn) return;
    const p = el.play();
    if (p && p.catch) p.catch(() => {/* kullanıcı jesti gerekebilir */});
  }

  // Otomatik oynatma engellenirse ilk kullanıcı etkileşiminde başlat
  function unlock() {
    if (!muted && !cinemaOn && el.paused) play();
  }
  ["pointerdown", "keydown", "touchstart"].forEach(ev =>
    document.addEventListener(ev, unlock, { once: false, passive: true }));

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    muted = !muted;
    localStorage.setItem(KEY, muted ? "1" : "0");
    if (muted) el.pause();
    else play();
    syncBtn();
  });

  // Sinematik mod açık/kapalı — body.cinema-on izlenir
  new MutationObserver(() => {
    const on = document.body.classList.contains("cinema-on");
    if (on === cinemaOn) return;
    cinemaOn = on;
    if (cinemaOn) el.pause();
    else play();
  }).observe(document.body, { attributes: true, attributeFilter: ["class"] });

  syncBtn();
  play();
})();
