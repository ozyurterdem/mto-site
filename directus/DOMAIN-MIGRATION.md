# MTO2 Domain Taşıma Checklist

Mevcut: `mto2.siberkale.com` + `cms.mto2.siberkale.com`
Hedef: `yenidomain.com` + `cms.yenidomain.com`

## Adımlar

### 1. DNS
- [ ] Yeni domain A kaydı → 195.46.159.109
- [ ] `cms.yenidomain.com` A kaydı → 195.46.159.109

### 2. Coolify — mto-site app
- [ ] FQDN güncelle: `https://yenidomain.com`
- [ ] Restart → Traefik yeni SSL alır

### 3. Coolify — mto-directus service
- [ ] FQDN güncelle: `https://cms.yenidomain.com`
- [ ] Env güncelle: `PUBLIC_URL=https://cms.yenidomain.com`
- [ ] Env güncelle: `CORS_ORIGIN=https://yenidomain.com,https://cms.yenidomain.com`
- [ ] Restart

### 4. Astro .env
- [ ] `DIRECTUS_URL=https://cms.yenidomain.com`
- [ ] `SITE_URL=https://yenidomain.com`
- [ ] Rebuild & deploy

### 5. Eski domain redirect
- [ ] `mto2.siberkale.com` → 301 redirect `yenidomain.com`
- [ ] `cms.mto2.siberkale.com` → 301 redirect `cms.yenidomain.com`

### 6. Doğrulama
- [ ] Admin panel erişim: `https://cms.yenidomain.com/admin`
- [ ] Site erişim: `https://yenidomain.com`
- [ ] SSL geçerli (Let's Encrypt)
- [ ] API çalışıyor: `https://cms.yenidomain.com/items/kitaplar`
- [ ] Webhook çalışıyor (test edit → rebuild)
