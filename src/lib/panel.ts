/**
 * MTO Panel API client — fetches articles and bulletins for Astro static build.
 * Public endpoints only (no auth needed for published content).
 */

const PANEL_URL = import.meta.env.PANEL_URL || 'https://enfus.mto.siberkale.com';

// ─── Types ───

export interface MakaleTranslation {
  lang: string;
  baslik: string;
  ozet: string | null;
  icerik: string;
}

export interface Makale {
  id: number;
  slug: string;
  durum: string;
  yazar_id: number | null;
  yayin_tarihi: string | null;
  goruntulenme: number;
  yorum_acik: boolean;
  created_at: string;
  translations: MakaleTranslation[];
}

export interface MakaleListResponse {
  items: Makale[];
  total: number;
  page: number;
  per_page: number;
}

export interface BultenTranslation {
  lang: string;
  baslik: string;
  icerik: string;
}

export interface Bulten {
  id: number;
  sayi_no: number;
  durum: string;
  yayin_tarihi: string | null;
  translations: BultenTranslation[];
}

export interface Yorum {
  id: number;
  makale_id: number;
  user_id: number;
  icerik: string;
  durum: string;
  created_at: string;
  user_display_name: string | null;
  replies: Yorum[];
}

// ─── Helpers ───

export function getTranslation<T extends { lang: string }>(
  translations: T[],
  locale: string,
): T | undefined {
  return translations.find(t => t.lang === locale)
    ?? translations.find(t => t.lang === 'tr');
}

async function panelFetch<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${PANEL_URL}${path}`, {
      headers: { 'Accept': 'application/json' },
    });
    if (!res.ok) return null;
    return await res.json() as T;
  } catch {
    console.warn(`[panel] fetch failed: ${path}`);
    return null;
  }
}

// ─── Public API ───

/** Fetch published articles (paginated, max 100 per page) */
export async function getMakaleler(page = 1, perPage = 100): Promise<MakaleListResponse> {
  const data = await panelFetch<MakaleListResponse>(
    `/api/v1/makaleler?page=${page}&per_page=${Math.min(perPage, 100)}`
  );
  return data ?? { items: [], total: 0, page: 1, per_page: perPage };
}

/** Fetch single article by slug */
export async function getMakale(slug: string): Promise<Makale | null> {
  return panelFetch<Makale>(`/api/v1/makaleler/${slug}`);
}

/** Fetch published bulletins */
export async function getBultenler(): Promise<Bulten[]> {
  const data = await panelFetch<Bulten[]>('/api/v1/bultenler');
  return data ?? [];
}

/** Fetch approved comments for an article */
export async function getYorumlar(makaleId: number): Promise<Yorum[]> {
  const data = await panelFetch<Yorum[]>(`/api/v1/yorumlar/makale/${makaleId}`);
  return data ?? [];
}

// ─── İçerik API (Kadro, Faaliyetler, Sayfalar, SSS, Takvim, Temsilciler) ───

export interface IcerikItem {
  id: number;
  sira?: number;
  slug?: string;
  tur?: string;
  durum?: string;
  donem?: string;
  foto_url?: string;
  kapak_url?: string;
  tarih?: string;
  translations: { lang: string; [key: string]: string }[];
}

export async function getKadro(): Promise<IcerikItem[]> {
  return (await panelFetch<IcerikItem[]>('/api/v1/icerik/kadro')) ?? [];
}

export async function getFaaliyetler(tur?: string): Promise<IcerikItem[]> {
  const path = tur ? `/api/v1/icerik/faaliyetler?tur=${tur}` : '/api/v1/icerik/faaliyetler';
  return (await panelFetch<IcerikItem[]>(path)) ?? [];
}

export async function getSayfalar(): Promise<IcerikItem[]> {
  return (await panelFetch<IcerikItem[]>('/api/v1/icerik/sayfalar')) ?? [];
}

export async function getSayfa(slug: string): Promise<IcerikItem | null> {
  return panelFetch<IcerikItem>(`/api/v1/icerik/sayfalar/${slug}`);
}

export async function getSSS(): Promise<IcerikItem[]> {
  return (await panelFetch<IcerikItem[]>('/api/v1/icerik/sss')) ?? [];
}

export async function getTakvim(): Promise<IcerikItem[]> {
  return (await panelFetch<IcerikItem[]>('/api/v1/icerik/takvim')) ?? [];
}

export async function getTemsilciler(): Promise<IcerikItem[]> {
  return (await panelFetch<IcerikItem[]>('/api/v1/icerik/temsilciler')) ?? [];
}

// ─── Ders Programı API ───

export interface DersEntry {
  saat: string;
  ders: string;
  hoca: string;
  sure: string;
}

export interface GunProgrami {
  gun: string;
  dersler: DersEntry[];
}

export interface KademeProgrami {
  kademe: string;
  kisa: string;
  makaleSayisi: number;
  programlar: GunProgrami[];
}

export interface TatilDonemi {
  baslangic: string;
  bitis: string;
  aciklama: string;
  donusTarihi: string;
}

export interface FullDersProgram {
  kademeler: KademeProgrami[];
  tatilDonemleri: TatilDonemi[];
}

/** Fetch full ders programı (public endpoint) */
export async function getDersProgram(): Promise<FullDersProgram> {
  const data = await panelFetch<FullDersProgram>('/api/v1/ders/public/full');
  return data ?? { kademeler: [], tatilDonemleri: [] };
}

// ─── Helper: bugünün dersleri (Astro build-time) ───

const GUNLER = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];

export function bugunGun(): string {
  const now = new Date();
  const tr = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Istanbul' }));
  return GUNLER[tr.getDay()];
}

export interface BugunDers {
  saat: string;
  ders: string;
  hoca: string;
  sure: string;
  kademeler: string[];
}

export function bugunDersler(program: FullDersProgram): BugunDers[] {
  const gun = bugunGun();
  const map = new Map<string, BugunDers>();

  for (const kp of program.kademeler) {
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
        map.set(key, { saat: d.saat, ders: d.ders, hoca: d.hoca, sure: d.sure, kademeler: [kp.kisa] });
      }
    }
  }
  return Array.from(map.values()).sort((a, b) => a.saat.localeCompare(b.saat));
}

export function bugunTatilMi(program: FullDersProgram): TatilDonemi | null {
  const now = new Date();
  const tr = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Istanbul' }));
  const bugun = tr.toISOString().slice(0, 10);
  for (const tatil of program.tatilDonemleri) {
    if (bugun >= tatil.baslangic && bugun <= tatil.bitis) return tatil;
  }
  return null;
}


// ─── Herkese Açık Canlı Yayın ───

export interface PublicCanliYayin {
  id: number;
  kurs_adi: string;
  hoca_adi: string;
  youtube_embed_url: string;
  baslama: string;
}

export async function getPublicCanliYayin(): Promise<PublicCanliYayin[]> {
  try {
    const data = await panelFetch<PublicCanliYayin[]>('/api/v1/oturum/public/canli');
    return data ?? [];
  } catch {
    return [];
  }
}
