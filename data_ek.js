/* data_ek.js — PDF "KPSS Tarih Çalışma Yol Haritası" (sayfa 57 sonrası) soru bankası.
   data.js'ten SONRA, app.js'ten ÖNCE yüklenir.
   1) Mevcut padişahların quiz'lerine 10'ar soru EKLER (üzerine yazmaz).
   2) Duraklama→Çağdaş dönem "konu testi" düğümlerini SULTANS'a ekler (Atatürk dönemi dahil). */

/* ————— 1) PADİŞAH BAŞINA EKLENEN 10 SORU (Yükselme + Duraklama padişahları) ————— */
const QUIZ_EK = {
  murad2: [
    { q: "Balkanlar'da yaşanan askeri başarısızlıklar ve Edirne-Segedin Antlaşması'nın (1444) ardından tahtı kendi rızasıyla 12 yaşındaki oğlu II. Mehmed'e (Fatih) devreden Osmanlı padişahı aşağıdakilerden hangisidir?",
      secenek: ["I. Bayezid", "I. Mehmed", "II. Murad", "II. Bayezid", "I. Selim"], dogru: 2,
      aciklama: "II. Murad, Batı'da Edirne-Segedin Antlaşması'nı imzalayıp Doğu'da Karamanoğulları ile anlaştıktan sonra tahtı oğlu II. Mehmed'e bırakıp Manisa'ya çekilmiştir." },
    { q: "II. Murad Dönemi'nde (1446) çocuk yaştaki II. Mehmed'in tahta çıkmasını fırsat bilen yeniçerilerin maaş yetersizliğini gerekçe göstererek çıkardığı, Osmanlı tarihinde İLK yeniçeri ayaklanması aşağıdakilerden hangisidir?",
      secenek: ["Patrona Halil İsyanı", "Buçuktepe İsyanı", "Kabakçı Mustafa İsyanı", "Celali İsyanları", "Atmeydanı İsyanı"], dogru: 1,
      aciklama: "Buçuktepe İsyanı Osmanlı tarihindeki ilk yeniçeri isyanıdır. Bu isyan sonrasında II. Murad tekrar tahta davet edilmiştir." },
    { q: "1448 yılında Haçlı ordusuna karşı kazanılan, Avrupalıların Türkleri Balkanlar'dan atma ümidini tamamen kıran ve Balkanlar'ın Türk yurdu olduğunu KESİNLEŞTİREN savaş hangisidir?",
      secenek: ["I. Kosova Savaşı", "Niğbolu Savaşı", "II. Kosova Savaşı", "Varna Savaşı", "Çirmen Savaşı"], dogru: 2,
      aciklama: "Miryokefalon Anadolu'yu nasıl kesin Türk yurdu yaptıysa, II. Kosova Savaşı (1448) da Balkanlar'ı kesin Türk yurdu yapmıştır." },
    { q: "Türkçenin gelişmesine büyük önem veren, sarayında şairleri ve alimleri toplayan, hayır eserlerinden dolayı “Koca Murat” ile “Ebu'l-Hayrat” (Hayır Babası) olarak anılan padişah kimdir?",
      secenek: ["I. Murad", "II. Murad", "II. Mehmed", "I. Mehmed", "II. Bayezid"], dogru: 1,
      aciklama: "II. Murad yaptırdığı camiler, medreseler, köprüler (Ergene Köprüsü vb.) sebebiyle Ebu'l-Hayrat olarak tanınır." },
    { q: "Devlet adamı ve nitelikli bürokrat yetiştirmek amacıyla ilk kez Edirne Sarayı'nda kurulan, Fatih döneminde Topkapı Sarayı'na taşınarak kurumsallaşan saray okulu aşağıdakilerden hangisidir?",
      secenek: ["Medrese", "Enderun Mektebi", "Rüştiye", "Darülfünun", "Sahn-ı Seman"], dogru: 1,
      aciklama: "II. Murad, devşirme çocukların üst düzey yönetici olarak yetiştirilmesi için Edirne'de Enderun'un temellerini atmıştır." },
    { q: "II. Murad, tahta çıktığında hem amcası Mustafa Çelebi (Düzmece) hem de kardeşi Şehzade Mustafa isyanlarıyla karşılaşmıştır. Bu iki taht iddiasının arkasında durarak iç kriz çıkaran dış güç aşağıdakilerden hangisidir?",
      secenek: ["Memlük Devleti", "Bizans İmparatorluğu", "Akkoyunlular", "Venedik", "Trabzon Rum İmparatorluğu"], dogru: 1,
      aciklama: "Bizans, elinde tuttuğu şehzadeleri salarak Osmanlı'yı sürekli iç taht kavgalarıyla zayıflatmaya çalışmıştır." },
    { q: "1444 yılında II. Mehmed'in çocuk yaşta tahta çıkması ve Edirne-Segedin Antlaşması'nın bozulması üzerine Haçlıların saldırmasıyla gerçekleşen, II. Murad'ın ordunun başına geçerek zafer kazandığı savaş hangisidir?",
      secenek: ["Varna Savaşı", "II. Kosova Savaşı", "Niğbolu Savaşı", "Mohaç Savaşı", "Otlukbeli Savaşı"], dogru: 0,
      aciklama: "1444 Varna Savaşı, Haçlıların antlaşmayı ihlal etmesi üzerine yapılmış ve Osmanlı zaferiyle sonuçlanmıştır." },
    { q: "II. Murad Dönemi'nde Hamitoğulları ve Germiyanoğulları toprakları Osmanlı'ya tamamen katılmıştır. Germiyanoğulları Beyliği Osmanlı'ya hangi yolla katılmıştır?",
      secenek: ["Para ile satın alınarak", "Savaş yoluyla fethedilerek", "Vasiyet yoluyla (Son hükümdar II. Yakup Bey'in vasiyetiyle)", "Çeyiz yoluyla", "Haçlı desteğiyle"], dogru: 2,
      aciklama: "Germiyanoğlu II. Yakup Bey çocuğu olmadığı için topraklarını II. Murad'a vasiyet etmiş, 1429'da barışçı yolla Osmanlı'ya katılmıştır." },
    { q: "Osmanlı padişahlarının şiir yazma geleneğinde “Muradi” mahlasını kullanarak divan edebiyatında eserler veren ilk padişahlardan biri kimdir?",
      secenek: ["I. Bayezid", "II. Murad", "Fatih Sultan Mehmed", "II. Bayezid", "I. Selim"], dogru: 1,
      aciklama: "II. Murad, “Muradi” mahlasıyla şiirler yazan ve sanatı destekleyen kültürlü bir padişahtır." },
    { q: "II. Murad döneminde Türk kökenli Çandarlı Ailesi sadrazamlık makamındaki gücünü korurken, padişah devşirmeleri saray bürokrasisine çekerek denge kurmuştur. Bu durum aşağıdakilerden hangisinin göstergesidir?",
      secenek: ["Aristokratik yapının tamamen bittiğinin", "Sadrazamın padişahtan daha yetkili olduğunun", "Merkezi otoriteler arası güç dengesinin gözetildiğinin", "Tımar sisteminin kaldırıldığının", "Eyalet sistemine son verildiğinin"], dogru: 2,
      aciklama: "Çandarlı gücü ile devşirme gücü arasında denge kurularak tek bir grubun devleti ele geçirmesi engellenmiştir." }
  ]
};

QUIZ_EK.fatih = [
  { q: "İstanbul'un 1453'te fethiyle birlikte Orta Çağ kapanmış, Yeni Çağ başlamıştır. Fatih Sultan Mehmed, bu fetihle Doğu Roma'nın mirasçısı sayılarak aşağıdaki unvanlardan hangisini kullanmıştır?",
    secenek: ["Hâdimü'l-Haremeyn", "Kayser-i Rûm (Roma Kayseri)", "Sultan-ı İklim-i Rûm", "Ebu'l-Hayrat", "Hüdavendigâr"], dogru: 1,
    aciklama: "Fatih kendisini Doğu Roma'nın (Roma İmparatorluğu) meşru varisi gördüğü için Kayser-i Rûm unvanını kullanmıştır." },
  { q: "Osmanlı Devleti'nde İLK yazılı kanunname olma özelliği taşıyan; “Kardeş katli”, “Cülus bahşişi”, “Sancağa çıkma” ve “Müsadere” usullerini yasal kurala bağlayan belge aşağıdakilerden hangisidir?",
    secenek: ["Sened-i İttifak", "Kanunname-i Âli Osman", "Tanzimat Fermanı", "Islahat Fermanı", "Mecelle"], dogru: 1,
    aciklama: "ÖSYM'nin en çok sorduğu hukuki metindir. Fatih, devletin bekası için verasete ve saray kurallarına Kanunname-i Âli Osman ile yasal zemin kazandırmıştır." },
  { q: "Fatih Sultan Mehmed'in İstanbul'un fethinden hemen sonra Sadrazam Çandarlı Halil Paşa'yı idam ettirerek mallarına el koyması (Müsadere) aşağıdaki hedeflerden hangisine yöneliktir?",
    secenek: ["Yeniçeri Ocağı'nı kapatmak", "Merkezi otoriteyi tamamen padişahın şahsında toplamak ve rakip feodal/köklü aileleri pasifize etmek", "İskan politikasını bitirmek", "Celali İsyanları'nı bitirmek", "Batı tarzı ıslahat yapmak"], dogru: 1,
    aciklama: "Çandarlı'nın idamı ve müsadere ile Türk kökenli güçlü ailelerin merkeze rakip olması engellenmiş, devşirmeler vasıtasıyla mutlak otorite sağlanmıştır." },
  { q: "1473 yılında Akkoyunlu Hükümdarı Uzun Hasan ile yapılan ve Doğu Anadolu'nun güvenliğini sağlayarak Akkoyunlu Devleti'ni yıkılış sürecine sokan savaş hangisidir?",
    secenek: ["Turnadağ Savaşı", "Otlukbeli Savaşı", "Çaldıran Savaşı", "Ridaniye Savaşı", "Mercidabık Savaşı"], dogru: 1,
    aciklama: "Otlukbeli Savaşı ile Fatih, ateşli silah üstünlüğü sayesinde Uzun Hasan'ı mağlup etmiş ve Akkoyunlu tehdidini bitirmiştir." },
  { q: "Fatih Dönemi'nde 1475 yılında Gedik Ahmed Paşa komutasındaki donanmanın fethederek Karadeniz'i bir Türk gölü haline getirdiği bölge aşağıdakilerden hangisidir?",
    secenek: ["Rodos", "Kıbrıs", "Kırım", "Girit", "Sakız Adası"], dogru: 2,
    aciklama: "Kırım'ın fethi ile İpek Yolu denetimi sağlanmış ve Karadeniz Türk gölü olmuştur." },
  { q: "Fatih Sultan Mehmed tarafından İstanbul'da açılan, dönemin en yüksek düzeydeki medresesi olan ve rektörlüğüne ünlü matematikçi/astronom Ali Kuşçu'nun getirildiği eğitim kurumu hangisidir?",
    secenek: ["İznik Medresesi", "Sahn-ı Seman Medresesi", "Süleymaniye Medresesi", "Darülfünun", "Enderun"], dogru: 1,
    aciklama: "Sahn-ı Seman Medreseleri Osmanlı medresesinin zirvesidir. Ali Kuşçu burada dersler vermiştir." },
  { q: "Fatih Sultan Mehmed Dönemi'nde Divan-ı Hümayun başkanlığı padişahtan alınarak kime devredilmiştir ve bu adımın amacı nedir?",
    secenek: ["Nişancıya - Dış politikayı hızlandırmak", "Sadrazama (Vezir-i azam) - Sadrazamın sorumluluğunu artırıp padişahı daha tarafsız ve mutlak konuma getirmek", "Kazaskere - Adaleti güçlendirmek", "Kaptan-ı Derya'ya - Donanmayı yönetmek", "Defterdara - Bütçeyi denetlemek"], dogru: 1,
    aciklama: "Fatih, Divan başkanlığını Sadrazama bırakarak sadrazamı “padişahın mutlak vekili” yapmış, divanı bir karar organından danışma organına dönüştürmüştür." },
  { q: "Fatih Sultan Mehmed'in Mora Despotluğu'nu (1460) ve Trabzon Rum İmparatorluğu'nu (1461) ortadan kaldırmasının temel amacı aşağıdakilerden hangisidir?",
    secenek: ["Otlukbeli Savaşı'na hazırlanmak", "Bizans İmparatorluğu'nu yeniden diriltme umutlarını tamamen yok etmek", "Akdeniz ticaretini Venedik'e teslim etmek", "Hicaz su yolları sorununu çözmek", "Şiilik propagandasını engellemek"], dogru: 1,
    aciklama: "Mora ve Trabzon, Bizans hanedan üyeleri tarafından yönetiliyordu. Fatih buraları alarak Bizans'ın yeniden dirilme hayalini tamamen bitirmiştir." },
  { q: "1479 yılında yapılan antlaşma ile Osmanlı tarihinde İLK KEZ ticari imtiyaz (kapitülasyon benzeri haklar) verilen ve İstanbul'da “Balyos” adında elçi bulundurma hakkı kazanan devlet hangisidir?",
    secenek: ["Fransa", "İngiltere", "Venedik", "Ceneviz", "Hollanda"], dogru: 2,
    aciklama: "16 yıl süren deniz savaşları sonrası Venedik'e imtiyazlar verilmiş ve İstanbul'da Balyos elçisi bulundurmasına izin verilmiştir." },
  { q: "Fatih Sultan Mehmed'in hayatının son seferi olan, Gedik Ahmed Paşa'nın İtalya çizmesine ayak basarak fethettiği ancak Fatih'in vefatı üzerine devam ettirilemeyen stratejik liman neresidir?",
    secenek: ["Napoli", "Otranto", "Venedik", "Floransa", "Cenova"], dogru: 1,
    aciklama: "1480 Otranto Seferi, Roma'yı fethetme hedefinin ilk adımıdır; ancak 1481'de Fatih ölünce askıda kalmıştır." }
];

QUIZ_EK.bayezid2 = [
  { q: "Fatih'in ölümü sonrası küçük oğlu Cem Sultan taht mücadelesini kaybedince Avrupa'ya kaçmış, bu durum II. Bayezid'in Batı'da pasif ve tutuk bir politika izlemesine sebep olmuştur. Osmanlı'nın fethini yavaşlatan ve uluslararası bir krize dönüşen bu iç gelişme hangisidir?",
    secenek: ["Şahkulu İsyanı", "Düzmece Mustafa Olayı", "Cem Sultan Olayı", "Celali İsyanları", "Buçuktepe İsyanı"], dogru: 2,
    aciklama: "Cem Sultan Olayı, Avrupa'nın (Papa) elinde bir koz haline gelerek II. Bayezid'in Batı'da pasif ve tutuk kalmasına sebep olmuştur." },
  { q: "II. Bayezid Dönemi, Cem Sultan krizinin yarattığı baskı ve padişahın sakin kişiliği sebebiyle fetihlerin yavaşladığı bir dönemdir. Bu durum tarihçiler tarafından nasıl tanımlanır?",
    secenek: ["Fetret Devri", "Yükselme Dönemi İçinde Duraklama", "Lale Devri", "Bunalım Devri", "Fetihlerin Altın Çağı"], dogru: 1,
    aciklama: "II. Bayezid dönemi pasiflikten dolayı “Yükselme içinde duraklama” olarak bilinir." },
  { q: "1509 yılında İstanbul'da meydana gelen ve “Küçük Kıyamet” (Kıyamet-i Suğra) olarak anılan büyük deprem sonrasında, yaraları sarmak amacıyla İLK KEZ toplanan olağanüstü hal vergisi hangisidir?",
    secenek: ["Öşür", "Haraç", "Avarız Vergisi", "Ağnam", "Cizye"], dogru: 2,
    aciklama: "Avarız vergisi II. Bayezid döneminde deprem felaketi için geçici çıkarılmış, sonra kalıcı hale gelmiştir." },
  { q: "1511 yılında Antalya/Tekke bölgesinde ortaya çıkan, Safevi (İran - Şah İsmail) desteği olan ve II. Bayezid'in pasif tutumu sebebiyle zorlukla bastırılan mezhep/siyasi nitelikli isyan aşağıdakilerden hangisidir?",
    secenek: ["Baba Zünnun İsyanı", "Kalenderoğlu İsyanı", "Şahkulu İsyanı", "Şeyh Bedrettin İsyanı", "Celali İsyanı"], dogru: 2,
    aciklama: "Şahkulu İsyanı Anadolu'da Şii tehlikesini ayyuka çıkarmış ve Şehzade Selim'in (Yavuz) babasına darbe yapmasına zemin hazırlamıştır." },
  { q: "1492 yılında İspanya'da Katolik baskısı ve katliamına (Engizisyon) uğrayan Endülüs Müslümanları ile Sefarad Yahudileri'ni kucak açarak onları Osmanlı gemileriyle (Kemal Reis) İstanbul ve Selanik'e getirten padişah kimdir?",
    secenek: ["Fatih Sultan Mehmed", "II. Bayezid", "Yavuz Sultan Selim", "Kanuni Sultan Süleyman", "III. Murad"], dogru: 1,
    aciklama: "II. Bayezid insani bir diplomasi ile Kemal Reis'i gönderip Yahudi ve Müslümanları katliamdan kurtarmıştır." },
  { q: "Doğu'daki Şiilik tehdidine karşı pasif kaldığı gerekçesiyle, oğlu Şehzade Selim (Yavuz) tarafından yeniçerilerin de desteğiyle tahttan indirilen ilk Osmanlı padişahı kimdir?",
    secenek: ["II. Murad", "II. Bayezid", "I. İbrahim", "IV. Mehmed", "III. Ahmed"], dogru: 1,
    aciklama: "Yavuz Sultan Selim, yeniçerileri arkasına alarak babası II. Bayezid'i tahttan indirmiştir." },
  { q: "Osmanlı'yı en çok uğraştıran ve kendisini Selçuklu'nun mirasçısı gören Karamanoğulları Beyliği'ne KESİN OLARAK son veren padişah kimdir?",
    secenek: ["I. Bayezid", "II. Mehmed", "II. Bayezid", "I. Selim", "I. Süleyman"], dogru: 2,
    aciklama: "Fatih Karamanoğulları'na ağır darbe vurmuş, II. Bayezid ise beyliği 1487'de tamamen haritadan silmiştir." },
  { q: "II. Bayezid Dönemi'nde Boğdan üzerine çıkılan seferle fethedilen Kili ve Akkerman Kaleleri'nin fethinin en büyük stratejik önemi nedir?",
    secenek: ["İtalya'nın kapılarını açması", "Osmanlı topraklarının Kırım Hanlığı ile KARA BAĞLANTISININ sağlanması", "Baharat Yolu'nun son bulması", "Fransa'ya imtiyaz verilmesi", "Şiilik propagandasının önlenmesi"], dogru: 1,
    aciklama: "Kili ve Akkerman kaleleri sayesinde Romanya/Boğdan hattı üzerinden Kırım ile karadan birleşilmiştir." },
  { q: "Edirne'de Tunca Nehri kenarında kurulan, içinde akıl hastalarının müzik, su sesi ve güzel kokularla tedavi edildiği ünlü Külliye ve Şifahane hangi padişah eseridir?",
    secenek: ["II. Murad", "II. Bayezid", "I. Ahmed", "III. Murad", "I. Mahmud"], dogru: 1,
    aciklama: "Edirne II. Bayezid Külliyesi, tıp tarihi açısından müzikle tedavi yapan dünya çapında bir şaheserdir." },
  { q: "Rönesans'ın dâhisi Leonardo da Vinci'nin Haliç üzerine yapmayı planladığı köprü projesini bir mektupla sunduğu ancak projenin hayata geçirilemediği Osmanlı padişahı kimdir?",
    secenek: ["Fatih Sultan Mehmed", "II. Bayezid", "Kanuni Sultan Süleyman", "III. Ahmed", "II. Mahmud"], dogru: 1,
    aciklama: "Leonardo da Vinci, II. Bayezid'e mektup yazarak Haliç ve Boğaz'a köprü yapma teklifinde bulunmuştur." }
];

QUIZ_EK.selim1 = [
  { q: "Doğudaki iç tehlikeleri bitirmeye odaklanan, devlet hazinesini ağzına kadar dolduran, mührünü hazineye bastıran ve 8 yıllık kısa saltanatında imparatorluk topraklarını 2,5 kat büyüten padişah kimdir?",
    secenek: ["Fatih Sultan Mehmed", "Yavuz Sultan Selim", "Kanuni Sultan Süleyman", "II. Selim", "IV. Murad"], dogru: 1,
    aciklama: "Yavuz Sultan Selim tüm enerjisini Doğu'ya vermiş ve hazineyi ağzına kadar altınla doldurmuştur." },
  { q: "1514 yılında İran/Safevi Şahı Şah İsmail ile yapılan ve Osmanlı'nın ateşli silah üstünlüğüyle Şiilik tehlikesini ve Safevi tehdidini uzun süre etkisiz hale getirdiği savaş hangisidir?",
    secenek: ["Otlukbeli Savaşı", "Çaldıran Savaşı", "Turnadağ Savaşı", "Mercidabık Savaşı", "Çirmen Savaşı"], dogru: 1,
    aciklama: "Çaldıran Savaşı ile Safevîler mağlup edilmiş, Doğu ve Güneydoğu Anadolu Osmanlı denetimine girmiştir." },
  { q: "1515 yılında Dulkadiroğulları Beyliği ile yapılan ve bu beyliğin yıkılmasıyla Anadolu Türk Siyasi Birliği'ni (ATSB) KESİN VE KALICI olarak sağlayan savaş hangisidir?",
    secenek: ["Otlukbeli Savaşı", "Turnadağ Savaşı", "Mercidabık Savaşı", "Çaldıran Savaşı", "Ridaniye Savaşı"], dogru: 1,
    aciklama: "Turnadağ Savaşı ile Maraş/Elbistan çevresindeki Dulkadiroğulları yıkılmış ve Anadolu Türk Siyasi Birliği kesin olarak sağlanmıştır." },
  { q: "1517 Ridaniye Savaşı ile Memlük Devleti'ne son veren Yavuz Sultan Selim'in elde ettiği en büyük dini ve siyasi kazanım nedir?",
    secenek: ["Karadeniz'in Türk gölü olması", "Halifelik makamının Osmanlı hanedanına geçmesi ve Osmanlı'nın İslam dünyasının lideri olması", "Yeniçeri Ocağı'nın kurulması", "İpek Yolu'nun denetim altına alınması", "Balkanlar'ın Türk yurdu olması"], dogru: 1,
    aciklama: "Memlüklerin yıkılmasıyla Kutsal Emanetler İstanbul'a getirilmiş, halifelik Osmanlı'ya geçmiş ve teokratik yapı güçlenmiştir." },
  { q: "Mısır Seferi sonrası Mekke ve Medine (Hicaz) Osmanlı hakimiyetine girmiştir. Yavuz Sultan Selim, kendisine sunulan “Hicaz'ın Hakimi” ifadesini reddederek aşağıdaki hangi unvanı kullanmıştır?",
    secenek: ["Şahinşah", "Hâdimü'l-Haremeyni'ş-Şerifeyn (Mekke ve Medine'nin Hizmetkarı)", "Kayser-i Rûm", "Sultan-ı Rûm", "Halife-i Rûy-i Zemin"], dogru: 1,
    aciklama: "Yavuz “Hakim” (Sahip) olmayı kibir saymış, Kutsal Toprakların “Hizmetkarı” (Hâdim) olmayı gururla kabul etmiştir." },
  { q: "Mısır ve Suriye'nin fethiyle birlikte aşağıdaki uluslararası ticaret yollarından hangisi TAMAMEN Osmanlı Devleti'nin kontrolüne geçmiştir?",
    secenek: ["İpek Yolu", "Baharat Yolu", "Kral Yolu", "Kürk Yolu", "Amber Yolu"], dogru: 1,
    aciklama: "Mısır, Baharat Yolu'nun Akdeniz'e açılan kapısıydı. Ancak Coğrafi Keşifler yüzünden beklenen gelir elde edilememiştir." },
  { q: "Anadolu'da bozulan ekonomik durum ve dini propaganda sebebiyle Yavuz Dönemi'nde Yozgat çevresinde çıkan ve sonraki tüm Anadolu isyanlarına isim babalığı yapan ayaklanma hangisidir?",
    secenek: ["Şahkulu İsyanı", "Bozoklu Celal İsyanı", "Baba Zünnun İsyanı", "Kalender Çelebi İsyanı", "Patrona Halil İsyanı"], dogru: 1,
    aciklama: "Bozoklu Celal'in çıkardığı isyandan dolayı Osmanlı'daki tüm sosyal/ekonomik isyanlara “Celali İsyanları” denmiştir." },
  { q: "Yavuz Sultan Selim'in Doğu Anadolu aşiretlerinin Osmanlı'ya kansız katılmasını sağlamak için görevlendirdiği, Heşt Bihişt (8 Cennet) eserinin de yazarı olan ünlü bürokrat kimdir?",
    secenek: ["Celalzade Mustafa", "İdris-i Bitlisi", "Ebussuud Efendi", "Kemalpaşazade", "Lütfi Paşa"], dogru: 1,
    aciklama: "İdris-i Bitlisî diplomasi ile Doğu Anadolu aşiretlerinin Osmanlı'ya kansız katılmasını sağlamıştır." },
  { q: "Yavuz Sultan Selim hazineyi ağzına kadar doldurduktan sonra ünlü bir vasiyet bırakmıştır. Bu vasiyet aşağıdakilerden hangisidir?",
    secenek: ["“Torunlarım Venedik'i fethetsin.”", "“Hazineyi benden sonra dolduran kendi mührüyle mühürlesin; dolduramayan benim mührümle mühürlesin.”", "“Halifelik ebediyen İstanbul'da kalsın.”", "“Yeniçeri sayısı hiçbir zaman artırılmasın.”", "“Donanma Haliç'ten çıkarılmasın.”"], dogru: 1,
    aciklama: "Yavuz'dan sonra hiçbir padişah hazineyi o kadar dolduramamış; Hazine Kapısı asırlarca Yavuz'un mührüyle mühürlü kalmıştır." },
  { q: "Yavuz Sultan Selim'in Batı'ya (Avrupa'ya) HİÇ sefer düzenlememesinin temel stratejik nedeni nedir?",
    secenek: ["Avrupa askeri teknolojisinden korkması", "Arkasında Şii Safevi ve Memlük tehdidi varken Batı'ya gitmeyi güvenli bulmaması ve önce Doğu güvenliğini tamamen bitirmek istemesi", "Donanmanın olmaması", "Şah İsmail ile akraba olması", "Yaşlı ve güçsüz olması"], dogru: 1,
    aciklama: "İki ateş arasında kalmamak için önce arkasındaki Doğu tehditlerini (Safevi, Memlük, Dulkadir) kökten yok etmiştir." }
];

