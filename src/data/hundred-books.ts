export interface ReadingBook {
  title: string;
  author: string;
  category: string;
  color: string;
  publisher: string;
  description?: string;
  isReference?: boolean;
  number?: string; // "38-40" gibi değerler için string
}

export const readingCategories = [
  'Birinci Aşama',
  'İkinci Aşama',
  'Üçüncü Aşama',
  'Dördüncü Aşama',
  'Beşinci Aşama',
] as const;

export const categorySubtitles: Record<string, string> = {
  'Birinci Aşama': 'Dert Sahibi',
  'İkinci Aşama': 'Ders (Usûl)',
  'Üçüncü Aşama': 'Tarih, Medeniyetler Tarihi ve Tarih Felsefesi',
  'Dördüncü Aşama': 'Modernite, Felsefe ve Sanat',
  'Beşinci Aşama': 'Kurucu Metinler',
};

export const categoryColors: Record<string, string> = {
  'Birinci Aşama': '#F7D49B',
  'İkinci Aşama': '#F0BE6E',
  'Üçüncü Aşama': '#E7A54E',
  'Dördüncü Aşama': '#E08E30',
  'Beşinci Aşama': '#D98818',
};

export const categoryNotes: Record<string, string> = {
  'İkinci Aşama': 'İkinci Aşama okumalardan önce Yahya Kemal, Necip Fazıl, Sezai Karakoç, Erdem Beyazıt ve Cahit Zarifoğlu şiirleri üzerinde yoğunlaşılacak.',
};

