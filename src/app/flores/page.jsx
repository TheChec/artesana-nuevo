export const metadata = {
  title: 'Flores tejidas',
  description:
    'Tulipanes, rosas, girasoles y bouquets tejidos a mano en crochet. Personalizados en el color que desees. Pedidos con 3 días de anticipación. Maracaibo, Venezuela.',
  keywords: ['flores tejidas', 'tulipanes crochet', 'rosas tejidas', 'girasoles crochet', 'bouquet tejido', 'flores a mano', 'maracaibo'],
  alternates: { canonical: 'https://artesanashop.com/flores' },
  openGraph: {
    title: 'Flores tejidas a mano | Artesana',
    description: 'Tulipanes, rosas, girasoles y bouquets tejidos en crochet. Personaliza el color y la cantidad.',
    url: 'https://artesanashop.com/flores',
    images: [{ url: '/assets/flores/bouquetTresFlores.jpeg', width: 800, height: 1000, alt: 'Bouquet de flores tejidas' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flores tejidas a mano | Artesana',
    description: 'Tulipanes, rosas, girasoles y bouquets tejidos en crochet. Personaliza el color.',
    images: ['/assets/flores/bouquetTresFlores.jpeg'],
  },
}

import CategoryPage from '@/components/CategoryPage'
import productos from '@/data/flores.json'

const coloresFlores = [
  { img: '/assets/coloresFlores/colorAmarilloPastel.jpg', nombre: 'Amarillo Pastel' },
  { img: '/assets/coloresFlores/colorAmarillo.jpeg', nombre: 'Amarillo' },
  { img: '/assets/coloresFlores/colorAmarilloOscuro.jpeg', nombre: 'Amarillo Oscuro' },
  { img: '/assets/coloresFlores/colorCeleste.jpeg', nombre: 'Celeste' },
  { img: '/assets/coloresFlores/colorTurquesa.jpeg', nombre: 'Turquesa' },
  { img: '/assets/coloresFlores/colorAzulRey.jpeg', nombre: 'Azul Rey' },
  { img: '/assets/coloresFlores/colorAzulOscuro.jpeg', nombre: 'Azul Oscuro' },
  { img: '/assets/coloresFlores/colorLila.jpeg', nombre: 'Lila' },
  { img: '/assets/coloresFlores/colorMorado.jpg', nombre: 'Morado' },
  { img: '/assets/coloresFlores/colorMarron.jpeg', nombre: 'Morado Oscuro' },
  { img: '/assets/coloresFlores/colorRosadoPastel.jpeg', nombre: 'Rosado Pastel' },
  { img: '/assets/coloresFlores/colorRosado.jpeg', nombre: 'Rosado' },
  { img: '/assets/coloresFlores/colorRosadoFuerte.jpeg', nombre: 'Rosado Chicle' },
  { img: '/assets/coloresFlores/colorMagenta.jpeg', nombre: 'Magenta' },
  { img: '/assets/coloresFlores/colorRojo.jpeg', nombre: 'Rojo' },
  { img: '/assets/coloresFlores/colorNaranja.jpeg', nombre: 'Naranja' },
  { img: '/assets/coloresFlores/colorVino.jpeg', nombre: 'Vino' },
  { img: '/assets/coloresFlores/colorBeige.jpeg', nombre: 'Beige' },
  { img: '/assets/coloresFlores/colorMarron.jpeg', nombre: 'Marron' },
  { img: '/assets/coloresFlores/colorBlanco.jpeg', nombre: 'Blanco' },
  { img: '/assets/coloresFlores/colorNegro.jpeg', nombre: 'Negro' },
]

export default function FloresPage() {
  return (
    <CategoryPage
      titulo="Flores tejidas"
      descripcion={
        <>
          <p>Por favor realiza tu pedido con al menos 3 dias de anticipacion</p>
          <p>Todos los ramos se pueden personalizar con la cantidad de flores y colores que desees</p>
          <p>Para confirmar tu pedido y poder empezar a tejerlo debes hacer el pago del 50% adelantado</p>
        </>
      }
      productos={productos}
      colores={coloresFlores}
    />
  )
}
