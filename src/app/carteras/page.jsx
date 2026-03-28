export const metadata = {
  title: 'Carteras tejidas',
  description:
    'Carteras y bolsos tejidos en trapillo con herrajes de acero inoxidable. Más de 20 colores disponibles. Diseños exclusivos hechos a mano en Maracaibo.',
  keywords: ['carteras trapillo', 'bolsos tejidos', 'carteras a mano', 'trapillo colores', 'bolsos crochet', 'carteras maracaibo', 'herrajes acero'],
  alternates: { canonical: 'https://artesanashop.com/carteras' },
  openGraph: {
    title: 'Carteras en trapillo | Artesana',
    description: 'Carteras tejidas a mano en trapillo. Más de 20 colores, herrajes de acero. Diseños exclusivos.',
    url: 'https://artesanashop.com/carteras',
    images: [{ url: '/assets/carteras/hibaBag.jpeg', width: 800, height: 1000, alt: 'Cartera tejida en trapillo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carteras en trapillo | Artesana',
    description: 'Carteras tejidas a mano en trapillo. Más de 20 colores, herrajes de acero inoxidable.',
    images: ['/assets/carteras/hibaBag.jpeg'],
  },
}

import CategoryPage from '@/components/CategoryPage'
import productos from '@/data/carteras.json'

const coloresTrapillo = [
  { img: '/assets/coloresTrapillo/azulRey.jpeg', nombre: 'Azul Rey' },
  { img: '/assets/coloresTrapillo/azul.jpeg', nombre: 'Azul' },
  { img: '/assets/coloresTrapillo/azulElectrico.jpeg', nombre: 'Azul Electrico' },
  { img: '/assets/coloresTrapillo/celeste.jpeg', nombre: 'Celeste' },
  { img: '/assets/coloresTrapillo/beige.jpeg', nombre: 'Beige' },
  { img: '/assets/coloresTrapillo/marron.jpeg', nombre: 'Marron' },
  { img: '/assets/coloresTrapillo/canela.jpeg', nombre: 'Canela' },
  { img: '/assets/coloresTrapillo/gris.jpeg', nombre: 'Gris' },
  { img: '/assets/coloresTrapillo/negro.jpeg', nombre: 'Negro' },
  { img: '/assets/coloresTrapillo/blanco.jpeg', nombre: 'Blanco' },
  { img: '/assets/coloresTrapillo/rosaVieja.jpeg', nombre: 'Rosa Vieja' },
  { img: '/assets/coloresTrapillo/rojoVino.jpeg', nombre: 'Rojo Vino' },
  { img: '/assets/coloresTrapillo/rojo.jpeg', nombre: 'Rojo' },
  { img: '/assets/coloresTrapillo/cereza.jpeg', nombre: 'Cereza' },
  { img: '/assets/coloresTrapillo/verdeOscuro.jpeg', nombre: 'Verde Oscuro' },
  { img: '/assets/coloresTrapillo/verde.jpeg', nombre: 'Verde' },
  { img: '/assets/coloresTrapillo/lila.jpeg', nombre: 'Lila' },
  { img: '/assets/coloresTrapillo/morado.jpeg', nombre: 'Morado' },
  { img: '/assets/coloresTrapillo/melocoton.jpeg', nombre: 'Melocoton' },
  { img: '/assets/coloresTrapillo/rosadoSalmon.jpeg', nombre: 'Salmon' },
  { img: '/assets/coloresTrapillo/rosaElectrico.jpeg', nombre: 'Rosado Electrico' },
  { img: '/assets/coloresTrapillo/fucsia.jpeg', nombre: 'Fucsia' },
]

export default function CarterasPage() {
  return (
    <CategoryPage
      titulo="Carteras"
      descripcion="Carteras, colores, accesorios. Todos los diseños están hechos en trapillo en diferentes colores y herrajes de acero inoxidable."
      productos={productos}
      colores={coloresTrapillo}
    />
  )
}