QUIZ_EK.suleyman1 = [
  { q: "En uzun süre tahtta kalan (46 yıl), Batılıların “Muhteşem”, Doğuluların adaletine binaen “Kanuni” dediği padişah kimdir?",
    secenek: ["Fatih Sultan Mehmed", "Yavuz Sultan Selim", "Kanuni Sultan Süleyman", "IV. Mehmed", "III. Ahmed"], dogru: 2,
    aciklama: "Kanuni 1520-1566 yılları arasında 46 yıl hüküm sürmüştür." },
  { q: "1526 yılında Macaristan ordusunun yaklaşık 2 saat gibi kısa bir sürede imha edildiği ve Macaristan'ın Osmanlı'ya bağlandığı savaş hangisidir?",
    secenek: ["Niğbolu Savaşı", "Mohaç Meydan Savaşı", "Varna Savaşı", "Haçova Savaşı", "Cerbe Savaşı"], dogru: 1,
    aciklama: "Mohaç Zaferi ile Macaristan krallığı çökmüş ve Budin merkezli olarak Osmanlı'ya bağlanmıştır." },
  { q: "28 Eylül 1538'de Barbaros Hayreddin Paşa komutasındaki Osmanlı donanmasının Andrea Doria liderliğindeki Haçlı donanmasını yok ettiği ve Akdeniz'i bir Türk gölü haline getirdiği deniz savaşı hangisidir?",
    secenek: ["Cerbe Deniz Savaşı", "Preveze Deniz Savaşı", "İnebahtı Deniz Savaşı", "Navarin Baskını", "Çeşme Baskını"], dogru: 1,
    aciklama: "Preveze Deniz Zaferi (28 Eylül) günümüzde “Türk Denizcilik Günü” olarak kutlanır ve Akdeniz hâkimiyetini tescillemiştir." },
  { q: "1533 İstanbul (İbrahim Paşa) Antlaşması'na göre Avusturya Arşidükü, protokol bakımından Osmanlı Sadrazamına eşit sayılacaktı. Bu maddenin en açık yorumu nedir?",
    secenek: ["Avusturya'nın Osmanlı'dan güçlü olduğu", "Osmanlı Devleti'nin Avusturya üzerinde siyasi ve protokol üstünlüğünü kabul ettirdiği", "İki devletin eşit haklara sahip olduğu", "Mezhep savaşlarının bittiği", "Haçlı Seferleri'nin durduğu"], dogru: 1,
    aciklama: "Avusturya Kralı'nın Osmanlı Padişahına değil onun Sadrazamına eşit sayılması büyük bir siyasi üstünlük göstergesidir (Bu durum 1606 Zitvatorok ile bozulacaktır)." },
  { q: "1535 yılında Fransa ile yapılan Kapitülasyonlar (Ahdname-i Hümayun) antlaşmasına “Her iki hükümdarın sağlığı süresince geçerli olacaktır” maddesi eklenmiştir. Bu maddenin konulma temel amacı nedir?",
    secenek: ["Fransa'yı zenginleştirmek", "İleride Osmanlı aleyhine doğabilecek riskleri önlemek ve devleti kalıcı olarak bağlamamak", "Şiilik propagandasını engellemek", "Coğrafi Keşifleri başlatmak", "Akdeniz ticaretini Venedik'e devretmek"], dogru: 1,
    aciklama: "Osmanlı bu hakkı stratejik ittifak için vermiş, devlete ebedi bir yük olmaması için geçerliliği hükümdarların ömrüyle sınırlamıştır." },
  { q: "Portekiz'in Hint Okyanusu'ndaki Müslümanlara zulmetmesi üzerine açılan Hint Deniz Seferleri (Hadım Süleyman Paşa, Piri Reis, Seydi Ali Reis) başarısız olmuştur. Aşağıdakilerden hangisi bu başarısızlığın sebeplerinden biri DEĞİLDİR?",
    secenek: ["Osmanlı kadırgalarının okyanus dalgalarına dayanıksız olması", "Seferlere gereken stratejik ve ekonomik önemin verilmemesi", "Gücerat Müslümanlarının yeterli destek vermemesi", "Portekiz'in okyanus şartlarına uygun büyük kalyonlara sahip olması", "Osmanlı'nın hiç donanmasının bulunmaması"], dogru: 4,
    aciklama: "Osmanlı'nın devasa bir Akdeniz donanması vardı; ancak bu donanma iç deniz tipi kadırgalardan oluşuyordu, okyanus tipi kalyon değildi." },
  { q: "Kanuni Sultan Süleyman Dönemi'nde uzun yıllar Şeyhülislamlık yapan, kanunların İslam hukukuna uygunluğunu denetleyen ve Kanuni'nin reformlarına fıkhi altyapı sağlayan ünlü alim kimdir?",
    secenek: ["Molla Fenari", "Ebussuud Efendi", "Zenbilli Ali Efendi", "Kemalpaşazade", "İdris-i Bitlisi"], dogru: 1,
    aciklama: "Ebussuud Efendi, Kanuni döneminin adalet ve hukuk alanındaki en büyük otoritesidir." },
  { q: "1555 yılında Safevi (İran) Devleti ile imzalanan, Doğu Anadolu, Bağdat ve Tebriz'in Osmanlı'da kaldığı, Osmanlı ile İran arasındaki İLK resmi antlaşma hangisidir?",
    secenek: ["Kasr-ı Şirin Antlaşması", "Amasya Antlaşması", "Ferhat Paşa Antlaşması", "Nasuh Paşa Antlaşması", "Serav Antlaşması"], dogru: 1,
    aciklama: "1555 Amasya Antlaşması, Osmanlı-İran tarihinin İLK resmi barış antlaşmasıdır." },
  { q: "Kanuni Sultan Süleyman'ın 1566 yılında ilerlemiş yaşına ve hastalığına rağmen çıktığı, kale kuşatılırken vefat ettiği son seferi aşağıdakilerden hangisidir?",
    secenek: ["Rodos Seferi", "Belgrad Seferi", "Zigetvar Seferi", "Almanya Seferi", "İrakeyn Seferi"], dogru: 2,
    aciklama: "Kanuni, 13. ve son seferi olan Zigetvar Kuşatması sırasında vefat etmiş, kale hemen ardından düşmüştür." },
  { q: "Hint Deniz Seferlerine katılan, dönüşte yaşadığı maceraları Mir'atü'l-Memâlik (Memleketlerin Aynası) adlı ünlü gezi eserinde toplayan büyük Osmanlı denizcisi kimdir?",
    secenek: ["Piri Reis", "Barbaros Hayreddin Paşa", "Seydi Ali Reis", "Turgut Reis", "Murat Reis"], dogru: 2,
    aciklama: "Seydi Ali Reis, Mir'atü'l-Memâlik eseriyle tanınan usta denizci ve coğrafyacıdır (Piri Reis'in eseri ise Kitab-ı Bahriye'dir)." }
];

QUIZ_EK.selim2 = [
  { q: "Ordunun başında sefere çıkmayan ilk padişahtır. Bu dönemde devlet yönetimi ve askeri seferler ağırlıklı olarak Sadrazam Sokullu Mehmed Paşa tarafından yürütülmüştür. Bu padişah kimdir?",
    secenek: ["III. Murad", "II. Selim", "III. Mehmed", "I. Ahmed", "II. Osman"], dogru: 1,
    aciklama: "II. Selim, ordunun başında sefere çıkmayan ilk padişahtır; yönetimde Sokullu Mehmed Paşa öne çıkmıştır." },
  { q: "1571 yılında Lala Mustafa Paşa komutasındaki Osmanlı ordusu tarafından Venedik'ten fethedilen ve Doğu Akdeniz güvenliğini tamamen sağlayan stratejik ada hangisidir?",
    secenek: ["Rodos", "Girit", "Kıbrıs", "Sakız", "Eğriboz"], dogru: 2,
    aciklama: "Kıbrıs'ın fethi ile Doğu Akdeniz kontrol altına alınmış; bu fethe misilleme olarak Haçlılar İnebahtı'da Osmanlı donanmasını yakmıştır." },
  { q: "1571 İnebahtı Deniz Savaşı sonrası Venedik elçisine, “Biz sizden Kıbrıs'ı alarak kolunuzu kestik; siz İnebahtı'da sakalımızı tıraş ettiniz. Kesilen sakal daha gür çıkar ama kesilen kol yerine gelmez” diyen sadrazam kimdir?",
    secenek: ["Köprülü Mehmed Paşa", "Pargalı İbrahim Paşa", "Sokullu Mehmed Paşa", "Tarhuncu Ahmed Paşa", "Merzifonlu Kara Mustafa Paşa"], dogru: 2,
    aciklama: "Sokullu Mehmed Paşa bu sözüyle devletin gücünü ortaya koymuş; nitekim Osmanlı kısa sürede yeni bir donanmayı denize indirmiştir." },
  { q: "Sokullu Mehmed Paşa'nın Rusya'nın güneye inmesini engellemek, Orta Asya Türkleri ile bağ kurmak ve İran'ı kuzeyden denetlemek amacıyla başlattığı proje hangisidir?",
    secenek: ["Süveyş Kanalı Projesi", "Don-Volga Kanalı Projesi", "Marmara-Karadeniz Projesi", "Haliç-Karadeniz Projesi", "Tuna-Karadeniz Projesi"], dogru: 1,
    aciklama: "Don ve Volga nehirlerini birleştirme projesi Rus engeli ve Kırım Hanı'nın isteksizliği sebebiyle yarım kalmıştır." },
  { q: "Sokullu Mehmed Paşa'nın Akdeniz ile Kızıldeniz'i birleştirerek Baharat Yolu'na yeniden işlerlik kazandırmak ve Portekiz'i Hint Okyanusu'ndan atmak için düşündüğü proje hangisidir?",
    secenek: ["Don-Volga Kanalı Projesi", "Süveyş Kanalı Projesi", "Karadeniz Projesi", "Basra Körfezi Projesi", "Nil Projesi"], dogru: 1,
    aciklama: "Süveyş Kanalı fikri ilk kez Sokullu döneminde gündeme gelmiş, ancak 19. yüzyılda hayata geçirilebilmiştir." },
  { q: "Mimar Sinan'ın “Çıraklık eserim” dediği Şehzade Camii ve “Kalfalık eserim” dediği Süleymaniye Camii'nden sonra, II. Selim adına Edirne'de yaptığı ve “Ustalık eserim” dediği yapı hangisidir?",
    secenek: ["Sultanahmet Camii", "Selimiye Camii", "Mihrimah Sultan Camii", "Nuruosmaniye Camii", "Fatih Camii"], dogru: 1,
    aciklama: "Edirne Selimiye Camii, Mimar Sinan'ın ustalık eseridir ve UNESCO Dünya Mirası listesindedir." },
  { q: "II. Selim Dönemi'nde Sinan Paşa ve Kılıç Ali Paşa komutasındaki Osmanlı donanması tarafından İspanyollardan alınan Kuzey Afrika toprağı neresidir?",
    secenek: ["Trablusgarp", "Cezayir", "Tunus", "Fas", "Mısır"], dogru: 2,
    aciklama: "1574'te Tunus'un fethiyle İspanya'nın Kuzey Afrika'daki varlığına büyük darbe vurulmuştur." },
  { q: "II. Selim şehzadeliğinde hangi sancaklarda görev yaparak yetişmiştir?",
    secenek: ["Amasya", "Manisa", "Trabzon", "Kütahya", "Sivas"], dogru: 3,
    aciklama: "II. Selim, Kütahya ve Manisa sancaklarında bulunmuş, ağabeyi Şehzade Bayezid ile mücadelesini kazanarak tahta çıkmıştır." },
  { q: "1535'te hükümdarların sağlığıyla sınırlandırılan Fransız kapitülasyonları, hangi padişah döneminde (1569) yenilenerek Fransa'ya Akdeniz'de geniş ticaret ayrıcalıkları tanımaya devam etmiştir?",
    secenek: ["I. Süleyman", "II. Selim", "III. Murad", "I. Ahmed", "II. Osman"], dogru: 1,
    aciklama: "1569'da II. Selim döneminde kapitülasyonlar yenilenmiştir (Sürekli hale gelmesi ise 1740 I. Mahmud dönemidir)." },
  { q: "II. Selim ve III. Murad dönemlerinde saray şehnamecisi olarak görev yapmış, minyatürlerle Osmanlı tarihini belgeleyen sanatçı kimdir?",
    secenek: ["Aşıkpaşazade", "Nakkaş Osman", "Seyyid Lokman", "Peçevi", "Naima"], dogru: 1,
    aciklama: "Nakkaş Osman, dönemin en önemli minyatür ustasıdır; Seyyid Lokman ise şehnameci (metin yazarı) olarak görev yapmıştır." }
];

QUIZ_EK.murad3 = [
  { q: "1590 yılında Safevîler (İran) ile imzalanan; Tebriz, Karabağ, Dağıstan ve Luristan'ın Osmanlı'ya katıldığı ve Osmanlı'nın DOĞUDA EN GENİŞ SINIRLARA ulaştığı antlaşma hangisidir?",
    secenek: ["Amasya Antlaşması", "Ferhat Paşa Antlaşması", "Nasuh Paşa Antlaşması", "Serav Antlaşması", "Kasr-ı Şirin Antlaşması"], dogru: 1,
    aciklama: "Ferhat Paşa (İstanbul) Antlaşması, Osmanlı'nın doğudaki gücünün zirvesidir ve en geniş sınırlarıdır." },
  { q: "III. Murad döneminde İstanbul Tophane sırtlarında Osmanlı tarihinin İLK rasathanesini kuran, ancak dönemin şeyhülislamının fetvasıyla rasathanesi yıktırılan bilim insanı kimdir?",
    secenek: ["Ali Kuşçu", "Takyüddin Mehmed", "Piri Reis", "Katip Çelebi", "Lagari Hasan Çelebi"], dogru: 1,
    aciklama: "Takyüddin Efendi muazzam bir astronomi merkezi kurmuş; ancak dinsel muhafazakârlık ve siyasi çekişmeler yüzünden rasathane yıktırılmıştır." },
  { q: "1580 yılında III. Murad döneminde, Katolik İspanya'ya karşı Protestan güçleri destekleme stratejisi doğrultusunda İLK KEZ kapitülasyon verilen Avrupa devleti hangisidir?",
    secenek: ["Hollanda", "İngiltere", "İsveç", "Danimarka", "Rusya"], dogru: 1,
    aciklama: "Kraliçe I. Elizabeth döneminde İngiltere'ye ticari ayrıcalıklar tanınmıştır." },
  { q: "Tarihçiler genel olarak Osmanlı'da Yükselme'nin bitip Duraklama Dönemi'nin başlamasını hangi gelişmeye bağlarlar?",
    secenek: ["Kanuni'nin ölümü (1566)", "Sadrazam Sokullu Mehmed Paşa'nın suikast sonucu ölümü (1579)", "Zitvatorok Antlaşması (1606)", "II. Bucaş Antlaşması (1672)", "Haçova Zaferi (1596)"], dogru: 1,
    aciklama: "1579'da Sokullu'nun katledilmesi, devlet aklındaki devamlılığın kırılması ve Duraklama'nın başlangıcı kabul edilir." },
  { q: "1578 yılında Portekiz ile yapılan Vadisseyl (Vadiüssebil) Savaşı kazanılarak hangi ülke Osmanlı korumasına girmiş ve Osmanlı sınırları Atlas Okyanusu'na dayanmıştır?",
    secenek: ["Cezayir", "Tunus", "Fas", "Mısır", "Sudan"], dogru: 2,
    aciklama: "Vadisseyl Savaşı ile Portekiz Kralı ölmüş, Fas Osmanlı nüfuzuna girmiş ve sınır Okyanus'a ulaşmıştır." },
  { q: "III. Murad döneminde (1582) şehzadesinin sünnet düğününde eğlendiren cambaz ve hokkabazların ödül olarak Yeniçeri Ocağı'na kurallar dışında alınması neyin başlangıcı sayılır?",
    secenek: ["Tımar sisteminin güçlenmesinin", "Yeniçeri Ocağı'na “kanuna aykırı” asker alımının ve askeri bozulmanın", "Celali isyanlarının bitmesinin", "Enderun'un kaldırılmasının", "Sancak sisteminin yasallaşmasının"], dogru: 1,
    aciklama: "Bu olay “Kanun-ı Kadim”in (eski ocak kanunu) delinmesine ve ordunun kalitesinin düşmesine yol açmıştır." },
  { q: "III. Murad döneminde akçenin gümüş oranı düşürülmüş (tağşiş), düşük ayarlı akçeyle ulufe alan yeniçeriler isyan etmiştir. Bu ekonomik kriz neyin göstergesidir?",
    secenek: ["Sanayi Devrimi'nin yapıldığının", "Coğrafi Keşiflerle Avrupa'dan gelen ucuz gümüşün (enflasyon) Osmanlı ekonomisini sarsmaya başladığının", "Kapitülasyonların kaldırıldığının", "İpek Yolu'nun canlandığının", "Hazine gelirlerinin tavan yaptığının"], dogru: 1,
    aciklama: "Coğrafi Keşiflerle Avrupa'dan akan gümüş Osmanlı pazarına girmiş, enflasyon yaratmış ve devlet akçenin ayarını düşürmek zorunda kalmıştır." },
  { q: "Fatih'in başlattığı şehzadelerin sancaklarda tecrübe kazanması usulüyle sancaktan gelerek tahta oturan İLK VE SON padişah kimdir?",
    secenek: ["III. Mehmed", "III. Murad", "I. Ahmed", "IV. Murad", "II. Osman"], dogru: 0,
    aciklama: "Sancaktan gelen son padişah III. Mehmed'dir; kendisinden sonra sancak usulü kaldırılmıştır." },
  { q: "III. Murad döneminin ihtişamlı sünnet düğününü ve İstanbul hayatını resmeden, Nakkaş Osman'ın minyatürlerini içeren ünlü eser hangisidir?",
    secenek: ["Seyahatname", "Surname-i Hümayun", "Şehname-i Ali Osman", "Habname", "Fezleke"], dogru: 1,
    aciklama: "Surname-i Hümayun, III. Murad'ın şehzadesi için yaptığı 52 gün süren devasa düğünü anlatır." },
  { q: "III. Murad döneminde devlet işlerine saray kadınlarının (Nurbanu ve Safiye Sultan) ve saray ağalarının müdahalesinin artması nasıl bir gelişmeye yol açmıştır?",
    secenek: ["Liyakate dayalı atamaların bozulmasına, rüşvet ve iltimasın artmasına", "Eyaletlerde demokrasinin gelişmesine", "Islahatların hızlanmasına", "Divan-ı Hümayun'un kapatılmasına", "Sancak sisteminin kaldırılmasına"], dogru: 0,
    aciklama: "Saray entrikaları rüşveti ve kayırmacılığı (iltimas) tırmandırmıştır." }
];

QUIZ_EK.mehmed3 = [
  { q: "Uzun bir aradan sonra ordunun başında sefere çıkan ve Eğri Kalesi'ni fethettiği için “Eğri Fatihi” unvanını alan padişah kimdir?",
    secenek: ["III. Murad", "III. Mehmed", "I. Ahmed", "II. Osman", "IV. Murad"], dogru: 1,
    aciklama: "III. Mehmed, annesi Safiye Sultan'ın engelleme çabalarına rağmen ordunun başına geçmiştir." },
  { q: "Avusturya-Erdel birleşik ordusuna karşı, ordu bozulmak üzereyken saray aşçıları, seyisler ve develerin balta ve satırlarla düşmana saldırıp kazandığı, tarihteki son büyük klasik meydan savaşı hangisidir?",
    secenek: ["Mohaç Savaşı", "Haçova Meydan Savaşı", "Niğbolu Savaşı", "Varna Savaşı", "Zenta Savaşı"], dogru: 1,
    aciklama: "1596 Haçova Meydan Savaşı, hizmetlilerin müdahalesiyle kazanıldığı için tarihe sıra dışı bir zafer olarak geçmiştir." },
  { q: "Sancaktan gelen son padişah olan III. Mehmed'in sancak usulünü kaldırmasıyla getirilen ve şehzadelerin sarayda tecrübesiz yetişmesine yol açan sistem hangisidir?",
    secenek: ["Ekber ve Erşed", "Kafes Usulü", "Devşirme Sistemi", "İltizam Sistemi", "Malikâne Sistemi"], dogru: 1,
    aciklama: "III. Mehmed sancak sistemini kaldırıp Kafes Usulü'nü getirmiş; bu durum devlet tecrübesinden yoksun padişahlara yol açmıştır." },
  { q: "III. Mehmed döneminde kısıtlı imkânlarla ve zekâ taktikleriyle Kanije Kalesi'ni devasa Avusturya ordusuna karşı destansı şekilde savunan komutan kimdir?",
    secenek: ["Lala Mustafa Paşa", "Tiryaki Hasan Paşa", "Özdemiroğlu Osman Paşa", "Cezayirli Gazi Hasan Paşa", "Köprülü Fazıl Ahmed Paşa"], dogru: 1,
    aciklama: "Tiryaki Hasan Paşa, Kanije Savunması ile Osmanlı askeri tarihinin en büyük direnişlerinden birine imza atmıştır." },
  { q: "III. Mehmed tahta çıktığı gün 19 erkek kardeşini katlettirmiştir. Bu trajik olay ileride veraset sisteminde hangi değişime zemin hazırlamıştır?",
    secenek: ["Müsadere sisteminin kaldırılması", "Kardeş katli yerine Ekber ve Erşed (en yaşlı ve olgunun tahta geçmesi) sistemine geçilmesi", "Padişah yetkilerinin kısıtlanması", "Meşrutiyetin ilanı", "Sadrazamlığın kaldırılması"], dogru: 1,
    aciklama: "Kamuoyundaki tepki üzerine I. Ahmed döneminde kardeş katline son veren “Ekber ve Erşed” kuralı getirilmiştir." },
  { q: "Haçova sonrası askerlerin Anadolu'ya kaçması ve ağır vergiler sebebiyle III. Mehmed döneminde köylünün toprağını terk etmesine yol açan toplumsal olaya ne ad verilir?",
    secenek: ["Fetret Devri", "Büyük Kaçgun", "Çınar Vakası", "Edirne Vakası", "Patrona Halil İsyanı"], dogru: 1,
    aciklama: "Anadolu köylüsünün toprağını bırakıp güvenli şehirlere kaçması olayına tarihte “Büyük Kaçgun” denir." },
  { q: "Urfa civarında kendi adına hutbe okutup hükümdarlık ilan etme noktasına gelen, III. Mehmed döneminin ilk büyük kitlesel Celali lideri kimdir?",
    secenek: ["Kalenderoğlu", "Karayazıcı", "Canbolatoğlu", "Abaza Hasan", "Katırcıoğlu"], dogru: 1,
    aciklama: "Karayazıcı isyanı, III. Mehmed döneminde devleti içten en çok sarsan Celali ayaklanmasıdır." },
  { q: "III. Mehmed döneminde Batı'da Avusturya ile uzun savaşlar (1593-1606) sürerken bundan yararlanan İran Şahı I. Abbas taarruza geçerek nereleri geri almıştır?",
    secenek: ["Mısır ve Suriye", "Tebriz, Erivan ve Azerbaycan", "Bağdat ve Basra", "Kırım ve Otranto", "Mora ve Belgrad"], dogru: 1,
    aciklama: "İki cepheli savaş Osmanlı'yı zora sokmuş, Şah Abbas Ferhat Paşa ile kaybettiği yerleri geri almıştır." },
  { q: "III. Mehmed, halk ve ordu tarafından sevilen, yetenekli oğlu Şehzade Mahmud'u annesi Safiye Sultan'ın etkisiyle boğdurmuştur. Bu durum sarayda neyin göstergesidir?",
    secenek: ["Taht kavgalarının bittiğinin", "Paranoya ve saray entrikalarının yetenekli şehzadeleri yok ettiğinin", "Veraset kanununun oturduğunun", "Celali isyanlarının bittiğinin", "Yeniçerilerin yatıştığının"], dogru: 1,
    aciklama: "Şehzade Mahmud'un idamı, tecrübeli ve cesur şehzadelerin saray komplolarına kurban gittiğinin acı bir örneğidir." },
  { q: "III. Mehmed döneminde Kanije'nin fethindeki katkıları nedeniyle “Kanije Fatihi” olarak anılan sadrazam/komutan kimdir?",
    secenek: ["Damat İbrahim Paşa", "Sokullu Mehmed Paşa", "Kuyucu Murad Paşa", "Lala Mehmed Paşa", "Tiryaki Hasan Paşa"], dogru: 0,
    aciklama: "Damat İbrahim Paşa, Kanije'nin alınmasındaki katkıları nedeniyle “Kanije Fatihi” olarak anılır." }
];

