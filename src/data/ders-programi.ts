export interface Ders {
  saat: string;
  ders: string;
  hoca: string;
  sure: string;
}

export interface GunProgrami {
  gun: string;
  dersler: Ders[];
}

export interface KademeProgrami {
  kademe: string;
  kisa: string;
  programlar: GunProgrami[];
}

export const dersProgramlari: KademeProgrami[] = [
{
    kademe: 'Hazırlık',
    kisa: 'Hazırlık',
    programlar: [
      {
        gun: 'Pazartesi',
        dersler: [
          { saat: '21:30', ders: 'Sesin Nefesi: Nefesin Sesi', hoca: 'Yücel Arzen', sure: '90 dk' },
        ],
      },
      {
        gun: 'Salı',
        dersler: [
          { saat: '21:30', ders: 'Fütûhât-ı Medeniyye', hoca: 'Yusuf Kaplan', sure: '90 dk' },
        ],
      },
      {
        gun: 'Çarşamba',
        dersler: [
          { saat: '21:30', ders: 'Öncüler', hoca: 'Saadettin Acar', sure: '90 dk' },
        ],
      },
      {
        gun: 'Perşembe',
        dersler: [
          { saat: '21:30', ders: 'Bugünün Fotoğraflarıyla Dört Şehrin Hikayesi: 1-Kudüs', hoca: 'Ömer Lekesiz', sure: '90 dk' },
        ],
      },
      {
        gun: 'Cuma',
        dersler: [
          { saat: '20:00', ders: 'Kitap Tahlili', hoca: '-', sure: '90 dk' },
        ],
      },
      {
        gun: 'Cumartesi',
        dersler: [
          { saat: '20:00', ders: 'MTO Seminer / MTO Makale', hoca: '-', sure: '90 dk' },
        ],
      },
      {
        gun: 'Pazar',
        dersler: [
          { saat: '20:00', ders: 'Sinirbilim ve Fıtrat Düzeni', hoca: 'Samira Yusifova', sure: '90 dk' },
        ],
      },
    ],
  },
  {
    kademe: '1. Kademe 2. Dönem',
    kisa: '1. Kademe',
    programlar: [
      {
        gun: 'Pazartesi',
        dersler: [
          { saat: '18:00', ders: 'Modern Arapça A1', hoca: '-', sure: '120 dk' },
          { saat: '20:00', ders: 'Düşünce Tarihi 1', hoca: 'Tahsin Görgün', sure: '90 dk' },
          { saat: '21:30', ders: 'Sesin Nefesi: Nefesin Sesi', hoca: 'Yücel Arzen', sure: '90 dk' },
        ],
      },
      {
        gun: 'Salı',
        dersler: [
          { saat: '18:00', ders: 'Modern Arapça A1', hoca: '-', sure: '120 dk' },
          { saat: '20:00', ders: 'İslâm İlimler Tasavvuru', hoca: 'Asım Cüneyd Köksal', sure: '90 dk' },
          { saat: '21:30', ders: 'Fütûhât-ı Medeniyye', hoca: 'Yusuf Kaplan', sure: '90 dk' },
        ],
      },
      {
        gun: 'Çarşamba',
        dersler: [
          { saat: '18:00', ders: 'Modern Arapça A1', hoca: '-', sure: '120 dk' },
          { saat: '21:30', ders: 'Öncüler', hoca: 'Saadettin Acar', sure: '90 dk' },
        ],
      },
      {
        gun: 'Perşembe',
        dersler: [
          { saat: '18:00', ders: 'Modern Arapça A1', hoca: '-', sure: '120 dk' },
          { saat: '21:30', ders: 'Bugünün Fotoğraflarıyla Dört Şehrin Hikayesi: 1-Kudüs', hoca: 'Ömer Lekesiz', sure: '90 dk' },
        ],
      },
      {
        gun: 'Cuma',
        dersler: [
          { saat: '18:00', ders: 'Modern Arapça A1', hoca: '-', sure: '120 dk' },
          { saat: '20:00', ders: 'Kitap Tahlili', hoca: '-', sure: '90 dk' },
        ],
      },
      {
        gun: 'Cumartesi',
        dersler: [
          { saat: '18:00', ders: 'Osmanlıca', hoca: '-', sure: '120 dk' },
          { saat: '20:00', ders: 'MTO Seminer / MTO Makale', hoca: '-', sure: '90 dk' },
          { saat: '21:30', ders: "Felsefe'nin Düşüncesi, Düşünce'nin Felsefesi", hoca: 'Ahmet Dağ', sure: '90 dk' },
        ],
      },
      {
        gun: 'Pazar',
        dersler: [
          { saat: '19:00', ders: 'İngilizce A-B Seviyesi', hoca: '-', sure: '120 dk' },
          { saat: '20:00', ders: 'Sosyal Teori', hoca: 'Bengül Güngörmez', sure: '90 dk' },
        ],
      },
    ]
  },
{
    kademe: '2. Kademe 2. Dönem',
    kisa: '2. Kademe',
    programlar: [
      {
        gun: 'Pazartesi',
        dersler: [
          { saat: '20:00', ders: 'Elmalılı Tefsiri', hoca: 'Asım Cüneyd Köksal', sure: '90 dk' },
          { saat: '21:30', ders: 'Sesin Nefesi: Nefesin Sesi', hoca: 'Yücel Arzen', sure: '90 dk' },
        ],
      },
      {
        gun: 'Salı',
        dersler: [
          { saat: '20:00', ders: 'Telkinden Tekniğe: Romanın Eleştirel Tarihi', hoca: 'Özlem Fedai', sure: '90 dk' },
          { saat: '21:30', ders: 'Fütûhât-ı Medeniyye', hoca: 'Yusuf Kaplan', sure: '90 dk' },
        ],
      },
      {
        gun: 'Çarşamba',
        dersler: [
          { saat: '20:00', ders: 'Siyaset Düşüncesi', hoca: 'Bengül Güngörmez', sure: '90 dk' },
          { saat: '21:30', ders: 'Öncüler', hoca: 'Saadettin Acar', sure: '90 dk' },
        ],
      },
      {
        gun: 'Perşembe',
        dersler: [
          { saat: '20:00', ders: 'Düşünce Tarihi 2', hoca: 'Tahsin Görgün', sure: '90 dk' },
          { saat: '21:30', ders: 'Bugünün Fotoğraflarıyla Dört Şehrin Hikayesi: 1-Kudüs', hoca: 'Ömer Lekesiz', sure: '90 dk' },
        ],
      },
      {
        gun: 'Cuma',
        dersler: [
          { saat: '20:00', ders: 'Kitap Tahlili', hoca: '-', sure: '90 dk' },
          { saat: '21:30', ders: 'Şiirin Şuuru: Şuurun Şiiri', hoca: 'Celal Fedai', sure: '90 dk' },
        ],
      },
      {
        gun: 'Cumartesi',
        dersler: [
          { saat: '20:00', ders: 'MTO Seminer / MTO Makale', hoca: '-', sure: '90 dk' },
          { saat: '21:30', ders: "Felsefe'nin Düşüncesi, Düşünce'nin Felsefesi", hoca: 'Ahmet Dağ', sure: '90 dk' },
        ],
      },
      {
        gun: 'Pazar',
        dersler: [
          { saat: '20:00', ders: 'Sinirbilim ve Fıtrat Düzeni', hoca: 'Samira Yusifova', sure: '90 dk' },
          { saat: '21:30', ders: 'Metafiziğin Temelleri, Temellerin Metafiziği', hoca: 'İbrahim Bahçi', sure: '90 dk' },
        ],
      },
    ]
  },
{
    kademe: '3. Kademe 2. Dönem',
    kisa: '3. Kademe',
    programlar: [
      {
        gun: 'Pazartesi',
        dersler: [
          { saat: '20:00', ders: 'Elmalılı Tefsiri', hoca: 'Asım Cüneyd Köksal', sure: '90 dk' },
          { saat: '21:30', ders: 'Sesin Nefesi: Nefesin Sesi', hoca: 'Yücel Arzen', sure: '90 dk' },
        ],
      },
      {
        gun: 'Salı',
        dersler: [
          { saat: '20:00', ders: 'Telkinden Tekniğe: Romanın Eleştirel Tarihi', hoca: 'Özlem Fedai', sure: '90 dk' },
          { saat: '21:30', ders: 'Fütûhât-ı Medeniyye', hoca: 'Yusuf Kaplan', sure: '90 dk' },
        ],
      },
      {
        gun: 'Çarşamba',
        dersler: [
          { saat: '20:00', ders: 'Siyaset Düşüncesi', hoca: 'Bengül Güngörmez', sure: '90 dk' },
          { saat: '21:30', ders: 'Öncüler', hoca: 'Saadettin Acar', sure: '90 dk' },
        ],
      },
      {
        gun: 'Perşembe',
        dersler: [
          { saat: '20:00', ders: 'Ehli Sünnetin Tarihi Rolü', hoca: 'Abdulkadir Turan', sure: '90 dk' },
          { saat: '21:30', ders: 'Bugünün Fotoğraflarıyla Dört Şehrin Hikayesi: 1-Kudüs', hoca: 'Ömer Lekesiz', sure: '90 dk' },
        ],
      },
      {
        gun: 'Cuma',
        dersler: [
          { saat: '20:00', ders: 'Kitap Tahlili', hoca: '-', sure: '90 dk' },
          { saat: '21:30', ders: 'Şiirin Şuuru: Şuurun Şiiri', hoca: 'Celal Fedai', sure: '90 dk' },
        ],
      },
      {
        gun: 'Cumartesi',
        dersler: [
          { saat: '20:00', ders: 'MTO Seminer / MTO Makale', hoca: '-', sure: '90 dk' },
          { saat: '21:30', ders: "Felsefe'nin Düşüncesi, Düşünce'nin Felsefesi", hoca: 'Ahmet Dağ', sure: '90 dk' },
        ],
      },
      {
        gun: 'Pazar',
        dersler: [
          { saat: '20:00', ders: 'Sinirbilim ve Fıtrat Düzeni', hoca: 'Samira Yusifova', sure: '90 dk' },
          { saat: '21:30', ders: 'Metafiziğin Temelleri, Temellerin Metafiziği', hoca: 'İbrahim Bahçi', sure: '90 dk' },
        ],
      },
    ]
  },
{
    kademe: 'İhtisas 2. Dönem',
    kisa: 'İhtisas',
    programlar: [
      {
        gun: 'Pazartesi',
        dersler: [
          { saat: '20:00', ders: 'Elmalılı Tefsiri', hoca: 'Asım Cüneyd Köksal', sure: '90 dk' },
          { saat: '21:30', ders: 'Sesin Nefesi: Nefesin Sesi', hoca: 'Yücel Arzen', sure: '90 dk' },
        ],
      },
      {
        gun: 'Salı',
        dersler: [
          { saat: '20:00', ders: 'Telkinden Tekniğe: Romanın Eleştirel Tarihi', hoca: 'Özlem Fedai', sure: '90 dk' },
          { saat: '21:30', ders: 'Fütûhât-ı Medeniyye', hoca: 'Yusuf Kaplan', sure: '90 dk' },
        ],
      },
      {
        gun: 'Çarşamba',
        dersler: [
          { saat: '20:00', ders: 'Yapay Zekâ, İslâm ve Etik', hoca: 'Ahmet Dağ', sure: '90 dk' },
          { saat: '21:30', ders: 'Öncüler', hoca: 'Saadettin Acar', sure: '90 dk' },
        ],
      },
      {
        gun: 'Perşembe',
        dersler: [
          { saat: '20:00', ders: 'Ehli Sünnetin Tarihi Rolü', hoca: 'Abdulkadir Turan', sure: '90 dk' },
          { saat: '21:30', ders: "Klasikten Çağdaşa Batı Düşüncesinin Serüveni", hoca: 'Kasım Küçükalp', sure: '90 dk' },
        ],
      },
      {
        gun: 'Cuma',
        dersler: [
          { saat: '20:00', ders: 'Kitap Tahlili', hoca: '-', sure: '90 dk' },
          { saat: '21:30', ders: 'Şiirin Şuuru: Şuurun Şiiri', hoca: 'Celal Fedai', sure: '90 dk' },
        ],
      },
      {
        gun: 'Cumartesi',
        dersler: [
          { saat: '20:00', ders: 'MTO Seminer / MTO Makale', hoca: '-', sure: '90 dk' },
          { saat: '21:30', ders: 'İktisadî İlâhiyât', hoca: 'Melih Oktay', sure: '90 dk' },
        ],
      },
      {
        gun: 'Pazar',
        dersler: [
          { saat: '20:00', ders: 'Sinirbilim ve Fıtrat Düzeni', hoca: 'Samira Yusifova', sure: '90 dk' },
          { saat: '21:30', ders: 'Metafiziğin Temelleri, Temellerin Metafiziği', hoca: 'İbrahim Bahçi', sure: '90 dk' },
        ],
      },
    ]
  },
];

