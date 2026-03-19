/**
 * MTO Panel API client — fetches articles and bulletins for Astro static build.
 * Public endpoints only (no auth needed for published content).
 */

const PANEL_URL = import.meta.env.PANEL_URL || 'https://panel.mto2.siberkale.com';

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
