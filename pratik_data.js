/* KPSS Tarih — Pratik Soru Bankası
   Kaynak: 50 Soruluk Dev Karma Tekrar Kapsülü + ek sorular
   Kategoriler: ilkler | padisah_islahat | savas_taraf | antlasma |
                kurulus_savasi | ataturk | osmanli_genel | ilk_turk | dunya_tarihi */

const PRATIK_KATEGORILER = {
  hepsi:          { ad: "Karma Sınav",         renk: "#d9a94b", ikon: "⚔️" },
  padisah_islahat:{ ad: "Padişah & Islahat",   renk: "#b6584f", ikon: "👑" },
  savas_taraf:    { ad: "Savaş & Taraflar",    renk: "#e07b3a", ikon: "🗡️" },
  antlasma:       { ad: "Antlaşmalar",         renk: "#4f9e8f", ikon: "📜" },
  kurulus_savasi: { ad: "Kurtuluş Savaşı",     renk: "#5a8fb6", ikon: "🏛️" },
  ataturk:        { ad: "Atatürk Dönemi",      renk: "#7b8bb0", ikon: "🇹🇷" },
  osmanli_genel:  { ad: "Osmanlı Genel",       renk: "#9c7bb0", ikon: "🌙" },
  ilk_turk:       { ad: "İlk Türk Devletleri",renk: "#6b9e5a", ikon: "🦅" },
  ilkler:         { ad: "İlkler & Terimler",   renk: "#d9a94b", ikon: "🔑" },
  dunya_tarihi:   { ad: "Dünya Tarihi",        renk: "#8b9e6b", ikon: "🌍" }
};

