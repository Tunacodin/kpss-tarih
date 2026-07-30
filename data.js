/* KPSS Tarih — Osmanlı Padişahları veri kaynağı
   status: 'full'  -> tam içerik    'stub' -> iskelet ("içerik yakında")
   Yeni padişah eklerken sadece bu diziyi doldur. */

const ERAS = {
  kurulus:   { ad: "Kuruluş Dönemi",    yil: "1299 – 1453", renk: "#d9a94b" },
  yukselme:  { ad: "Yükselme Dönemi",   yil: "1453 – 1579", renk: "#b6584f" },
  duraklama: { ad: "Duraklama Dönemi",  yil: "1579 – 1699", renk: "#4f9e8f" },
  gerileme:  { ad: "Gerileme Dönemi",   yil: "1699 – 1792", renk: "#7b8bb0" },
  dagilma:   { ad: "Dağılma Dönemi",    yil: "1792 – 1922", renk: "#9c7bb0" }
};

// Dönemin "büyük resim" girişi — o dönemin ilk padişahında üstte gösterilir.
const ERA_INTRO = {
  kurulus:
    "Osmanlı, Moğol baskısından kaçıp Anadolu'ya gelen uç beyliklerinden yalnızca biriydi. " +
    "Diğer güçlü beylikler (Karamanoğulları, Germiyanoğulları) Anadolu'da 'Türk hakanlığı' için " +
    "birbirleriyle uğraşırken Osmanlı yüzünü Bizans'a, yani Batı'ya döndü. Bu strateji üç avantaj " +
    "sağladı: gaza/cihat anlayışıyla savaşçı ve sempatizan toplamak; Anadolu'daki yıpratıcı iç " +
    "mücadeleden uzak kalmak; Bizans ve Balkanlar'ın feodal parçalanmışlığını fırsata çevirmek.",

  duraklama:
    "Bu dönem (1566–1687) Osmanlı'nın zirve gücünü koruduğu, ama için için çözülmenin başladığı " +
    "dönemdir. Devletin yapısı değişir: padişahlar artık ordunun başında sefere çıkmaz (sefere " +
    "çıkmayan ilk padişah II. Selim); saray kadınları ve sadrazamlar öne çıkar (Sokullu ve " +
    "Köprülüler gibi sadrazamlar yönetimin merkezine oturur); askeri-mali düzen bozulur (Tımar " +
    "sistemi çöker, yerini nakit toplayan İltizam alır, yeniçeriler bozulur). Bir 'isyanlar " +
    "yüzyılı' yaşanır: Anadolu'da halk (Celali), asker (Yeniçeri) ve medrese öğrencisi (Suhte) isyanları.",

  gerileme:
    "17. yüzyılda (Duraklama) sorunların nedeni içeride aranır, 'Kanuni dönemine dönme' arzusu " +
    "hâkimdi. 18. yüzyılda (Gerileme) ise acı gerçek kabul edildi: Avrupa artık fersah fersah " +
    "üstündür. Karlofça (1699) ile benimsenen çizgi müdafaa/mevcudu korumadır. Osmanlı bu yüzyılda " +
    "üç evre yaşar: (1) Rövanş / geri alma çabası (1700–1718): Prut ile umutlanıp Pasarofça ile " +
    "yenilme; (2) Batı'yı örnek alma / Lale Devri (1718–1730): 'savaşarak kazanamıyoruz, Batı'nın " +
    "kültürünü, matbaasını, yaşam tarzını alalım'; (3) Askeri ıslahatlar çağı (1730–1789): 'lale " +
    "dikmek yetmez; Batı tarzı tıp, mühendislik, topçuluk ve ordu okulları açalım.'",

  yukselme:
    "Bu dönem (1453–1566) Osmanlı'nın 'Cihan Devleti' olduğu; Akdeniz'den Kızıldeniz'e, Viyana " +
    "kapılarından Basra Körfezi'ne uzandığı Altın Çağ'dır. Fatih imparatorluğu kurup mutlak " +
    "merkeziyetçiliği zirveye taşır; II. Bayezid iç sorunlar (Cem Sultan) yüzünden duraklar; Yavuz " +
    "yüzünü Doğu'ya dönüp 8 yılda hazineyi doldurur ve Halifeliği getirir; Kanuni ise Doğu ile Batı " +
    "arasında dengeyi kurar, Avrupa'daki mezhep savaşlarını (Protestanlık) destekleyerek Hristiyan " +
    "birliğini parçalar.",

  dagilma:
    "Osmanlı'nın 'En Uzun Yüzyılı'. Artık tek başına ayakta kalamaz; dışarıda Denge Politikası " +
    "(Avrupalıları birbirine düşürerek ömür uzatma), içeride ise Fransız İhtilali'nin yaydığı " +
    "milliyetçiliğe karşı azınlıkları devlete bağlama çabası vardır. Bağlama fikirleri sırayla: " +
    "Osmanlıcılık (Tanzimat–Islahat: din/dil/ırk farkı gözetmeksizin herkes eşit Osmanlı vatandaşı) " +
    "→ İslamcılık/Panislamizm (II. Abdülhamid: hiç değilse Müslümanları Halifelik etrafında " +
    "birleştir) → Türkçülük (II. Meşrutiyet / İttihat-Terakki: kurucu unsur Türkleri merkeze al). " +
    "Bir yandan radikal modernleşme, bir yandan iç isyan ve anayasal düzene geçiş sancıları."
};

