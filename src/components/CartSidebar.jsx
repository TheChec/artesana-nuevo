'use client'
import { useState, useEffect } from 'react'
import { useCart } from '@/context/CartContext'
import styles from './CartSidebar.module.css'

export default function CartSidebar() {
  const { cart, removeFromCart, updateQty, clearCart, total, isOpen, setIsOpen, parsePrice } = useCart()
  const [showModal, setShowModal] = useState(false)
  const [nombre, setNombre] = useState('')
  const [entrega, setEntrega] = useState('')
  const [comentarios, setComentarios] = useState('')
  const [confirmClear, setConfirmClear] = useState(false)

  useEffect(() => {
    if (!confirmClear) return
    const t = setTimeout(() => setConfirmClear(false), 3000)
    return () => clearTimeout(t)
  }, [confirmClear])

  const handleFinish = () => {
    if (!nombre.trim() || !entrega) {
      alert('Por favor completa tu nombre y el tipo de entrega.')
      return
    }

    let mensaje = `¡Hola! 👋✨\nVengo desde artesanashop.com\n\nMi nombre es: ${nombre}\nTipo de entrega: ${entrega}\n\nMi pedido:\n`
    let totalCalc = 0

    cart.forEach(item => {
      const precio = parsePrice(item.precio)
      const subtotal = precio * item.cantidad
      totalCalc += subtotal
      const desc = item.descripcion ? ` (${item.descripcion})` : ''
      const precioStr = subtotal > 0 ? `${subtotal}$` : item.precio
      mensaje += `• ${item.titulo}${desc}: ×${item.cantidad} = ${precioStr}\n`
    })

    mensaje += `\nTotal: ${totalCalc > 0 ? `$${totalCalc.toFixed(2)}` : 'a consultar'}`
    if (comentarios.trim()) mensaje += `\n\nComentarios: ${comentarios}`
    mensaje += `\n\n¡Muchas gracias! 💛🧶`

    window.open(
      `https://api.whatsapp.com/send?phone=584246719237&text=${encodeURIComponent(mensaje)}`,
      '_blank'
    )

    clearCart()
    setIsOpen(false)
    setShowModal(false)
    setNombre('')
    setEntrega('')
    setComentarios('')
  }

  return (
    <>
      {isOpen && <div className={styles.overlay} onClick={() => setIsOpen(false)} />}

      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <div className={styles.header}>
          <h2 className={styles.titulo}>Carrito</h2>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)} aria-label="Cerrar carrito">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        <div className={styles.body}>
          {cart.length === 0 ? (
            <p className={styles.empty}>Tu carrito está vacío 🛒</p>
          ) : (
            cart.map(item => {
              const precio = parsePrice(item.precio)
              const subtotal = precio * item.cantidad
              return (
                <div key={item.id} className={styles.item}>
                  <img src={item.img} alt={item.titulo} className={styles.itemImg} />
                  <div className={styles.itemInfo}>
                    <p className={styles.itemName}>
                      {item.titulo}
                      {item.descripcion ? <span className={styles.itemDesc}> · {item.descripcion}</span> : null}
                    </p>
                    <div className={styles.itemControls}>
                      <button
                        className={styles.deleteBtn}
                        onClick={() => removeFromCart(item.id)}
                        aria-label="Eliminar del carrito"
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"/></svg>
                      </button>
                      <div className={styles.qty}>
                        <button onClick={() => updateQty(item.id, -1)}>−</button>
                        <span>{item.cantidad}</span>
                        <button onClick={() => updateQty(item.id, 1)}>+</button>
                      </div>
                      <span className={styles.itemPrice}>
                        {subtotal > 0 ? `${subtotal.toFixed(2)}$` : item.precio}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })
          )}
        </div>

        <div className={styles.footer}>
          <div className={styles.totalRow}>
            <span>Total</span>
            <strong>{total > 0 ? `$${total.toFixed(2)}` : '—'}</strong>
          </div>
          <div className={styles.btnRow}>
            <button
              className={`${styles.clearBtn} ${confirmClear ? styles.clearBtnConfirm : ''}`}
              onClick={() => {
                if (confirmClear) { clearCart(); setConfirmClear(false) }
                else setConfirmClear(true)
              }}
              disabled={cart.length === 0}
            >
              {confirmClear ? '¿Seguro?' : 'Vaciar'}
            </button>
            <button
              className={styles.finishBtn}
              onClick={() => setShowModal(true)}
              disabled={cart.length === 0}
            >
              Finalizar compra
            </button>
          </div>
        </div>
      </aside>

      {showModal && (
        <div className={styles.modalBackdrop} onClick={() => setShowModal(false)}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setShowModal(false)}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            <h2 className={styles.modalTitle}>¡Ya casi!</h2>
            <p className={styles.modalSub}>Completa los datos para enviar tu pedido por WhatsApp</p>

            <form className={styles.form} onSubmit={e => { e.preventDefault(); handleFinish() }}>
              <label className={styles.field}>
                <span>Nombre completo</span>
                <input
                  type="text"
                  value={nombre}
                  onChange={e => setNombre(e.target.value)}
                  placeholder="Tu nombre y apellido"
                  required
                />
              </label>

              <fieldset className={styles.fieldset}>
                <legend>Tipo de entrega</legend>
                {['Envío nacional', 'Delivery', 'Entrega presencial'].map(opt => (
                  <label key={opt} className={styles.radioLabel}>
                    <input
                      type="radio"
                      name="entrega"
                      value={opt}
                      checked={entrega === opt}
                      onChange={() => setEntrega(opt)}
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </fieldset>

              <label className={styles.field}>
                <span>Comentarios (colores, tallas, etc.)</span>
                <textarea
                  value={comentarios}
                  onChange={e => setComentarios(e.target.value)}
                  placeholder="Ej: quiero el tulipán en rosado pastel..."
                  rows={3}
                />
              </label>

              <button type="submit" className={styles.sendBtn}>
                <img src="/assets/icono-whatsapp.png" alt="" width={20} height={20} />
                Enviar pedido por WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