const PRATIK_SORULAR = [
  // ─── 1 ───────────────────────────────────────────────────────────────────
  {
    id: 1, kategori: "ilkler", zorluk: "orta",
    soru: "Türk-İslam tarihinde \"Sultan\" unvanını kullanan ilk hükümdar ile Osmanlı tarihinde \"Sultan\" unvanını kullanan ilk hükümdar eşleştirmesi aşağıdakilerden hangisinde doğru verilmiştir?",
    secenekler: {
      A: "Alp Arslan — I. Murad",
      B: "Gazneli Mahmud — Orhan Bey",
      C: "Tuğrul Bey — II. Mehmed (Fatih)",
      D: "Gazneli Mahmud — I. Murad",
      E: "Satuk Buğra Han — Osman Bey"
    },
    dogru: "B",
    aciklama: "Türk-İslam dünyasında Sultan unvanını ilk kullanan Gazneli Mahmud'dur (Abbasi halifesini koruduğu için verilmiştir). Osmanlı'da ise Sultan unvanını ilk kullanan Orhan Bey'dir. I. Murad ise \"Hüdavendigar\" olarak bilinir — tuzak şık budur."
  },
  // ─── 2 ───────────────────────────────────────────────────────────────────
  {
    id: 2, kategori: "antlasma", zorluk: "zor",
    soru: "Osmanlı Devleti'nin tarihinde imzalanan İstanbul Antlaşmaları ile ilgili aşağıdaki eşleştirmelerden hangisi YANLIŞTIR?",
    secenekler: {
      A: "1533 → Avusturya arşidükünün Osmanlı sadrazamına denk sayılması",
      B: "1700 → Azak Kalesi'nin Rusya'da kalması; Rusya'nın İstanbul'da elçi bulundurması",
      C: "1724 → Osmanlı ve Rusya'nın İran topraklarını paylaşması (ilk Osmanlı-Rus dostluk antlaşması)",
      D: "1897 → Girit'e özerklik verilmesi ve Yunanistan'la sınır çizilmesi",
      E: "1913 → Sırbistan ile sınır çizilmesi ve Bulgaristan'ın Batı Trakya'yı tamamen teslim etmesi"
    },
    dogru: "E",
    aciklama: "1913 İstanbul Antlaşması Bulgaristan ile imzalanmıştır; Edirne ve Kırklareli geri alınmıştır. Bulgaristan Batı Trakya'yı teslim ETMEMİŞ, Meriç nehri sınır kalmıştır. \"Sırbistan ile sınır\" ifadesi de yanlıştır."
  },
  // ─── 3 ───────────────────────────────────────────────────────────────────
  {
    id: 3, kategori: "ilk_turk", zorluk: "orta",
    soru: "İlk Türk devletlerinde \"Ülke hanedanın ortak malıdır\" anlayışının doğal sonucu olarak aşağıdakilerden hangisinin gerçekleştiği SÖYLENEMEZ?",
    secenekler: {
      A: "Taht kavgalarının ve iç karışıklıkların yaşanması",
      B: "Devletlerin kısa sürede ikiye bölünerek yıkılma sürecine girmesi",
      C: "Boylar federasyonu şeklinde örgütlenilmesi",
      D: "Düzenli bir veraset sisteminin kurulamaması",
      E: "Kut anlayışının kan yoluyla babadan oğula geçmesi"
    },
    dogru: "C",
    aciklama: "Boylar federasyonu örgütlenmesi, konar-göçer toplum yapısının ve toplumsal örgütlenmenin (Oguş→Urug→Boy→Budun) sonucudur; doğrudan kut/veraset anlayışından kaynaklanmaz."
  },
  // ─── 4 ───────────────────────────────────────────────────────────────────
  {
    id: 4, kategori: "padisah_islahat", zorluk: "zor",
    soru: "Aşağıdaki ıslahat–padişah eşleştirmelerinden hangisi YANLIŞTIR?",
    secenekler: {
      A: "İlk Osmanlı matbaasının açılması → III. Ahmed (Lale Devri)",
      B: "Mühendishane-i Bahr-i Hümayun'un kurulması → I. Abdülhamid",
      C: "Nizam-ı Cedid ordusunun kurulması → III. Selim",
      D: "İlk posta teşkilatı ve Takvim-i Vekayi gazetesi → II. Mahmud",
      E: "Darülfünun'un açılması ve Mecelle'nin hazırlanması → III. Selim"
    },
    dogru: "E",
    aciklama: "Mecelle Ahmet Cevdet Paşa tarafından hazırlanmış; Darülfünun çalışmaları Abdülaziz ve II. Abdülhamid dönemine aittir. III. Selim 18. yüzyıl sonunda yaşamıştır, bu gelişmeler 19. yüzyıldır."
  },
  // ─── 5 ───────────────────────────────────────────────────────────────────
  {
    id: 5, kategori: "savas_taraf", zorluk: "orta",
    soru: "Aşağıdaki savaşlardan hangisi Osmanlı'nın taarruzdan savunmaya ya da savunmadan taarruza geçtiği kritik eşiklerden biri DEĞİLDİR?",
    secenekler: {
      A: "Miryokefalon (1176) → Anadolu'nun kesin Türk yurdu olması",
      B: "II. Kosova (1448) → Avrupalıların Osmanlı'yı Balkanlar'dan atma ümidinin bitmesi",
      C: "Sakarya (1921) → 1683'ten beri süren geri çekilmenin sona ermesi",
      D: "Malazgirt (1071) → Anadolu kapılarının Türklere açılması",
      E: "Otlukbeli (1473) → Osmanlı'nın Rumeli'deki tüm fetihlerinin durması"
    },
    dogru: "E",
    aciklama: "Otlukbeli, Fatih ile Akkoyunlu (Uzun Hasan) arasındadır. Doğu Anadolu güvenliği sağlanmış, Akkoyunlu çöküşe geçmiştir. Rumeli fetihlerini durdurmamıştır — bu savaşın Rumeli ile bağlantısı yoktur."
  },
  // ─── 6 ───────────────────────────────────────────────────────────────────
  {
    id: 6, kategori: "osmanli_genel", zorluk: "zor",
    soru: "Osmanlı'da padişahın yetkilerini İLK KEZ kısıtlayan belge ile padişahın yetkilerini KANUN ÖNÜNDE kısıtlayan belge sırasıyla hangisidir?",
    secenekler: {
      A: "Tanzimat Fermanı — Islahat Fermanı",
      B: "Sened-i İttifak — Tanzimat Fermanı",
      C: "Kanun-ı Esasi — Sened-i İttifak",
      D: "Tanzimat Fermanı — Kanun-ı Esasi",
      E: "Sened-i İttifak — Kanun-ı Esasi"
    },
    dogru: "B",
    aciklama: "Padişahı ilk kısıtlayan Sened-i İttifak (1808, ayanlarla). Padişahın kendi isteğiyle hukukun üstünlüğünü kabul ettiği ilk belge ise Tanzimat Fermanı (1839). Kanun-ı Esasi meşruti sistemi getirir ama bu sıralama sorusunun cevabı B'dir."
  },
  // ─── 7 ───────────────────────────────────────────────────────────────────
  {
    id: 7, kategori: "kurulus_savasi", zorluk: "orta",
    soru: "Kurtuluş Savaşı'nda düzenli ordunun SAVAŞMADIĞI, tamamen Kuvây-ı Milliye ve yerel halk direnişiyle zafer kazanılan cephe hangisidir?",
    secenekler: {
      A: "Doğu Cephesi",
      B: "Batı Cephesi",
      C: "Güney Cephesi",
      D: "Çanakkale Cephesi",
      E: "Hicaz-Yemen Cephesi"
    },
    dogru: "C",
    aciklama: "Güney Cephesi'nde (Maraş, Antep, Urfa, Adana) düzenli ordu yoktu; Fransız ve Ermeni kuvvetlerine karşı tamamen Kuvây-ı Milliye ve halk direnişi zafer kazandı."
  },
  // ─── 8 ───────────────────────────────────────────────────────────────────
  {
    id: 8, kategori: "ataturk", zorluk: "zor",
    soru: "Aşağıdaki kurum/gelişme — Atatürk İlkesi eşleştirmelerinden hangisi YANLIŞTIR?",
    secenekler: {
      A: "MTA ve Etibank'ın kurulması → Devletçilik",
      B: "Şer'iye ve Evkaf Vekaleti'nin kaldırılması → Laiklik",
      C: "Soyadı Kanunu ile unvanların yasaklanması → Halkçılık",
      D: "Kabotaj Kanunu'nun kabul edilmesi → Milliyetçilik",
      E: "Aşar Vergisi'nin kaldırılması → Cumhuriyetçilik"
    },
    dogru: "E",
    aciklama: "Aşar Vergisi'nin kaldırılması, köylü üzerindeki ağır yükü ve eşitsizliği ortadan kaldırdığı için Halkçılık ilkesiyle ilgilidir, Cumhuriyetçilikle değil."
  },
  // ─── 9 ───────────────────────────────────────────────────────────────────
  {
    id: 9, kategori: "osmanli_genel", zorluk: "orta",
    soru: "Osmanlı tımar sisteminde geliri doğrudan devlet hazinesine aktarılan ve iltizam usulüyle ihale edilen toprak türü hangisidir?",
    secenekler: {
      A: "Paşalık",
      B: "Mukataa",
      C: "Malikane",
      D: "Yurtluk",
      E: "Ocaktık"
    },
    dogru: "B",
    aciklama: "Mukataa: geliri merkeze (hazineye) giden topraklar. Mültezimlerin peşin ödeme yaptığı iltizam sisteminde işletilir. Malikane ise iltizamın ömür boyu versiyonudur — çeldirici şık."
  },
  // ─── 10 ──────────────────────────────────────────────────────────────────
  {
    id: 10, kategori: "ataturk", zorluk: "zor",
    soru: "Türkiye'nin Lozan'dan kalan sorunları çözerken KENDİ İSTEDİĞİ şekilde çözEMEDİĞİ tek ana mesele hangisidir?",
    secenekler: {
      A: "Yabancı Okullar Meselesi",
      B: "Nüfus Mübadelesi",
      C: "Musul Meselesi (1926 Ankara Antlaşması)",
      D: "Boğazlar Meselesi (1936 Montrö)",
      E: "Hatay Sorunu (1939)"
    },
    dogru: "C",
    aciklama: "Musul 1926 Ankara Antlaşması ile İngiliz mandasındaki Irak'a bırakıldı; Misak-ı Millî'den tek önemli taviz budur. Boğazlar (Montrö) ve Hatay Türkiye lehine sonuçlandı."
  },
  // ─── 11 ──────────────────────────────────────────────────────────────────
  {
    id: 11, kategori: "savas_taraf", zorluk: "orta",
    soru: "Aşağıdaki savaşlardan hangisi iki Türk devleti arasında gerçekleşmiştir?",
    secenekler: {
      A: "Pasinler Savaşı (1048)",
      B: "Katvan Savaşı (1141)",
      C: "Yassıçemen Savaşı (1230)",
      D: "Kösedağ Savaşı (1243)",
      E: "Ayn Calut Savaşı (1260)"
    },
    dogru: "C",
    aciklama: "Yassıçemen (1230): Türkiye Selçukluları (I. Alaeddin Keykubad) vs. Harzemşahlar (Celaleddin Harzemşah). İkisi de Türk devleti. Kösedağ'da ise Moğollar var — tuzak şık."
  },
  // ─── 12 ──────────────────────────────────────────────────────────────────
  {
    id: 12, kategori: "kurulus_savasi", zorluk: "orta",
    soru: "Mustafa Kemal Paşa'nın Sivas Kongresi kararlarını duyurmak amacıyla Sivas'ta çıkarılmasını sağladığı gazete hangisidir?",
    secenekler: {
      A: "İrade-i Milliye",
      B: "Hakimiyet-i Milliye",
      C: "Anadolu Ajansı",
      D: "Ceride-i Resmiye",
      E: "Minber"
    },
    dogru: "A",
    aciklama: "Sivas'ta: İrade-i Milliye. Ankara'ya gelindikten sonra: Hakimiyet-i Milliye. Bu iki gazeteyi karıştırmak klasik ÖSYM tuzağıdır."
  },
  // ─── 13 ──────────────────────────────────────────────────────────────────
  {
    id: 13, kategori: "osmanli_genel", zorluk: "orta",
    soru: "17. yüzyılda yaşanan \"Çınar Vakası\" (Vaka-yı Vakvakiyye) hangi padişah döneminde gerçekleşmiş, niteliği nedir?",
    secenekler: {
      A: "Genç Osman — Yenilik karşıtı ulema isyanı",
      B: "IV. Mehmed — Yeniçerilerin devlet adamlarını ağaca asması",
      C: "III. Ahmed — Patrona Halil ayaklanması",
      D: "I. Mahmud — Celali İsyanı",
      E: "III. Selim — Kabakçı Mustafa İsyanı"
    },
    dogru: "B",
    aciklama: "Çınar Vakası (1656), IV. Mehmed döneminde ayarı düşük akçe üzerine Yeniçerilerin sarayı basıp 30 kadar devlet adamını Sultanahmet Meydanı'ndaki çınara asması olayıdır."
  },
  // ─── 14 ──────────────────────────────────────────────────────────────────
  {
    id: 14, kategori: "savas_taraf", zorluk: "zor",
    soru: "Osmanlı'nın I. Dünya Savaşı'nda toprak kazanmak ve İngiltere'nin sömürge bağlantısını kesmek amacıyla BİZZAT AÇTIĞI taarruz cepheleri hangilerdir?",
    secenekler: {
      A: "Çanakkale — Irak",
      B: "Kafkas — Kanal (Süveyş)",
      C: "Hicaz — Yemen",
      D: "Galiçya — Romanya",
      E: "Suriye — Filistin"
    },
    dogru: "B",
    aciklama: "Osmanlı'nın açtığı iki taarruz cephesi: Kafkas (Bakü petrolleri + Turan ideali) ve Kanal (Mısır'ı geri almak + İngiltere'nin Hindistan yolunu kesmek). Çanakkale ise Müttefiklerin açtığı cephedir."
  },
  // ─── 15 ──────────────────────────────────────────────────────────────────
  {
    id: 15, kategori: "ilkler", zorluk: "orta",
    soru: "Osmanlı Devleti'nde çıkarılan İLK ÖZEL Türkçe gazete hangisidir?",
    secenekler: {
      A: "Takvim-i Vekayi",
      B: "Ceride-i Havadis",
      C: "Tercüman-ı Ahval",
      D: "Tasvir-i Efkâr",
      E: "Volkan"
    },
    dogru: "C",
    aciklama: "Takvim-i Vekayi = ilk resmi (II. Mahmud, 1831). Ceride-i Havadis = ilk yarı resmi (Churchill, 1840). Tercüman-ı Ahval = ilk özel Türkçe gazete (Şinasi + Agâh Efendi, 1860)."
  },
  // ─── 16 ──────────────────────────────────────────────────────────────────
  {
    id: 16, kategori: "ilk_turk", zorluk: "zor",
    soru: "Eski Türk devletlerinde \"Tigin\" unvanlı şehzadeleri yetiştiren tecrübeli eğitmenlere ne ad verilirdi?",
    secenekler: {
      A: "Atabey",
      B: "Lala",
      C: "İnan / Ataman",
      D: "Subaşı",
      E: "Melik"
    },
    dogru: "C",
    aciklama: "İslam öncesi Türklerde şehzade eğitmeni: İnan / Ataman / İnal. Büyük Selçuklu'da: Atabey. Osmanlı'da: Lala. Bu üç terimin hangi döneme ait olduğu klasik ÖSYM sorusudur."
  },
  // ─── 17 ──────────────────────────────────────────────────────────────────
  {
    id: 17, kategori: "padisah_islahat", zorluk: "orta",
    soru: "Fatih Sultan Mehmed döneminde gerçekleşen aşağıdaki fetihlerden hangisi Fatih'e ait DEĞİLDİR?",
    secenekler: {
      A: "Doğu Roma (Bizans) İmparatorluğu'nun yıkılması (1453)",
      B: "Trabzon Rum İmparatorluğu'nun alınması (1461)",
      C: "Mora Despotluğu'nun sonlandırılması (1460)",
      D: "Girit Adası'nın fethedilmesi (1669)",
      E: "Bosna ve Hersek'in alınması (1463)"
    },
    dogru: "D",
    aciklama: "Girit, Fatih döneminde değil; 24 yıl süren kuşatma sonucu IV. Mehmed döneminde (1669) fethedilmiştir. Fatih döneminin temel fetihlerini sayan şıklara Girit'i eklemek klasik çeldiricidir."
  },
  // ─── 18 ──────────────────────────────────────────────────────────────────
  {
    id: 18, kategori: "kurulus_savasi", zorluk: "orta",
    soru: "Amasya Genelgesi'nde (22 Haziran 1919) Kurtuluş Savaşı'nın YÖNTEMİNİ belirten madde hangisidir?",
    secenekler: {
      A: "Vatanın bütünlüğü, milletin bağımsızlığı tehlikededir.",
      B: "İstanbul Hükümeti üzerine aldığı sorumluluğu yerine getirememektedir.",
      C: "Milletin bağımsızlığını yine milletin azim ve kararı kurtaracaktır.",
      D: "Doğu illeri adına Sivas'ta bir kongre toplanacaktır.",
      E: "Askeri ve milli örgütler hiçbir şekilde lağvedilmeyecektir."
    },
    dogru: "C",
    aciklama: "\"Milletin bağımsızlığını yine milletin azim ve kararı kurtaracaktır\" maddesi hem amacı (bağımsızlık) hem de yöntemi (milletin kendi kararı = ulusal egemenlik) ilan etmektedir."
  },
  // ─── 19 ──────────────────────────────────────────────────────────────────
  {
    id: 19, kategori: "dunya_tarihi", zorluk: "orta",
    soru: "II. Dünya Savaşı'nda Almanya'nın İngiltere'yi hava harekâtıyla teslim almayı hedeflediği operasyon hangisidir?",
    secenekler: {
      A: "Barbarossa Harekâtı",
      B: "Kartal Hücumu (İngiltere Muharebesi)",
      C: "Overlord Harekâtı (Normandiya Çıkarması)",
      D: "Pearl Harbour Baskını",
      E: "Maginot Hattı Operasyonu"
    },
    dogru: "B",
    aciklama: "Kartal Hücumu = Almanya'nın İngiltere'ye dev hava bombardımanı. Barbarossa = Rusya seferi. Overlord = Müttefiklerin Fransa çıkarması (1944). Bunları karıştırmak yaygın hatadır."
  },
  // ─── 20 ──────────────────────────────────────────────────────────────────
  {
    id: 20, kategori: "padisah_islahat", zorluk: "zor",
    soru: "II. Mahmud dönemi ıslahatlarından hangisi \"merkezi otoriteyi ve güvenliği artırma\" amacına doğrudan hizmet ETMEZ?",
    secenekler: {
      A: "Yeniçeri Ocağı'nın kaldırılması (Vaka-yı Hayriyye)",
      B: "Sadrazamlık makamının Başvekalet'e dönüştürülmesi",
      C: "Muhtarlık teşkilatının kurulması",
      D: "Pasaport ve mürur tezkeresi uygulamasının getirilmesi",
      E: "Darü'ş-Şura-yı Bab-ı Ali'nin kurulması"
    },
    dogru: "E",
    aciklama: "Darü'ş-Şura-yı Bab-ı Ali kanun tasarısı hazırlayan idari danışma kurumudur; doğrudan güvenlik/askeri merkezi otorite değil, idari bürokrasi reformudur."
  },
  // ─── 21 ──────────────────────────────────────────────────────────────────
  {
    id: 21, kategori: "ilk_turk", zorluk: "zor",
    soru: "İslamiyet'i kitle halinde kabul eden İLK Türk boyu ile İLK Türk devleti eşleştirmesi hangisinde doğrudur?",
    secenekler: {
      A: "Karluklar — İtil (Volga) Bulgar Devleti",
      B: "Oğuzlar — Karahanlılar",
      C: "Kıpçaklar — Gazneliler",
      D: "Uygurlar — Büyük Selçuklu Devleti",
      E: "Peçenekler — Tolunoğulları"
    },
    dogru: "A",
    aciklama: "İslamiyet'i ilk kabul eden boy: Karluklar (Talas Savaşı sonrası). Devlet bazında ilk resmi kabul: İtil Bulgar Devleti (Almış Han). Orta Asya'da kurulan ilk Türk-İslam devleti ise Karahanlılar — bunlar birbirinden farklı sorulardır."
  },
  // ─── 22 ──────────────────────────────────────────────────────────────────
  {
    id: 22, kategori: "antlasma", zorluk: "zor",
    soru: "Osmanlı'nın Batı'da \"en geniş sınırlara ulaştığı\" antlaşma ile Doğu'da \"en geniş sınırlara ulaştığı\" antlaşma sırasıyla hangisidir?",
    secenekler: {
      A: "Bucaş Antlaşması — Ferhat Paşa Antlaşması",
      B: "Vasvar Antlaşması — Kasr-ı Şirin Antlaşması",
      C: "Karlofça Antlaşması — Amasya Antlaşması",
      D: "Passarofça Antlaşması — Nasuh Paşa Antlaşması",
      E: "Bahçesaray Antlaşması — Serav Antlaşması"
    },
    dogru: "A",
    aciklama: "Batı'da en geniş sınır: Bucaş (1672, Polonya ile). Doğu'da en geniş sınır: Ferhat Paşa (1590, Safevilerle). Vasvar, Kasr-ı Şirin bunlardan sonra gelen antlaşmalar olup toprak kaybı söz konusudur."
  },
  // ─── 23 ──────────────────────────────────────────────────────────────────
  {
    id: 23, kategori: "ataturk", zorluk: "orta",
    soru: "Terakkiperver Cumhuriyet Fırkası'nın kapatılmasına yol açan doğrudan gelişme hangisidir?",
    secenekler: {
      A: "Menemen Olayı (Kubilay Krizi)",
      B: "Şeyh Said İsyanı ve Takrir-i Sükûn Kanunu",
      C: "İzmir Suikastı Girişimi",
      D: "Bursa Olayı",
      E: "Razgrad Olayı"
    },
    dogru: "B",
    aciklama: "Şeyh Said İsyanı (1925) sonrasında çıkarılan Takrir-i Sükûn Kanunu ile TCF kapatıldı. Serbest Cumhuriyet Fırkası ise Menemen olayı öncesi kendi kendini feshetti — bu iki partiyi karıştırmak yaygın tuzaktır."
  },
  // ─── 24 ──────────────────────────────────────────────────────────────────
  {
    id: 24, kategori: "padisah_islahat", zorluk: "orta",
    soru: "Osmanlı'da askeri alan DIŞINDA Batı tarzında açılan ilk sivil yükseköğretim ve meslek okulları hangi yüzyılda yoğunlaşmıştır?",
    secenekler: {
      A: "16. Yüzyıl",
      B: "17. Yüzyıl",
      C: "18. Yüzyıl",
      D: "19. Yüzyıl",
      E: "20. Yüzyıl"
    },
    dogru: "D",
    aciklama: "18. yüzyılda Batılılaşma yalnızca askeri alandaydı (Hendesehane vb.). Mülkiye, Mekteb-i Tıbbiye-i Mülkiye gibi sivil okullar Tanzimat ve II. Abdülhamid dönemleri — yani 19. yüzyıl."
  },
  // ─── 25 ──────────────────────────────────────────────────────────────────
  {
    id: 25, kategori: "kurulus_savasi", zorluk: "orta",
    soru: "Mustafa Kemal'in \"Siz orada yalnız düşmanı değil, milletin makus talihini de yendiniz\" telgrafını çektiği komutan ve zafer hangisidir?",
    secenekler: {
      A: "Kazım Karabekir — Doğu Zaferi",
      B: "İsmet İnönü — II. İnönü Zaferi",
      C: "Fevzi Çakmak — Sakarya Zaferi",
      D: "Refet Bele — Aslıhanlar Taarruzu",
      E: "Ali Fuat Cebesoy — Gediz Taarruzu"
    },
    dogru: "B",
    aciklama: "Bu tarihi telgraf II. İnönü Zaferi sonrasında İsmet Paşa'ya çekilmiştir. Sakarya sonrası telgraf farklıdır — iki zaferin telgrafını karıştırmak ÖSYM tuzağıdır."
  },
  // ─── 26 ──────────────────────────────────────────────────────────────────
  {
    id: 26, kategori: "osmanli_genel", zorluk: "orta",
    soru: "Türkiye Selçuklu'da ahilik teşkilatının başında bulunan kişiye ne ad verilirdi?",
    secenekler: {
      A: "Yiğitbaşı",
      B: "Ahi Evran / Ahi Baba",
      C: "Muhtesip",
      D: "Kadı",
      E: "Subaşı"
    },
    dogru: "B",
    aciklama: "Ahi Evran teşkilatın kurucusu; locanın başına Ahi Baba denirdi. Yiğitbaşı iç güvenliği sağlar, Muhtesip çarşı-pazarı denetler — bu iki terim çeldirici olarak sıkça kullanılır."
  },
  // ─── 27 ──────────────────────────────────────────────────────────────────
  {
    id: 27, kategori: "padisah_islahat", zorluk: "zor",
    soru: "Lale Devri (1718–1730) ile ilgili aşağıdakilerden hangisi YANLIŞTIR?",
    secenekler: {
      A: "İlk kez Batı'nın üstünlüğü kabul edilerek Avrupa'ya geçici elçiler gönderildi",
      B: "Askeri alanda köklü yenilikler ve Avrupa tarzı ordular kuruldu",
      C: "İbrahim Müteferrika tarafından ilk Türk matbaası açıldı",
      D: "İlk kez çiçek aşısı uygulandı ve itfaiye (tulumbacılar) ocağı kuruldu",
      E: "1718 Pasarofça ile başlayıp 1730 Patrona Halil İsyanı ile sona erdi"
    },
    dogru: "B",
    aciklama: "Lale Devri'nde ASKERİ ALANDA HİÇBİR YENİLİK YAPILMADI. Kültür, sanat, matbaa ve mimariye odaklanıldı. Askeri ıslahatlar I. Mahmud ile başlar. Bu en sık yanlış yapılan maddedir."
  },
  // ─── 28 ──────────────────────────────────────────────────────────────────
  {
    id: 28, kategori: "kurulus_savasi", zorluk: "zor",
    soru: "Mustafa Kemal Paşa'nın askerlikten istifa ederek \"sivil vatandaş\" sıfatıyla başkanlık yaptığı İLK kongre hangisidir?",
    secenekler: {
      A: "Erzurum Kongresi",
      B: "Sivas Kongresi",
      C: "Balıkesir Kongresi",
      D: "Alaşehir Kongresi",
      E: "Pozantı Kongresi"
    },
    dogru: "A",
    aciklama: "Mustafa Kemal 8-9 Temmuz 1919 gecesi askerlikten istifa etti. Sivil sıfatıyla katıldığı ilk kongre Erzurum Kongresi'dir (23 Temmuz 1919). Sivas daha sonradır."
  },
  // ─── 29 ──────────────────────────────────────────────────────────────────
  {
    id: 29, kategori: "osmanli_genel", zorluk: "zor",
    soru: "1909 Anayasa Değişikliği ile II. Meşrutiyet döneminde getirilen haklardan hangisi I. Meşrutiyet döneminde YOKTU?",
    secenekler: {
      A: "Padişahın meclisi kapatma yetkisinin zorlaştırılması ve sansürün kaldırılması",
      B: "Siyasi partilerin kurulmasına ilk kez izin verilmesi",
      C: "Hükümetin padişaha değil Meclise karşı sorumlu hale getirilmesi",
      D: "Padişahın sürgün yetkisinin tamamen kaldırılması",
      E: "Hepsi"
    },
    dogru: "E",
    aciklama: "1909 değişiklikleriyle tüm bu haklar geldi: partileşme, sansürün kalkması, sürgün yetkisinin bitmesi, hükümetin Meclise karşı sorumluluğu. Gerçek parlamenter sisteme ancak II. Meşrutiyet'te geçildi."
  },
  // ─── 30 ──────────────────────────────────────────────────────────────────
  {
    id: 30, kategori: "kurulus_savasi", zorluk: "orta",
    soru: "23 Nisan 1920'de açılan I. TBMM için aşağıdakilerden hangisi SÖYLENEMEZ?",
    secenekler: {
      A: "Kurucu meclistir (1921 Teşkilat-ı Esasiye'yi yapmıştır)",
      B: "İhtilalci meclistir (İstanbul Hükümeti'ni tanımamıştır)",
      C: "Güçler ayrılığı ilkesini katı biçimde uygulamıştır",
      D: "Meclis Hükümeti sistemini benimsemiştir",
      E: "Siyasi partilere yer vermemiş, gruplar halinde örgütlenmiştir"
    },
    dogru: "C",
    aciklama: "I. TBMM olağanüstü koşullar gereği Güçler BİRLİĞİ ilkesini uyguladı: yasama, yürütme ve yargı (İstiklal Mahkemeleri) yetkilerini bizzat elinde tuttu. Güçler ayrılığı değil, birliği."
  },
  // ─── 31 ──────────────────────────────────────────────────────────────────
  {
    id: 31, kategori: "padisah_islahat", zorluk: "orta",
    soru: "Osmanlı mimarisinde Batı etkisi (Barok/Rokoko) ilk kez hangi dönemde görülmeye başlandı?",
    secenekler: {
      A: "Kuruluş Dönemi",
      B: "Yükselme Dönemi (Klasik Dönem)",
      C: "Lale Devri (III. Ahmed Dönemi)",
      D: "Tanzimat Dönemi",
      E: "II. Abdülhamid Dönemi"
    },
    dogru: "C",
    aciklama: "Batı etkisi (Barok/Rokoko) mimaride Lale Devri ile başlar. İlk örnekler: Nuruosmaniye Camii ve III. Ahmed Çeşmesi. Tanzimat'ta derinleşmiş olsa da ilk görülme Lale Devri'dir."
  },
  // ─── 32 ──────────────────────────────────────────────────────────────────
  {
    id: 32, kategori: "dunya_tarihi", zorluk: "orta",
    soru: "ABD Dışişleri Bakanı'nın adıyla anılan ve Avrupa ülkelerine (Türkiye dahil) büyük ekonomik yardım sağlayan Soğuk Savaş dönemi planı hangisidir?",
    secenekler: {
      A: "Truman Doktrini",
      B: "Marshall Planı",
      C: "Molotov Planı",
      D: "Balfour Deklarasyonu",
      E: "Schuman Bildirisi"
    },
    dogru: "B",
    aciklama: "Ekonomik yardım paketi = Marshall Planı (Dışişleri Bakanı Marshall, 1947). Askeri-siyasi destek = Truman Doktrini. Bu ikisini karıştırmak çok yaygın hatadır."
  },
  // ─── 33 ──────────────────────────────────────────────────────────────────
  {
    id: 33, kategori: "osmanli_genel", zorluk: "orta",
    soru: "19. yüzyılda \"Mısır Meselesi\" ile Osmanlı'ya isyan eden Mısır Valisi kimdir?",
    secenekler: {
      A: "Kavalalı Mehmed Ali Paşa",
      B: "Tepedelenli Ali Paşa",
      C: "Cezzar Ahmed Paşa",
      D: "Alemdar Mustafa Paşa",
      E: "Midhat Paşa"
    },
    dogru: "A",
    aciklama: "Kavalalı Mehmed Ali Paşa, Mora'ya karşılık Girit ve Suriye istedi; ordusuyla Kütahya'ya kadar geldi. Tepedelenli Ali Paşa ise Rumeli'de ayrı bir isyancıdır — iki kişiyi karıştırmak klasik tuzaktır."
  },
  // ─── 34 ──────────────────────────────────────────────────────────────────
  {
    id: 34, kategori: "ataturk", zorluk: "zor",
    soru: "Türkiye Cumhuriyeti'nin Batı hukuk sisteminden aldığı kanun eşleştirmelerinden hangisi YANLIŞTIR?",
    secenekler: {
      A: "Medeni Kanun → İsviçre",
      B: "Ceza Kanunu → İtalya",
      C: "Borçlar Kanunu → İsviçre",
      D: "Ceza Muhakemeleri Usulü Kanunu → Almanya",
      E: "Ticaret Kanunu → İngiltere"
    },
    dogru: "E",
    aciklama: "Türk Ticaret Kanunu ve Deniz Ticareti Kanunu Almanya ve İsviçre hukukundan esinlenilmiştir, İngiltere'den değil. İngiltere'den alınan bir kanun yoktur."
  },
  // ─── 35 ──────────────────────────────────────────────────────────────────
  {
    id: 35, kategori: "osmanli_genel", zorluk: "orta",
    soru: "Osmanlı'da kağıt paraya geçişin ilk adımı olan ve Abdülmecid döneminde basılan ilk kağıt para/tahvil hangisidir?",
    secenekler: {
      A: "Akçe",
      B: "Sultani",
      C: "Kaime-i Mutebere",
      D: "Sikke-i Hasene",
      E: "Mecidiye"
    },
    dogru: "C",
    aciklama: "1840'ta Abdülmecid döneminde basılan ilk kağıt para: Kaime (Kaime-i Mutebere). Mecidiye ise aynı dönemde basılan gümüş sikkenin adıdır — çeldirici şık."
  },
  // ─── 36 ──────────────────────────────────────────────────────────────────
  {
    id: 36, kategori: "ilk_turk", zorluk: "zor",
    soru: "Büyük Selçuklu'da devletin mali işlerini denetleyen ve başında \"Müstevfi\"nin bulunduğu divan hangisidir?",
    secenekler: {
      A: "Divan-ı Saltanat",
      B: "Divan-ı İstifa",
      C: "Divan-ı İşraf",
      D: "Divan-ı Tuğra (İnşa)",
      E: "Divan-ı Arz"
    },
    dogru: "B",
    aciklama: "Divan-ı İstifa = mali işler (başkanı: Müstevfi). Divan-ı İşraf = teftiş. Divan-ı Tuğra = yazışmalar. Divan-ı Arz = askeri işler. Bu divan isimlerini ve görevlerini ezberlememek ciddi puan kaybına yol açar."
  },
  // ─── 37 ──────────────────────────────────────────────────────────────────
  {
    id: 37, kategori: "antlasma", zorluk: "orta",
    soru: "Kurtuluş Savaşı'nın askeri safhasını bitiren belge ile TC'nin kurucu tapusu sayılan antlaşma sırasıyla hangisidir?",
    secenekler: {
      A: "Amasya Protokolü — Gümrü Antlaşması",
      B: "Mudanya Mütarekesi — Lozan Barış Antlaşması",
      C: "Mondros Mütarekesi — Sevr Antlaşması",
      D: "Ankara Antlaşması — Montrö Sözleşmesi",
      E: "Kars Antlaşması — Moskova Antlaşması"
    },
    dogru: "B",
    aciklama: "Askeri safhayı bitiren: Mudanya Mütarekesi (1922). Bağımsızlığı tescilleyen barış: Lozan (1923). Mondros-Sevr ise Osmanlı'nın yenilgi belgesidir — tuzak şık."
  },
  // ─── 38 ──────────────────────────────────────────────────────────────────
  {
    id: 38, kategori: "padisah_islahat", zorluk: "orta",
    soru: "Osmanlı tarihinde \"Üç Padişah Yılı\" olarak bilinen 1876'da sırasıyla tahta çıkan hükümdarlar kimlerdir?",
    secenekler: {
      A: "Abdülmecid — II. Mahmud — III. Selim",
      B: "Sultan Abdülaziz — V. Murad — II. Abdülhamid",
      C: "V. Mehmed Reşad — VI. Mehmed Vahdettin — II. Abdülhamid",
      D: "III. Ahmed — I. Mahmud — III. Mustafa",
      E: "IV. Mehmed — II. Süleyman — II. Ahmed"
    },
    dogru: "B",
    aciklama: "1876: Abdülaziz tahttan indirildi → V. Murad (93 gün) → II. Abdülhamid. V. Murad'ın çok kısa süre kalması ve ardından II. Abdülhamid'in tahta çıkması net bilinmeli."
  },
  // ─── 39 ──────────────────────────────────────────────────────────────────
  {
    id: 39, kategori: "ataturk", zorluk: "orta",
    soru: "Atatürk döneminde 1933'te kurulan, I. Beş Yıllık Sanayi Planı kapsamında tekstil ve kimya gibi alanlarda fabrika kurup işleten dev kamu kuruluşu hangisidir?",
    secenekler: {
      A: "Sümerbank",
      B: "Etibank",
      C: "Türkiye İş Bankası",
      D: "Ziraat Bankası",
      E: "Sanayi ve Maadin Bankası"
    },
    dogru: "A",
    aciklama: "Sümerbank (1933) = tekstil/kimya fabrikaları. Etibank = maden işletmeleri. Türkiye İş Bankası ise 1923'te kurulmuş özel banka — bunları karıştırmak yaygın hatadır."
  },
  // ─── 40 ──────────────────────────────────────────────────────────────────
  {
    id: 40, kategori: "savas_taraf", zorluk: "orta",
    soru: "Akkoyunlu Devleti'nin Osmanlı tarafından mağlup edildiği savaş hangisidir?",
    secenekler: {
      A: "Çaldıran Savaşı",
      B: "Otlukbeli Savaşı",
      C: "Turnadağ Savaşı",
      D: "Ridaniye Savaşı",
      E: "Mercidabık Savaşı"
    },
    dogru: "B",
    aciklama: "Fatih Sultan Mehmed, 1473 Otlukbeli Savaşı'nda Uzun Hasan'ı yendi. Çaldıran ise Osmanlı-Safevi savaşıdır — Akkoyunlu ile Safevi'yi karıştırmak klasik tuzaktır."
  },
  // ─── 41 ──────────────────────────────────────────────────────────────────
  {
    id: 41, kategori: "ilkler", zorluk: "orta",
    soru: "Kurtuluş Savaşı sırasında Milli Mücadele ALEYHİNDE yayın yapan basın organı hangisidir?",
    secenekler: {
      A: "Minber",
      B: "Öğüt",
      C: "Peyam-ı Sabah",
      D: "Albayrak",
      E: "Açıksöz"
    },
    dogru: "C",
    aciklama: "Zararlı (aleyhte) basın: Peyam-ı Sabah (Ali Kemal), Alemdar, Türkçe İstanbul. Yararlı (lehte) basın: Albayrak, Öğüt, Açıksöz. Ali Kemal'in Boris Johnson'ın büyükbabası olduğu bilinmektedir."
  },
  // ─── 42 ──────────────────────────────────────────────────────────────────
  {
    id: 42, kategori: "kurulus_savasi", zorluk: "zor",
    soru: "Misak-ı Millî'de (28 Ocak 1920) halk oylaması (plebisit) yapılması TEKLİF EDİLMEYEN bölge hangisidir?",
    secenekler: {
      A: "Elviye-i Selase (Kars, Ardahan, Batum)",
      B: "Batı Trakya",
      C: "Arap Toprakları (Osmanlı kontrolündeki)",
      D: "Boğazlar ve İstanbul",
      E: "Anadolu'nun işgal edilmemiş Türk bölgeleri"
    },
    dogru: "D",
    aciklama: "Plebisit istenen yerler: Elviye-i Selase, Batı Trakya, Arap memleketleri. İstanbul ve Boğazlar için oylama değil; \"güvenlik sağlandığında dünya ticaretine açılabilir\" kararı alındı."
  },
  // ─── 43 ──────────────────────────────────────────────────────────────────
  {
    id: 43, kategori: "osmanli_genel", zorluk: "orta",
    soru: "Osmanlı'da Hristiyan tebaadan çocuk toplanıp Türk-İslam kültürüyle yetiştirilerek ordu ve bürokraside görevlendirilmesine ne ad verilirdi?",
    secenekler: {
      A: "İltizam Sistemi",
      B: "Devşirme Sistemi",
      C: "Pençik Sistemi",
      D: "Dirlik Sistemi",
      E: "Malikane Sistemi"
    },
    dogru: "B",
    aciklama: "Devşirme = Hristiyan tebaadan çocuk toplanması. Pençik = savaş esirlerinin 1/5'inin orduya alınması. Bu iki terimi birbirine karıştırmak ÖSYM'nin klasik sorusudur."
  },
  // ─── 44 ──────────────────────────────────────────────────────────────────
  {
    id: 44, kategori: "dunya_tarihi", zorluk: "orta",
    soru: "1974 Kıbrıs Barış Harekâtı'nda Türkiye Cumhuriyeti Başbakanı ve Dışişleri Bakanı eşleştirmesi hangisinde doğrudur?",
    secenekler: {
      A: "Süleyman Demirel — İhsan Sabri Çağlayangil",
      B: "Bülent Ecevit — Turan Güneş",
      C: "Alparslan Türkeş — Necmettin Erbakan",
      D: "Turgut Özal — Mesut Yılmaz",
      E: "Adnan Menderes — Fatin Rüştü Zorlu"
    },
    dogru: "B",
    aciklama: "1974 harekâtı: Başbakan Bülent Ecevit (CHP-MSP koalisyonu), Dışişleri Bakanı Turan Güneş (\"Ayşe tatile çıksın\" parolasının ismi buradan gelir — kızının adı)."
  },
  // ─── 45 ──────────────────────────────────────────────────────────────────
  {
    id: 45, kategori: "osmanli_genel", zorluk: "orta",
    soru: "Duraklama Dönemi'nde Saray'a ŞARTLAR SUNARAK sadrazamlığı kabul eden ve geçici istikrar sağlayan devlet adamı kimdir?",
    secenekler: {
      A: "Kuyucu Murad Paşa",
      B: "Tarhuncu Ahmed Paşa",
      C: "Köprülü Mehmed Paşa",
      D: "Fazıl Ahmed Paşa",
      E: "Merzifonlu Kara Mustafa Paşa"
    },
    dogru: "C",
    aciklama: "Köprülü Mehmed Paşa, IV. Mehmed'in annesi Turhan Sultan'a can güvenliği ve tam yetki şartıyla sadrazamlığı kabul etti. Osmanlı tarihinde şart koşarak sadrazam olan tek kişidir."
  },
  // ─── 46 ──────────────────────────────────────────────────────────────────
  {
    id: 46, kategori: "kurulus_savasi", zorluk: "zor",
    soru: "Mustafa Kemal'in katıldığı savaşlar kronolojik sıraya dizildiğinde en başta hangisi yer alır?",
    secenekler: {
      A: "Çanakkale Savaşları (19. Tümen Komutanı)",
      B: "Trablusgarp Savaşı (Gazeteci Şerif kimliğiyle)",
      C: "Kafkas Cephesi (16. Kolordu Komutanı)",
      D: "Suriye-Filistin Cephesi (Yıldırım Orduları Grup Komutanı)",
      E: "Sakarya Meydan Muharebesi (Başkomutan)"
    },
    dogru: "B",
    aciklama: "Sıralama: Trablusgarp (1911) → Balkan Savaşları (1912) → Çanakkale (1915) → Kafkas (1916) → Suriye-Filistin (1918) → Sakarya (1921). Trablusgarp ilktir."
  },
  // ─── 47 ──────────────────────────────────────────────────────────────────
  {
    id: 47, kategori: "ataturk", zorluk: "zor",
    soru: "Aşağıdaki inkılaplardan hangisi Cumhuriyetin ilanından (29 Ekim 1923) ÖNCE gerçekleşmiştir?",
    secenekler: {
      A: "Halifeliğin kaldırılması",
      B: "Şer'iye ve Evkaf Vekaleti'nin kaldırılması",
      C: "Saltanatın kaldırılması",
      D: "Medeni Kanun'un kabulü",
      E: "Tevhid-i Tedrisat Kanunu"
    },
    dogru: "C",
    aciklama: "Saltanat 1 Kasım 1922'de kaldırıldı — Cumhuriyet ilanından (1923) ve Halifeliğin kaldırılmasından (1924) öncedir. Lozan'a tek temsilci gönderebilmek için önce saltanat kaldırılmıştır."
  },
  // ─── 48 ──────────────────────────────────────────────────────────────────
  {
    id: 48, kategori: "ilk_turk", zorluk: "orta",
    soru: "Türk mimari sanatının ilk örnekleri (tapınak, saray, duvar resmi/fresk) hangi Türk devleti döneminde verilmeye başlandı?",
    secenekler: {
      A: "Asya Hun Devleti",
      B: "Göktürkler",
      C: "Uygurlar",
      D: "Hazarlar",
      E: "Kırgızlar"
    },
    dogru: "C",
    aciklama: "Maniheizm'i kabul edip yerleşik hayata geçen ilk Türk devleti Uygurlar'dır. Bu nedenle ilk mimari, tapınak, saray ve fresk örnekleri onlara aittir."
  },
  // ─── 49 ──────────────────────────────────────────────────────────────────
  {
    id: 49, kategori: "padisah_islahat", zorluk: "orta",
    soru: "Fatih döneminde İstanbul'a davet edilen, Sahn-ı Seman medreselerinin müfredatını hazırlayan ve gnomon hesaplamaları yapan ünlü astronom-matematikçi kimdir?",
    secenekler: {
      A: "Ali Kuşçu",
      B: "Takiyüddin Efendi",
      C: "Akşemseddin",
      D: "Katip Çelebi",
      E: "Evliya Çelebi"
    },
    dogru: "A",
    aciklama: "Ali Kuşçu, Akkoyunlu elçisi sıfatıyla İstanbul'a geldi; Fatih'in hayranlığını kazanıp kaldı. Takiyüddin ise II. Selim döneminde rasathane kuran astronomdur — iki ismi karıştırmak yaygın hatadır."
  },
  // ─── 50 ──────────────────────────────────────────────────────────────────
  {
    id: 50, kategori: "dunya_tarihi", zorluk: "orta",
    soru: "1991'de SSCB'nin dağılmasıyla bağımsız olan Azerbaycan'da \"Biz bir millet, iki devletiz\" söyleminin mimarı olan cumhurbaşkanı kimdir?",
    secenekler: {
      A: "Ebulfeyz Elçibey",
      B: "Nursultan Nazarbayev",
      C: "Muhammed Emin Resulzade",
      D: "Rauf Denktaş",
      E: "Sadık Ahmet"
    },
    dogru: "A",
    aciklama: "Azerbaycan'ın bağımsızlık mücadelesinin önderi ve \"Biz bir millet, iki devletiz\" sözünün mimarı Cumhurbaşkanı Ebulfeyz Elçibey'dir. Resulzade ise 1918 Azerbaycan Cumhuriyeti'nin kurucusudur."
  },
  // ─── 51 ──────────────────────────────────────────────────────────────────
  {
    id: 51, kategori: "ilkler", zorluk: "zor",
    soru: "Osmanlı'da 'devşirme' sisteminin temel amacını en doğru biçimde açıklayan seçenek hangisidir?",
    secenekler: {
      A: "Hristiyan nüfusu Müslümanlaştırarak demografik dönüşümü hızlandırmak",
      B: "Padişaha bağlı, köklü Türk-Müslüman ailelerden bağımsız bir askeri-bürokratik sınıf oluşturmak",
      C: "Yeniçeri ordusunu dini açıdan homojen tutarak isyanları önlemek",
      D: "Avrupa'dan gelişmiş askeri teknikleri öğrenecek yetenekli gençler yetiştirmek",
      E: "Osmanlı'nın nüfus açısından zayıf kalan sınır bölgelerini iskân etmek"
    },
    dogru: "B",
    aciklama: "Devşirme, padişaha mutlak sadakatla bağlı, köklü Türk ailelerinden bağımsız bir sınıf yaratmayı amaçlıyordu. Bu sayede hem ordu (Yeniçeri) hem bürokrasi (sadrazamlar dahil) padişaha muhtaç ve sadık kalıyordu. A tuzak görünse de asıl amaç değil."
  },
  // ─── 52 ──────────────────────────────────────────────────────────────────
  {
    id: 52, kategori: "ilkler", zorluk: "orta",
    soru: "Osmanlı'da 'müsadere' uygulaması aşağıdakilerden hangisini ifade eder?",
    secenekler: {
      A: "Devlet memurlarının özel mülklerini devlete kiralaması",
      B: "Savaş ganimetinin beşte birinin hazineye aktarılması (pençik)",
      C: "Padişahın vefat eden veya görevden alınan üst düzey devlet adamlarının servetine el koyması",
      D: "Gayrımüslimlerden alınan özel cizye vergisi sistemi",
      E: "Tımar sahibi askerlerin gelirinin bir bölümünü hazineye ödemesi"
    },
    dogru: "C",
    aciklama: "Müsadere, sadrazam ve vezirler gibi üst düzey devlet adamları görevden alındığında ya da öldüğünde servetlerinin hazineye el konulmasıdır. Bu uygulama servet birikimine engel olurken bürokrasiyi tamamen padişaha bağımlı kıldı."
  },
  // ─── 53 ──────────────────────────────────────────────────────────────────
  {
    id: 53, kategori: "ilkler", zorluk: "zor",
    soru: "Osmanlı'da devşirme sistemine alınma için hangi koşul YANLIŞ verilmiştir?",
    secenekler: {
      A: "Devşirilenler Hristiyan olmalıydı",
      B: "Devşirilme ağırlıklı olarak yalnızca Anadolu'daki köylerden yapılırdı",
      C: "Devşirilenler çocuk ya da genç yaşta alınarak İstanbul'a getirilirdi",
      D: "Devşirilenler zeki ve fiziksel açıdan sağlıklı seçilirdi",
      E: "Evli olmamak devşirme için aranan bir koşuldu"
    },
    dogru: "B",
    aciklama: "Devşirme ağırlıklı olarak Rumeli (Balkanlar) vilayetlerinden yapılırdı. Anadolu halkı Türk-Müslüman olduğundan devşirmeye alınmazdı; Anadolu kökenli devşirme son derece nadirdi."
  },
  // ─── 54 ──────────────────────────────────────────────────────────────────
  {
    id: 54, kategori: "ilkler", zorluk: "orta",
    soru: "Osmanlı'da 'tımar' sistemi ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
    secenekler: {
      A: "Tımar sahibi sipahiler mülkiyeti elinde bulunduran toprak sahipleriydi",
      B: "Tımar gelirleri karşılığında belirli sayıda atlı asker (cebelü) beslemek zorunluydu",
      C: "Tımarlar yalnızca Müslüman Türklere verilirdi",
      D: "Tımar sistemi Tanzimat Fermanı ile aniden ve tamamen kaldırıldı",
      E: "Tımar sistemi Osmanlı'nın kuruluşunda Orhan Bey tarafından yaygınlaştırıldı"
    },
    dogru: "B",
    aciklama: "Tımarlı sipahi, arazinin gelirine karşılık belirli sayıda silahlı atlı (cebelü) beslemek ve savaşa bunlarla katılmak zorundaydı. Mülkiyet devlette kalırdı (A yanlış); gayrimüslimler de tımar alabilirdi (C yanlış); sistemin çözülmesi 17. yy'dan itibaren yavaş gerçekleşti (D yanlış)."
  },
  // ─── 55 ──────────────────────────────────────────────────────────────────
  {
    id: 55, kategori: "ilkler", zorluk: "zor",
    soru: "Osmanlı'da 'kul sistemi' hangi temel özelliği ifade eder?",
    secenekler: {
      A: "Köylülerin toprağa bağlı olarak beylere hizmet etmesi",
      B: "Yüksek devlet görevlilerinin padişahın hukuki mülkü ve mutlak hizmetkârı sayılması",
      C: "Yeniçerilerin esnaf loncalarıyla bütünleşerek ticarete katılması",
      D: "Osmanlı'nın fethedilen topraklarda yerel beyleri görevde tutması",
      E: "Müsadereye tabi olan devlet görevlileri sınıfının tanımlanması"
    },
    dogru: "B",
    aciklama: "\"Kul\" kavramı, padişaha hukuki açıdan mutlak bağımlılığı simgeler. Sadrazam da dahil tüm yüksek görevliler padişahın kullarıydı; bu statü onlara geniş güç tanırken padişah karşısında savunmasız bırakıyordu. İngiltere soylularının yasalar önünde güvencesi gibi bir koruma yoktu."
  },
  // ─── 56 ──────────────────────────────────────────────────────────────────
  {
    id: 56, kategori: "ilkler", zorluk: "orta",
    soru: "Osmanlı'da 'millet sistemi' aşağıdakilerden hangisini sağlıyordu?",
    secenekler: {
      A: "Osmanlı tebaasının tamamını Sünni İslam çerçevesinde eşit vatandaşlıkta birleştirmeyi",
      B: "Farklı din mensuplarının kendi iç işlerini dini liderlik altında özerge yönetmesini",
      C: "Hristiyan ve Yahudilerin yönetici sınıfa dahil edilmesini",
      D: "Yabancı tüccarlara tanınan kapitülasyonların din temelinde düzenlenmesini",
      E: "Azınlıkların İstanbul'dan atanan kadılar tarafından yönetilmesini"
    },
    dogru: "B",
    aciklama: "Millet sistemi, Rum, Ermeni, Yahudi gibi toplulukların kendi patrik ya da hahamları aracılığıyla dinî, eğitim ve kişisel statü gibi alanlarda kendi kendilerini yönetmesine olanak tanıdı. Osmanlı bu sayede geniş toprakları nispeten düşük maliyetle idare etti."
  },
  // ─── 57 ──────────────────────────────────────────────────────────────────
  {
    id: 57, kategori: "ilkler", zorluk: "zor",
    soru: "Osmanlı'yı diğer Sünni İslam devletlerinden ayıran en belirgin yönetimsel özellik hangisidir?",
    secenekler: {
      A: "Padişahın aynı zamanda halife sıfatını taşıması",
      B: "Sünni İslam'ı resmi devlet dini olarak benimsemesi",
      C: "Şeriatın yanı sıra padişah iradesinden kaynaklanan örfi/kanun hukukunun da uygulanması",
      D: "Devşirme sistemiyle Hristiyanların doğrudan devlet yönetimine katılması",
      E: "Yeniçeri ordusunun paralı askerlerden oluşması"
    },
    dogru: "C",
    aciklama: "Osmanlı, şeriatın yanı sıra Fatih ve Kanuni'nin kanunnamelerinde somutlaşan örfi/kanuni hukuku da uyguluyordu. Bu ikili yapı diğer Sünni devletlerden temel ayrımı oluşturuyordu; ulemanın yetkisi belirli alanlarda padişah iradesiyle sınırlanabiliyordu."
  },
  // ─── 58 ──────────────────────────────────────────────────────────────────
  {
    id: 58, kategori: "antlasma", zorluk: "zor",
    soru: "Osmanlı'nın Avusturya ile ilk kez eşit statüde müzakere masasına oturduğu antlaşma hangisidir?",
    secenekler: {
      A: "Karlofça Antlaşması (1699)",
      B: "Zitvatorok Antlaşması (1606)",
      C: "Pasarofça Antlaşması (1718)",
      D: "Belgrad Antlaşması (1739)",
      E: "Edirne Antlaşması (1713)"
    },
    dogru: "B",
    aciklama: "Zitvatorok (1606), Avusturya arşidükünün artık Osmanlı padişahına haraç ödemeyeceğini ve iki hükümdarın eşit sayılacağını belirledi. Bu, Osmanlı'nın 'üstün taraf' pozisyonundan vazgeçtiğinin ilk resmi işaretiydi."
  },
  // ─── 59 ──────────────────────────────────────────────────────────────────
  {
    id: 59, kategori: "antlasma", zorluk: "orta",
    soru: "Karlofça Antlaşması (1699) Osmanlı tarihi açısından hangi açıdan bir dönüm noktasıdır?",
    secenekler: {
      A: "Rusya ile imzalanan ilk barış antlaşması olması",
      B: "Osmanlı'nın Avrupalı devletlere büyük toprak kaybettiği ilk antlaşma olması",
      C: "Osmanlı'nın Avrupalı devletlerle ilk kez eşit statüde masaya oturması",
      D: "Kapsamlı diplomatik ilişkilerin Batı ile başladığı ilk antlaşma olması",
      E: "İngiltere'nin Osmanlı-Avusturya ilişkisine ilk kez arabulucu olarak girmesi"
    },
    dogru: "B",
    aciklama: "Karlofça'da Osmanlı; Macaristan'ın büyük bölümünü, Transilvanya'yı ve Mora'yı kaybetti. II. Viyana kuşatmasının (1683) bozgunuyla başlayan gerilemenin hukuki sonucuydu. Avrupa'ya büyük toprak kayıplarının başlangıcını simgeler."
  },
  // ─── 60 ──────────────────────────────────────────────────────────────────
  {
    id: 60, kategori: "antlasma", zorluk: "zor",
    soru: "Hünkâr İskelesi Antlaşması'nı (1833) diğer Osmanlı antlaşmalarından ayıran temel özellik nedir?",
    secenekler: {
      A: "Osmanlı'nın Rusya'ya ilk kez toprak kaptığı antlaşmadır",
      B: "Rusya'ya Boğazları Osmanlı'nın düşmanlarına karşı kapatma hakkı tanıyan madde içerir",
      C: "Osmanlı-Rus ilişkisinin ilk resmi dostluk antlaşmasıdır",
      D: "İngiltere ve Fransa'nın garantörlüğünde imzalanmıştır",
      E: "Osmanlı'nın iç meselesi sayılan Kavalalı isyanını uluslararası boyuta taşımıştır"
    },
    dogru: "B",
    aciklama: "Hünkâr İskelesi, Kavalalı Mehmed Ali Paşa isyanına karşı Rusya'nın yardımı karşılığında imzalandı. Antlaşma, savaş durumunda Rusya'nın talebiyle Boğazların diğer devletlere kapatılmasını öngörüyordu. Bu durum İngiltere ve Fransa'yı derinden rahatsız etti; 1841 Londra Boğazlar Sözleşmesiyle kısmen düzeltildi."
  },
  // ─── 61 ──────────────────────────────────────────────────────────────────
  {
    id: 61, kategori: "antlasma", zorluk: "orta",
    soru: "Paris Antlaşması'nın (1856) Osmanlı açısından sağladığı en önemli kazanım hangisidir?",
    secenekler: {
      A: "Kapitülasyonların tamamen kaldırılması",
      B: "Osmanlı'nın Avrupa devletler hukukuna eşit statüde dahil edilmesi",
      C: "Müslüman ve gayrimüslimler arasındaki hukuki eşitsizliğin tamamen giderilmesi",
      D: "Kırım'ın Osmanlı'ya geri verilmesi",
      E: "Rusya'nın Osmanlı iç işlerine müdahalesinin tamamen engellenmesi"
    },
    dogru: "B",
    aciklama: "Paris Antlaşması, Osmanlı'yı resmi olarak Avrupa devletler ailesine kattı; büyük devletler Osmanlı toprak bütünlüğünü garanti altına aldı. Ancak bu garanti, Avrupalıların iç reformları denetleme hakkıyla birlikte geldi. Kapitülasyonlar kaldırılmadı (A yanlış); Kırım Osmanlı'ya verilmedi (D yanlış)."
  },
  // ─── 62 ──────────────────────────────────────────────────────────────────
  {
    id: 62, kategori: "antlasma", zorluk: "zor",
    soru: "Berlin Antlaşması'nın (1878) San Stefano'dan temel farkı nedir?",
    secenekler: {
      A: "Berlin'de Osmanlı-Rus Savaşı resmen sona erdi; San Stefano'da savaş hâlâ sürmekteydi",
      B: "San Stefano'da öngörülen büyük Bulgaristan devleti Berlin'de üçe bölünerek küçüldü",
      C: "Berlin'de Rusya Balkanlardaki nüfuzunu tamamen yitirdi",
      D: "İngiltere, Berlin'de Osmanlı'yı tamamen destekledi ve toprak kayıplarını sıfırladı",
      E: "Sırbistan ve Romanya bağımsızlıklarını San Stefano'da değil Berlin'de kazandı"
    },
    dogru: "B",
    aciklama: "San Stefano'da Rusya'nın dayattığı büyük Bulgaristan devleti, İngiltere ve Avusturya-Macaristan'ın itirazıyla Berlin'de küçültüldü; Bulgaristan, Doğu Rumeli ve Makedonya olarak üçe bölündü. İngiltere Berlin'de Osmanlı'yı kısmen destekledi ama Kıbrıs'ı aldı (D yanlış)."
  },
  // ─── 63 ──────────────────────────────────────────────────────────────────
  {
    id: 63, kategori: "antlasma", zorluk: "zor",
    soru: "I. Balkan Savaşı sonunda imzalanan Londra Antlaşması (1913) ile Osmanlı hangi toprakları kaybetti?",
    secenekler: {
      A: "Yalnızca Batı Trakya ve Ege adaları",
      B: "Midye-Enez hattının batısındaki tüm Avrupa toprakları ile Girit; Arnavutluk bağımsızlığını ilan etti",
      C: "Yalnızca Makedonya ve Edirne",
      D: "Tüm Balkan ve Ege toprakları; İstanbul da geçici olarak tahliye edildi",
      E: "Girit ve Rodos adaları; Balkan karaları sonraki savaşlara kaldı"
    },
    dogru: "B",
    aciklama: "Londra Antlaşması ile Osmanlı, Midye-Enez hattının batısındaki toprakları ve Girit'i hukuken teslim etti. Arnavutluk bağımsızlığını ilan etti. Edirne Bulgaristan'a geçti. Ancak II. Balkan Savaşı'nda (Bükreş Antlaşması, 1913) Edirne ve Kırklareli geri alındı."
  },
  // ─── 64 ──────────────────────────────────────────────────────────────────
  {
    id: 64, kategori: "antlasma", zorluk: "orta",
    soru: "Islahat Fermanı'nın (1856) Tanzimat Fermanı'ndan (1839) temel farkı nedir?",
    secenekler: {
      A: "Islahat Fermanı daha kapsamlı ekonomik reformları içerir",
      B: "Islahat Fermanı yalnızca Müslüman halka yönelik düzenlemeler içerir",
      C: "Islahat Fermanı özellikle gayrimüslim tebaanın haklarını genişletmek için çıkarıldı",
      D: "Tanzimat dış baskıyla; Islahat ise Osmanlı'nın kendi iradesiyle ilan edildi",
      E: "Islahat Fermanı Kanun-ı Esasi'nin doğrudan ön belgesi niteliğindedir"
    },
    dogru: "C",
    aciklama: "Islahat Fermanı, Kırım Savaşı sonrasında İngiltere ve Fransa'nın baskısıyla çıkarıldı. Temel amacı Müslüman-gayrimüslim farkını azaltmaktı: askerlik, devlet memurluğu, mülk edinme, okul açma haklarında gayrimüslimlere özel güvenceler tanıdı."
  },
  // ─── 65 ──────────────────────────────────────────────────────────────────
  {
    id: 65, kategori: "savas_taraf", zorluk: "orta",
    soru: "Malazgirt Savaşı'nın (1071) Türk tarihi açısından en temel önemi nedir?",
    secenekler: {
      A: "Anadolu'nun kesin ve kalıcı olarak Türk yurdu haline gelmesi",
      B: "Bizans İmparatorluğu'nun sona ermesi ve Türklerin İstanbul'u alması",
      C: "Anadolu'nun Türk akınlarına ve kalıcı yerleşimine kapılarının açılması",
      D: "İslamiyet'in Anadolu'da egemen din olarak yerleşmesi",
      E: "Bizans'ın müttefiki Haçlıların Anadolu'dan kovulması"
    },
    dogru: "C",
    aciklama: "Malazgirt, Anadolu'nun kapılarını Türklere açtı; kalıcı yerleşim ve Türkleşme ise izleyen yüzyıllarda gerçekleşti. \"Kesin ve kalıcı\" ifadesi yanıltıcıdır — bu ayrımı Miryokefalon (1176) simgeler. A tuzak şıktır."
  },
  // ─── 66 ──────────────────────────────────────────────────────────────────
  {
    id: 66, kategori: "savas_taraf", zorluk: "zor",
    soru: "Birinci Haçlı Seferi'nin (1096-1099) başarıya ulaşmasında belirleyici olan temel etken nedir?",
    secenekler: {
      A: "Türk kuvvetlerinin Haçlılarla ittifak kurarak Bizans'a karşı savaşması",
      B: "Haçlı Seferleri, Selçukluların bölünme dönemine rastladığından birleşik Müslüman savunması oluşturulamadı",
      C: "Türk kuvvetlerinin I. Haçlı Seferi'ni tamamen püskürttüğü ve ilerlemelerini durdurduğu",
      D: "Haçlıların deniz gücü sayesinde Akdeniz kıyılarını tam kontrolü altına alması",
      E: "Papa'nın tüm Avrupa hristiyanlarını ortak komuta altında örgütlemesi"
    },
    dogru: "B",
    aciklama: "I. Haçlı Seferi geldiğinde Büyük Selçuklular parçalanmış; Suriye'deki küçük Türk beylikleri birleşik hareket edemedi. Bizans da yardım talep etmişti. Haçlılar Kudüs'ü 1099'da ele geçirdi ve dört Haçlı devleti kuruldu."
  },
  // ─── 67 ──────────────────────────────────────────────────────────────────
  {
    id: 67, kategori: "savas_taraf", zorluk: "orta",
    soru: "Kösedağ Savaşı'nın (1243) Anadolu Türk tarihine etkisi nedir?",
    secenekler: {
      A: "Anadolu tamamen Moğol egemenliğine girmiş; Türkler bölgeden kovulmuştur",
      B: "Anadolu Selçukluları İlhanlılara yenilmiş; Selçuklu gücü erilemiş ve küçük Türk beylikleri güçlenmiştir",
      C: "Moğol tehdidi karşısında Türkler Anadolu'yu terk ederek Orta Asya'ya geri çekilmiştir",
      D: "Bu savaşla Osmanlı Devleti'nin kuruluşu birkaç yüzyıl gecikmiştir",
      E: "Kösedağ, Türklerin kesin zaferini simgeler; Anadolu'daki Moğol etkisi bu savaşla bitti"
    },
    dogru: "B",
    aciklama: "Kösedağ'da Selçuklular İlhanlılara yenildi; Selçuklu otoritesi eridi. İlhanlı baskısı altında Karamanoğulları, Germiyanoğulları, Osmanoğulları gibi küçük Türk beylikleri bağımsızlaştı. Osmanlı bu ortamda yükseldi."
  },
  // ─── 68 ──────────────────────────────────────────────────────────────────
  {
    id: 68, kategori: "savas_taraf", zorluk: "zor",
    soru: "Varna Savaşı'nın (1444) Osmanlı tarihi açısından önemi nedir?",
    secenekler: {
      A: "Osmanlı'nın Balkanlarda kazandığı ilk büyük zaferi simgeler",
      B: "Batı'nın Osmanlı'yı Balkanlar'dan atmak için düzenlediği son büyük Haçlı girişiminin püskürtüldüğünü gösterir",
      C: "Fatih Mehmed'in tahta geçmeden önce kazandığı ilk büyük zaferidir",
      D: "Bu savaş Sırpları Osmanlı'ya bağlı eyalet haline getirmiştir",
      E: "Varna zaferi, Konstantinopolis'in fethi planlarının başlangıcını simgeler"
    },
    dogru: "B",
    aciklama: "Varna, Batı'nın Osmanlı'yı Balkanlar'dan kovma son büyük Haçlı girişiminin başarısızlığını simgeler. Macaristan, Lehistan ve Papalık ittifakı II. Murat karşısında bozguna uğradı. Bundan sonra Batı artık ciddi bir Haçlı seferi düzenlemedi; II. Kosova (1448) bu tabloyu pekiştirdi."
  },
  // ─── 69 ──────────────────────────────────────────────────────────────────
  {
    id: 69, kategori: "savas_taraf", zorluk: "orta",
    soru: "Yavuz Selim'in Ridaniye Savaşı (1517) ve ardından Memlükleri yenmesinin Osmanlı tarihindeki en kritik sonucu hangisidir?",
    secenekler: {
      A: "Mısır'ın fethiyle Osmanlı gelirlerinin üç katına çıkması",
      B: "Osmanlı'nın Baharat ve İpek Yolu üzerindeki denetimi tamamen ele geçirmesi",
      C: "Hilafet ve kutsal emanetlerin Osmanlı hanedanına geçmesi",
      D: "Kuzey Afrika kıyılarının Osmanlı topraklarına doğrudan katılması",
      E: "Güney cephesinin güvenceye alınmasıyla Safevi üzerindeki baskının azaltılması"
    },
    dogru: "C",
    aciklama: "Memlük Sultanlığı'nın sona ermesiyle Abbasi halifesi sembolik unvanını Osmanlı padişahına devretti; Peygamber'in kılıcı ve hırkası gibi kutsal emanetler İstanbul'a taşındı. Bu gelişme Osmanlı'ya İslam dünyasının siyasi ve dinî liderliğini kazandırdı."
  },
  // ─── 70 ──────────────────────────────────────────────────────────────────
  {
    id: 70, kategori: "savas_taraf", zorluk: "zor",
    soru: "Osmanlı'nın I. Dünya Savaşı'na Almanya yanında girmesinde belirleyici olan somut olay hangisidir?",
    secenekler: {
      A: "Rusya ile önceden yaşanan derin anlaşmazlıklar ve Almanya'nın askeri güvence teklifi",
      B: "İngiltere'nin Osmanlı'ya sipariş edilen iki savaş gemisine el koyması ve Almanya'nın karşılığında iki gemi devretmesi",
      C: "İTC'nin Almanya'nın kesin kazanacağına inanarak savunma ittifakı kurması",
      D: "Avusturya-Sırbistan savaşında Osmanlı'nın Sırbistan'a duyduğu düşmanlıktan Almanya safına geçmesi",
      E: "Osmanlı'nın Kuzey Afrika'yı kurtarmak için Almanya'nın deniz gücüne ihtiyaç duyması"
    },
    dogru: "B",
    aciklama: "İngiltere, Osmanlı'nın sipariş ettiği Reşadiye ve Sultan Osman gemilerine el koydu; bu Osmanlı kamuoyunda büyük öfke yarattı. Almanya Goeben ve Breslau'yu Osmanlı'ya devretti. Bu somut gelişme, gizli Osmanlı-Alman ittifakının (Ağustos 1914) hızla devreye girmesini kolaylaştırdı."
  },
  // ─── 71 ──────────────────────────────────────────────────────────────────
  {
    id: 71, kategori: "dunya_tarihi", zorluk: "orta",
    soru: "Fransız Devrimi'nin (1789) Osmanlı İmparatorluğu üzerindeki en kalıcı etkisi hangisidir?",
    secenekler: {
      A: "Osmanlı'nın demokratik yönetim biçimini benimsemesi",
      B: "Osmanlı bünyesindeki gayrimüslim azınlıkların milliyetçilik akımlarıyla bağımsızlık arayışına girmesi",
      C: "Fransız askeri tekniklerinin doğrudan Osmanlı ordusuna aktarılması",
      D: "Aydınlanma felsefesinin Osmanlı ulema sınıfını modernleştirmesi",
      E: "Napolyon'un Mısır'ı işgali sonucunda Osmanlı-Fransa ilişkilerinin kalıcı olarak bozulması"
    },
    dogru: "B",
    aciklama: "Fransız Devrimi'nin yaydığı milliyetçilik ideolojisi, Osmanlı bünyesindeki Sırpları (1804), Yunanları (1821) ve ardından Bulgarları bağımsızlık hareketlerine yöneltti. Bu süreç, Osmanlı'nın dağılma sürecinin temel dinamiği olan 'Şark Meselesi'nin özünü oluşturdu."
  },
  // ─── 72 ──────────────────────────────────────────────────────────────────
  {
    id: 72, kategori: "dunya_tarihi", zorluk: "zor",
    soru: "Sanayi Devrimi'nin Osmanlı ekonomisi üzerindeki olumsuz etkisi hangisiyle en doğru özetlenir?",
    secenekler: {
      A: "Fabrika kuruluşunu önlemesi nedeniyle Osmanlı'nın teknik açıdan geri kalması",
      B: "Osmanlı hammaddelerinin Avrupalı sanayi ülkelerine ihraç edilip karşılığında sanayi malları alınan yarı-sömürge ekonomisine dönüşülmesi",
      C: "Buhar gücünün Osmanlı'da tanınmaması nedeniyle denizcilik üstünlüğünün yitirilmesi",
      D: "İşçi sınıfının örgütlenmesiyle büyük toplumsal çalkantıların yaşanması",
      E: "Osmanlı'nın iç pazarının tarımsal üretime kapanarak dışarıya kapalı bir ekonomi kurması"
    },
    dogru: "B",
    aciklama: "Sanayi Devrimi ile Avrupa, ucuz fabrika mallarını Osmanlı pazarına sürdü. Kapitülasyonların düşük gümrük oranlarıyla yerli el sanatları ve dokuma çöküşe geçti. Osmanlı'nın ihracatı hammadde, ithalatı sanayi ürünü biçimine dönüştü — yapısal bir yarı-sömürge ilişkisi doğdu."
  },
  // ─── 73 ──────────────────────────────────────────────────────────────────
  {
    id: 73, kategori: "dunya_tarihi", zorluk: "orta",
    soru: "Birinci Dünya Savaşı öncesinde Osmanlı'nın ittifak arayışı sürecinde aşağıdakilerden hangisi DOĞRUDUR?",
    secenekler: {
      A: "Osmanlı en başından Almanya safında yer almak istedi ve doğrudan ittifak teklifini kabul etti",
      B: "Osmanlı önce İtilaf Devletleri (İngiltere-Fransa-Rusya) ile ittifak aradı; kabul görmeyince Almanya ile gizli anlaşma yaptı",
      C: "Osmanlı tarafsız kalmayı ilke edindi; coğrafi konum savaşa sürükledi",
      D: "İngiltere Osmanlı'ya ittifak teklif etti; Osmanlı kabul etmedi",
      E: "Osmanlı önce Almanya ile, ardından Avusturya ile sıralı ittifaklar imzaladı"
    },
    dogru: "B",
    aciklama: "İTC önce İngiltere ve Fransa ile ittifak aradı; Rusya ile süregelen çatışma nedeniyle reddedildi. Ardından Almanya ile Ağustos 1914'te gizli ittifak kuruldu. Goeben-Breslau devri fiilen savaşa girişi pekiştirdi."
  },
  // ─── 74 ──────────────────────────────────────────────────────────────────
  {
    id: 74, kategori: "dunya_tarihi", zorluk: "zor",
    soru: "Wilson İlkeleri'nin (1918) Kurtuluş Savaşı söylemi açısından önemi nedir?",
    secenekler: {
      A: "Wilson İlkeleri, Türklerin Anadolu üzerindeki hakimiyetini doğrudan ve bağlayıcı biçimde tanımıştır",
      B: "Mustafa Kemal ve TBMM, Wilson'ın 'milletlerin kendi kaderini tayin hakkı' ilkesine dayanarak Anadolu Türklerinin egemenlik hakkını savunmuştur",
      C: "Wilson İlkeleri, Sevr Antlaşması'nın doğrudan gerekçesini oluşturmuştur",
      D: "Wilson İlkeleri Türk tarafınca hiçbir zaman referans belgesi olarak kullanılmamıştır",
      E: "Wilson İlkeleri doğrultusunda Osmanlı parçalandı ve bu kesin olarak uygulandı"
    },
    dogru: "B",
    aciklama: "Mustafa Kemal, Misak-ı Millî ve Kurtuluş Savaşı söyleminde Wilson'ın 'self-determination' (milletlerin kendi kaderini tayin) ilkesini uluslararası kamuoyuna yönelik meşruiyet argümanı olarak kullandı. ABD'nin aktif destek vermemesi bu ilkenin pratikte sınırlı kalmasına yol açtı."
  },
  // ─── 75 ──────────────────────────────────────────────────────────────────
  {
    id: 75, kategori: "dunya_tarihi", zorluk: "orta",
    soru: "Magna Carta'nın (1215) anayasal tarih açısından önemi en doğru biçimde hangisiyle ifade edilir?",
    secenekler: {
      A: "İlk demokratik cumhuriyet anayasasının temeli olarak kabul edilir",
      B: "Kral II. John'un keyfi yönetim yetkisini sınırlandıran ve soylu haklarını güvence altına alan ilk İngiliz belgesidir",
      C: "İngiltere'de genel seçim hakkını tüm halka tanıyan ilk düzenlemedir",
      D: "Magna Carta Fransız Devrimi'ni doğrudan etkilemiş ve İnsan Hakları Bildirisi'nin kaynağıdır",
      E: "Papa'nın İngiltere üzerindeki yetkiyi sona erdiren kilise-devlet ayrımı belgesidir"
    },
    dogru: "B",
    aciklama: "Magna Carta, İngiltere'de soylu sınıfının (baronlar) kral karşısındaki haklarını güvence altına aldı. Köylülere değil aristokrasiye yönelik hükümlere dayanmasına karşın, anayasal monarşi ve hukuk devleti anlayışının tarihsel temeli sayıldı."
  },
  // ─── 76 ──────────────────────────────────────────────────────────────────
  {
    id: 76, kategori: "dunya_tarihi", zorluk: "zor",
    soru: "Coğrafi Keşiflerin (15-16. yy.) Osmanlı ekonomisi üzerindeki olumsuz etkisi en doğru biçimde hangisiyle açıklanır?",
    secenekler: {
      A: "Osmanlı, Portekiz ile çeşitli deniz savaşları yaparak yeni yolların açılmasını engelledi",
      B: "Ümit Burnu yoluyla Avrupa artık Osmanlı topraklarından geçmeden Asya mallarına ulaşabildi; Osmanlı'nın transit ticaret geliri azaldı",
      C: "Osmanlı, yeni yolları kullanarak ticaret ağını Hint Okyanusu'na başarıyla genişletti",
      D: "Coğrafi Keşifler Osmanlı'yı fazla etkilemedi; çünkü iç ekonomi tarım temelindeydi",
      E: "Coğrafi Keşifler Osmanlı'yı güçlendirdi; çünkü aynı dönemde Mısır ve baharat kaynakları ele geçirildi"
    },
    dogru: "B",
    aciklama: "Portekizlilerin Ümit Burnu yolunu açmasıyla (1498) Avrupa, Osmanlı topraklarından geçmeden Asya'ya ulaşabildi. İpek ve Baharat yollarından sağlanan gümrük ve transit gelirleri azaldı. Osmanlı Hint Okyanusu'nda Portekiz'e karşı mücadele etti ama kalıcı başarı sağlayamadı."
  },
  // ─── 77 ──────────────────────────────────────────────────────────────────
  {
    id: 77, kategori: "padisah_islahat", zorluk: "orta",
    soru: "II. Abdülhamid'in 'Pan-İslamizm' politikasının öncelikli amacı neydi?",
    secenekler: {
      A: "Tüm Müslüman milletleri tek siyasi çatı altında birleştirerek bir İslam devletler federasyonu kurmak",
      B: "Farklı etnik kökenden Müslüman tebaayı ortak İslam kimliğiyle Osmanlı çatısında tutmak",
      C: "Hindistan'daki Müslümanları İngiltere'ye karşı örgütleyerek baskı unsuru yaratmak",
      D: "Laik eğitimi yayarken dini kurumları kontrol altında tutmak",
      E: "Avrupalı devletlerin dini gerekçeyle iç işlere müdahalesini önlemek"
    },
    dogru: "B",
    aciklama: "Pan-İslamizm politikası, milliyetçilik akımlarının yarattığı ayrılma tehdidine karşı ortak İslam kimliğini bir iç birlik aracı olarak kullandı. Farklı etniklikten Müslümanların (Türk, Arap, Kürt, Arnavut) ortak aidiyetini pekiştirmek amaçlandı."
  },
  // ─── 78 ──────────────────────────────────────────────────────────────────
  {
    id: 78, kategori: "padisah_islahat", zorluk: "zor",
    soru: "İkinci Meşrutiyet'in (1908) ilanı sonrasında İttihat ve Terakki Cemiyeti hangi yönetim biçimine yöneldi?",
    secenekler: {
      A: "Çok partili demokratik parlamento sistemi; düzenli ve serbest seçimler",
      B: "Padişah denetiminde gerçek meşruti monarşi; ordu siyasetten tamamen çekildi",
      C: "Başlangıçta anayasal meşruti monarşi; 1913 Bâb-ı Âli baskınından sonra İTC'nin fiilî tek parti iktidarına dönüştü",
      D: "İTC iktidarı kısa sürede bırakarak gelenekçi ulema ve padişaha devretti",
      E: "İTC parlamentodan vazgeçerek hemen cumhuriyet ilan etti"
    },
    dogru: "C",
    aciklama: "1908'de çok partili seçimler yapıldı; ancak 1913 Bâb-ı Âli baskınıyla İTC fiilî tek parti iktidarına geçti. Enver, Talat ve Cemal Paşaların yönetiminde askeri oligarşiye yakın bir yapı oluştu. Gerçek demokratik deneyim çok kısa sürdü."
  },
  // ─── 79 ──────────────────────────────────────────────────────────────────
  {
    id: 79, kategori: "padisah_islahat", zorluk: "orta",
    soru: "Osmanlı'da 'Osmanlıcılık, İslamcılık, Türkçülük' akımları hangi temel farklılıkla birbirinden ayrılır?",
    secenekler: {
      A: "Osmanlıcılık ekonomik, İslamcılık siyasi, Türkçülük ise kültürel bir ideoloji olarak doğdu",
      B: "Osmanlıcılık tüm tebaayı eşit vatandaşlıkta birleştirmeyi; İslamcılık Müslüman kimliğini; Türkçülük Türk etnik kimliğini esas aldı",
      C: "Üç akım aynı anda ortaya çıktı; hangisinin uygulandığı yalnızca iktidarın tercihine bağlıydı",
      D: "Yalnızca Türkçülük pratik sonuç doğurdu; diğerleri entelektüel düzeyde kaldı",
      E: "Osmanlıcılık aydınların, İslamcılık ulemanın, Türkçülük ise yalnızca askerlerin savunduğu akımdı"
    },
    dogru: "B",
    aciklama: "Osmanlıcılık (19. yy. ortası), Müslüman-gayrimüslim tüm tebaayı eşit tutmayı savundu. İslamcılık, II. Abdülhamid döneminde güçlendi; ortak din kimliğini esas aldı. Türkçülük, II. Meşrutiyet'le yükseldi; Türk millî kimliğini ön plana çıkardı. Üç akım birbiri ardına, kısmen iç içe geçerek gelişti."
  },
  // ─── 80 ──────────────────────────────────────────────────────────────────
  {
    id: 80, kategori: "padisah_islahat", zorluk: "zor",
    soru: "Osmanlı'da hangi padişah döneminde hangi önemli 'ilk' gerçekleşmiştir? Aşağıdaki eşleştirmelerden hangisi YANLIŞTIR?",
    secenekler: {
      A: "III. Ahmed → İlk Osmanlı matbaası (1727)",
      B: "II. Mahmud → İlk Osmanlı resmi gazetesi Takvim-i Vekayi (1831)",
      C: "Abdülmecid → Tanzimat Fermanı'nın ilanı (1839)",
      D: "II. Abdülhamid → İlk Osmanlı anayasası Kanun-ı Esasi'nin ilanı (1876)",
      E: "Abdülaziz → Demiryolu ağının Anadolu'da yaygınlaşması ve Osmanlı'nın borca girmesi"
    },
    dogru: "C",
    aciklama: "Tanzimat Fermanı 1839'da Mustafa Reşid Paşa tarafından ilan edildi. Ancak onu ilan ettiren padişah, yeni tahta geçen Abdülmecid'dir — fermanı hazırlayan Mustafa Reşid Paşa ise Abdülmecid'e sundu. Bu nedenle C yanlış değildir. Tuzak: D'de II. Abdülhamid 1876'da Kanun-ı Esasi'yi ilan etti ama sonra 1878'de meclisi kapattı; anayasanın ilanı yine de II. Abdülhamid dönemine aittir."
  },
  // ─── 81 ──────────────────────────────────────────────────────────────────
  {
    id: 81, kategori: "kurulus_savasi", zorluk: "orta",
    soru: "Amasya Genelgesi'nin (1919) Kurtuluş Savaşı tarihi açısından önemi nedir?",
    secenekler: {
      A: "Erzurum Kongresi'nin toplanmasına karar verildiğinin ilanıdır",
      B: "Türk milletinin bağımsızlık iradesini ve mücadele kararlılığını ilk kez yazılı belgede ilan etmesidir",
      C: "Mustafa Kemal'in Osmanlı resmi görevi çerçevesinde yayımladığı son emirdir",
      D: "Tüm Anadolu vilayetlerinin İstanbul yönetimine karşı bağımsızlık ilan etmesidir",
      E: "TBMM'nin kurulmasına karar verildiğinin ilk resmi belgesi niteliğindedir"
    },
    dogru: "B",
    aciklama: "Amasya Genelgesi, 'Vatanın bütünlüğü ve milletin bağımsızlığı tehlikededir; bu tehlikeyi yine milletin azim ve kararı kurtaracaktır' ifadesiyle bağımsızlık mücadelesini ilk kez yazılı metne geçirdi. Kurtuluş Savaşı'nın ilannamesi sayılır."
  },
  // ─── 82 ──────────────────────────────────────────────────────────────────
  {
    id: 82, kategori: "kurulus_savasi", zorluk: "zor",
    soru: "Misak-ı Millî (1920) belgesiyle ilgili aşağıdakilerden hangisi YANLIŞTIR?",
    secenekler: {
      A: "Mondros Mütarekesi imzalandığındaki Türk çoğunluklu topraklar ana vatan kabul edildi",
      B: "Kars, Ardahan ve Batum'un durumu halk oylamasıyla belirlenecekti",
      C: "İstanbul ve Boğazlar Türk egemenliğinde kalacak; uluslararası geçiş için ayrıca düzenleme yapılacaktı",
      D: "Ege adalarının Yunanistan'a bırakıldığı Misak-ı Millî'de açıkça kabul edildi",
      E: "Batı Trakya halkının kendi isteğine saygı duyulacağı ilkesi benimsendi"
    },
    dogru: "D",
    aciklama: "Misak-ı Millî, Ege adalarının Yunanistan'a bırakıldığını kabul etmedi; aksine Türk nüfusun yoğun olduğu adaların statüsünün halk oylamasıyla belirlenmesini talep etti. D ifadesi Misak-ı Millî'nin ruhuna tamamen aykırıdır."
  },
  // ─── 83 ──────────────────────────────────────────────────────────────────
  {
    id: 83, kategori: "kurulus_savasi", zorluk: "orta",
    soru: "TBMM'nin İstanbul hükümetinden (Osmanlı) farklı bir yönetim anlayışı benimsediğinin en güçlü göstergesi hangisidir?",
    secenekler: {
      A: "TBMM'nin kendisini 'Türk milleti'nin temsilcisi olarak nitelendirmesi",
      B: "TBMM'nin yürütme yetkisini padişaha değil seçilmiş vekillere vermesi",
      C: "TBMM'nin 1921 Anayasası'yla kendi meşruiyetini tanımlayıp Osmanlı hükümetini tanımaması",
      D: "TBMM'nin daha ilk oturumda hilafetin kaldırılmasını gündeme alması",
      E: "TBMM'nin Avrupa devletleriyle doğrudan diplomatik ilişkiye girmesi"
    },
    dogru: "C",
    aciklama: "TBMM, 1921 Teşkilat-ı Esasiye Kanunu ile kendi meşruiyetini tanımladı; İstanbul hükümetinin yaptığı antlaşmaları (Sevr dahil) geçersiz saydı. Fiilen iki ayrı Türk yönetimi mevcuttu: işgal altındaki Osmanlı ve direniş hareketi."
  },
  // ─── 84 ──────────────────────────────────────────────────────────────────
  {
    id: 84, kategori: "kurulus_savasi", zorluk: "zor",
    soru: "Lozan Antlaşması'nın (1923) Sevr'den (1920) temel farkı nedir?",
    secenekler: {
      A: "Lozan'da Kürt azınlığa özerklik tanındı; Sevr'de böyle bir düzenleme yoktu",
      B: "Lozan, tüm büyük devletler tarafından onaylandı; Sevr yalnızca bazı devletlerce imzalanmıştı",
      C: "Lozan, Türk ulusal egemenliğini ve sınırlarını tanıdı; Sevr ise Anadolu'yu fiilen parçalayacak koşullar içeriyordu",
      D: "Lozan'da kapitülasyonların kaldırılması Osmanlı tarafınca kabul edildi",
      E: "Lozan'da Yunanistan'la nüfus mübadelesi yerine mevcut nüfusun yerinde kalmasına karar verildi"
    },
    dogru: "C",
    aciklama: "Sevr'de Türk toprakları Yunanistan, Ermenistan, Kürt özerk bölgesi ve müttefik işgaline bırakılıyordu. Lozan'da ise Kurtuluş Savaşı zaferinin sonucu olarak Türk ulusal sınırları tanındı, kapitülasyonlar kaldırıldı ve azınlık düzenlemeleri karşılıklılık esasına oturtuldu."
  },
  // ─── 85 ──────────────────────────────────────────────────────────────────
  {
    id: 85, kategori: "ataturk", zorluk: "orta",
    soru: "Harf Devrimi'nin (1928) Türk toplumu üzerindeki en önemli uzun vadeli etkisi nedir?",
    secenekler: {
      A: "Dini metinlerin okunamaz hale gelmesiyle laikleşme sürecinin ivme kazanması",
      B: "Batı ülkeleriyle diplomatik yazışmaların büyük ölçüde kolaylaşması",
      C: "Öğrenimi kolaylaştırarak kitlesel okuryazarlık kampanyalarına zemin hazırlaması",
      D: "Eski Osmanlı Türkçesi metinlerin tamamen ve hızla okunamaması",
      E: "Türkçenin Arap ve Fars etkisinden kurtularak 'öz Türkçeye' kavuşması"
    },
    dogru: "C",
    aciklama: "Latin alfabesine geçiş, hem öğrenimi kolaylaştırdı hem de Millet Mektepleri aracılığıyla başlatılan toplu okuma-yazma kampanyalarını destekledi. Okuryazarlık oranı kısa sürede belirgin biçimde arttı. Devrim, modern eğitimin kitleselleşmesinin altyapısını kurdu."
  },
  // ─── 86 ──────────────────────────────────────────────────────────────────
  {
    id: 86, kategori: "ataturk", zorluk: "zor",
    soru: "İzmir İktisat Kongresi'nin (1923) Türk ekonomi politikası açısından önemi nedir?",
    secenekler: {
      A: "Ağır sanayii devlet eliyle kurma ve karma ekonomi modeline geçme kararı alındı",
      B: "Yabancı sermayenin tamamen reddedildiği milliyetçi bir ekonomi modeli benimsendi",
      C: "Liberal ekonomi ve özel girişimcilik ilkeleri benimsendi; devletçiliğe geçiş 1929 krizi sonrasına kaldı",
      D: "Tarım reformu ve köylünün korunması temel hedef olarak belirlendi",
      E: "Kapitülasyonlar bu kongre kararıyla yürürlükten kaldırıldı"
    },
    dogru: "C",
    aciklama: "İzmir İktisat Kongresi'nde (Şubat 1923) liberal ekonomi ve özel girişim ilkeleri benimsendi. Devletçilik politikasına geçiş ise 1929 Dünya Ekonomik Buhranı'nın etkisiyle 1930'ların başında gerçekleşti; 1931'de CHP programına alındı."
  },
  // ─── 87 ──────────────────────────────────────────────────────────────────
  {
    id: 87, kategori: "ataturk", zorluk: "orta",
    soru: "Türk Tarih Kurumu (1931) ve Türk Dil Kurumu'nun (1932) kurulmasındaki ortak temel amaç nedir?",
    secenekler: {
      A: "Osmanlı ve İslam dönemine ait kültürel mirasın tasfiye edilmesi",
      B: "Türk kimliği ve dilinin bilimsel temellere oturtularak ulusal bilincin güçlendirilmesi",
      C: "Yabancı bilim insanlarının Türk tarih ve dil araştırmalarına dahil edilmesi",
      D: "Devletin tüm eğitim müfredatını merkezi biçimde denetim altına alması",
      E: "Anadolu uygarlıklarının Türklükle bağlantısını ispatlayarak UNESCO'ya sunulması"
    },
    dogru: "B",
    aciklama: "Her iki kurum da Türk millî kimliğinin bilimsel-kültürel zeminini oluşturmayı hedefledi. Türk Tarih Tezi ve Güneş-Dil Teorisi bu kurumlar aracılığıyla geliştirildi. Atatürk, bağımsız bir devletin güçlü bir ulusal bilinçle var olabileceğine inanıyordu."
  },
  // ─── 88 ──────────────────────────────────────────────────────────────────
  {
    id: 88, kategori: "ataturk", zorluk: "zor",
    soru: "Türkiye'nin 1930'larda imzaladığı Balkan Antantı (1934) ve Sadabat Paktı'nın (1937) ortak hedefi nedir?",
    secenekler: {
      A: "Türkiye'nin Sovyetler Birliği'ne karşı savunma kapasitesini artırması",
      B: "Bölgesel ittifaklarla toprak bütünlüğünü ve Lozan'da belirlenen statükoyu güvence altına alması",
      C: "Türkiye'nin İngiltere ve Fransa ile olan ittifakını bölgesel boyuta taşıması",
      D: "Türkiye'nin İtalya ve Almanya'ya karşı açık bir denge politikası ilan etmesi",
      E: "Türkiye'nin Orta Doğu ve Balkanlar üzerinde bölgesel liderlik statüsüne kavuşması"
    },
    dogru: "B",
    aciklama: "Her iki pakt da revizyonist güçlere (İtalya'nın Balkanlar ve Doğu Akdeniz'e; Almanya'nın Avrupa'ya yönelik yayılmacılığına) karşı Lozan sınırlarını ve toprak bütünlüğünü korumayı amaçladı. Balkan Antantı (Türkiye-Yunanistan-Romanya-Yugoslavya), Sadabat Paktı (Türkiye-İran-Irak-Afganistan) statükocu ittifaklardır."
  },
  // ─── 89 ──────────────────────────────────────────────────────────────────
  {
    id: 89, kategori: "osmanli_genel", zorluk: "orta",
    soru: "Osmanlı idari hiyerarşisinde yönetim birimlerinin büyükten küçüğe doğru doğru sırası hangisidir?",
    secenekler: {
      A: "Eyalet → Sancak → Nahiye → Köy",
      B: "Eyalet → Sancak (Liva) → Kaza → Nahiye → Köy",
      C: "Vilayet → Eyalet → Sancak → Kaza",
      D: "Beylerbeylik → Voyvodalık → Sancak → Kaza",
      E: "Eyalet → Kaza → Sancak → Tımar"
    },
    dogru: "B",
    aciklama: "Osmanlı idari hiyerarşisi: Eyalet (beylerbeyi) → Sancak/Liva (sancakbeyi) → Kaza (kadı) → Nahiye → Köy. Tanzimat sonrasında 'eyalete' vilayet, 'sancağa' liva da denildi. A'da kaza katmanı eksik, bu yüzden eksik ve yanlış."
  },
  // ─── 90 ──────────────────────────────────────────────────────────────────
  {
    id: 90, kategori: "osmanli_genel", zorluk: "zor",
    soru: "Osmanlı'da 17. yüzyılda yaygınlaşan Celali isyanlarının temel nedeni hangisidir?",
    secenekler: {
      A: "Safevi propagandasının etkisiyle Alevi-Kızılbaş kitlelerin büyük ayaklanması",
      B: "Tımar sisteminin bozulması, nüfus artışı ve işsiz kalan silahlı levendlerin taşrada eşkıyalığa yönelmesi",
      C: "Yeniçerilerin İstanbul dışına çıkarak taşrada bağımsız beylikler kurması",
      D: "Avrupa'daki askeri gelişmelere yanıt veremeyen ordunun disiplin çöküşü",
      E: "Macaristan kayıpları sonrası askeri personelin ekonomik sıkıntıya düşmesi"
    },
    dogru: "B",
    aciklama: "16.-17. yy'da artan nüfus ve tımar sisteminin çöküşüyle topraksız köylüler ve işsiz sipahiler 'levent' adıyla taşrada silah taşıyan düzensiz gruplara dönüştü. Uzun Viyana Savaşları'nın yarattığı ekonomik yük bu nüfusu eşkıyaya itti; Celali isyanları bu yapısal çöküşün sonucudur."
  },
  // ─── 91 ──────────────────────────────────────────────────────────────────
  {
    id: 91, kategori: "osmanli_genel", zorluk: "orta",
    soru: "Osmanlı'nın uzun süreli devlet istikrarını sağlayan etkenler arasında en az sayılabilecek özellik hangisidir?",
    secenekler: {
      A: "Tımar sistemiyle merkez ile taşra arasında güçlü idari bağlar kurulması",
      B: "Millet sistemiyle farklı dinî-etnik gruplara sınırlı özerklik tanınması",
      C: "Coğrafi konumun ticaret yolları üzerindeki denetimi sağlaması",
      D: "Yeniçeri ordusunun her dönemde disiplinli kalarak reformlara açık olması",
      E: "Devşirme sistemiyle merkezi otoriteye bağlı profesyonel bir yönetici sınıfı oluşturulması"
    },
    dogru: "D",
    aciklama: "Yeniçeriler zamanla kurumu çıkar örgütüne dönüştürdü: ticaretle uğraştı, esnaf loncalarına katıldı, evlenme yasağını deldi ve her reform girişimine direndi. III. Selim ve Genç Osman bu direncin bedelini canlarıyla ödedi. 'Her dönemde disiplinli ve reformlara açık' ifadesi tarihsel gerçekle çelişir."
  },
  // ─── 92 ──────────────────────────────────────────────────────────────────
  {
    id: 92, kategori: "osmanli_genel", zorluk: "zor",
    soru: "Babıâli baskınının (1913) ardından İTC'nin yönetim biçimi nasıl tanımlanabilir?",
    secenekler: {
      A: "Padişah denetiminde gerçek anlamda temsili meşruti monarşi",
      B: "Enver, Talat ve Cemal Paşaların yönetiminde askeri oligarşi / fiilî tek parti iktidarı",
      C: "Sivil ve askeri dengeyi gözeten karma yönetim kurulu",
      D: "Milliyetçi çizgide demokratik parlamento hükümeti",
      E: "İslami temellere dayanan teokratik meşruti yönetim"
    },
    dogru: "B",
    aciklama: "Bâb-ı Âli baskınıyla Sadrazam Kamil Paşa görevden uzaklaştırıldı. Ardından Enver-Talat-Cemal üçlüsü 'Üç Paşalar' olarak fiilî iktidara el koydu. Bu dönem gerçek bir askeri oligarşiye yakın bir yapıyı temsil eder; muhalefete tahammülsüzlük belirgindir."
  },
  // ─── 93 ──────────────────────────────────────────────────────────────────
  {
    id: 93, kategori: "osmanli_genel", zorluk: "orta",
    soru: "Osmanlı Devleti'nin I. Dünya Savaşı'na girmesinin iç siyasi yaşam üzerindeki en yıkıcı sonucu hangisidir?",
    secenekler: {
      A: "Büyük toprak kayıpları ve devletin aniden çözülmesi",
      B: "Salgın hastalıklar, kıtlık ve zorunlu askerlikle iç içe geçen ağır can kayıpları ve ekonomik çöküş",
      C: "Suriye ve Arabistan'ın İngiliz mandası haline gelmesiyle güney kaybı",
      D: "İstanbul'un Müttefiklerce işgaliyle başkentin fiilen yitirilmesi",
      E: "Azınlıkların toplu ayrılması ve ani nüfus kayıpları"
    },
    dogru: "B",
    aciklama: "Savaş yıllarında Osmanlı'da tifüs, kolera gibi salgınlar, zorunlu askerlik ve cephe kayıplarına eşlik eden kıtlık, Anadolu nüfusunu derinden sarstı. Tahminlere göre toplam nüfusun yaklaşık %15-20'si bu dönemde hayatını kaybetti. Ekonomik yapı ise tamamen çöktü."
  },
  // ─── 94 ──────────────────────────────────────────────────────────────────
  {
    id: 94, kategori: "ilk_turk", zorluk: "orta",
    soru: "Orhun Yazıtları'nın (8. yy.) Türk tarihi açısından önemi nedir?",
    secenekler: {
      A: "Türklerin İslamiyeti benimsediğini belgeleyen ilk yazılı kaynaklar olması",
      B: "Türklerin kendi alfabesiyle kaleme aldığı bilinen en eski uzun yazılı metinler olması",
      C: "Çin ile yapılan antlaşmaların metinleri olduğundan ticaret tarihini aydınlatması",
      D: "Yalnızca hanedanın şeceresini içerdiğinden salt siyasi tarih kaynağı olması",
      E: "Türklerin Orta Asya'dan batıya göç sürecini anlatan ilk yolculuk yazıları olması"
    },
    dogru: "B",
    aciklama: "Köktürk alfabesiyle yazılan Orhun Yazıtları (Bilge Kağan ve Köl Tigin adına, 8. yy.), Türklerin kendi dili ve alfabesiyle kaleme aldığı bilinen en eski uzun metinlerdir. Devlet-millet ilişkisi ve toplumsal değerler üzerine güçlü siyasi mesajlar içerir."
  },
  // ─── 95 ──────────────────────────────────────────────────────────────────
  {
    id: 95, kategori: "ilk_turk", zorluk: "orta",
    soru: "Uygurların Türk kültür tarihi açısından önemi en doğru biçimde hangisiyle açıklanır?",
    secenekler: {
      A: "İslamiyet'i kabul eden ilk Türk topluluğu olmaları",
      B: "İlk Türk devletini kurmuş olmalarıyla siyasi tarihin başlatıcısı sayılmaları",
      C: "Yerleşik hayata geçerek kâğıt para, kitap kültürü ve minyatür sanatı gibi alanlarda öncü olmaları",
      D: "Çin ile sürdürdükleri başarılı savaşlarla güçlü merkezi devlet kurmaları",
      E: "Osmanlı'nın kökenini oluşturan Oğuz boylarını bünyelerinde barındırmaları"
    },
    dogru: "C",
    aciklama: "Uygurlar yerleşik hayata geçen öncü Türk topluluğudur. Kâğıt parayı kullandılar, Uygur alfabesini geliştirdiler, Maniheizm ve Budizm'i benimseyerek minyatür sanatı ve kitap kültürünü ilerletirledi. Bu birikimler Türk-İslam medeniyetine önemli bir zemin hazırladı."
  },
  // ─── 96 ──────────────────────────────────────────────────────────────────
  {
    id: 96, kategori: "ilk_turk", zorluk: "orta",
    soru: "Karahanlıların Türk tarihi açısından en belirgin önemi nedir?",
    secenekler: {
      A: "Abbasi halifeliğini himaye eden ilk Türk devleti olmaları",
      B: "İslamiyeti resmi devlet dini olarak benimseyen ilk Türk devleti olmaları",
      C: "Bilinen ilk Türk alfabesini geliştiren topluluk olmaları",
      D: "Gaznelileri siyasi olarak çöküşe sürükleyen ilk Türk rakibi olmaları",
      E: "İlk Türkçe yazılı edebî eserlerin Arapça'dan çeviri olarak bu dönemde kaleme alınması"
    },
    dogru: "B",
    aciklama: "Karahanlılar, İslamiyeti ilk kabul eden Türk devletidir (Satuk Buğra Han, 10. yy.). Kutadgu Bilig (Yusuf Has Hacib) ve Divan-ı Lügati't-Türk (Kaşgarlı Mahmud) bu dönemin orijinal Türkçe şaheserleridir; bunlar çeviri değil özgün eserlerdir (E yanlış)."
  },
  // ─── 97 ──────────────────────────────────────────────────────────────────
  {
    id: 97, kategori: "ilk_turk", zorluk: "zor",
    soru: "Gazneli Mahmud'un Hindistan seferlerinin temel motivasyonu değerlendirildiğinde hangisi en doğrudur?",
    secenekler: {
      A: "Hindistan'ı tamamen İslam'a kazandırmak ve kalıcı bir fetih imparatorluğu kurmak",
      B: "Tapınak zenginliklerine ulaşmak ve İslam dünyasında 'gazi sultan' prestijini pekiştirmek",
      C: "Abbasi halifesinin zayıflamasıyla Hindistan'ın İslam egemenliğinden çıkmasını önlemek",
      D: "Doğu Anadolu ve Orta Asya'daki Selçuklu baskısına karşı denge kurmak",
      E: "Çin'e uzanan ticaret yollarını kontrol altına almak ve Türk devletleriyle ekonomik ittifak kurmak"
    },
    dogru: "B",
    aciklama: "Gazneli Mahmud'un 17 Hindistan seferinde iki temel güdü belirleyiciydi: Hint tapınaklarından elde edilen büyük servet (ekonomik) ve Sünni İslam'ın 'gazi koruyucu sultan' unvanını pekiştirme (prestij). Kalıcı hâkimiyet kurma amacı taşımadığından fethedilen topraklar elde tutulamadı."
  },
  // ─── 98 ──────────────────────────────────────────────────────────────────
  {
    id: 98, kategori: "ilk_turk", zorluk: "orta",
    soru: "Büyük Selçuklu veziri Nizamülmülk'ün Osmanlı'ya uzanan en kalıcı katkısı hangisidir?",
    secenekler: {
      A: "Büyük Selçuklu'nun Osmanlı hanedanıyla akrabalık kurmasına aracılık etmesi",
      B: "Dini ilimlerin yanı sıra devlet yöneticisi yetiştiren Nizamiye medreselerini kurması",
      C: "İktâ sistemini geliştirerek Osmanlı tımarının doğrudan modeli olması",
      D: "Abbasi halifeliğini fiilî siyasi iktidara kavuşturması",
      E: "İran bürokrasisini Türk geleneğiyle sentezleyerek Osmanlı idare anlayışını doğrudan şekillendirmesi"
    },
    dogru: "B",
    aciklama: "Nizamiye medreseleri (Bağdat, 1067), dini ilimlerin yanı sıra bürokrasi ve yönetici sınıfı yetiştiren medrese modelinin prototipi oldu. Bu model Anadolu Selçuklularına ve dolaylı biçimde Osmanlı eğitim-bürokrasi anlayışına aktarıldı."
  },
  // ─── 99 ──────────────────────────────────────────────────────────────────
  {
    id: 99, kategori: "ilk_turk", zorluk: "zor",
    soru: "Anadolu Selçuklularının Kösedağ yenilgisi (1243) sonrasındaki stratejik tutumu nasıl tanımlanabilir?",
    secenekler: {
      A: "Moğollara karşı açık savaşa devam ederek bağımsızlıklarını uzun yıllar korumaları",
      B: "Kösedağ'ın ardından İlhanlı vassalığını kabul ederek nominal bağımsızlıkla yönetmeye devam etmeleri",
      C: "Moğol tehdidine karşı Mısır Memlükleri ile kalıcı ittifak kurarak İlhanlıları durdurmaları",
      D: "Haçlı kuvvetleriyle ortak savaş planı yaparak Moğollara karşı Batı desteği aramaları",
      E: "Savaş sonrası tamamen çökerek Osmanlı beyliğini Moğol valisine devretmeleri"
    },
    dogru: "B",
    aciklama: "Kösedağ'dan sonra Anadolu Selçukluları İlhanlı vassalı oldu; sultanlar İlhanlı denetiminde yönetmeyi sürdürdü. 13. yy. sonunda Selçuklu otoritesi tamamen eriyince Osmanoğulları dahil küçük Türk beylikleri bağımsızlaştı."
  },
  // ─── 100 ─────────────────────────────────────────────────────────────────
  {
    id: 100, kategori: "ilk_turk", zorluk: "zor",
    soru: "İlk Türk devletlerinde görülen 'ülüş' (ülüg) sistemi aşağıdakilerden hangisiyle en doğru açıklanır?",
    secenekler: {
      A: "Savaş sonrası ganimet paylaşım kuralları",
      B: "Ülkenin hanedan erkeklerinin ortak mirası sayılarak yönetim bölgelerine bölünmesi",
      C: "Göçebe toplumda aşiret liderlerine verilen arazi kullanım hakkı",
      D: "İdari bölünme olmaksızın tüm hanedanın ortak karar aldığı meclis sistemi",
      E: "Oğuzhan soyundan gelen tüm prensler arasında eşit veraset hakkı"
    },
    dogru: "B",
    aciklama: "Ülüş sistemi, hükümdar öldüğünde ülkenin erkek çocuklar arasında bölüşülmesidir. Bu gelenek taht kavgalarına ve siyasi istikrarsızlığa zemin hazırladı; Göktürkler ve Büyük Selçuklular bu yüzden kısa sürede parçalandı. Osmanlı bu sorunu 'ekber ve erşed' ilkesi ve kardeş katliyle çözmeye çalıştı."
  }
];

