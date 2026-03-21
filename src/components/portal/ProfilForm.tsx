/** Profil Görüntüleme — Talebenin kendi profili */
import { useState, useEffect } from 'preact/hooks';
import { portal } from '../../lib/portal-client';

export default function ProfilForm() {
  const [profil, setProfil] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    portal.profil()
      .then(setProfil)
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div class="animate-pulse space-y-4">
        <div class="h-8 bg-gray-200 rounded w-32" />
        <div class="h-64 bg-gray-200 rounded-xl" />
      </div>
    );
  }

  if (error) return <div class="bg-red-50 border border-red-100 rounded-xl p-4 text-sm text-red-600">{error}</div>;
  if (!profil) return null;

  const fields = [
    { label: 'Ad Soyad', value: `${profil.ad} ${profil.soyad}` },
    { label: 'E-posta', value: profil.email },
    { label: 'Telefon', value: profil.telefon },
    { label: 'Kademe', value: profil.kademe_adi },
    { label: 'Şehir', value: profil.sehir },
    { label: 'İlçe', value: profil.ilce },
    { label: 'Eğitim', value: profil.egitim_durumu },
    { label: 'Okul', value: profil.okul_adi },
    { label: 'Bölüm', value: profil.bolum },
    { label: 'Meslek', value: profil.meslek },
    { label: 'Halka Şehri', value: profil.halka_sehir },
    { label: 'Katılım Yılı', value: profil.katilim_yili },
  ].filter(f => f.value);

  return (
    <div class="space-y-6">
      <h1 class="text-2xl font-bold text-gray-800">Profilim</h1>

      <div class="bg-white rounded-xl border border-gray-100 p-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          {fields.map(f => (
            <div key={f.label}>
              <p class="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1">{f.label}</p>
              <p class="text-sm text-gray-800">{f.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div class="bg-turkuaz/5 rounded-xl border border-turkuaz/10 p-4">
        <p class="text-xs text-turkuaz/80">
          Profil bilgilerinizi güncellemek için yöneticinizle iletişime geçiniz.
        </p>
      </div>
    </div>
  );
}
