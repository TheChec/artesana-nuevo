'use client'

import { useState, useEffect } from 'react'
import { useCart } from '@/context/CartContext'
import styles from './ProductGrid.module.css'

export default function ProductGrid({ products }) {
  const categories = [...new Set(products.map((p) => p.categoria))]
  const [selectedCat, setSelectedCat] = useState(categories[0])
  const [modalProduct, setModalProduct] = useState(null)
  const [animKey, setAnimKey] = useState(0)
  const [added, setAdded] = useState(false)

  const { addToCart, setIsOpen: openCart } = useCart()

  const handleCategoryChange = (cat) => {
    if (cat === selectedCat) return
    setSelectedCat(cat)
    setAnimKey((k) => k + 1)
  }

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') setModalProduct(null) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = modalProduct ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [modalProduct])

  useEffect(() => {
    if (!modalProduct) setAdded(false)
  }, [modalProduct])

  const handleAddToCart = (product) => {
    addToCart(product)
    setAdded(true)
    setTimeout(() => {
      setAdded(false)
      setModalProduct(null)
      openCart(true)
    }, 900)
  }

  const buildWaLink = (product) => {
    const msg = `¡Hola! 👋 Me interesa este producto de artesanashop.com:\n\n• ${product.titulo}${product.descripcion ? ` - ${product.descripcion}` : ''}\n  Precio: ${product.precio}\n\n¿Me puedes dar más información? 🧶`
    return `https://api.whatsapp.com/send?phone=584246719237&text=${encodeURIComponent(msg)}`
  }

  const filtered = products.filter((p) => p.categoria === selectedCat)

  return (
    <>
      <div className={styles.filtros}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`${styles.filtroBtn} ${selectedCat === cat ? styles.filtroBtnActive : ''}`}
            onClick={() => handleCategoryChange(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div key={animKey} className={styles.grid}>
        {filtered.map((product, i) => (
          <article
            key={product.id ?? i}
            className={styles.card}
            style={{ '--i': i }}
            onClick={() => setModalProduct(product)}
          >
            <div className={styles.cardImgWrapper}>
              <img src={product.img} alt={product.titulo} className={styles.cardImg} />
              <div className={styles.cardImgOverlay}>
                <span className={styles.verMas}>Ver detalle</span>
              </div>
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitulo}>{product.titulo}</h3>
              {product.descripcion && (
                <p className={styles.cardDescripcion}>{product.descripcion}</p>
              )}
              <span className={styles.cardPrecio}>{product.precio}</span>
            </div>
          </article>
        ))}
      </div>

      {modalProduct && (
        <div className={styles.modalBackdrop} onClick={() => setModalProduct(null)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.modalClose}
              onClick={() => setModalProduct(null)}
              aria-label="Cerrar"
            >
              ✕
            </button>

            <div className={styles.modalImgWrapper}>
              <img
                src={modalProduct.img}
                alt={modalProduct.titulo}
                className={styles.modalImg}
              />
            </div>

            <div className={styles.modalInfo}>
              <h2 className={styles.modalTitulo}>{modalProduct.titulo}</h2>
              <span className={styles.modalPrecio}>{modalProduct.precio}</span>
              {modalProduct.descripcion && (
                <p className={styles.modalDescripcion}>{modalProduct.descripcion}</p>
              )}
              <div className={styles.modalActions}>
                <button
                  className={`${styles.addCartBtn} ${added ? styles.addCartBtnAdded : ''}`}
                  onClick={() => handleAddToCart(modalProduct)}
                >
                  {added ? '✓ Añadido' : (
                    <>
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                        <path d="M1 1h4l2.68 13.39a2 2 0 001.99 1.61h9.66a2 2 0 001.99-1.61L23 6H6"/>
                      </svg>
                      Añadir al carrito
                    </>
                  )}
                </button>
                <a
                  href={buildWaLink(modalProduct)}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.modalWa}
                >
                  <img src="/assets/icono-whatsapp.png" alt="" />
                  Pedir por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
