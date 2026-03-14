// Sidebar navigasyon verileri — tüm iç sayfalarda kullanılır
// Dal renk sistemi: İlim=vizon, İrfan=turuncu, Hikmet=mavi

export const ilimBilmeNav = {
  title: 'İLİM · BİLME',
  color: 'vizon', // #B7A78F
  items: [
    { label: 'Hakkımızda', href: '/ilim-bilme/hakkimizda' },
    { label: 'Nişangah', href: '/ilim-bilme/nisangah' },
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

export const irfanBulmaNav = {
  title: 'İRFAN · BULMA',
  color: 'turuncu', // #E7A54E
  items: [
    { label: 'Dersler', href: '/irfan-bulma/dersler' },
    { label: '100 Kitap Listesi', href: '/100-kitap' },
    { label: '4 Kalem Tekniği', href: '/dort-kalem' },
  ],
};

export const hikmetOlmaNav = {
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