QUIZ_EK.ahmed1 = [
  { q: "Taht kavgalarını önlemek amacıyla “Hanedanın en yaşlı ve en olgun erkek üyesinin (Ekber ve Erşed) tahta çıkması” kuralını getiren padişah kimdir?",
    secenek: ["II. Mehmed", "I. Ahmed", "II. Osman", "IV. Murad", "III. Mehmed"], dogru: 1,
    aciklama: "I. Ahmed veraset sistemini kurallaştırarak belirsizliği bitirmiş, “baba-oğul” geçişi yerine “hanedan kuralını” getirmiştir." },
  { q: "1606 Zitvatorok Antlaşması ile Avusturya Arşidükü protokolde Osmanlı Padişahına denk sayılmış ve Avusturya'nın ödediği yıllık vergi kaldırılmıştır. Bu durumun en önemli sonucu nedir?",
    secenek: ["Avusturya'nın Osmanlı'ya bağlandığı", "1533 İstanbul Antlaşması ile elde edilen diplomatik/protokol üstünlüğünün KAYBEDİLDİĞİ", "Haçlı Seferleri'nin başladığı", "Avusturya'nın yıkıldığı", "Akdeniz ticaretinin bittiği"], dogru: 1,
    aciklama: "Zitvatorok ile Osmanlı, Avusturya üzerindeki eşitlik (mütekabiliyet) ilkesini kabul etmiş, dış siyasetteki ezici üstünlüğünü kaybetmiştir." },
  { q: "Sancak usulünün kaldırılmasından sonra Kafes Usulü ile yetişerek sancağa gitmeden tahta çıkan İLK Osmanlı padişahı kimdir?",
    secenek: ["III. Mehmed", "I. Ahmed", "II. Osman", "I. Mustafa", "IV. Murad"], dogru: 1,
    aciklama: "I. Ahmed, babası III. Mehmed sancağı kaldırdığı için doğrudan saraydan tahta oturan ilk padişahtır." },
  { q: "I. Ahmed döneminde Anadolu'daki Celali isyanlarını isyancıları kuyulara doldurarak sert biçimde bastıran ve otoriteyi sağlayan sadrazam kimdir?",
    secenek: ["Sokullu Mehmed Paşa", "Kuyucu Murad Paşa", "Tarhuncu Ahmed Paşa", "Köprülü Mehmed Paşa", "Merzifonlu Kara Mustafa Paşa"], dogru: 1,
    aciklama: "Kuyucu Murad Paşa, Celali isyanlarını kökten ve acımasızca bastırmasıyla tanınır." },
  { q: "I. Ahmed tarafından Mimar Sedefkâr Mehmed Ağa'ya yaptırılan, çinilerinden dolayı Avrupalıların “Mavi Cami” dediği ve Osmanlı'nın İLK 6 minareli camisi hangisidir?",
    secenek: ["Süleymaniye Camii", "Sultanahmet Camii", "Şehzade Camii", "Fatih Camii", "Laleli Camii"], dogru: 1,
    aciklama: "Sultanahmet Camii, Sedefkâr Mehmed Ağa'nın şaheseridir ve 6 minaresiyle dönemin tek örneğidir." },
  { q: "I. Ahmed döneminde Safevîlerle imzalanan ve Ferhat Paşa ile alınan yerlerin geri verildiği Nasuh Paşa Antlaşması'nın önemi nedir?",
    secenek: ["Doğuda ilk kez toprak kazanılmasıdır", "Doğuda en geniş sınırlara ulaşılmasıdır", "Şiiliğin resmen tanınmasıdır", "Halifeliğin İran'a geçmesidir", "Osmanlı'nın doğuda ilk kez toprak kaybettiği antlaşma olmasıdır"], dogru: 4,
    aciklama: "Nasuh Paşa Antlaşması, Osmanlı'nın doğuda ilk kez toprak kaybettiği antlaşmadır." },
  { q: "1612 yılında I. Ahmed döneminde, Protestan dünyasını yanına çekmek ve Akdeniz ticaretini canlandırmak amacıyla kapitülasyon verilen denizci Avrupa devleti hangisidir?",
    secenek: ["İngiltere", "Hollanda (Birleşik İller)", "Fransa", "Venedik", "Portekiz"], dogru: 1,
    aciklama: "1612'de Hollanda'ya ticari imtiyazlar verilerek ticaret teşvik edilmiştir." },
  { q: "I. Ahmed öldükten sonra “Ekber ve Erşed” kuralı gereği tahta oğlu değil, aklî dengesi yerinde olmayan kardeşi I. Mustafa çıkmıştır. Bu durum neyin sonucudur?",
    secenek: ["Veraset kanununun kaldırılmasının", "Ekber ve Erşed sisteminin otomatik işlemesinin ve kafes usulünün akıl sağlığını bozmasının", "Yeniçerilerin padişahı seçmesinin", "Meşrutiyete geçilmesinin", "Fransız İhtilali'nin"], dogru: 1,
    aciklama: "Ekber ve Erşed kuralı, kafeste yetişip akıl sağlığı bozulmuş bir şehzadeyi bile otomatik olarak tahta geçirmiştir." },
  { q: "Dindarlığıyla bilinen I. Ahmed'in Mekke ve Medine'ye yönelik dikkat çeken dini adımı aşağıdakilerden hangisidir?",
    secenek: ["Kâbe'nin altın oluklarının ve örtülerinin İstanbul'da yapılıp gönderilmesi", "Medreselerin kapatılması", "Caferiliğin resmi mezhep yapılması", "Devşirme sisteminin yasaklanması", "Matbaanın getirilmesi"], dogru: 0,
    aciklama: "I. Ahmed dindar kişiliğiyle bilinir; Mekke ve Medine'ye büyük hizmetlerde bulunmuş, Kâbe'nin örtülerini yenilemiştir." },
  { q: "I. Ahmed döneminde Lübnan'da Dürzi emiri Fahreddin Maanoğlu ve Halep'te Canbolatoğlu'nun çıkardığı isyanların ortak niteliği nedir?",
    secenek: ["Rejim değiştirmek istemeleri", "Otoritenin zayıflamasından yararlanıp bulundukları bölgede özerk/bağımsız güç olmaya çalışmaları", "Komünizm yaymak istemeleri", "Milliyetçilik fikrini savunmaları", "Şeyhülislam istemeleri"], dogru: 1,
    aciklama: "17. yüzyıl eyalet isyanları henüz milliyetçi değildir; tamamen merkezi otoritesizlikten kaynaklı güç odaklarıdır." }
];

QUIZ_EK.osman2 = [
  { q: "Bozulan kurumları (Yeniçeri Ocağı, Saray, İlmiye) fark ederek İLK radikal ıslahat planını hazırlayan, ancak fikirleri sebebiyle Yeniçeriler tarafından katledilen padişah kimdir?",
    secenek: ["I. Ahmed", "II. Osman (Genç Osman)", "IV. Murad", "III. Selim", "III. Ahmed"], dogru: 1,
    aciklama: "Genç Osman, Osmanlı tarihinin ilk devrimci/ıslahatçı padişahıdır; fakat tecrübesizliği ve erken hamleleri canına mal olmuştur." },
  { q: "1621 Hotin Seferi sırasında yeniçerilerin isteksizliğini ve gayretsizliğini gören Genç Osman ilk kez hangi köklü kararı almıştır?",
    secenek: ["Tımar sistemini kaldırmak", "Yeniçeri Ocağı'nı kaldırıp Anadolu/Suriye Türklerinden yeni bir ordu kurmak", "Başkenti Edirne'ye taşımak", "Sadrazamlığı feshetmek", "Şiiliği resmen tanımak"], dogru: 1,
    aciklama: "Hotin Kuşatması'nda disiplinsizlik gören Genç Osman, bozulmuş ocak yerine milli bir ordu kurmayı kafasına koymuştur." },
  { q: "Genç Osman'ın saray dışından, ulema ve devlet adamlarının kızlarıyla evlenmesindeki temel amaç nedir?",
    secenek: ["Fransız kültürünü saraya sokmak", "Batı yaşam tarzını benimsemek", "Saray kadınlarının/ağalarının siyasetteki hegemonyasını kırmak", "Şiiliği kabul etmek", "Harem mektebini kapatmak"], dogru: 2,
    aciklama: "Genç Osman, kapalı saray geleneklerini yıkmak ve saray bürokrasisinin gücünü kırmak istemiştir." },
  { q: "Genç Osman, fetva makamını sadece dini işlerle sınırlandırmak için Şeyhülislamın hangi yetkisini elinden almıştır?",
    secenek: ["Nikâh kıyma yetkisini", "Devlet adamlarını atama ve azletme (siyasi) yetkisini", "Cuma hutbesi okuma yetkisini", "Medrese açma yetkisini", "Hazineyi denetleme yetkisini"], dogru: 1,
    aciklama: "Şeyhülislamın siyasi güç olmasını engellemek için atama ve azil yetkilerini kısıtlamıştır." },
  { q: "Genç Osman'ın devlet merkezini İstanbul'dan çıkarıp Anadolu'ya (Ankara/Bursa) taşıma fikri neyin göstergesidir?",
    secenek: ["İstanbul'un fethini reddettiğinin", "Anadolu'daki güvenli ve Türk nüfusa dayalı yeni bir merkezle devleti yeniden yapılandırmak istediğinin", "Batı'ya teslim olduğunun", "Bizans'ı ihya etmek istediğinin", "Donanmayı feshetmek istediğinin"], dogru: 1,
    aciklama: "Genç Osman, yozlaşmış İstanbul bürokrasisi yerine Anadolu'da temiz bir idare kurmayı hedeflemiştir." },
  { q: "Genç Osman'ın “Hacca gideceğim” diyerek İstanbul'dan ayrılmak istemesi büyük isyanı patlatmıştır. Yeniçeriler isyan ederken kimi tahta çıkarmıştır?",
    secenek: ["IV. Murad", "I. Mustafa (ikinci kez)", "I. İbrahim", "IV. Mehmed", "II. Süleyman"], dogru: 1,
    aciklama: "Yeniçeriler Genç Osman'ı tahttan indirip aklî dengesi bozuk olan I. Mustafa'yı ikinci kez tahta çıkarmışlardır." },
  { q: "Genç Osman'ın Türkçeye önem vermesi ve saray dilini sadeleştirme çabası kişiliği hakkında ne gösterir?",
    secenek: ["Eğitimsiz olduğunu", "Yüksek bir edebi kültüre ve yenilikçi bir vizyona sahip olduğunu", "Batı hayranı olduğunu", "Fransızca öğrendiğini", "Yabancı elçilere biat ettiğini"], dogru: 1,
    aciklama: "Genç Osman mükemmel bir doğu ve batı eğitimi almış, hırslı ve vizyoner bir padişahtı." },
  { q: "Genç Osman'ın Yedikule Zindanı'nda boğularak öldürülmesi Osmanlı tarihinde İLK kez hangi olaya sebep olmuştur?",
    secenek: ["İlk kez bir sadrazamın öldürülmesine", "İlk kez bir Osmanlı padişahının Yeniçeriler tarafından isyan sonucu katledilmesine", "İlk kez Yeniçeri Ocağı'nın kapatılmasına", "İlk kez hanedanın değişmesine", "İlk kez başkentin taşınmasına"], dogru: 1,
    aciklama: "Genç Osman'ın katli, Yeniçerilerin padişah üzerindeki baskısının kanlı bir cinayete dönüştüğü kara bir lekedir." },
  { q: "Genç Osman'ın katli üzerine Erzurum Beylerbeyi Abaza Mehmed Paşa'nın “Genç Osman'ın kanını dava ederek” çıkardığı isyan hangi türdendir?",
    secenek: ["Eyalet/Celali nitelikli, merkezi yönetime ve Yeniçeri despotizmine tepki isyanı", "Şii propagandası isyanı", "Fransız kışkırtması isyanı", "Azınlık isyanı", "Komünist isyan"], dogru: 0,
    aciklama: "Abaza Mehmed Paşa, Genç Osman'ın öcünü almak bahanesiyle Anadolu'da Yeniçeri avı başlatmıştır." },
  { q: "Genç Osman'ın ıslahatlarının başarısız olmasının ve hayatına mal olmasının EN TEMEL nedeni nedir?",
    secenek: ["Parasının olmaması", "Örgütlü bir siyasi/askeri destek olmadan, tecrübesizce ve planlarını rakiplerine açık ederek radikal hamleler yapması", "Fransızca bilmemesi", "Dış devletlerin işgal etmesi", "Hazineyi boşaltması"], dogru: 1,
    aciklama: "Genç Osman planlarını gizleyememiş; arkasında örgütlü bir güç yokken mevcut orduya ve ulemaya aynı anda savaş açmıştır." }
];

/* ——— 1. GRUP: KURULUŞ DÖNEMİ İLK 5 PADİŞAH (sayfa 47-57) ——— */
QUIZ_EK.osman1 = [
  { q: "Aşağıdakilerden hangisi Osman Bey Dönemi'nde kurumsallaşmanın henüz başlangıç aşamasında olduğuna ve askeri yapının düzenli olmadığına en güçlü kanıttır?",
    secenek: ["Ahi teşkilatının desteğinin alınması", "Düzenli ordu yerine aşiret kuvvetlerinin savaşa katılması", "İlk Osmanlı parasının (Bakır akçe) bastırılması", "Koyunhisar Savaşı'nın kazanılması", "Karacahisar'ın fethedilerek ilk kadının tayin edilmesi"], dogru: 1,
    aciklama: "Osman Bey döneminde henüz yaya ve müsellem adında düzenli bir ordu yoktur; savaşlar aşiret kuvvetleri, gaziler ve süvarilerle yürütülmüştür." },
  { q: "1302 yılında Bizans tekfurları ile yapılan ve Osmanlı'nın Bizans'a karşı kazandığı ilk organize askeri zafer kabul edilen savaş hangisidir?",
    secenek: ["Maltepe (Pelekanon) Savaşı", "Koyunhisar (Bapheus) Savaşı", "Sırpsındığı Savaşı", "I. Kosova Savaşı", "Sazlıdere Savaşı"], dogru: 1,
    aciklama: "Halil İnalcık'a göre Osmanlı'nın gerçek anlamda devlet kimliği kazandığı 1302 Koyunhisar (Bapheus) Savaşı, Bizans ile yapılan ilk savaştır." },
  { q: "Osman Bey'in Şeyh Edebali'nin kızı ile evlenmesi ve Ahilerin desteğini almasının Osmanlı'ya sağladığı öncelikli fayda nedir?",
    secenek: ["Bizans ile diplomatik ilişki kurulması", "Anadolu'da Türk siyasi birliğinin tamamen sağlanması", "Fethedilen bölgelerde toplumsal ve sosyal meşruiyetin güçlenmesi", "Düzenli ve sürekli bir ordunun kurulması", "İpek Yolu denetiminin ele geçirilmesi"], dogru: 2,
    aciklama: "Ahiler hem esnaf teşkilatı hem sosyal/dini güçtü; destekleri fetihlerin kalıcı olmasını ve halkın yeni yönetimi benimsemesini sağladı." },
  { q: "Osman Bey Dönemi'nde Karacahisar'ın fethinden sonra Dursun Fakih'in ilk kadı olarak atanması ve ilk hutbenin okunması neyin doğrudan göstergesidir?",
    secenek: ["Saltanat sistemine geçildiğinin", "Osmanlı Beyliği'nin bağımsızlığını ilan ettiğinin", "İskân politikasının tamamlandığının", "Teokratik yapının kaldırıldığının", "Cizye vergisinin ilk kez toplandığının"], dogru: 1,
    aciklama: "İslam-Türk geleneğinde kendi adına hutbe okutmak ve kadı atamak bağımsızlık (egemenlik) sembolüdür." },
  { q: "Osmanlı'da basılan ilk para (Mangır/Bakır Akçe) Osman Bey Dönemi'ne aittir. İlk para basılması hangi alanda bağımsızlığın simgesidir?",
    secenek: ["Askeri", "Hukuki", "İdari", "İktisadi (Ekonomik)", "Dini"], dogru: 3,
    aciklama: "Kendi adına madeni para bastırmak (sikke kestirmek) siyasi ve iktisadi bağımsızlığın en temel göstergesidir." },
  { q: "Osman Bey Dönemi'nde pazarlardan ve pazarcılardan alınan Osmanlı tarihinin ilk vergisi hangisidir?",
    secenek: ["Haraç", "Cizye", "Bac (Bac-ı Pazar)", "Öşür", "Ağnam"], dogru: 2,
    aciklama: "Bac (Bac-ı Pazar) vergisi Osmanlı'da alınan ilk pazar/ticaret vergisidir." },
  { q: "Osman Bey'in Bizans sınırında (uç beyliği) olması ve sürekli Bizans tekfurları üzerine sefer düzenlemesi hangi kavramla açıklanır?",
    secenek: ["İstimalet Politikası", "Gaza ve Cihat Anlayışı", "Dikey Hareketlilik", "Veraset Sistemi", "Müdara Politikası"], dogru: 1,
    aciklama: "Gayrimüslim devletlere (Bizans) karşı din uğruna yapılan fetih hareketlerine “Gaza ve Cihat” denir." },
  { q: "Osman Bey Dönemi'nde uygulanan veraset (miras) anlayışı aşağıdakilerden hangisidir?",
    secenek: ["Ülke, hükümdar ve ailesinin ortak malıdır", "Ülke, hükümdar ve oğullarının malıdır", "Ülke, sadece Ekber ve Erşed üyenindir", "Ülke, sadece padişahın şahsi mülküdür", "Ülke, halkın seçtiği meclisindir"], dogru: 0,
    aciklama: "Geleneksel Türk veraset anlayışı “Ülke hanedan üyelerinin ortak malıdır” ilkesi Osman Bey döneminde de sürmüştür (bu, taht kavgalarına yol açıyordu)." },
  { q: "Osman Bey'in uzun süre abluka altında tuttuğu ancak fethini göremediği, oğlu Orhan Bey döneminde alınıp başkent yapılan stratejik şehir hangisidir?",
    secenek: ["İznik", "İzmit", "Bursa", "Edirne", "Karesi"], dogru: 2,
    aciklama: "Bursa, Osman Bey döneminde kuşatılmış; fethi 1326'da Orhan Bey'e nasip olmuştur." },
  { q: "Osman Bey'in fethettiği toprakları komutanlarına “dirlik” olarak dağıtmasının temel amacı nedir?",
    secenek: ["Hazine gelirlerini nakit toplamak", "Bölgenin güvenliğini sağlamak ve komutanları fetihlere teşvik etmek", "Sadrazamlık makamını güçlendirmek", "Yeniçeri Ocağı'na kaynak sağlamak", "Merkezi otoriteyi tek elde toplamak"], dogru: 1,
    aciklama: "Toprağın dirlik olarak komutanlara verilmesi fetih hırsını artırmış ve sınır güvenliğini pekiştirmiştir." }
];

QUIZ_EK.orhan = [
  { q: "Osmanlı'ya “Beylikten Devlete Geçiş”in asıl mimarı kabul edilen; ilk divan teşkilatını, ilk düzenli orduyu ve ilk medreseyi kuran padişah kimdir?",
    secenek: ["Osman Bey", "Orhan Bey", "I. Murad", "II. Mehmed", "I. Bayezid"], dogru: 1,
    aciklama: "Orhan Bey; Divan, Yaya-Müsellem ordusu ve İznik Medresesi gibi hamlelerle Osmanlı'yı gerçek manada bir devlet yapmıştır." },
  { q: "1329 yılında Bizans İmparatoru III. Andronikos ile yapılan ve İznik-İzmit'in fethine zemin hazırlayan savaş hangisidir?",
    secenek: ["Maltepe (Pelekanon) Savaşı", "Koyunhisar Savaşı", "Çirmen Savaşı", "Varna Savaşı", "Niğbolu Savaşı"], dogru: 0,
    aciklama: "Maltepe (Pelekanon) Savaşı ile Bizans mağlup edilmiş ve Anadolu ile kara bağlantısı kesilmiştir." },
  { q: "Osmanlı'ya katılan İLK Türk beyliği hangisidir ve en büyük katkısı nedir?",
    secenek: ["Germiyanoğulları - İpek Yolu'nun kazanılması", "Hamitoğulları - Para karşılığı şehir alınması", "Karesioğulları - Denizciliğin başlaması ve Rumeli'ye geçişin kolaylaşması", "Çandaroğulları - Karadeniz ticaretinin ele geçmesi", "Karamanoğulları - Konya'nın denetim altına alınması"], dogru: 2,
    aciklama: "Karesioğulları'nın alınmasıyla Osmanlı ilk kez denizcilikle tanışmış; Hacı İlbey, Evrenos Bey gibi komutanlar Osmanlı hizmetine girmiştir." },
  { q: "Bizans taht kavgalarında Kantakuzen'e yardım karşılığında Osmanlı'ya verilen ve Rumeli'deki İLK askeri üssü olan kale hangisidir?",
    secenek: ["Kilitbahir Kalesi", "Çimpe Kalesi", "Belgrad Kalesi", "Güvercinlik Kalesi", "Babaeski Kalesi"], dogru: 1,
    aciklama: "Gelibolu'daki Çimpe Kalesi (1353), Rumeli fetihlerinin sıçrama tahtası ve ilk üssüdür." },
  { q: "Aşiret kuvvetlerinin yetersiz kalması üzerine Orhan Bey Dönemi'nde kurulan Osmanlı tarihinin İLK düzenli ve aylıklı ordusu hangisidir?",
    secenek: ["Kapıkulu Ocağı", "Yaya ve Müsellem", "Tımarlı Sipahiler", "Akıncılar", "Nizam-ı Cedit"], dogru: 1,
    aciklama: "Yaya (piyade) ve Müsellem (süvari), Orhan Bey ve veziri Alaeddin Paşa tarafından kurulan ilk düzenli ordudur." },
  { q: "Osmanlı'nın ilk medresesi olan İznik Orhaniyesi'ne (Süleyman Paşa Medresesi) atanan ilk Osmanlı müderrisi kimdir?",
    secenek: ["Dursun Fakih", "Molla Fenari", "Davud-ı Kayseri", "Kadızade-i Rumi", "Akşemseddin"], dogru: 2,
    aciklama: "Davud-ı Kayseri, İznik Medresesi'ne atanan ilk müderristir." },
  { q: "Gümüş akçe kullanımına geçilmesi ve ilk defa Saray'ın (Bursa Sarayı) inşa edilmesi hangi padişah dönemine aittir?",
    secenek: ["Osman Bey", "Orhan Bey", "I. Murad", "Çelebi Mehmed", "II. Murad"], dogru: 1,
    aciklama: "İlk gümüş para ve ilk devlet sarayı Orhan Bey döneminde Bursa'da yapılmıştır." },
  { q: "Divan-ı Hümayun'un kurulması ve hükümdara yardım için atanan İLK Osmanlı Veziri kimdir?",
    secenek: ["Çandarlı Halil Paşa", "Alaeddin Paşa", "Sokullu Mehmed Paşa", "Köprülü Mehmed Paşa", "Gazi Süleyman Paşa"], dogru: 1,
    aciklama: "Orhan Bey'in kardeşi Alaeddin Paşa ilk Osmanlı veziridir." },
  { q: "İbn Battuta'nın seyahatnamesinde “Türk hükümdarlarının en büyüğü” diyerek övdüğü ve “Sultanü'l-Guzât” (Gazilerin Sultanı) unvanını kullanan padişah kimdir?",
    secenek: ["Osman Bey", "Orhan Bey", "I. Bayezid", "Fatih Sultan Mehmed", "Kanuni Sultan Süleyman"], dogru: 1,
    aciklama: "İbn Battuta, Bursa'da ziyaret ettiği Orhan Bey için bu ifadeyi kullanmıştır." },
  { q: "Rumeli'de fethedilen topraklara Anadolu'dan getirilen konar-göçer Türkmenlerin yerleştirilmesi (İskân Siyaseti) ilk kez hangi padişah döneminde başlamıştır?",
    secenek: ["Osman Bey", "Orhan Bey", "I. Murad", "I. Mehmed", "II. Mehmed"], dogru: 1,
    aciklama: "Çimpe Kalesi'nin alınması ve Gelibolu/Trakya fetihleriyle Orhan Bey ve oğlu Süleyman Paşa iskânı başlatmıştır." }
];

QUIZ_EK.murad1 = [
  { q: "I. Murad'ın “Ülke hükümdar ve ailesinin ortak malıdır” anlayışını “Ülke hükümdar ve oğullarının malıdır” şeklinde değiştirmesindeki temel amaç nedir?",
    secenek: ["Halifeliği ele geçirmek", "Taht kavgalarını azaltmak ve merkezi otoriteyi güçlendirmek", "Feodal beylikleri tamamen ortadan kaldırmak", "Devşirme sistemini bitirmek", "Eyalet sayısını azaltmak"], dogru: 1,
    aciklama: "Veraset alanı daraltılarak hanedanın diğer üyelerinin (amca, yeğen) tahta hak iddia etmesi engellenmiş, merkezi otorite pekiştirilmiştir." },
  { q: "1364'te Papa'nın teşvikiyle oluşan Sırp-Bulgar-Macar ittifakına karşı kazanılan ve Osmanlı'nın Haçlılara karşı İLK zaferi kabul edilen savaş hangisidir?",
    secenek: ["Çirmen Savaşı", "Sırpsındığı Savaşı", "I. Kosova Savaşı", "Niğbolu Savaşı", "Varna Savaşı"], dogru: 1,
    aciklama: "Hacı İlbey'in ani baskınıyla kazanılan Sırpsındığı Savaşı, Haçlılara karşı yapılan ilk savaştır." },
  { q: "Hristiyan çocukların devlet hizmetine alınması esasına dayanan Devşirme Sistemi ile savaş esirlerinin 1/5'inin orduya alınmasını sağlayan Pençik Sistemi hangi padişah döneminde kurulmuştur?",
    secenek: ["Orhan Bey", "I. Murad", "I. Bayezid", "II. Murad", "II. Mehmed"], dogru: 1,
    aciklama: "Çandarlı Kara Halil Paşa'nın tavsiyesiyle I. Murad döneminde Pençik sistemi ve Kapıkulu (Yeniçeri) Ocağı kurulmuştur." },
  { q: "Toprak ekonomisini sistemleştirerek Tımarlı Sipahiler yetiştirilmesini sağlayan ve Tımar Teşkilatı'nı sistemli bir devlet politikası haline getiren padişah kimdir?",
    secenek: ["Osman Bey", "I. Murad", "I. Bayezid", "I. Selim", "I. Süleyman"], dogru: 1,
    aciklama: "Tımar sistemi Osmanlı devlet yapısına I. Murad döneminde tam anlamıyla oturtulmuştur." },
  { q: "Balkanlar'daki fetihlerin yönetimini kolaylaştırmak için kurulan Rumeli Beylerbeyliği'nin ilk beylerbeyi kimdir?",
    secenek: ["Lala Şahin Paşa", "Çandarlı Kara Halil Paşa", "Evrenos Bey", "Gazi Süleyman Paşa", "Zağanos Paşa"], dogru: 0,
    aciklama: "I. Murad, Rumeli Beylerbeyliği'ni kurup başına hocası Lala Şahin Paşa'yı getirmiştir (Merkez: Manastır)." },
  { q: "1389 I. Kosova Savaşı sonrası savaş meydanını gezerken Miloş Obiliç adlı yaralı bir Sırp tarafından şehit edilen ilk ve tek Osmanlı padişahı kimdir?",
    secenek: ["Orhan Bey", "I. Murad", "I. Bayezid", "II. Murad", "I. Mehmed"], dogru: 1,
    aciklama: "I. Murad, I. Kosova Zaferi'nden hemen sonra savaş alanında şehit olmuştur." },
  { q: "I. Murad Dönemi'nde Germiyanoğulları'ndan çeyiz, Hamitoğulları'ndan para karşılığı toprak kazanılması aşağıdakilerden hangisini kanıtlar?",
    secenek: ["Anadolu Türk siyasi birliğinin barışçıl yöntemlerle de sağlandığını", "Bizans ile ittifak yapıldığını", "İskân politikasının durdurulduğunu", "Taht kavgalarının bittiğini", "Devletin ekonomisinin dış borçlara dayandığını"], dogru: 0,
    aciklama: "I. Murad, gaza enerjisini Rumeli'ye saklamak için Anadolu'da barışçıl yollarla toprak genişletmiştir." },
  { q: "Osmanlı'da adalet ve eğitim işlerinden sorumlu, divan üyesi Kazaskerlik (Kadıaskerlik) makamı ilk kez hangi padişah döneminde kurulmuştur?",
    secenek: ["Orhan Bey", "I. Murad", "II. Mehmed", "I. Selim", "III. Murad"], dogru: 1,
    aciklama: "Kazaskerlik ve Vezirazamlık makamları I. Murad döneminde teşkilatlanmıştır; ilk Kazasker Çandarlı Kara Halil Paşa'dır." },
  { q: "Osmanlı ordusu, sesiyle düşmanı korkutmak amacıyla ilk kez hangi savaşta top kullanmıştır?",
    secenek: ["Sırpsındığı Savaşı", "Maltepe Savaşı", "I. Kosova Savaşı", "Niğbolu Savaşı", "Varna Savaşı"], dogru: 2,
    aciklama: "1389 I. Kosova Savaşı'nda Osmanlı ordusu ilk kez (gürültü çıkarıp düşman atlarını ürkütmek amacıyla) top kullanmıştır." },
  { q: "İlk kez Defterdarlık makamı kurularak Osmanlı maliyesinin ve hazinesinin teşkilatlandırılması hangi padişah döneminde gerçekleşmiştir?",
    secenek: ["Osman Bey", "Orhan Bey", "I. Murad", "I. Bayezid", "II. Murad"], dogru: 2,
    aciklama: "Sınırların genişlemesiyle Defterdarlık (maliye teşkilatı) I. Murad döneminde kurulmuştur." }
];

