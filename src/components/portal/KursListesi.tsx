/** Kurs Listesi — Talebenin kademesindeki kurslar */
import { useState, useEffect } from 'preact/hooks';
import { portal, type PortalKurs } from '../../lib/portal-client';

export default function KursListesi() {
  const [kurslar, setKurslar] = useState<PortalKurs[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    portal.kurslarim()
      .then(setKurslar)
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div class="animate-pulse space-y-4">
        <div class="h-8 bg-gray-200 rounded w-40" />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1,2,3,4].map(i => <div key={i} class="h-32 bg-gray-200 rounded-xl" />)}
        </div>
      </div>
    );
  }

  if (error) return <div class="bg-red-50 border border-red-100 rounded-xl p-4 text-sm text-red-600">{error}</div>;

  return (
    <div class="space-y-6">
      <h1 class="text-2xl font-bold text-gray-800">Derslerim</h1>

      {kurslar.length === 0 ? (
        <p class="text-sm text-gray-500">Henüz atanmış ders bulunmuyor.</p>
      ) : (
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          {kurslar.map(kurs => (
            <a
              key={kurs.id}
              href={`/portal/ders/${kurs.id}`}
              class="bg-white rounded-xl border border-gray-100 p-5 hover:border-turkuaz/30 hover:shadow-sm transition-all no-underline group"
            >
              <h3 class="text-sm font-semibold text-gray-800 group-hover:text-turkuaz transition-colors">{kurs.ad}</h3>
              <p class="text-xs text-gray-400 mt-1">{kurs.hoca_adi} · {kurs.sure_dk} dk</p>
              {kurs.aciklama && <p class="text-xs text-gray-500 mt-2 line-clamp-2">{kurs.aciklama}</p>}
              <div class="flex items-center gap-2 mt-3">
                <span class="text-[10px] font-semibold text-turkuaz bg-turkuaz/10 px-2 py-0.5 rounded-full">
                  {kurs.materyal_sayisi} materyal
                </span>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
