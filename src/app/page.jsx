export const metadata = {
  title: 'Inicio',
  description:
    'Descubre flores tejidas a mano, carteras en trapillo, llaveros y accesorios para bebé. Pedidos personalizados desde Maracaibo, Venezuela.',
  keywords: ['artesana', 'flores crochet', 'carteras trapillo', 'tejidos bebe', 'llaveros tejidos', 'maracaibo', 'venezuela', 'regalos artesanales'],
  alternates: { canonical: 'https://artesanashop.com' },
  openGraph: {
    title: 'Artesana | Tienda de accesorios tejidos a mano',
    description: 'Flores, carteras, llaveros y tejidos de bebé hechos a mano. Personalizados. Maracaibo, Venezuela.',
    url: 'https://artesanashop.com',
    images: [{ url: '/assets/flores/bouquetTresFlores.jpeg', width: 800, height: 1000, alt: 'Flores tejidas Artesana' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Artesana | Tienda de accesorios tejidos a mano',
    description: 'Flores, carteras, llaveros y tejidos de bebé hechos a mano. Personalizados. Maracaibo.',
    images: ['/assets/flores/bouquetTresFlores.jpeg'],
  },
}

import Link from 'next/link'
import Carousel from '@/components/Carousel'
import styles from './page.module.css'

const catalogos = [
  { href: '/temporada', img: '/assets/mesh/portada.jpg',                    label: 'Gorritos\ntejidos',   emoji: '🧶' },
  { href: '/carteras',  img: '/assets/carteras/hibaBag.jpeg',               label: 'Carteras',            emoji: '👜' },
  { href: '/flores',    img: '/assets/flores/bouquetTresFlores.jpeg',       label: 'Flores',              emoji: '🌸' },
  { href: '/tejidosbebe', img: '/assets/bebes/pelucheConejita.jpg',         label: 'Tejidos\nde bebé',    emoji: '🐰' },
  { href: '/llaveros',  img: '/assets/bebes/llaveroCorazonTrapillo.jpg',    label: 'Llaveros',            emoji: '🔑' },
]

export default function HomePage() {
  return (
    <>
      <Carousel />

      <section className={styles.catalogoSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionEyebrow}>Nuestros productos</span>
          <h2 className={styles.sectionTitle}>Catálogos</h2>
          <div className={styles.sectionLine} />
        </div>

        <div className={styles.grid}>
          {catalogos.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.card}
              style={{ '--i': i }}
            >
              <img
                src={item.img}
                alt={item.label}
                className={styles.cardImg}
                loading="lazy"
                decoding="async"
              />
              <div className={styles.cardOverlay} />
              <div className={styles.cardContent}>
                <span className={styles.cardEmoji}>{item.emoji}</span>
                <h3 className={styles.cardLabel}>{item.label}</h3>
                <span className={styles.cardArrow}>Ver →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>¿Quieres hacer un pedido?</h2>
          <p>Contáctanos directamente por WhatsApp o Instagram y con gusto te asesoramos.</p>
          <div className={styles.ctaButtons}>
            <a
              href="https://wa.link/76fgft"
              target="_blank"
              rel="noreferrer"
              className={styles.ctaWa}
            >
              <img src="/assets/icono-whatsapp.png" alt="" width={24} height={24} decoding="async" />
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/artesana.mcbo"
              target="_blank"
              rel="noreferrer"
              className={styles.ctaIg}
            >
              <img src="/assets/icono-instagram.png" alt="" width={24} height={24} decoding="async" />
              Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
