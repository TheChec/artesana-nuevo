'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'
import styles from './Nav.module.css'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const { itemCount, setIsOpen: openCart } = useCart()

  return (
    <>
      <div className={styles.navegador}>
        <button className={styles.boton} onClick={() => setIsOpen(true)} aria-label="Abrir menú">
          <img
            className={styles.imagen}
            src="/assets/simbolo-de-lista-de-tres-elementos-con-puntos.png"
            alt="abrir menu"
            decoding="async"
          />
        </button>

        <Link href="/" className={styles.cajatitulo}>
          <h2 className={styles.logotipo}>ARTESANA</h2>
        </Link>

        <button
          className={styles.cartBtn}
          onClick={() => openCart(true)}
          aria-label={`Abrir carrito${itemCount > 0 ? `, ${itemCount} productos` : ''}`}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 001.99 1.61h9.66a2 2 0 001.99-1.61L23 6H6"/>
          </svg>
          {itemCount > 0 && (
            <span className={styles.badge}>{itemCount > 99 ? '99+' : itemCount}</span>
          )}
        </button>
      </div>

      <nav className={`${styles.navSlide} ${isOpen ? styles.open : ''}`}>
        <button className={styles.botonNav} onClick={() => setIsOpen(false)} aria-label="Cerrar menú">
          <img
            src="/assets/simbolo-de-lista-de-tres-elementos-con-puntos.png"
            alt="cerrar menu"
            decoding="async"
          />
        </button>
        <div className={styles.categoriasMenu}>
          <Link href="/carteras" onClick={() => setIsOpen(false)}>Carteras</Link>
          <Link href="/flores" onClick={() => setIsOpen(false)}>Flores</Link>
          <Link href="/tejidosbebe" onClick={() => setIsOpen(false)}>Tejidos de bebé</Link>
          <Link href="/llaveros" onClick={() => setIsOpen(false)}>Llaveros</Link>
          <Link href="/temporada" onClick={() => setIsOpen(false)}>Gorritos tejidos</Link>
          <div className={styles.iconWaAndIn}>
            <a href="https://wa.link/76fgft" target="_blank" rel="noreferrer">
              <img className={styles.iconoEnlaceNav} src="/assets/icono-whatsapp.png" alt="WhatsApp" decoding="async" />
            </a>
            <a href="https://www.instagram.com/artesana.mcbo" target="_blank" rel="noreferrer">
              <img className={styles.iconoEnlaceNav} src="/assets/icono-instagram.png" alt="Instagram" decoding="async" />
            </a>
          </div>
        </div>
      </nav>

      {isOpen && <div className={styles.overlay} onClick={() => setIsOpen(false)} />}
    </>
  )
}
