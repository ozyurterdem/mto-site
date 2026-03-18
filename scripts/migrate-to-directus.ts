/**
 * MTO2 Static Data → Directus Migration Script
 * 
 * Kullanım:
 *   npx tsx scripts/migrate-to-directus.ts
 * 
 * Gerekli env:
 *   DIRECTUS_URL=https://cms.mto2.siberkale.com
 *   DIRECTUS_ADMIN_TOKEN=admin-token-here
 */

import { createDirectus, rest, createItem, createItems, readItems, updateSingleton } from '@directus/sdk';

// ─── Config ───
const DIRECTUS_URL = process.env.DIRECTUS_URL || 'https://cms.mto2.siberkale.com';
const DIRECTUS_TOKEN = process.env.DIRECTUS_ADMIN_TOKEN || '';

if (!DIRECTUS_TOKEN) {
  console.error('❌ DIRECTUS_ADMIN_TOKEN env variable gerekli');
  process.exit(1);
}

const client = createDirectus(DIRECTUS_URL).with(
  rest({
    headers: { Authorization: `Bearer ${DIRECTUS_TOKEN}` },
  })
);

// ─── Import Static Data ───
import { dersProgramlari } from '../src/data/ders-programi.js';
import { readingBooks, readingCategories, categoryColors } from '../src/data/hundred-books.js';
import { socialLinks } from '../src/data/social-links.js';

// ─── Helpers ───
function log(emoji: string, msg: string) {
  console.log(`${emoji} ${msg}`);
}

async function safeCreate(collection: string, data: any): Promise<any> {
  try {
    return await client.request(createItem(collection as any, data));
  } catch (e: any) {
    console.error(`  ❌ ${collection} create failed:`, e.message || e);
    return null;
  }
}

// ─── 1. Languages ───
async function seedLanguages() {
  log('🌐', 'Seeding languages...');
  const langs = [
    { code: 'tr', name: 'Türkçe', direction: 'ltr' },
    { code: 'en', name: 'English', direction: 'ltr' },
    { code: 'ar', name: 'العربية', direction: 'rtl' },
  ];

  for (const lang of langs) {
    try {
      await client.request(createItem('languages' as any, lang));
      log('  ✅', `Language: ${lang.name}`);
    } catch {
      log('  ⏭️', `Language ${lang.code} zaten var`);
    }
  }
}

// ─── 2. Ayarlar (Singleton) ───
async function migrateAyarlar() {
  log('⚙️', 'Migrating ayarlar...');

  const sosyalMedya: Record<string, string> = {};
  for (const link of socialLinks) {
    sosyalMedya[link.label.toLowerCase()] = link.href;
  }

  try {
    await client.request(
      updateSingleton('ayarlar' as any, {
        telefon: '',
        email: 'info@mto.org.tr',
        sosyal_medya: sosyalMedya,
        translations: [
          { languages_code: 'tr', site_adi: 'MTO Kurumsal', adres: '' },
          { languages_code: 'en', site_adi: 'MTO Corporate', adres: '' },
          { languages_code: 'ar', site_adi: 'مؤسسة MTO', adres: '' },
        ],
      })
    );
    log('  ✅', 'Ayarlar migrated');
  } catch (e: any) {
    log('  ❌', `Ayarlar failed: ${e.message}`);
  }
}

// ─── 3. Kitaplar ───
async function migrateKitaplar() {
  log('📚', 'Migrating kitaplar...');
  let count = 0;

  for (const book of readingBooks) {
    const result = await safeCreate('kitaplar', {
      sira: typeof book.number === 'string' ? parseInt(book.number) || count + 1 : count + 1,
      kategori: book.category,
      renk: book.color || categoryColors[book.category] || '#ccc',
      referans_mi: book.isReference || false,
      numara: book.number || null,
      translations: [
        {
          languages_code: 'tr',
          baslik: book.title,
          yazar: book.author,
          yayinevi: book.publisher || '',
          aciklama: book.description || '',
        },
        // EN/AR çevirileri sonradan Directus panelden yapılacak
      ],
    });

    if (result) count++;
  }
  log('  ✅', `${count} kitap migrated`);
}

// ─── 4. Ders Programları ───
async function migrateDersProgramlari() {
  log('📅', 'Migrating ders programları...');
  let kademeCount = 0;
  let gunCount = 0;
  let dersCount = 0;

  for (let ki = 0; ki < dersProgramlari.length; ki++) {
    const kademe = dersProgramlari[ki];

    const kademeResult = await safeCreate('ders_programlari', {
      makale_sayisi: kademe.makaleSayisi,
      sira: ki + 1,
      translations: [
        { languages_code: 'tr', kademe: kademe.kademe, kisa: kademe.kisa },
      ],
    });

    if (!kademeResult) continue;
    kademeCount++;

    for (let gi = 0; gi < kademe.programlar.length; gi++) {
      const gun = kademe.programlar[gi];

      const gunResult = await safeCreate('ders_gunleri', {
        kademe_id: kademeResult.id,
        sira: gi + 1,
        translations: [
          { languages_code: 'tr', gun: gun.gun },
        ],
      });

      if (!gunResult) continue;
      gunCount++;

      for (let di = 0; di < gun.dersler.length; di++) {
        const ders = gun.dersler[di];

        const dersResult = await safeCreate('dersler', {
          gun_id: gunResult.id,
          saat: ders.saat,
          sure: ders.sure,
          sira: di + 1,
          translations: [
            { languages_code: 'tr', ders: ders.ders, hoca: ders.hoca },
          ],
        });

        if (dersResult) dersCount++;
      }
    }
  }

  log('  ✅', `${kademeCount} kademe, ${gunCount} gün, ${dersCount} ders migrated`);
}

// ─── 5. Navigasyon ───
async function migrateNavigasyon() {
  log('🧭', 'Migrating navigasyon...');
  // Navigasyon runtime'da oluşturuluyor (fonksiyon bazlı)
  // Manuel olarak Directus panelden eklenecek
  log('  ⏭️', 'Navigasyon fonksiyon bazlı — Directus panelden manuel oluşturulacak');
}

// ─── Main ───
async function main() {
  console.log('');
  console.log('═══════════════════════════════════════');
  console.log('  MTO2 → Directus Migration');
  console.log(`  URL: ${DIRECTUS_URL}`);
  console.log('═══════════════════════════════════════');
  console.log('');

  await seedLanguages();
  await migrateAyarlar();
  await migrateKitaplar();
  await migrateDersProgramlari();
  await migrateNavigasyon();

  console.log('');
  log('🎉', 'Migration tamamlandı!');
  console.log('');
  console.log('Sonraki adımlar:');
  console.log('  1. Directus panelden verileri kontrol et');
  console.log('  2. EN/AR çevirilerini panelden gir');
  console.log('  3. Navigasyon menüsünü panelden oluştur');
  console.log('  4. Sayfa içeriklerini (hakkımızda, SSS vb.) panelden gir');
}

main().catch((e) => {
  console.error('Fatal error:', e);
  process.exit(1);
});