/* ──────────────────────────────────────────────────────────────
   HIZLI EŞLEŞTİRME SETLERİ
   Her set: { id, ad, ikon, renk, ciftler: [{sol, sag, aciklama}] }
────────────────────────────────────────────────────────────── */
const ESLESTIRME_SETLERI = [
  {
    id: "padisah_islahat",
    ad: "Padişah → Islahat",
    ikon: "👑",
    renk: "#b6584f",
    ciftler: [
      { sol: "III. Selim",       sag: "Nizam-ı Cedid",                   aciklama: "III. Selim, Batı tarzı ilk modern orduyu (Nizam-ı Cedid) kurdu (1792). Yeniçerilerin direnciyle tahttan indirildi." },
      { sol: "II. Mahmud",       sag: "Vaka-i Hayriye",                  aciklama: "II. Mahmud 1826'da Yeniçeri Ocağı'nı kaldırdı; bu olaya 'hayırlı olay' anlamında Vaka-i Hayriye dendi." },
      { sol: "Abdülmecid",       sag: "Tanzimat Fermanı",                aciklama: "1839'da Mustafa Reşid Paşa tarafından ilan edilen Tanzimat Fermanı, Abdülmecid döneminin temel reformudur." },
      { sol: "II. Abdülhamid",   sag: "Meclisi Tatil Etme",              aciklama: "II. Abdülhamid, 93 Harbi gerekçesiyle 1878'de Meclis-i Mebusan'ı kapattı ve 30 yıl tek başına yönetti." },
      { sol: "V. Murat",         sag: "93 Günlük Saltanat",              aciklama: "V. Murat ruhsal sağlık sorunları nedeniyle yalnızca 93 gün tahtta kalabildi (Mayıs–Ağustos 1876)." },
      { sol: "Abdülaziz",        sag: "Donanmayı Güçlendirme",           aciklama: "Abdülaziz döneminde Osmanlı donanması dünyanın 3. büyük deniz gücüne ulaştı; ancak mali krizle ülke borca battı." }
    ]
  },
  {
    id: "savas_taraf",
    ad: "Savaş → Galip / Sonuç",
    ikon: "⚔️",
    renk: "#e07b3a",
    ciftler: [
      { sol: "Çaldıran (1514)",                    sag: "Osmanlı — Safevi toprakları alındı",    aciklama: "Yavuz, Şah İsmail'i Çaldıran'da yendi; Doğu Anadolu ve Kuzey Irak Osmanlı'ya geçti." },
      { sol: "Mohaç (1526)",                       sag: "Osmanlı — Macaristan fethedildi",        aciklama: "Kanuni'nin Mohaç zaferiyle Macaristan'ın büyük bölümü Osmanlı egemenliğine girdi." },
      { sol: "Lepanto / İnebahtı (1571)",          sag: "Haçlı İttifakı — Osmanlı donanması yenildi", aciklama: "Osmanlı'nın ilk büyük deniz bozgunu; ancak 1 yılda yeni donanma inşa edildi." },
      { sol: "II. Viyana (1683)",                  sag: "Kutsal İttifak — Osmanlı geriledi",     aciklama: "Bozulan kuşatma, Osmanlı'nın Avrupa'dan geri çekilme sürecini başlattı." },
      { sol: "Sakarya (1921)",                     sag: "TBMM Ordusu — Yunan taarruzu durduruldu", aciklama: "Mustafa Kemal'in başkomutanlığında kazanılan bu zafer ile Batı cephesinde dönüm noktası yaşandı." },
      { sol: "Başkomutanlık Meydan Muharebesi (1922)", sag: "TBMM Ordusu — Kurtuluş Savaşı bitti", aciklama: "Dumlupınar'da kazanılan zafer, işgal kuvvetlerini Türkiye'den kovdu ve savaşı fiilen bitirdi." }
    ]
  },
  {
    id: "antlasma_onem",
    ad: "Antlaşma → Önemi",
    ikon: "📜",
    renk: "#4f9e8f",
    ciftler: [
      { sol: "Küçük Kaynarca (1774)", sag: "İlk büyük toprak kaybı — Rusya'ya Kırım",      aciklama: "Rusya'ya Kırım üzerinde hak tanındı; Osmanlı iç işlerine karışma zemini doğdu." },
      { sol: "Mondros (1918)",        sag: "WWI ateşkesi — Anadolu işgale açıldı",          aciklama: "Osmanlı'nın I. Dünya Savaşı'ndan çekilmesiyle işgaller başladı; Kurtuluş Savaşı'nın fitilini yaktı." },
      { sol: "Sevr (1920)",           sag: "Osmanlı'yı parçalayan — ama uygulanamayanantlaşma", aciklama: "TBMM tanımadı; savaş sürdü. Lozan ile geçersiz hale geldi." },
      { sol: "Mudanya (1922)",        sag: "Lozan öncesi ateşkes — Trakya geri alındı",    aciklama: "İtilaf kuvvetleri savaşmadan Doğu Trakya'dan çekildi; Türkiye siyasi zafer kazandı." },
      { sol: "Lozan (1923)",          sag: "Türkiye'nin uluslararası tanınması",             aciklama: "Modern Türkiye'nin sınırları ve egemenliği dünyaya kabul ettirildi; kapitülasyonlar kaldırıldı." },
      { sol: "Kars (1921)",           sag: "Doğu sınırının kesinleşmesi",                   aciklama: "Ermenistan, Gürcistan ve Azerbaycan ile imzalandı; Doğu Anadolu sınırı bugünkü haliyle çizildi." }
    ]
  },
  {
    id: "padisah_ozellik",
    ad: "Padişah → Tanındığı Özelliği",
    ikon: "👁️",
    renk: "#7b5e9a",
    ciftler: [
      { sol: "Orhan Bey",            sag: "İlk düzenli Osmanlı ordusu ve divanı kuruldu",    aciklama: "Orhan Bey döneminde Divan-ı Hümayun'un ilk biçimi oluşturuldu; piyade (yaya) ve atlı düzenli kuvvetler kuruldu." },
      { sol: "I. Murat",             sag: "Yeniçeri Ocağı ve Kapıkulu sistemi kuruldu",       aciklama: "I. Murat, devşirme esasına dayalı Yeniçeri Ocağı ile tımarla beslenen Kapıkulu süvari birliklerini oluşturdu." },
      { sol: "Yavuz Selim",          sag: "Hilafet ve kutsal emanetler Osmanlı'ya taşındı",   aciklama: "1517 Ridaniye zaferinin ardından Abbasi halifesi unvanını ve Peygamber emanetlerini Osmanlı devraldı." },
      { sol: "Kanuni Süleyman",      sag: "Osmanlı kanunnameleri derlendi (Avrupa'da 'Muhteşem')", aciklama: "Kanuni, iç hukuku ve idari düzenlemeleri kanunname olarak derletti; Batı'da 'Büyük Türk' veya 'Muhteşem Süleyman' olarak bilinir." },
      { sol: "Genç Osman",           sag: "Yeniçerilere karşı reform girişiminde öldürülen ilk padişah", aciklama: "Genç Osman Yeniçeri Ocağı'nı kaldırıp Anadolu ve Suriyeli askerlerden yeni bir ordu kurmak istedi; 1622'de Yeniçeriler tarafından tahttan indirilerek öldürüldü." },
      { sol: "IV. Murat",            sag: "Bağdat'ı Safevilerden geri aldı; kahvehane ve tütünü yasakladı", aciklama: "IV. Murat 1638'de Bağdat'ı yeniden fethetti. İstanbul'daki kahvehaneleri ve tütün kullanımını ölüm cezasıyla yasaklamasıyla da bilinir." }
    ]
  },
  {
    id: "osmanli_ilkler",
    ad: "Osmanlı'da İlkler → Dönemi",
    ikon: "🔑",
    renk: "#5a8fb6",
    ciftler: [
      { sol: "İlk matbaa (1727)",                    sag: "III. Ahmed / Lale Devri",             aciklama: "İbrahim Müteferrika, III. Ahmed döneminde (Lale Devri) Osmanlı'nın ilk matbaasını kurdu. İlk basılan kitaplar sözlük ve tarih eserleriydi." },
      { sol: "İlk resmi gazete — Takvim-i Vekayi",   sag: "II. Mahmud (1831)",                   aciklama: "II. Mahmud döneminde yayımlanan Takvim-i Vekayi, Osmanlı'nın ilk resmî gazetesidir. Devlet kararlarını ve resmi duyuruları halka aktarıyordu." },
      { sol: "İlk nüfus sayımı (1831)",              sag: "II. Mahmud",                          aciklama: "Osmanlı'nın ilk kapsamlı nüfus sayımı yalnızca erkekleri kapsıyordu; askerlik ve vergi planlaması amacıyla yapıldı." },
      { sol: "İlk modern askeri mühendis okulu",     sag: "I. Abdülhamid (Mühendishane-i Bahr-i Hümayun)", aciklama: "1773'te açılan bu okul Osmanlı'nın ilk modern subay yetiştirme kurumudur; deniz mühendisliği ve topçuluk öğretimi verildi." },
      { sol: "İlk anayasa — Kanun-ı Esasi (1876)",   sag: "II. Abdülhamid / I. Meşrutiyet",      aciklama: "Mithat Paşa'nın hazırladığı Kanun-ı Esasi, II. Abdülhamid tarafından ilan edildi. Ancak padişah 1878'de meclisi kapattı ve anayasayı askıya aldı." },
      { sol: "Avrupa'ya ilk düzenli öğrenci gönderilmesi", sag: "II. Mahmud",                   aciklama: "II. Mahmud, askeri ve teknik eğitim için Avrupa'ya (Paris başta) öğrenci gönderdi. Bu uygulama modernleşmenin insan kaynağını hazırladı." }
    ]
  },
  {
    id: "ataturk_inkılap",
    ad: "Atatürk İnkılabı → Yılı",
    ikon: "🇹🇷",
    renk: "#c0392b",
    ciftler: [
      { sol: "Saltanatın kaldırılması",    sag: "1922",  aciklama: "TBMM, saltanatı (yürütme yetkisini) halifelikten ayırarak kaldırdı. Bu, Osmanlı hanedanının siyasi sonuydu." },
      { sol: "Cumhuriyet'in ilanı",        sag: "1923",  aciklama: "29 Ekim 1923'te Türkiye Büyük Millet Meclisi Türkiye Cumhuriyeti'ni ilan etti; Mustafa Kemal ilk cumhurbaşkanı seçildi." },
      { sol: "Halifeliğin kaldırılması",   sag: "1924",  aciklama: "3 Mart 1924'te TBMM halifelik kurumunu kaldırdı; son halife Abdülmecid II sürgüne gönderildi." },
      { sol: "Şapka Kanunu",               sag: "1925",  aciklama: "Kasım 1925'te çıkarılan Şapka Kanunu, fes yerine Batılı şapka kullanımını zorunlu kıldı. Kastamonu gezisi bu inkılabın halka ilanı sayılır." },
      { sol: "Medeni Kanun",               sag: "1926",  aciklama: "İsviçre Medeni Kanunu'ndan uyarlanan yeni Medeni Kanun; çok eşlilik ve dinî nikahı kaldırdı, kadınlara miras ve boşanmada eşit haklar tanıdı." },
      { sol: "Harf Devrimi",               sag: "1928",  aciklama: "Arap alfabesinden Latin alfabesine geçildi. Yeni alfabe öğrenme ve okuma-yazma oranını kısa sürede belirgin biçimde artırdı." }
    ]
  },
  {
    id: "kurtulus_belge",
    ad: "Kurtuluş Savaşı → Antlaşma / Belge",
    ikon: "🏛️",
    renk: "#27ae60",
    ciftler: [
      { sol: "Amasya Genelgesi (1919)",    sag: "Kurtuluş Savaşı'nın ilannamesi",            aciklama: "Vatanın tehlikede olduğunu ve kurtuluşun milletin azmiyle sağlanacağını ilan eden ilk belgedir; ulusal örgütlenmeye çağrı niteliği taşır." },
      { sol: "Erzurum Kongresi (1919)",    sag: "Doğu Anadolu'da ulusal karar",              aciklama: "Doğu illeri adına toplanan bu kongrede doğu Anadolu'nun bütünlüğü ve Türk çoğunluğu ilkesi benimsendi; Temsil Heyeti oluşturuldu." },
      { sol: "Sivas Kongresi (1919)",      sag: "Tüm ulusal güçlerin birleştirilmesi",       aciklama: "Tüm Osmanlı vilayetlerini temsil eden bu kongrede bölgesel cemiyetler 'Anadolu ve Rumeli Müdafaa-i Hukuk Cemiyeti' çatısı altında birleştirildi." },
      { sol: "Gümrü Antlaşması (1920)",    sag: "Doğu cephesinin kapanması",                 aciklama: "Ermeni Cumhuriyeti ile imzalanan bu antlaşma Doğu cephesini kapattı; Ermenistan'ın Sovyetleşmesiyle pratikte geçersizleşti ancak sınırı belirledi." },
      { sol: "Ankara Antlaşması (1921)",   sag: "Güney cephesinin kapanması (Fransızlarla)", aciklama: "Fransa ile imzalanan bu antlaşma Güney cephesini kapattı; Hatay dışında bugünkü sınır çizildi. İlk uluslararası siyasi zafer sayılır." },
      { sol: "Lozan Antlaşması (1923)",    sag: "Kurtuluş Savaşı'nın uluslararası tanınması", aciklama: "Türkiye'nin modern sınırlarını ve egemenliğini uluslararası alanda tanıttı; kapitülasyonlar kaldırıldı, Yunanistan ile nüfus mübadelesi kararlaştırıldı." }
    ]
  },
  {
    id: "turk_islam_devlet",
    ad: "Türk-İslam Devleti → Önemli Özelliği",
    ikon: "🦅",
    renk: "#6b9e5a",
    ciftler: [
      { sol: "Karahanlılar",      sag: "İslamiyet'i ilk kabul eden Türk devleti",              aciklama: "Satuk Buğra Han önderliğinde İslamiyet'i benimseyen Karahanlılar, Türk-İslam medeniyetinin ilk temsilcisidir; Kutadgu Bilig bu dönemin şaheseridir." },
      { sol: "Gazneliler",        sag: "Sultan unvanını kullanan ilk Türk hanedanı",            aciklama: "Abbasi halifeliğini Şii Büveyhilere karşı koruyan Gazneli Mahmud, halifeliğin tanımasıyla 'Sultan' unvanını alan ilk Türk hükümdardır." },
      { sol: "Büyük Selçuklular", sag: "Türk-İslam sentezini yaratan; Nizamiye medreselerini kuran", aciklama: "Tuğrul Bey'in Bağdat'a girerek Büveyhileri temizlemesiyle Sünni İslam'ın koruyucusu oldu. Nizamülmülk'ün kurduğu medreseler Türk-İslam yönetici sınıfını biçimlendirdi." },
      { sol: "Anadolu Selçukluları", sag: "Kösedağ sonrası İlhanlı vassalı; Anadolu'nun Türkleşmesini tamamlayan", aciklama: "1243'te İlhanlılara yenildikten sonra vassallaştılar. Buna karşın Anadolu'nun Türk-İslam karakterini pekiştiren kentler, medreseler ve kervansaraylar bu dönemde yapıldı." },
      { sol: "Harzemşahlar",      sag: "Moğol istilasına direnen son büyük Türk-İslam devleti",  aciklama: "Cengiz Han'a direnen Sultan Celâleddin Harzemşah, Moğol kuvvetleri karşısında şehirden şehire çekildi. Devletin çöküşü Moğolların İslam dünyasına büyük darbe vurmasına zemin hazırladı." },
      { sol: "Memlükler",         sag: "Moğolları durduran; Haçlılarla savaşan Türk-Kıpçak kökenli köle-asker hanedanı", aciklama: "Memlükler 1260 Aynicâlût Savaşı'nda Moğolları ilk kez yenilgiye uğrattı. Kıpçak Türklerinden devşirilen komutanlardan kurulan bu hanedan Mısır ve Suriye'yi yönetirken Osmanlı'nın önünde yıkıldı." }
    ]
  }
];