QUIZ_EK.bayezid1 = [
  { q: "İstanbul'u ilk kez kuşatan Yıldırım Bayezid'in, Boğaz'dan gelen yardımları kesmek için Anadolu yakasına yaptırdığı hisar hangisidir?",
    secenek: ["Rumeli Hisarı (Boğazkesen)", "Anadolu Hisarı (Güzelcehisar)", "Yedikule Zindanları", "Kale-i Sultaniye", "Seddülbahir Kalesi"], dogru: 1,
    aciklama: "Yıldırım Bayezid Boğaz geçişini kontrol için Anadolu Hisarı'nı (Güzelcehisar) yaptırmıştır (Rumeli Hisarı'nı Fatih yaptırmıştır)." },
  { q: "1396 Niğbolu Savaşı'nda büyük bir Haçlı ordusunu yenen Yıldırım Bayezid'e Abbasi Halifesi tarafından verilen prestijli unvan hangisidir?",
    secenek: ["Hâdimü'l-Haremeyn", "Sultan-ı İklim-i Rûm", "Sultanü'l-Guzât", "Hüdavendigâr", "Şahinşah"], dogru: 1,
    aciklama: "Niğbolu Zaferi sonrası Abbasi Halifesi, Yıldırım'a Sultan-ı İklim-i Rûm unvanını vermiş; bu, Osmanlı'nın İslam dünyasındaki saygınlığını zirveye taşımıştır." },
  { q: "Anadolu beyliklerinin çoğuna son vererek Anadolu Türk Siyasi Birliği'ni geniş çapta İLK KEZ sağlayan Osmanlı padişahı kimdir?",
    secenek: ["Orhan Bey", "I. Murad", "I. Bayezid (Yıldırım)", "I. Mehmed", "II. Mehmed"], dogru: 2,
    aciklama: "Yıldırım Bayezid radikal bir siyasetle Anadolu beyliklerinin çoğunu ilhak ederek ATSB'yi geniş ölçüde ilk kez sağlamıştır." },
  { q: "Kütahya merkezli Anadolu Beylerbeyliği'ni kuran padişah ve ilk beylerbeyi hangisinde doğru verilmiştir?",
    secenek: ["I. Murad - Lala Şahin Paşa", "I. Bayezid - Kara Timurtaş Paşa", "II. Mehmed - Zağanos Paşa", "Orhan Bey - Süleyman Paşa", "I. Mehmed - Bayezid Paşa"], dogru: 1,
    aciklama: "I. Bayezid, Anadolu Beylerbeyliği'ni kurmuş ve ilk beylerbeyi olarak Kara Timurtaş Paşa'yı atamıştır." },
  { q: "1402 Ankara Savaşı'nda Timur'a yenilen Yıldırım Bayezid esir düşmüştür. Aşağıdakilerden hangisi bu savaşın sonuçlarından biri DEĞİLDİR?",
    secenek: ["Fetret Devri'nin (1402-1413) başlaması", "Anadolu Türk Siyasi Birliği'nin bozulması", "İstanbul'un fethinin yaklaşık yarım asır gecikmesi", "Balkanlar'daki tüm Türk varlığının sona ermesi ve Osmanlı'nın Avrupa'dan atılması", "Bizans'ın ömrünün uzaması"], dogru: 3,
    aciklama: "Osmanlı, uyguladığı istimalet ve iskân politikası sayesinde Ankara Savaşı'ndan sonra Balkanlar'da büyük bir toprak kaybı yaşamamıştır." },
  { q: "Yıldırım Bayezid'e “Yıldırım” unvanı, hangi olaydaki süratli ve kararlı hareket kabiliyetinden dolayı verilmiştir?",
    secenek: ["Niğbolu Savaşı", "Frenkyazısı (Karamanoğulları) Savaşı", "Ankara Savaşı", "İstanbul Kuşatması", "Sırpsındığı Savaşı"], dogru: 1,
    aciklama: "Karamanoğulları üzerine yapılan Frenkyazısı Savaşı'nda çok hızlı hareket ettiği için “Yıldırım” unvanı verilmiştir." },
  { q: "Bursa Ulu Cami'yi ve Osmanlı'nın ilk kapsamlı sağlık kompleksi sayılan Bursa Darüşşifası'nı yaptıran padişah kimdir?",
    secenek: ["Orhan Bey", "I. Murad", "I. Bayezid", "I. Mehmed", "II. Murad"], dogru: 2,
    aciklama: "Bursa Ulu Cami ve Darüşşifa, Yıldırım Bayezid döneminin en önemli mimari eserlerindendir." },
  { q: "Niğbolu ganimet ve esirleriyle Kapıkulu Ocağı'nın genişletilmesi ve cülus bahşişi geleneğinin izlerinin görülmeye başlandığı dönem hangisidir?",
    secenek: ["Orhan Bey", "I. Bayezid", "II. Mehmed", "I. Selim", "II. Murad"], dogru: 1,
    aciklama: "Yıldırım Bayezid ordusunu büyütmüş ve askerlerine bol bahşişler dağıtmıştır." },
  { q: "Yıldırım Bayezid'in İstanbul kuşatmasını kaldırmak zorunda kalmasının nedeni hangisidir?",
    secenek: ["Şeyh Bedrettin İsyanı", "Timur'un Anadolu'ya girmesi (Doğu Tehlikesi)", "Düzmece Mustafa İsyanı", "Varna Savaşı", "Şahkulu İsyanı"], dogru: 1,
    aciklama: "Timur'un Sivas'ı işgal edip Anadolu'ya ilerlemesi üzerine Yıldırım İstanbul kuşatmasını kaldırmıştır." },
  { q: "Kadıların rüşvet almasını engellemek için onları maaşa bağlayan ve adalet mekanizmasını denetleyen padişah kimdir?",
    secenek: ["I. Bayezid", "II. Murad", "II. Mehmed", "I. Süleyman", "I. Ahmed"], dogru: 0,
    aciklama: "Yıldırım Bayezid, kadıların yolsuzluklarını sert önlemlerle cezalandırmış ve onları merkeze bağlamıştır." }
];

QUIZ_EK.mehmed1 = [
  { q: "11 yıl süren Fetret Devri'ne (1402-1413) kardeşlerini mağlup ederek son veren ve devleti dağılmaktan kurtardığı için “Devletin İkinci Kurucusu” kabul edilen padişah kimdir?",
    secenek: ["II. Murad", "I. Mehmed (Çelebi)", "II. Mehmed (Fatih)", "I. Bayezid", "I. Selim"], dogru: 1,
    aciklama: "Fetret Devri karmaşasını bitirip birliği sağladığı için Çelebi Mehmed devleti adeta yeniden kurmuştur." },
  { q: "Osmanlı tarihinin İLK dini ve sosyal içerikli ayaklanması kabul edilen, I. Mehmed Dönemi'nde çıkan isyan hangisidir?",
    secenek: ["Şahkulu İsyanı", "Baba İshak İsyanı", "Şeyh Bedrettin İsyanı", "Celali İsyanları", "Patrona Halil İsyanı"], dogru: 2,
    aciklama: "Şeyh Bedrettin İsyanı (ve müritleri Börklüce Mustafa, Torlak Kemal) Osmanlı'nın ilk sosyo-dini nitelikli isyanıdır." },
  { q: "1416 yılında Venediklilerle yapılan ve Osmanlı tarihinin İLK deniz savaşı kabul edilen mücadele hangisidir?",
    secenek: ["Preveze Deniz Savaşı", "İnebahtı Deniz Savaşı", "Çalı Bey (Gelibolu) Deniz Savaşı", "Cerbe Deniz Savaşı", "Navarin Baskını"], dogru: 2,
    aciklama: "Çalı Bey komutasındaki Osmanlı donanması Venedik'e yenilse de bu savaş Osmanlı'nın ilk deniz savaşıdır." },
  { q: "Timur tarafından Semerkand'a götürülen, Çelebi Mehmed döneminde taht iddiasıyla ortaya çıkıp Bizans'a sığınan Yıldırım Bayezid'in oğlu kimdir?",
    secenek: ["Şehzade Mustafa (Kanuni'nin oğlu)", "Mustafa Çelebi (Düzmece Mustafa)", "Cem Sultan", "Şehzade Bayezid", "Şehzade Cihangir"], dogru: 1,
    aciklama: "Çelebi Mehmed, gerçek şehzade olmadığını savunarak ona “Düzmece” lakabını takmış; Bizans'a vergi ödeyerek gözaltında tutulmasını sağlamıştır." },
  { q: "Fetret Devri sonrası Çelebi Mehmed'in Anadolu beyliklerine karşı izlediği temel politika ne olmuştur?",
    secenek: ["Tüm beylikleri şiddetle ortadan kaldırmak", "Yıkılan birliği yeniden kurmaya çalışmak ancak temkinli ve barışçıl diplomasi izlemek", "Anadolu'yu terk edip Rumeli'ye yerleşmek", "Memlüklerle ittifak kurup beylikleri yok etmek", "Haçlılardan yardım istemek"], dogru: 1,
    aciklama: "Devleti yeni toparladığı için sert güçten kaçınmış; Candaroğulları ve Saruhanoğulları'nı barışçıl adımlarla merkeze bağlamıştır." },
  { q: "Devşirme Sistemi'nin Fetret Devri'nde tıkanması üzerine, kendi Hristiyan tebaasının çocuklarının devşirilmesini kanuni bir sisteme bağlayan padişah kimdir?",
    secenek: ["Orhan Bey", "I. Mehmed (Çelebi)", "II. Mehmed", "I. Selim", "I. Süleyman"], dogru: 1,
    aciklama: "Fetret döneminde Pençik (esir) gelmeyince Çelebi Mehmed kendi Hristiyan tebaasından devşirme alma kanununu oturtmuştur." },
  { q: "Çelebi Mehmed'in Balkanlar'da fetih hareketlerini yeniden başlatmasının temel hedefi nedir?",
    secenek: ["Hint Deniz Seferleri'ne başlamak", "Ankara Savaşı'nın yarattığı hezimet imajını silmek ve prestij kazanmak", "İpek Yolu'nu kapatmak", "Şiilik propagandasını engellemek", "Kutsal Roma-Cermen İmparatorluğu'nu yıkmak"], dogru: 1,
    aciklama: "Fetret Devri sonrası Balkanlar'da Osmanlı otoritesini sarsılmaz kılmak ve devleti eski gücüne kavuşturmaktır." },
  { q: "Yeşil Cami, Yeşil Türbe ve Medreseyi yaptıran Çelebi Mehmed'in, çini sanatının şaheseri sayılan türbesi hangi şehirdedir?",
    secenek: ["Edirne", "İstanbul", "Bursa", "Amasya", "Konya"], dogru: 2,
    aciklama: "Bursa Yeşil Türbe, Çelebi Mehmed'in anıt mezarıdır ve çini sanatının şaheseridir." },
  { q: "Çelebi Mehmed'in Bizans ile iyi geçinip Şehzade Mustafa'yı elinde tutması karşılığında Bizans'a yıllık para ödemeyi kabul etmesinin nedeni nedir?",
    secenek: ["Bizans'ı Osmanlı'ya bağlamak", "İç krizlerle uğraşırken dışarıdan gelebilecek bir taht tehdidini ve Haçlı seferini önlemek", "Katolik-Ortodoks birleşmesini sağlamak", "Balkanlar'daki iskân politikasını iptal etmek", "Anadolu beyliklerinin isyanını çekmemek"], dogru: 1,
    aciklama: "Çelebi Mehmed, devletin zayıf anında Bizans'ın Mustafa Çelebi'yi serbest bırakıp yeni bir taht krizi çıkarmasını engellemek istemiştir." },
  { q: "Çelebi Mehmed döneminde Türkçe eser yazmaya önem verilmesi ve sarayda Türkçe edebiyatın teşvik edilmesinin altında yatan temel düşünce nedir?",
    secenek: ["Farsçayı resmi dil yapmak", "Milli kültürü ve Türkçeyi yücelterek devletin Türk kimliğini pekiştirmek", "Arapçayı tamamen yasaklamak", "Bizans kültürünü benimsemek", "Enderun Mektebi'ni kapatmak"], dogru: 1,
    aciklama: "Kuruluş dönemi hükümdarları Türk kültürünü ve dilini korumaya büyük özen göstermişlerdir." }
];

/* Padişah quiz'lerini mevcut dizilere EKLE (üzerine yazma) */
Object.keys(QUIZ_EK).forEach(function (id) {
  var s = (typeof SULTANS !== "undefined") && SULTANS.find(function (x) { return x.id === id; });
  if (s) s.quiz = (s.quiz || []).concat(QUIZ_EK[id]);
});


/* ————— 2) DÖNEM / KONU TESTİ DÜĞÜMLERİ (padişah dışı) —————
   Geç Osmanlı temaları mevcut dönem raylarına; Milli Mücadele→Çağdaş "Atatürk Dönemi" rayına eklenir. */
if (typeof ERAS !== "undefined" && !ERAS.cumhuriyet) {
  ERAS.cumhuriyet = { ad: "Kurtuluş Savaşı & Atatürk Dönemi", yil: "1919 – 1938", renk: "#c0563e" };
}
if (typeof ERA_INTRO !== "undefined" && !ERA_INTRO.cumhuriyet) {
  ERA_INTRO.cumhuriyet =
    "Mondros'la fiilen biten imparatorluğun küllerinden yeni bir ulus-devletin doğuşu. Önce işgale karşı " +
    "yerel direniş (Kuva-yı Milliye), sonra kongrelerle örgütlenen millî irade (Erzurum–Sivas), 23 Nisan 1920'de " +
    "Ankara'da açılan TBMM ile hukuki bir merkez; askeri zaferlerin (İnönü–Sakarya–Büyük Taarruz) ardından Lozan'la " +
    "tescillenen tam bağımsızlık ve peşinden gelen köklü inkılaplarla çağdaş, laik Cumhuriyet.";
}

var DONEM_TESTLERI = [];

DONEM_TESTLERI.push({
  id: "test_duraklama", no: null, ad: "Duraklama Dönemi · Konu Testi", lakap: "", yil: "17. yüzyıl", era: "duraklama",
  status: "full", araDonem: true, baslik: "Duraklama ve Sancılı Değişim (10 Soru)",
  ruh: "IV. Murad'ın sert tedbirlerinden Köprülüler'in toparlanmasına, Bucaş'taki en geniş Batı sınırından Karlofça'ya; " +
       "Pasarofça ile Batı'nın üstünlüğünün kabulü ve Lale Devri'nin (elçilikler, matbaa) doğuşuna uzanan dönemin karma testi.",
  quiz: [
    { q: "IV. Murad Dönemi'nde İstanbul'da gece sokağa çıkma yasağı uygulanmış; tütün, kahve ve kahvehaneler kesin olarak yasaklanmıştır. Bu sert tedbirlerin TEMEL amacı nedir?",
      secenek: ["Hazine gelirlerini tütün vergisiyle artırmak", "Kahvehanelerin yeniçeri ve muhaliflerin örgütlenme/isyan merkezine dönüşmesini engelleyerek merkezi otoriteyi sağlamak", "Batı tarzı sosyal reformları dayatmak", "İthalatı tamamen durdurmak", "İpek Yolu ticaretini korumak"], dogru: 1,
      aciklama: "Kahvehaneler devlet aleyhine propaganda ve isyan planlarının yapıldığı mekânlardı; IV. Murad bu yasaklarla asayişi ve otoriteyi korumayı hedeflemiştir." },
    { q: "Osmanlı'da bozulmanın nedenlerini araştırmak amacıyla İLK kez raporlar (risale/layiha) hazırlatan ve bu doğrultuda hareket etmeye çalışan padişah kimdir?",
      secenek: ["I. Ahmed", "II. Osman", "IV. Murad", "III. Ahmed", "I. Mahmud"], dogru: 2,
      aciklama: "IV. Murad, Koçi Bey ve Kâtip Çelebi gibi isimlere raporlar hazırlatarak sorunun kökenine inmeye çalışan ilk padişah olmuştur." },
    { q: "IV. Murad'ın Revan ve Bağdat seferleri sonucu imzalanan 1639 Kasr-ı Şirin Antlaşması'nın Türk tarihi açısından EN ÖNEMLİ sonucu nedir?",
      secenek: ["Osmanlı'nın doğuda en geniş sınırlara ulaşması", "Safevi Devleti'nin tamamen yıkılması", "Bağdat'ın Safevîlere bırakılması", "Günümüz Türkiye-İran sınırının büyük ölçüde çizilmesi", "Rusya'nın Kafkasya'daki ilerleyişinin durdurulması"], dogru: 3,
      aciklama: "1639 Kasr-ı Şirin ile çizilen sınır (Zagros Dağları esas alınarak) günümüz Türkiye-İran sınırının temelini oluşturmuş ve asırlarca değişmemiştir." },
    { q: "1656'da IV. Mehmed döneminde yeniçerilerin isyan ederek istedikleri 30'dan fazla devlet adamını Sultanahmet Meydanı'ndaki çınara astırdıkları, tarihe “Çınar Vakası” olarak geçen olay neyin kanıtıdır?",
      secenek: ["Rejim değişikliğine gidildiğinin", "Yeniçerilerin devlet idaresindeki baskısının ve saray otoritesini zayıflattığının", "Tımar sisteminin başarıyla uygulandığının", "Medrese öğrencilerinin yönetimi ele geçirdiğinin", "Eyalet isyanlarının sona erdiğinin"], dogru: 1,
      aciklama: "Yeniçerilerin padişaha rağmen devlet adamlarını idam ettirmesi, kapıkulu askerlerinin merkezdeki gücünü ve vesayetini kanıtlar." },
    { q: "Köprülü Mehmed Paşa, sadrazamlık teklifini “kararlarının onaylanması, atamalara karışılmaması, savunması alınmadan işlem yapılmaması” gibi şartlarla kabul etmiştir. Bu şartların TEMEL amacı nedir?",
      secenek: ["Padişahı tahttan indirmek", "Bir çalışma ortamı ve can güvenliği sağlayarak radikal kararları engelsiz uygulayabilmek", "Sadrazamlığı babadan oğula geçen bir saltanata dönüştürmek", "Yeniçeri Ocağı'nı kapatmak", "Elçileri devre dışı bırakmak"], dogru: 1,
      aciklama: "Köprülü Mehmed Paşa, bozulmuş düzeni düzeltmek ve ıslahatları serbestçe yapabilmek için güvence istemiştir; şartla göreve gelen ilk sadrazamdır." },
    { q: "IV. Mehmed döneminde Köprülü Fazıl Ahmed Paşa'nın Lehistan seferi sonucu imzalanan 1672 Bucaş Antlaşması'nın en çok vurgulanan özelliği nedir?",
      secenek: ["Osmanlı'nın Batı'da en geniş sınırlara ulaştığı antlaşma olması", "Osmanlı'nın ilk kez büyük çapta toprak kaybettiği antlaşma olması", "Kapitülasyonların kaldırılması", "Halifeliğin kazanılması", "Karlofça'nın imzalanması"], dogru: 0,
      aciklama: "1672 Bucaş Antlaşması ile Podolya kazanılmış; Osmanlı Devleti Batı'da (Avrupa'da) en geniş sınırlarına ulaşmıştır." },
    { q: "1718 Pasarofça Antlaşması ile Osmanlı Lale Devri'ne girmiştir. Pasarofça'nın dış politika ve ıslahat anlayışındaki EN BÜYÜK kırılma noktası nedir?",
      secenek: ["Fetih politikasının terk edilip ilk kez Batı'nın askeri/teknik üstünlüğünün kabul edilmesi", "Laikliğe geçilmesi", "Rusya ile ittifak kurulması", "Kapitülasyonların iptali", "Donanmanın lağvedilmesi"], dogru: 0,
      aciklama: "Pasarofça ile Osmanlı, Batı'yı artık kendi altında görmekten vazgeçmiş; üstünlüğünü kabul ederek savunma ve Batılılaşma dönemine (Lale Devri) girmiştir." },
    { q: "III. Ahmed (Lale Devri) döneminde Paris, Viyana ve Varşova gibi başkentlere ilk kez geçici elçiler gönderilmesinin temel amacı nedir?",
      secenek: ["Hristiyan dünyasındaki dini gelişmeleri denetlemek", "Batı'daki askeri, teknik ve kültürel gelişmeleri yerinde takip edip merkeze raporlamak", "Avrupa'dan borç para almak", "Yabancı subay devşirmek", "Balkan isyanlarını bastırmak"], dogru: 1,
      aciklama: "Sefaretname yazan geçici elçilerin ana görevi, Avrupa'nın yeniliklerini inceleyip Osmanlı'ya aktarmaktı." },
    { q: "1727'de İbrahim Müteferrika ve Sait Efendi'nin kurduğu ilk özel Türk matbaasında dini eserlerin basılmasının yasaklanmasının TEMEL sebebi nedir?",
      secenek: ["Mürekkebin Kur'an basımına uygun olmaması", "Hattatların ve müstensihlerin işsiz kalıp tepki göstermesini önlemek", "Matbaanın sadece askeri amaçla kurulması", "Şeyhülislamın matbaaya tümüyle karşı çıkması", "Arap alfabesinin matbaaya uyarlanamaması"], dogru: 1,
      aciklama: "El yazmasıyla geçinen hattatların işsiz kalıp isyan çıkarmasını önlemek için dini eserler kapsam dışı bırakılmıştır." },
    { q: "1730'da Lale Devri'ni sona erdiren Patrona Halil İsyanı ile ilgili ÖSYM açısından en kritik ayrıntı nedir?",
      secenek: ["Osmanlı tarihindeki ilk rejim karşıtı isyan olması", "Matbaa dahil tüm Batılı yenilikleri hedef alması", "İsyanın rejime veya yeniliklere değil; saray çevresinin lüksüne, sefahatine ve idarecilere karşı yapılmış olması", "Fransız İhtilali etkisiyle milliyetçi olması", "Yabancı subayları öldürmesi"], dogru: 2,
      aciklama: "İsyan rejim değiştirmeyi hedeflememiş (yerine hanedandan I. Mahmud geçmiştir); matbaa gibi faydalı kurumlar değil, yalnızca sefahat sembolü köşkler hedef alınmıştır." }
  ]
});

DONEM_TESTLERI.push({
  id: "test_gerileme", no: null, ad: "Gerileme Dönemi · Konu Testi", lakap: "", yil: "18. yüzyıl", era: "gerileme",
  status: "full", araDonem: true, baslik: "18. Yüzyıl Gerileme ve Islahatlar (10 Soru)",
  ruh: "Batı tarzı ilk askeri okullardan (Hendesehane) sürekli kapitülasyonlara, Esham (iç borç) sisteminden Küçük Kaynarca'nın " +
       "ağır sonuçlarına ve III. Selim'in bütüncül Nizam-ı Cedid programına uzanan ıslahatlar çağının testi.",
  quiz: [
    { q: "I. Mahmud Dönemi'nde Fransa'dan gelen Humbaracı Ahmed Paşa (Comte de Bonneval) öncülüğünde 1734'te açılan Hendesehane'nin Türk tarihindeki EN TEMEL önemi nedir?",
      secenek: ["Açılan ilk sivil üniversite olması", "Batı tarzında (Avrupa usulü) açılan İLK askeri-teknik yüksekokul olması", "Medreselerin kapatılması", "İlk kez kız öğrenci alması", "Kapitülasyonları denetleyen kurul olması"], dogru: 1,
      aciklama: "Hendesehane, Osmanlı'nın Batı'nın askeri/teknik üstünlüğünü kabul ederek açtığı ilk Batılı tarz askeri mekteptir." },
    { q: "1740 yılında Fransızlara verilen kapitülasyonların “padişahın saltanatı süresince geçerli olma” kuralından çıkarılıp SÜREKLİ hale getirilmesinin en ağır uzun vadeli sonucu nedir?",
      secenek: ["Osmanlı sanayisinin ve yerli tüccarın Avrupa malları karşısında ezilerek ülkenin açık pazar haline gelmesi", "Fransa'nın Osmanlı ordusunu yönetmesi", "Yeniçeri Ocağı'nın feshi", "Akdeniz ticaretinin durması", "Fransızcanın resmi dil olması"], dogru: 0,
      aciklama: "Sürekli kapitülasyonlar, 18. yüzyılda ekonominin çökmesine, lonca düzeninin yıkılmasına ve ülkenin açık pazar/yarı sömürge haline gelmesine yol açmıştır." },
    { q: "III. Mustafa döneminde hazırlanıp I. Abdülhamid döneminde uygulanan Esham Sistemi, Osmanlı ekonomi tarihinde neyin İLK göstergesidir?",
      secenek: ["Dış borç (kredi) alınmaya başlandığının", "İlk kez iç borçlanma (iç borç senedi) yöntemine gidildiğinin", "Karadeniz ticaretinin millileştiğinin", "Tımarın kaldırıldığının", "İltizamın yasaklandığının"], dogru: 1,
      aciklama: "Esham, devletin kendi halkından borç aldığı ilk iç borçlanma senedidir. (İlk dış borç ise 1854 Kırım Savaşı'nda alınacaktır.)" },
    { q: "I. Abdülhamid'in, ölen yeniçerilerin maaşını akrabalarının alması (Esame) uygulamasını ve ulufe alım-satımını yasaklamasındaki temel amaç nedir?",
      secenek: ["Tımar ordusunu yok etmek", "Hazine üzerindeki haksız yükü kaldırmak ve askeri kadrolardaki sahtekârlığı önlemek", "Yeniçeri yerine Fransız ordusu kurmak", "Şeyhülislamın bütçesini kısmak", "Kapıkulunu sürgün etmek"], dogru: 1,
      aciklama: "Esame usulsüzlüğü askeri kadroların sahteliğini besliyordu; I. Abdülhamid bu büyük mali yükü ve çürümeyi önlemek istemiştir." },
    { q: "1774 Küçük Kaynarca Antlaşması ile Kırım bağımsız olurken, “Kırım halkı dinî bakımdan Osmanlı Halifesine bağlı kalacaktır” maddesinin eklenmesindeki TEMEL amaç nedir?",
      secenek: ["Kırım'dan vergi toplamaya devam etmek", "Bölge halkı ile dinî/kültürel bağı koruyarak Kırım'ı tekrar geri alabilme umudunu canlı tutmak", "Rusya'nın Kırım'a girişini önlemek", "Kırım'ı İngiltere'ye satmak", "Halifeliği ilk kez ilan etmek"], dogru: 1,
      aciklama: "Osmanlı, siyasi olarak kaybettiği Kırım ile bağlarını koparmamak için Halifeliğin gücünü İLK KEZ uluslararası bir antlaşmada kullanmıştır." },
    { q: "1774 Küçük Kaynarca'nın maddeleri (savaş tazminatı, İstanbul'da daimi Rus elçiliği ve Karadeniz'de Rus donanması, Ortodoksların himayesi) değerlendirildiğinde aşağıdakilerden hangisine ULAŞILAMAZ?",
      secenek: ["Karadeniz'deki Türk gölü hâkimiyetinin kesin olarak bittiğine", "Rusya'nın iç işlere karışma hakkı elde ettiğine", "Osmanlı maliyesinin ağır darbe aldığına", "Osmanlı'nın büyük devlet statüsünü koruduğuna", "Rusya'nın açık denizlere inme politikasında ilerleme kaydettiğine"], dogru: 3,
      aciklama: "Küçük Kaynarca, Osmanlı tarihinin en ağır antlaşmalarından biridir; devlet büyük güç statüsünü kaybetmiş ve Rus müdahalesine açık hale gelmiştir." },
    { q: "1787-1791 savaşları sürerken 1789'da Fransız İhtilali patlak vermiş, Avusturya 1791 Ziştovi Antlaşması ile savaştan çekilmiştir. Avusturya'nın çekilmesindeki TEMEL sebep nedir?",
      secenek: ["Fransız İhtilali'nin yaydığı “milliyetçilik” akımının kendi çok uluslu yapısını parçalamasından korkması", "Osmanlı'nın Viyana'yı kuşatması", "İngiltere'nin savaş ilanı", "Rusya ile düşman olması", "III. Selim'in Avusturya kralını indirmesi"], dogru: 0,
      aciklama: "Avusturya da çok uluslu bir imparatorluktu; milliyetçilik virüsü içine sıçrayınca Osmanlı ile barışıp sınırlarını korumaya çekilmiştir." },
    { q: "III. Selim'in ıslahatlarını (Nizam-ı Cedid) önceki dönem ıslahatlarından ayıran EN ÖNEMLİ fark nedir?",
      secenek: ["Sadece askeri alanı kapsayıp kültürel alanı reddetmesi", "Batılılaşmayı reddedip geleneğe dönmesi", "Islahatların ilk kez tek tek kişilere bağlı kalmayıp devlet politikası ve radikal/bütüncül bir program haline getirilmesi", "Yeniçeri desteğiyle yapılması", "Dış borçla finanse edilmesi"], dogru: 2,
      aciklama: "III. Selim döneminde ıslahatlar padişahın şahsi merakı olmaktan çıkıp bütüncül bir devlet politikası (Nizam-ı Cedid) haline gelmiştir." },
    { q: "III. Selim dönemi yenilikleriyle ilgili aşağıdaki eşleştirmelerden hangisi YANLIŞTIR?",
      secenek: ["Nizam-ı Cedid: Fransız usulü yetiştirilen yeni ordu", "Irad-ı Cedid: Fransız usulü yetiştirilen yeni ordu", "Matbaa-i Amire: Devlet matbaası", "Sürekli (Daimi) Elçilikler: Londra'ya (Yusuf Agâh Efendi) daimi elçi gönderilmesi", "Mühendishane-i Bahr-i/Berr-i Hümayun'un geliştirilmesi"], dogru: 1,
      aciklama: "Irad-ı Cedid bir ordu değil, Nizam-ı Cedid ordusunun masraflarını karşılamak için kurulan özel hazinenin adıdır." },
    { q: "1807 Kabakçı Mustafa İsyanı ile Nizam-ı Cedid dağıtılmış, III. Selim tahttan indirilmiştir. Bu isyanla ilgili hangi yorum YAPILAMAZ?",
      secenek: ["Batılılaşma yanlısı radikal ıslahat döneminin kesintiye uğradığı", "Yeniçeri ve muhafazakâr çevrelerin yeniliklere tepkisi olduğu", "III. Selim'in canına ve ıslahatlarına mal olduğu", "Osmanlı tarihinde rejimi değiştirmeyi amaçlayan ilk halk ihtilali olduğu", "Yenilik taraftarı devlet adamlarının tasfiye edildiği"], dogru: 3,
      aciklama: "Kabakçı Mustafa İsyanı, tıpkı Patrona Halil gibi rejim karşıtı DEĞİLDİR; hanedandan IV. Mustafa tahta geçirilmiş, yalnızca yenilikler hedef alınmıştır." }
  ]
});

