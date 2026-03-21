/**
 * Portal API client — Talebe portalı için Enfüs API istekleri.
 * auth-client.ts üzerine inşa edilmiştir.
 */

import { getToken, clearAuth } from './auth-client';

const PANEL_URL = 'https://enfus.mto.siberkale.com';

async function portalGet<T = any>(path: string): Promise<T> {
  const token = getToken();
  if (!token) {
    window.location.href = `/giris?redirect=${encodeURIComponent(window.location.pathname)}`;
    throw new Error('Oturum bulunamadı');
  }

  const res = await fetch(`${PANEL_URL}${path}`, {
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });

  if (res.status === 401) {
    clearAuth();
    window.location.href = `/giris?redirect=${encodeURIComponent(window.location.pathname)}`;
    throw new Error('Oturum süresi doldu');
  }

  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.detail || `Hata: ${res.status}`);
  return data as T;
}

async function portalPost<T = any>(path: string, body?: any): Promise<T> {
  const token = getToken();
  if (!token) {
    window.location.href = `/giris?redirect=${encodeURIComponent(window.location.pathname)}`;
    throw new Error('Oturum bulunamadı');
  }

  const res = await fetch(`${PANEL_URL}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (res.status === 401) {
    clearAuth();
    window.location.href = `/giris?redirect=${encodeURIComponent(window.location.pathname)}`;
    throw new Error('Oturum süresi doldu');
  }

  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.detail || `Hata: ${res.status}`);
  return data as T;
}

// ─── Portal Endpoint'leri ───

export interface PortalDashboard {
  talebe: { ad: string; soyad: string; kademe_adi: string; kademe_id: number };
  aktif_oturum: any | null;
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
  son_30_gun: Array<{ tarih: string; katildi: boolean }>;
}

export interface StreamUrl {
  embed_url: string;
  expires_at: string;
}

export const portal = {
  dashboard: () => portalGet<PortalDashboard>('/api/v1/talebe/portal/dashboard'),
  kurslarim: () => portalGet<PortalKurs[]>('/api/v1/talebe/portal/kurslarim'),
  materyaller: (kursId: number) => portalGet<PortalMateryal[]>(`/api/v1/talebe/portal/kurslarim/${kursId}/materyaller`),
  yoklamaOzet: () => portalGet<YoklamaOzet>('/api/v1/talebe/portal/yoklama-ozet'),
  streamUrl: (oturumId: number) => portalGet<StreamUrl>(`/api/v1/stream/${oturumId}`),
  profil: () => portalGet('/api/v1/talebe/profil'),
};
