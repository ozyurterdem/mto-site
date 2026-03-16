// Navigasyon verileri — Header ve Sidebar'da merkezi olarak kullanılır
// Dal renk sistemi: İlim=vizon, İrfan=turuncu, Hikmet=mavi

import { t, localePath, type Locale, defaultLocale } from '../i18n/index';

// ─── Tip tanımları ───
export interface NavItem {
  label: string;
  href: string;
  isHeader?: boolean;
  isSubItem?: boolean;
  children?: NavItem[];
}

export interface HeaderNavItem {
  label: string;
  href: string;
  color?: string;
  children?: NavItem[][];
}

export interface SidebarNav {
  title: string;
  color: string;
  items: NavItem[];
}

// ─── Header navigasyonu ───
export const headerNav: HeaderNavItem[] = [
  { label: 'Anasayfa', href: '/' },
  {
    label: 'İlim · Bilme',
    href: '/ilim-bilme',
    color: 'vizon',
    children: [
      [
        { label: 'Hakkımızda', href: '/ilim-bilme/hakkimizda' },
        { label: 'Nişangâh', href: '/ilim-bilme/nisangah' },
        { label: "MTO'dan Mesaj", href: '/ilim-bilme/mto-mesaj' },
        { label: 'Şehir Temsilcilikleri', href: '/ilim-bilme/sehir-temsilcilikleri' },
        { label: 'MTO Bülten', href: '/ilim-bilme/mto-bulten' },
        { label: 'SSS', href: '/ilim-bilme/sss' },
      ],
      [
        { label: 'Akademi', href: '#', isHeader: true },
      ],
    ],
  },
  {
    label: 'İrfan · Bulma',
    href: '/irfan-bulma',
    color: 'turuncu',
    children: [
      [
        { label: 'Dersler', href: '/irfan-bulma/dersler' },
        { label: '100 Kitap Listesi', href: '/100-kitap' },
        { label: '4 Kalem Tekniği', href: '/dort-kalem' },
      ],
    ],
  },
  {
    label: 'Hikmet · Olma',
    href: '/hikmet-olma',
    color: 'mavi',
    children: [
      [
        { label: 'Kamplar', href: '/hikmet-olma/kamplar' },
        { label: 'Makaleler', href: '/hikmet-olma/makaleler' },
        { label: 'Yazılar', href: '/hikmet-olma/yazilar' },
        { label: 'Kulüpler', href: '/hikmet-olma/kulupler' },
        { label: 'Seminerler', href: '/hikmet-olma/seminerler' },
        { label: 'Faaliyetler', href: '/hikmet-olma/faaliyetler' },
      ],
    ],
  },
  { label: 'İletişim', href: '/iletisim' },
];

// ─── Sidebar navigasyonları (iç sayfalar) ───
export const ilimBilmeNav: SidebarNav = {
  title: 'İLİM · BİLME',
  color: 'vizon', // #B7A78F
  items: [
    { label: 'Hakkımızda', href: '/ilim-bilme/hakkimizda' },
    { label: 'Nişangâh', href: '/ilim-bilme/nisangah' },
    { label: "MTO'dan Mesaj", href: '/ilim-bilme/mto-mesaj' },
    {
      label: 'Akademi',
      href: '#',
      children: [
        { label: 'Akademik Takvim', href: '/ilim-bilme/akademik-takvim' },
        { label: 'Akademik Kadro', href: '/ilim-bilme/akademik-kadro' },
        { label: 'Ders Programları', href: '/ders-programi' },
      ],
    },
    { label: 'Şehir Temsilcilikleri', href: '/ilim-bilme/sehir-temsilcilikleri' },
    { label: 'MTO Bülten', href: '/ilim-bilme/mto-bulten' },
    { label: 'SSS', href: '/ilim-bilme/sss' },
  ],
};

export const irfanBulmaNav: SidebarNav = {
  title: 'İRFAN · BULMA',
  color: 'turuncu', // #E7A54E
  items: [
    { label: 'Dersler', href: '/irfan-bulma/dersler' },
    { label: '100 Kitap Listesi', href: '/100-kitap' },
    { label: '4 Kalem Tekniği', href: '/dort-kalem' },
  ],
};

export const hikmetOlmaNav: SidebarNav = {
  title: 'HİKMET · OLMA',
  color: 'mavi', // #0D619A
  items: [
    { label: 'Kamplar', href: '/hikmet-olma/kamplar' },
    { label: 'Makaleler', href: '/hikmet-olma/makaleler' },
    { label: 'Yazılar', href: '/hikmet-olma/yazilar' },
    { label: 'Kulüpler', href: '/hikmet-olma/kulupler' },
    { label: 'Seminerler', href: '/hikmet-olma/seminerler' },
    {
      label: 'Faaliyetler',
      href: '/hikmet-olma/faaliyetler',
      children: [
        { label: 'Kitap Tahlili', href: '/hikmet-olma/faaliyetler/kitap-tahlili' },
        { label: 'İftarlar', href: '/hikmet-olma/faaliyetler/iftarlar' },
        { label: 'Talebe Buluşmaları', href: '/hikmet-olma/faaliyetler/talebe-bulusmalari' },
        { label: 'Halkalar', href: '/hikmet-olma/faaliyetler/halkalar' },
      ],
    },
  ],
};

// ─── Locale-aware sidebar getter'ları ───
export function getIlimBilmeNav(locale: Locale = defaultLocale): SidebarNav {
  return {
    title: t(locale, 'innerPage.sidebarTitles.ilimBilme'),
    color: 'vizon',
    items: [
      { label: t(locale, 'nav.sub.hakkimizda'), href: localePath(locale, '/ilim-bilme/hakkimizda') },
      { label: t(locale, 'nav.sub.nisangah'), href: localePath(locale, '/ilim-bilme/nisangah') },
      { label: t(locale, 'nav.sub.mtoMesaj'), href: localePath(locale, '/ilim-bilme/mto-mesaj') },
      {
        label: t(locale, 'nav.sub.akademi'),
        href: '#',
        children: [
          { label: t(locale, 'nav.sub.akademikTakvim'), href: localePath(locale, '/ilim-bilme/akademik-takvim') },
          { label: t(locale, 'nav.sub.akademikKadro'), href: localePath(locale, '/ilim-bilme/akademik-kadro') },
          { label: t(locale, 'nav.sub.dersProgramlari'), href: localePath(locale, '/ders-programi') },
        ],
      },
      { label: t(locale, 'nav.sub.sehirTemsilcilikleri'), href: localePath(locale, '/ilim-bilme/sehir-temsilcilikleri') },
      { label: t(locale, 'nav.sub.mtoBulten'), href: localePath(locale, '/ilim-bilme/mto-bulten') },
      { label: t(locale, 'nav.sub.sss'), href: localePath(locale, '/ilim-bilme/sss') },
    ],
  };
}
