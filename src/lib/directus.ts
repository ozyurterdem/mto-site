/**
 * Directus CMS Client — MTO2
 * Domain-agnostic: tüm URL'ler env variable'dan gelir
 * Direct fetch (SDK auth issue workaround)
 */
import type {
  MtoSchema,
  Ayarlar,
  DersProgrami,
  Kitap,
  AkademikKadro,
  Makale,
  Faaliyet,
  FaaliyetTuru,
  Bulten,
  Sayfa,
  Navigasyon,
  Translation,
} from '../types/directus';

const BASE = import.meta.env.DIRECTUS_URL;
const TOKEN = import.meta.env.DIRECTUS_TOKEN;

async function api<T>(path: string): Promise<T> {
  const url = `${BASE}${path}${path.includes('?') ? '&' : '?'}access_token=${TOKEN}`;
  const res = await fetch(url);
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err?.errors?.[0]?.message || `Directus API error: ${res.status}`);
  }
  const json = await res.json();
  return json.data;
}

// ─── Translation Helper ───
export function getTranslation<T extends Translation>(
  translations: T[] | undefined | null,
  locale: string,
  fallback = 'tr'
): T | undefined {
  if (!translations?.length) return undefined;
  return (
    translations.find((t) => t.languages_code === locale) ??
    translations.find((t) => t.languages_code === fallback)
  );
}

// ─── Fetch Helpers ───

export async function getAyarlar(): Promise<Ayarlar> {
  return api<Ayarlar>('/items/ayarlar?fields=*,translations.*');
}

export async function getDersProgramlari(): Promise<DersProgrami[]> {
  return api<DersProgrami[]>(
    '/items/ders_programlari?fields=*,translations.*,gunler.*,gunler.translations.*,gunler.dersler.*,gunler.dersler.translations.*&sort=sira&limit=-1'
  );
}

export async function getKitaplar(): Promise<Kitap[]> {
  return api<Kitap[]>('/items/kitaplar?fields=*,translations.*&sort=sira&limit=-1');
}

export async function getAkademikKadro(): Promise<AkademikKadro[]> {
  return api<AkademikKadro[]>('/items/akademik_kadro?fields=*,translations.*&sort=sira&limit=-1');
}

export async function getMakaleler(durum: 'yayinda' | 'taslak' = 'yayinda'): Promise<Makale[]> {
  return api<Makale[]>(
    `/items/makaleler?fields=*,translations.*,yazar.ad_soyad,yazar.translations.*&filter[durum][_eq]=${durum}&sort=-yayin_tarihi&limit=-1`
  );
}

export async function getFaaliyetler(tur?: FaaliyetTuru): Promise<Faaliyet[]> {
  let url = '/items/faaliyetler?fields=*,translations.*&filter[durum][_eq]=yayinda&sort=sira&limit=-1';
  if (tur) url += `&filter[tur][_eq]=${tur}`;
  return api<Faaliyet[]>(url);
}

export async function getBultenler(): Promise<Bulten[]> {
  return api<Bulten[]>('/items/bultenler?fields=*,translations.*&filter[durum][_eq]=yayinda&sort=-sayi_no&limit=-1');
}

export async function getSayfa(slug: string): Promise<Sayfa | null> {
  const items = await api<Sayfa[]>(
    `/items/sayfalar?fields=*,translations.*&filter[slug][_eq]=${slug}&filter[durum][_eq]=yayinda&limit=1`
  );
  return items[0] ?? null;
}

export async function getNavigasyon(): Promise<Navigasyon[]> {
  const all = await api<Navigasyon[]>('/items/navigasyon?fields=*,translations.*&sort=sira&limit=-1');
  const roots = all.filter(n => !n.parent);
  return roots.map(item => ({
    ...item,
    children: all.filter(c => c.parent === item.id),
  }));
}

// ─── Asset URL Helper ───
export function assetUrl(fileId: string | null): string | null {
  if (!fileId) return null;
  return `${BASE}/assets/${fileId}?access_token=${TOKEN}`;
}