DONEM_TESTLERI.push({
  id: "test_dagilma1", no: null, ad: "Dağılma · Radikal Modernleşme Testi", lakap: "", yil: "19. yüzyıl", era: "dagilma",
  status: "full", araDonem: true, baslik: "19. Yüzyıl Dağılma ve Radikal Modernleşme (10 Soru)",
  ruh: "Sened-i İttifak'tan Vaka-yı Hayriye'ye, Tanzimat ve Islahat fermanlarından ilk dış borca ve Mecelle'ye; " +
       "II. Mahmud–Abdülmecid–Abdülaziz eksenli köklü modernleşme hamlelerinin testi.",
  quiz: [
    { q: "1808 Sened-i İttifak'ın Türk demokrasi tarihi açısından EN KRİTİK özelliği nedir?",
      secenek: ["İlk kez merkeziyetçi yönetime geçilmesi", "Padişahın yetkilerinin İLK KEZ kendi iradesi dışında bir güç (Ayanlar) karşısında sınırlandırılması", "Yeniçeri Ocağı'nın feshi", "İlk anayasa Kanun-ı Esasi'nin yürürlüğe girmesi", "Azınlıklara ilk kez temsil hakkı verilmesi"], dogru: 1,
      aciklama: "Sened-i İttifak, padişahın mutlak otoritesini ilk kez yerel bir güçle (Ayanlar) sınırlandıran belgedir; Osmanlı'nın ilk “Magna Carta”sı sayılır." },
    { q: "1826 Vaka-yı Hayriye (Yeniçeri Ocağı'nın kaldırılması)'nın en doğrudan ve önemli sonucu nedir?",
      secenek: ["Dış borç alımının durması", "Padişahın ve merkezî teşkilatın önündeki askeri vesayetin kırılarak ıslahatların önünün açılması", "Fransız İhtilali etkilerinin bitmesi", "Celali isyanlarının bitmesi", "Sadrazamlığın kaldırılması"], dogru: 1,
      aciklama: "Ocağın ilgasıyla padişahın merkezi otoritesi güçlenmiş, II. Mahmud ve Tanzimat dönemi reformları engelsiz uygulanabilmiştir." },
    { q: "II. Mahmud'un yaptığı idari yeniliklerden hangisi “merkezi otoriteyi köylere/taşraya kadar ulaştırmak ve muhtarları devlete bağlamak” amacı taşır?",
      secenek: ["Divan-ı Hümayun'un kaldırılıp Nazırlıkların kurulması", "Posta ve İtfaiye örgütünün kurulması", "İlk kez Muhtarlık Teşkilatı'nın kurulması", "Takvim-i Vekayi'nin çıkarılması", "Pasaport ve Mürur Tezkeresi uygulaması"], dogru: 2,
      aciklama: "Muhtarlıkların kurulması, merkezden uzak taşradaki asayiş, nüfus ve vergi takibini doğrudan merkeze bağlamak için yapılmıştır." },
    { q: "1839 Tanzimat Fermanı'nın (Sultan Abdülmecid) Türk hukuk tarihi açısından EN ÖNEMLİ kırılma noktası nedir?",
      secenek: ["İlk kez padişahın kendisini ve kanun gücünün üstünlüğünü (Hukukun Üstünlüğü) kabul etmesi", "Cumhuriyete geçilmesi", "Halifeliğin kısıtlanması", "İsviçre Medeni Kanunu'nun alınması", "Gayrimüslimlere askerlik muafiyeti verilmesi"], dogru: 0,
      aciklama: "Padişah “Ben de bu kanunlara uyacağım” diyerek kanun gücünün kendi iradesinin üzerinde olduğunu beyan etmiştir; bu, hukuk devleti anlayışının ilk adımıdır." },
    { q: "Osmanlı Devleti, 1854'te tarihinin İLK dış borcunu hangi devletten almıştır?",
      secenek: ["Fransa", "İngiltere", "Rusya", "Avusturya", "Almanya"], dogru: 1,
      aciklama: "Kırım Savaşı'nın mali yükünü kaldıramayan Osmanlı, Sultan Abdülmecid döneminde ilk dış borcu İngiltere'den almıştır (bu, Duyun-ı Umumiye'ye giden yolu açmıştır)." },
    { q: "1856 Islahat Fermanı'nın (sadece gayrimüslim haklarına yönelik) ilan edilmesindeki TEMEL DIŞ sebep nedir?",
      secenek: ["Fransız İhtilali'ni protesto etmek", "Paris Barış Konferansı'nda Avrupalı devletlerin Osmanlı'nın iç işlerine müdahalesini engellemek", "ABD ile ticaret antlaşması yapmak", "Mısır Meselesi'ni çözmek", "Balkan Müslümanlarını korumak"], dogru: 1,
      aciklama: "Ferman, Paris Konferansı'nda “Hristiyan azınlıkların hakları ne olacak?” baskısını önlemek ve iç işlere müdahaleyi engellemek için hazırlanıp konferansa sunulmuştur." },
    { q: "Aşağıdakilerden hangisi Sultan Abdülaziz Dönemi'nde gerçekleşen gelişmelerden biri DEĞİLDİR?",
      secenek: ["Şûra-yı Devlet (Danıştay) ve Divan-ı Ahkâm-ı Adliye (Yargıtay) temellerinin atılması", "Ahmet Cevdet Paşa başkanlığında Mecelle'nin hazırlanmaya başlanması", "İlk kez Avrupa seyahatine çıkan padişah olması", "Dünyanın en büyük donanmalarından birinin oluşturulması", "İlk kez Meşrutiyet'in ilan edilip Kanun-ı Esasi'nin yürürlüğe sokulması"], dogru: 4,
      aciklama: "Meşrutiyet'in ilanı ve Kanun-ı Esasi, Abdülaziz değil; onu tahttan indiren süreç sonrası II. Abdülhamid döneminde (1876) gerçekleşmiştir." },
    { q: "Osmanlı'nın ilk medeni kanunu Mecelle ile ilgili EN önemli ÖSYM ayrıntısı nedir?",
      secenek: ["Tamamen Fransız Medeni Kanunu'nun tercümesi olması", "İslami (Hanefi) fıkha dayalı borçlar, eşya ve yargılama hukukunu içermesi ancak Aile ve Miras Hukukuna yer vermemesi", "Gayrimüslim ibadetlerini yasaklaması", "Sadece eyaletlerde geçerli olması", "Ceza hukukunu kaldırması"], dogru: 1,
      aciklama: "Mecelle bir kodlamadır fakat kaynağı İslam fıkhıdır; içinde Aile ve Miras hukuku YOKTUR, bu konular şer'i mahkemelerde kalmıştır." },
    { q: "Osmanlı'da resmi banknot basma yetkisinin yabancı sermayeli Bank-ı Osmani'ye verilmesi neyin göstergesidir?",
      secenek: ["Para basma yetkisinin ve finansal bağımsızlığın yabancı sermayeye kaptırıldığının", "Osmanlı parasının dünyanın en değerlisi olduğunun", "Tüm bankaların millî sermayeyle kurulduğunun", "Loncaların bankacılığı ele geçirdiğinin", "Faizin yasaklandığının"], dogru: 0,
      aciklama: "Resmi banknot basma yetkisinin İngiliz sermayeli bir bankaya verilmesi, ekonomik bağımsızlığın ne kadar zedelendiğinin açık göstergesidir." },
    { q: "II. Mahmud'un memurlar arasında tek tip kılık-kıyafeti (fes, ceket, pantolon) zorunlu kılmasındaki TEMEL felsefe nedir?",
      secenek: ["Halkı Batı kültürüne özendirmek", "Memurlar arasındaki dini görünüm farkını kaldırıp biçimsel eşitlik sağlamak ve padişahın görünür otoritesini hissettirmek", "Fransız kıyafet sanayisini desteklemek", "Şeyhülislam kıyafetlerine özenmek", "Eski yeniçeri kıyafetlerini korumak"], dogru: 1,
      aciklama: "II. Mahmud, kamusal alanda tek tip memur görünüşüyle biçimsel eşitlik ve merkezî otoriteyi hissettirmek istemiştir (muhafazakârlar bu yüzden ona “Gâvur Padişah” demiştir)." }
  ]
});

DONEM_TESTLERI.push({
  id: "test_dagilma2", no: null, ad: "Son Dönem · Anayasal Düzen ve Yıkılış", lakap: "", yil: "1876 – 1918", era: "dagilma",
  status: "full", araDonem: true, baslik: "Son Dönem, Anayasal Düzen ve Yıkılış (10 Soru)",
  ruh: "İlk anayasa Kanun-ı Esasi'den II. Abdülhamid'in İstibdat ve kurumlaşmasına, Duyun-ı Umumiye'den II. Meşrutiyet, " +
       "31 Mart Vakası ve Bab-ı Ali Baskını'na uzanan anayasal düzen ve yıkılış sürecinin testi.",
  quiz: [
    { q: "1876 Kanun-ı Esasi'nin Türk siyasi tarihi açısından EN TEMEL özelliği nedir?",
      secenek: ["Türk tarihinin İLK yazılı anayasası olması ve halkın ilk kez mecliste temsil edilme hakkını kazanması", "Padişahlığın kaldırılması", "Cumhuriyete geçilmesi", "Türkçenin ilk kez resmi dil olması", "Gayrimüslimlerin askerliğe başlaması"], dogru: 0,
      aciklama: "Kanun-ı Esasi ile Osmanlı mutlak monarşiden meşruti monarşiye geçmiş; halk, Mebusan Meclisi sayesinde ilk kez seçme-seçilme hakkı elde etmiştir." },
    { q: "1876 Anayasası'ndaki padişah yetkileri (meclisi açma/kapatma, sürgün, hükümetin padişaha karşı sorumlu olması) birlikte değerlendirildiğinde ne söylenebilir?",
      secenek: ["Hükümetin meclise karşı sorumlu olduğu", "Anayasal düzende hâlâ padişah gücünün baskın olduğu ve tam parlamenter demokrasiye geçilmediği", "Anayasa mahkemesinin kurulduğu", "Gayrimüslim kurumlarının teşvik edildiği", "Saltanatın kaldırıldığı"], dogru: 1,
      aciklama: "İlk meşrutiyet olsa da hükümet meclise değil padişaha sorumludur; padişahın sürgün ve meclisi kapatma yetkisi, düzenin hâlâ padişah ağırlıklı olduğunu gösterir." },
    { q: "1881 Duyun-ı Umumiye (Muharrem Kararnamesi) İdaresi'nin en önemli sonucu nedir?",
      secenek: ["Avrupalı devletlerin Osmanlı'nın tuz, tütün, ipek gibi temel gelir kaynaklarına el koyarak ekonomik bağımsızlığı fiilen sonlandırması", "Osmanlı ordusunun Alman subaylara teslim edilmesi", "Kapitülasyonların tek taraflı kaldırılması", "Kâğıt para basımının durdurulması", "İlk sanayi planının yapılması"], dogru: 0,
      aciklama: "Duyun-ı Umumiye “devlet içinde devlet” gibi çalışmış, Osmanlı'nın vergi gelirlerini doğrudan alacaklı Avrupalı devletlerin kasasına aktararak ekonomik egemenliği yok etmiştir." },
    { q: "Aşağıdakilerden hangisi II. Abdülhamid Dönemi'nde açılan kurum/hizmetlerden biri DEĞİLDİR?",
      secenek: ["Darülaceze", "Hamidiye Etfal Hastanesi", "Sanayi-i Nefise Mektebi", "Hicaz Demiryolu", "Darülfünun'un ilk kez kurulup açılması"], dogru: 4,
      aciklama: "Darülfünun'un temelleri daha önce atılmıştır; II. Abdülhamid döneminde yeniden faaliyete geçmiştir ama “ilk kez kurulması” yanlıştır." },
    { q: "II. Abdülhamid, Osmanlı'nın dağılmasını önlemek için dış politikada İslamcılık (Panislamizm) fikrini temel politika yaparken en aktif biçimde hangi makamın gücünü kullanmıştır?",
      secenek: ["Halifelik Makamını", "Han-ı Hakan Unvanını", "Sadrazamlık Yetkisini", "Meşveret Başkanlığını", "Başkumandanlığı"], dogru: 0,
      aciklama: "II. Abdülhamid, sömürge altındaki Müslümanları motive etmek ve Avrupa'ya karşı koz olarak kullanmak için Halifelik makamının gücünü en aktif kullanan padişahtır." },
    { q: "1909 Anayasa Değişiklikleri ile ilgili aşağıdakilerden hangisi YANLIŞTIR?",
      secenek: ["Hükümetin artık padişaha değil Meclise karşı sorumlu hale gelmesi", "Padişahın meclisi kapatma ve sürgün yetkilerinin kısıtlanması", "İlk kez siyasi partilerin kurulmasına izin verilmesi", "Padişahın veto yetkisinin azaltılması", "Padişahlık ve hanedan sisteminin kaldırılarak cumhuriyete geçilmesi"], dogru: 4,
      aciklama: "1909 değişiklikleri parlamenter demokrasiyi güçlendirdi ancak saltanat kaldırılmadı; padişah kısıtlı yetkilerle yerinde kaldı." },
    { q: "13 Nisan 1909 (Rumi 31 Mart) Vakası ile ilgili en KRİTİK özellik nedir?",
      secenek: ["Türk tarihinde mevcut rejime (Meşrutiyet/Anayasal Düzen) karşı çıkarılan İLK isyan olması", "Yeniçerilerin son isyanı olması", "Mustafa Kemal'in ilk başarısızlığı olması", "Osmanlı'nın resmen yıkılmasına yol açması", "Azınlıkların bağımsızlık isyanı olması"], dogru: 0,
      aciklama: "Önceki isyanlar kişilere/idarecilere karşıydı; 31 Mart doğrudan anayasal düzene ve yenilikçi rejime karşı yapılmış ilk gerici/irticai isyandır." },
    { q: "Mustafa Kemal'in Hareket Ordusu'nda yer alıp 31 Mart İsyanı'nı bastırması onun hangi duruşunu gösterir?",
      secenek: ["Saltanat ve hilafet yanlısı olduğunu", "Meşrutiyetin, demokrasinin ve çağdaş rejimin koruyucusu olduğunu", "Sadrazam olmak istediğini", "Osmanlı'yı savaşa sokmayı", "Manda ve himayeyi kabul ettiğini"], dogru: 1,
      aciklama: "Kurmay Başkanlığını yaptığı Hareket Ordusu isyanı bastırmış; Mustafa Kemal anayasal düzeni ve yenilikleri korumak için aktif rol oynamıştır." },
    { q: "Osmanlı tarihinde Meclis (Mebusan Meclisi veya TBMM) kararıyla tahttan indirilen padişahlar hangi seçenekte doğru verilmiştir?",
      secenek: ["Genç Osman - IV. Murad", "III. Ahmed - III. Selim", "II. Abdülhamid - VI. Mehmed (Sultan Vahdettin)", "İbrahim - IV. Mehmed", "II. Mahmud - Sultan Abdülmecid"], dogru: 2,
      aciklama: "Sadece iki padişah meclis kararıyla indirilmiştir: II. Abdülhamid (1909 Mebusan Meclisi) ve Sultan Vahdettin (1922 TBMM'nin saltanatı kaldırması)." },
    { q: "1913 Bab-ı Ali Baskını ile ilgili aşağıdakilerden hangisi SÖYLENEMEZ?",
      secenek: ["Türk tarihindeki ilk modern askeri darbe kabul edildiği", "Padişahlığın kaldırılmadığı, sadece hükümetin (kabinenin) zorla değiştirildiği", "İttihat ve Terakki'nin fiili egemenliğinin başladığı", "Osmanlı'yı I. Dünya Savaşı'na sokan kadrolaşmanın zeminini hazırladığı", "Meşrutiyet rejiminin yıkılıp yerine Mutlak Saltanatın getirildiği"], dogru: 4,
      aciklama: "Bab-ı Ali Baskını bir hükümet darbesidir; padişah (V. Mehmed Reşad) yerinde kalmış, meşrutiyet sürmüş, yönetim İttihat ve Terakki'nin eline geçmiştir." }
  ]
});

DONEM_TESTLERI.push({
  id: "test_ww1", no: null, ad: "20. Yüzyıl Başı ve I. Dünya Savaşı", lakap: "", yil: "1911 – 1918", era: "dagilma",
  status: "full", araDonem: true, baslik: "XX. Yüzyıl Başlarında Osmanlı ve I. Dünya Savaşı (10 Soru)",
  ruh: "Mustafa Kemal'in fikir dünyasından Trablusgarp ve Balkan savaşlarına, I. Dünya Savaşı'nın nedenlerinden Osmanlı " +
       "cephelerine, Çanakkale ve Kut'ül Amâre zaferlerinden gizli antlaşmalara uzanan dönemin testi.",
  quiz: [
    { q: "Mustafa Kemal'in fikir dünyasını şekillendiren şehirlerle ilgili aşağıdaki eşleştirmelerden hangisi YANLIŞTIR?",
      secenek: ["Selanik: Batı kültürünü, farklı milletleri ve özgürlük fikrini tanıdığı liman kenti", "Manastır: Askeri idadide okuduğu, Ömer Naci ve Namık Kemal etkisiyle edebiyat ve Türkçülüğe ilgi duyduğu şehir", "İstanbul: Harp Okulu ve Harp Akademisi'ni okuduğu, basının fikrini geliştirdiği başkent", "Sofya: Askeri ateşemiliter olarak Batı diplomasisini ve Avrupa'yı gözlemlediği şehir", "Şam: Fikir dünyasının asıl şekillendiği ilk şehir"], dogru: 4,
      aciklama: "Mustafa Kemal Şam'da ilk görev yerinde (5. Ordu) bulunmuş ve Vatan ve Hürriyet Cemiyeti'ni kurmuştur; fikir dünyası ise asıl Selanik ve Manastır'da şekillenmiştir." },
    { q: "1911 Trablusgarp Savaşı'nın sonuçlarıyla ilgili aşağıdakilerden hangisi YANLIŞTIR?",
      secenek: ["Mustafa Kemal'in Derne-Tobruk, Enver Bey'in Bingazi'de halkı teşkilatlandırıp İtalyanları karada durdurması", "Mustafa Kemal'in emperyalizme karşı ilk askeri başarısı olması", "Uşi Antlaşması ile Trablusgarp'ın İtalya'ya bırakılıp Kuzey Afrika'daki son toprağın kaybedilmesi", "On İki Ada'nın geçici olarak İtalya'ya bırakılması", "Trablusgarp Savaşı devam ederken I. Dünya Savaşı'nın çıkması"], dogru: 4,
      aciklama: "Trablusgarp sırasında I. Dünya Savaşı değil, Balkan Savaşı patlak vermiştir; iki ateş arasında kalan Osmanlı Uşi Antlaşması'nı imzalamıştır." },
    { q: "Osmanlı'nın Balkan Savaşı'nda büyük yenilgi almasında EN TEMEL askeri/siyasi neden nedir?",
      secenek: ["Alman subayların yanlış yönlendirmesi", "Ordunun içine siyasetin (İttihatçı-İtilafçı çekişmesi) girmesi ve savaştan hemen önce askerlerin terhis edilmesi", "Rusya'nın İstanbul'u işgali", "İngiltere'nin Balkan devletlerine destek vermesi", "Anadolu'da büyük bir köylü isyanı çıkması"], dogru: 1,
      aciklama: "Emir-komuta zincirini bozan siyasi çekişme ve terhisler yenilgiye yol açtı (Nitekim II. Balkan Savaşı'nda devletler kendi arasında bölününce Enver Paşa Edirne'yi geri alacaktır)." },
    { q: "Aşağıdakilerden hangisi I. Dünya Savaşı'nın GENEL (tüm dünyayı ilgilendiren) nedenlerindendir?",
      secenek: ["Fransa-Almanya arasındaki Alsas-Loren sorunu", "Avusturya-Rusya arasındaki Balkan egemenlik mücadelesi (Panslavizm)", "Sanayi İnkılabı ile hız kazanan hammadde/sömürgecilik arayışı ve bloklaşma", "Rusya'nın sıcak denizlere inme isteği", "İtalya'nın Akdeniz'i “Bizim Deniz” yapma arzusu"], dogru: 2,
      aciklama: "Sömürgecilik/hammadde arayışı ve silahlanma/bloklaşma tüm dünyayı etkileyen evrensel (genel) nedendir; diğer şıklar devletlerarası özel anlaşmazlıklardır." },
    { q: "Osmanlı Devleti'nin I. Dünya Savaşı'nda kendi isteğiyle açtığı TAARRUZ cepheleri hangi seçenekte doğru verilmiştir?",
      secenek: ["Çanakkale - Irak", "Kafkas - Kanal (Süveyş)", "Hicaz/Yemen - Suriye/Filistin", "Galiçya - Romanya", "Çanakkale - Kafkas"], dogru: 1,
      aciklama: "8 cephe içinde taarruz olan yalnızca ikisidir: Kafkas (Enver Paşa - Bakü petrolleri/Turancılık) ve Kanal (Cemal Paşa - Mısır'ı geri almak). Diğerleri savunma/yardım cepheleridir." },
    { q: "1915'te çıkarılan Sevk ve İskân Kanunu (Tehcir Kanunu) ile ilgili ÖSYM'nin vurguladığı hukuki/idari gerçek nedir?",
      secenek: ["Tüm Ermeni nüfusunun ülke dışına sürülmesi", "Sadece savaş bölgesindeki asayişi bozan Ermenilerin, yine Osmanlı toprağı olan Suriye ve Lübnan'a geçici olarak göç ettirilmesi", "Ermenilerin mülklerine el konulup satılması", "Sadece Hristiyan din adamlarını kapsaması", "Göç edenlerin dönüşünün yasaklanması"], dogru: 1,
      aciklama: "Tehcir, ülke dışına sürme değil; savaş bölgesindeki güvenlik için Osmanlı'nın başka bir bölgesine (Suriye/Lübnan) yapılan zorunlu iç göç uygulamasıdır." },
    { q: "1916'da Irak Cephesi'nde General Townshend dahil 13 binden fazla İngiliz askerinin esir alındığı Kut'ül Amâre Zaferi'nin komutanı kimdir?",
      secenek: ["Enver Paşa", "Kâzım Karabekir Paşa", "Halil Paşa (Kut)", "Fahreddin Paşa", "İsmet Paşa"], dogru: 2,
      aciklama: "Kut'ül Amâre kahramanı Halil Paşa'dır (Soyadı Kanunu ile “Kut” soyadını almıştır); Çanakkale'den sonra I. Dünya Savaşı'nın en büyük zaferidir." },
    { q: "Mustafa Kemal'in I. Dünya Savaşı'nda görev yaptığı cephelerin KRONOLOJİK sırası hangisidir?",
      secenek: ["Çanakkale → Kafkas → Suriye-Filistin", "Kafkas → Çanakkale → Suriye-Filistin", "Çanakkale → Suriye-Filistin → Kafkas", "Suriye-Filistin → Çanakkale → Kafkas", "Kafkas → Suriye-Filistin → Çanakkale"], dogru: 0,
      aciklama: "Sıralama: Çanakkale (1915 - Anafartalar) → Kafkas (1916 - Muş/Bitlis) → Suriye-Filistin (1917-1918)." },
    { q: "İtilaf Devletleri'nin Osmanlı topraklarını paylaştığı gizli antlaşmalardan biri DEĞİLDİR?",
      secenek: ["Sykes-Picot Antlaşması", "London (Londra) Antlaşması", "Petrograd Protokolü", "Saint Jean de Maurienne Antlaşması", "Mac-Mahon Antlaşması"], dogru: 1,
      aciklama: "Londra Antlaşması, İtalya'yı savaşta taraf değiştirmeye ikna etmek için imzalanan antlaşmadır; Osmanlı topraklarını paylaşan gizli antlaşmalardan biri değildir." },
    { q: "İtilaf Devletleri'nin gizli paylaşım antlaşmalarını arşivlerden çıkarıp dünyaya ifşa eden devlet hangisidir?",
      secenek: ["ABD (Wilson İlkeleri ile)", "1917 İhtilali sonrası Bolşevik Rusya", "Bulgaristan", "Osmanlı Devleti", "Yunanistan"], dogru: 1,
      aciklama: "1917 Bolşevik İhtilali ile Çarlık yıkılınca Lenin liderliğindeki Bolşevikler gizli arşivleri açmış ve İtilaf'ın paylaşım belgelerini ifşa etmiştir." }
  ]
});

