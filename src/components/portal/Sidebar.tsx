/** Portal Sidebar — Talebe navigasyonu */
import { getUser, clearAuth } from '../../lib/auth-client';

const NAV_ITEMS = [
  { label: 'Genel Bakış', href: '/portal', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { label: 'Derslerim', href: '/portal/derslerim', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
  { label: 'Profilim', href: '/portal/profilim', icon: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632' },
];

export default function Sidebar() {
  const user = getUser();
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';

  function handleLogout() {
    clearAuth();
    window.location.href = '/';
  }

  return (
    <aside class="w-64 bg-white border-r border-gray-100 min-h-screen flex flex-col">
      {/* Logo */}
      <div class="px-6 py-5 border-b border-gray-100">
        <a href="/" class="flex items-center gap-2 no-underline">
          <img src="/images/mto-logo.png" alt="MTO" class="h-8 w-auto" />
          <span class="text-sm font-bold text-lacivert tracking-tight">Talebe Portalı</span>
        </a>
      </div>

      {/* Navigation */}
      <nav class="flex-1 px-3 py-4 space-y-1">
        {NAV_ITEMS.map(item => {
          const isActive = currentPath === item.href || (item.href !== '/portal' && currentPath.startsWith(item.href));
          return (
            <a
              key={item.href}
              href={item.href}
              class={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium no-underline transition-colors ${
                isActive
                  ? 'bg-turkuaz/10 text-turkuaz'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d={item.icon} />
              </svg>
              {item.label}
            </a>
          );
        })}
      </nav>

      {/* Bilgilendirme */}
      <div class="px-4 py-3 mx-3 mb-3 bg-turkuaz/5 rounded-lg border border-turkuaz/10">
        <p class="text-[11px] text-turkuaz/80 leading-relaxed">
          Enfüs, eğitim yolculuğunuzu takip eder — dersleriniz, yazılarınız ve katkılarınız gelişim haritanıza yansır.
        </p>
      </div>

      {/* User info + logout */}
      <div class="px-4 py-4 border-t border-gray-100 flex items-center justify-between">
        <div class="min-w-0">
          <p class="text-sm font-semibold text-gray-800 truncate">{user?.display_name || 'Talebe'}</p>
          <p class="text-[11px] text-gray-400 truncate">{user?.email}</p>
        </div>
        <button
          onClick={handleLogout}
          class="p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
          title="Çıkış Yap"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3-3l3-3m0 0l-3-3m3 3H9" />
          </svg>
        </button>
      </div>
    </aside>
  );
}
