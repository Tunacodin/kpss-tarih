/* ————————————————————————————————————————————————————————————
   ARKA PLAN MÜZİĞİ — ana sayfada loop olarak çalan Osmanlı müziği
   Kaynak: osmanli_backgorund_music.mp4
   Sağ üstteki hoparlör ikonuyla aç/kapa. Tercih localStorage'da kalıcı.
   Sinematik mod açıkken kendi müziğini çaldığı için burada duraklatılır.
———————————————————————————————————————————————————————————— */
(function () {
  "use strict";

  const MUSIC_SRC = "osmanli_backgorund_music.mp4";
  const KEY = "bgmuted";

  const ICON_ON =
    `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor"
       stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
       <path d="M4 9v6h4l5 4V5L8 9H4z"/>
       <path d="M16 9a3.5 3.5 0 0 1 0 6"/>
       <path d="M18.5 6.5a7 7 0 0 1 0 11"/></svg>`;
  const ICON_OFF =
    `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor"
       stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
       <path d="M4 9v6h4l5 4V5L8 9H4z"/>
       <path d="M17 9.5l4 5M21 9.5l-4 5"/></svg>`;

  let muted = localStorage.getItem(KEY) === "1";
  let cinemaOn = false;

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
  el.setAttribute("aria-hidden", "true");
  el.style.cssText = "position:absolute;width:1px;height:1px;opacity:0;pointer-events:none;left:-9999px";
  document.body.appendChild(el);

  function syncBtn() {
    btn.innerHTML = muted ? ICON_OFF : ICON_ON;
    btn.classList.toggle("muted", muted);
    btn.title = muted ? "Müziği aç" : "Müziği kapat";
  }

  function tryPlay() {
    if (muted || cinemaOn) return;
    const p = el.play();
    if (p && p.catch) p.catch(() => {/* kullanıcı jesti gerekebilir */});
  }

  // İlk kullanıcı etkileşiminde başlat (autoplay engelini aş). Düğme kendi işler.
  function autostart(e) {
    if (e && btn.contains(e.target)) return;
    removeAutostart();
    tryPlay();
  }
  function removeAutostart() {
    document.removeEventListener("pointerdown", autostart);
    document.removeEventListener("keydown", autostart);
  }
  document.addEventListener("pointerdown", autostart);
  document.addEventListener("keydown", autostart);

  btn.addEventListener("click", () => {
    removeAutostart();
    if (!muted && !el.paused) {          // çalıyorsa → sustur
      muted = true;
      el.pause();
    } else {                              // susturulmuş ya da durmuşsa → aç ve çal
      muted = false;
      tryPlay();
    }
    localStorage.setItem(KEY, muted ? "1" : "0");
    syncBtn();
  });

  // Sinematik mod açık/kapalı — body.cinema-on izlenir
  new MutationObserver(() => {
    const on = document.body.classList.contains("cinema-on");
    if (on === cinemaOn) return;
    cinemaOn = on;
    if (cinemaOn) el.pause();
    else tryPlay();
  }).observe(document.body, { attributes: true, attributeFilter: ["class"] });

  syncBtn();
  tryPlay();
})();
