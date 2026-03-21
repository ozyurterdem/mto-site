/**
 * Client-side auth — localStorage token management.
 * Panel API'ye cross-origin istekler gönderir.
 * Refresh cookie cross-domain çalışmadığı için sadece access_token kullanılır.
 * Token süresi dolunca tekrar giriş gerekir.
 */

const PANEL_URL = 'https://enfus.mto.siberkale.com';
const TOKEN_KEY = 'mto_token';
const USER_KEY = 'mto_user';

export interface MtoUser {
  id: number;
  email: string;
  display_name: string;
  email_verified: boolean;
}

// ─── Token ───

export function getToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

export function getUser(): MtoUser | null {
  const raw = localStorage.getItem(USER_KEY);
  if (!raw) return null;
  try { return JSON.parse(raw); } catch { return null; }
}

export function isLoggedIn(): boolean {
  return !!getToken();
}

function saveAuth(token: string, user: MtoUser) {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function clearAuth() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

// ─── API helper ───

async function panelPost(path: string, body?: any, auth = false): Promise<any> {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  if (auth) {
    const token = getToken();
    if (token) headers['Authorization'] = `Bearer ${token}`;
  }

  const res = await fetch(`${PANEL_URL}${path}`, {
    method: 'POST',
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(data.detail || `Hata: ${res.status}`);
  }
  return data;
}

async function panelGet(path: string, auth = false): Promise<any> {
  const headers: Record<string, string> = { 'Accept': 'application/json' };
  if (auth) {
    const token = getToken();
    if (token) headers['Authorization'] = `Bearer ${token}`;
  }

  const res = await fetch(`${PANEL_URL}${path}`, { headers });
  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(data.detail || `Hata: ${res.status}`);
  }
  return data;
}

// ─── Auth endpoints ───

export async function register(email: string, password: string, displayName: string): Promise<MtoUser> {
  const data = await panelPost('/api/v1/auth/register', {
    email,
    password,
    display_name: displayName,
  });
  return data as MtoUser;
}

export async function login(email: string, password: string): Promise<MtoUser> {
  const data = await panelPost('/api/v1/auth/login', { email, password });
  const token = data.access_token as string;

  // Fetch user info
  const user = await panelGet('/api/v1/auth/me', false).catch(() => null);
  // me needs the token, do it manually
  const meRes = await fetch(`${PANEL_URL}/api/v1/auth/me`, {
    headers: { 'Authorization': `Bearer ${token}` },
  });
  const me = await meRes.json() as MtoUser;

  saveAuth(token, me);
  return me;
}

export async function logout() {
  clearAuth();
}

export async function verifyEmail(token: string): Promise<string> {
  const data = await panelPost(`/api/v1/auth/verify-email?token=${token}`);
  return data.message;
}

export async function resendVerification(email: string): Promise<string> {
  const data = await panelPost(`/api/v1/auth/resend-verification?email=${email}`);
  return data.message;
}

// ─── Talebe Profile ───

export interface TalebeProfile {
  id: number;
  user_id: number;
  ad: string;
  soyad: string;
  telefon: string;
  sehir: string | null;
  kademe_bilgi: string | null;
  kademe_adi: string | null;
  durum: string;
  mevcut_ogrenci: boolean;
}

export async function createTalebeProfile(data: any): Promise<TalebeProfile> {
  return panelPost('/api/v1/talebe/profil', data, true);
}

export async function getMyTalebeProfile(): Promise<TalebeProfile | null> {
  try {
    return await panelGet('/api/v1/talebe/profil', true);
  } catch {
    return null;
  }
}

export async function updateTalebeProfile(data: any): Promise<TalebeProfile> {
  const token = getToken();
  const res = await fetch(`${PANEL_URL}/api/v1/talebe/profil`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  const d = await res.json();
  if (!res.ok) throw new Error(d.detail || 'Güncelleme başarısız');
  return d;
}

// ─── Comments ───

export interface Yorum {
  id: number;
  content_type: string;
  content_id: number;
  user_id: number;
  parent_id: number | null;
  icerik: string;
  durum: string;
  created_at: string;
  user_display_name: string | null;
  user_avatar_url: string | null;
  replies: Yorum[];
}

export async function getYorumlar(contentType: string, contentId: number): Promise<Yorum[]> {
  try {
    return await panelGet(`/api/v1/yorumlar/content/${contentType}/${contentId}`);
  } catch {
    return [];
  }
}

export async function postYorum(contentType: string, contentId: number, icerik: string, parentId?: number): Promise<Yorum> {
  return panelPost('/api/v1/yorumlar', {
    content_type: contentType,
    content_id: contentId,
    icerik,
    parent_id: parentId || null,
  }, true);
}
