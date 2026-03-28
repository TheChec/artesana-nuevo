export const metadata = {
  title: 'Tejidos de bebé',
  description:
    'Sonajeros, peluches, acrílicos decorativos y souvenirs tejidos a mano con hilo hipoalergénico. Personalizados para baby shower y nacimientos. Maracaibo.',
  keywords: ['tejidos bebe', 'sonajeros crochet', 'peluches tejidos', 'baby shower', 'souvenirs bebe', 'hilo hipoalergenico', 'nacimientos maracaibo'],
  alternates: { canonical: 'https://artesanashop.com/tejidosbebe' },
  openGraph: {
    title: 'Tejidos de bebé | Artesana',
    description: 'Sonajeros, peluches y decoraciones tejidas a mano. Hilo hipoalergénico. Ideales para baby shower.',
    url: 'https://artesanashop.com/tejidosbebe',
    images: [{ url: '/assets/bebes/pelucheConejita.jpg', width: 800, height: 800, alt: 'Tejidos de bebé' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tejidos de bebé | Artesana',
    description: 'Sonajeros, peluches y decoraciones tejidas a mano. Hilo hipoalergénico. Para baby shower.',
    images: ['/assets/bebes/pelucheConejita.jpg'],
  },
}

import CategoryPage from '@/components/CategoryPage'
import productos from '@/data/tejidosbebe.json'

export default function TejidosBebeePage() {
  return (
    <CategoryPage
      titulo="Tejidos de bebe"
      descripcion={
        <>
          <p>Por favor realiza tu pedido con al menos 7 dias de anticipacion</p>
          <p>Puedes personalizar los tejidos del color que desees</p>
          <p>No tejemos ningun tipo de ropa</p>
          <p>Todos los tejidos para bebes estan hechos con hilo hipo alergenico y apto para ser manipulado por bebes sin causar alergias o irritaciones</p>
          <p>Para confirmar tu pedido y poder empezar a tejerlo debes hacer el pago del 50% adelantado</p>
        </>
      }
      productos={productos}
    />
  )
}