DONEM_TESTLERI.push({
  id: "mm_hazirlik", no: null, ad: "Milli Mücadele Hazırlık Dönemi", lakap: "", yil: "1918 – 1920", era: "cumhuriyet",
  status: "full", araDonem: true, baslik: "Milli Mücadele Hazırlık Dönemi (10 Soru)",
  ruh: "Mondros'un işgale açtığı yoldan Samsun'a, genelgeler (Amasya) ve kongrelere (Erzurum-Sivas), cemiyetlerden " +
       "Temsil Heyeti'nin ilk siyasi zaferlerine ve Amasya Görüşmeleri'ne uzanan örgütlenme döneminin testi.",
  quiz: [
    { q: "Mondros Ateşkes Antlaşması'nın 7. Maddesi (İtilaf Devletleri güvenliklerini tehdit eden bir durumda herhangi bir stratejik noktayı işgal edebilecek) İtilaf açısından hangi amaca hizmet etmiştir?",
      secenek: ["Anadolu'nun tamamını hukuki kılıfa uydurarak işgale hazır hale getirmek", "Sadece İstanbul Boğazı'nın güvenliğini sağlamak", "Ermenilere silah bırakma çağrısı yapmak", "Azınlıkları askere almak", "Sovyet Rusya ile sınır oluşturmak"], dogru: 0,
      aciklama: "7. Madde, İtilaf'ın Anadolu'da yapacağı her türlü işgale hukuki kılıf hazırlayan esnek bir maddedir." },
    { q: "Mondros'un 24. Maddesindeki “Vilayet-i Sitte'de kargaşa çıkarsa İtilaf işgal edebilecek” hükmünün TEMEL amacı nedir?",
      secenek: ["Bölgedeki petrolü korumak", "Doğu Anadolu'da bağımsız bir Ermenistan devleti kurulmasına zemin hazırlamak", "Rus işgalini önlemek", "Rusya'daki iç savaşa müdahale etmek", "Boğazları açmak"], dogru: 1,
      aciklama: "24. Madde doğrudan Büyük Ermenistan projesiyle ilişkilidir (Vilayet-i Sitte: Erzurum, Van, Elazığ, Diyarbakır, Bitlis, Sivas)." },
    { q: "Paris Barış Konferansı'nda İzmir'in İtalya yerine Yunanistan'a verilmesindeki TEMEL gerekçe nedir?",
      secenek: ["Yunanistan'ın İngiltere'ye borç vermesi", "İtalya'nın Akdeniz'de güçlü bir devlet olarak İngiliz menfaatlerini tehdit etmesini engellemek", "Yunan ordusunun dünyanın en güçlüsü olması", "Fransa'nın İzmir'de hak iddia etmesi", "Yunanistan'ın Akdeniz'e inmesini desteklemek"], dogru: 1,
      aciklama: "İngiltere, kendi sözünden çıkmayacak zayıf bir Yunanistan'ı, Akdeniz'de güçlenen bir İtalya'ya tercih etmiştir (İtilaf arasındaki ilk görüş ayrılığı)." },
    { q: "Aşağıdaki cemiyetlerden hangisi Türkler/Müslümanlar tarafından kurulmasına rağmen Milli Mücadele'ye karşı ZARARLI faaliyet göstermiştir?",
      secenek: ["Mavri Mira Cemiyeti", "Hınçak ve Taşnak Cemiyeti", "Pontus Rum Cemiyeti", "İngiliz Muhipleri / Sulh ve Selamet-i Osmaniye", "Kilikyalılar Cemiyeti"], dogru: 3,
      aciklama: "İngiliz Muhipleri, Sulh ve Selamet, Teali İslam gibi cemiyetler Türklerce kurulsa da kurtuluşu manda/hilafet çözümünde gördükleri için “Milli Varlığa Düşman” sınıfındadır." },
    { q: "İstanbul Hükümeti'nin Mustafa Kemal'i geniş yetkilerle Samsun'a göndermesindeki RESMİ amaç nedir?",
      secenek: ["Kurtuluş Savaşı'nı başlatmak ve TBMM'yi açmak", "Bölgedeki Rum-Türk çatışmalarını durdurup Türklerin elindeki silahları toplamak", "Amasya Genelgesi'ni yayımlamak", "Sivas Kongresi'ni toplamak", "İtilaf'a taarruz başlatmak"], dogru: 1,
      aciklama: "Resmi görev, direnişi bitirip halkın silahlarını toplamaktı; Mustafa Kemal ise bu görevi Milli Mücadele'yi örgütlemek için fırsata çevirmiştir." },
    { q: "Amasya Genelgesi'ndeki “Milletin bağımsızlığını yine milletin azim ve kararı kurtaracaktır” maddesi neyi simgeler?",
      secenek: ["Milli Mücadele'nin yöntemini ve ileride Ulusal Egemenliğe (rejim değişikliğine) geçileceğini", "Mandanın kesin reddini", "Osmanlı Hükümeti'nin görevine son verildiğini", "Misak-ı Milli sınırlarının çizildiğini", "Cumhuriyetin ilan edildiğini"], dogru: 0,
      aciklama: "“Milletin bağımsızlığı” amacı, “milletin azim ve kararı” yöntemi belirtir; İstanbul Hükümeti'nin anılmaması ilerideki ulusal egemenlik işaretidir." },
    { q: "Aşağıdakilerden hangisi Erzurum Kongresi'nde alınan kararlardan biri DEĞİLDİR?",
      secenek: ["Milli sınırlar içinde vatanın bir bütün olduğu", "Manda ve himayenin ilk kez reddedilmesi", "Kuvayımilliye'yi etkin, milli iradeyi hâkim kılmak", "Azınlıklara siyasi hâkimiyet verilemeyeceği", "Tüm cemiyetlerin ilk kez tek çatı altında birleştirilmesi"], dogru: 4,
      aciklama: "Cemiyetlerin tek çatı altında birleştirilmesi ilk kez Sivas Kongresi'nde gerçekleşmiştir; Erzurum'da bu yapılmamıştır." },
    { q: "Sivas Kongresi ile ilgili aşağıdakilerden hangisi YANLIŞTIR?",
      secenek: ["Manda ve himayenin kesin ve son olarak reddedilmesi", "Tüm yararlı cemiyetlerin “Anadolu ve Rumeli Müdafaa-i Hukuk Cemiyeti” altında birleştirilmesi", "Temsil Heyeti'nin Batı Cephesi Komutanlığı ataması yaparak ilk kez yürütme yetkisi kullanması", "Sevr Antlaşması'nın imzalanıp yürürlüğe girmesi", "Milli Mücadele'nin tek merkezden yönetilmesinin sağlanması"], dogru: 3,
      aciklama: "Sevr, Sivas Kongresi'nde değil 1920 Ağustos'unda imzalanmıştır." },
    { q: "Sivas Kongresi'nin, İstanbul ile telgraf bağlantısını keserek Damat Ferit Paşa Hükümeti'ni düşürmesi Temsil Heyeti için ne anlam ifade eder?",
      secenek: ["İstanbul Hükümeti'ne karşı kazanılan İLK SİYASİ BAŞARI", "TBMM'nin resmen açılması", "Askeri safhanın bitmesi", "Lozan'ın imzalanması", "Cumhuriyetin ilanı"], dogru: 0,
      aciklama: "Damat Ferit'in istifaya zorlanması, Temsil Heyeti'nin varlığını İstanbul'a kabul ettirdiğinin ilk siyasi zaferidir." },
    { q: "Amasya Görüşmeleri'nin (Salih Paşa - Mustafa Kemal) EN ÖNEMLİ sonucu nedir?",
      secenek: ["İstanbul Hükümeti'nin Temsil Heyeti'ni ve Milli Mücadele'yi HUKUKEN İLK KEZ tanıması", "Düzenli ordunun kurulması", "Sevr'in yırtılması", "Halifeliğin kaldırılması", "İtilaf'ın Anadolu'yu terk etmesi"], dogru: 0,
      aciklama: "İstanbul Hükümeti temsilcisinin Mustafa Kemal ile masaya oturup protokol imzalaması, Temsil Heyeti'nin hukuken tanındığının kanıtıdır." }
  ]
});

DONEM_TESTLERI.push({
  id: "tbmm", no: null, ad: "Mebusan Meclisi, Misak-ı Milli ve I. TBMM", lakap: "", yil: "1920", era: "cumhuriyet",
  status: "full", araDonem: true, baslik: "Mebusan Meclisi, Misak-ı Milli ve I. TBMM (10 Soru)",
  ruh: "Misak-ı Milli'nin kabulünden İstanbul'un işgaline, 23 Nisan 1920'de TBMM'nin açılışına, iç isyanlara karşı " +
       "alınan tedbirlere (İstiklal Mahkemeleri, Hıyanet-i Vataniye) ve Sevr'in reddine uzanan sürecin testi.",
  quiz: [
    { q: "Aşağıdakilerden hangisi Misak-ı Milli kararlarında doğrudan yer alan konulardan biri DEĞİLDİR?",
      secenek: ["Kapitülasyonların kaldırılması", "Azınlık haklarının komşu ülkelerdeki Müslüman azınlık hakları kadar olması", "Kars, Ardahan, Batum ve Batı Trakya için gerekirse halk oylaması yapılması", "Osmanlı borçları ve Boğazlar güvenliğinin çözüme kavuşturulması", "Ulusal Egemenlik ve Cumhuriyet idaresine derhal geçilmesi"], dogru: 4,
      aciklama: "Misak-ı Milli bağımsızlık ve sınırları vurgular; İtilaf'ı ürkütmemek için metinde rejim değişikliğinden (Cumhuriyet) asla bahsedilmemiştir." },
    { q: "İtilaf Devletleri'nin 16 Mart 1920'de İstanbul'u resmen işgal edip Mebusan Meclisi'ni kapatması neye zemin hazırlamıştır?",
      secenek: ["Anadolu'da Mustafa Kemal'in Ankara'da kurucu bir meclis (TBMM) açmasına", "Sevr'in derhal imzalanmasına", "Yunan ordusunun çekilmesine", "Damat Ferit'in Milli Mücadele'ye katılmasına", "Halifeliğin kaldırılmasına"], dogru: 0,
      aciklama: "İşgal, Mustafa Kemal'in eline tarihi bir fırsat vermiş; 23 Nisan 1920'de Ankara'da TBMM açılmıştır." },
    { q: "I. TBMM'nin özellikleriyle ilgili aşağıdakilerden hangisi YANLIŞTIR?",
      secenek: ["Kurucu Meclis olması ve 1921 Anayasası'nı kabul etmesi", "İhtilalci olması, İstanbul Hükümeti'nin otoritesini reddetmesi", "Meclis Hükümeti Sistemini benimsemesi", "Güçler Ayrılığı ilkesini sıkı sıkıya uygulaması", "Bünyesinde azınlık milletvekili bulundurmaması"], dogru: 3,
      aciklama: "I. TBMM güçler ayrılığını değil Güçler Birliği ilkesini benimsemiş; yasama, yürütme ve yargıyı kendi bünyesinde toplamıştır." },
    { q: "I. TBMM'nin çıkardığı İLK KANUN aşağıdakilerden hangisidir?",
      secenek: ["Hıyanet-i Vataniye Kanunu", "Ağnam Vergisi Kanunu", "Nisab-ı Müzakere Kanunu", "Men-i Müskirat Kanunu", "Firariler Kanunu"], dogru: 1,
      aciklama: "İlk kanun, bütçeye kaynak sağlamak için hayvan vergisini artıran Ağnam Vergisi Kanunu'dur (24 Nisan 1920)." },
    { q: "Aşağıdaki ayaklanmalardan hangisi doğrudan İstanbul Hükümeti ve İngilizlerin kışkırtmasıyla çıkarılan isyanlar grubundadır?",
      secenek: ["Ahmet Anzavur İsyanı - Kuva-yı İnzibatiye (Halifelik Ordusu)", "Demirci Efe - Çerkez Ethem", "Delibaş Mehmet - Çopur Musa", "Ermeni - Rum İsyanı", "Koçgiri - Milli Aşireti"], dogru: 0,
      aciklama: "Anzavur ve Kuva-yı İnzibatiye (Halifelik Ordusu), doğrudan İstanbul Hükümeti tarafından TBMM'yi yok etmek için çıkarılmıştır." },
    { q: "Aşağıdakilerden hangisi I. TBMM'nin ayaklanmalara karşı aldığı tedbirlerden biri DEĞİLDİR?",
      secenek: ["Hıyanet-i Vataniye Kanunu'nun çıkarılması", "İstiklal Mahkemeleri'nin kurulması", "Ankara Müftüsü Rıfat Börekçi'den destekleyici fetva alınması", "Anadolu Ajansı'nın kurulması", "Takrir-i Sükûn Kanunu'nun çıkarılması"], dogru: 4,
      aciklama: "Takrir-i Sükûn Kanunu I. TBMM döneminde değil; II. TBMM döneminde 1925'te Şeyh Said İsyanı üzerine çıkarılmıştır." },
    { q: "İstiklal Mahkemeleri hâkimlerinin milletvekilleri arasından seçilmesi TBMM'nin hangi yetkiyi doğrudan kullandığını gösterir?",
      secenek: ["Yasama Yetkisi", "Yürütme Yetkisi", "Yargı Yetkisi", "Diplomatik Yetki", "Senato Yetkisi"], dogru: 2,
      aciklama: "Milletvekillerinin hâkimlik yapıp karar vermesi, TBMM'nin Yargı Yetkisini doğrudan kendi eliyle kullandığının kanıtıdır." },
    { q: "Mustafa Kemal'in Bilecik Görüşmesi'ne gelen İstanbul heyetini Ankara'ya götürmesindeki TEMEL amaç nedir?",
      secenek: ["İstanbul Hükümeti'nin nüfuzunu kırmak", "“Anadolu'da TBMM'den başka otorite yoktur” mesajını verip kamuoyuna birleşme görüntüsü sunmak", "Sevr'i revize etmek", "Vahdettin'i Ankara'ya davet etmek", "İngilizlerle barış yapmak"], dogru: 1,
      aciklama: "Mustafa Kemal, İstanbul temsilcilerini Ankara'ya götürerek halka ve İtilaf'a “tek otorite biziz” imajı vermiştir." },
    { q: "Sevr Antlaşması'nın HUKUKEN GEÇERSİZ (ölü doğan) olmasının temel anayasal nedeni nedir?",
      secenek: ["Damat Ferit tarafından imzalanması", "Kanun-ı Esasi'ye göre antlaşmaların Mebusan Meclisi onayı gerektirmesi fakat meclisin kapalı olması", "Mustafa Kemal'in imzalamayı reddetmesi", "Vahdettin'in onaylamaması", "Fransızca kaleme alınması"], dogru: 1,
      aciklama: "Meclis işgalle kapatıldığı için antlaşma sadece Saltanat Şûrası'nca onaylanmış; meclis onayından geçmediği için hukuken ölü doğmuştur." },
    { q: "TBMM, Sevr'i imzalayan ve onaylayan Saltanat Şûrası üyeleri hakkında hangi kararı almıştır?",
      secenek: ["Sadece görevden alınmaları", "Hıyanet-i Vataniye Kanunu kapsamında “Vatan Haini” ilan edilip vatandaşlıktan çıkarılmaları", "Paris'e yeniden gönderilmeleri", "İngiltere'ye sığınmaları", "Sürgün edilmeleri"], dogru: 1,
      aciklama: "TBMM 19 Ağustos 1920'de Sevr'i imzalayan ve onaylayanları Vatan Haini ilan etmiş, İstiklal Mahkemeleri'nde gıyaben idam kararı vermiştir." }
  ]
});

DONEM_TESTLERI.push({
  id: "kurtulus_cephe", no: null, ad: "Kurtuluş Savaşı Cepheleri ve Diplomasi", lakap: "", yil: "1920 – 1922", era: "cumhuriyet",
  status: "full", araDonem: true, baslik: "Kurtuluş Savaşı Cepheleri ve Diplomasi (10 Soru)",
  ruh: "Doğu'da Gümrü'den Güney'de Kuva-yı Milliye'ye, Batı'da I.-II. İnönü, Sakarya ve Büyük Taarruz zaferlerine; " +
       "Moskova, Kars ve Ankara antlaşmalarından Mudanya Ateşkesi'ne uzanan askeri ve diplomatik safhanın testi.",
  quiz: [
    { q: "Kâzım Karabekir komutasında Ermenistan'a karşı kazanılan zaferle imzalanan Gümrü Antlaşması'nın TBMM açısından EN ÖNEMLİ sonucu nedir?",
      secenek: ["İtilaf'ın Anadolu'yu tamamen terk etmesi", "TBMM'nin imzaladığı İLK uluslararası antlaşma olması ve Ermenistan'ın TBMM'yi/Misak-ı Milli'yi tanıyan, Sevr'i reddeden ilk devlet olması", "Hatay'ın özerkleşmesi", "İngiltere ile esir mübadelesi", "Boğazların açılması"], dogru: 1,
      aciklama: "Gümrü, TBMM'nin imzaladığı ilk uluslararası antlaşmadır; Ermenistan TBMM'yi tanıyan ve Sevr'i reddeden ilk devlet olmuştur." },
    { q: "Güney Cephesi'nde sembolleşen Kuva-yı Milliye liderleri ve şehir eşleştirmelerinden hangisi YANLIŞTIR?",
      secenek: ["Şahin Bey - Gaziantep", "Sütçü İmam - Kahramanmaraş", "Ali Saip Bey - Şanlıurfa", "Yörük Ali Efe - Maraş", "Tufan Bey - Adana/Kilikya"], dogru: 3,
      aciklama: "Yörük Ali Efe, Güney Cephesi'nde değil; Batı Cephesi'nde (Aydın/Ege) Yunanlılara karşı mücadele etmiş bir Kuva-yı Milliye liderdir." },
    { q: "Aşağıdakilerden hangisi I. İnönü Zaferi'nin sonuçları arasında YER ALMAZ?",
      secenek: ["Teşkilat-ı Esasiye (1921 Anayasası)'nın kabulü", "Afganistan ile Dostluk Antlaşması", "Londra Konferansı'nın toplanması", "İstiklal Marşı'nın kabulü", "Mudanya Ateşkes Antlaşması'nın imzalanması"], dogru: 4,
      aciklama: "I. İnönü'nün sonuçları TALİM diye kodlanır (Teşkilat-ı Esasiye, Afganistan, Londra, İstiklal Marşı, Moskova). Mudanya ise savaşın en sonunda (1922) imzalanmıştır." },
    { q: "Londra Konferansı'nda İstanbul temsilcisi Tevfik Paşa'nın sözü TBMM delegesine bırakması İtilaf'ın hangi planını boşa çıkarmıştır?",
      secenek: ["Yunan ordusuna süre kazandırma", "İki hükümet arasında görüş ayrılığı çıkarıp Türk tarafını birbirine düşürme", "Boğazları komisyona devretme", "Rusya ile TBMM'nin arasını açma", "Saltanatı kaldırma"], dogru: 1,
      aciklama: "Tevfik Paşa'nın milli duruşu, İtilaf'ın Türk tarafını bölme stratejisini çökertmiş ve TBMM'nin meşruiyetini pekiştirmiştir." },
    { q: "Sovyet Rusya ile imzalanan Moskova Antlaşması'nda Batum'un Gürcistan'a (Sovyetlere) bırakılması Milli Mücadele açısından ne anlam ifade eder?",
      secenek: ["Misak-ı Milli'den verilen İLK TAVİZ olması", "Doğu Cephesi'nin yeniden açılması", "Ermenistan'ın Sevr'i kabul etmesi", "Kapitülasyonların Rusya'ya geri getirilmesi", "TBMM'nin ilk kez tanınması"], dogru: 0,
      aciklama: "Moskova ile Sovyet desteği ve kapitülasyonların kaldırılması kabul ettirilmiş; ancak Batum'un Gürcistan'a bırakılması Misak-ı Milli'den verilen ilk tavizdir." },
    { q: "Kütahya-Eskişehir yenilgisiyle ordu Sakarya'nın doğusuna çekilirken Mustafa Kemal'in Ankara'da I. Maarif Kongresi'ni toplaması neyin göstergesidir?",
      secenek: ["Eğitime, kültüre ve geleceğin bağımsız Türkiye'sine verilen büyük önemin", "Savaşın tamamen bittiğinin", "Subay okulunun kapatıldığının", "Yabancı okulların devletleştirildiğinin", "Yeni bir alfabeye geçileceğinin"], dogru: 0,
      aciklama: "En umutsuz savaş ortamında bile eğitim kongresi toplamak, Mustafa Kemal'in cehaletle mücadeleyi düşmanla mücadele kadar önemsediğini gösterir." },
    { q: "Sakarya öncesi Başkomutanlık yetkisi alan Mustafa Kemal'in yayımladığı Tekâlif-i Millîye emirlerinin sorunsuz uygulanması için hangi kurum görevlendirilmiştir?",
      secenek: ["Düzenli Ordu Birlikleri", "İstiklal Mahkemeleri", "Danıştay", "Divan-ı Hümayun", "Jandarma Teşkilatı"], dogru: 1,
      aciklama: "Tekâlif-i Millîye emirlerine uyulmasını sağlamak ve kaçakları engellemek için bölge bölge İstiklal Mahkemeleri görev yapmıştır." },
    { q: "“Hattı müdafaa yoktur, sathı müdafaa vardır…” sözüyle özdeşleşen Sakarya Zaferi'nin uluslararası DİPLOMATİK sonuçlarından biri hangisidir?",
      secenek: ["Kars Antlaşması ve Fransa ile Ankara Antlaşması'nın imzalanması", "Lozan'ın imzalanması", "Gümrü'nün iptali", "Londra Konferansı'nın toplanması", "İngiltere'nin Sevr'i uygulaması"], dogru: 0,
      aciklama: "Sakarya sonrası Doğu sınırı Kars Antlaşması ile kesinleşmiş; Fransa 1921 Ankara Antlaşması ile Güney Cephesi'ni kapatıp TBMM'yi tanıyan ilk İtilaf devleti olmuştur." },
    { q: "Büyük Taarruz sonrası Türk ordusunun Boğazlar/İstanbul üzerine yürümesiyle İngiltere ile savaş riskinin doğduğu olay hangisidir?",
      secenek: ["Menemen Olayı", "Çanakkale (Çanak) Krizi", "Boğazlar Rejimi Krizi", "Şeyh Said İsyanı", "Bursa Nutku Krizi"], dogru: 1,
      aciklama: "Çanakkale Krizi (Chanak), İngiltere ile savaş riski doğurmuş; Lloyd George Hükümeti'nin istifasına ve Mudanya masasına oturulmasına yol açmıştır." },
    { q: "Mudanya Ateşkes Antlaşması'ndaki “Doğu Trakya, İstanbul ve Boğazlar SAVAŞILMADAN TBMM yönetimine devredilecektir” maddesi neyin göstergesidir?",
      secenek: ["Osmanlı Devleti'nin hukuken sona erdiğinin ve diplomatik yolla büyük toprak kazanıldığının", "Sevr'in aynen uygulanacağının", "İngiltere'nin yeni cephe açacağının", "Yunanistan'ın İstanbul'a yerleştiğinin", "TBMM'nin ateşkesi reddettiğinin"], dogru: 0,
      aciklama: "İstanbul ve Boğazlar'ın TBMM'ye devri Osmanlı'nın hukuken yok sayıldığını; Doğu Trakya'nın tek kurşun atılmadan kazanılması diplomatik zaferi gösterir." }
  ]
});

