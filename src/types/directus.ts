// MTO2 Directus Schema Types
// Domain-agnostic — tüm URL'ler env'den gelir

export interface Translation {
  languages_code: string;
}

// ─── Ayarlar (Singleton) ───
export interface AyarlarTranslation extends Translation {
  site_adi: string;
  adres: string;
}

export interface Ayarlar {
  id: number;
  telefon: string;
  email: string;
  sosyal_medya: {
    facebook?: string;
    x?: string;
    instagram?: string;
    youtube?: string;
    linkedin?: string;
    telegram?: string;
    telegram_yorum?: string;
  };
  translations: AyarlarTranslation[];
}

// ─── Akademik Kadro ───
export interface AkademikKadroTranslation extends Translation {
  unvan: string;
  brans: string;
  bio: string;
}

export interface AkademikKadro {
  id: number;
  ad_soyad: string;
  foto: string | null;
  sira: number;
  translations: AkademikKadroTranslation[];
}

// ─── Ders Programı ───
export interface DersProgramiTranslation extends Translation {
  kademe: string;
  kisa: string;
}

export interface DersProgrami {
  id: number;
  makale_sayisi: number;
  sira: number;
  translations: DersProgramiTranslation[];
  gunler: DersGunu[];
}

export interface DersGunuTranslation extends Translation {
  gun: string;
}

export interface DersGunu {
  id: number;
  sira: number;
  kademe_id: number;
  translations: DersGunuTranslation[];
  dersler: Ders[];
}

export interface DersTranslation extends Translation {
  ders: string;
  hoca: string;
}

export interface Ders {
  id: number;
  saat: string;
  sure: string;
  sira: number;
  gun_id: number;
  translations: DersTranslation[];
}

// ─── Kitaplar ───
export interface KitapTranslation extends Translation {
  baslik: string;
  yazar: string;
  yayinevi: string;
  aciklama: string;
}

export interface Kitap {
  id: number;
  sira: number;
  kategori: string;
  renk: string;
  referans_mi: boolean;
  numara: string | null;
  translations: KitapTranslation[];
}

// ─── Makaleler ───
export interface MakaleTranslation extends Translation {
  baslik: string;
  icerik: string; // WYSIWYG HTML
  slug: string;
}

export interface Makale {
  id: number;
  yayin_tarihi: string;
  durum: 'taslak' | 'yayinda';
  yazar: AkademikKadro | string;
  translations: MakaleTranslation[];
}

// ─── Faaliyetler ───
export type FaaliyetTuru = 'halka' | 'iftar' | 'kamp' | 'kulup' | 'seminer' | 'kitap_tahlili' | 'talebe_bulusmasi';

export interface FaaliyetTranslation extends Translation {
  baslik: string;
  aciklama: string; // richtext
}

export interface Faaliyet {
  id: number;
  tur: FaaliyetTuru;
  tarih: string | null;
  gorsel: string | null;
  durum: 'taslak' | 'yayinda';
  sira: number;
  translations: FaaliyetTranslation[];
}

// ─── Bültenler ───
export interface BultenTranslation extends Translation {
  baslik: string;
  icerik: string;
}

export interface Bulten {
  id: number;
  sayi_no: number;
  tarih: string;
  durum: 'taslak' | 'yayinda';
  translations: BultenTranslation[];
}

// ─── Sayfalar ───
export interface SayfaTranslation extends Translation {
  baslik: string;
  icerik: string; // WYSIWYG
}

export interface Sayfa {
  id: number;
  slug: string;
  durum: 'taslak' | 'yayinda';
  translations: SayfaTranslation[];
}

// ─── Navigasyon ───
export interface NavigasyonTranslation extends Translation {
  etiket: string;
}

export interface Navigasyon {
  id: number;
  href: string;
  parent: string | null;
  sira: number;
  dal_renk: string;
  icon: string | null;
  translations: NavigasyonTranslation[];
  children?: Navigasyon[];
}

// ─── Ana Schema ───
export interface MtoSchema {
  ayarlar: Ayarlar;
  akademik_kadro: AkademikKadro[];
  ders_programlari: DersProgrami[];
  ders_gunleri: DersGunu[];
  dersler: Ders[];
  kitaplar: Kitap[];
  makaleler: Makale[];
  faaliyetler: Faaliyet[];
  bultenler: Bulten[];
  sayfalar: Sayfa[];
  navigasyon: Navigasyon[];
}
