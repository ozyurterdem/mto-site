/** Portal AuthGuard — Login + profil onay kontrolü.
 *  client:load ile Astro sayfalarında kullanılır.
 */
import { useState, useEffect } from 'preact/hooks';
import type { ComponentChildren } from 'preact';
import { isLoggedIn, getToken, clearAuth } from '../../lib/auth-client';
import { PANEL_URL } from '../../lib/portal-client';

interface Props {
  children: ComponentChildren;
}

type AuthState = 'loading' | 'authenticated' | 'unapproved' | 'unauthenticated';

function redirectToLogin(): void {
  clearAuth();
  window.location.href = `/giris?redirect=${encodeURIComponent(window.location.pathname)}`;
}

async function verifyToken(token: string): Promise<boolean> {
  const res = await fetch(`${PANEL_URL}/api/v1/auth/me`, {
    headers: { 'Authorization': `Bearer ${token}` },
  });
  return res.ok;
}

async function checkProfilDurum(token: string): Promise<{ approved: boolean; message: string }> {
  const res = await fetch(`${PANEL_URL}/api/v1/talebe/profil`, {
    headers: { 'Authorization': `Bearer ${token}` },
  });

  if (res.status === 404) {
    return { approved: false, message: 'Talebe profiliniz henüz oluşturulmamış. Lütfen önce kayıt olun.' };
  }
  if (!res.ok) {
    return { approved: false, message: 'Profil bilgilerinize erişilemedi.' };
  }

  const profil = await res.json();
  if (profil.durum !== 'onaylandi') {
    return { approved: false, message: 'Hesabınız henüz onaylanmamıştır. Onay süreciniz devam ediyor.' };
  }
  return { approved: true, message: '' };
}

export default function AuthGuard({ children }: Props) {
  const [state, setState] = useState<AuthState>('loading');
  const [message, setMessage] = useState('');

  useEffect(() => {
    (async () => {
      if (!isLoggedIn()) { redirectToLogin(); return; }

      const token = getToken()!;

      try {
        const isValid = await verifyToken(token);
        if (!isValid) { redirectToLogin(); return; }

        const { approved, message: msg } = await checkProfilDurum(token);
        if (!approved) {
          setState('unapproved');
          setMessage(msg);
          return;
        }
        setState('authenticated');
      } catch {
        redirectToLogin();
      }
    })();
  }, []);

  if (state === 'loading') {
    return (
      <div class="flex items-center justify-center min-h-[60vh]">
        <div class="text-center">
          <div class="w-8 h-8 border-2 border-turkuaz border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p class="text-sm text-gray-500">Yükleniyor...</p>
        </div>
      </div>
    );
  }

  if (state === 'unapproved') {
    return (
      <div class="flex items-center justify-center min-h-[60vh]">
        <div class="text-center max-w-md px-6">
          <div class="w-16 h-16 rounded-full bg-amber-50 grid place-items-center mx-auto mb-4">
            <svg class="w-8 h-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
          </div>
          <h2 class="text-xl font-bold text-gray-800 mb-2">Onay Bekleniyor</h2>
          <p class="text-sm text-gray-600 leading-relaxed">{message}</p>
          <a href="/" class="inline-block mt-6 text-sm text-turkuaz font-semibold hover:underline">← Ana Sayfaya Dön</a>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
