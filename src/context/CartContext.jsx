'use client'
import { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem('artesana-cart')
      if (stored) setCart(JSON.parse(stored))
    } catch {}
  }, [])

  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(i => i.id === product.id)
      const next = exists
        ? prev.map(i => i.id === product.id ? { ...i, cantidad: i.cantidad + 1 } : i)
        : [...prev, { ...product, cantidad: 1 }]
      localStorage.setItem('artesana-cart', JSON.stringify(next))
      return next
    })
  }

  const removeFromCart = (id) => {
    setCart(prev => {
      const next = prev.filter(i => i.id !== id)
      localStorage.setItem('artesana-cart', JSON.stringify(next))
      return next
    })
  }

  const updateQty = (id, delta) => {
    setCart(prev => {
      const next = prev
        .map(i => i.id === id ? { ...i, cantidad: i.cantidad + delta } : i)
        .filter(i => i.cantidad > 0)
      localStorage.setItem('artesana-cart', JSON.stringify(next))
      return next
    })
  }

  const clearCart = () => {
    setCart([])
    localStorage.removeItem('artesana-cart')
  }

  const parsePrice = (precio) => {
    if (typeof precio === 'number') return precio
    const match = String(precio).match(/(\d+(?:[,.]\d+)?)/)
    if (!match) return 0
    return parseFloat(match[1].replace(',', '.')) || 0
  }

  const total = cart.reduce((sum, i) => sum + parsePrice(i.precio) * i.cantidad, 0)
  const itemCount = cart.reduce((sum, i) => sum + i.cantidad, 0)

  return (
    <CartContext.Provider value={{
      cart, addToCart, removeFromCart, updateQty, clearCart,
      total, itemCount, isOpen, setIsOpen, parsePrice
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
