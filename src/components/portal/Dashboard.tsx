/** Portal Dashboard — Bugünün dersleri, yoklama özeti, aktif oturum */
import { useState, useEffect } from 'preact/hooks';
import { portal, extractError, type PortalDashboard } from '../../lib/portal-client';

const GUNLER = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];

export default function Dashboard() {
  const [dashboard, setDashboard] = useState<PortalDashboard | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    portal.dashboard()
      .then(setDashboard)
      .catch((e: unknown) => setError(extractError(e)))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <DashboardSkeleton />;
  if (error) return <ErrorBanner message={error} />;
  if (!dashboard) return null;

  return (
    <div class="space-y-6">
      <div>
        <h1 class="text-2xl font-bold text-gray-800">Hoş geldin, {dashboard.talebe.ad}</h1>
        <p class="text-sm text-gray-500 mt-1">{dashboard.talebe.kademe_adi} · {GUNLER[new Date().getDay()]}</p>
      </div>
      <StatCards dashboard={dashboard} />
      {dashboard.bugunun_dersleri.length > 0 && <DersProgrami dersler={dashboard.bugunun_dersleri} />}
    </div>
  );
}

// ─── Alt Bileşenler ───

function DashboardSkeleton() {
  return (
    <div class="animate-pulse space-y-6">
      <div class="h-8 bg-gray-200 rounded w-48" />
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1,2,3].map(i => <div key={i} class="h-28 bg-gray-200 rounded-xl" />)}
      </div>
    </div>
  );
}

function ErrorBanner({ message }: { message: string }) {
  return <div class="bg-red-50 border border-red-100 rounded-xl p-4 text-sm text-red-600">{message}</div>;
}

function StatCards({ dashboard }: { dashboard: PortalDashboard }) {
  const { yoklama_ozet, bugunun_dersleri, aktif_oturum } = dashboard;

  return (
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Yoklama */}
      <div class="bg-white rounded-xl border border-gray-100 p-5">
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs font-semibold text-gray-400 uppercase tracking-wider">Yoklama</span>
        </div>
        <p class="text-3xl font-bold text-gray-800">%{yoklama_ozet.yuzde}</p>
        <p class="text-xs text-gray-400 mt-1">{yoklama_ozet.katilim}/{yoklama_ozet.toplam} ders</p>
      </div>

      {/* Bugün */}
      <div class="bg-white rounded-xl border border-gray-100 p-5">
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs font-semibold text-gray-400 uppercase tracking-wider">Bugün</span>
        </div>
        <p class="text-3xl font-bold text-gray-800">{bugunun_dersleri.length}</p>
        <p class="text-xs text-gray-400 mt-1">ders planlanmış</p>
      </div>

      {/* Canlı ders */}
      <div class={`rounded-xl border p-5 ${aktif_oturum ? 'bg-emerald-50 border-emerald-200' : 'bg-white border-gray-100'}`}>
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs font-semibold text-gray-400 uppercase tracking-wider">Canlı Ders</span>
          {aktif_oturum && (
            <span class="flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full">
              <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              CANLI
            </span>
          )}
        </div>
        {aktif_oturum ? (
          <>
            <p class="text-sm font-semibold text-gray-800">{aktif_oturum.kurs_adi}</p>
            <a href={`/portal/canli/${aktif_oturum.id}`} class="inline-block mt-2 text-xs font-semibold text-emerald-600 hover:underline">
              Derse Katıl →
            </a>
          </>
        ) : (
          <p class="text-sm text-gray-400">Şu an aktif ders yok</p>
        )}
      </div>
    </div>
  );
}

function DersProgrami({ dersler }: { dersler: PortalDashboard['bugunun_dersleri'] }) {
  return (
    <div class="bg-white rounded-xl border border-gray-100 p-5">
      <h2 class="text-sm font-semibold text-gray-800 mb-3">Bugünün Programı</h2>
      <div class="space-y-2">
        {dersler.map((ders, i) => (
          <div key={i} class="flex items-center gap-4 py-2 border-b border-gray-50 last:border-0">
            <span class="text-sm font-mono text-turkuaz w-12">{ders.saat}</span>
            <span class="text-sm font-medium text-gray-800 flex-1">{ders.kurs_adi}</span>
            <span class="text-xs text-gray-400">{ders.hoca_adi}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
