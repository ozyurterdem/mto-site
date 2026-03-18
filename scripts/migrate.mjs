// MTO2 Migration Script — ESM
const CMS = "https://cms.mto2.siberkale.com";
const delay = (ms) => new Promise(r => setTimeout(r, ms));

// Login
const loginR = await fetch(`${CMS}/auth/login`, {
  method: "POST", headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email: "admin@siberkale.com", password: "MTO2cms!2026secure" })
}).then(r => r.json());
const TOKEN = loginR.data.access_token;
console.log("✅ Auth OK");

async function api(method, path, data) {
  const r = await fetch(`${CMS}${path}`, {
    method, headers: { Authorization: `Bearer ${TOKEN}`, "Content-Type": "application/json" },
    body: data ? JSON.stringify(data) : undefined
  });
  return r.json();
}

// Import data (dynamic import for .ts via node --experimental-strip-types)
const { dersProgramlari } = await import("../src/data/ders-programi.ts");
const { hundredBooks, categoryColors } = await import("../src/data/hundred-books.ts");
const { socialLinks } = await import("../src/data/social-links.ts");

// ── 1. Ayarlar ──
console.log("⚙️ Ayarlar...");
const sosyal = {};
for (const l of socialLinks) sosyal[l.label.toLowerCase()] = l.href;
// Check if singleton item exists
let ayarCheck = await api("GET", "/items/ayarlar");
if (ayarCheck.data) {
  const r = await api("PATCH", "/items/ayarlar", {
    telefon: "", email: "info@mto.org.tr", sosyal_medya: sosyal,
    translations: { create: [
      { languages_code: "tr", site_adi: "MTO Kurumsal", adres: "" },
      { languages_code: "en", site_adi: "MTO Corporate", adres: "" },
      { languages_code: "ar", site_adi: "مؤسسة MTO", adres: "" }
    ], update: [], delete: [] }
  });
  console.log(r.data ? "  ✅ Ayarlar updated" : "  ❌ " + (r.errors?.[0]?.message || JSON.stringify(r).slice(0,100)));
} else {
  console.log("  ⏭️ Singleton route doesn't exist yet, skipping");
}

// ── 2. Kitaplar ──
console.log("📚 Kitaplar...");
const existingBooks = await api("GET", "/items/kitaplar?fields=id,translations.baslik&limit=-1");
const existingTitles = new Set((existingBooks.data || []).flatMap(b => (b.translations || []).map(t => t.baslik)));
console.log(`  Existing: ${existingTitles.size}`);

let bookAdded = 0;
for (let i = 0; i < hundredBooks.length; i++) {
  const b = hundredBooks[i];
  if (existingTitles.has(b.title)) continue;
  const r = await api("POST", "/items/kitaplar", {
    sira: i + 1, kategori: b.category, renk: b.color || categoryColors[b.category] || "#ccc",
    referans_mi: b.isReference || false, numara: b.number || null,
    translations: [{ languages_code: "tr", baslik: b.title, yazar: b.author, yayinevi: b.publisher || "", aciklama: b.description || "" }]
  });
  if (r.data) bookAdded++;
  else console.log(`  ❌ ${b.title}: ${r.errors?.[0]?.message || ""}`);
  if (i % 30 === 0) await delay(100);
}
console.log(`  ✅ +${bookAdded} new (total: ${existingTitles.size + bookAdded}/${hundredBooks.length})`);

// ── 3. Ders Programları ──
console.log("📅 Ders Programları...");
const existingKademe = await api("GET", "/items/ders_programlari?limit=1");
if (existingKademe.data?.length > 0) {
  console.log("  ⏭️ Already migrated, skipping");
} else {
  let kademeC = 0, gunC = 0, dersC = 0;
  for (let ki = 0; ki < dersProgramlari.length; ki++) {
    const kademe = dersProgramlari[ki];
    const kR = await api("POST", "/items/ders_programlari", {
      makale_sayisi: kademe.makaleSayisi, sira: ki + 1,
      translations: [{ languages_code: "tr", kademe: kademe.kademe, kisa: kademe.kisa }]
    });
    if (!kR.data) { console.log("  ❌ kademe: " + (kR.errors?.[0]?.message || "")); await delay(200); continue; }
    kademeC++;

    for (let gi = 0; gi < kademe.programlar.length; gi++) {
      const gun = kademe.programlar[gi];
      const gR = await api("POST", "/items/ders_gunleri", {
        kademe_id: kR.data.id, sira: gi + 1,
        translations: [{ languages_code: "tr", gun: gun.gun }]
      });
      if (!gR.data) { await delay(100); continue; }
      gunC++;

      for (let di = 0; di < gun.dersler.length; di++) {
        const d = gun.dersler[di];
        const dR = await api("POST", "/items/dersler", {
          gun_id: gR.data.id, saat: d.saat, sure: d.sure, sira: di + 1,
          translations: [{ languages_code: "tr", ders: d.ders, hoca: d.hoca }]
        });
        if (dR.data) dersC++;
      }
      await delay(50);
    }
    await delay(100);
  }
  console.log(`  ✅ ${kademeC} kademe, ${gunC} gün, ${dersC} ders`);
}

// ── Summary ──
console.log("");
console.log("🎉 Migration tamamlandı!");
console.log("Panelden kontrol et: https://cms.mto2.siberkale.com/admin");