// Tatil dönemleri — dersler bu tarihlerde yapılmaz
export interface TatilDonemi {
  baslangic: string; // YYYY-MM-DD
  bitis: string;     // YYYY-MM-DD (dahil)
  aciklama: string;
  donusTarihi: string; // Gösterilecek metin
}

export const tatilDonemleri: TatilDonemi[] = [
  {
    baslangic: '2026-03-14',
    bitis: '2026-03-22',
    aciklama: 'Ramazan Bayramı Tatili',
    donusTarihi: '23 Mart 2026 Pazartesi',
  },
];

export function bugunTatilMi(): TatilDonemi | null {
  const now = new Date();
  const tr = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Istanbul' }));
  const bugun = tr.toISOString().slice(0, 10); // YYYY-MM-DD

  for (const tatil of tatilDonemleri) {
    if (bugun >= tatil.baslangic && bugun <= tatil.bitis) {
      return tatil;
    }
  }
  return null;
}

// Bugün Türkiye saatine göre hangi gün?
const gunler = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];

export function bugunGun(): string {
  const now = new Date();
  // Türkiye UTC+3
  const tr = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Istanbul' }));
  return gunler[tr.getDay()];
}

export interface BugunDers {
  saat: string;
  ders: string;
  hoca: string;
  sure: string;
  kademeler: string[];
}

export function bugunDersler(): BugunDers[] {
  const gun = bugunGun();
  const map = new Map<string, BugunDers>();

  for (const kp of dersProgramlari) {
    const gp = kp.programlar.find(g => g.gun === gun);
    if (!gp) continue;
    for (const d of gp.dersler) {
      const key = `${d.saat}-${d.ders}`;
      if (map.has(key)) {
        const mevcut = map.get(key)!;
        if (!mevcut.kademeler.includes(kp.kisa)) {
          mevcut.kademeler.push(kp.kisa);
        }
      } else {
        map.set(key, {
          saat: d.saat,
          ders: d.ders,
          hoca: d.hoca,
          sure: d.sure,
          kademeler: [kp.kisa],
        });
      }
    }
  }

  return Array.from(map.values()).sort((a, b) => a.saat.localeCompare(b.saat));
}
