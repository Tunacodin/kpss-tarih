/* Tek seferlik: data.js + data_ek.js -> kaynak/*.md (dönem başlıklarına göre) */
const fs = require("fs");
const path = require("path");

const code = fs.readFileSync("data.js", "utf8") + "\n" + fs.readFileSync("data_ek.js", "utf8");
// eval içinde const'lar dışarı sızmaz; sonuna toplayıcı ekle
const runner = code + `
;globalThis.__OUT = { ERAS, ERA_INTRO, SULTANS };`;
eval(runner);
const { ERAS, ERA_INTRO, SULTANS } = globalThis.__OUT;

const OUTDIR = "kaynak";
fs.mkdirSync(OUTDIR, { recursive: true });

// Dönem sırası: SULTANS'ta ilk görülme sırası
const eraOrder = [];
SULTANS.forEach(s => { if (!eraOrder.includes(s.era)) eraOrder.push(s.era); });

const eraFile = {};
const eraNum = {};
eraOrder.forEach((era, i) => {
  const n = String(i + 1).padStart(2, "0");
  const slug = era.replace(/[^a-z0-9]+/gi, "-").toLowerCase();
  eraFile[era] = `${n}-${slug}.md`;
  eraNum[era] = n;
});

function quizMd(quiz) {
  if (!quiz || !quiz.length) return "";
  let out = `\n### 🎯 Mini Test (${quiz.length} soru)\n`;
  quiz.forEach((q, i) => {
    out += `\n**${i + 1}. ${q.q}**\n\n`;
    q.secenek.forEach((o, idx) => {
      out += `- ${idx === q.dogru ? "**✓ " : ""}${o}${idx === q.dogru ? "**" : ""}\n`;
    });
    if (q.aciklama) out += `\n> ${q.aciklama}\n`;
  });
  return out;
}

function savaslarMd(savaslar, baslik) {
  if (!savaslar || !savaslar.length) return "";
  let out = `\n### ⚔ ${baslik || "Savaşlar & Neden-Sonuç"}\n`;
  savaslar.forEach(ev => {
    out += `\n#### ${ev.ad}${ev.yil ? ` (${ev.yil})` : ""}\n`;
    if (ev.kime)  out += `- **Kime:** ${ev.kime}\n`;
    if (ev.sebep) out += `- **Sebep:** ${ev.sebep}\n`;
    if (ev.sonuc) out += `- **Sonuç:** ${ev.sonuc}\n`;
    if (ev.onem)  out += `- **Önem:** ${ev.onem}\n`;
    if (ev.yerler) out += `- **Alınan yer:** ${ev.yerler}\n`;
  });
  return out;
}

function listMd(title, arr) {
  if (!arr || !arr.length) return "";
  return `\n### ${title}\n` + arr.map(x => `- ${x}`).join("\n") + "\n";
}

function gorsellerMd(g) {
  if (!g || !g.length) return "";
  return `\n### 🖼 Görseller\n` + g.map(x =>
    `- \`${x.src}\` — ${x.cap}${x.not ? ` (${x.not})` : ""}`).join("\n") + "\n";
}

function nodeMd(s) {
  const baslik = s.no !== null ? `${s.no}. ${s.ad}` : s.ad;
  const lakap = s.lakap ? ` — “${s.lakap}”` : "";
  let out = `\n---\n\n## ${baslik}${lakap}\n`;
  out += `*${s.yil || ""}*${s.baslik ? ` · **${s.baslik}**` : ""}\n`;
  if (s.ruh) out += `\n### Dönemin Ruhu / Özet\n${s.ruh}\n`;
  out += savaslarMd(s.savaslar, s.savasBaslik);
  out += listMd("🏛 Teşkilatlanma & Yenilikler", s.teskilat);
  out += listMd("🔍 ÖSYM Köşesi", s.osym);
  out += gorsellerMd(s.gorseller);
  out += quizMd(s.quiz);
  return out;
}

// index
let index = `# Kaynak — Konu Başlıklarına Göre Veri\n\nBu klasör, uygulamadaki tüm tarih içeriğinin (\`data.js\` + \`data_ek.js\`) insan-okur Markdown dökümüdür. Dönem başlıklarına göre ayrılmıştır.\n\n| # | Dönem | Yıl | Dosya |\n|---|---|---|---|\n`;

eraOrder.forEach(era => {
  const e = ERAS[era];
  index += `| ${eraNum[era]} | ${e.ad} | ${e.yil} | [${eraFile[era]}](${eraFile[era]}) |\n`;
});

let toplamNode = 0, toplamSoru = 0;

eraOrder.forEach(era => {
  const e = ERAS[era];
  const nodes = SULTANS.filter(s => s.era === era);
  let md = `# ${e.ad}\n**Yıl:** ${e.yil}\n`;
  if (ERA_INTRO[era]) md += `\n## Büyük Resim\n${ERA_INTRO[era]}\n`;
  nodes.forEach(s => { md += nodeMd(s); toplamNode++; toplamSoru += (s.quiz || []).length; });
  md += `\n---\n*Kaynak: \`data.js\` / \`data_ek.js\`. Otomatik üretildi — düzenleme için kaynağı değiştirin.*\n`;
  fs.writeFileSync(path.join(OUTDIR, eraFile[era]), md, "utf8");
});

index += `\n**Toplam:** ${eraOrder.length} dönem · ${toplamNode} bölüm · ${toplamSoru} soru\n`;
fs.writeFileSync(path.join(OUTDIR, "README.md"), index, "utf8");

console.log("Yazıldı:", OUTDIR);
eraOrder.forEach(era => console.log("  -", eraFile[era], "(" + SULTANS.filter(s => s.era === era).length + " bölüm)"));
console.log("Toplam bölüm:", toplamNode, "| toplam soru:", toplamSoru);