DONEM_TESTLERI.push({
  id: "lozan_devrim", no: null, ad: "Lozan, Devrimler ve İç Politika", lakap: "", yil: "1923 – 1930", era: "cumhuriyet",
  status: "full", araDonem: true, baslik: "Lozan Barış Antlaşması, Devrimler ve İç Politika (10 Soru)",
  ruh: "Lozan'da çözülen ve çözülemeyen meselelerden (Musul) Saltanatın kaldırılmasına, Cumhuriyet'in ilanı ve 3 Mart 1924 " +
       "inkılaplarına, ilk muhalefet partileri ile Şeyh Said ve Menemen olaylarına uzanan iç politikanın testi.",
  quiz: [
    { q: "Lozan'da karara bağlanamayıp TBMM ile İngiltere arasında ikili görüşmelere bırakılan tek sınır meselesi hangisidir?",
      secenek: ["Suriye Sınırı (Hatay)", "Irak Sınırı (Musul Meselesi)", "Batı Trakya / Yunanistan Sınırı", "Gürcistan / Doğu Sınırı", "Bulgaristan Sınırı"], dogru: 1,
      aciklama: "Musul, İngiltere'nin bölgedeki petrolü bırakmak istememesi nedeniyle Lozan'da çözülememiş, sonraya (Haliç Konferansı'na) bırakılmıştır." },
    { q: "Yunanistan, Anadolu'daki tahribat nedeniyle Türkiye'ye savaş tazminatı olarak hangi bölgeyi devretmiştir?",
      secenek: ["İmroz ve Bozcaada", "Karaağaç ve çevresi", "Rodos ve On İki Ada", "Selanik ve Dedeağaç", "Meis Adası"], dogru: 1,
      aciklama: "Nakit ödeyecek gücü olmayan Yunanistan, Edirne yakınlarındaki Karaağaç'ı savaş tazminatı olarak Türkiye'ye devretmiştir." },
    { q: "İtilaf'ın Lozan'a hem İstanbul Hükümeti'ni hem TBMM'yi çağırıp ikilik çıkarma planını engellemek için 1 Kasım 1922'de alınan karar hangisidir?",
      secenek: ["Halifeliğin Kaldırılması", "Saltanatın Kaldırılması", "Cumhuriyet'in İlanı", "Meclis Hükümeti Yapılması", "Tevhid-i Tedrisat"], dogru: 1,
      aciklama: "İtilaf'ın Türk tarafını bölmesini önlemek için 1 Kasım 1922'de Saltanat kaldırılmış, böylece Osmanlı Devleti resmen sona ermiştir." },
    { q: "Aşağıdakilerden hangisi II. TBMM'nin (İnkılap Meclisi) gerçekleştirdiği İLK önemli düzenlemelerden biridir?",
      secenek: ["Amasya Genelgesi'nin yayımlanması", "Misak-ı Milli'nin kabulü", "Ankara'nın başkent ilan edilmesi (13 Ekim 1923)", "Kanun-ı Esasi'nin yürürlüğe girmesi", "Hıyanet-i Vataniye Kanunu'nun çıkarılması"], dogru: 2,
      aciklama: "13 Ekim 1923'te Ankara resmen başkent olmuştur; bu adım Cumhuriyet'in ilanından öncedir." },
    { q: "Ali Fethi Okyar'ın istifasıyla ortaya çıkan hükümet bunalımı sonrası Cumhuriyet'in ilanıyla birlikte hangi yönetim sistemine geçilmiştir?",
      secenek: ["Meclis Hükümeti Sistemi", "Kabine Sistemi", "Başkanlık Sistemi", "Meşrutiyet Sistemi", "Federasyon Sistemi"], dogru: 1,
      aciklama: "Cumhuriyet'in ilanıyla Kabine Sistemi'ne geçilmiştir; ilk Cumhurbaşkanı Mustafa Kemal, ilk Başbakan İsmet Paşa olmuştur." },
    { q: "Aşağıdakilerden hangisi 3 Mart 1924'te çıkarılan kanunlarla yapılan düzenlemelerden biri DEĞİLDİR?",
      secenek: ["Halifeliğin Kaldırılması", "Şer'iye ve Evkaf Vekâletinin kaldırılması", "Erkân-ı Harbiye-i Umumiye Vekâletinin kaldırılması", "Tevhid-i Tedrisat Kanunu'nun kabulü", "Soyadı Kanunu'nun kabulü"], dogru: 4,
      aciklama: "Soyadı Kanunu 3 Mart 1924'te değil, 1934 yılında kabul edilmiştir." },
    { q: "1924'te Kâzım Karabekir, Rauf Orbay ve arkadaşlarının kurduğu ilk muhalefet partisi hangisidir?",
      secenek: ["Serbest Cumhuriyet Fırkası", "Terakkiperver Cumhuriyet Fırkası", "Ahali Cumhuriyet Fırkası", "Demokrat Parti", "Müdafaa-i Hukuk Cemiyeti"], dogru: 1,
      aciklama: "TCF (Terakkiperver Cumhuriyet Fırkası) ilk muhalefet partisidir; tüzüğündeki dine saygı maddesi rejim karşıtlarının partiye sızmasına yol açmıştır." },
    { q: "1925 Şeyh Said İsyanı'nı bastırmak için kurulan İsmet Paşa Hükümeti'nin çıkardığı kanun hangisidir?",
      secenek: ["Hıyanet-i Vataniye Kanunu", "Takrir-i Sükûn Kanunu", "Teşvik-i Sanayi Kanunu", "Men-i İsrafat Kanunu", "Müzakere Kanunu"], dogru: 1,
      aciklama: "1925 Takrir-i Sükûn Kanunu ile hükümete geniş yetkiler verilmiş, İstiklal Mahkemeleri yeniden kurulmuş, isyan bastırılmış ve TCF kapatılmıştır." },
    { q: "1930'da kurulan Serbest Cumhuriyet Fırkası (SCF) ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
      secenek: ["Şeyh Said İsyanı yüzünden devletçe kapatıldığı", "Rejim karşıtlarının doluşması üzerine kurucusu Ali Fethi Okyar tarafından KENDİ İRADESİYLE feshedildiği", "Menemen Olayı'nın partisi olduğu", "Yıllarca iktidar partisi olduğu", "Halifeliğin geri getirilmesini savunduğu"], dogru: 1,
      aciklama: "Ali Fethi Okyar, partisinin rejim karşıtlarının eline geçtiğini görünce partiyi kendi isteğiyle feshetmiştir." },
    { q: "Menemen'de Derviş Mehmet ve müritlerinin Asteğmen Kubilay'ı şehit ettiği olayın Türk siyasi tarihindeki EN ÖNEMLİ sonucu nedir?",
      secenek: ["Çok partili hayat denemelerinin bir süre (1945'e kadar) askıya alınması", "Halifeliğin tekrar kurulması", "Şeyh Said'in tutuklanması", "Lozan'ın revize edilmesi", "Meclis Hükümeti'ne dönülmesi"], dogru: 0,
      aciklama: "Menemen Olayı, toplumun henüz çok partili hayata hazır olmadığını göstermiş ve bu denemeler II. Dünya Savaşı sonrasına (1945) kadar askıya alınmıştır." }
  ]
});

DONEM_TESTLERI.push({
  id: "ilke_inkilap", no: null, ad: "Atatürk İlke ve İnkılapları", lakap: "", yil: "1922 – 1938", era: "cumhuriyet",
  status: "full", araDonem: true, baslik: "Atatürk İlke ve İnkılapları (10 Soru)",
  ruh: "Cumhuriyetçilik, Milliyetçilik, Halkçılık, Devletçilik, Laiklik ve İnkılapçılık ilkeleri ekseninde; Medeni Kanun'dan " +
       "Tevhid-i Tedrisat'a, İzmir İktisat Kongresi'nden ilk bankalara uzanan inkılapların testi.",
  quiz: [
    { q: "Aşağıdaki inkılaplardan hangisi DOĞRUDAN “Cumhuriyetçilik” ilkesi doğrultusunda gerçekleştirilmiştir?",
      secenek: ["Türk Harf İnkılabı", "Kadınlara Siyasi Haklar (seçme-seçilme) verilmesi", "Miladi Takvim'in kabulü", "Kılık-Kıyafet İnkılabı", "Metrik sisteme geçilmesi"], dogru: 1,
      aciklama: "Seçim, oy hakkı, temsil ve meclis doğrudan Cumhuriyetçilik ile ilgilidir; kadınlara seçme-seçilme hakkı hem Cumhuriyetçilik hem Halkçılık kapsamındadır." },
    { q: "Aşağıdakilerden hangisi “Milliyetçilik” ilkesi doğrultusunda atılan adımlardan biri DEĞİLDİR?",
      secenek: ["Türk Tarih Kurumu ve Türk Dil Kurumu'nun kurulması", "Kabotaj Kanunu'nun kabulü", "Aşar (Öşür) Vergisi'nin kaldırılması", "Kapitülasyonların kaldırılması", "Merkez Bankası'nın kurulması"], dogru: 2,
      aciklama: "Aşar Vergisi'nin kaldırılması köylünün yükünü hafiflettiği ve sosyal eşitlik sağladığı için doğrudan Halkçılık ilkesiyle ilgilidir." },
    { q: "Aşağıdaki gelişmelerden hangisi DOĞRUDAN “Halkçılık” ilkesiyle bağdaştırılamaz?",
      secenek: ["Soyadı Kanunu ile unvanların (Ağa, Paşa, Hoca) yasaklanması", "Millet Mektepleri'nin açılması", "Kadınlara medeni ve siyasi hakların verilmesi", "Reji İdaresi'nin (Tütün Tekeli) yabancılardan satın alınıp millileştirilmesi", "Ayrıcalık belirten nişan ve madalyaların kaldırılması"], dogru: 3,
      aciklama: "Reji İdaresi'nin millileştirilmesi yabancı kontrolünü bitirdiği için Halkçılık değil Milliyetçilik ilkesine örnektir." },
    { q: "1927 Teşvik-i Sanayi Kanunu'nun özel sektörün yetersizliği yüzünden başarısız olması üzerine 1933'ten itibaren zorunlu olarak hangi iktisadi modele geçilmiştir?",
      secenek: ["Serbest Piyasa Ekonomisi (Liberalizm)", "I. Beş Yıllık Sanayi Planı ve Devletçilik", "Merkantilizm", "Karma Bütçe Modeli", "Dışa Bağımlı İthalat Modeli"], dogru: 1,
      aciklama: "Özel teşebbüs yetersiz kalınca devlet bizzat fabrika kurmak üzere I. Beş Yıllık Sanayi Planı'nı uygulayarak Devletçilik modeline geçmiştir." },
    { q: "Türkiye Cumhuriyeti Anayasası'ndan “Devletin dini İslam'dır” maddesi hangi yıl yapılan değişiklikle çıkarılmıştır?",
      secenek: ["1921", "1924", "1928", "1934", "1937"], dogru: 2,
      aciklama: "1928 değişikliği ile “Devletin dini İslam'dır” ibaresi anayasadan çıkarılmıştır (Laiklik ilkesinin anayasaya girmesi ise 1937'dir)." },
    { q: "Aşağıdaki düzenlemelerden hangisinde “Batı ile ticari, ekonomik ve idari entegrasyonu sağlamak” temel amaçtır?",
      secenek: ["Miladi Takvim, uluslararası saat, ölçü-tartı birimleri ve hafta tatilinin değiştirilmesi", "Tevhid-i Tedrisat'ın kaldırılması", "Şer'iye ve Evkaf Vekâletinin kaldırılması", "Kabotaj Kanunu", "Teşvik-i Sanayi Kanunu"], dogru: 0,
      aciklama: "Takvim, saat, rakam, ölçü ve hafta tatilinin değiştirilmesinin ana amacı, Batı ile uluslararası ticaretteki uyumsuzlukları gidermektir." },
    { q: "Aşağıdakilerden hangisi 1926 Türk Medeni Kanunu ile kadınlara sağlanan haklardan biri DEĞİLDİR?",
      secenek: ["Mahkemelerde şahitlikte eşitlik", "Miras paylaşımında eşitlik", "İstediği mesleğe girebilme hakkı", "Tek eşlilik ve resmi nikâh zorunluluğu", "Milletvekili seçme ve seçilme hakkı"], dogru: 4,
      aciklama: "Medeni Kanun sosyal/hukuki/ekonomik haklar vermiştir; kadınlara siyasi haklar (Belediye-Muhtarlık-Vekillik) 1930, 1933 ve 1934'te ayrıca verilmiştir." },
    { q: "3 Mart 1924 Tevhid-i Tedrisat (Öğretim Birliği) Kanunu'nun EN ÖNEMLİ sonucu nedir?",
      secenek: ["Yabancı okulların tamamının kapatılması", "Eğitimdeki ikiliğin sona erdirilerek ulusal ve tek bir eğitim sistemine geçilmesi", "Latin Harfleri'ne geçilmesi", "Öğretmenlik reformunun yapılması", "Köy Enstitüleri'nin kurulması"], dogru: 1,
      aciklama: "Medreseler ve farklı müfredatlı kurumlar yüzünden oluşan eğitimdeki ikilik bitirilmiş, eğitim millî ve tek çatı altında toplanmıştır." },
    { q: "Lozan görüşmelerinin kesintiye uğradığı dönemde toplanan İzmir İktisat Kongresi'nde kabul edilen “Misak-ı İktisadi” ile benimsenen temel ekonomik vizyon nedir?",
      secenek: ["Yabancı sermayeye ülkeyi tamamen kapatmak", "Kendi kendine yeten, millî sanayisini kuran ve yabancı tekelinden kurtulmuş bağımsız bir ekonomi oluşturmak", "Sadece tarıma dayalı üretim modeli", "Osmanlı borçlarını ödememek", "Sovyet modelini birebir uygulamak"], dogru: 1,
      aciklama: "İzmir İktisat Kongresi'nde kabul edilen Misak-ı İktisadi ile yabancı tekelciliğine son verip millî ve bağımsız bir ekonomi kurulması amaçlanmıştır." },
    { q: "Celal Bayar'ın genel müdürlüğünde 1924'te kurulan, Cumhuriyet'in İLK ÖZEL BANKASI olan ve ticaret erbabına kredi sağlayan banka hangisidir?",
      secenek: ["Etibank", "Sümerbank", "Türkiye İş Bankası", "Ziraat Bankası", "Sanayi ve Maadin Bankası"], dogru: 2,
      aciklama: "Türkiye İş Bankası, Celal Bayar'ın genel müdürlüğünde 1924'te kurulan Cumhuriyet döneminin ilk özel bankasıdır." }
  ]
});

DONEM_TESTLERI.push({
  id: "dis_politika", no: null, ad: "Atatürk Dönemi Türk Dış Politikası", lakap: "", yil: "1923 – 1938", era: "cumhuriyet",
  status: "full", araDonem: true, baslik: "Atatürk Dönemi Türk Dış Politikası (10 Soru)",
  ruh: "Yabancı Okullar ve Musul meselelerinden Nüfus Mübadelesi ve Milletler Cemiyeti'ne, Balkan Antantı ve Montrö'den " +
       "Sadabat Paktı ve Hatay'ın anavatana katılışına uzanan “Yurtta sulh, cihanda sulh” diplomasisinin testi.",
  quiz: [
    { q: "Aşağıdakilerden hangisi 1923-1930 arasında Türkiye'nin dış politikasını meşgul eden konulardan biri DEĞİLDİR?",
      secenek: ["Yabancı Okullar Meselesi", "Osmanlı Borçları Meselesi", "Türkiye-Yunanistan Nüfus Mübadelesi", "Musul (Irak Sınırı) Meselesi", "Hatay'ın Türkiye'ye Katılması"], dogru: 4,
      aciklama: "Hatay'ın anavatana katılması 1936-1939 arasında gerçekleşmiştir; diğer şıklar 1923-1930'da Lozan'dan arta kalan pürüzlerdir." },
    { q: "Türkiye'nin Yabancı Okullar meselesinde Fransa ve Papalık'ın konuyu uluslararası konferansa taşıma teklifini “Bu bizim iç meselemizdir” diyerek reddetmesi neyi kanıtlar?",
      secenek: ["Dış politikada bağımsızlık ve egemenlik haklarından taviz verilmediğini", "Fransa ile savaşa girildiğini", "Tüm yabancı okulların kapatıldığını", "Milletler Cemiyeti'nden ayrıldığını", "Batı ile ilişkilerin koparıldığını"], dogru: 0,
      aciklama: "Türkiye, Yabancı Okullar meselesini iç egemenlik hakkı sayarak uluslararası müdahaleyi reddetmiş ve kurallara uymayan okulları kapatmıştır." },
    { q: "5 Haziran 1926 Ankara Antlaşması ile Musul'un İngiltere idaresindeki Irak'a bırakılması Milli Mücadele açısından ne anlam taşır?",
      secenek: ["Doğu Trakya'nın kaybı", "Misak-ı Milli'den verilen tavizlerden biri olması", "Hatay'ın Fransızlara verilmesi", "Boğazlar komisyonunun kaldırılması", "Kapitülasyonların geri gelmesi"], dogru: 1,
      aciklama: "Batum ve Hatay'dan sonra Musul'un da kaybı, Misak-ı Milli'den verilen tavizlerden biri olmuştur." },
    { q: "İstanbul'daki Rumlar ile Batı Trakya Türklerinin “yerleşik” (etabli) sayılması konusundaki krizi çözerek Türk-Yunan dostluğunu başlatan 1930 antlaşması hangisidir?",
      secenek: ["Atina Antlaşması", "Ankara Sözleşmesi", "Bükreş Antlaşması", "Londra Antlaşması", "Cenevre Protokolü"], dogru: 1,
      aciklama: "1930 Ankara Sözleşmesi ile etabli sorunu çözülmüş ve 1954 Kıbrıs krizine kadar sürecek Türk-Yunan dostluğu başlamıştır." },
    { q: "Türkiye'nin Milletler Cemiyeti'ne (1932) girmesini BİZZAT TEKLİF EDEN ve destekleyen devletler hangi seçenekte doğru verilmiştir?",
      secenek: ["İspanya (teklif eden) - Yunanistan (destekleyen)", "İngiltere - Fransa", "Sovyet Rusya - Almanya", "İtalya - Japonya", "ABD - Polonya"], dogru: 0,
      aciklama: "Türkiye, barışçıl politikaları nedeniyle İspanya'nın teklifi ve Yunanistan'ın desteğiyle 1932'de Milletler Cemiyeti'ne davetle üye olmuştur." },
    { q: "1934'te İtalya ve Almanya tehdidine karşı imzalanan Balkan Antantı'na yayılmacı politikaları nedeniyle KATILMAYAN iki Balkan devleti hangisidir?",
      secenek: ["Bulgaristan ve Arnavutluk", "Sırbistan ve Hırvatistan", "Polonya ve Çekoslovakya", "Macaristan ve Avusturya", "İtalya ve İspanya"], dogru: 0,
      aciklama: "Bulgaristan (toprak talebi) ve Arnavutluk (İtalya nüfuzu) katılmamıştır. Katılanlar TAYYAR: Türkiye, Yunanistan, Yugoslavya, Romanya." },
    { q: "Montrö Boğazlar Sözleşmesi (1936) ile elde edilen EN ÖNEMLİ diplomatik/askeri başarı nedir?",
      secenek: ["Boğazlar Komisyonu'nun kaldırılıp tüm hakların ve asker bulundurma yetkisinin TÜRKİYE'YE devredilmesi", "Boğazların tüm gemilere kapatılması", "Boğazların idaresinin BM'ye devri", "Rusya'nın Karadeniz donanmasının feshi", "Çanakkale Boğazı'nın kiralanması"], dogru: 0,
      aciklama: "Montrö ile uluslararası komisyon kaldırılmış, Türkiye Boğazlar bölgesine asker sokma hakkı kazanmış ve tam egemenlik sağlamıştır." },
    { q: "8 Temmuz 1937'de Tahran'daki Sadabat Sarayı'nda imzalanan Sadabat Paktı'na aşağıdaki ülkelerden hangisi YER ALMAZ?",
      secenek: ["Türkiye", "İran", "Irak", "Afganistan", "Suriye"], dogru: 4,
      aciklama: "Suriye o dönemde Fransa mandasında olduğu ve Türkiye ile Hatay sorunu bulunduğu için Sadabat Paktı'na katılamamıştır." },
    { q: "Milletler Cemiyeti'nin, Hatay'ın özerk olması gerektiğini ve nüfusun çoğunluğunun Türk olduğunu belirten uluslararası raporu hangisidir?",
      secenek: ["Bristol Raporu", "Milne Raporu", "Sandler Raporu", "King-Crane Raporu", "Harbord Raporu"], dogru: 2,
      aciklama: "Sandler Raporu, Hatay'ın (Sancak) özerkliğini teyit eden ve Hatay Devleti'nin kurulmasına giden yolu açan uluslararası rapordur." },
    { q: "Bağımsız Hatay Cumhuriyeti'nin (Cumhurbaşkanı Tayfur Sökmen) Millet Meclisi'nin oy birliğiyle Türkiye'ye katılma kararı alıp bir il haline geldiği yıl hangisidir?",
      secenek: ["1936", "1937", "1938", "1939", "1940"], dogru: 3,
      aciklama: "Hatay Meclisi 23 Haziran 1939'da Türkiye'ye katılma kararı almış, 7 Temmuz 1939'da çıkan kanunla Hatay Türkiye'nin bir ili olmuştur (Atatürk bunu göremeden 1938'de vefat etmiştir)." }
  ]
});

DONEM_TESTLERI.push({
  id: "cagdas", no: null, ad: "Çağdaş Türk ve Dünya Tarihi", lakap: "", yil: "1917 – 1991", era: "cumhuriyet",
  status: "full", araDonem: true, baslik: "Çağdaş Türk ve Dünya Tarihi (10 Soru)",
  ruh: "Basmacı Hareketi ve Ceditçilikten iki savaş arası akımlara, II. Dünya Savaşı ve Türkiye'nin denge politikasından " +
       "Soğuk Savaş, Kore, NATO, Küba Krizi, Kıbrıs (TMT) ve dağılan SSCB sonrası Türk Cumhuriyetleri'ne uzanan testi.",
  quiz: [
    { q: "İsmail Gaspıralı önderliğinde “Dilde, fikirde, işte birlik” sloganıyla Rusya Türklerinin milli bilincini uyandıran ve Basmacı Hareketi'ne fikri zemin hazırlayan akım hangisidir?",
      secenek: ["Panslavizm", "Ceditçilik (Usûl-i Cedit)", "Avrasyacılık", "Turancılık", "Batıcılık"], dogru: 1,
      aciklama: "Gaspıralı'nın Kırım'da başlattığı, eğitim ve düşüncede modernleşmeyi hedefleyen Ceditçilik, Türk dünyasında milli bilincin uyanmasında en önemli rolü oynamıştır." },
    { q: "İki savaş arası dönemle ilgili aşağıdaki kavram-devlet eşleştirmelerinden hangisi YANLIŞTIR?",
      secenek: ["Mare Nostrum (Bizim Deniz) → İtalya", "Lebensraum (Hayat Sahası) → Almanya", "Yatıştırma (Appeasement) → İngiltere", "Kara Perşembe / 1929 Bunalımı → ABD", "Meiji Restorasyonu → Sovyet Rusya"], dogru: 4,
      aciklama: "Meiji Restorasyonu 19. yüzyıl sonunda Japonya'da başlayan modernleşme hamlesidir; Rusya ile ilgisi yoktur." },
    { q: "Türkiye'nin II. Dünya Savaşı'nda savaş dışı kaldığı halde aldığı ekonomik önlemlerden biri DEĞİLDİR?",
      secenek: ["Milli Korunma Kanunu'nun çıkarılması", "Varlık Vergisi ve Toprak Mahsulleri Vergisi", "Ekmek Karnesi uygulaması", "Köy Enstitülerinin kurulması", "Marshall Planı kapsamında ABD'den yardım alınması"], dogru: 4,
      aciklama: "Marshall Planı savaş sonrası (1947+) Soğuk Savaş döneminde uygulanmıştır; savaş içi bir önlem değildir." },
    { q: "Türkiye'nin Birleşmiş Milletler kurucu üyesi olabilmesi için 1945 Yalta Konferansı'nda konulan temel şart nedir?",
      secenek: ["Kore Savaşı'na asker göndermek", "NATO'ya başvurmak", "1 Mart 1945'e kadar Almanya ve Japonya'ya savaş ilan etmiş olmak", "Çok partili hayata geçmek", "Boğazları ABD'ye açmak"], dogru: 2,
      aciklama: "Yalta kararlarına göre BM kurucu üyesi olmak için 1 Mart 1945'e kadar Mihver'e savaş ilan etme şartı vardı; Türkiye de bu doğrultuda ilan etmiştir." },
    { q: "Soğuk Savaş'ta NATO'ya karşı Doğu Bloku (Sovyetler) tarafından kurulan askeri ittifak hangisidir?",
      secenek: ["Kominform", "Comecon", "Varşova Paktı", "SEATO", "CENTO"], dogru: 2,
      aciklama: "Doğu Bloku'nun askeri kanadı Varşova Paktı'dır (Kominform siyasi, Comecon ekonomik örgütlenmedir)." },
    { q: "Türkiye'nin NATO'ya kabul edilmesinde EN ETKİLİ olan dış gelişme hangisidir?",
      secenek: ["Kıbrıs Barış Harekâtı", "1950 Kore Savaşı'na asker gönderilmesi", "Bağdat Paktı'nın kurulması", "Balkan Paktı", "Süveyş Krizi'nde tarafsız kalınması"], dogru: 1,
      aciklama: "Kore Savaşı'na asker gönderilmesi ve Kunu-ri'deki başarı, Türkiye'nin Yunanistan ile birlikte 1952'de NATO'ya girmesini sağlamıştır." },
    { q: "ABD ve SSCB'yi ilk kez nükleer savaşın eşiğine getiren ve Türkiye'deki Jüpiter füzelerinin de konusu olduğu olay hangisidir?",
      secenek: ["Vietnam Savaşı", "Küba Füze Krizi (1962)", "Berlin Duvarı'nın örülmesi", "Yom Kippur Savaşı", "Afganistan'ın işgali"], dogru: 1,
      aciklama: "Küba Füze Krizi'nde ABD Türkiye'deki Jüpiter füzelerini, SSCB de Küba'daki füzelerini sökme kararı almış, nükleer felaketin eşiğinden dönülmüştür." },
    { q: "Yunanistan'ın Enosis hedefi ve EOKA terör örgütüne karşı Kıbrıs Türklerini korumak için Dr. Fazıl Küçük ve Rauf Denktaş önderliğinde kurulan direniş örgütü hangisidir?",
      secenek: ["Türk Mukavemet Teşkilatı (TMT)", "ASALA", "Volkan Örgütü", "Kara Çete", "Milli Kongre"], dogru: 0,
      aciklama: "EOKA saldırılarına karşı 1958'de Türk Mukavemet Teşkilatı (TMT) kurulmuştur (Rauf Denktaş sonradan KKTC'nin ilk cumhurbaşkanı olmuştur)." },
    { q: "Bağlantısızlar Hareketi'nin temelinin atıldığı ve kurucu ilkelerinin belirlendiği 1955 tarihli konferans hangisidir?",
      secenek: ["Bandung Konferansı", "Yalta Konferansı", "Potsdam Konferansı", "Helsinki Nihai Senedi", "San Francisco Konferansı"], dogru: 0,
      aciklama: "Endonezya'daki Bandung Konferansı (1955); Tito, Nasır ve Nehru önderliğinde Bağlantısızlar Hareketi'nin doğuş noktasıdır." },
    { q: "1991'de SSCB dağılınca bağımsızlığını ilan eden Türk Cumhuriyetleri ve kurucu cumhurbaşkanları eşleştirmelerinden hangisi YANLIŞTIR?",
      secenek: ["Azerbaycan → Ebulfeyz Elçibey", "Kazakistan → Nursultan Nazarbayev", "Özbekistan → İslam Kerimov", "Türkmenistan → Saparmurat Niyazov", "Kırgızistan → İlham Aliyev"], dogru: 4,
      aciklama: "Kırgızistan'ın ilk cumhurbaşkanı Askar Akayev'dir; İlham Aliyev ise Azerbaycan'ın (Haydar Aliyev'den sonraki) cumhurbaşkanıdır." }
  ]
});

/* Dönem testi düğümlerini SULTANS'a ekle (var olanları tekrar ekleme) */
if (typeof SULTANS !== "undefined") {
  DONEM_TESTLERI.forEach(function (d) {
    if (!SULTANS.some(function (x) { return x.id === d.id; })) SULTANS.push(d);
  });
}


/* ————— 3) ATATÜRK DÖNEMİ — TAM İÇERİK (metin + görsel bağlam) —————
   Cumhuriyet dönemi düğümleri artık salt test değil; olaylar, inkılaplar, ÖSYM köşesi ve
   görsellerle tam bir konu sayfasıdır. Görseller images/ klasörüne eklendiğinde otomatik görünür. */