export const hundredBooks: ReadingBook[] = [
  // ═══ BİRİNCİ AŞAMA: DERT SAHİBİ (1-20) ═══
  { number: '1', title: "İslam'ın Dirilişi", author: 'Sezai Karakoç', publisher: 'Diriliş Yayınları', category: 'Birinci Aşama', color: '#30D5E1' },
  { number: '2', title: 'İnsanlığın Dirilişi', author: 'Sezai Karakoç', publisher: 'Diriliş Yayınları', category: 'Birinci Aşama', color: '#30D5E1', description: 'Birinci Aşama bitince yeniden okunacak' },
  { number: '3', title: 'Diriliş Neslinin Amentüsü', author: 'Sezai Karakoç', publisher: 'Diriliş Yayınları', category: 'Birinci Aşama', color: '#30D5E1' },
  { number: '4', title: 'Yitik Cennet', author: 'Sezai Karakoç', publisher: 'Diriliş Yayınları', category: 'Birinci Aşama', color: '#30D5E1' },
  { number: '5', title: 'İdeolocya Örgüsü', author: 'Necip Fazıl Kısakürek', publisher: 'Büyük Doğu Yayınları', category: 'Birinci Aşama', color: '#30D5E1' },
  { number: '6', title: "Lem'alar", author: 'Bediüzzaman Said Nursî', publisher: 'Sözler Yayınları', category: 'Birinci Aşama', color: '#30D5E1' },
  { number: '7', title: 'Bu Ülke', author: 'Cemil Meriç', publisher: 'İletişim Yayınları', category: 'Birinci Aşama', color: '#30D5E1', description: 'Birinci Aşama bitince yeniden okunacak' },
  { number: '8', title: 'Beş Şehir', author: 'Ahmet Hamdi Tanpınar', publisher: 'Dergah Yayınları', category: 'Birinci Aşama', color: '#30D5E1', description: 'Birinci Aşama bitince yeniden okunacak' },
  { number: '9', title: 'Yaşamak', author: 'Cahit Zarifoğlu', publisher: 'Beyan Yayınları', category: 'Birinci Aşama', color: '#30D5E1', description: 'Birinci Aşama bitince yeniden okunacak' },
  { number: '10', title: 'İnsanlığın Medeniyet Destanı', author: 'Roger Garaudy', publisher: 'Timaş Yayınları', category: 'Birinci Aşama', color: '#30D5E1' },
  { number: '11', title: 'Gül Yetiştiren Adam', author: 'Rasim Özdenören', publisher: 'İz Yayıncılık', category: 'Birinci Aşama', color: '#30D5E1', description: 'Anlatı' },
  { number: '12', title: 'Yoksulluk İçimizde', author: 'Mustafa Kutlu', publisher: 'Dergah Yayınları', category: 'Birinci Aşama', color: '#30D5E1', description: 'Hikâye' },
  { number: '13', title: 'Ya Tahammül Ya Sefer', author: 'Mustafa Kutlu', publisher: 'Dergah Yayınları', category: 'Birinci Aşama', color: '#30D5E1', description: 'Hikâye' },
  { number: '14', title: 'Bu Böyledir', author: 'Mustafa Kutlu', publisher: 'Dergah Yayınları', category: 'Birinci Aşama', color: '#30D5E1', description: 'Hikâye' },
  { number: '15', title: 'Sır', author: 'Mustafa Kutlu', publisher: 'Dergah Yayınları', category: 'Birinci Aşama', color: '#30D5E1', description: 'Hikâye' },
  { number: '16', title: 'Uzun Hikâye', author: 'Mustafa Kutlu', publisher: 'Dergah Yayınları', category: 'Birinci Aşama', color: '#30D5E1', description: 'Hikâye' },
  { number: '17', title: 'Müslümanca Düşünme Üzerine Denemeler', author: 'Rasim Özdenören', publisher: 'İz Yayıncılık', category: 'Birinci Aşama', color: '#30D5E1' },
  { number: '18', title: 'Üç Zor Mesele', author: 'İsmet Özel', publisher: 'Tiyo Yayınları', category: 'Birinci Aşama', color: '#30D5E1' },
  { number: '19', title: "İslâm'ın Vadettikleri", author: 'Roger Garaudy', publisher: 'Ketebe Yayınları', category: 'Birinci Aşama', color: '#30D5E1' },
  { number: '20', title: 'Doğu ve Batı Arasında İslâm', author: 'Aliya İzzetbegoviç', publisher: 'Timaş Yayınları', category: 'Birinci Aşama', color: '#30D5E1' },

  // ═══ İKİNCİ AŞAMA: DERS (USÛL) (21-40) ═══
  { number: '21', title: 'Okulsuz Toplum', author: 'Ivan Illich', publisher: 'Şule Yayınları', category: 'İkinci Aşama', color: '#0D619A' },
  { number: '22', title: "Türkiye'nin Maarif Davası", author: 'Nurettin Topçu', publisher: 'Dergah Yayınları', category: 'İkinci Aşama', color: '#0D619A' },
  { number: '23', title: 'İslâm Kültür Atlası', author: 'İsmail Faruki', publisher: 'İnkılab Y.', category: 'İkinci Aşama', color: '#0D619A', description: 'Rehber kitap — liste bitince 2. kez okunacak' },
  { number: '24', title: 'İslâm Tarihi', author: 'Filibeli Ahmet Hilmi ve Ziya Nur Aksun', publisher: 'Ötüken Yayınları', category: 'İkinci Aşama', color: '#0D619A', description: '3 cilt' },
  { number: '25', title: 'Kur\'ân-ı Kerîm Işığında Hz. Muhammed Mustafa (sav)', author: 'Osman Nuri Topbaş', publisher: 'Erkam Yayınları', category: 'İkinci Aşama', color: '#0D619A', description: '2 cilt' },
  { number: '26', title: 'Mızraklı İlmihal', author: '', publisher: 'Semerkand Yayınları', category: 'İkinci Aşama', color: '#0D619A' },
  { number: '27', title: 'Komünist Manifesto', author: 'Marx & Engels', publisher: 'Can Yayınları', category: 'İkinci Aşama', color: '#0D619A' },
  { number: '28', title: 'İlm-i Hâl', author: 'S. Ahmet Arvâsî', publisher: 'Bilge Oğuz Yayınları', category: 'İkinci Aşama', color: '#0D619A' },
  { number: '29', title: 'Tefsir Usûlü ve Tarihi', author: 'Ömer Çelik', publisher: 'Erkam Yayınları', category: 'İkinci Aşama', color: '#0D619A' },
  { number: '30', title: 'Sünneti Anlamada Yöntem', author: 'Yusuf el-Karadavî', publisher: 'Nida Yayınları', category: 'İkinci Aşama', color: '#0D619A' },
  { number: '31', title: 'Çöle İnen Nur', author: 'Necip Fazıl Kısakürek', publisher: 'Büyük Doğu Yayınları', category: 'İkinci Aşama', color: '#0D619A' },
  { number: '32', title: 'Fıkıh Usûlü', author: 'Vehbi Zuhayli', publisher: 'Risale Yayınları', category: 'İkinci Aşama', color: '#0D619A' },
  { number: '33', title: 'Tasavvuf', author: 'William Chittick', publisher: 'İz Yayıncılık', category: 'İkinci Aşama', color: '#0D619A' },
  { number: '34', title: 'Kelâma Giriş', author: 'U. Murat Kılavuz - A. Saim Kılavuz', publisher: 'Dergah Yayınları', category: 'İkinci Aşama', color: '#0D619A' },
  { number: '35', title: "İslâm'ın Vizyonu", author: 'William Chittick', publisher: 'İz Yayıncılık', category: 'İkinci Aşama', color: '#0D619A' },
  { number: '36', title: 'Yoldaki İşaretler', author: 'Seyyid Kutup', publisher: 'Beka Yayınları', category: 'İkinci Aşama', color: '#0D619A' },
  { number: '37', title: 'İslâm Düşüncesi', author: 'Muhammed İkbal', publisher: 'Külliyat Yayınları', category: 'İkinci Aşama', color: '#0D619A' },
  { number: '38-40', title: 'Çağ ve İlham I-II-III', author: 'Sezai Karakoç', publisher: 'Diriliş Yayınları', category: 'İkinci Aşama', color: '#0D619A' },

  // İKİNCİ AŞAMA REFERANS KİTAPLARI
  { number: 'REF', title: 'Kur\'ân-ı Hakîm ve Meâl-i Kerîm', author: 'Hasan Basri Çantay', publisher: 'Risale Yayınları', category: 'İkinci Aşama', color: '#0D619A', isReference: true, description: '3 cilt' },
  { number: 'REF', title: 'Riyâzü\'s-Sâlihîn', author: 'İmam Nevevî', publisher: 'Diyanet İşleri Başkanlığı', category: 'İkinci Aşama', color: '#0D619A', isReference: true, description: '3 cilt' },
  { number: 'REF', title: 'Büyük İslâm İlmihâli', author: 'Ömer Nasuhi Bilmen', publisher: 'Ravza Yayınları', category: 'İkinci Aşama', color: '#0D619A', isReference: true },

  // SÖZLÜKLER
  { number: 'REF', title: 'Osmanlıca Türkçe Ansiklopedik Lûgat', author: 'Ferit Devellioğlu', publisher: 'Aydın Kitabevi', category: 'İkinci Aşama', color: '#0D619A', isReference: true, description: 'Sözlük' },
  { number: 'REF', title: 'Misalli Türkçe Sözlük', author: 'Ayverdi', publisher: 'Kubbealtı Neşriyat', category: 'İkinci Aşama', color: '#0D619A', isReference: true, description: '3 cilt' },
  { number: 'REF', title: 'Büyük Türkçe Sözlük', author: 'Mehmet Doğan', publisher: 'Yazar Yayınları', category: 'İkinci Aşama', color: '#0D619A', isReference: true },
  
  // KAVRAM-TERİM SÖZLÜKLERİ
  { number: 'REF', title: 'Kur\'ân Sözlüğü', author: 'John Penrice', publisher: 'İşaret Yayınları', category: 'İkinci Aşama', color: '#0D619A', isReference: true },
  { number: 'REF', title: 'Kur\'ân Terimleri Sözlüğü', author: 'Mukatil b. Süleyman', publisher: 'İşaret Yayınları', category: 'İkinci Aşama', color: '#0D619A', isReference: true },
  { number: 'REF', title: 'Arap Dilinde ve Kur\'ân\'da Farklar Sözlüğü', author: 'Ebû Hilâl el-Askerî', publisher: 'İşaret Yayınları', category: 'İkinci Aşama', color: '#0D619A', isReference: true },
  { number: 'REF', title: 'Kelimeler Arasındaki Farklar', author: 'İsmail Hakkı Bursevî', publisher: 'İşaret Yayınları', category: 'İkinci Aşama', color: '#0D619A', isReference: true },
  { number: 'REF', title: 'Tarifat', author: 'Cürcanî', publisher: 'Litera Yayınları', category: 'İkinci Aşama', color: '#0D619A', isReference: true },
  { number: 'REF', title: 'Müfredat - Kur\'ân Istılahları Sözlüğü', author: 'Râğıb el-Isfehânî', publisher: 'Litera Yayınları', category: 'İkinci Aşama', color: '#0D619A', isReference: true },

  // ═══ ÜÇÜNCÜ AŞAMA: TARİH, MEDENİYETLER TARİHİ VE TARİH FELSEFESİ (41-55) ═══
  { number: '41', title: 'Tarih Hırsızlığı', author: 'Jack Goody', publisher: 'İş Bankası Yayınları', category: 'Üçüncü Aşama', color: '#E7A54E' },
  { number: '42', title: 'Şarkiyatçılık', author: 'Edward Said', publisher: 'Metis Yayınları', category: 'Üçüncü Aşama', color: '#E7A54E' },
  { number: '43', title: 'Küresel Çağda Tarih Yazmak', author: 'Lynn Hunt', publisher: 'Küre Yayınları', category: 'Üçüncü Aşama', color: '#E7A54E' },
  { number: '44', title: 'Dünya Tarihini Yeniden Düşünmek', author: 'Marshall Hodgson', publisher: 'Vadi Yayınları', category: 'Üçüncü Aşama', color: '#E7A54E' },
  { number: '45', title: 'Dünya Tarihi', author: 'William McNeill', publisher: 'İmge Yayınları', category: 'Üçüncü Aşama', color: '#E7A54E' },
  { number: '46', title: 'Uygarlıkların Grameri', author: 'Fernand Braudel', publisher: 'İmge Yayınları', category: 'Üçüncü Aşama', color: '#E7A54E' },
  { number: '47', title: 'Bir Bunalım Çağında Toplum Felsefeleri', author: 'Pitirim Sorokin', publisher: 'Salyangoz Yayınları', category: 'Üçüncü Aşama', color: '#E7A54E' },
  { number: '48-49', title: 'Tarih Bilinci', author: 'Arnold Toynbee', publisher: '', category: 'Üçüncü Aşama', color: '#E7A54E', description: '2 cilt' },
  { number: '50', title: 'İslâm Medeniyeti Tarihi', author: 'Wilhelm Barthold, Mehmet Fuad Köprülü', publisher: 'Alfa Yayınları', category: 'Üçüncü Aşama', color: '#E7A54E' },
  { number: '51-53', title: "İslâm'ın Serüveni", author: 'Marshall Hodgson', publisher: 'Phoenix Yayınları', category: 'Üçüncü Aşama', color: '#E7A54E', description: '3 cilt' },
  { number: '54', title: 'Türk Cihan Hâkimiyeti Mefkûresi Tarihi', author: 'Osman Turan', publisher: 'Ötüken Yayınları', category: 'Üçüncü Aşama', color: '#E7A54E' },
  { number: '55', title: 'Zihniyet ve Din', author: 'Sabri Ülgener', publisher: 'Derin Yayınları', category: 'Üçüncü Aşama', color: '#E7A54E' },

  // ÜÇÜNCÜ AŞAMA REFERANS
  { number: 'REF', title: 'Türk Tarih Deyimleri Sözlüğü', author: 'Zeki Pakalın', publisher: '', category: 'Üçüncü Aşama', color: '#E7A54E', isReference: true, description: '3 cilt' },
  
  // ROMAN VE TARİH ANLATILARI
  { number: 'REF', title: 'Devlet Ana', author: 'Kemal Tahir', publisher: 'İthaki Yayınları', category: 'Üçüncü Aşama', color: '#E7A54E', isReference: true, description: 'Roman' },
  { number: 'REF', title: 'Osmancık', author: 'Tarık Buğra', publisher: 'Ötüken Yayınları', category: 'Üçüncü Aşama', color: '#E7A54E', isReference: true, description: 'Roman' },
  { number: 'REF', title: 'Yaban', author: 'Yakup Kadri Karaosmanoğlu', publisher: 'İletişim Yayınları', category: 'Üçüncü Aşama', color: '#E7A54E', isReference: true, description: 'Roman' },
  { number: 'REF', title: 'Çankaya', author: 'Falih Rıfkı Atay', publisher: 'Pozitif Yayınları', category: 'Üçüncü Aşama', color: '#E7A54E', isReference: true, description: 'Yakın Tarih Anlatısı' },
  { number: 'REF', title: 'Fatih-Harbiye', author: 'Peyami Safa', publisher: 'Ötüken Yayınları', category: 'Üçüncü Aşama', color: '#E7A54E', isReference: true, description: 'Roman' },
  { number: 'REF', title: 'Huzur', author: 'Ahmet Hamdi Tanpınar', publisher: 'Dergah Yayınları', category: 'Üçüncü Aşama', color: '#E7A54E', isReference: true, description: 'Roman' },

  // ═══ DÖRDÜNCÜ AŞAMA: MODERNİTE, FELSEFE VE SANAT (56-80) ═══
  { number: '56', title: 'Modern Dünyanın Bunalımı', author: 'Rene Guenon', publisher: 'İnsan Yayınları', category: 'Dördüncü Aşama', color: '#B7A78F' },
  { number: '57', title: 'Hikmetin Yapıtaşları: Felsefeye Giriş', author: 'Douglas J. Soccio', publisher: 'Kaknüs Yayınları', category: 'Dördüncü Aşama', color: '#B7A78F' },
  { number: '58', title: 'Avrupa Düşüncesinin Serüveni', author: 'Jaqueline Russ', publisher: 'Doğu Batı Yayınları', category: 'Dördüncü Aşama', color: '#B7A78F' },
  { number: '59', title: 'Batı Düşüncesi Tarihi', author: 'Richard Tarnas', publisher: 'Külliyat Yayınları', category: 'Dördüncü Aşama', color: '#B7A78F', description: '2 cilt' },
  { number: '60', title: 'Sosyolojik Düşünce Geleneği', author: 'Robert Nisbet', publisher: 'Paradigma Yayınları', category: 'Dördüncü Aşama', color: '#B7A78F' },
  { number: '61', title: 'Siyasî Felsefenin Büyük Düşünürleri', author: 'William Ebenstein', publisher: 'Şule Yayınları', category: 'Dördüncü Aşama', color: '#B7A78F', description: 'Çev.: İsmet Özel' },
  { number: '62', title: 'İnsanın Durumu', author: 'Lewis Mumford', publisher: 'Açılımkitap Yayınları', category: 'Dördüncü Aşama', color: '#B7A78F' },
  { number: '63', title: 'İslâm Düşüncesinde İlimlerin Tasnifi', author: 'Osman Bakar', publisher: 'İnsan Yayınları', category: 'Dördüncü Aşama', color: '#B7A78F' },
  { number: '64', title: 'Hilal Doğarken', author: 'Ziyaüddin Serdar', publisher: 'İnsan Yayınları', category: 'Dördüncü Aşama', color: '#B7A78F' },
  { number: '65', title: 'Fıkıh Usûlünün Mahiyeti ve Gayesi', author: 'A. Cüneyd Köksal', publisher: 'İSAM Yayınları', category: 'Dördüncü Aşama', color: '#B7A78F' },
  { number: '66', title: 'Varolmanın Boyutları', author: 'William Chittick', publisher: 'İnsan Yayınları', category: 'Dördüncü Aşama', color: '#B7A78F' },
  { number: '67', title: 'İslâm Felsefesi: Tarih ve Problemler', author: 'M. Cüneyt Kaya', publisher: 'İSAM Yayınları', category: 'Dördüncü Aşama', color: '#B7A78F', description: 'edisyon' },
  { number: '68', title: 'İslâm Düşüncesi Tarihi', author: 'M. Şerif', publisher: 'İnsan Yayınları', category: 'Dördüncü Aşama', color: '#B7A78F', description: '2 cilt' },
  { number: '69', title: "Türkiye'nin Çağdaş Düşünce Tarihi", author: 'Hilmi Ziya Ülken', publisher: 'İş Bankası Yayınları', category: 'Dördüncü Aşama', color: '#B7A78F' },
  { number: '70', title: 'Edebiyat Yazıları 1-2', author: 'Sezai Karakoç', publisher: 'Diriliş Yayınları', category: 'Dördüncü Aşama', color: '#B7A78F' },
  { number: '71', title: 'Kırk Ambar', author: 'Cemil Meriç', publisher: 'İletişim Yayınları', category: 'Dördüncü Aşama', color: '#B7A78F' },
  { number: '72', title: 'Yaşadığım Gibi', author: 'Ahmet Hamdi Tanpınar', publisher: 'Dergah Yayınları', category: 'Dördüncü Aşama', color: '#B7A78F' },
  { number: '73', title: 'Sanatın Öyküsü', author: 'Ernst Gombrich', publisher: 'Remzi Kitabevi', category: 'Dördüncü Aşama', color: '#B7A78F' },
  { number: '74', title: 'Sanatın İcadı: Bir Kültür Tarihi', author: 'Larry Shiner', publisher: 'Ayrıntı Yayınları', category: 'Dördüncü Aşama', color: '#B7A78F' },
  { number: '75', title: 'Sanat Tarihinin Tarihi', author: 'Vernon Hyde Minor', publisher: 'Koç Üniversitesi Yayınları', category: 'Dördüncü Aşama', color: '#B7A78F' },
  { number: '76', title: 'Aşk Estetiği', author: 'Beşir Ayvazoğlu', publisher: 'Kapı Yayınları', category: 'Dördüncü Aşama', color: '#B7A78F' },
  { number: '77', title: 'İslâm Sanatı: Dil ve Anlam', author: 'Titus Burkhardt', publisher: 'Klasik Yayınları', category: 'Dördüncü Aşama', color: '#B7A78F' },
  { number: '78', title: "İslâm'da Şehir ve Mimari", author: 'Turgut Cansever', publisher: '', category: 'Dördüncü Aşama', color: '#B7A78F' },
  { number: '79', title: 'Gözün Vicdanı: Kentin Tasarımı ve Toplumsal Yaşam', author: 'Richard Sennett', publisher: 'Ayrıntı Yayınları', category: 'Dördüncü Aşama', color: '#B7A78F' },
  { number: '80', title: 'Sinemanın Hakikati', author: 'Enver Gülşen', publisher: 'H Yayınları', category: 'Dördüncü Aşama', color: '#B7A78F', description: '2 cilt' },

  // DÖRDÜNCÜ AŞAMA REFERANS
  { number: 'REF', title: 'Felsefe Sözlüğü', author: 'Ahmet Cevizci', publisher: 'Paradigma Yayınları', category: 'Dördüncü Aşama', color: '#B7A78F', isReference: true },
  { number: 'REF', title: 'İslâm Düşünce Atlası', author: 'İbrahim Halil Üçer', publisher: 'Konya Büyükşehir Belediyesi', category: 'Dördüncü Aşama', color: '#B7A78F', isReference: true, description: '3 cilt' },

  // ROMANLAR
  { number: 'REF', title: 'Vadideki Zambak', author: 'Balzac', publisher: 'İş Bankası Yayınları', category: 'Dördüncü Aşama', color: '#B7A78F', isReference: true },
  { number: 'REF', title: 'Donkişot', author: 'Cervantes', publisher: 'YKY Yayınları', category: 'Dördüncü Aşama', color: '#B7A78F', isReference: true },
  { number: 'REF', title: 'İlâhî Komedya', author: 'Dante', publisher: 'Oda Yayınları', category: 'Dördüncü Aşama', color: '#B7A78F', isReference: true },
  { number: 'REF', title: 'Suç ve Ceza', author: 'Dostoyevski', publisher: 'İş Bankası Yayınları', category: 'Dördüncü Aşama', color: '#B7A78F', isReference: true },
  { number: 'REF', title: 'Karamazof Kardeşler', author: 'Dostoyevski', publisher: 'İş Bankası Yayınları', category: 'Dördüncü Aşama', color: '#B7A78F', isReference: true },
  { number: 'REF', title: 'Değişim', author: 'Kafka', publisher: 'Cem Yayınları', category: 'Dördüncü Aşama', color: '#B7A78F', isReference: true },
  { number: 'REF', title: 'Niteliksiz Adam', author: 'Robert Musil', publisher: 'Aylak Adam Yayınları', category: 'Dördüncü Aşama', color: '#B7A78F', isReference: true, description: '4 cilt' },

  // ═══ BEŞİNCİ AŞAMA: KLASİKLER (75-100) ═══
  { number: '75', title: 'Konfüçyüs — Konuşmalar / Analektler', author: 'Konfüçyüs', publisher: 'Say Yayınları', category: 'Beşinci Aşama', color: '#03253A', description: 'Çev. Murat Karlıdağ' },
  { number: '76', title: 'Devlet', author: 'Eflatun', publisher: 'İş Bankası Yayınları', category: 'Beşinci Aşama', color: '#03253A' },
  { number: '77', title: "Nikomakhos'a Etik; Politika; Poetika; Metafizik; Ruh Üzerine", author: 'Aristo', publisher: 'Say/Pinhan/İş Bankası Yayınları', category: 'Beşinci Aşama', color: '#03253A', description: 'Çev. Ömer Aygün, Grekçe metinle birlikte' },
  { number: '78', title: 'İtiraflar', author: 'Aziz Augustine', publisher: 'Kabalcı Yayınları', category: 'Beşinci Aşama', color: '#03253A' },
  { number: '79', title: 'Meditasyonlar; Metot Üzerine Düşünme', author: 'Descartes', publisher: 'Pinhan Yayınları', category: 'Beşinci Aşama', color: '#03253A' },
  { number: '80', title: 'Teolojik-Politik İnceleme; Etika', author: 'Spinoza', publisher: 'Dost Kitabevi', category: 'Beşinci Aşama', color: '#03253A' },
  { number: '81', title: 'Yönetim Üzerine İki İnceleme', author: 'John Locke', publisher: 'Alfa Yayınları', category: 'Beşinci Aşama', color: '#03253A' },
  { number: '82', title: 'İnsanın Anlama Yetisi Üzerine Bir Soruşturma', author: 'David Hume', publisher: 'İş Bankası Yayınları', category: 'Beşinci Aşama', color: '#03253A' },
  { number: '83', title: 'Saf Aklın Kritiği; Pratik Aklın Kritiği; Yargı Gücünün Kritiği', author: 'Kant', publisher: '', category: 'Beşinci Aşama', color: '#03253A' },
  { number: '84', title: 'Tarih Felsefesi; Estetik', author: 'Hegel', publisher: 'Kırmızı Kedi Yayınları', category: 'Beşinci Aşama', color: '#03253A' },
  { number: '85', title: "Deccal; Putların Alacakaranlığında; İyinin ve Kötünün Ötesinde", author: 'Nietzsche', publisher: 'Külliyat / İş Bankası Yayınları', category: 'Beşinci Aşama', color: '#03253A', description: 'Çev. Yusuf Kaplan / Mustafa Tüzel' },
  { number: '86', title: 'Varlık ve Zaman', author: 'Heidegger', publisher: 'Alfa Yayınları', category: 'Beşinci Aşama', color: '#03253A', description: 'Çev. Kaan Ökten' },
  { number: '87', title: 'Milel ve Nihal', author: 'Şehristânî', publisher: 'Türkiye Yazma Eserler', category: 'Beşinci Aşama', color: '#03253A', description: 'Arapça metinle birlikte' },
  { number: '88', title: 'Mâtüridiye Akaidi', author: 'Nûreddin es-Sâbûnî', publisher: 'M.Ü. İlahiyat Fakültesi', category: 'Beşinci Aşama', color: '#03253A' },
  { number: '89', title: 'Fıkh-ı Ekber; Âlim ve Müteallim', author: 'İmam-ı Azam', publisher: 'Şamil Yayınları', category: 'Beşinci Aşama', color: '#03253A' },
  { number: '90', title: "Harfler Kitabı; İlimlerin Sayımı; Medinetü'l-Fazıla", author: 'Fârâbî', publisher: 'Türkiye Yazma Eserler / Litera', category: 'Beşinci Aşama', color: '#03253A', description: 'Arapça metinle birlikte' },
  { number: '91', title: 'İşaretler ve Tenbihatlar', author: 'İbn Sina', publisher: 'Türkiye Yazma Eserler', category: 'Beşinci Aşama', color: '#03253A' },
  { number: '92', title: "Bilgi, Varlık, Yol; Mustesfa; Tehafütü'l-Felâsife", author: 'Gazâlî', publisher: 'Ketebe / Klasik Yayınları', category: 'Beşinci Aşama', color: '#03253A', description: '3 kurucu risale bir arada' },
  { number: '93', title: "Tehafütü't-Tehafüt; Faslu'l-Makal", author: 'İbn Rüşd', publisher: 'Dergah Yayınları', category: 'Beşinci Aşama', color: '#03253A' },
  { number: '94', title: 'Kuşeyrî Risalesi', author: 'İmam Kuşeyrî', publisher: 'Dergah Yayınları', category: 'Beşinci Aşama', color: '#03253A' },
  { number: '95', title: "Füsûsu'l-Hikem", author: 'İbn Arabî', publisher: 'Alfa Yayınları', category: 'Beşinci Aşama', color: '#03253A', description: 'Ekrem Demirli tercümesi ve şerhi' },
  { number: '96', title: 'Mukaddime', author: 'İbn Haldun', publisher: 'Dergah Yayınları', category: 'Beşinci Aşama', color: '#03253A', description: 'Çev. Süleyman Uludağ' },
  { number: '97', title: "Şerhu'l-Mevâkıf", author: 'Cürcânî', publisher: 'Türkiye Yazma Eserler', category: 'Beşinci Aşama', color: '#03253A', description: 'Arapça metinle birlikte' },
  { number: '98', title: 'Kutadgu Bilig', author: 'Yusuf Has Hâcib', publisher: 'Ötüken Yayınları', category: 'Beşinci Aşama', color: '#03253A' },
  { number: '99', title: 'Divân-ı Hikmet ve Yunus Emre Divanı', author: 'Ahmed Yesevî / Yunus Emre', publisher: 'Ketebe Y. / DİB', category: 'Beşinci Aşama', color: '#03253A' },
  { number: '100', title: 'Mesnevî', author: 'Mevlânâ Celaleddin Rûmî', publisher: 'Konya Büyükşehir Belediyesi', category: 'Beşinci Aşama', color: '#03253A' },

  // BEŞİNCİ AŞAMA REFERANS
  { number: 'REF', title: 'Hak Dini, Kur\'ân Dili / Elmalılı Tefsiri', author: 'Elmalılı Muhammed Hamdi Yazır', publisher: '', category: 'Beşinci Aşama', color: '#03253A', isReference: true, description: '9 cilt' },
  { number: 'REF', title: 'Keşşaf Tefsiri', author: 'Zemahşerî', publisher: 'Türkiye Yazma Eserler', category: 'Beşinci Aşama', color: '#03253A', isReference: true, description: '4 cilt, Arapça metinle birlikte' },
  { number: 'REF', title: 'İhya-u Ulûmu\'d-Dîn', author: 'Gazâlî', publisher: 'Bedir Yayınları', category: 'Beşinci Aşama', color: '#03253A', isReference: true },
  { number: 'REF', title: 'Mektûbat', author: 'İmam Rabbânî', publisher: 'Semerkand Yayınları', category: 'Beşinci Aşama', color: '#03253A', isReference: true, description: '3 cilt' },
  { number: 'REF', title: 'Hüsn ü Aşk', author: 'Şeyh Galip', publisher: 'Dergah Yayınları', category: 'Beşinci Aşama', color: '#03253A', isReference: true },
  { number: 'REF', title: 'A\'mak-ı Hayal', author: 'Filibeli Ahmed Hilmi', publisher: 'Kaknüs Yayınları', category: 'Beşinci Aşama', color: '#03253A', isReference: true },
];
