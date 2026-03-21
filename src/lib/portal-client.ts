/**
 * Portal API client — Talebe portalı için Enfüs API istekleri.
 * auth-client.ts üzerine inşa edilmiştir.
 */

import { getToken, clearAuth } from './auth-client';

export const PANEL_URL = import.meta.env.PUBLIC_PANEL_URL || 'https://enfus.mto.siberkale.com';

// ─── Ortak fetch yardımcısı ───

function redirectToLogin(): never {
  clearAuth();
  window.location.href = `/giris?redirect=${encodeURIComponent(window.location.pathname)}`;
  throw new Error('Oturum bulunamadı');
}

function extractError(error: unknown): string {
  return error instanceof Error ? error.message : 'Bilinmeyen hata';
}

async function portalFetch<T = unknown>(method: 'GET' | 'POST', path: string, body?: unknown): Promise<T> {
  const token = getToken();
  if (!token) redirectToLogin();

  const headers: Record<string, string> = {
    'Accept': 'application/json',
    'Authorization': `Bearer ${token}`,
  };
  if (method === 'POST') headers['Content-Type'] = 'application/json';

  const res = await fetch(`${PANEL_URL}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  if (res.status === 401) redirectToLogin();

  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.detail || `Hata: ${res.status}`);
  return data as T;
}

// ─── Interface'ler ───

export interface AktifOturum {
  id: number;
  kurs_adi: string;
  baslama: string | null;
}

export interface PortalDashboard {
  talebe: { ad: string; soyad: string; kademe_adi: string; kademe_id: number };
  aktif_oturum: AktifOturum | null;
  bugunun_dersleri: Array<{ saat: string; kurs_adi: string; hoca_adi: string }>;
  yoklama_ozet: { toplam: number; katilim: number; yuzde: number };
}

export interface PortalKurs {
  id: number;
  ad: string;
  hoca_adi: string;
  sure_dk: number;
  aciklama: string | null;
  materyal_sayisi: number;
}

export interface PortalMateryal {
  id: number;
  baslik: string;
  tur: string;
  url: string | null;
  icerik: string | null;
  created_at: string;
}

export interface YoklamaOzet {
  toplam_ders: number;
  katilim: number;
  yuzde: number;
}

export interface StreamUrl {
  embed_url: string;
  expires_at: string;
}

export interface PortalProfil {
  id: number;
  user_id: number;
  ad: string;
  soyad: string;
  email: string | null;
  telefon: string | null;
  kademe_adi: string | null;
  kademe_id: number | null;
  sehir: string | null;
  ilce: string | null;
  egitim_durumu: string | null;
  okul_adi: string | null;
  bolum: string | null;
  meslek: string | null;
  halka_sehir: string | null;
  katilim_yili: number | null;
  durum: string;
}

// ─── Portal API ───

export const portal = {
  dashboard: () => portalFetch<PortalDashboard>('GET', '/api/v1/talebe/portal/dashboard'),
  kurslarim: () => portalFetch<PortalKurs[]>('GET', '/api/v1/talebe/portal/kurslarim'),
  materyaller: (kursId: number) => portalFetch<PortalMateryal[]>('GET', `/api/v1/talebe/portal/kurslarim/${kursId}/materyaller`),
  yoklamaOzet: () => portalFetch<YoklamaOzet>('GET', '/api/v1/talebe/portal/yoklama-ozet'),
  streamUrl: (oturumId: number) => portalFetch<StreamUrl>('GET', `/api/v1/stream/${oturumId}`),
  profil: () => portalFetch<PortalProfil>('GET', '/api/v1/talebe/profil'),
};

export { extractError };
