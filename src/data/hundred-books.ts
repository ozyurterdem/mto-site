export interface ReadingBook {
  title: string;
  author: string;
  category: string;
  color: string;
  publisher: string;
  description?: string;
  isReference?: boolean;
  number?: number;
}

export const readingCategories = [
  'Birinci Aşama',
  'İkinci Aşama',
  'Üçüncü Aşama',
  'Dördüncü Aşama',
  'Beşinci Aşama',
  'Referans Kitaplar',
] as const;

export const categorySubtitles: Record<string, string> = {
  'Birinci Aşama': 'Temel Okumalar (1-20)',
  'İkinci Aşama': 'Ders (Usûl) (21-40)',
  'Üçüncü Aşama': 'Tarih, Medeniyetler Tarihi ve Tarih Felsefesi (41-55)',
  'Dördüncü Aşama': 'Modernite ve Geleneksel Perspektif (56-74)',
  'Beşinci Aşama': 'Derin Okuma ve Senteleştirme (75-100)',
  'Referans Kitaplar': 'Sözlükler · Tefsir · Klasikler',
};

export const categoryColors: Record<string, string> = {
  'Birinci Aşama': '#30D5E1',
  'İkinci Aşama': '#0D619A',
  'Üçüncü Aşama': '#E7A54E',
  'Dördüncü Aşama': '#B7A78F',
  'Beşinci Aşama': '#03253A',
  'Referans Kitaplar': '#8B6F47',
};

