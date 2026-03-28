export const dynamic = 'force-static'

const BASE = 'https://artesanashop.com'

export default function sitemap() {
  return [
    { url: BASE,                        lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/flores`,            lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/carteras`,          lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/tejidosbebe`,       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/llaveros`,          lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/temporada`,         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ]
}
