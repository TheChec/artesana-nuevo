'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import styles from './Carousel.module.css'

const slides = [
  {
    img: '/assets/sanvalentin/carteraFlores.jpg',
    titulo: 'Jardinera llena de flores',
    subtitulo: 'Flores tejidas a mano',
    texto: 'Más que un bouquet, una caja especial que dura para siempre',
    href: '/flores',
    cta: 'Ver flores →',
  },
  {
    img: '/assets/carteras/hibaBag.jpeg',
    titulo: 'Carteras únicas',
    subtitulo: 'Hechas en trapillo',
    texto: 'Diseños exclusivos con herrajes de acero inoxidable, en los colores que elijas',
    href: '/carteras',
    cta: 'Ver carteras →',
  },
  {
    img: '/assets/sanvalentin/parejaAbejas.jpg',
    titulo: 'Abejitas enamoradas',
    subtitulo: 'Llaveros artesanales',
    texto: 'Cuando se acercan, se dan un besito gracias al imán que llevan dentro',
    href: '/llaveros',
    cta: 'Ver llaveros →',
  },
  {
    img: '/assets/bebes/pelucheConejita.jpg',
    titulo: 'Tejidos para bebé',
    subtitulo: 'Hilo hipoalergénico',
    texto: 'Sonajeros, peluches y accesorios seguros para los más pequeños',
    href: '/tejidosbebe',
    cta: 'Ver tejidos →',
  },
]

export default function Carousel() {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState(null)
  const [paused, setPaused] = useState(false)

  const goTo = useCallback((index) => {
    setPrev(current)
    setCurrent(index)
  }, [current])

  const next = useCallback(() => {
    goTo((current + 1) % slides.length)
  }, [current, goTo])

  const prevSlide = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length)
  }, [current, goTo])

  useEffect(() => {
    if (paused) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next, paused])

  return (
    <section
      className={styles.hero}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`${styles.slide} ${i === current ? styles.active : ''} ${i === prev ? styles.exiting : ''}`}
        >
          <img
            src={slide.img}
            alt={slide.titulo}
            className={styles.slideImg}
            loading={i === 0 ? 'eager' : 'lazy'}
            fetchPriority={i === 0 ? 'high' : 'low'}
            decoding="async"
          />
          <div className={styles.overlay} />
          <div className={styles.content}>
            <span className={styles.subtitulo}>{slide.subtitulo}</span>
            <h1 className={styles.titulo}>{slide.titulo}</h1>
            <p className={styles.texto}>{slide.texto}</p>
            <Link href={slide.href} className={styles.cta}>{slide.cta}</Link>
          </div>
        </div>
      ))}

      <button className={`${styles.arrow} ${styles.arrowLeft}`} onClick={prevSlide} aria-label="Anterior">
        &#8249;
      </button>
      <button className={`${styles.arrow} ${styles.arrowRight}`} onClick={next} aria-label="Siguiente">
        &#8250;
      </button>

      <div className={styles.dots}>
        {slides.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Ir a slide ${i + 1}`}
          />
        ))}
      </div>

      <div className={styles.progressBar}>
        <div
          key={current}
          className={styles.progressFill}
          style={{ animationPlayState: paused ? 'paused' : 'running' }}
        />
      </div>
    </section>
  )
}
