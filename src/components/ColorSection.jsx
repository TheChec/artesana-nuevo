'use client'

import { useState, useRef } from 'react'
import styles from './ColorSection.module.css'

export default function ColorSection({ colores }) {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)

  const toggle = () => {
    if (!isOpen) {
      ref.current.style.height = ref.current.scrollHeight + 'px'
    } else {
      ref.current.style.height = '0'
    }
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.botonColores}>
        <button onClick={toggle}>Ver colores disponibles</button>
      </div>
      <div ref={ref} className={styles.colores}>
        {colores.map((color, i) => (
          <div key={i} className={styles.colorItem}>
            <img src={color.img} alt={color.nombre} loading="lazy" decoding="async" />
            <p>{color.nombre}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
