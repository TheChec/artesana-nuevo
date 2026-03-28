export const metadata = {
  title: 'Llaveros tejidos',
  description:
    'Llaveros tejidos a mano en crochet: flores, corazones, abejitas y más. Personalizados con plaquita y tu color favorito. Maracaibo, Venezuela.',
  keywords: ['llaveros tejidos', 'llaveros crochet', 'llaveros personalizados', 'abejitas crochet', 'llaveros corazon', 'llaveros flores', 'maracaibo'],
  alternates: { canonical: 'https://artesanashop.com/llaveros' },
  openGraph: {
    title: 'Llaveros tejidos a mano | Artesana',
    description: 'Llaveros en crochet: flores, corazones, abejitas. Personaliza el color y añade plaquita.',
    url: 'https://artesanashop.com/llaveros',
    images: [{ url: '/assets/llaveros/abejasEnamoradas.jpg', width: 800, height: 800, alt: 'Llaveros tejidos' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Llaveros tejidos a mano | Artesana',
    description: 'Llaveros en crochet: flores, corazones, abejitas. Personaliza el color y añade plaquita.',
    images: ['/assets/llaveros/abejasEnamoradas.jpg'],
  },
}

import CategoryPage from '@/components/CategoryPage'
import productos from '@/data/llaveros.json'

export default function LlaverosPage() {
  return (
    <CategoryPage
      titulo="Llaveros"
      descripcion={
        <>
          <p>Por favor realiza tu pedido con al menos 7 dias de anticipacion</p>
          <p>Puedes personalizar los tejidos del color que desees</p>
          <p>Para confirmar tu pedido y poder empezar a tejerlo debes hacer el pago del 50% adelantado</p>
        </>
      }
      productos={productos}
    />
  )
}