export const hundredBooks: ReadingBook[] = [
  // ═══ BİRİNCİ AŞAMA (1–20) ═══
  { number: 1, title: 'İnsan Olmak', author: 'Nurettin Topçu', publisher: 'Dergah Yayınları', category: 'Birinci Aşama', color: '#30D5E1' },
  { number: 2, title: "Türkiye'nin Maarif Davası", author: 'Nurettin Topçu', publisher: 'Dergah Yayınları', category: 'Birinci Aşama', color: '#30D5E1' },
  { number: 3, title: 'Mesnevî', author: 'Mevlânâ Celâleddin Rûmî-İsmail Ankaravi', publisher: 'Konya Büyükşehir Belediyesi', category: 'Birinci Aşama', color: '#30D5E1', description: 'İsmail Ankaravi şerhi ile beraber (7 cilt)' },
  { number: 4, title: 'Okulsuz Toplum', author: 'İvan İlliç', publisher: 'Şule Yayınları', category: 'Birinci Aşama', color: '#30D5E1' },
  { number: 5, title: 'Modern Dünyada Müslümanlar', author: 'Seyyid Hüseyin Nasr', publisher: 'İnsan Yayınları', category: 'Birinci Aşama', color: '#30D5E1' },
  { number: 6, title: 'Batı Karşısında Türkiye', author: 'Peyami Safa', publisher: 'Ötüken Yayınları', category: 'Birinci Aşama', color: '#30D5E1' },
  { number: 7, title: 'İslâm Dünyasında Modernleşme', author: 'Fazlur Rahman', publisher: 'Ankara Okulu Yayınları', category: 'Birinci Aşama', color: '#30D5E1' },
  { number: 8, title: 'Çağdaş Dünyada Din ve Siyaset', author: 'Şerif Mardin', publisher: 'İletişim Yayınları', category: 'Birinci Aşama', color: '#30D5E1' },
  { number: 9, title: 'Türk Modernleşmesi', author: 'Niyazi Berkes', publisher: 'Yapı Kredi Yayınları', category: 'Birinci Aşama', color: '#30D5E1' },
  { number: 10, title: 'Kültür ve Medeniyet', author: 'Cemil Meriç', publisher: 'İletişim Yayınları', category: 'Birinci Aşama', color: '#30D5E1' },
  { number: 11, title: 'Jurnal (1-2-3)', author: 'Cemil Meriç', publisher: 'İletişim Yayınları', category: 'Birinci Aşama', color: '#30D5E1' },
  { number: 12, title: 'Bu Ülke', author: 'Cemil Meriç', publisher: 'İletişim Yayınları', category: 'Birinci Aşama', color: '#30D5E1' },
  { number: 13, title: 'Umrandan Uygarlığa', author: 'Cemil Meriç', publisher: 'İletişim Yayınları', category: 'Birinci Aşama', color: '#30D5E1' },
  { number: 14, title: 'Kırk Ambar', author: 'Cemil Meriç', publisher: 'İletişim Yayınları', category: 'Birinci Aşama', color: '#30D5E1' },
  { number: 15, title: "İslâm'da Yenilenme Düşüncesi", author: 'Fazlur Rahman', publisher: 'Ankara Okulu Yayınları', category: 'Birinci Aşama', color: '#30D5E1' },
  { number: 16, title: 'Kutadgu Bilig', author: 'Yusuf Has Hacib', publisher: 'Türkiye İş Bankası Kültür Yayınları', category: 'Birinci Aşama', color: '#30D5E1', description: 'Günümüz Türkçesi' },
  { number: 17, title: 'Mukaddime', author: 'İbn Haldun', publisher: 'Dergah Yayınları', category: 'Birinci Aşama', color: '#30D5E1', description: '2 cilt' },
  { number: 18, title: 'İşaretler Yolu', author: 'Seyyid Kutub', publisher: 'Pınar Yayınları', category: 'Birinci Aşama', color: '#30D5E1' },
  { number: 19, title: 'Doğu Batı Düşüncesi', author: 'Cemil Meriç', publisher: 'İletişim Yayınları', category: 'Birinci Aşama', color: '#30D5E1' },
  { number: 20, title: 'Medeniyet Krizi', author: 'Yusuf Kaplan', publisher: 'Küre Yayınları', category: 'Birinci Aşama', color: '#30D5E1' },

  // ═══ İKİNCİ AŞAMA (21–40): DERS (USÛL) ═══
  { number: 21, title: 'Okulsuz Toplum', author: 'İvan İlliç', publisher: 'Şule Yayınları', category: 'İkinci Aşama', color: '#0D619A' },
  { number: 22, title: "Türkiye'nin Maarif Davası", author: 'Nurettin Topçu', publisher: 'Dergah Yayınları', category: 'İkinci Aşama', color: '#0D619A' },
  { number: 23, title: 'İslâm Kültür Atlası', author: 'İsmail Faruki', publisher: 'İnkılâb Yayınları', category: 'İkinci Aşama', color: '#0D619A', description: 'Rehber kitap - Liste bitince 2. kez okunacak' },
  { number: 24, title: 'İslâm Tarihi', author: 'Filibeli Ahmet Hilmi ve Ziya Nur Aksun', publisher: 'Ötüken Yayınları', category: 'İkinci Aşama', color: '#0D619A', description: '3 cilt' },
  { number: 25, title: 'Kur\'ân-ı Kerîm Işığında Hz. Muhammed Mustafa (sav)', author: 'Osman Nuri Topbaş', publisher: 'Erkam Yayınları', category: 'İkinci Aşama', color: '#0D619A', description: '2 cilt' },
  { number: 26, title: 'Mızraklı İlmihal', author: 'Semerkand Yayınları', publisher: 'Semerkand Yayınları', category: 'İkinci Aşama', color: '#0D619A' },
  { number: 27, title: 'Komünist Manifesto', author: 'Marx & Engels', publisher: 'Can Yayınları', category: 'İkinci Aşama', color: '#0D619A' },
  { number: 28, title: 'İlm-i Hâl', author: 'S. Ahmet Arvâsî', publisher: 'Bilge Oğuz Yayınları', category: 'İkinci Aşama', color: '#0D619A' },
  { number: 29, title: 'Tefsir Usûlü ve Tarihi', author: 'Ömer Çelik', publisher: 'Erkam Yayınları', category: 'İkinci Aşama', color: '#0D619A' },
  { number: 30, title: 'Sünneti Anlamada Yöntem', author: 'Yusuf el-Karadavi', publisher: 'Nida Yayınları', category: 'İkinci Aşama', color: '#0D619A' },
  { number: 31, title: 'Çöle İnen Nur', author: 'Necip Fazıl Kısakürek', publisher: 'Büyük Doğu Yayınları', category: 'İkinci Aşama', color: '#0D619A' },
  { number: 32, title: 'Fıkıh Usûlü', author: 'Vehbi Zuhayli', publisher: 'Risale Yayınları', category: 'İkinci Aşama', color: '#0D619A' },
  { number: 33, title: 'Tasavvuf', author: 'William Chittick', publisher: 'İz Yayıncılık', category: 'İkinci Aşama', color: '#0D619A' },
  { number: 34, title: 'Kelâma Giriş', author: 'U. Murat Kılavuz - A. Saim Kılavuz', publisher: 'Dergah Yayınları', category: 'İkinci Aşama', color: '#0D619A' },
  { number: 35, title: "İslâm'ın Vizyonu", author: 'William Chittick', publisher: 'İz Yayıncılık', category: 'İkinci Aşama', color: '#0D619A' },
  { number: 36, title: 'Yoldaki Işıklar', author: 'Muhammed Fethullah Gülen', publisher: 'Nil Yayınları', category: 'İkinci Aşama', color: '#0D619A' },
  { number: 37, title: "Kur'ân'ın Mesajı", author: 'Muhammed Esed', publisher: 'İşaret Yayınları', category: 'İkinci Aşama', color: '#0D619A' },
  { number: 38, title: 'Risale-i Nur Külliyatı', author: 'Bediüzzaman Said Nursi', publisher: 'Şahdamar Yayınları', category: 'İkinci Aşama', color: '#0D619A' },
  { number: 39, title: 'Medeniyet Tasavvuru', author: 'Cemil Meriç', publisher: 'İletişim Yayınları', category: 'İkinci Aşama', color: '#0D619A' },
  { number: 40, title: 'İslâm Medeniyeti Üzerine', author: 'Roger Garaudy', publisher: 'Pınar Yayınları', category: 'İkinci Aşama', color: '#0D619A' },

  // ═══ ÜÇÜNCÜ AŞAMA (41–55): TARİH, MEDENİYETLER TARİHİ VE TARİH FELSEFESİ ═══
  { number: 41, title: 'Tarih Felsefesi', author: 'R. G. Collingwood', publisher: 'İdea Yayınları', category: 'Üçüncü Aşama', color: '#E7A54E' },
  { number: 42, title: 'Tarih Şuuru', author: 'İsmail Kara', publisher: 'Dergah Yayınları', category: 'Üçüncü Aşama', color: '#E7A54E' },
  { number: 43, title: 'Medeniyet ve Çöküşü', author: 'Arnold Toynbee', publisher: 'İnkılâb Yayınları', category: 'Üçüncü Aşama', color: '#E7A54E' },
  { number: 44, title: 'Tarih Üzerine', author: 'Arnold Toynbee', publisher: 'İnkılâb Yayınları', category: 'Üçüncü Aşama', color: '#E7A54E' },
  { number: 45, title: 'İslâm Tarihi ve Medeniyeti', author: 'İsmail Yiğit', publisher: 'Kayıhan Yayınları', category: 'Üçüncü Aşama', color: '#E7A54E', description: '3 cilt' },
  { number: 46, title: 'Osmanlı Tarihi', author: 'Halil İnalcık', publisher: 'Türkiye İş Bankası Kültür Yayınları', category: 'Üçüncü Aşama', color: '#E7A54E', description: '5 cilt' },
  { number: 47, title: 'Türk Tarihinin Ana Hatları', author: 'Türk Tarih Kurumu', publisher: 'Türk Tarih Kurumu', category: 'Üçüncü Aşama', color: '#E7A54E' },
  { number: 48, title: 'İslâm Uygarlık Tarihi', author: 'Adam Metz', publisher: 'İletişim Yayınları', category: 'Üçüncü Aşama', color: '#E7A54E' },
  { number: 49, title: 'Batı Uygarlığı Tarihi', author: 'Edward McNall Burns', publisher: 'Ötüken Yayınları', category: 'Üçüncü Aşama', color: '#E7A54E' },
  { number: 50, title: 'Medeniyetler Çatışması', author: 'Samuel Huntington', publisher: 'Okuyan Us Yayınları', category: 'Üçüncü Aşama', color: '#E7A54E' },
  { number: 51, title: 'Doğu-Batı Çatışması', author: 'Cemil Meriç', publisher: 'İletişim Yayınları', category: 'Üçüncü Aşama', color: '#E7A54E' },
  { number: 52, title: "Osmanlı'dan Cumhuriyet'e Problemler", author: 'Sina Akşin', publisher: 'İletişim Yayınları', category: 'Üçüncü Aşama', color: '#E7A54E' },
  { number: 53, title: "Türkiye'de Siyasal Kültürün Oluşumu", author: 'Şerif Mardin', publisher: 'İletişim Yayınları', category: 'Üçüncü Aşama', color: '#E7A54E' },
  { number: 54, title: "Modern Türkiye'de Siyasi Düşünce", author: 'İletişim Yayınları', publisher: 'İletişim Yayınları', category: 'Üçüncü Aşama', color: '#E7A54E', description: '10 cilt' },
  { number: 55, title: 'İslâm Düşüncesi Tarihi', author: 'Majid Fakhry', publisher: 'Küre Yayınları', category: 'Üçüncü Aşama', color: '#E7A54E' },

  // ═══ DÖRDÜNCÜ AŞAMA (56–74): MODERNİTE VE GELENEKSEL PERSPEKTİF ═══
  { number: 56, title: 'Modernizm ve Postmodernizm', author: 'Hüsamettin Arslan', publisher: 'Paradigma Yayınları', category: 'Dördüncü Aşama', color: '#B7A78F' },
  { number: 57, title: 'Batının Üç Yüzü', author: 'Cemil Meriç', publisher: 'İletişim Yayınları', category: 'Dördüncü Aşama', color: '#B7A78F' },
  { number: 58, title: 'Modernitenin Felsefi Söylemi', author: 'Jürgen Habermas', publisher: 'Yapı Kredi Yayınları', category: 'Dördüncü Aşama', color: '#B7A78F' },
  { number: 59, title: 'Modern Çağın Bunalımı', author: 'René Guénon', publisher: 'İnsan Yayınları', category: 'Dördüncü Aşama', color: '#B7A78F' },
  { number: 60, title: 'Nicelik Egemenliği ve Çağın Alâmetleri', author: 'René Guénon', publisher: 'İnsan Yayınları', category: 'Dördüncü Aşama', color: '#B7A78F' },
  { number: 61, title: 'Geleneksel Formlar ve Kozmik Döngüler', author: 'René Guénon', publisher: 'İnsan Yayınları', category: 'Dördüncü Aşama', color: '#B7A78F' },
  { number: 62, title: 'Dinsel Sembollerin Metafizik Boyutları', author: 'René Guénon', publisher: 'İnsan Yayınları', category: 'Dördüncü Aşama', color: '#B7A78F' },
  { number: 63, title: 'Doğu Düşüncesi ve İslâm Tasavvufu', author: 'René Guénon', publisher: 'İnsan Yayınları', category: 'Dördüncü Aşama', color: '#B7A78F' },
  { number: 64, title: 'Küreselleşme ve Çokkültürlülük', author: 'Suat Kılıç', publisher: 'İnsan Yayınları', category: 'Dördüncü Aşama', color: '#B7A78F' },
  { number: 65, title: 'Küreselleşme, Globalizm ve Yerelcilik', author: 'Zygmunt Bauman', publisher: 'Ayrıntı Yayınları', category: 'Dördüncü Aşama', color: '#B7A78F' },
  { number: 66, title: 'Modern Toplum Felsefesi', author: 'Jürgen Habermas', publisher: 'Paradigma Yayınları', category: 'Dördüncü Aşama', color: '#B7A78F' },
  { number: 67, title: 'Toplu Eserleri', author: 'Frithjof Schuon', publisher: 'İnsan Yayınları', category: 'Dördüncü Aşama', color: '#B7A78F', description: '4 cilt' },
  { number: 68, title: 'Geleneksel İslâm', author: 'Seyyed Hossein Nasr', publisher: 'İnsan Yayınları', category: 'Dördüncü Aşama', color: '#B7A78F' },
  { number: 69, title: 'İslâm Sanatı ve Maneviyatı', author: 'Titus Burckhardt', publisher: 'Klasik Yayınları', category: 'Dördüncü Aşama', color: '#B7A78F' },
  { number: 70, title: 'Mukaddes Sanat', author: 'Titus Burckhardt', publisher: 'İnsan Yayınları', category: 'Dördüncü Aşama', color: '#B7A78F' },
  { number: 71, title: 'Modernizmin Mahiyeti', author: 'Titus Burckhardt', publisher: 'İnsan Yayınları', category: 'Dördüncü Aşama', color: '#B7A78F' },
  { number: 72, title: 'Geleneksel Dünya Görüşü', author: 'Alparslan Açıkgenç', publisher: 'İz Yayıncılık', category: 'Dördüncü Aşama', color: '#B7A78F' },
  { number: 73, title: 'İslâm Bilim Tarihi ve Felsefesi', author: 'Alparslan Açıkgenç', publisher: 'İnsan Yayınları', category: 'Dördüncü Aşama', color: '#B7A78F' },
  { number: 74, title: 'Bilgi Felsefesi', author: 'Alparslan Açıkgenç', publisher: 'İnsan Yayınları', category: 'Dördüncü Aşama', color: '#B7A78F' },

  // ═══ BEŞİNCİ AŞAMA (75–100): DERİN OKUMA VE SENTELEŞTİRME ═══
  { number: 75, title: 'İslâm Düşüncesinde Yeni Arayışlar', author: 'Fazlur Rahman', publisher: 'Ankara Okulu Yayınları', category: 'Beşinci Aşama', color: '#03253A' },
  { number: 76, title: 'İslâm Felsefesi Tarihi', author: 'Majid Fakhry', publisher: 'İklim Yayınları', category: 'Beşinci Aşama', color: '#03253A', description: '2 cilt' },
  { number: 77, title: 'İslâm Felsefesi', author: 'Henry Corbin', publisher: 'İz Yayıncılık', category: 'Beşinci Aşama', color: '#03253A' },
  { number: 78, title: "İslâm'da Dini Düşüncenin Yeniden Doğuşu", author: 'Muhammed İkbal', publisher: 'İnsan Yayınları', category: 'Beşinci Aşama', color: '#03253A' },
  { number: 79, title: 'İslâm ve Modernizm', author: 'Muhammed İkbal', publisher: 'İnsan Yayınları', category: 'Beşinci Aşama', color: '#03253A' },
  { number: 80, title: 'Hakikat ve Yöntem', author: 'Hans-Georg Gadamer', publisher: 'Paradigma Yayınları', category: 'Beşinci Aşama', color: '#03253A', description: '2 cilt' },
  { number: 81, title: 'Varlık ve Zaman', author: 'Martin Heidegger', publisher: 'Alfa Yayınları', category: 'Beşinci Aşama', color: '#03253A' },
  { number: 82, title: 'Hermenötik ve Hümaniter Disiplinler', author: 'Wilhelm Dilthey', publisher: 'Öteki Yayınları', category: 'Beşinci Aşama', color: '#03253A' },
  { number: 83, title: 'Bilginin Arkeolojisi', author: 'Michel Foucault', publisher: 'Ayrıntı Yayınları', category: 'Beşinci Aşama', color: '#03253A' },
  { number: 84, title: 'Kelimeler ve Şeyler', author: 'Michel Foucault', publisher: 'İmge Kitabevi', category: 'Beşinci Aşama', color: '#03253A' },
  { number: 85, title: 'İktidarın Gözü', author: 'Michel Foucault', publisher: 'Ayrıntı Yayınları', category: 'Beşinci Aşama', color: '#03253A' },
  { number: 86, title: 'Dil Felsefesi', author: 'Ludwig Wittgenstein', publisher: 'Metis Yayınları', category: 'Beşinci Aşama', color: '#03253A' },
  { number: 87, title: 'Dil ve Düşünce İlişkisi', author: 'Noam Chomsky', publisher: 'Metis Yayınları', category: 'Beşinci Aşama', color: '#03253A' },
  { number: 88, title: 'İslâm Düşüncesinde Eleştiri Kültürü ve Aklın Önemi', author: 'Mehmet Evkuran', publisher: 'Ankara Okulu Yayınları', category: 'Beşinci Aşama', color: '#03253A' },
  { number: 89, title: 'İbn Haldun ve İlm-i Umran', author: 'Ahmed Davutoğlu', publisher: 'İnsan Yayınları', category: 'Beşinci Aşama', color: '#03253A' },
  { number: 90, title: 'Alternatif Paradigma', author: 'Ahmed Davutoğlu', publisher: 'Küre Yayınları', category: 'Beşinci Aşama', color: '#03253A' },
  { number: 91, title: 'Medeniyetler Sentezi', author: 'Cemil Meriç', publisher: 'İletişim Yayınları', category: 'Beşinci Aşama', color: '#03253A' },
  { number: 92, title: 'İslâm Estetiği', author: 'Ömer Faruk Harman', publisher: 'İz Yayıncılık', category: 'Beşinci Aşama', color: '#03253A' },
  { number: 93, title: 'Geleneksel Türk Sanatları', author: 'Turgut Saner', publisher: 'Yapı Kredi Yayınları', category: 'Beşinci Aşama', color: '#03253A' },
  { number: 94, title: 'İslâm Mimarisi', author: 'Doğan Kuban', publisher: 'Yapı Endüstri Merkezi Yayınları', category: 'Beşinci Aşama', color: '#03253A' },
  { number: 95, title: 'İslâm Şehri', author: 'Muhammed Arkoun', publisher: 'İletişim Yayınları', category: 'Beşinci Aşama', color: '#03253A' },
  { number: 96, title: 'Dinler Tarihi', author: 'Mircea Eliade', publisher: 'Kabalcı Yayınları', category: 'Beşinci Aşama', color: '#03253A' },
  { number: 97, title: 'Mitlerin Özellikleri', author: 'Mircea Eliade', publisher: 'Alfa Yayınları', category: 'Beşinci Aşama', color: '#03253A' },
  { number: 98, title: 'Kutsal ve Dindışı', author: 'Mircea Eliade', publisher: 'Gece Yayınları', category: 'Beşinci Aşama', color: '#03253A' },
  { number: 99, title: 'Şamanizm', author: 'Mircea Eliade', publisher: 'İmge Kitabevi', category: 'Beşinci Aşama', color: '#03253A' },
  { number: 100, title: 'Dinî İnançlar ve Düşünceler Tarihi', author: 'Mircea Eliade', publisher: 'Kabalcı Yayınları', category: 'Beşinci Aşama', color: '#03253A', description: '3 cilt' },

  // ═══ REFERANS KİTAPLAR ═══
  // İKİNCİ AŞAMA REFERANSLARI
  { title: 'Kur\'ân-ı Hakîm ve Meâl-i Kerîm', author: 'Hasan Basri Çantay', publisher: 'Risale Yayınları', category: 'Referans Kitaplar', color: '#8B6F47', isReference: true, description: '3 cilt - İkinci Aşama' },
  { title: 'Riyâzü\'s-Sâlihîn', author: 'İmam Nevevî', publisher: 'Diyanet İşleri Başkanlığı', category: 'Referans Kitaplar', color: '#8B6F47', isReference: true, description: '3 cilt - İkinci Aşama' },
  { title: 'Büyük İslâm İlmihâli', author: 'Ömer Nasuhi Bilmen', publisher: 'Ravza Yayınları', category: 'Referans Kitaplar', color: '#8B6F47', isReference: true, description: 'İkinci Aşama' },
  
  // SÖZLÜKLER (İkinci Aşama)
  { title: 'Osmanlıca Türkçe Ansiklopedik Lûgat', author: 'Ferit Devellioğlu', publisher: 'Aydın Kitabevi', category: 'Referans Kitaplar', color: '#8B6F47', isReference: true, description: 'Sözlük - İkinci Aşama' },
  { title: 'Misalli Türkçe Sözlük', author: 'İlhan Ayverdi', publisher: 'Kubbealtı Neşriyat', category: 'Referans Kitaplar', color: '#8B6F47', isReference: true, description: '3 cilt - İkinci Aşama' },
  { title: 'Büyük Türkçe Sözlük', author: 'Mehmet Doğan', publisher: 'Yazar Yayınları', category: 'Referans Kitaplar', color: '#8B6F47', isReference: true, description: 'İkinci Aşama' },
  
  // KAVRAM-TERİM SÖZLÜKLERİ (İkinci Aşama)
  { title: 'Kur\'ân Sözlüğü', author: 'John Penrice', publisher: 'İşaret Yayınları', category: 'Referans Kitaplar', color: '#8B6F47', isReference: true, description: 'Kavram Sözlüğü - İkinci Aşama' },
  { title: 'Kur\'ân Terimleri Sözlüğü', author: 'Mukatil b. Süleyman', publisher: 'İşaret Yayınları', category: 'Referans Kitaplar', color: '#8B6F47', isReference: true, description: 'İkinci Aşama' },
  { title: 'Arap Dili\'nde ve Kur\'ân\'da Farklar Sözlüğü', author: 'Ebû Hilâl el-Askerî', publisher: 'İşaret Yayınları', category: 'Referans Kitaplar', color: '#8B6F47', isReference: true, description: 'İkinci Aşama' },
  { title: 'Kelimeler Arasındaki Farklar', author: 'İsmail Hakkı Bursevî', publisher: 'İşaret Yayınları', category: 'Referans Kitaplar', color: '#8B6F47', isReference: true, description: 'İkinci Aşama' },
  { title: 'Tarifat', author: 'Cürcanî', publisher: 'Litera Yayınları', category: 'Referans Kitaplar', color: '#8B6F47', isReference: true, description: 'İkinci Aşama' },
  { title: 'Müfredat', author: 'Râğıb el-Isfahânî', publisher: 'Litera Yayınları', category: 'Referans Kitaplar', color: '#8B6F47', isReference: true, description: 'İkinci Aşama' },

  // ÜÇÜNCÜ AŞAMA REFERANSLARI
  { title: 'Türk Tarih Deyimleri Sözlüğü', author: 'Zeki Pakalın', publisher: 'MEB Yayınları', category: 'Referans Kitaplar', color: '#8B6F47', isReference: true, description: '3 cilt - Üçüncü Aşama' },
  
  // ROMAN VE TARİH ANLATILARI (Üçüncü Aşama)
  { title: 'Devlet Ana', author: 'Kemal Tahir', publisher: 'İthaki Yayınları', category: 'Referans Kitaplar', color: '#8B6F47', isReference: true, description: 'Roman - Üçüncü Aşama' },
  { title: 'Osmancık', author: 'Tarık Buğra', publisher: 'Ötüken Yayınları', category: 'Referans Kitaplar', color: '#8B6F47', isReference: true, description: 'Roman - Üçüncü Aşama' },
  { title: 'Yaban', author: 'Yakup Kadri Karaosmanoğlu', publisher: 'İletişim Yayınları', category: 'Referans Kitaplar', color: '#8B6F47', isReference: true, description: 'Roman - Üçüncü Aşama' },
  { title: 'Çankaya', author: 'Falih Rıfkı Atay', publisher: 'Pozitif Yayınları', category: 'Referans Kitaplar', color: '#8B6F47', isReference: true, description: 'Yakın Tarih Anlatısı - Üçüncü Aşama' },
  { title: 'Fatih-Harbiye', author: 'Peyami Safa', publisher: 'Ötüken Yayınları', category: 'Referans Kitaplar', color: '#8B6F47', isReference: true, description: 'Roman - Üçüncü Aşama' },
  { title: 'Huzur', author: 'Ahmet Hamdi Tanpınar', publisher: 'Dergah Yayınları', category: 'Referans Kitaplar', color: '#8B6F47', isReference: true, description: 'Roman - Üçüncü Aşama' },

  // DÖRDÜNCÜ AŞAMA REFERANSLARI
  { title: 'Felsefe Sözlüğü', author: 'Ahmet Cevizci', publisher: 'Paradigma Yayınları', category: 'Referans Kitaplar', color: '#8B6F47', isReference: true, description: 'Dördüncü Aşama' },
  { title: 'İslâm Düşünce Atlası', author: 'İbrahim Halil Üçer', publisher: 'Konya Büyükşehir Belediyesi', category: 'Referans Kitaplar', color: '#8B6F47', isReference: true, description: '3 cilt - Dördüncü Aşama' },

  // BEŞİNCİ AŞAMA REFERANSLARI
  { title: 'Hak Dini, Kur\'ân Dili / Elmalılı Tefsiri', author: 'Elmalılı Muhammed Hamdi Yazır', publisher: 'Azim Dağıtım', category: 'Referans Kitaplar', color: '#8B6F47', isReference: true, description: '9 cilt - Beşinci Aşama' },
  { title: 'Keşşaf Tefsiri', author: 'Zemahşerî', publisher: 'Türkiye Yazma Eserler Kurumu', category: 'Referans Kitaplar', color: '#8B6F47', isReference: true, description: '4 cilt, Arapça metinle - Beşinci Aşama' },
  { title: 'İhya-u Ulûmu\'d-Dîn', author: 'İmam Gazâlî', publisher: 'Bedir Yayınları', category: 'Referans Kitaplar', color: '#8B6F47', isReference: true, description: 'Beşinci Aşama' },
  { title: 'Mektûbat', author: 'İmam Rabbânî', publisher: 'Sağlam Yayınevi', category: 'Referans Kitaplar', color: '#8B6F47', isReference: true, description: 'Beşinci Aşama' },
  { title: 'Hüsn ü Aşk', author: 'Şeyh Galib', publisher: 'Kaknüs Yayınları', category: 'Referans Kitaplar', color: '#8B6F47', isReference: true, description: 'Beşinci Aşama' },
  { title: 'A\'mak-ı Hayal', author: 'Filibeli Ahmed Hilmi', publisher: 'Ketebe Yayınları', category: 'Referans Kitaplar', color: '#8B6F47', isReference: true, description: 'Beşinci Aşama' },
];
