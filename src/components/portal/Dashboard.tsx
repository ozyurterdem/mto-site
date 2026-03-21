/** Portal Dashboard — Bugünün dersleri, yoklama özeti, aktif oturum */
import { useState, useEffect } from 'preact/hooks';
import { portal, type PortalDashboard } from '../../lib/portal-client';

export default function Dashboard() {
  const [data, setData] = useState<PortalDashboard | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    portal.dashboard()
      .then(setData)
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div class="animate-pulse space-y-6">
        <div class="h-8 bg-gray-200 rounded w-48" />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1,2,3].map(i => <div key={i} class="h-28 bg-gray-200 rounded-xl" />)}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div class="bg-red-50 border border-red-100 rounded-xl p-4 text-sm text-red-600">
        {error}
      </div>
    );
  }

  if (!data) return null;

  const gunler = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
  const bugun = gunler[new Date().getDay()];

  return (
    <div class="space-y-6">
      {/* Hoş geldin */}
      <div>
        <h1 class="text-2xl font-bold text-gray-800">
          Hoş geldin, {data.talebe.ad}
        </h1>
        <p class="text-sm text-gray-500 mt-1">
          {data.talebe.kademe_adi} · {bugun}
        </p>
      </div>

      {/* İstatistik kartları */}
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Yoklama */}
        <div class="bg-white rounded-xl border border-gray-100 p-5">
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-semibold text-gray-400 uppercase tracking-wider">Yoklama</span>
            <svg class="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p class="text-3xl font-bold text-gray-800">%{data.yoklama_ozet.yuzde}</p>
          <p class="text-xs text-gray-400 mt-1">{data.yoklama_ozet.katilim}/{data.yoklama_ozet.toplam} ders</p>
        </div>

        {/* Bugünün dersleri */}
        <div class="bg-white rounded-xl border border-gray-100 p-5">
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-semibold text-gray-400 uppercase tracking-wider">Bugün</span>
            <svg class="w-5 h-5 text-turkuaz" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
          </div>
          <p class="text-3xl font-bold text-gray-800">{data.bugunun_dersleri.length}</p>
          <p class="text-xs text-gray-400 mt-1">ders planlanmış</p>
        </div>

        {/* Aktif oturum */}
        <div class={`rounded-xl border p-5 ${data.aktif_oturum ? 'bg-emerald-50 border-emerald-200' : 'bg-white border-gray-100'}`}>
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-semibold text-gray-400 uppercase tracking-wider">Canlı Ders</span>
            {data.aktif_oturum && (
              <span class="flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full">
                <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                CANLI
              </span>
            )}
          </div>
          {data.aktif_oturum ? (
            <>
              <p class="text-sm font-semibold text-gray-800">{data.aktif_oturum.kurs_adi}</p>
              <a
                href={`/portal/canli/${data.aktif_oturum.id}`}
                class="inline-block mt-2 text-xs font-semibold text-emerald-600 hover:underline"
              >
                Derse Katıl →
              </a>
            </>
          ) : (
            <p class="text-sm text-gray-400">Şu an aktif ders yok</p>
          )}
        </div>
      </div>

      {/* Bugünün ders programı */}
      {data.bugunun_dersleri.length > 0 && (
        <div class="bg-white rounded-xl border border-gray-100 p-5">
          <h2 class="text-sm font-semibold text-gray-800 mb-3">Bugünün Programı</h2>
          <div class="space-y-2">
            {data.bugunun_dersleri.map((ders, i) => (
              <div key={i} class="flex items-center gap-4 py-2 border-b border-gray-50 last:border-0">
                <span class="text-sm font-mono text-turkuaz w-12">{ders.saat}</span>
                <span class="text-sm font-medium text-gray-800 flex-1">{ders.kurs_adi}</span>
                <span class="text-xs text-gray-400">{ders.hoca_adi}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