var ATA_ICERIK = {
  mm_hazirlik: {
    baslik: "İşgalden örgütlü direnişe (1918–1920)",
    foto: "images/ataturk.jpg",
    savasBaslik: "📌 Genelgeler & Kongreler",
    savaslar: [
      { ad: "Mondros Ateşkes Antlaşması", yil: "30 Ekim 1918",
        kime: "İtilaf Devletleri (Osmanlı adına Rauf Orbay)",
        sebep: "Bulgaristan'ın çekilmesiyle Osmanlı'nın I. Dünya Savaşı'nı fiilen kaybetmesi.",
        sonuc: "Ordu terhis edildi, silah ve donanmaya el konuldu; 7. madde (stratejik nokta işgali) ve 24. madde (Vilayet-i Sitte).",
        onem: "Fiilen Osmanlı'nın sonu; işgallere hukuki kılıf hazırladı." },
      { ad: "İzmir'in İşgali", yil: "15 Mayıs 1919",
        kime: "Yunanistan (Paris Konferansı kararı, İngiliz desteği)",
        sebep: "Batı Anadolu'nun Yunanistan'a vaat edilmesi.",
        sonuc: "Halkta büyük tepki; Hasan Tahsin ilk kurşunu attı, Kuva-yı Milliye doğdu.",
        onem: "Silahlı direnişi fiilen başlatan olay." },
      { ad: "Mustafa Kemal'in Samsun'a Çıkışı", yil: "19 Mayıs 1919",
        kime: "9. Ordu Müfettişi sıfatıyla (İstanbul Hükümeti görevi)",
        sebep: "Resmî: bölgedeki direnişi durdurup silah toplamak. Gerçek: Milli Mücadele'yi örgütlemek.",
        sonuc: "Milli Mücadele'nin fiilî başlangıcı.",
        onem: "Genelge ve kongreler sürecinin çıkış noktası." },
      { ad: "Amasya Genelgesi", yil: "22 Haziran 1919",
        kime: "Millete çağrı (M. Kemal, Rauf, Refet, Ali Fuat + Karabekir/Cemal onayı)",
        sebep: "Vatanın bütünlüğünün tehlikede olması ve İstanbul'un aciz kalması.",
        sonuc: "“Milletin bağımsızlığını yine milletin azim ve kararı kurtaracaktır.”",
        onem: "Mücadelenin gerekçe–amaç–yöntemini veren ihtilal genelgesi; ulusal egemenliğin ilk işareti." },
      { ad: "Erzurum Kongresi", yil: "23 Temmuz 1919",
        kime: "Doğu Anadolu ve Trabzon Müdafaa-i Hukuk cemiyetleri",
        sebep: "Doğu'da bağımsız Ermenistan tehdidi.",
        sonuc: "“Milli sınırlar içinde vatan bir bütündür”; manda–himaye ilk kez reddedildi.",
        onem: "Toplanışı bölgesel, kararları ulusal ilk kongre." },
      { ad: "Sivas Kongresi", yil: "4–11 Eylül 1919",
        kime: "Tüm yurt temsilcileri",
        sebep: "Milli Mücadele'yi tek merkezden yönetmek.",
        sonuc: "Cemiyetler “Anadolu ve Rumeli Müdafaa-i Hukuk” çatısında birleşti; manda kesin reddedildi.",
        onem: "Her yönüyle ulusal kongre; Temsil Heyeti güçlendi." }
    ],
    teskilat: [
      "<b>Zararlı — Azınlık cemiyetleri:</b> Mavri Mira, Pontus Rum, Etniki Eterya, Taşnak–Hınçak, Alyans İsrailit.",
      "<b>Zararlı — Milli Varlığa Düşman:</b> İngiliz Muhipleri, Sulh ve Selamet-i Osmaniye, Teali İslam, Kürt Teali, Wilson Prensipleri.",
      "<b>Yararlı (Milli) cemiyetler:</b> Doğu Anadolu M.H., Trakya–Paşaeli, İzmir Redd-i İlhak, Kilikyalılar, Trabzon M.H.",
      "<b>Kuva-yı Milliye:</b> İşgallere karşı bölgesel, düzensiz halk direniş birlikleri.",
      "<b>Amasya Görüşmeleri (Ekim 1919):</b> İstanbul Hükümeti (Salih Paşa) Temsil Heyeti'ni hukuken ilk kez tanıdı."
    ],
    osym: [
      "Amasya Genelgesi; amaç, gerekçe ve yöntemi birlikte veren tek belgedir (ulusal egemenliğin ilk işareti).",
      "Erzurum = bölgesel toplanış / ulusal karar; Sivas = ulusal toplanış / ulusal karar.",
      "Manda–himaye İLK KEZ Erzurum'da reddedildi, KESİN olarak Sivas'ta.",
      "Cemiyetlerin tek çatı altında birleşmesi ilk kez Sivas'ta oldu."
    ],
    gorseller: [
      { src: "images/samsun-1919.jpg", cap: "Mustafa Kemal Samsun'a çıkıyor", not: "Bandırma Vapuru · 19 Mayıs 1919" },
      { src: "images/erzurum-kongresi.jpg", cap: "Erzurum Kongresi", not: "23 Temmuz 1919" }
    ]
  },

  tbmm: {
    baslik: "Misak-ı Milli'den 23 Nisan'a (1920)",
    foto: "images/ataturk.jpg",
    savasBaslik: "📌 Kilit Gelişmeler",
    savaslar: [
      { ad: "Misak-ı Milli", yil: "28 Ocak 1920",
        kime: "Son Osmanlı Mebusan Meclisi",
        sebep: "Milli sınırları ve barış şartlarını belirlemek.",
        sonuc: "Vatanın bölünmez bütünlüğü, kapitülasyonların reddi, sınırda halk oylaması ilkesi.",
        onem: "Milli Mücadele'nin siyasi programı ve ulusal sınır belgesi." },
      { ad: "İstanbul'un İşgali", yil: "16 Mart 1920",
        kime: "İtilaf Devletleri",
        sebep: "Mebusan Meclisi'nin Misak-ı Milli'yi kabul etmesi.",
        sonuc: "Meclis basıldı, mebuslar Malta'ya sürüldü.",
        onem: "Ankara'da yeni bir meclis (TBMM) açılmasına zemin hazırladı." },
      { ad: "TBMM'nin Açılışı", yil: "23 Nisan 1920",
        kime: "Ulus",
        sebep: "İstanbul'un işgali ve meclisin kapatılması.",
        sonuc: "Ankara'da kurucu, ihtilalci ve olağanüstü yetkili meclis kuruldu.",
        onem: "Ulusal egemenliğe dayalı yeni Türk devletinin temeli." },
      { ad: "Sevr Antlaşması", yil: "10 Ağustos 1920",
        kime: "İtilaf Devletleri (Damat Ferit Hükümeti)",
        sebep: "Osmanlı topraklarını paylaşmak.",
        sonuc: "Ağır paylaşım şartları; TBMM imzalayanları vatan haini ilan etti.",
        onem: "Meclis onayından geçmediği için hukuken geçersiz (ölü doğan) antlaşma." }
    ],
    teskilat: [
      "<b>Güçler Birliği:</b> I. TBMM Meclis Hükümeti sistemini benimser (güçler ayrılığı değil).",
      "<b>İlk kanun:</b> Ağnam (hayvan) Vergisi Kanunu — 24 Nisan 1920.",
      "<b>Hıyanet-i Vataniye Kanunu</b> ve <b>İstiklal Mahkemeleri</b> (yargı yetkisi meclisçe kullanıldı).",
      "<b>1921 Teşkilat-ı Esasiye</b> (ilk anayasa): “Egemenlik kayıtsız şartsız milletindir.”",
      "<b>Ayaklanmalar:</b> Anzavur, Kuva-yı İnzibatiye (Halifelik Ordusu) — İstanbul/İngiliz kışkırtması."
    ],
    osym: [
      "Misak-ı Milli'de Cumhuriyet/rejim değişikliğinden BAHSEDİLMEZ (İtilaf'ı ürkütmemek için).",
      "I. TBMM Güçler Birliği ilkesini benimser.",
      "Sevr, Mebusan Meclisi onayı olmadığı için hukuken geçersizdir."
    ],
    gorseller: [
      { src: "images/tbmm-1920.jpg", cap: "I. TBMM'nin açılışı", not: "23 Nisan 1920 · Ankara" },
      { src: "images/misak-i-milli.jpg", cap: "Misak-ı Milli sınırları", not: "Harita" }
    ]
  },

  kurtulus_cephe: {
    baslik: "Cephelerde zafer, masada bağımsızlık (1920–1922)",
    foto: "images/ataturk.jpg",
    savasBaslik: "⚔ Cepheler & Diplomasi",
    savaslar: [
      { ad: "Gümrü Antlaşması", yil: "3 Aralık 1920",
        kime: "Ermenistan (Doğu Cephesi · Kâzım Karabekir)",
        sebep: "Doğu'da Ermeni ilerleyişini durdurmak.",
        sonuc: "Doğu sınırı güvence altına alındı.",
        onem: "TBMM'nin ilk uluslararası antlaşması; TBMM'yi tanıyan ve Sevr'i reddeden ilk devlet Ermenistan oldu." },
      { ad: "I. İnönü Muharebesi", yil: "6–10 Ocak 1921",
        kime: "Yunanistan",
        sebep: "Yunan ilerleyişini durdurmak.",
        sonuc: "Düzenli ordunun ilk zaferi.",
        onem: "Sonuçları TALİM ile kodlanır: Teşkilat-ı Esasiye, Afganistan Dostluğu, Londra Konferansı, İstiklal Marşı, Moskova Antlaşması." },
      { ad: "II. İnönü Muharebesi", yil: "23 Mart – 1 Nisan 1921",
        kime: "Yunanistan",
        sebep: "Yunan taarruzunun yenilenmesi.",
        sonuc: "Yunan taarruzu yeniden durduruldu.",
        onem: "Batı'da moral üstünlük; İtalyanların Anadolu'yu boşaltmaya başlaması." },
      { ad: "Sakarya Meydan Muharebesi", yil: "23 Ağustos – 13 Eylül 1921",
        kime: "Yunanistan",
        sebep: "Kütahya–Eskişehir yenilgisi sonrası son savunma hattı.",
        sonuc: "1683'ten beri süren geri çekilme sona erdi; Kars ve (Fransa ile) Ankara Antlaşmaları.",
        onem: "“Hattı müdafaa yoktur, sathı müdafaa vardır”; M. Kemal'e Gazi ve Mareşal unvanı." },
      { ad: "Büyük Taarruz ve Başkomutan Meydan Muharebesi", yil: "26–30 Ağustos 1922",
        kime: "Yunanistan",
        sebep: "Yunan ordusunu Anadolu'dan tamamen atmak.",
        sonuc: "Yunan ordusu imha edildi, 9 Eylül'de İzmir kurtarıldı.",
        onem: "“Ordular ilk hedefiniz Akdeniz, ileri!”; askeri safhanın kesin zaferi." },
      { ad: "Mudanya Ateşkes Antlaşması", yil: "11 Ekim 1922",
        kime: "İtilaf Devletleri (TBMM adına İsmet Paşa)",
        sebep: "Çanakkale (Çanak) Krizi ve savaşa son verme ihtiyacı.",
        sonuc: "Doğu Trakya, İstanbul ve Boğazlar savaşsız TBMM'ye bırakıldı.",
        onem: "Askeri safha bitti, diplomatik safha başladı; Osmanlı fiilen sona erdi." }
    ],
    teskilat: [
      "<b>Güney Cephesi:</b> düzenli ordu yerine Kuva-yı Milliye — Şahin Bey (Antep), Sütçü İmam (Maraş), Ali Saip Bey (Urfa).",
      "<b>Tekâlif-i Millîye Emirleri (1921):</b> Sakarya öncesi topyekûn milli seferberlik.",
      "<b>Moskova (1921) ve Kars (1921):</b> Doğu sınırı kesinleşti; Batum tavizi verildi.",
      "<b>Ankara Antlaşması (1921):</b> Fransa Güney Cephesi'ni kapattı; TBMM'yi tanıyan ilk İtilaf devleti."
    ],
    osym: [
      "I. İnönü'nün sonuçları “TALİM” ile kodlanır; Mudanya en sonda (1922) gelir.",
      "Sakarya = savunmadan taarruza geçiş / son savunma savaşıdır.",
      "Batum (Moskova, 1921) Misak-ı Milli'den verilen ilk tavizdir."
    ],
    gorseller: [
      { src: "images/sakarya.jpg", cap: "Sakarya sonrası Gazi ve Mareşal Mustafa Kemal", not: "Ankara · Aralık 1921" },
      { src: "images/buyuk-taarruz.jpg", cap: "Büyük Taarruz cephe haritası", not: "Ağustos 1922" }
    ]
  }
};

ATA_ICERIK.lozan_devrim = {
  baslik: "Lozan ve inkılapların şafağı (1923–1930)",
  foto: "images/ataturk.jpg",
  savasBaslik: "📌 Lozan & Devrim Adımları",
  savaslar: [
    { ad: "Saltanatın Kaldırılması", yil: "1 Kasım 1922",
      kime: "TBMM",
      sebep: "İtilaf'ın Lozan'a hem İstanbul'u hem Ankara'yı çağırıp ikilik çıkarma planı.",
      sonuc: "Osmanlı Devleti resmen sona erdi.",
      onem: "Egemenliğin millete geçişinde ilk büyük adım." },
    { ad: "Lozan Barış Antlaşması", yil: "24 Temmuz 1923",
      kime: "İtilaf Devletleri (TBMM adına İsmet Paşa)",
      sebep: "Yeni Türk devletinin uluslararası tanınması ve kesin barış.",
      sonuc: "Kapitülasyonlar kaldırıldı, sınırlar çizildi; Musul sonraya bırakıldı.",
      onem: "Yeni devletin tapusu; günümüzde geçerli tek I. Dünya Savaşı barış antlaşması." },
    { ad: "Cumhuriyet'in İlanı", yil: "29 Ekim 1923",
      kime: "TBMM",
      sebep: "Hükümet bunalımı ve rejimin adının konması ihtiyacı.",
      sonuc: "Kabine sistemine geçildi; ilk Cumhurbaşkanı M. Kemal, ilk Başbakan İsmet Paşa.",
      onem: "Devlet biçimi kesinleşti." },
    { ad: "Halifeliğin Kaldırılması", yil: "3 Mart 1924",
      kime: "TBMM",
      sebep: "Laik ve ulusal devlet düzeni.",
      sonuc: "Şer'iye-Evkaf ve Erkân-ı Harbiye vekaletleri kaldırıldı; Tevhid-i Tedrisat kabul edildi.",
      onem: "Laikliğin ve eğitim birliğinin temeli." }
  ],
  teskilat: [
    "<b>Ankara başkent</b> oldu (13 Ekim 1923).",
    "<b>Terakkiperver Cumhuriyet Fırkası (1924):</b> ilk muhalefet partisi.",
    "<b>Şeyh Said İsyanı (1925):</b> laiklik/rejim karşıtı ilk isyan → Takrir-i Sükûn Kanunu, TCF kapatıldı.",
    "<b>Serbest Cumhuriyet Fırkası (1930):</b> Fethi Okyar kurdu, kendi feshetti.",
    "<b>Menemen Olayı (1930):</b> çok partili hayat denemeleri 1945'e kadar ertelendi."
  ],
  osym: [
    "1 Kasım 1922 Saltanatın kaldırılması, Lozan'a çift davetin engellenmesiyle ilgilidir.",
    "Soyadı Kanunu 3 Mart 1924'te DEĞİL, 1934'tedir.",
    "Cumhuriyet'in ilanı → Meclis Hükümeti yerine Kabine sistemi."
  ],
  gorseller: [
    { src: "images/lozan-heyeti.jpg", cap: "Lozan'da İsmet Paşa ve Türk heyeti", not: "1923" },
    { src: "images/cumhuriyet-ilani.jpg", cap: "Atatürk Cumhuriyet töreninde", not: "Onuncu Yıl · 1933" }
  ]
};

ATA_ICERIK.ilke_inkilap = {
  baslik: "Altı Ok ve çağdaşlaşma inkılapları",
  foto: "images/ataturk.jpg",
  savasBaslik: "📌 Öne Çıkan İnkılaplar",
  savaslar: [
    { ad: "Tevhid-i Tedrisat Kanunu", yil: "3 Mart 1924",
      kime: "Tüm okullar (medrese ve yabancı okullar dahil)",
      sebep: "Eğitimdeki ikiliği (medrese–mektep) bitirmek.",
      sonuc: "Bütün okullar Millî Eğitim Bakanlığı'na bağlandı.",
      onem: "Ulusal ve laik eğitimin temeli (Laiklik + Milliyetçilik)." },
    { ad: "Şapka ve Kılık-Kıyafet · Tekke-Zaviyeler", yil: "1925",
      kime: "Toplum",
      sebep: "Çağdaş görünüm ve laik toplum düzeni.",
      sonuc: "Şapka Kanunu; tekke, zaviye ve türbeler kapatıldı.",
      onem: "Toplumsal alanda modernleşme (İnkılapçılık + Laiklik)." },
    { ad: "Türk Medeni Kanunu", yil: "1926",
      kime: "İsviçre Medeni Kanunu örnek alındı",
      sebep: "Şer'i hukukun çağın ihtiyaçlarına yetmemesi.",
      sonuc: "Kadın-erkek eşitliği, resmî nikâh ve tek eşlilik, miras ve şahitlikte eşitlik.",
      onem: "Hukuk birliği ve laikleşmenin en büyük adımı (Halkçılık + Laiklik)." },
    { ad: "Harf İnkılabı", yil: "1 Kasım 1928",
      kime: "Toplum",
      sebep: "Okuryazarlığı artırmak ve Batı ile entegrasyon.",
      sonuc: "Latin esaslı Türk alfabesi; Millet Mektepleri açıldı.",
      onem: "Kültürel atılım (Milliyetçilik + İnkılapçılık)." },
    { ad: "Kadınlara Siyasi Haklar", yil: "1930–1934",
      kime: "Kadınlar",
      sebep: "Cumhuriyetçilik ve halkçılık ilkeleri.",
      sonuc: "Belediye (1930), Muhtarlık (1933), Milletvekilliği (1934) seçme-seçilme hakkı.",
      onem: "Çağının birçok ülkesinden önce gelen bir adım." }
  ],
  teskilat: [
    "<b>Cumhuriyetçilik:</b> Milli egemenlik, halkın seçtiği yönetim (Cumhuriyet'in ilanı, kadınlara siyasi haklar).",
    "<b>Milliyetçilik:</b> Milli birlik ve kültür (Türk Tarih/Dil Kurumu, Kabotaj, kapitülasyonların kaldırılması).",
    "<b>Halkçılık:</b> Kanun önünde eşitlik, ayrıcalıksız toplum (Aşar'ın kaldırılması, Medeni Kanun, unvanların kaldırılması).",
    "<b>Devletçilik:</b> Devletin ekonomiye doğrudan müdahalesi (I. Beş Yıllık Sanayi Planı, Sümerbank–Etibank).",
    "<b>Laiklik:</b> Din–devlet ayrımı (Halifeliğin ve Şer'iye Vekaleti'nin kaldırılması, 1928 ve 1937 adımları).",
    "<b>İnkılapçılık:</b> Sürekli çağdaşlaşma (Harf, Takvim–Saat–Ölçü, Kılık-Kıyafet)."
  ],
  osym: [
    "Kadınlara siyasi haklar: Belediye 1930, Muhtarlık 1933, Milletvekilliği 1934.",
    "1928'de “Devletin dini İslam'dır” ibaresi çıkarıldı; Laiklik anayasaya 1937'de girdi.",
    "Aşar'ın kaldırılması Halkçılık; Kabotaj ve kapitülasyonların kaldırılması Milliyetçilik ile ilgilidir."
  ],
  gorseller: [
    { src: "images/harf-inkilabi.jpg", cap: "Atatürk yeni Türk harflerini öğretiyor", not: "Başöğretmen · 1928" },
    { src: "images/kadin-haklari.jpg", cap: "Kadınlara seçme-seçilme hakkı", not: "1934" }
  ]
};

ATA_ICERIK.dis_politika = {
  baslik: "“Yurtta sulh, cihanda sulh” (1923–1938)",
  foto: "images/ataturk.jpg",
  savasBaslik: "📌 Dış Politika Meseleleri",
  savaslar: [
    { ad: "Musul Meselesi (Ankara Antlaşması)", yil: "5 Haziran 1926",
      kime: "İngiltere",
      sebep: "Bölgedeki petrol ve Şeyh Said İsyanı'nın elimizi zayıflatması.",
      sonuc: "Musul, İngiltere idaresindeki Irak'a bırakıldı.",
      onem: "Batum ve Hatay gibi Misak-ı Milli'den verilen tavizlerden biri." },
    { ad: "Nüfus Mübadelesi · Ankara Sözleşmesi", yil: "1930",
      kime: "Yunanistan",
      sebep: "İstanbul Rumları ve Batı Trakya Türklerinde “etabli” (yerleşik) krizi.",
      sonuc: "Etabli sorunu çözüldü.",
      onem: "1954 Kıbrıs krizine kadar sürecek Türk-Yunan dostluğunu başlattı." },
    { ad: "Milletler Cemiyeti'ne Giriş", yil: "1932",
      kime: "İspanya'nın teklifi, Yunanistan'ın desteğiyle",
      sebep: "Barışçı politikanın uluslararası tanınması.",
      sonuc: "Türkiye davet üzerine üye oldu.",
      onem: "“Yurtta sulh, cihanda sulh” ilkesinin karşılığı." },
    { ad: "Balkan Antantı", yil: "1934",
      kime: "Türkiye, Yunanistan, Yugoslavya, Romanya (TAYYAR)",
      sebep: "İtalya ve Almanya'nın yayılmacı tehdidi.",
      sonuc: "Batı sınır güvenliği sağlandı.",
      onem: "Bulgaristan ve Arnavutluk yayılmacı politikaları nedeniyle katılmadı." },
    { ad: "Montrö Boğazlar Sözleşmesi", yil: "1936",
      kime: "İlgili devletler (konferans)",
      sebep: "II. Dünya Savaşı tehdidiyle Boğazlar güvenliği.",
      sonuc: "Boğazlar Komisyonu kaldırıldı; asker bulundurma yetkisi Türkiye'ye geçti.",
      onem: "Boğazlar'da tam egemenlik — büyük diplomatik başarı." },
    { ad: "Sadabat Paktı", yil: "8 Temmuz 1937",
      kime: "Türkiye, İran, Irak, Afganistan",
      sebep: "İtalya'nın Habeşistan işgaliyle artan tehdit.",
      sonuc: "Doğu sınır güvenliği sağlandı.",
      onem: "Suriye (Fransa mandası) Hatay sorunu nedeniyle katılmadı." },
    { ad: "Hatay'ın Anavatana Katılması", yil: "1938–1939",
      kime: "Fransa / Suriye",
      sebep: "Fransa'nın mandayı kaldırırken Hatay'ı Suriye'ye bırakmak istemesi.",
      sonuc: "1938 Hatay Devleti → 23 Haziran 1939 Türkiye'ye katılma kararı → il oldu.",
      onem: "Atatürk'ün son büyük dış politika hedefi (katılışı göremeden 1938'de vefat etti)." }
  ],
  teskilat: [
    "<b>Temel ilke:</b> “Yurtta sulh, cihanda sulh.”",
    "<b>1923–1930:</b> Lozan'dan kalan pürüzlerin çözümü (Yabancı Okullar, Osmanlı borçları, Musul, mübadele).",
    "<b>1930–1939:</b> İttifak ve güvenlik arayışı (Milletler Cemiyeti, Balkan Antantı, Montrö, Sadabat).",
    "<b>İlkeler:</b> gerçekçilik, tam bağımsızlık ve milletlerarası hukuka bağlılık."
  ],
  osym: [
    "Batum, Hatay ve Musul; Misak-ı Milli'den verilen tavizler olarak sorulur.",
    "Montrö = Boğazlar'da tam egemenlik.",
    "Sadabat = doğu; Balkan Antantı = batı sınır güvenliği."
  ],
  gorseller: [
    { src: "images/hatay.jpg", cap: "Hatay'ın anavatana katılması", not: "1939" },
    { src: "images/montro.jpg", cap: "Montrö ve Boğazlar", not: "1936" }
  ]
};

ATA_ICERIK.cagdas = {
  baslik: "İki savaştan Soğuk Savaş'a Türkiye ve dünya",
  foto: "images/ataturk.jpg",
  savasBaslik: "📌 Çağdaş Dönem Kilometre Taşları",
  savaslar: [
    { ad: "II. Dünya Savaşı ve Türkiye", yil: "1939–1945",
      kime: "Mihver / Müttefik dengesi",
      sebep: "Yeni bir dünya savaşının çıkması.",
      sonuc: "Savaş dışı/denge politikası; Varlık Vergisi, Milli Korunma Kanunu, ekmek karnesi.",
      onem: "1 Mart 1945'e kadar Almanya-Japonya'ya savaş ilanı → BM kurucu üyeliği (Yalta şartı)." },
    { ad: "Soğuk Savaş ve Batı'ya Yöneliş", yil: "1947+",
      kime: "SSCB tehdidi (Boğazlar ve Doğu Anadolu talepleri)",
      sebep: "Sovyet baskısı.",
      sonuc: "Truman Doktrini ve Marshall Planı ile ABD yardımı.",
      onem: "Türkiye Batı Bloku'na yöneldi." },
    { ad: "Kore Savaşı ve NATO", yil: "1950–1952",
      kime: "BM / ABD safında",
      sebep: "Batı Bloku'na girme ve güvenlik.",
      sonuc: "Türk Tugayı gönderildi (Kunu-ri Muharebeleri).",
      onem: "1952'de Yunanistan ile birlikte NATO üyeliği." },
    { ad: "Kıbrıs ve TMT", yil: "1958",
      kime: "EOKA / Enosis'e karşı",
      sebep: "Rum EOKA'nın Kıbrıs Türklerine saldırıları.",
      sonuc: "Dr. Fazıl Küçük ve Rauf Denktaş önderliğinde TMT kuruldu.",
      onem: "Kıbrıs Türklerinin can-mal güvenliğinin örgütlü direnişi." },
    { ad: "Küba Füze Krizi", yil: "1962",
      kime: "ABD – SSCB",
      sebep: "SSCB'nin Küba'ya, ABD'nin Türkiye'ye füze yerleştirmesi.",
      sonuc: "ABD Türkiye'deki Jüpiter füzelerini, SSCB Küba'daki füzelerini söktü.",
      onem: "Dünya nükleer savaşın eşiğinden döndü." },
    { ad: "SSCB'nin Dağılması ve Türk Cumhuriyetleri", yil: "1991",
      kime: "Bağımsızlığını ilan eden Türk devletleri",
      sebep: "SSCB'nin dağılması.",
      sonuc: "Azerbaycan, Kazakistan, Özbekistan, Türkmenistan, Kırgızistan bağımsız oldu.",
      onem: "Türk dünyası ile yeni ilişki dönemi." }
  ],
  teskilat: [
    "<b>İki savaş arası akımlar:</b> Faşizm (İtalya · Mare Nostrum), Nazizm (Almanya · Lebensraum), 1929 Dünya Bunalımı.",
    "<b>Bloklar:</b> NATO (Batı) — Varşova Paktı (Doğu); Kominform (siyasi), Comecon (ekonomik).",
    "<b>Bağlantısızlar:</b> Bandung Konferansı (1955) — Tito, Nasır, Nehru.",
    "<b>Türk dünyası:</b> Ceditçilik (Gaspıralı) ve Basmacı Hareketi."
  ],
  osym: [
    "Marshall Planı savaş sonrası (Soğuk Savaş) yardımıdır; II. Dünya Savaşı önlemi DEĞİLDİR.",
    "BM kurucu üyeliği için 1 Mart 1945'e kadar Mihver'e savaş ilanı şartı (Yalta).",
    "Varşova Paktı, Doğu Bloku'nun askeri ittifakıdır."
  ],
  gorseller: [
    { src: "images/kore-savasi.jpg", cap: "Türk Tugayı komutanı Tahsin Yazıcı, Kore", not: "1950–51" },
    { src: "images/turk-cumhuriyetleri.jpg", cap: "Bağımsız Türk Cumhuriyetleri", not: "1991 sonrası harita" }
  ]
};

/* İçerikleri ilgili düğümlere uygula: artık tam sayfa (portre + görsel + olaylar). */
if (typeof SULTANS !== "undefined") {
  Object.keys(ATA_ICERIK).forEach(function (id) {
    var s = SULTANS.find(function (x) { return x.id === id; });
    if (s) { Object.assign(s, ATA_ICERIK[id]); s.araDonem = false; }
  });
}
