import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CartSidebar from '@/components/CartSidebar'
import Providers from '@/components/Providers'
import './globals.css'

export const metadata = {
  metadataBase: new URL('https://artesanashop.com'),
  title: {
    default: 'Artesana | Flores y accesorios tejidos a mano',
    template: '%s | Artesana',
  },
  description:
    'Flores tejidas, carteras en trapillo, llaveros y tejidos de bebé hechos a mano. Pedidos personalizados. Maracaibo, Venezuela.',
  keywords: [
    'artesana', 'flores tejidas', 'crochet', 'carteras trapillo',
    'amigurumis', 'llaveros tejidos', 'tejidos de bebé', 'maracaibo', 'venezuela',
    'regalos artesanales', 'bouquet tejido', 'flores a mano', 'accesorios tejidos',
  ],
  authors: [{ name: 'Artesana' }],
  creator: 'Artesana',
  openGraph: {
    type: 'website',
    locale: 'es_VE',
    url: 'https://artesanashop.com',
    siteName: 'Artesana',
    title: 'Artesana | Flores y accesorios tejidos a mano',
    description:
      'Flores tejidas, carteras en trapillo, llaveros y tejidos de bebé hechos a mano. Pedidos personalizados.',
    images: [
      {
        url: '/assets/logo artesana.jpeg',
        width: 800,
        height: 800,
        alt: 'Artesana - productos tejidos a mano',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Artesana | Flores y accesorios tejidos a mano',
    description: 'Flores tejidas, carteras, llaveros y tejidos de bebé hechos a mano. Maracaibo, Venezuela.',
    images: ['/assets/logo artesana.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
    },
  },
  icons: {
    icon: '/assets/logoArtesanaRedondo.png',
    apple: '/assets/logoArtesanaRedondo.png',
  },
  alternates: {
    canonical: 'https://artesanashop.com',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Artesana',
  url: 'https://artesanashop.com',
  logo: 'https://artesanashop.com/assets/logoArtesanaRedondo.png',
  image: 'https://artesanashop.com/assets/logo artesana.jpeg',
  description:
    'Tienda artesanal especializada en flores tejidas a mano, carteras en trapillo, llaveros y tejidos para bebé. Pedidos personalizados desde Maracaibo, Venezuela.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Maracaibo',
    addressRegion: 'Zulia',
    addressCountry: 'VE',
  },
  sameAs: [
    'https://www.instagram.com/artesana.mcbo',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Productos tejidos a mano',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Flores tejidas' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Carteras en trapillo' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Llaveros tejidos' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Tejidos de bebé' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Gorritos tejidos' } },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Providers>
          <Nav />
          {children}
          <Footer />
          <CartSidebar />
        </Providers>
      </body>
    </html>
  )
}
