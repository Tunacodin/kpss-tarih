# Veri Kaynağı ve Çıkarma Notları

Bu dosya, uygulamadaki tarih içeriğinin **nereden geldiğini**, **hangi dosyada durduğunu** ve **nasıl birleştiğini** belgeler.

## 1. Kaynak PDF

- **Dosya:** `kpss_tarih_full.pdf`
- **117 sayfa**, tamamen **taranmış görüntü** (metin katmanı yok).
  - Bu yüzden `pdftotext` boş döner; içerik **gözle / görsel okuma** ile çıkarılmıştır.
- Repoda durur ama `.gitignore` içinde `*.pdf` olduğundan **git'e ve canlıya gitmez** — sadece yerel referans.

## 2. Çıkarma Süreci

Çıkarma **birden fazla oturuma** yayılmıştır (session transcript'leri ile doğrulanmıştır):

| Bölüm | PDF Sayfa | Yöntem |
|---|---|---|
| Ön kısım (Kuruluş / Yükselme konu anlatımı) | ~1–57 | Önceki oturum(lar)da görsel okuma |
| Quiz bankası + Cumhuriyet | 57–117 | 9 subagent, her sayfa üst/alt yarıya bölünerek (`h064t.png` / `h064b.png`) okundu |

- Render edilen geçici görüntüler (`pdf_pages/`) çıkarma sonrası **silinmiştir** (`.gitignore`'da).
- Ham görüntüler artık kullanılmıyor; tüm bilgi **metne** dönüştürülüp veri dosyalarına yazılmıştır.

## 3. Veri Nerede Duruyor

Tüm içerik iki dosyada:

### `data.js` (~109 KB) — ana konu anlatımı

| Yapı | Satır | İçerik |
|---|---|---|
| `ERAS` | 5 | 5 dönem tanımı (Kuruluş → Dağılma) |
| `ERA_INTRO` | 14 | Dönem "büyük resim" paragrafları |
| `SULTANS` | 57 | **36 padişah** — her biri `ruh`, `savaslar`, `teskilat`, `osym`, `quiz` alanları |

### `data_ek.js` (~166 KB) — ek içerik

| Yapı | Satır | İçerik | Birleşme |
|---|---|---|---|
| `QUIZ_EK` | 7 | Padişahlara ek quiz'ler (Yükselme+) | Satır ~506'da `SULTANS`'a `concat` |
| `DONEM_TESTLERI` | 525 | 5 dönem konu testi + Cumhuriyet konuları | Satır ~996'da `SULTANS`'a `push` |
| `ATA_ICERIK` | 1006 | Atatürk dönemi 7 konunun tam içeriği + görseller | Satır ~1366'da ilgili düğümlere `Object.assign` |

## 4. Yükleme / Birleşme Akışı

```
index.html
  ├─ data.js        → ERAS, ERA_INTRO, SULTANS (36 padişah)
  ├─ data_ek.js     → QUIZ_EK / DONEM_TESTLERI / ATA_ICERIK'i SULTANS'a enjekte eder
  ├─ app.js         → tek SULTANS dizisinden konu anlatımı + quiz panelini basar
  └─ cinema.js      → aynı SULTANS dizisinden "Sinematik Yolculuk"u kurar
```

Sonuçta uygulama **tek bir `SULTANS` dizisi** üzerinden çalışır; `data_ek.js` yüklendiğinde ek quiz/konu/Cumhuriyet içeriği bu diziye eklenmiş olur.

## 5. Kapsam / Doğrulama (son kontrol)

| Kontrol | Sonuç |
|---|---|
| Padişah içeriği | **36 / 36 tam** (`status: "full"`), stub yok — yalnızca Fetret ara dönem |
| Cumhuriyet / Atatürk | 7 konu, içerik + görseller tam |
| Toplam soru | **339** |
| Dönem konu testi | 5 düğüm, 50 soru |

### Soru yapısı
- **Kuruluş / Yükselme** padişahları: padişah başına ~10 soru (`QUIZ_EK`).
- **Duraklama → Dağılma** dönemi: sorular padişah başına değil, **dönem konu testlerinde** toplanmış (bu yüzden bu padişahların bireysel soru sayısı 1–3).

### Bilinen boşluklar / uyarılar
- Geç dönem padişahlarında bireysel soru azdır (tasarım gereği dönem testinde). *Her padişaha 10 birebir soru* isteniyorsa Duraklama sonrası eksiktir.
- 8 padişahta `teskilat`, III. Osman'da `savaslar` alanı yok — muhtemelen kısa/önemsiz saltanat; kitapla teyit edilebilir.
- Faktüel doğruluk sayfa-sayfa OCR karşılaştırmasıyla **birebir doğrulanmadı**; yapısal kapsam tamdır, içerik doğruluğu örnekleme ile kontrol edilebilir.

---
*Bu not son veri kontrolünde (36 padişah / 339 soru) oluşturulmuştur. Veri değişince güncelleyin.*
