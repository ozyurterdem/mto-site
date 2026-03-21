/** Portal AuthGuard — Login kontrolü + redirect.
 *  client:load ile Astro sayfalarında kullanılır.
 */
import { useState, useEffect } from 'preact/hooks';
import { isLoggedIn, getUser, clearAuth, getToken } from '../../lib/auth-client';

interface Props {
  children: any;
}

type AuthState = 'loading' | 'authenticated' | 'unapproved' | 'unauthenticated';

export default function AuthGuard({ children }: Props) {
  const [state, setState] = useState<AuthState>('loading');
  const [message, setMessage] = useState('');

  useEffect(() => {
    checkAuth();
  }, []);

  async function checkAuth() {
    if (!isLoggedIn()) {
      window.location.href = `/giris?redirect=${encodeURIComponent(window.location.pathname)}`;
      return;
    }

    try {
      const token = getToken();
      // Token geçerliliğini kontrol et
      const meRes = await fetch('https://enfus.mto.siberkale.com/api/v1/auth/me', {
        headers: { 'Authorization': `Bearer ${token}` },
      });

      if (!meRes.ok) {
        clearAuth();
        window.location.href = `/giris?redirect=${encodeURIComponent(window.location.pathname)}`;
        return;
      }

      // Talebe profili kontrol et
      const profilRes = await fetch('https://enfus.mto.siberkale.com/api/v1/talebe/profil', {
        headers: { 'Authorization': `Bearer ${token}` },
      });

      if (profilRes.status === 404) {
        setState('unapproved');
        setMessage('Talebe profiliniz henüz oluşturulmamış. Lütfen önce kayıt olun.');
        return;
      }

      if (profilRes.ok) {
        const profil = await profilRes.json();
        if (profil.durum !== 'onaylandi') {
          setState('unapproved');
          setMessage('Hesabınız henüz onaylanmamıştır. Onay süreciniz devam ediyor.');
          return;
        }
        setState('authenticated');
      } else {
        setState('unapproved');
        setMessage('Profil bilgilerinize erişilemedi.');
      }
    } catch {
      clearAuth();
      window.location.href = `/giris?redirect=${encodeURIComponent(window.location.pathname)}`;
    }
  }

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