const SULTANS = [
  {
    id: "osman1", no: 1, ad: "Osman Bey", lakap: "Gazi", yil: "1299 – 1326",
    era: "kurulus", status: "full",
    baslik: "Beylikten Devlete İlk Adım",
    ruh: "Osman Bey'in hedefi, Bizans sınırındaki tekfurlar (yerel valiler) arasındaki " +
         "anlaşmazlıklardan yararlanıp gaza yapmak ve İpek Yolu üzerindeki ticaret şehirlerini " +
         "alarak beyliğe ekonomik kaynak sağlamaktı.",
    savaslar: [
      {
        ad: "Koyunhisar (Bafeus) Savaşı", yil: "1302",
        kime: "Bizans + bölge tekfurlarının birleşik ordusu",
        sebep: "Osman Bey'in İznik ve Bursa'yı sıkıştırması üzerine Bizans'ın ilk kez doğrudan müdahalesi.",
        sonuc: "Osmanlı, Bizans'ın nizami ordusunu ilk kez yendi.",
        onem: "Osmanlı–Bizans arasındaki İLK resmî savaş. Halil İnalcık'a göre Osmanlı'nın gerçek kuruluşu bu andır; bağımsızlık ön Asya'ya ilan edilmiştir.",
        yerler: "Karacahisar, Yundhisar, Yenişehir, Bilecik, İnegöl. Bilecik ile demir madeni alınıp silah ihtiyacı karşılandı."
      }
    ],
    teskilat: [
      "Ahi desteği: Şeyh Edebalı'nın kızıyla evlilik — göçebe Türkmenleri yerleşik hayata geçirip şehirde ticaret ve asayişi örgütlemek için Ahilerin desteği şarttı.",
      "İstimalet (hoşgörü) politikası: Fethedilen yerdeki Hristiyan halkın dinine, malına, yaşamına dokunulmadı; vergi adaleti sağlandı. Balkan ilerleyişini kolaylaştırdı.",
      "İlk Osmanlı bakır parası (Mangır) basıldı — iktisadi bağımsızlığın simgesi.",
      "İlk vergi Bac (Pazar) Vergisi alınmaya başlandı.",
      "İlk kadı (Dursun Fakih) atandı."
    ],
    osym: [
      "Dönem 'aşiretten beyliğe geçiş' olarak tanımlanır.",
      "Gaza/cihat anlayışının, beylikler arası çatışmadan kaçınmak için bir 'araç' olarak kullanıldığı vurgulanır.",
      "İlk para + ilk kadı + ilk vergi = 'bağımsızlık ve devletleşme' göstergesi olarak sorulur."
    ],
    quiz: [
      {
        q: "Koyunhisar (Bafeus) Savaşı'nın Osmanlı için en ayırt edici önemi nedir?",
        secenek: ["İlk deniz zaferi", "Bizans ile yapılan ilk resmî savaş", "İlk Haçlı yenilgisi", "Balkanlar'daki ilk toprak"],
        dogru: 1,
        aciklama: "Koyunhisar, Osmanlı–Bizans arasındaki ilk resmî savaştır; bağımsızlığın ilanı sayılır."
      },
      {
        q: "İlk mangır (bakır para) basılması ÖSYM mantığında neyin göstergesidir?",
        secenek: ["Askeri güç", "İktisadi bağımsızlık / devletleşme", "Denizcilik", "Haçlı ittifakı"],
        dogru: 1,
        aciklama: "Para basmak egemenlik ve iktisadi bağımsızlığın simgesidir."
      }
    ]
  },

  {
    id: "orhan", no: 2, ad: "Orhan Bey", lakap: "Gazi", yil: "1326 – 1362",
    era: "kurulus", status: "full",
    baslik: "Beylikten Devlete Tam Geçiş",
    ruh: "Babasının mirasını kurumsallaştıran padişah. Sadece fethetmez; fethedileni elde tutacak " +
         "devlet mekanizmasını (ordu, meclis, adalet) kurar. Osmanlı artık geçici bir güç değil, kalıcı bir devlettir.",
    savaslar: [
      {
        ad: "Bursa'nın Fethi", yil: "1326",
        kime: "Bizans", sebep: "Uzun abluka.",
        sonuc: "Bursa alındı ve başkent yapıldı.",
        onem: "İpek Yolu merkezlerinden biri olduğu için hazine büyük ekonomik güç kazandı.",
        yerler: "Bursa (başkent)."
      },
      {
        ad: "Palekanon (Maltepe) Savaşı", yil: "1329",
        kime: "Bizans İmparatoru III. Andronikos",
        sebep: "Osmanlı'nın İznik'i kuşatması; Bizans'ın Anadolu'daki son topraklarını koruma isteği.",
        sonuc: "Bizans ağır yenildi; İznik (1331) ve İzmit (1337) fethedildi.",
        onem: "Bizans'ın Anadolu ile kara bağlantısı tamamen kesildi; Kocaeli yarımadası Türk hâkimiyetine girdi.",
        yerler: "İznik, İzmit."
      },
      {
        ad: "Karesioğulları'nın Alınması", yil: "1345",
        kime: "Karesioğulları Beyliği",
        sebep: "Beylikteki taht kavgaları ve Orhan Bey'in deniz gücüne ulaşma isteği.",
        sonuc: "Osmanlı'ya katılan ilk Türk beyliği.",
        onem: "İki dev sonuç: (1) Osmanlı ilk kez donanmaya sahip oldu; (2) Anadolu Türk Siyasi Birliği'nin ilk adımı atıldı.",
        yerler: "Balıkesir–Çanakkale çevresi."
      },
      {
        ad: "Çimpe Kalesi'nin Alınması", yil: "1353",
        kime: "Bizans (Kantakuzen'e yardım karşılığı)",
        sebep: "Bizans taht kavgasında Kantakuzen'e yardım karşılığı askeri üs olarak istendi.",
        sonuc: "Rumeli'deki ilk Osmanlı toprağı.",
        onem: "Buradan hareketle tüm Balkanlar fethedilecektir — Balkan fetihlerinin üssü.",
        yerler: "Çimpe (Gelibolu civarı)."
      }
    ],
    teskilat: [
      "Divan-ı Hümayun kuruldu (merkezi otorite için devlet işlerinin görüşüldüğü kurul).",
      "İlk düzenli ordu Yaya ve Müsellem kuruldu (göçebe savaşçılar yetersiz kalınca).",
      "İskan Politikası: Rumeli'ye Anadolu'dan Türkmenler yerleştirildi — fethedileni Türkleştirmek/İslamlaştırmak ve asayişi sağlamak.",
      "Sancak sistemi: şehzade I. Murad ilk kez Bursa sancak beyliğine atandı (idari tecrübe).",
      "İlk medrese (İznik Medresesi) açıldı, ilk müderris (Davud-u Kayseri) atandı."
    ],
    osym: [
      "Karesioğulları = 'denizciliğin başlaması' + 'Anadolu Türk Birliği'nin ilk adımı'.",
      "Çimpe Kalesi = 'Balkan fetihlerinin üssü'.",
      "İskan Politikası'nın mantığı: hem Rumeli'yi elde tutmak hem de Anadolu'daki kavgalı Türkmenleri birbirinden uzaklaştırıp huzuru sağlamak (neden-sonuç)."
    ],
    quiz: [
      {
        q: "Karesioğulları'nın alınmasının iki temel sonucu hangisidir?",
        secenek: ["Halifelik + para", "Donanma + Anadolu Türk Birliği'nin ilk adımı", "Devşirme + medrese", "Divan + sancak"],
        dogru: 1,
        aciklama: "İlk donanma ve Anadolu Türk Siyasi Birliği'nin ilk adımı Karesi ile gelir."
      },
      {
        q: "Rumeli'deki ilk Osmanlı toprağı ve Balkan fetihlerinin üssü neresidir?",
        secenek: ["Edirne", "Bursa", "Çimpe Kalesi", "Gelibolu"],
        dogru: 2,
        aciklama: "1353'te alınan Çimpe Kalesi, Rumeli'deki ilk topraktır."
      }
    ]
  },

  {
    id: "murad1", no: 3, ad: "I. Murad", lakap: "Hüdavendigâr", yil: "1362 – 1389",
    era: "kurulus", status: "full",
    baslik: "Balkanlar'da İmparatorluk Sınırları",
    ruh: "Osmanlı'nın Balkanlar'da yerleşik güç hâline geldiği; Avrupalıların Osmanlı'yı kıtadan atmak " +
         "için 'Haçlı ittifakları' kurmaya başladığı dönem.",
    savaslar: [
      {
        ad: "Sazlıdere Savaşı", yil: "1363",
        kime: "Bizans + Bulgar", sebep: "Balkan ilerleyişi.",
        sonuc: "Edirne fethedildi ve hemen başkent yapıldı.",
        onem: "Fetih yönü Balkanlar olduğu için lojistik merkez Edirne'ye taşındı.",
        yerler: "Edirne (başkent)."
      },
      {
        ad: "Sırpsındığı Savaşı", yil: "1364",
        kime: "İlk Haçlı İttifakı (Sırp, Bulgar, Macar, Eflak, Boğdan)",
        sebep: "Türklerin Edirne'yi alıp Balkanlar'da ilerlemesini durdurmak.",
        sonuc: "Hacı İlbeyi'nin keşif birliği gece baskınıyla Haçlıları yok etti.",
        onem: "Osmanlı'nın Haçlılarla İLK savaşı. Macarların Balkan etkisi kırıldı.",
        yerler: "Meriç civarı."
      },
      {
        ad: "Çirmen Savaşı", yil: "1371",
        kime: "Sırplar", sebep: "Balkan hâkimiyeti.",
        sonuc: "Sırplar yenildi.",
        onem: "Makedonya'nın kapıları Türklere açıldı.",
        yerler: "Makedonya yönü."
      },
      {
        ad: "Ploşnik Bozgunu", yil: "1387",
        kime: "Balkan kuvvetleri", sebep: "—",
        sonuc: "Osmanlı'nın Balkanlar'daki ilk ciddi mağlubiyeti.",
        onem: "Cesaret alan Avrupa, dev bir Haçlı ordusu toplamaya yöneldi (I. Kosova'nın fitili).",
        yerler: "—"
      },
      {
        ad: "I. Kosova Savaşı", yil: "1389",
        kime: "Büyük Haçlı Müttefik Ordusu",
        sebep: "Ploşnik'ten cesaret alan Haçlıların Türkleri Balkanlar'dan tamamen atma isteği.",
        sonuc: "Büyük zafer; ancak I. Murad savaş sonrası Sırp Miloş Obiliç'çe şehit edildi.",
        onem: "İlk kez top (ses/korkutma amaçlı) kullanıldı. Sırplar Osmanlı üstünlüğünü kabul etti.",
        yerler: "Kosova."
      }
    ],
    teskilat: [
      "Anadolu'da barışçıl strateji: Yıldırım Bayezid'i Germiyanoğlu kızıyla evlendirip çeyizle Kütahya, Simav, Tavşanlı alındı; Hamitoğulları'ndan para ile Isparta çevresi satın alındı.",
      "Veraset değişikliği: 'Devlet hanedanın ortak malıdır' -> 'Devlet padişah ve oğullarının malıdır'. Amaç: taht kavgasını azaltıp merkezi otoriteyi güçlendirmek.",
      "Devşirme sistemi ve Pençik usulü (esirlerin 1/5'i orduya) başlatıldı.",
      "Kapıkulu Ocağı ve Yeniçeri Ocağı kuruldu.",
      "Rumeli Beylerbeyliği kuruldu (merkez Manastır); ilk beylerbeyi Lala Şahin Paşa."
    ],
    osym: [
      "Veraset değişikliği doğrudan 'merkezi otoriteyi artırma hamlesi' olarak sorulur.",
      "Haçlı savaşları sıralaması çok sevilir: Sırpsındığı → I. Kosova → Niğbolu → Varna → II. Kosova. Sırpsındığı İLK'tir.",
      "Beylik topraklarının çeyiz ve para ile alınması 'savaşsız diplomasi' örneğidir."
    ],
    quiz: [
      {
        q: "Osmanlı'nın Haçlılarla yaptığı İLK savaş hangisidir?",
        secenek: ["I. Kosova", "Niğbolu", "Sırpsındığı", "Varna"],
        dogru: 2,
        aciklama: "1364 Sırpsındığı, Haçlılarla ilk savaştır."
      },
      {
        q: "I. Murad'ın veraset sistemini değiştirmesi ÖSYM'de en çok neyle ilişkilendirilir?",
        secenek: ["Denizciliğin gelişmesi", "Merkezi otoritenin güçlendirilmesi", "İstimalet politikası", "Halifeliğin alınması"],
        dogru: 1,
        aciklama: "'Devlet padişah ve oğullarının' ilkesi taht kavgasını azaltıp merkezi otoriteyi güçlendirmeye dönüktür."
      }
    ]
  },

  {
    id: "bayezid1", no: 4, ad: "I. Bayezid", lakap: "Yıldırım", yil: "1389 – 1402",
    era: "kurulus", status: "full",
    baslik: "Zirveden Fetret'e Düşüş",
    ruh: "Hızlı, sert ve merkeziyetçi bir padişah. Anadolu Türk Siyasi Birliği'ni ilk kez büyük oranda " +
         "sağlar; fakat İstanbul'u kuşatmışken Doğu'dan gelen Timur tehdidi devleti yıkımın eşiğine getirir.",
    savaslar: [
      {
        ad: "İstanbul Kuşatmaları", yil: "1391–1401",
        kime: "Bizans", sebep: "Bizans'ı ortadan kaldırma.",
        sonuc: "İstanbul'u ilk kez kuşatan padişah (4 kez).",
        onem: "Boğaz'ın kuzeyinden gelecek yardımı kesmek için Anadolu Hisarı (Güzelce Hisar) yaptırıldı.",
        yerler: "İstanbul, Anadolu Hisarı."
      },
      {
        ad: "Niğbolu Savaşı", yil: "1396",
        kime: "Avrupalı krallar + şövalyeler + Papa'nın dev Haçlı ordusu",
        sebep: "Bayezid'in İstanbul kuşatması üzerine Bizans'ın Avrupa'dan yardım istemesi.",
        sonuc: "Haçlılar darmadağın; Bulgar Krallığı tamamen ortadan kaldırıldı.",
        onem: "Abbasi Halifesi, Bayezid'e 'Sultan-ı İklim-i Rûm' unvanını verdi; İslam dünyasındaki prestij ve Anadolu beylikleri üzerindeki meşruiyet tavan yaptı.",
        yerler: "Niğbolu (Bulgaristan)."
      },
      {
        ad: "Ankara Savaşı", yil: "1402",
        kime: "Timur (Türk-Moğol hükümdarı)",
        sebep: "Karşılıklı cihan hâkimiyeti iddiası ve sert mektuplaşma; toprağı alınan Anadolu beylerinin Timur'a, Timur'dan kaçanların Yıldırım'a sığınıp kışkırtması; Timur'un Çin seferi öncesi arkasında güçlü bir Osmanlı bırakmak istememesi.",
        sonuc: "Kara Tatar ve beylik askerlerinin taraf değiştirmesiyle Osmanlı ağır yenildi; Yıldırım esir düştü ve esarette öldü.",
        onem: "Anadolu Türk Siyasi Birliği bozuldu (beylikler yeniden kuruldu), İstanbul'un fethi ~50 yıl gecikti, 11 yıllık Fetret Devri başladı.",
        yerler: "Ankara (Çubuk Ovası)."
      }
    ],
    teskilat: [
      "Merkeziyetçi, sert yönetim; Anadolu beyliklerinin büyük kısmı ilk kez tek çatı altında toplandı.",
      "ÖSYM sever – şaşırtıcı detay: Ankara Savaşı sonrası Anadolu dağılırken Balkanlar'da büyük isyan çıkmadı, toprak kaybı neredeyse yok. Neden? Adil vergi + istimalet (dini hoşgörü) + başarılı iskan sayesinde halk yönetimden memnundu."
    ],
    osym: [
      "'Sultan-ı İklim-i Rûm' unvanı = İslam dünyasında prestij + Anadolu'da meşruiyet.",
      "Ankara Savaşı'nın sonuçları zinciri: Anadolu birliği bozuldu → fetih gecikti → Fetret Devri.",
      "Balkanlar'ın sadık kalması istimalet/iskan/adil vergi politikasının başarısı olarak sorulur."
    ],
    quiz: [
      {
        q: "Ankara Savaşı'nın (1402) doğrudan sonucu aşağıdakilerden hangisidir?",
        secenek: ["İstanbul'un fethi", "Fetret Devri'nin başlaması", "Halifeliğin alınması", "Denizciliğin başlaması"],
        dogru: 1,
        aciklama: "Yenilgi Anadolu birliğini bozdu ve 11 yıllık Fetret Devri'ni başlattı."
      },
      {
        q: "Niğbolu Zaferi sonrası Yıldırım'a 'Sultan-ı İklim-i Rûm' unvanını kim verdi?",
        secenek: ["Bizans İmparatoru", "Abbasi Halifesi", "Papa", "Timur"],
        dogru: 1,
        aciklama: "Abbasi Halifesi bu unvanı vererek Osmanlı prestijini yükseltti."
      }
    ]
  },

  {
    id: "fetret", no: null, ad: "Fetret Devri", lakap: "Ara Dönem (Taht Kavgaları)", yil: "1402 – 1413",
    era: "kurulus", status: "stub", araDonem: true,
    baslik: "Devletsiz 11 Yıl",
    ruh: "Ankara yenilgisinin ardından şehzadeler (Süleyman, İsa, Musa, Mehmed Çelebi) arasında " +
         "11 yıl süren taht kavgası. Merkezi otorite yoktur; devlet dağılmanın eşiğindedir."
  },

  {
    id: "mehmed1", no: 5, ad: "I. Mehmed", lakap: "Çelebi", yil: "1413 – 1421",
    era: "kurulus", status: "full",
    baslik: "Devletin İkinci Kurucusu",
    ruh: "Fetret Devri'nin yıkımını ve kardeşleriyle 11 yıllık taht kavgasını sonlandırıp devleti " +
         "yeniden toparlayan padişah. Stratejisi fetihten çok iç düzeni sağlamak ve yıkılan devlet otoritesini yeniden kurmaktır.",
    savaslar: [
      {
        ad: "Şeyh Bedrettin İsyanı", yil: "1416 civarı",
        kime: "İç isyan (dini-sosyal)",
        sebep: "Fetret'in getirdiği ekonomik kriz, sosyal huzursuzluk ve Şeyh Bedrettin'in ortak mülkiyetçi (komünitel) dini-sosyal fikirleri.",
        sonuc: "İsyan bastırıldı; Şeyh Bedrettin ve müridleri (Börklüce Mustafa, Torlak Kemal) cezalandırıldı.",
        onem: "Osmanlı tarihindeki İLK dini ve sosyal nitelikli isyan.",
        yerler: "Rumeli / Batı Anadolu."
      },
      {
        ad: "Mustafa Çelebi (Düzmece Mustafa) İsyanı", yil: "1416 sonrası",
        kime: "İç taht mücadelesi",
        sebep: "Timur'un Semerkand'a götürdüğü Yıldırım'ın oğlu Mustafa'nın dönüp tahtta hak iddia etmesi.",
        sonuc: "Çelebi Mehmed 'o düzmecedir' diyerek reddedip isyanı bastırdı (Mustafa Bizans'a sığındı).",
        onem: "Merkezi otoritenin yeniden tesisi mücadelesinin parçası.",
        yerler: "Rumeli."
      },
      {
        ad: "Venedik ile İlk Deniz Savaşı (Çalı Bey Savaşı)", yil: "1416",
        kime: "Venedik",
        sebep: "Ege'deki Osmanlı ticaret gemilerine Venedik müdahalesi.",
        sonuc: "Osmanlı donanması yenildi.",
        onem: "Osmanlı donanmasının henüz açık denizde Akdeniz'in devi Venedik ile baş edemeyeceğini gösterir.",
        yerler: "Ege Denizi."
      }
    ],
    teskilat: [
      "Anadolu politikası: Timur'un yeniden kurdurduğu beyliklerin bir kısmı (Aydınoğulları, Saruhanoğulları) tekrar Osmanlı'ya bağlanarak Anadolu birliği yeniden tesis edilmeye başlandı.",
      "İç düzenin ve devlet otoritesinin yeniden kurulması önceliklendirildi."
    ],
    osym: [
      "'Devletin II. Kurucusu' denmesinin nedeni: yıkılmak üzere olan devleti toparlaması.",
      "Şeyh Bedrettin İsyanı: tarihteki İLK sosyo-dini isyan olması yönüyle çok sorulur.",
      "Venedik ile ilk deniz savaşı: Osmanlı denizciliğinin henüz emekleme aşamasında olduğunun kanıtı."
    ],
    quiz: [
      {
        q: "Osmanlı tarihindeki ilk dini ve sosyal nitelikli isyan hangisidir?",
        secenek: ["Düzmece Mustafa", "Şeyh Bedrettin", "Celali", "Patrona Halil"],
        dogru: 1,
        aciklama: "Şeyh Bedrettin İsyanı ilk sosyo-dini isyandır."
      },
      {
        q: "Çelebi Mehmed'e neden 'Devletin II. Kurucusu' denir?",
        secenek: ["İstanbul'u fethettiği için", "Halifeliği aldığı için", "Yıkılmak üzere olan devleti toparladığı için", "Donanmayı kurduğu için"],
        dogru: 2,
        aciklama: "Fetret'in yıkımını gidermesi nedeniyle bu unvan verilir."
      }
    ]
  },

  // ————— İskelet padişahlar (içerik yakında). Sırayla doldurulacak. —————
  {
    id: "murad2", no: 6, ad: "II. Murad", lakap: "Gazi", yil: "1421 – 1451",
    era: "kurulus", status: "full",
    baslik: "Balkanlar'ın Kesin Hâkimi",
    ruh: "Düzmece Mustafa ve Bizans'ın kışkırttığı iç isyanlarla uğraşarak tahta çıktı. Balkanlar'daki " +
         "Haçlı baskısını tamamen kırıp oğlu II. Mehmed'e (Fatih) İstanbul'u alacak güçlü ve huzurlu bir devlet bıraktı.",
    savaslar: [
      {
        ad: "Edirne-Segedin Antlaşması", yil: "1444",
        kime: "Macarlar",
        sebep: "Balkanlar'daki yenilgiler ve Karamanoğulları'nın arkadan vurması — iki ateş arasında kalmamak.",
        sonuc: "10 yıl savaşılmayacak; II. Murad bu barışa güvenip tahtı 12 yaşındaki oğlu II. Mehmed'e bıraktı.",
        onem: "Osmanlı'nın Avrupalılarla imzaladığı İLK barış antlaşması.",
        yerler: "—"
      },
      {
        ad: "Varna Savaşı", yil: "1444",
        kime: "Avrupalı Haçlı Ordusu",
        sebep: "Tahta 12 yaşında bir çocuğun çıkmasını fırsat bilen Haçlıların Edirne-Segedin'i ihlali.",
        sonuc: "II. Murad ordunun başına yeniden geçip Haçlıları ağır yendi.",
        onem: "Balkan hâkimiyetini pekiştiren zafer.",
        yerler: "Varna (Bulgaristan)."
      },
      {
        ad: "II. Kosova Savaşı", yil: "1448",
        kime: "Yanoş Hunyadi liderliğindeki Haçlı Ordusu",
        sebep: "Varna'nın intikamı ve Türkleri Balkanlar'dan söküp atma isteği.",
        sonuc: "Haçlılar yok edildi.",
        onem: "Türklerin Balkanlar'dan atılamayacağı KESİNLEŞTİ; Osmanlı taarruza, Avrupa savunmaya geçti (Miryokefalon / Sakarya mantığı).",
        yerler: "Kosova."
      }
    ],
    teskilat: [
      "Buçuktepe İsyanı (1446): II. Mehmed'in ilk taht yıllarında yeniçerilerin maaş azlığıyla çıkardığı tarihteki İLK Yeniçeri isyanı; bunun üzerine II. Murad tekrar tahta geçti.",
      "Enderun Mektebi: devlet adamı ve bürokrat yetiştirmek için Edirne Sarayı'nda ilk kez kurumsallaştırıldı."
    ],
    osym: [
      "II. Kosova = Türklerin Balkan varlığı kesinleşti, Avrupa savunmaya çekildi (savunma→taarruz dönüşümü).",
      "Edirne-Segedin = Avrupalılarla yapılan İLK antlaşma.",
      "Buçuktepe = İLK yeniçeri isyanı."
    ],
    quiz: [
      {
        q: "II. Kosova Savaşı'nın (1448) en temel stratejik sonucu nedir?",
        secenek: ["İstanbul'un fethi", "Türklerin Balkanlar'dan atılamayacağının kesinleşmesi", "Halifeliğin alınması", "Anadolu birliğinin bozulması"],
        dogru: 1,
        aciklama: "II. Kosova ile Türklerin Balkan varlığı kesinleşti; Osmanlı taarruza, Avrupa savunmaya geçti."
      },
      {
        q: "Osmanlı'nın Avrupalılarla imzaladığı ilk barış antlaşması hangisidir?",
        secenek: ["Edirne-Segedin (1444)", "Karlofça (1699)", "İstanbul (1533)", "Amasya (1555)"],
        dogru: 0,
        aciklama: "1444 Edirne-Segedin, Avrupalılarla yapılan ilk barış antlaşmasıdır."
      }
    ]
  },
  {
    id: "fatih", no: 7, ad: "II. Mehmed", lakap: "Fatih", yil: "1451 – 1481",
    era: "yukselme", status: "full",
    baslik: "İmparatorluğun Mimarı ve Kurucusu",
    ruh: "Orta Çağ'ı kapatıp Yeni Çağ'ı açan, feodaliteden mutlak krallığa geçişin dünyadaki sembolü. " +
         "Amacı merkezi otoriteyi tek elde toplamak ve Osmanlı'yı bir Cihan İmparatorluğu yapmaktı.",
    savaslar: [
      {
        ad: "İstanbul'un Fethi", yil: "1453",
        kime: "Bizans",
        sebep: "Bizans'ın şehzadeleri kışkırtması, sürekli Haçlı çağırması, Anadolu-Rumeli toprak bütünlüğünü bozması ve İpek Yolu kontrolü.",
        sonuc: "II. Mehmed 'Fatih' unvanını aldı; Karadeniz ticaret yolu Osmanlı'ya geçti. Yükselme Dönemi başladı.",
        onem: "Dünya tarihi: büyük toplar (Şahi) surları yıkınca feodalite sarsıldı; İtalya'ya kaçan Bizanslı bilginler Rönesans'ı tetikledi; İpek Yolu Türklere geçince Avrupa Coğrafi Keşifler'e yöneldi.",
        yerler: "İstanbul."
      },
      {
        ad: "Otlukbeli Savaşı", yil: "1473",
        kime: "Akkoyunlu (Uzun Hasan)",
        sebep: "Doğu'daki Akkoyunlu tehdidi.",
        sonuc: "Uzun Hasan mağlup edildi.",
        onem: "Doğu Anadolu güvenlik altına alındı.",
        yerler: "Otlukbeli (Erzincan)."
      },
      {
        ad: "Anadolu, Balkan ve Deniz Fetihleri", yil: "1459–1475",
        kime: "Ceneviz, Candaroğulları, Trabzon Rum, Karaman, Sırbistan, Bosna, Mora, Kırım",
        sebep: "Toprak bütünlüğü ve Bizans diriliş umutlarını yok etmek.",
        sonuc: "Amasra, Sinop, Trabzon (1461), Karaman; Sırbistan, Bosna-Hersek, Mora, Eflak-Boğdan ve Kırım (1475) alındı.",
        onem: "Kırım'ın alınmasıyla Karadeniz bir TÜRK GÖLÜ hâline geldi.",
        yerler: "Karadeniz çevresi, Balkanlar."
      },
      {
        ad: "Otranto Seferi", yil: "1480",
        kime: "Napoli Krallığı (İtalya)",
        sebep: "Roma'yı (Batı Roma) fethetme hedefi.",
        sonuc: "Gedik Ahmet Paşa Otranto'yu aldı; Fatih'in ölümüyle sefer yarım kaldı.",
        onem: "İtalya'ya ayak basıldı ama hedef tamamlanamadı.",
        yerler: "Otranto (İtalya)."
      }
    ],
    teskilat: [
      "Kanunname-i Âl-i Osman: ilk Osmanlı yazılı kanunnamesi; 'kardeş katli vaciptir' maddesiyle taht kavgaları engellenip merkezi otorite pekiştirildi.",
      "Müsadere sistemi: üst düzey yöneticilerin (ör. Çandarlı Halil Paşa) malına devletçe el konması — padişaha rakip olabilecek köklü aileleri engellemek.",
      "Divan başkanlığı sadrazamlara devredildi; padişah kasr-ı adl'den izledi — sadrazamı 'kul' konumuna indirip padişahı ulaşılmaz mutlak güç yapmak.",
      "Topkapı Sarayı ve üst düzey Sahn-ı Seman Medreseleri açıldı.",
      "İlk Osmanlı altın parası (Sikke-i Hasene) basıldı — ekonomik gücün zirvesi.",
      "İlk ticari kapitülasyon Venedik'e verildi — Hristiyan birliğini bölmek ve Akdeniz ticaretini canlı tutmak."
    ],
    osym: [
      "Müsadere + kardeş katli + Divan başkanlığının devri = tek başlıkta 'merkezi otorite ve padişahın mutlak gücünü artırma'.",
      "Kırım'ın fethi = 'Karadeniz'in Türk gölü olması'.",
      "Trabzon Rum ve Mora = 'Bizans'ı diriltme umutlarını tamamen yok etmek'."
    ],
    quiz: [
      {
        q: "Fatih'in müsadere, kardeş katli ve Divan başkanlığını sadrazama devretmesi ortak olarak neyi amaçlar?",
        secenek: ["Denizciliği geliştirmek", "Merkezi otoriteyi ve padişahın mutlak gücünü artırmak", "İstimalet politikası", "Halifeliği almak"],
        dogru: 1,
        aciklama: "Üçü de padişahın mutlak, ulaşılmaz otoritesini pekiştirmeye dönüktür."
      },
      {
        q: "Fatih döneminde Karadeniz'in 'Türk gölü' hâline gelmesini sağlayan fetih hangisidir?",
        secenek: ["Trabzon", "Kırım", "Otranto", "Belgrat"],
        dogru: 1,
        aciklama: "1475'te Kırım'ın alınmasıyla Karadeniz bir Türk gölü oldu."
      },
      {
        q: "İstanbul'un fethinin dünya tarihi açısından bir sonucu değildir?",
        secenek: ["Feodalitenin sarsılması", "Rönesans'ın tetiklenmesi", "Coğrafi Keşifler'e yönelim", "Sanayi İnkılabı'nın başlaması"],
        dogru: 3,
        aciklama: "Feodalite, Rönesans ve Coğrafi Keşifler fetihle ilişkilendirilir; Sanayi İnkılabı çok sonradır."
      }
    ]
  },
  {
    id: "bayezid2", no: 8, ad: "II. Bayezid", lakap: "Veli", yil: "1481 – 1512",
    era: "yukselme", status: "full",
    baslik: "Yükselme İçinde Duraklama",
    ruh: "Fatih gibi agresif bir babadan sonra tahta geçen, dindar ve sakin kişiliğiyle 'Veli' anılan " +
         "padişah. İç sorunlar (özellikle Cem Sultan) yüzünden dış politikada pasif kalındı.",
    savasBaslik: "📜 İç/Dış Sorunlar & Olaylar",
    savaslar: [
      {
        ad: "Cem Sultan Olayı", yil: "1481–1495",
        kime: "Kardeş Cem Sultan (taht mücadelesi)",
        sebep: "Cem Sultan'ın taht iddiası.",
        sonuc: "Cem önce Karamanoğulları'na, sonra Memlükler'e, ardından Rodos Şövalyeleri'ne, en son Papa'ya sığındı.",
        onem: "Bir iç mesele iken dış meseleye dönüşen İLK olay. Papa'nın elinde koz olduğu için Osmanlı Batı'da fetih yapamadı, pasif kaldı.",
        yerler: "—"
      },
      {
        ad: "Şahkulu İsyanı", yil: "1511",
        kime: "Safavi (Şah İsmail) destekli Şii grup",
        sebep: "İran kaynaklı Şii propaganda.",
        sonuc: "İsyan güçlükle bastırıldı.",
        onem: "Osmanlı'daki İLK Şii nitelikli dini-siyasi isyan. Bu yetersizliği gören Şehzade Selim (Yavuz) harekete geçti.",
        yerler: "Antalya-Teke yöresi."
      },
      {
        ad: "İspanya'daki Müslüman ve Yahudilerin Kurtarılması", yil: "1492",
        kime: "İnsani/donanma operasyonu",
        sebep: "İspanya'da katliama uğrayan Yahudi ve Müslümanlar.",
        sonuc: "Kemal Reis komutasındaki gemilerle Selanik ve İstanbul'a taşındılar.",
        onem: "Osmanlı denizciliğinin ve istimalet anlayışının bir yansıması.",
        yerler: "İspanya → Selanik, İstanbul."
      }
    ],
    teskilat: [
      "İç sorunlar yüzünden fetih durakladı; dönem 'yükselme içinde duraklama' olarak nitelenir.",
      "Yavuz, yeniçerilerin desteğiyle babası II. Bayezid'i tahttan indiren ilk padişah oldu."
    ],
    osym: [
      "Cem Sultan = 'iç sorunun dış soruna dönüşmesi' + Yükselme'de fetihlerin duraklama sebebi.",
      "Şahkulu = Safavi/İran kaynaklı ilk Şii nitelikli isyan.",
      "Yavuz = yeniçeri desteğiyle tahta geçen ilk padişah."
    ],
    quiz: [
      {
        q: "Osmanlı tarihinde bir iç sorunun ilk kez dış soruna dönüştüğü olay hangisidir?",
        secenek: ["Şahkulu İsyanı", "Cem Sultan Olayı", "Şeyh Bedrettin İsyanı", "Buçuktepe İsyanı"],
        dogru: 1,
        aciklama: "Cem Sultan'ın Papa'ya kadar sığınması, iç meseleyi bir dış/diplomatik soruna çevirdi."
      },
      {
        q: "II. Bayezid döneminde çıkan, Safavi destekli ilk Şii nitelikli isyan hangisidir?",
        secenek: ["Celali", "Şahkulu", "Patrona Halil", "Şeyh Bedrettin"],
        dogru: 1,
        aciklama: "1511 Şahkulu İsyanı, Osmanlı'daki ilk Şii nitelikli dini-siyasi isyandır."
      }
    ]
  },
  {
    id: "selim1", no: 9, ad: "I. Selim", lakap: "Yavuz", yil: "1512 – 1520",
    era: "yukselme", status: "full",
    baslik: "8 Yıla 80 Yıllık İş Sığdıran Sultan",
    ruh: "Babası dönemindeki Doğu tehdidini gören Yavuz, yönünü tamamen Doğu ve Güney'e çevirdi. " +
         "Amacı İslam dünyasındaki liderlik kargaşasına son vermek ve İpek-Baharat yollarını kontrol altına almaktı.",
    savaslar: [
      {
        ad: "Çaldıran Savaşı", yil: "1514",
        kime: "Safavi Devleti (Şah İsmail)",
        sebep: "Doğu Anadolu'daki Şii propagandasını bitirmek ve Doğu sınırını güvenceye almak.",
        sonuc: "Safavi ordusu yok edildi, Tebriz'e girildi; Safavi tehdidi uzun süre engellendi.",
        onem: "Doğu sınırının güvenliği ve Anadolu birliğine giden yol.",
        yerler: "Çaldıran (Van kuzeyi), Tebriz."
      },
      {
        ad: "Turnadağ Savaşı", yil: "1515",
        kime: "Dulkadiroğulları Beyliği",
        sebep: "Anadolu'daki son bağımsız beyliği ortadan kaldırmak.",
        sonuc: "Beylik yıkıldı.",
        onem: "Anadolu Türk Siyasi Birliği KESİN VE KESİNTİSİZ sağlandı (Karesi ilk adım, Turnadağ son adım).",
        yerler: "Turnadağ (Kahramanmaraş)."
      },
      {
        ad: "Mısır Seferi: Mercidabık ve Ridaniye", yil: "1516–1517",
        kime: "Memlük Devleti",
        sebep: "Memlükler'in Safavilerle ittifakı, Hicaz su yolları meselesi ve Baharat Yolu'nu ele geçirme arzusu.",
        sonuc: "Memlük Devleti yıkıldı; Halifelik Osmanlı'ya geçti (ilk halife Yavuz, devlet teokratik yapıya büründü); Kutsal Emanetler Topkapı'ya getirildi; Baharat Yolu ve Mısır altınları ele geçti.",
        onem: "İslam dünyasının liderliği ve kutsal toprakların koruyuculuğu Osmanlı'ya geçti.",
        yerler: "Mercidabık (Halep), Ridaniye (Kahire)."
      }
    ],
    teskilat: [
      "Halifeliğin Osmanlı'ya geçişiyle devlet resmen teokratik (dinî) nitelik kazandı.",
      "Yavuz hazineyi mühürleyip 'Kim benim kadar doldurursa mührü onun olsun' demiştir — hazine ağzına kadar doldu.",
      "Coğrafi Keşifler yüzünden yön değiştiren Baharat Yolu'ndan beklenen gelir tam alınamadı."
    ],
    osym: [
      "Turnadağ = Anadolu Türk Siyasi Birliği'nin KESİN sağlanması (Karesi ilk, Turnadağ son).",
      "Mısır Seferi = Halifeliğin gelişi (teokrasi) + Baharat Yolu + Kutsal Emanetler.",
      "Coğrafi Keşifler nedeniyle Baharat Yolu'ndan beklenen ekonomik gelirin tam elde edilememesi sorulur."
    ],
    quiz: [
      {
        q: "Anadolu Türk Siyasi Birliği'nin KESİN olarak sağlandığı savaş hangisidir?",
        secenek: ["Koyunhisar", "Karesi'nin alınması", "Turnadağ", "Çaldıran"],
        dogru: 2,
        aciklama: "1515 Turnadağ ile Dulkadiroğulları yıkıldı ve Anadolu birliği kesin sağlandı (Karesi ilk adımdı)."
      },
      {
        q: "Halifeliğin Osmanlı'ya geçmesi ve devletin teokratik yapıya bürünmesi hangi seferin sonucudur?",
        secenek: ["Çaldıran", "Mısır Seferi (Mercidabık-Ridaniye)", "Otlukbeli", "Mohaç"],
        dogru: 1,
        aciklama: "1516-1517 Mısır Seferi ile Memlük yıkıldı, Halifelik Osmanlı'ya geçti."
      }
    ]
  },
  {
    id: "suleyman1", no: 10, ad: "I. Süleyman", lakap: "Kanuni", yil: "1520 – 1566",
    era: "yukselme", status: "full",
    baslik: "Muhteşem Süleyman ve Cihan Hâkimiyeti",
    ruh: "Osmanlı'nın en uzun süre (46 yıl) tahtta kalan padişahı. Dolu bir hazine ve emniyetli bir Doğu " +
         "sınırı devraldı. Stratejisi: Batı'da Şarlken'in 'tek dünya imparatorluğu'nu engellemek, Avrupa'yı parçalamak ve Akdeniz'i Türk gölü yapmaktı.",
    savaslar: [
      {
        ad: "Belgrat'ın Fethi", yil: "1521",
        kime: "Macaristan", sebep: "Orta Avrupa fetihlerine üs.",
        sonuc: "Belgrat alındı.", onem: "Orta Avrupa seferlerinin kilit üssü elde edildi.",
        yerler: "Belgrat."
      },
      {
        ad: "Mohaç Meydan Muharebesi", yil: "1526",
        kime: "Macaristan",
        sebep: "Macar tehdidini bitirmek.",
        sonuc: "Macaristan Osmanlı'ya bağlandı; Osmanlı ile Avusturya komşu oldu.",
        onem: "Dünyanın en kısa süren meydan savaşı (yaklaşık 2 saat).",
        yerler: "Mohaç (Macaristan)."
      },
      {
        ad: "İstanbul (İbrahim Paşa) Antlaşması", yil: "1533",
        kime: "Avusturya (Arşidük Ferdinand)",
        sebep: "Avusturya ile üstünlük meselesi.",
        sonuc: "Avusturya arşidükü, protokolde Osmanlı SADRAZAMINA denk sayıldı.",
        onem: "Osmanlı, Avusturya üzerinde SİYASİ ÜSTÜNLÜĞÜNÜ kabul ettirdi.",
        yerler: "—"
      },
      {
        ad: "Preveze Deniz Zaferi", yil: "1538",
        kime: "Andrea Doria komutasındaki Haçlı Donanması",
        sebep: "Akdeniz hâkimiyeti.",
        sonuc: "Barbaros Hayrettin Paşa Haçlı donanmasını yendi.",
        onem: "Akdeniz KESİN olarak Türk gölü hâline geldi (27 Eylül bugün Donanma Günü).",
        yerler: "Preveze (Yunanistan)."
      },
      {
        ad: "Fransa'ya Kapitülasyon Verilmesi", yil: "1535",
        kime: "Fransa (I. Fransuva)",
        sebep: "Avrupa Hristiyan birliğini bozmak ve Coğrafi Keşiflerle sönen Akdeniz ticaretini canlandırmak.",
        sonuc: "Kapitülasyonlar 'her iki hükümdar sağ kaldığı sürece' geçerli tutuldu (tedbir maddesi).",
        onem: "Diplomatik bir silah olarak kapitülasyon; ileride sürekli hâle gelince ekonomiyi zorlayacaktır.",
        yerler: "—"
      },
      {
        ad: "Amasya Antlaşması", yil: "1555",
        kime: "İran (Safaviler)",
        sebep: "Uzun İran savaşlarının sonu.",
        sonuc: "Osmanlı ile İran arasında imzalanan İLK resmî antlaşma.",
        onem: "Doğu sınırında ilk resmî diplomatik düzenleme.",
        yerler: "Amasya."
      }
    ],
    teskilat: [
      "Hint Deniz Seferleri (1538–1553): Portekiz'in Hint Okyanusu'ndaki Müslümanlara baskısını kırmak için yapıldı; gemilerin okyanusa dayanıksızlığı ve bölge beylerinin desteksizliği yüzünden tam başarı sağlanamadı.",
      "Kanuni, Avrupa'da Martin Luther ve Protestanları destekleyerek Haçlı/Katolik birliğini bölme stratejisi izledi."
    ],
    osym: [
      "1533 İstanbul Antlaşması = 'siyasi/protokol üstünlüğü' kavramı.",
      "Preveze = 'Akdeniz'in Türk gölü olması'.",
      "Fransa kapitülasyonunun neden 'iki hükümdarın ömrüyle sınırlı' tutulduğu mantık sorusu olarak; Protestan desteği = 'Avrupa Haçlı birliğini parçalama'."
    ],
    quiz: [
      {
        q: "Akdeniz'in kesin olarak Türk gölü hâline gelmesini sağlayan zafer hangisidir?",
        secenek: ["İnebahtı", "Preveze", "Çeşme", "Mohaç"],
        dogru: 1,
        aciklama: "1538 Preveze Deniz Zaferi ile Akdeniz kesin olarak Türk gölü oldu."
      },
      {
        q: "1533 İstanbul (İbrahim Paşa) Antlaşması Osmanlı'ya ne kazandırmıştır?",
        secenek: ["Halifelik", "Avusturya üzerinde siyasi/protokol üstünlüğü", "Kırım'ın fethi", "İlk kapitülasyon"],
        dogru: 1,
        aciklama: "Avusturya arşidükü sadrazama denk sayılarak Osmanlı'nın siyasi üstünlüğü kabul ettirildi."
      },
      {
        q: "Kanuni'nin Avrupa'da Protestanları desteklemesinin temel amacı nedir?",
        secenek: ["Ticaret geliri", "Avrupa Hristiyan (Haçlı) birliğini parçalamak", "Halifelik", "Denizcilik"],
        dogru: 1,
        aciklama: "Mezhep ayrılığını körükleyerek Katolik/Haçlı birliğini bölmek amaçlanmıştır."
      }
    ]
  },
  {
    id: "selim2", no: 11, ad: "II. Selim", lakap: "Sarı", yil: "1566 – 1574",
    era: "yukselme", status: "full",
    baslik: "Sokullu'nun Gölgesinde Bir Geçiş",
    ruh: "İlk kez ordunun başında sefere çıkmayan ve İstanbul'da vefat eden ilk Osmanlı padişahı. " +
         "Döneme asıl damgayı, Kanuni'nin son yıllarından itibaren üç padişaha sadrazamlık yapan dev " +
         "devlet adamı Sokullu Mehmed Paşa vurur; bu yüzden döneme 'Sokullu Dönemi' de denir.",
    savaslar: [
      {
        ad: "Kıbrıs'ın Fethi", yil: "1571",
        kime: "Venedik",
        sebep: "Kıbrıs'ın Doğu Akdeniz korsanlarına yatak olması; Mısır–İstanbul deniz ticaret ve hac yolunu tehdit etmesi.",
        sonuc: "Lala Mustafa Paşa fethetti; Doğu Akdeniz tamamen Türk kontrolüne girdi.",
        onem: "Deniz ticaret/hac yolu güvenliği sağlandı — ama İnebahtı'nın da fitilini ateşledi.",
        yerler: "Kıbrıs."
      },
      {
        ad: "İnebahtı (Lepanto) Deniz Bozgunu", yil: "1571",
        kime: "Kutsal İttifak (Venedik, İspanya, Papalık, Malta)",
        sebep: "Kıbrıs'ın kaybını sindiremeyen Papa'nın topladığı büyük Haçlı donanması.",
        sonuc: "Osmanlı donanması yakıldı; ancak Sokullu 6 ayda yeni donanmayı denize indirdi.",
        onem: "Yükselme'nin ilk büyük deniz yenilgisi. Sokullu: 'Siz sakalımızı kestiniz, kesilen sakal daha gür çıkar.'",
        yerler: "İnebahtı (Yunanistan)."
      },
      {
        ad: "Sokullu'nun Jeopolitik Kanal Projeleri", yil: "1569–1570",
        kime: "İleri vizyonlu projeler (tamamlanamadı)",
        sebep: "Rusya'nın güneye inişini engelleme ve değişen ticaret yollarını Akdeniz'e çekme.",
        sonuc: "Don-Volga (Karadeniz–Hazar) ve Süveyş (Kızıldeniz–Akdeniz) kanalları planlandı ama bitirilemedi.",
        onem: "Don-Volga: İran'ı kuzeyden kuşatma + Rusya'yı durdurma + Orta Asya hanlıklarıyla bağ. Süveyş: Baharat Yolu'nu yeniden Akdeniz'e çekmek.",
        yerler: "—"
      }
    ],
    teskilat: [
      "Sefere çıkmayan İLK padişah — devletin fiilen sadrazamlarca yönetilmeye başlamasının simgesi.",
      "Sokullu Mehmed Paşa'nın üç padişahlık istikrarı, çözülmeyi bir süre geciktirdi."
    ],
    osym: [
      "İnebahtı = Yükselme'nin ilk büyük deniz yenilgisi + Sokullu'nun 'gür sakal' sözü.",
      "Kıbrıs = Doğu Akdeniz'in Türk kontrolüne girmesi.",
      "Don-Volga & Süveyş = ilk büyük jeopolitik kanal projeleri."
    ],
    quiz: [
      {
        q: "İnebahtı (1571) Deniz Bozgunu'nun niteliği nedir?",
        secenek: ["İlk deniz zaferi", "Yükselme Dönemi'nin ilk büyük deniz yenilgisi", "Akdeniz'in Türk gölü olması", "İlk kapitülasyon"],
        dogru: 1,
        aciklama: "İnebahtı, Yükselme'de alınan ilk büyük deniz yenilgisidir; ancak donanma 6 ayda yenilendi."
      },
      {
        q: "Sokullu Mehmed Paşa'nın Don-Volga ve Süveyş kanal projelerindeki ortak amaç değildir?",
        secenek: ["Rusya'nın güneye inişini engellemek", "Baharat Yolu'nu Akdeniz'e çekmek", "İran'ı kuzeyden kuşatmak", "Halifeliği almak"],
        dogru: 3,
        aciklama: "Halifelik Yavuz döneminde alınmıştı; kanal projeleri jeopolitik/ticari amaçlıdır."
      }
    ]
  },
  {
    id: "murad3", no: 12, ad: "III. Murad", lakap: "", yil: "1574 – 1595",
    era: "duraklama", status: "full",
    baslik: "Zirveden Duraklamaya Sınır Taşları",
    ruh: "Sokullu'nun öldürülmesiyle (1579) Duraklama Dönemi'nin fiilen başladığı dönem. Doğu'da en " +
         "geniş sınırlara ulaşılırken içeride para değeri düşer, enflasyon ve isyanlar başlar.",
    savaslar: [
      {
        ad: "Ferhat Paşa (İstanbul) Antlaşması", yil: "1590",
        kime: "İran (Safaviler)",
        sebep: "İran'daki taht kavgalarından yararlanıp Kafkaslar ve Hazar'a ulaşma arzusu (1578–1590 savaşları).",
        sonuc: "Osmanlı Devleti DOĞU'DA EN GENİŞ SINIRLARINA ulaştı; Hazar Denizi'ne çıkış elde edildi.",
        onem: "Osmanlı'nın doğuda ulaştığı en uç sınır — kısa süre sonra Nasuh Paşa Ant. ile geri verilecektir.",
        yerler: "Kafkasya, Azerbaycan, Hazar kıyıları."
      },
      {
        ad: "Beylerbeyi (Sikke) İsyanı", yil: "1589",
        kime: "İç isyan (Yeniçeri)",
        sebep: "Değeri düşürülmüş (tağşiş edilmiş) parayla maaş alan yeniçerilerin öfkesi.",
        sonuc: "İstanbul'da isyan; beylerbeyleri isyancılara teslim edildi.",
        onem: "Mali bozulmanın askeri isyana dönüştüğü ilk büyük örnek.",
        yerler: "İstanbul."
      }
    ],
    teskilat: [
      "Sokullu Mehmed Paşa'nın ölümü (1579) = Duraklama Dönemi'nin başlangıcı kabul edilir.",
      "İlk büyük Sikke Tağşişi (paranın değerini düşürme): savaş maliyeti + Avrupa'dan ucuz gümüş girişi → İLK büyük enflasyon ve Celali isyanlarının fitili.",
      "İngiltere'ye ilk kapitülasyon (1580) verildi."
    ],
    osym: [
      "Ferhat Paşa Antlaşması = 'Osmanlı'nın Doğu'da en geniş sınırlara ulaştığı antlaşma'.",
      "Sokullu'nun ölümü (1579) = Duraklama'nın başlangıcı.",
      "Sikke tağşişi = ilk enflasyon; Celali ve yeniçeri isyanlarının ekonomik kökeni."
    ],
    quiz: [
      {
        q: "Osmanlı'nın DOĞU'da en geniş sınırlara ulaştığı antlaşma hangisidir?",
        secenek: ["Kasr-ı Şirin", "Ferhat Paşa (İstanbul) Antlaşması", "Amasya", "Bucaş"],
        dogru: 1,
        aciklama: "1590 Ferhat Paşa Antlaşması ile Osmanlı doğuda en geniş sınırlarına ulaştı (Hazar'a çıkış)."
      },
      {
        q: "Duraklama Dönemi'nin başlangıcı olarak kabul edilen olay hangisidir?",
        secenek: ["İnebahtı bozgunu", "Sokullu Mehmed Paşa'nın ölümü (1579)", "II. Viyana Kuşatması", "Karlofça"],
        dogru: 1,
        aciklama: "1579'da Sokullu'nun ölümü, Duraklama Dönemi'nin başlangıcı sayılır."
      }
    ]
  },
  {
    id: "mehmed3", no: 13, ad: "III. Mehmed", lakap: "Eğri Fatihi", yil: "1595 – 1603",
    era: "duraklama", status: "full",
    baslik: "Haçova Zaferi ve Celali Fırtınası",
    ruh: "Ordunun başında sefere çıkan son padişahlardandır. Avusturya cephesinde büyük bir zafer " +
         "kazanılırken Anadolu, Celali isyanlarıyla kavrulmaya başlar.",
    savaslar: [
      {
        ad: "Eğri Seferi ve Haçova Meydan Muharebesi", yil: "1596",
        kime: "Avusturya (Habsburg)",
        sebep: "Uzun süren Osmanlı-Avusturya savaşları; padişahın sefere çağrılması.",
        sonuc: "Eğri Kalesi alındı; Haçova'da Avusturya ordusu ağır yenildi (padişah savaş meydanından kaçmak üzereyken Hoca Sadeddin'in telkiniyle kaldı).",
        onem: "Osmanlı'nın kazandığı son büyük meydan muharebelerindendir; III. Mehmed 'Eğri Fatihi' unvanını aldı.",
        yerler: "Eğri, Haçova (Macaristan)."
      }
    ],
    teskilat: [
      "Tahta çıkışında 19 kardeşini boğdurması, kardeş katlinin en ağır uygulaması olarak kayda geçti (kısa süre sonra Ekber-Erşed'e geçilecektir).",
      "Karayazıcı önderliğinde Celali isyanları büyük bir toplumsal krize dönüştü."
    ],
    osym: [
      "Haçova = Osmanlı'nın son büyük meydan zaferlerinden.",
      "Celali isyanlarının (Karayazıcı) bu dönemde şiddetlenmesi sorulur."
    ],
    quiz: [
      {
        q: "1596 Haçova Meydan Muharebesi'nin önemi nedir?",
        secenek: ["İlk Haçlı savaşı", "Osmanlı'nın son büyük meydan zaferlerinden biri", "Akdeniz'in Türk gölü olması", "İlk deniz yenilgisi"],
        dogru: 1,
        aciklama: "Haçova, Avusturya'ya karşı kazanılan son büyük meydan zaferlerindendir."
      }
    ]
  },
  {
    id: "ahmed1", no: 14, ad: "I. Ahmed", lakap: "", yil: "1603 – 1617",
    era: "duraklama", status: "full",
    baslik: "Veraset Sisteminde Devrim ve Köklü Krizler",
    ruh: "Avusturya ve İran savaşlarının sürdüğü, veraset sisteminin köklü biçimde değiştirildiği " +
         "dönem. Bu değişim taht kavgalarını bitirir ama devlet tecrübesinden yoksun padişahlar sorununu doğurur.",
    savasBaslik: "📜 Antlaşmalar & Dönüm Noktaları",
    savaslar: [
      {
        ad: "Zitvatorok Antlaşması", yil: "1606",
        kime: "Avusturya",
        sebep: "1593'ten beri süren uzun Osmanlı–Avusturya savaşlarının sonu.",
        sonuc: "Avusturya arşidükü, Osmanlı padişahına DENK sayıldı; Avusturya'nın ödediği yıllık vergi kaldırıldı.",
        onem: "1533 İstanbul Antlaşması ile kazanılan SİYASİ ÜSTÜNLÜK sona erdi (protokol eşitliği).",
        yerler: "—"
      },
      {
        ad: "Nasuh Paşa Antlaşması", yil: "1612",
        kime: "İran (Safaviler)",
        sebep: "Doğu'daki savaşların yeniden alevlenmesi.",
        sonuc: "Ferhat Paşa Antlaşması ile alınan yerler İran'a geri verildi.",
        onem: "Doğu'da en geniş sınırların kaybı — kısa ömürlü genişlemenin geri alınması.",
        yerler: "Kafkasya, Azerbaycan."
      }
    ],
    teskilat: [
      "Ekber ve Erşed Sistemi: hanedanın en yaşlı ve en olgun üyesinin tahta geçmesi. Amaç: kardeş katlini ve taht kavgalarını KESİN bitirmek.",
      "Yan etki: şehzadelerin sancağa çıkması kaldırıldı, Kafes Usulü (Şimşirlik) başladı → devlet tecrübesinden yoksun, psikolojisi bozuk padişahlar.",
      "Sultan Ahmet (Mavi) Camii yaptırıldı."
    ],
    osym: [
      "Zitvatorok (1606) = 1533'te kazanılan siyasi üstünlüğün sona ermesi (Avusturya ile eşitlenme).",
      "Ekber-Erşed sistemi = kardeş katlini bitirme amacı; yan etkisi Kafes Usulü ve deneyimsiz padişahlar.",
      "Kafes Usulü, ilerideki 'kadınlar/ağalar saltanatı'nın da zeminidir."
    ],
    quiz: [
      {
        q: "1533'te kazanılan siyasi üstünlüğün sona erip Avusturya ile eşitlenildiği antlaşma hangisidir?",
        secenek: ["Zitvatorok (1606)", "Karlofça (1699)", "Vasvar (1664)", "Amasya (1555)"],
        dogru: 0,
        aciklama: "1606 Zitvatorok ile arşidük padişaha denk sayıldı; 1533'teki siyasi üstünlük sona erdi."
      },
      {
        q: "Ekber ve Erşed sistemine geçişin olumsuz yan etkisi nedir?",
        secenek: ["Halifeliğin kaybı", "Sancak usulünün kalkıp Kafes Usulü ile deneyimsiz padişahların tahta çıkması", "Denizciliğin bitmesi", "Tımarın kurulması"],
        dogru: 1,
        aciklama: "Şehzadeler sancağa çıkamayınca Kafes'te yetişen tecrübesiz padişahlar tahta geçti."
      }
    ]
  },
  {
    id: "mustafa1", no: 15, ad: "I. Mustafa", lakap: "Deli", yil: "1617 – 1623",
    era: "duraklama", status: "full",
    baslik: "Kafes Usulünün İlk Padişahı",
    ruh: "Ekber ve Erşed sistemiyle tahta çıkan ilk padişah. Uzun yıllar Kafes'te (Şimşirlik) " +
         "tutulmanın etkisiyle sağlığı yerinde olmadığından kısa aralıklarla iki kez tahttan indirildi.",
    savaslar: [
      {
        ad: "İki Kez Tahttan İndirilme", yil: "1618 & 1622–23",
        kime: "İç saray siyaseti (ulema-yeniçeri)",
        sebep: "Akli dengesinin devlet işlerine elvermemesi.",
        sonuc: "Önce yerine II. Osman, sonra tekrar tahta çıkarıldıysa da yeniden indirildi.",
        onem: "Ekber-Erşed + Kafes usulünün doğurduğu 'deneyimsiz/hasta padişah' sorununun ilk örneği.",
        yerler: "İstanbul."
      }
    ],
    osym: [
      "Ekber-Erşed sistemiyle tahta çıkan ilk padişah.",
      "Kafes Usulünün yan etkilerinin (tecrübesiz/dengesiz padişah) somut örneği olarak sorulur."
    ],
    quiz: [
      {
        q: "Ekber ve Erşed sistemiyle tahta çıkan ilk padişah kimdir?",
        secenek: ["I. Ahmed", "I. Mustafa", "II. Osman", "IV. Murad"],
        dogru: 1,
        aciklama: "Ekber-Erşed sistemi I. Ahmed döneminde kondu; onunla tahta çıkan ilk padişah I. Mustafa'dır."
      }
    ]
  },
  {
    id: "osman2", no: 16, ad: "II. Osman", lakap: "Genç", yil: "1618 – 1622",
    era: "duraklama", status: "full",
    baslik: "İlk Islahatçı ve İlk Şehit Padişah",
    ruh: "Genç yaşta tahta çıkıp devletin çürüyen kurumlarını, özellikle Yeniçeri Ocağı'nı köklü " +
         "biçimde değiştirmek isteyen ilk radikal ıslahatçı padişah. Bu cesareti canına mal oldu.",
    savaslar: [
      {
        ad: "Hotin Seferi", yil: "1621",
        kime: "Lehistan (Polonya)",
        sebep: "Lehistan'ın Eflak-Boğdan'a müdahalesi.",
        sonuc: "Yeniçerilerin isteksiz ve disiplinsiz tavrı yüzünden Hotin Kalesi alınamadı.",
        onem: "II. Osman'ın Yeniçeri Ocağı'nın artık işe yaramadığını gördüğü sefer — ıslahat kararının kıvılcımı.",
        yerler: "Hotin (Ukrayna/Podolya)."
      },
      {
        ad: "Yeniçeri İsyanı ve Padişahın Katli", yil: "1622",
        kime: "Yeniçeri Ocağı",
        sebep: "II. Osman'ın Yeniçeri Ocağı'nı kaldırıp Anadolu/Suriye/Mısır'dan milli bir ordu kurma ve başkenti taşıma planı.",
        sonuc: "Yeniçeriler isyan edip padişahı Yedikule'de öldürdü.",
        onem: "Bir isyanla (yeniçeriler eliyle) öldürülen İLK Osmanlı padişahı — ocağın kontrol edilemez güç olduğunun kanıtı.",
        yerler: "İstanbul (Yedikule)."
      }
    ],
    osym: [
      "II. Osman = ilk radikal ıslahatçı padişah (Yeniçeri Ocağı'nı kaldırma fikri).",
      "Yeniçeriler tarafından öldürülen ilk padişah — ıslahatların önündeki askeri engelin simgesi.",
      "Ocağın kaldırılması ancak 200 yıl sonra II. Mahmud'un Vaka-i Hayriye'siyle (1826) mümkün olacaktır."
    ],
    quiz: [
      {
        q: "Bir yeniçeri isyanıyla öldürülen ilk Osmanlı padişahı kimdir?",
        secenek: ["III. Selim", "II. Osman (Genç Osman)", "IV. Murad", "İbrahim"],
        dogru: 1,
        aciklama: "Yeniçeri Ocağı'nı kaldırmak isteyen II. Osman, 1622'de yeniçerilerce öldürülen ilk padişahtır."
      },
      {
        q: "II. Osman'ın Hotin Seferi'nden çıkardığı temel sonuç nedir?",
        secenek: ["Donanma güçlüdür", "Yeniçeri Ocağı bozulmuş, işe yaramaz hâle gelmiştir", "Halifelik alınmalıdır", "Akdeniz Türk gölüdür"],
        dogru: 1,
        aciklama: "Yeniçerilerin disiplinsizliği, II. Osman'ın ocağı kaldırma kararını doğurdu."
      }
    ]
  },
  {
    id: "murad4", no: 17, ad: "IV. Murad", lakap: "Şark Fatihi", yil: "1623 – 1640",
    era: "duraklama", status: "full",
    baslik: "Devlet Otoritesinin Sert Elle Yeniden Kuruluşu",
    ruh: "11 yaşında tahta çıktı; başlarda annesi Kösem Sultan ve yeniçeri ağaları etkiliydi. Sonra " +
         "devlet otoritesini son derece sert biçimde yeniden kurup Bağdat'ı geri alan padişahtır.",
    savaslar: [
      {
        ad: "Revan ve Bağdat Seferleri", yil: "1635–1638",
        kime: "İran (Safaviler)",
        sebep: "İç karışıklıklardan yararlanan İran'ın Bağdat ve Irak'ı işgal etmesi.",
        sonuc: "IV. Murad ordunun başında bizzat sefere çıkıp Bağdat'ı geri aldı; bu yüzden 'Bağdat Fatihi' denildi.",
        onem: "Doğu sınırının yeniden Osmanlı lehine kurulması.",
        yerler: "Revan, Bağdat."
      },
      {
        ad: "Kasr-ı Şirin Antlaşması", yil: "1639",
        kime: "İran (Safaviler)",
        sebep: "Uzun İran savaşlarının sonu.",
        sonuc: "Zağros Dağları sınır kabul edildi; Doğu sınırı kesinleşti.",
        onem: "GÜNÜMÜZ Türkiye–İran sınırı büyük oranda bu antlaşmayla çizildi.",
        yerler: "Kasr-ı Şirin (İran)."
      }
    ],
    teskilat: [
      "Koçi Bey Risalesi (+ Kâtip Çelebi): devletin bozulma nedenlerini —rüşvet, iltimas, Tımar sisteminin çökmesi, orduda disiplinsizlik— net bir dille yazan İLK objektif/sistemli raporlama.",
      "Celali isyancıları ve İstanbul'daki zorba yeniçeri ağaları acımasızca tasfiye edildi.",
      "Asayiş için tütün, içki ve kahvehaneler yasaklandı; gece sokağa çıkma denetimi getirildi.",
      "Şeyhülislam idam ettiren ilk padişah — ulema ve saray üzerinde mutlak otorite."
    ],
    osym: [
      "Kasr-ı Şirin (1639) = bugünkü Türkiye–İran sınırını büyük ölçüde belirleyen antlaşma.",
      "Koçi Bey Risalesi = Osmanlı'da bozulmanın nedenlerini tespit eden ilk objektif/sistemli rapor.",
      "IV. Murad = sert merkezileşme ve otoritenin yeniden kurulmasının simgesi."
    ],
    quiz: [
      {
        q: "Bugünkü Türkiye–İran sınırını büyük ölçüde belirleyen antlaşma hangisidir?",
        secenek: ["Ferhat Paşa", "Kasr-ı Şirin (1639)", "Amasya", "Nasuh Paşa"],
        dogru: 1,
        aciklama: "1639 Kasr-ı Şirin ile Zağros sınır kabul edildi; günümüz Türkiye-İran sınırı büyük oranda çizildi."
      },
      {
        q: "Osmanlı'da bozulmanın nedenlerini tespit eden ilk objektif raporlama örneği hangisidir?",
        secenek: ["Kanunname-i Âl-i Osman", "Koçi Bey Risalesi", "Sefaretname", "Mecelle"],
        dogru: 1,
        aciklama: "IV. Murad'a sunulan Koçi Bey Risalesi, bozulma nedenlerini sistemli biçimde ortaya koyar."
      }
    ]
  },
  {
    id: "ibrahim", no: 18, ad: "İbrahim", lakap: "Deli", yil: "1640 – 1648",
    era: "duraklama", status: "full",
    baslik: "Girit Kuşatması ve Saray Bunalımı",
    ruh: "Kafes'te uzun yıllar geçirmiş, sağlığı ve yönetimi tartışmalı bir padişah. Döneminde uzun " +
         "ve yıpratıcı Girit kuşatması başladı; saray içi krizler devleti zayıflattı.",
    savaslar: [
      {
        ad: "Girit Kuşatmasının Başlaması", yil: "1645",
        kime: "Venedik",
        sebep: "Akdeniz'de Venedik'in gücü ve Girit'in stratejik konumu.",
        sonuc: "Kuşatma başladı ama ada 24 yıl (1669'a kadar) alınamadı.",
        onem: "Osmanlı donanma ve kuşatma teknolojisinin gerilediğinin işareti (fetih IV. Mehmed döneminde tamamlanacak).",
        yerler: "Girit."
      }
    ],
    teskilat: [
      "Saray masrafları ve iç istikrarsızlık arttı; sonunda ulema ve yeniçerilerin ortak isyanıyla tahttan indirilip öldürüldü."
    ],
    osym: [
      "Girit kuşatmasının bu dönemde başlaması (24 yıl sürmesi) sorulur.",
      "İç bunalım ve saray krizleri Duraklama'nın derinleşmesi bağlamında değerlendirilir."
    ],
    quiz: [
      {
        q: "24 yıl sürecek Girit kuşatması hangi padişah döneminde başlamıştır?",
        secenek: ["IV. Murad", "İbrahim", "IV. Mehmed", "II. Süleyman"],
        dogru: 1,
        aciklama: "Girit kuşatması 1645'te İbrahim döneminde başladı; 1669'da IV. Mehmed döneminde tamamlandı."
      }
    ]
  },
  {
    id: "mehmed4", no: 19, ad: "IV. Mehmed", lakap: "Avcı", yil: "1648 – 1687",
    era: "duraklama", status: "full",
    baslik: "Duraklama İçinde Yükseliş ve Büyük Çöküş (Köprülüler)",
    ruh: "Köprülüler'in sadrazamlığıyla devletin kısa bir süre toparlandığı; ardından II. Viyana " +
         "bozgunuyla büyük çöküşün (Gerileme'nin) başladığı dönem.",
    savaslar: [
      {
        ad: "Girit'in Fethi", yil: "1669",
        kime: "Venedik",
        sebep: "Akdeniz hâkimiyeti ve Girit'in stratejik konumu.",
        sonuc: "İbrahim döneminde 1645'te başlayan kuşatma TAM 24 YIL sürdü; Köprülü Fazıl Ahmed Paşa Kandiye Kalesi'ni alıp Girit'i fethetti.",
        onem: "Bir adanın alınmasının 24 yıl sürmesi, Osmanlı donanma ve kuşatma tekniğinin ne kadar gerilediğinin acı kanıtıdır.",
        yerler: "Girit (Kandiye)."
      },
      {
        ad: "Bucaş Antlaşması", yil: "1672",
        kime: "Lehistan (Polonya)",
        sebep: "Ukrayna–Podolya üzerindeki mücadele.",
        sonuc: "Podolya ve Ukrayna Osmanlı'ya bırakıldı.",
        onem: "Osmanlı Devleti BATI'DA EN GENİŞ SINIRLARINA ulaştı.",
        yerler: "Podolya, Ukrayna."
      },
      {
        ad: "Bahçesaray (Çehrin) Antlaşması", yil: "1681",
        kime: "Çarlık Rusya'sı",
        sebep: "Ukrayna üzerindeki Osmanlı–Rus rekabeti.",
        sonuc: "Sınırlar belirlendi.",
        onem: "Osmanlı ile Rusya arasında yapılan İLK resmî antlaşmadır.",
        yerler: "Ukrayna."
      },
      {
        ad: "II. Viyana Kuşatması ve Felaket", yil: "1683",
        kime: "Avusturya + Lehistan (Jan Sobieski)",
        sebep: "Katolik Macarların (Tökeli İmre) yardım isteği ve Sadrazam Merzifonlu Kara Mustafa Paşa'nın şan kazanma arzusu.",
        sonuc: "Viyana 2 ay kuşatıldı; Kırım Hanı'nın ihmali ve Lehistan Kralı Jan Sobieski'nin arkadan vurmasıyla ordu darmadağın oldu (Kahlenberg). Merzifonlu idam edildi.",
        onem: "Avrupalılar Kutsal İttifak'ı (Avusturya, Lehistan, Venedik, Rusya, Malta) kurdu; 16 yıl sürecek savaşlar ve GERİLEME başladı.",
        yerler: "Viyana."
      }
    ],
    teskilat: [
      "Köprülüler Dönemi: Köprülü Mehmed Paşa, göreve gelirken 'saray karışmayacak, tam yetki verilecek' şartını koştu — bağımsız çalışma ortamıyla devleti bir süre toparladı.",
      "Tarhuncu Ahmed Paşa: Osmanlı'da İLK denk (düzenli) bütçeyi hazırlayan sadrazam."
    ],
    osym: [
      "Bucaş (1672) = 'Osmanlı'nın Batı'da en geniş sınırlara ulaşması'.",
      "II. Viyana Bozgunu (1683) = taarruz gücünün bitişi; Sakarya'ya (1921) kadar sürecek uzun geri çekilmenin başlangıcı.",
      "Çehrin (1681) = Rusya ile ilk resmî antlaşma; Tarhuncu = ilk denk bütçe."
    ],
    quiz: [
      {
        q: "Osmanlı'nın BATI'da en geniş sınırlara ulaştığı antlaşma hangisidir?",
        secenek: ["Zitvatorok", "Bucaş (1672)", "Karlofça", "Vasvar"],
        dogru: 1,
        aciklama: "1672 Bucaş Antlaşması ile Podolya-Ukrayna alındı ve Osmanlı batıda en geniş sınırlarına ulaştı."
      },
      {
        q: "II. Viyana Kuşatması'nın (1683) ÖSYM açısından temel önemi nedir?",
        secenek: ["İstanbul'un fethi", "Taarruz gücünün bitip uzun geri çekilmenin başlaması", "Halifeliğin gelişi", "Akdeniz'in Türk gölü olması"],
        dogru: 1,
        aciklama: "1683 bozgunu, Osmanlı'nın taarruz gücünün bittiği ve Gerileme'ye giden kırılma noktasıdır."
      },
      {
        q: "Osmanlı ile Rusya arasında yapılan ilk resmî antlaşma hangisidir?",
        secenek: ["Bucaş", "Bahçesaray (Çehrin, 1681)", "Küçük Kaynarca", "Prut"],
        dogru: 1,
        aciklama: "1681 Bahçesaray (Çehrin) Antlaşması, Osmanlı-Rus ilişkilerindeki ilk resmî antlaşmadır."
      }
    ]
  },
  {
    id: "suleyman2", no: 20, ad: "II. Süleyman", lakap: "", yil: "1687 – 1691",
    era: "duraklama", status: "full",
    baslik: "Kutsal İttifak Savaşları ve Köprülü Toparlanması",
    ruh: "II. Viyana bozgunu (1683) sonrası Kutsal İttifak'a karşı verilen ağır savunma savaşlarının " +
         "ortasında tahta çıktı. Köprülü Fazıl Mustafa Paşa'nın sadrazamlığıyla kısa bir toparlanma yaşandı.",
    savaslar: [
      {
        ad: "Belgrat'ın Geri Alınması", yil: "1690",
        kime: "Avusturya",
        sebep: "Kutsal İttifak savaşlarında kaybedilen yerleri geri alma çabası.",
        sonuc: "Köprülü Fazıl Mustafa Paşa Belgrat'ı geri aldı.",
        onem: "Köprülüler'in devleti bir süre daha ayakta tutan son ciddi toparlanma hamlesi.",
        yerler: "Belgrat."
      }
    ],
    osym: [
      "Köprülü Fazıl Mustafa Paşa'nın mali/askeri düzenlemeleri ve Belgrat'ın geri alınması sorulur."
    ],
    quiz: [
      {
        q: "II. Süleyman döneminde Belgrat'ı geri alan ve toparlanmayı sağlayan sadrazam kimdir?",
        secenek: ["Merzifonlu Kara Mustafa Paşa", "Köprülü Fazıl Mustafa Paşa", "Tarhuncu Ahmed Paşa", "Sokullu Mehmed Paşa"],
        dogru: 1,
        aciklama: "Köprülü Fazıl Mustafa Paşa, 1690'da Belgrat'ı geri aldı."
      }
    ]
  },
  {
    id: "ahmed2", no: 21, ad: "II. Ahmed", lakap: "", yil: "1691 – 1695",
    era: "duraklama", status: "full",
    baslik: "Salankamen Yenilgisi",
    ruh: "Kutsal İttifak savaşlarının sürdüğü, kısa süren dönem. Köprülü toparlanması Salankamen " +
         "bozgunuyla sekteye uğradı.",
    savaslar: [
      {
        ad: "Salankamen Savaşı", yil: "1691",
        kime: "Avusturya",
        sebep: "Kutsal İttifak'a karşı süren savaşlar.",
        sonuc: "Osmanlı ağır yenildi; Sadrazam Köprülü Fazıl Mustafa Paşa savaşta şehit oldu.",
        onem: "Köprülü toparlanmasının sonu; Karlofça'ya giden ağır yenilgiler zincirinin halkası.",
        yerler: "Salankamen (Sırbistan)."
      }
    ],
    osym: [
      "Salankamen (1691) = Köprülü Fazıl Mustafa Paşa'nın şehit olduğu, toparlanmayı bitiren yenilgi."
    ],
    quiz: [
      {
        q: "1691 Salankamen Savaşı'nın önemli sonucu nedir?",
        secenek: ["Belgrat alındı", "Sadrazam Köprülü Fazıl Mustafa Paşa şehit oldu", "Halifelik alındı", "Kırım kaybedildi"],
        dogru: 1,
        aciklama: "Salankamen'de Osmanlı yenildi ve Köprülü Fazıl Mustafa Paşa şehit düştü."
      }
    ]
  },
  {
    id: "mustafa2", no: 22, ad: "II. Mustafa", lakap: "", yil: "1695 – 1703",
    era: "duraklama", status: "full",
    baslik: "Bir Devrin Kapanışı ve Karlofça Felaketi",
    ruh: "Ordunun başında sefere çıkan SON Osmanlı padişahıdır. II. Viyana Bozgunu (1683) ile " +
         "başlayan ve 16 yıl süren Kutsal İttifak Savaşları'nı bitirmek için ordunun başına geçmiştir.",
    savaslar: [
      {
        ad: "Zenta Bozgunu", yil: "1697",
        kime: "Avusturya (Prens Eugene)",
        sebep: "Osmanlı ordusunun Tisa nehrini geçerken savunmasız yakalanması.",
        sonuc: "Ani baskında Sadrazam Elmas Mehmed Paşa dâhil devlet kademesi şehit oldu.",
        onem: "Karlofça'ya giden yolu açan büyük bozgun.",
        yerler: "Zenta (Tisa nehri)."
      },
      {
        ad: "Karlofça Antlaşması", yil: "1699",
        kime: "Avusturya, Venedik, Lehistan",
        sebep: "16 yıllık Kutsal İttifak savaşlarının Osmanlı aleyhine sona ermesi.",
        sonuc: "Batı Macaristan ve Erdel → Avusturya; Mora ve Dalmaçya kıyıları → Venedik; Podolya ve Ukrayna → Lehistan. 25 yıl geçerli, Avusturya garantörlüğünde.",
        onem: "Osmanlı ilk kez büyük çapta toprak kaybetti; GERİLEME Dönemi ve 'müdafaa/mevcudu koruma' politikası başladı.",
        yerler: "Macaristan, Mora, Podolya, Ukrayna."
      },
      {
        ad: "İstanbul Antlaşması", yil: "1700",
        kime: "Çarlık Rusya'sı",
        sebep: "Karlofça'nın tamamlayıcısı olarak Rusya ile barış.",
        sonuc: "Azak Kalesi Rusya'ya verildi; Rusya İstanbul'da ilk kez sürekli elçi bulundurma hakkı kazandı.",
        onem: "Rusya tarihte ilk kez Karadeniz'e inme imkânı buldu.",
        yerler: "Azak Kalesi."
      }
    ],
    teskilat: [
      "Edirne Olayı (1703): Padişahın devlet işlerini hocası Şeyhülislam Feyzullah Efendi'ye bırakıp Edirne'de avlanması ve Karlofça huzursuzluğu üzerine yeniçeri-ulema isyan etti; Feyzullah Efendi katledildi, II. Mustafa tahttan indirildi.",
      "Malikâne Sistemi: Karlofça'daki toprak kaybıyla hazine nakit sıkıntısına girince, 1–3 yıllık iltizam ömür boyu kiralamaya (malikâne) dönüştürüldü.",
      "Sonuç: Vergi toplayan mültezimler bölgenin ağası hâline geldi → Âyanlık sınıfı doğdu, merkezi otorite zayıfladı."
    ],
    osym: [
      "Karlofça (1699) = ilk büyük toprak kaybı + Gerileme'ye giriş + 'savunma/mevcudu koruma' politikası.",
      "Malikâne sisteminin Âyanları doğurduğu neden-sonuç bağıyla sorulur.",
      "II. Mustafa = ordunun başında sefere çıkan SON padişah."
    ],
    quiz: [
      {
        q: "1699 Karlofça Antlaşması'nın Osmanlı için temel niteliği nedir?",
        secenek: ["İlk kez dış borç alındı", "İlk büyük toprak kaybı ve savunma politikasına geçiş", "İlk iç borçlanma", "Halifeliğin alınması"],
        dogru: 1,
        aciklama: "Karlofça ile Osmanlı ilk kez büyük çapta toprak kaybetti ve 'mevcudu koruma' (müdafaa) politikasına geçti."
      },
      {
        q: "İltizamın ömür boyu kiralanmaya dönüşmesi (Malikâne) neye yol açmıştır?",
        secenek: ["Tımar sisteminin güçlenmesi", "Âyan (taşra ağaları) sınıfının doğması", "Denge politikası", "Matbaanın kurulması"],
        dogru: 1,
        aciklama: "Malikâne, bölgede zenginleşip özel ordu kuran Âyanları doğurdu."
      }
    ]
  },
  {
    id: "ahmed3", no: 23, ad: "III. Ahmed", lakap: "", yil: "1703 – 1730",
    era: "gerileme", status: "full",
    baslik: "Prut Umudundan Lale Devri'ne",
    ruh: "Osmanlı'nın en renkli, en tezat dönemi. Başında kaybedilen toprakları almak için devasa " +
         "savaşlar yapılır; sonunda barış, kültür, sanat ve eğlence dönemi olan Lale Devri (1718–1730) yaşanır.",
    savaslar: [
      {
        ad: "Prut Savaşı ve Antlaşması", yil: "1711",
        kime: "Çarlık Rusya'sı (Deli Petro)",
        sebep: "Poltava'da yenilen İsveç Kralı XII. Şarl'ın Osmanlı'ya sığınması; Rus ordusunun Prut bataklığında Baltacı Mehmed Paşa'ca kuşatılması.",
        sonuc: "Azak Kalesi geri alındı; Rusya'nın İstanbul'da elçi bulundurmasına son verildi.",
        onem: "'Karlofça ile kaybettiğimiz toprakları geri alabiliriz!' umudu doğdu.",
        yerler: "Azak."
      },
      {
        ad: "Petervaradin Savaşı ve Pasarofça Antlaşması", yil: "1718",
        kime: "Avusturya + Venedik",
        sebep: "Venedik'in Mora halkına zulmü üzerine Osmanlı'nın Mora'yı geri alması; Avusturya'nın Karlofça garantörü olarak savaşa girmesi.",
        sonuc: "Osmanlı ağır yenildi; Belgrat ve Kuzey Sırbistan Avusturya'ya kaybedildi.",
        onem: "Kaybedilen yerleri geri alma umudu tükendi → Lale Devri başladı.",
        yerler: "Belgrat, Kuzey Sırbistan."
      },
      {
        ad: "Patrona Halil İsyanı", yil: "1730",
        kime: "İç isyan (Yeniçeri)",
        sebep: "Saray çevresinin zevk-sefahati, ağır vergiler ve İran savaşlarındaki başarısızlık.",
        sonuc: "Sadrazam Nevşehirli Damat İbrahim Paşa öldürüldü, III. Ahmed tahttan indirildi, Lale Devri bitti.",
        onem: "Matbaa ve fabrikalara dokunulmadı — kurumsal yenilikler kaldı.",
        yerler: "İstanbul."
      }
    ],
    teskilat: [
      "🌷 Lale Devri (1718–1730): Nevşehirli Damat İbrahim Paşa ve Şair Nedim'in simge olduğu, ilk kez Batı tarzı SİVİL yeniliklerin yapıldığı dönem.",
      "İlk Özel Türk Matbaası (1727): İbrahim Müteferrika ve Sait Efendi kurdu. İlk basılan eser Vankulu Lügati'dir (dinî kitap basımı yasak — hattatlar işsiz kalmasın diye).",
      "Geçici Elçilikler: Paris, Viyana, Moskova'ya ilk kez geçici elçi gönderildi. Paris elçisi 28. Çelebi Mehmed'in 'Sefaretname'si Batı'ya açılan ilk penceredir.",
      "İlk İtfaiye: Tulumbacılar Ocağı (Yeniçerilerden bağımsız).",
      "Çiçek Aşısı ilk kez uygulandı (Doğu'dan/İran'dan alınan tek yenilik).",
      "Yalova kâğıt fabrikası, İstanbul kumaş ve çini fabrikaları açıldı."
    ],
    osym: [
      "Lale Devri'nde ASKERİ YENİLİK YOKTUR — sürekli sorulur.",
      "Matbaada ilk basılan eser Vankulu Lügati; ilk geçici elçi 28. Çelebi Mehmed.",
      "Lale Devri'ni ayıran özellik: ilk kez Batı'nın üstünlüğünün kabulü + Batı tarzı sivil yenilikler."
    ],
    quiz: [
      {
        q: "Lale Devri'ni Osmanlı ıslahat tarihinden ayıran en temel özellik nedir?",
        secenek: ["İlk askeri okulun açılması", "İlk kez Batı tarzı sivil yeniliklerin yapılması", "Yeniçeri Ocağı'nın kaldırılması", "İlk anayasanın ilanı"],
        dogru: 1,
        aciklama: "Lale Devri ilk kez Batı'nın üstünlüğünü kabul edip sivil yenilikler getirdi; askeri yenilik yoktur."
      },
      {
        q: "İbrahim Müteferrika'nın matbaasında basılan ilk eser hangisidir?",
        secenek: ["Sefaretname", "Vankulu Lügati", "Mecelle", "Takvim-i Vekayi"],
        dogru: 1,
        aciklama: "İlk basılan eser Arapça-Türkçe sözlük olan Vankulu Lügati'dir."
      }
    ]
  },
  {
    id: "mahmud1", no: 24, ad: "I. Mahmud", lakap: "", yil: "1730 – 1754",
    era: "gerileme", status: "full",
    baslik: "Askeri Yenileşmenin Başlangıcı",
    ruh: "Lale Devri'nin eğlenceye dayalı yenilik anlayışının aksine devletin asıl sorununa —orduya— " +
         "odaklanır. Osmanlı tarihinde Batı tarzı İLK ASKERİ ISLAHATLARI yapan padişahtır.",
    savaslar: [
      {
        ad: "1736–1739 Osmanlı – Rus & Avusturya Savaşı", yil: "1736–1739",
        kime: "Rusya + Avusturya (aynı anda)",
        sebep: "İki büyük devletin eş zamanlı saldırısı.",
        sonuc: "I. Mahmud'un modernize askeri birlikleri sayesinde iki devlet de mağlup edildi.",
        onem: "Batı tarzı ıslahatın ilk somut askeri başarısı.",
        yerler: "Balkanlar / Karadeniz kuzeyi."
      },
      {
        ad: "Belgrat Antlaşması", yil: "1739",
        kime: "Avusturya + Rusya",
        sebep: "Savaşın Osmanlı lehine sonuçlanması.",
        sonuc: "Belgrat Avusturya'dan geri alındı; Karadeniz'de Rusya'nın savaş ve ticaret gemisi bulundurması yasaklandı.",
        onem: "18. yüzyılda imzalanan SON kazançlı/kârlı antlaşma; Karadeniz'in Türk gölü olduğu son kez tescillendi.",
        yerler: "Belgrat."
      },
      {
        ad: "1740 Kapitülasyonlarının Sürekli Hâle Gelmesi", yil: "1740",
        kime: "Fransa",
        sebep: "Belgrat Antlaşması'ndaki Fransız arabuluculuğuna teşekkür.",
        sonuc: "1535'ten beri padişahın ömrüyle sınırlı kapitülasyonlar SÜREKLİ (daimi) hâle getirildi.",
        onem: "İleride Osmanlı ekonomisini felç edecek adım — ekonomik çöküşün anahtarı.",
        yerler: "—"
      }
    ],
    teskilat: [
      "Comte de Bonneval (Humbaracı Ahmed Paşa): Fransız asıllı uzman Müslüman yapılıp ordunun başına getirildi (ilk yabancı askeri uzmanlardan).",
      "Humbaracı Ocağı ıslah edildi: havan/el bombası birliği Batı usulü tabur-bölük-alay sistemine göre düzenlendi.",
      "Hendesehane (1734): Batı tarzında açılan İLK askeri yüksekokul; kara subaylarına geometrik/teknik askeri eğitim verir."
    ],
    osym: [
      "Hendesehane = 'Batı tarzı ilk askeri okul'.",
      "Belgrat (1739) = 18. yüzyılın SON kazançlı antlaşması.",
      "1740 kapitülasyonlarının Fransa'ya 'sürekli' verilmesi = ekonomik çöküşün anahtarı."
    ],
    quiz: [
      {
        q: "Belgrat Antlaşması (1739) ÖSYM'de nasıl nitelenir?",
        secenek: ["İlk büyük toprak kaybı", "18. yüzyılın son kazançlı antlaşması", "İlk iç borçlanma", "İlk anayasa"],
        dogru: 1,
        aciklama: "Belgrat, 18. yüzyılda imzalanan son kârlı antlaşmadır; Karadeniz son kez Türk gölü sayıldı."
      },
      {
        q: "Batı tarzında açılan ilk askeri yüksekokul hangisidir?",
        secenek: ["Mühendishane-i Bahr-i Hümayun", "Hendesehane", "Mekteb-i Harbiye", "Darülfünun"],
        dogru: 1,
        aciklama: "1734'te açılan Hendesehane, Batı tarzı ilk askeri okuldur."
      }
    ]
  },
  {
    id: "osman3", no: 25, ad: "III. Osman", lakap: "", yil: "1754 – 1757",
    era: "gerileme", status: "full",
    baslik: "Kısa ve Sessiz Dönem",
    ruh: "Kafes'te uzun yıllar geçirdikten sonra tahta çıkan, üç yıl kadar süren kısa ve olaysız bir " +
         "saltanat sürdü. I. Mahmud'un kurduğu barış ve ıslahat ortamı büyük ölçüde korundu.",
    teskilat: [
      "Dönem önemli bir savaş veya köklü yenilik içermez; dış politikada barış çizgisi sürdürüldü.",
      "İç ticaret ve gündelik hayata dair bazı düzenlemeler dışında kayda değer gelişme yaşanmadı."
    ],
    osym: [
      "KPSS'de nadiren ve genellikle 'kısa/olaysız dönem' bağlamında geçer; I. Mahmud ile III. Mustafa arasındaki geçiş."
    ],
    quiz: [
      {
        q: "III. Osman dönemi genel olarak nasıl nitelenir?",
        secenek: ["Büyük fetihler dönemi", "Kısa ve olaysız bir geçiş dönemi", "İlk anayasa dönemi", "Halifeliğin alındığı dönem"],
        dogru: 1,
        aciklama: "III. Osman'ın üç yıllık saltanatı kısa ve kayda değer olaysız bir dönemdir."
      }
    ]
  },
  {
    id: "mustafa3", no: 26, ad: "III. Mustafa", lakap: "", yil: "1757 – 1774",
    era: "gerileme", status: "full",
    baslik: "Donanmada Dönüşüm ve Borçlanma",
    ruh: "Maliye ve donanmaya ağırlık verilen dönem. Sadrazam Koca Ragıp Paşa dönemin akil adamıdır. " +
         "Bilime meraklı III. Mustafa felaketi görse de radikal dönüşümü yapacak gücü bulamamıştır.",
    savaslar: [
      {
        ad: "1768–1774 Osmanlı – Rus Savaşı", yil: "1768–1774",
        kime: "Çarlık Rusya'sı",
        sebep: "Rusya'nın Lehistan iç işlerine karışması ve Türk topraklarına saldırması.",
        sonuc: "Osmanlı ordusu ağır mağlubiyetler aldı (savaş I. Abdülhamid döneminde Küçük Kaynarca ile bitti).",
        onem: "18. yüzyılın en yıkıcı Rus savaşının başlangıcı.",
        yerler: "Balkanlar / Karadeniz."
      },
      {
        ad: "Çeşme Deniz Baskını", yil: "1770",
        kime: "Rus donanması",
        sebep: "Baltık'tan dolaşıp Cebelitarık'ı geçen Rus donanmasının ani baskını.",
        sonuc: "İzmir Çeşme limanında demirli Osmanlı donanması yakıldı.",
        onem: "İnebahtı'dan (1571) sonra tarihimizdeki İKİNCİ büyük donanma yangını.",
        yerler: "Çeşme (İzmir)."
      }
    ],
    teskilat: [
      "Baron de Tott: Fransız subay getirilip topçu ocağı modernize edildi; Sürat Topçuları Ocağı kuruldu.",
      "Mühendishane-i Bahr-i Hümayun (1773): Çeşme sonrası donanmaya teknik subay yetiştirmek için açılan Deniz Mühendishanesi / Deniz Harp Okulu.",
      "Esham Sistemi: Uzun Rus savaşlarının mali krizi yüzünden çıkarılan İLK iç borçlanma (tahvil/senet). Devlet yıllık vergi gelirlerini küçük hisselere (esham) bölüp halka/zenginlere satarak nakit topladı."
    ],
    osym: [
      "Çeşme Baskını = ikinci büyük donanma yangını (ilki 1571 İnebahtı).",
      "Esham Sistemi = Osmanlı'da İLK iç borçlanma yöntemi (kağıt paraya geçişin altyapısı).",
      "Mühendishane-i Bahr-i Hümayun = Deniz Harp Okulu."
    ],
    quiz: [
      {
        q: "Osmanlı'da ilk iç borçlanma (tahvil/senet) sistemi hangisidir?",
        secenek: ["Malikâne", "Esham", "İltizam", "Duyun-ı Umumiye"],
        dogru: 1,
        aciklama: "Esham, yıllık vergi gelirlerini hisselere bölüp satan ilk iç borçlanma sistemidir."
      },
      {
        q: "1770 Çeşme Baskını tarihimizde neyin örneğidir?",
        secenek: ["İlk donanma yangını", "İkinci büyük donanma yangını", "İlk deniz zaferi", "İlk kapitülasyon"],
        dogru: 1,
        aciklama: "1571 İnebahtı'dan sonra ikinci büyük donanma yangınıdır."
      }
    ]
  },
  {
    id: "abdulhamid1", no: 27, ad: "I. Abdülhamid", lakap: "", yil: "1774 – 1789",
    era: "gerileme", status: "full",
    baslik: "Kırım'ın Kaybı ve Radikal Askeri Islahatlar",
    ruh: "43 yıl sarayda 'kafes hayatı' yaşadıktan sonra tahta çıkan, merhametli ve vatansever bir " +
         "padişah. Dönemi Kırım'ın kaybının acılarıyla doludur. Sadrazam Halil Hamid Paşa ile Yeniçeri Ocağı'nı disipline etmek için dev adımlar attı.",
    savaslar: [
      {
        ad: "Küçük Kaynarca Antlaşması", yil: "1774",
        kime: "Çarlık Rusya'sı",
        sebep: "1768–1774 savaşının Osmanlı ağır yenilgisiyle bitmesi.",
        sonuc: "Kırım bağımsız oldu (yalnız dinî açıdan Halifeye bağlı); ilk kez savaş tazminatı ödendi; Rus ticaret gemileri Boğazlardan geçme hakkı kazandı; Rusya Ortodoksları koruma ve daimi elçi bulundurma hakkı elde etti.",
        onem: "Karlofça'dan sonraki en ağır antlaşma. Halkı Türk ve Müslüman olan bir toprak İLK KEZ kaybedildi; Karadeniz Türk gölü olmaktan çıktı.",
        yerler: "Kırım."
      },
      {
        ad: "Kırım'ın Kaybedilme Aşamaları (kronoloji)", yil: "1774–1792",
        kime: "Rusya",
        sebep: "Rusya'nın Kırım'ı adım adım ilhak stratejisi.",
        sonuc: "Küçük Kaynarca (1774): bağımsız oldu → Aynalıkavak Tenkihnamesi (1779): Rus yanlısı Şahin Giray'ın hanlığı kabul edildi → Yaş (1792): Kırım'ın Rusya'ya ait olduğu resmen kabul edildi.",
        onem: "KPSS'nin en çok sorduğu kronolojilerden biri.",
        yerler: "Kırım."
      }
    ],
    teskilat: [
      "Cülus Bahşişi ilk kez tamamen kaldırıldı (her padişah tahta çıkınca askere dağıtılan ikramiye).",
      "Ulufe alım-satımı yasaklandı: yeniçeri olmayanların maaş senetlerini (ulufe) alıp haksız maaş çekmesi engellendi, yeniçeri sayımı yaptırıldı.",
      "İstihkâm Okulu: orduya yol/köprü inşa edecek askeri mühendis yetiştirmek için açıldı.",
      "Yabancı uzmanların Müslüman olma şartı kaldırıldı — Avrupalı uzmanlar din değiştirmeden teknik ders verebildi."
    ],
    osym: [
      "Küçük Kaynarca: 'ilk kez Müslüman/Türk toprak kaybı (Kırım)' + 'ilk savaş tazminatı' + Rusya'nın Ortodoksları koruma kozu.",
      "Cülus'un kaldırılması ve ulufe alım-satımının yasaklanması = maliye/orduda suistimali engelleme.",
      "Kırım kronolojisi: Küçük Kaynarca (1774) → Aynalıkavak (1779) → Yaş (1792)."
    ],
    quiz: [
      {
        q: "Küçük Kaynarca Antlaşması'nın (1774) en ağır sonucu hangisidir?",
        secenek: ["Belgrat'ın kaybı", "Halkı Türk-Müslüman olan Kırım'ın ilk kez kaybı ve ilk savaş tazminatı", "Yeniçeri Ocağı'nın kaldırılması", "İlk anayasa"],
        dogru: 1,
        aciklama: "İlk kez Müslüman-Türk nüfuslu bir toprak (Kırım) kaybedildi ve ilk kez savaş tazminatı ödendi."
      },
      {
        q: "Kırım'ın Rusya'ya ait olduğunu resmen kabul eden antlaşma hangisidir?",
        secenek: ["Küçük Kaynarca (1774)", "Aynalıkavak (1779)", "Yaş (1792)", "Belgrat (1739)"],
        dogru: 2,
        aciklama: "1792 Yaş Antlaşması ile Kırım'ın Rusya'ya ait olduğu resmen kabul edildi."
      }
    ]
  },
  {
    id: "selim3", no: 28, ad: "III. Selim", lakap: "", yil: "1789 – 1807",
    era: "dagilma", status: "full",
    baslik: "Nizam-ı Cedid Hareketi",
    ruh: "Osmanlı'da radikal ve PLANLI ıslahat dönemini başlatan ilk padişah. Yeniliklerinin tümüne " +
         "Nizam-ı Cedid (Yeni Düzen) denir; ıslahat öncesi devlet adamlarından Lâyiha (rapor/eylem planı) istemiştir.",
    savaslar: [
      {
        ad: "Yaş Antlaşması", yil: "1792",
        kime: "Rusya",
        sebep: "1787–1792 Osmanlı-Rus savaşının sonu.",
        sonuc: "Kırım'ın Rusya'ya ait olduğu resmen kabul edildi; Kırım dönemi kapandı.",
        onem: "Osmanlı fiilen DAĞILMA Dönemi'ne girdi.",
        yerler: "Kırım (kesin kayıp)."
      },
      {
        ad: "Napolyon'un Mısır'ı İşgali", yil: "1798",
        kime: "Fransa (Napolyon)",
        sebep: "Fransa'nın Mısır'a saldırması.",
        sonuc: "Osmanlı ilk kez DENGE POLİTİKASI uygulayıp İngiltere ve Rusya ile ittifak kurarak Fransa'yı çıkardı.",
        onem: "Denge politikasının (Avrupalıları birbirine düşürme) ilk uygulaması.",
        yerler: "Mısır."
      },
      {
        ad: "Akka Kalesi Savunması", yil: "1799",
        kime: "Fransa (Napolyon)",
        sebep: "Napolyon'un Akka üzerinden ilerlemesi.",
        sonuc: "Nizam-ı Cedid ordusu, Cezzar Ahmed Paşa komutasında Napolyon'u ilk kez mağlup etti.",
        onem: "Yeni ordunun ilk büyük başarısı.",
        yerler: "Akka."
      },
      {
        ad: "Kabakçı Mustafa İsyanı", yil: "1807",
        kime: "İç isyan (Yeniçeri)",
        sebep: "Nizam-ı Cedid yeniliklerinden rahatsızlık.",
        sonuc: "III. Selim tahttan indirilip öldürüldü; Nizam-ı Cedid ordusu lağvedildi.",
        onem: "Radikal ıslahatın yeniçeri direnciyle çöküşü.",
        yerler: "İstanbul."
      }
    ],
    teskilat: [
      "Nizam-ı Cedid Ordusu: Batı (Fransız) tarzında eğitilen ilk modern ordu.",
      "İrad-ı Cedid Hazinesi: Nizam-ı Cedid ordusunun silah/giyim/maaş giderlerini karşılayan özel hazine; alkol, tütün ve lüks maddelere ek vergi kondu.",
      "Mühendishane-i Berr-i Hümayun (1795): Kara Mühendishanesi / Kara Harp Okulu.",
      "İlk Daimi Elçilikler: geçici elçilikler kalıcı hâle getirildi; ilki Londra'da açıldı (ilk daimi elçi Yusuf Agâh Efendi).",
      "Matbaa-i Âmire: ilk devlet matbaası kuruldu.",
      "Yerli malı teşviki: yerli kumaş kullanımı zorunlu kılındı."
    ],
    osym: [
      "Nizam-ı Cedid ordusu ↔ İrad-ı Cedid hazinesi eşleştirmesi çok sorulur.",
      "Yusuf Agâh Efendi = ilk daimi elçi (Londra).",
      "Mısır işgalinde ilk kez Denge Politikası uygulandı."
    ],
    quiz: [
      {
        q: "Nizam-ı Cedid ordusunun giderlerini karşılamak için kurulan özel hazine hangisidir?",
        secenek: ["Esham", "İrad-ı Cedid", "Malikâne", "Duyun-ı Umumiye"],
        dogru: 1,
        aciklama: "İrad-ı Cedid hazinesi, Nizam-ı Cedid ordusunu finanse etmek için kuruldu."
      },
      {
        q: "Osmanlı ilk kez Denge Politikasını hangi olayda uygulamıştır?",
        secenek: ["Küçük Kaynarca", "Napolyon'un Mısır'ı işgali", "Karlofça", "Balta Limanı"],
        dogru: 1,
        aciklama: "1798 Mısır işgalinde İngiltere ve Rusya ile ittifak kurarak ilk kez denge politikası uygulandı."
      }
    ]
  },
  {
    id: "mustafa4", no: 29, ad: "IV. Mustafa", lakap: "", yil: "1807 – 1808",
    era: "dagilma", status: "full",
    baslik: "Kabakçı İsyanının Padişahı",
    ruh: "Nizam-ı Cedid karşıtı Kabakçı Mustafa İsyanı'nın III. Selim'i devirmesiyle tahta çıkarıldı. " +
         "Bir yıllık saltanatı, ıslahat yanlıları ile karşıtları arasındaki çatışmanın gölgesinde geçti.",
    savaslar: [
      {
        ad: "Alemdar Mustafa Paşa'nın İstanbul'a Yürüyüşü", yil: "1808",
        kime: "İç siyaset (ıslahat yanlıları)",
        sebep: "Rusçuk ayanı Alemdar Mustafa Paşa'nın III. Selim'i yeniden tahta çıkarma girişimi.",
        sonuc: "IV. Mustafa'nın emriyle III. Selim öldürülünce Alemdar, II. Mahmud'u tahta çıkardı; IV. Mustafa indirildi (sonra idam edildi).",
        onem: "Ardından padişah ile ayanlar arasında Sened-i İttifak (1808) imzalanacaktır.",
        yerler: "İstanbul."
      }
    ],
    osym: [
      "Nizam-ı Cedid karşıtı ortamın padişahı; III. Selim'in öldürülmesi ve II. Mahmud'un tahta çıkışıyla anılır.",
      "Dönemi, Sened-i İttifak'a (1808) giden sürecin hemen öncesidir."
    ],
    quiz: [
      {
        q: "IV. Mustafa dönemi hangi gelişmeyle sonlanmıştır?",
        secenek: ["Kanun-ı Esasi'nin ilanı", "Alemdar Mustafa Paşa'nın müdahalesi ve II. Mahmud'un tahta çıkışı", "Halifeliğin alınması", "Tanzimat Fermanı"],
        dogru: 1,
        aciklama: "Alemdar Mustafa Paşa'nın İstanbul'a gelişiyle IV. Mustafa indirilip II. Mahmud tahta çıktı."
      }
    ]
  },
  {
    id: "mahmud2", no: 30, ad: "II. Mahmud", lakap: "", yil: "1808 – 1839",
    era: "dagilma", status: "full",
    baslik: "Büyük İdari ve Kurumsal Devrim",
    ruh: "Osmanlı'nın 'Büyük Islahatçısı'. Kıyafetten devlet teşkilatına her şeyi Batı tarzında " +
         "değiştirdiği için 'Gâvur Padişah' da denir. Padişah otoritesini yeniden kurmak için köklü dönüşümler yaptı.",
    savasBaslik: "📜 Belgeler, Olaylar & Antlaşmalar",
    savaslar: [
      {
        ad: "Sened-i İttifak", yil: "1808",
        kime: "Âyanlar (taşra ağaları)",
        sebep: "II. Mahmud'u tahta çıkaran Rusçuk Âyanı Alemdar Mustafa Paşa'nın arabuluculuğu.",
        sonuc: "Padişah ile güçlü toprak ağaları arasında karşılıklı yükümlülük sözleşmesi imzalandı.",
        onem: "Türk tarihinde padişahın yetkilerini İLK KEZ kısıtlayan belge; anayasal düzene ilk adım (Magna Carta'ya benzetilir).",
        yerler: "—"
      },
      {
        ad: "Vaka-i Hayriye (Hayırlı Olay)", yil: "1826",
        kime: "Yeniçeri Ocağı",
        sebep: "Yeniçerilerin ıslahatın önündeki en büyük engel olması.",
        sonuc: "Halk, ulema ve Asâkir-i Mansûre desteğiyle Yeniçeri Ocağı topa tutularak tamamen kaldırıldı.",
        onem: "Merkezi otorite güçlendi; ıslahatların önündeki devasa engel kalktı.",
        yerler: "İstanbul."
      },
      {
        ad: "Edirne Antlaşması", yil: "1829",
        kime: "Rusya",
        sebep: "Yunan isyanı ve Osmanlı-Rus savaşı.",
        sonuc: "Yunanistan bağımsız oldu; Sırplar özerklik kazandı.",
        onem: "Osmanlı'dan ayrılıp bağımsız olan İLK azınlık: Yunanistan.",
        yerler: "Yunanistan, Sırbistan."
      },
      {
        ad: "Hünkâr İskelesi Antlaşması", yil: "1833",
        kime: "Rusya (ittifak)",
        sebep: "Mısır Valisi Kavalalı Mehmed Ali Paşa isyanına karşı çaresiz kalan padişahın Rusya'dan yardım istemesi.",
        sonuc: "Rusya ile ittifak; Boğazlar Rusya lehine kapatılabilecek.",
        onem: "Boğazlar üzerinde SON kez tek başımıza karar aldığımız antlaşma; Boğazlar sorunu uluslararası hâle geldi.",
        yerler: "Boğazlar."
      },
      {
        ad: "Balta Limanı Ticaret Antlaşması", yil: "1838",
        kime: "İngiltere",
        sebep: "Kavalalı'ya karşı İngiltere'nin desteğini almak.",
        sonuc: "İç gümrük vergileri İngilizler için sıfırlandı; pazar ucuz İngiliz mallarıyla doldu.",
        onem: "Osmanlı sanayisi çöktü, ülke açık pazar (yarı sömürge) hâline geldi.",
        yerler: "—"
      }
    ],
    teskilat: [
      "Asâkir-i Mansûre-i Muhammediyye: Yeniçeri yerine kurulan yeni ordu (gideri için Askeri/Müteferrik Hazine).",
      "Tımar (Dirlik) sistemi kaldırıldı → memur ve subaylara doğrudan MAAŞ sistemi getirildi.",
      "Müsadere usulü kaldırıldı → özel mülkiyet ve miras hakkı güvence altına alındı.",
      "İlk nüfus sayımı (1831): askeri/mali amaçlı (yalnız erkekler ve hayvanlar sayıldı).",
      "Köy/mahalle muhtarlıkları kuruldu; eyaletlerde yedek Redif birlikleri oluşturuldu.",
      "İdari değişim: Sadrazamlık → Başvekâlet; Divan-ı Hümayun kaldırıldı → Nazırlıklar (bakanlıklar).",
      "Mürur Tezkeresi (iç pasaport) ve pasaport uygulaması başladı.",
      "Takvim-i Vekayi (1831): ilk resmî gazete.",
      "Kıyafet inkılabı (fes-ceket-pantolon); Mekteb-i Tıbbiye, Mekteb-i Harbiye ve Rüştiyeler açıldı."
    ],
    osym: [
      "Sened-i İttifak = padişah yetkisini ilk kez kısıtlayan belge (anayasal düzene ilk adım).",
      "Tımar ve Müsadere'nin kaldırılması = merkezi otorite + özel mülkiyet güvencesi.",
      "Balta Limanı (1838) = Osmanlı ekonomisini çökerten darbe; Yunanistan = ilk bağımsız azınlık."
    ],
    quiz: [
      {
        q: "Padişahın yetkilerini tarihte ilk kez kısıtlayan belge hangisidir?",
        secenek: ["Kanun-ı Esasi", "Sened-i İttifak", "Tanzimat Fermanı", "Islahat Fermanı"],
        dogru: 1,
        aciklama: "1808 Sened-i İttifak, padişah yetkisini ilk kez kısıtlayan belgedir; anayasal düzene ilk adım sayılır."
      },
      {
        q: "1826 Vaka-i Hayriye'nin en temel sonucu nedir?",
        secenek: ["İlk anayasanın ilanı", "Yeniçeri Ocağı'nın kaldırılıp ıslahatların önünün açılması", "Kırım'ın kaybı", "İlk kağıt para"],
        dogru: 1,
        aciklama: "Yeniçeri Ocağı kaldırıldı; merkezi otoritenin ve ıslahatların önündeki en büyük engel kalktı."
      },
      {
        q: "Osmanlı'dan ayrılıp bağımsız olan ilk azınlık hangisidir?",
        secenek: ["Sırbistan", "Bulgaristan", "Yunanistan", "Romanya"],
        dogru: 2,
        aciklama: "1829 Edirne Antlaşması ile Yunanistan bağımsız olan ilk azınlıktır."
      }
    ]
  },
  {
    id: "abdulmecid", no: 31, ad: "Abdülmecid", lakap: "", yil: "1839 – 1861",
    era: "dagilma", status: "full",
    baslik: "Tanzimat ve Hukuk Devleti",
    ruh: "Batılılaşmanın 'hukuki ve anayasal' boyuta taşındığı dönem. Dönemin en etkili diplomatı " +
         "Mustafa Reşit Paşa'dır; Avrupalıların iç işlere karışmasını önlemek için dev fermanlar ilan edildi.",
    savasBaslik: "📜 Fermanlar & Dönüm Noktaları",
    savaslar: [
      {
        ad: "Tanzimat Fermanı (Gülhane Hatt-ı Hümayunu)", yil: "1839",
        kime: "İç reform (Mustafa Reşit Paşa okudu)",
        sebep: "Fransız İhtilali etkisini kırmak, Avrupa müdahalesini önlemek.",
        sonuc: "Herkes (Müslim-Gayrimüslim) kanun önünde eşit; yargısız ceza yok; gelire göre vergi; askerlik zorunlu; müsadere kaldırıldı.",
        onem: "Felsefesi OSMANLICILIK; kanun gücünün üstünlüğü ilan edildi — padişah kendi gücünün üstünde kanunu tanıdı.",
        yerler: "—"
      },
      {
        ad: "Islahat Fermanı", yil: "1856",
        kime: "İç reform (Gayrimüslimlere yönelik)",
        sebep: "Kırım Savaşı sonrası Paris Konferansı'nda Avrupa baskısını azaltmak.",
        sonuc: "Cizye kaldırıldı (yerine Bedel-i Askeri); gayrimüslimler memur olabilecek, meclise girebilecek, banka/şirket/okul açabilecek; 'gâvura gâvur demek' yasaklandı.",
        onem: "Doğrudan ve YALNIZCA gayrimüslimlere haklar verir (Tanzimat herkese, Islahat sadece gayrimüslime).",
        yerler: "—"
      }
    ],
    teskilat: [
      "Kaime (Kaime-i Mutebere): Osmanlı'nın İLK kağıt parası.",
      "Mecidiye: ilk gümüş/altın madeni para.",
      "Bank-ı Dersaadet (1847): Osmanlı'nın İLK bankası (Galata bankerleri).",
      "Bank-ı Osmanî (1856): İngiliz sermayeli, para basma yetkili banka.",
      "İlk Dış Borç (1854): Kırım Savaşı sırasında İngiltere'den ilk kez dış borç alındı.",
      "İltizam kaldırıldı, vergiler doğrudan memurca (Muhassıl) toplanmaya çalışıldı; Muhassıllık Meclisleri kuruldu.",
      "Arazi Kanunnamesi (1858), Darülfünun (ilk üniversite temeli), Şirket-i Hayriye, ilk telgraf hattı (1855, Kırım-Varna-İstanbul)."
    ],
    osym: [
      "Tanzimat ↔ Islahat farkı: Tanzimat herkese, Islahat yalnız gayrimüslimlere haklar verir.",
      "Cizye'nin kaldırılması Islahat Fermanı ile eşleştirilir (yerine Bedel-i Askeri).",
      "İlk dış borç Kırım Savaşı'nda (1854) alındı; ilk kağıt para Kaime."
    ],
    quiz: [
      {
        q: "1839 Tanzimat Fermanı'nın en radikal özelliği nedir?",
        secenek: ["Cizyenin kaldırılması", "Kanun gücünün üstünlüğünün kabulü", "İlk anayasanın ilanı", "Yeniçeri Ocağı'nın kaldırılması"],
        dogru: 1,
        aciklama: "Tanzimat ile padişah dâhil herkesin kanuna uyacağı — yani kanun üstünlüğü — ilan edildi."
      },
      {
        q: "Gayrimüslimlerden alınan Cizye vergisi hangi fermanla kaldırılmıştır?",
        secenek: ["Tanzimat Fermanı (1839)", "Islahat Fermanı (1856)", "Sened-i İttifak (1808)", "Kanun-ı Esasi (1876)"],
        dogru: 1,
        aciklama: "1856 Islahat Fermanı ile Cizye kaldırıldı; yerine Bedel-i Askeri getirildi."
      }
    ]
  },
  {
    id: "abdulaziz", no: 32, ad: "Abdülaziz", lakap: "", yil: "1861 – 1876",
    era: "dagilma", status: "full",
    baslik: "Yurt Dışı Gezileri ve Adliye Düzenlemeleri",
    ruh: "Barış zamanında Avrupa'ya (Fransa, İngiltere, Prusya) gezmeye giden İLK ve TEK padişah. " +
         "Donanmaya tutkusu vardı; Osmanlı donanmasını dünyanın 3. büyük donanması yaptı (ama maliyeyi mahvetti).",
    savasBaslik: "📜 Kurumlar & Dönüm Noktaları",
    savaslar: [
      {
        ad: "Ramazan Kararnamesi", yil: "1875",
        kime: "İç mali kriz",
        sebep: "Aşırı donanma ve borç harcamaları.",
        sonuc: "Devlet borç faizlerini bile ödeyemeyeceğini açıklayıp faizleri yarı yarıya indirdi.",
        onem: "İflasın ilk resmî işareti (Duyun-ı Umumiye'ye giden yol).",
        yerler: "—"
      }
    ],
    teskilat: [
      "Mecelle (Ahmet Cevdet Paşa): Osmanlı'nın İLK Medeni Kanunu; İslam hukukuna (Hanefi fıkhı) dayanır.",
      "Divan-ı Ahkâm-ı Adliye: bugünkü Yargıtay'ın temeli.",
      "Şûra-yı Devlet: bugünkü Danıştay'ın temeli.",
      "Nizamiye Mahkemeleri: Müslim-gayrimüslim davalarına bakan Batı tarzı karma mahkemeler.",
      "Vilayet Nizamnamesi (1864): Eyalet → Vilayet → Liva (Sancak) → Kaza → Köy.",
      "Memleket Sandıkları (1863, Mithat Paşa): çiftçiye ucuz kredi — Ziraat Bankası'nın temeli.",
      "Darüşşafaka; Galatasaray Sultaniyesi (1868, Batı tarzı lise)."
    ],
    osym: [
      "Mecelle = ilk (İslami) medeni kanun; hazırlayan Ahmet Cevdet Paşa.",
      "Memleket Sandıkları = Ziraat Bankası'nın temeli.",
      "Şûra-yı Devlet = Danıştay, Divan-ı Ahkâm-ı Adliye = Yargıtay temeli."
    ],
    quiz: [
      {
        q: "Osmanlı'nın ilk medeni kanunu ve hazırlayanı hangisidir?",
        secenek: ["Kanun-ı Esasi – Mithat Paşa", "Mecelle – Ahmet Cevdet Paşa", "Tanzimat – Mustafa Reşit Paşa", "Arazi Kanunnamesi – Ali Paşa"],
        dogru: 1,
        aciklama: "Mecelle, Ahmet Cevdet Paşa başkanlığında hazırlanan, İslam hukukuna dayalı ilk medeni kanundur."
      },
      {
        q: "Bugünkü Ziraat Bankası'nın temeli sayılan kurum hangisidir?",
        secenek: ["Bank-ı Dersaadet", "Memleket Sandıkları", "Duyun-ı Umumiye", "Bank-ı Osmanî"],
        dogru: 1,
        aciklama: "Mithat Paşa'nın kurduğu Memleket Sandıkları, Ziraat Bankası'nın temelidir."
      }
    ]
  },
  {
    id: "murad5", no: 33, ad: "V. Murad", lakap: "", yil: "1876",
    era: "dagilma", status: "full",
    baslik: "93 Günlük Saltanat",
    ruh: "Genç Osmanlılar'ın umut bağladığı, meşrutiyet yanlısı bir şehzadeyken tahta çıkarıldı; " +
         "ancak ruhsal rahatsızlığı nedeniyle yaklaşık 93 gün sonra tahttan indirildi.",
    savaslar: [
      {
        ad: "Tahttan İndirilme", yil: "1876",
        kime: "İç siyaset (Mithat Paşa ve devlet ricali)",
        sebep: "Padişahın sağlık durumunun devlet yönetimine elvermemesi.",
        sonuc: "Yerine, Kanun-ı Esasi'yi ilan edeceği sözüyle II. Abdülhamid tahta çıkarıldı.",
        onem: "Osmanlı'da en kısa saltanatlardan biri; I. Meşrutiyet'in ilanına giden geçiş.",
        yerler: "İstanbul."
      }
    ],
    osym: [
      "Yaklaşık 93 gün tahtta kalması ve yerine II. Abdülhamid'in (Kanun-ı Esasi sözüyle) geçmesiyle sorulur."
    ],
    quiz: [
      {
        q: "V. Murad'dan sonra hangi padişah, Kanun-ı Esasi'yi ilan etme sözüyle tahta çıkmıştır?",
        secenek: ["Abdülaziz", "II. Abdülhamid", "V. Mehmed", "Abdülmecid"],
        dogru: 1,
        aciklama: "V. Murad'ın kısa saltanatının ardından II. Abdülhamid, meşrutiyet sözüyle tahta çıktı."
      }
    ]
  },
  {
    id: "abdulhamid2", no: 34, ad: "II. Abdülhamid", lakap: "", yil: "1876 – 1909",
    era: "dagilma", status: "full",
    baslik: "Meşrutiyet, Panislamizm ve Borçlar İdaresi",
    ruh: "En çok tartışılan, en zeki diplomasiyi yürüten padişah. Jön Türkler'in baskısıyla tahta " +
         "çıkıp Meşrutiyeti ilan etti; eğitim, demiryolu, sağlık ve kurumlaşma hamleleriyle devleti 33 yıl ayakta tuttu.",
    savasBaslik: "📜 Anayasa, Savaş & Dönüm Noktaları",
    savaslar: [
      {
        ad: "I. Meşrutiyet ve Kanun-ı Esasi", yil: "1876",
        kime: "İç reform (Mithat Paşa heyeti)",
        sebep: "Jön Türkler'in anayasa baskısı.",
        sonuc: "Türk tarihinin İLK anayasası; Mutlak Monarşi → Meşruti Monarşi. Meclis-i Mebusan (seçilen) + Meclis-i Âyan (padişahın atadığı) açıldı. Padişahın meclisi kapatma, sürgün ve sansür yetkisi vardı.",
        onem: "İlk kez rejim değişti; halk kısıtlı da olsa yönetime katıldı.",
        yerler: "—"
      },
      {
        ad: "93 Harbi (Osmanlı-Rus Savaşı)", yil: "1877–1878",
        kime: "Rusya",
        sebep: "Balkan sorunları ve Rus yayılmacılığı.",
        sonuc: "Rus ordusu Yeşilköy'e ve Erzurum'a kadar geldi (Plevne/Gazi Osman Paşa, Nene Hatun bu savaşta). II. Abdülhamid Mebusan Meclisi'ni kapattı → 30 yıllık İstibdat başladı.",
        onem: "Meclisin kapatılması ve baskı döneminin gerekçesi oldu.",
        yerler: "Balkanlar, Doğu Anadolu."
      },
      {
        ad: "Berlin Antlaşması", yil: "1878",
        kime: "Rusya + Avrupa devletleri",
        sebep: "Ağır Ayastefanos'un Avrupa'ca revizyonu.",
        sonuc: "Sırbistan, Karadağ, Romanya bağımsız; Kars-Ardahan-Batum (Elviye-i Selâse) Rusya'da kaldı.",
        onem: "Ermeni Sorunu ilk kez uluslararası bir belgeye girdi.",
        yerler: "Balkanlar, Doğu Anadolu."
      },
      {
        ad: "Muharrem Kararnamesi ve Duyun-ı Umumiye", yil: "1881",
        kime: "Avrupalı alacaklı devletler",
        sebep: "Osmanlı'nın borçlarını ödeyemeyeceğini ilan etmesi (iflas).",
        sonuc: "Genel Borçlar İdaresi kuruldu; Tütün, Tuz, İpek, Damga gibi en verimli vergilere doğrudan Avrupalılar el koydu.",
        onem: "Osmanlı ekonomik bağımsızlığını tamamen kaybetti.",
        yerler: "İstanbul."
      },
      {
        ad: "II. Meşrutiyet ve 31 Mart Vakası", yil: "1908–1909",
        kime: "İç siyaset (İttihat ve Terakki)",
        sebep: "İttihat-Terakki baskısı, Resneli Niyazi'nin dağa çıkması; ardından meşrutiyet karşıtı gerici isyan.",
        sonuc: "Meşrutiyet 2. kez ilan edildi; 31 Mart isyanını, kurmay başkanlığını Mustafa Kemal'in yaptığı Hareket Ordusu bastırdı. II. Abdülhamid tahttan indirildi.",
        onem: "Meclis kararıyla tahttan indirilen İLK padişah; Mustafa Kemal'in tarih sahnesine çıktığı ilk olay.",
        yerler: "Selanik – İstanbul."
      }
    ],
    teskilat: [
      "Ziraat Bankası (1888): Memleket Sandıkları resmen Ziraat Bankası'na dönüştürüldü.",
      "Hamidiye Alayları: Doğu'da Ermeni çetelerine/Rus tehdidine karşı aşiretlerden kurulan süvari birlikleri.",
      "Hicaz Demiryolu: İstanbul-Medine hattı, Müslümanların bağışıyla (Alman iş birliğiyle; Berlin-Bağdat-Basra hattı).",
      "Sanayi-i Nefise Mektebi ve Arkeoloji Müzesi (Osman Hamdi Bey).",
      "Darülaceze (kimsesizler evi), Hamidiye Etfal (ilk çocuk hastanesi), Yıldız İstihbarat (Jurnal) teşkilatı.",
      "Maarifperver padişah: yurdun her yerinde İdadi (lise) ve Rüştiye (ortaokul) — eğitim patlaması (Atatürk ve arkadaşları bu okullarda yetişti)."
    ],
    osym: [
      "Kanun-ı Esasi (1876) = ilk anayasa; Duyun-ı Umumiye (1881) = ekonomik bağımsızlığın kaybı.",
      "Ziraat Bankası, Hamidiye Alayları, Hicaz Demiryolu = II. Abdülhamid'in anahtar kelimeleri.",
      "31 Mart Vakası = Mustafa Kemal'in (Hareket Ordusu) sahneye çıktığı ilk olay."
    ],
    quiz: [
      {
        q: "Türk tarihinin ilk anayasası ve ilan edildiği dönem hangisidir?",
        secenek: ["Tanzimat Fermanı – Abdülmecid", "Kanun-ı Esasi (1876) – II. Abdülhamid", "Sened-i İttifak – II. Mahmud", "Mecelle – Abdülaziz"],
        dogru: 1,
        aciklama: "İlk anayasa Kanun-ı Esasi'dir (1876), II. Abdülhamid döneminde ilan edildi."
      },
      {
        q: "1881'de kurulan Duyun-ı Umumiye İdaresi neyi ifade eder?",
        secenek: ["İlk medeni kanun", "Avrupalıların Osmanlı vergi gelirlerine el koyması", "İlk banka", "İlk anayasa"],
        dogru: 1,
        aciklama: "Duyun-ı Umumiye, alacaklı devletlerin Osmanlı gelirlerine el koyduğu Genel Borçlar İdaresi'dir; ekonomik bağımsızlık kaybıdır."
      },
      {
        q: "Mustafa Kemal'in tarih sahnesine çıktığı ilk olay olarak sorulan olaydır?",
        secenek: ["93 Harbi", "31 Mart Vakası", "Balkan Savaşları", "Trablusgarp"],
        dogru: 1,
        aciklama: "1909 31 Mart Vakası'nı bastıran Hareket Ordusu'nun kurmay başkanı Mustafa Kemal'dir."
      }
    ]
  },
  {
    id: "mehmed5", no: 35, ad: "V. Mehmed", lakap: "Reşad", yil: "1909 – 1918",
    era: "dagilma", status: "full",
    baslik: "Savaşlar Çağının Sembolik Padişahı",
    ruh: "31 Mart Vakası sonrası tahta çıkan, fiili iktidarı İttihat ve Terakki'nin elinde bulunan " +
         "büyük ölçüde sembolik bir padişah. Döneminde Osmanlı arka arkaya yıkıcı savaşlara girdi.",
    savasBaslik: "📜 Savaşlar & Dönüm Noktaları",
    savaslar: [
      {
        ad: "Trablusgarp Savaşı", yil: "1911–1912",
        kime: "İtalya",
        sebep: "İtalya'nın sömürge arayışıyla Trablusgarp'a saldırması.",
        sonuc: "Uşi Antlaşması ile Trablusgarp İtalya'ya bırakıldı (Kuzey Afrika'daki son toprak).",
        onem: "Mustafa Kemal'in (Tobruk-Derne) askeri başarı gösterdiği cephe.",
        yerler: "Libya (Trablusgarp)."
      },
      {
        ad: "Balkan Savaşları", yil: "1912–1913",
        kime: "Bulgaristan, Sırbistan, Yunanistan, Karadağ",
        sebep: "Milliyetçilik ve Osmanlı'nın Balkan topraklarının paylaşılmak istenmesi.",
        sonuc: "I. Balkan Savaşı'nda ağır kayıp; II. Balkan Savaşı'nda Edirne geri alındı.",
        onem: "Balkanlar büyük ölçüde kaybedildi.",
        yerler: "Balkanlar."
      },
      {
        ad: "I. Dünya Savaşı", yil: "1914–1918",
        kime: "İtilaf Devletleri",
        sebep: "İttihat ve Terakki'nin Almanya yanında savaşa girmesi.",
        sonuc: "Çanakkale'de zafer kazanıldı ama savaş Mondros Mütarekesi (1918) ile kaybedildi.",
        onem: "Halife-padişah sıfatıyla 'Cihad-ı Ekber' ilan edildi; V. Mehmed savaş sürerken vefat etti.",
        yerler: "Çanakkale, Kafkas, Kanal, Irak, Hicaz cepheleri."
      }
    ],
    osym: [
      "Fiili iktidar İttihat ve Terakki'dedir; padişah semboliktir.",
      "Trablusgarp, Balkan Savaşları ve I. Dünya Savaşı bu dönemde; Cihad-ı Ekber ilanı."
    ],
    quiz: [
      {
        q: "V. Mehmed (Reşad) döneminin temel siyasi özelliği nedir?",
        secenek: ["Mutlak padişah otoritesi", "Fiili iktidarın İttihat ve Terakki'de olduğu sembolik padişahlık", "İlk anayasanın ilanı", "Halifeliğin alınması"],
        dogru: 1,
        aciklama: "V. Mehmed sembolik kaldı; gerçek iktidar İttihat ve Terakki Cemiyeti'ndeydi."
      },
      {
        q: "Aşağıdaki savaşlardan hangisi V. Mehmed döneminde YAŞANMAMIŞTIR?",
        secenek: ["Trablusgarp", "Balkan Savaşları", "I. Dünya Savaşı", "93 Harbi"],
        dogru: 3,
        aciklama: "93 Harbi (1877-78) II. Abdülhamid dönemidir; diğerleri V. Mehmed dönemindedir."
      }
    ]
  },
  {
    id: "mehmed6", no: 36, ad: "VI. Mehmed", lakap: "Vahdettin", yil: "1918 – 1922",
    era: "dagilma", status: "full",
    baslik: "Son Padişah ve Saltanatın Sonu",
    ruh: "Osmanlı'nın 36. ve SON padişahı. Mondros'un ardından işgallerin sürdüğü, Milli Mücadele'nin " +
         "doğduğu dönemde tahttaydı; İtilaf Devletleri'yle uzlaşma çizgisi izledi.",
    savasBaslik: "📜 Mütareke, İşgal & Son",
    savaslar: [
      {
        ad: "Mondros Mütarekesi ve İşgaller", yil: "1918",
        kime: "İtilaf Devletleri",
        sebep: "I. Dünya Savaşı'nın kaybedilmesi.",
        sonuc: "Ağır mütareke şartları; Anadolu ve İstanbul fiilen işgale açıldı.",
        onem: "Milli Mücadele'nin fitilini ateşleyen ortam.",
        yerler: "Osmanlı toprakları geneli."
      },
      {
        ad: "Mustafa Kemal'in Samsun'a Gönderilmesi", yil: "1919",
        kime: "Resmî görevlendirme",
        sebep: "Karadeniz bölgesindeki asayişsizliği yatıştırma görevi.",
        sonuc: "Mustafa Kemal 9. Ordu Müfettişi olarak 19 Mayıs 1919'da Samsun'a çıktı — Milli Mücadele başladı.",
        onem: "Padişahın verdiği resmî yetki, Milli Mücadele'nin başlangıcına dönüştü.",
        yerler: "Samsun."
      },
      {
        ad: "Sevr Antlaşması ve Saltanatın Kaldırılması", yil: "1920 & 1922",
        kime: "İtilaf Devletleri / TBMM",
        sebep: "Sevr'in (1920) dayatılması ve TBMM'nin zaferi.",
        sonuc: "TBMM 1 Kasım 1922'de saltanatı kaldırdı; Vahdettin ülkeyi terk etti.",
        onem: "600 yıllık Osmanlı saltanatı sona erdi; Vahdettin son padişah oldu.",
        yerler: "Sevr (Paris), Ankara, İstanbul."
      }
    ],
    osym: [
      "Osmanlı'nın son padişahı; Mondros, Sevr ve işgaller onun dönemindedir.",
      "Mustafa Kemal'i (resmî görevle) Samsun'a gönderen padişah.",
      "Saltanatın kaldırılmasıyla (1 Kasım 1922) tahtın ve hanedanın sonu."
    ],
    quiz: [
      {
        q: "Osmanlı Devleti'nin son padişahı kimdir?",
        secenek: ["V. Mehmed Reşad", "VI. Mehmed Vahdettin", "II. Abdülhamid", "Abdülmecid"],
        dogru: 1,
        aciklama: "VI. Mehmed (Vahdettin), saltanatın 1922'de kaldırılmasıyla son Osmanlı padişahı oldu."
      },
      {
        q: "Mustafa Kemal'i 9. Ordu Müfettişi olarak Samsun'a gönderen padişah kimdir?",
        secenek: ["V. Mehmed", "VI. Mehmed (Vahdettin)", "Abdülaziz", "V. Murad"],
        dogru: 1,
        aciklama: "Vahdettin'in resmî görevlendirmesiyle Mustafa Kemal 19 Mayıs 1919'da Samsun'a çıktı."
      }
    ]
  }
];
