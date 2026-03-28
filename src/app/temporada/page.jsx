export const metadata = {
  title: 'Gorritos tejidos',
  description:
    'Gorritos tejidos a mano estilo mesh con distintas decoraciones: caracolas, perlas, ondas y más. Disponibles en múltiples colores. Maracaibo, Venezuela.',
  keywords: ['gorritos tejidos', 'gorros crochet', 'gorros mesh', 'gorritos caracolas', 'gorros perlas', 'accesorios tejidos', 'maracaibo'],
  alternates: { canonical: 'https://artesanashop.com/temporada' },
  openGraph: {
    title: 'Gorritos tejidos | Artesana',
    description: 'Gorritos tejidos estilo mesh con caracolas, perlas y decoraciones. Personalizados en tu color.',
    url: 'https://artesanashop.com/temporada',
    images: [{ url: '/assets/mesh/portada.jpg', width: 800, height: 800, alt: 'Gorritos tejidos' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gorritos tejidos | Artesana',
    description: 'Gorritos tejidos estilo mesh con caracolas, perlas y decoraciones. Personalizados.',
    images: ['/assets/mesh/portada.jpg'],
  },
}

import CategoryPage from '@/components/CategoryPage'
import productos from '@/data/temporada.json'

export default function TemporadaPage() {
  return (
    <CategoryPage
      titulo="Gorritos tejidos"
      descripcion="Gorritos tejidos a mano con diferentes diseños y decoraciones. Personalizalos del color que desees."
      productos={productos}
    />
  )
}
